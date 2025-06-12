<!-- 表单展示 -->
<template>

    <div class="my-box">

        <!-- column1 -->
        <div class="fc-box">
            <FormCreate ref="myForm"
                        v-model="fcData"
                        :rule="rule"
                        :option="options"
                        :value.sync="itemValue" />
        </div>

        <!-- column2 -->
        <div class="mock-box">
            <el-button type="primary" plain class="mock-btn" @click="onChangeMock(1)">模拟数据1</el-button>
            <el-button type="primary" plain class="mock-btn" @click="onChangeMock(2)">模拟数据2</el-button>
        </div>

        <!-- column3 -->
        <div class="right">
            <div class="json-viewer-title">输入的内容：</div>

            <!--
                expand-depth 展示深度, 默认1级
                expanded 默认展开, 默认值: false
            -->
            <JsonViewer :value="fcData"
                        copyable boxed sort theme="light"
                        :expand-depth="2"
                        :expanded="true"
                        class="json-viewer-box"></JsonViewer>
        </div>
    </div>

</template>

<script setup lang="ts">

    import { Prop, PropType, nextTick, onMounted, ref, watch } from 'vue'
    import { ElMessage } from 'element-plus';
    import myCommon from '../../utils/myCommon';
    import FcDesigner, { Config, designerForm, formCreate } from '@form-create/vant-designer'
    import FormCreate, { Api, FormCreateProps, Options } from '@form-create/vant'
    import { formCofnig, _testData1, _testData2, myFunc } from './_designerConfig';



    const myForm = ref<(Api & FormCreateProps) | null>(null);


    const fcData = ref({});      // 整个表单的值
    const itemValue = ref(null); // 当前操作项的值
    const rule = ref([]); // 规则, 配置表单包含那些项目；如：输入框、单选、开关 等


    const fcApi = ref<Api>();

    // 操作事件 + 表单展示方式 配置
    const options = ref({
        // 提交时触发
        onSubmit: (formData: Object, api: Api) => {
            console.log(JSON.stringify(formData));
        },
        // 当前操作项内容事件
        onChange: (field: string, val: any, rule: Rule, api: Api, setFlag: boolean) => {
            // console.log(field, val, rule, api, setFlag);
        },
        // 挂载完毕
        onMounted: (api: Api) => {
            fcApi.value = api;
        },
        resetBtn: true,
        ...formCofnig,
    });



    onMounted(() => {

    });


    // 切换模拟数据
    // 最好在 js 中设置rule规则, 因为json 数据自动将一些东西给剔除出去, 如：function
    // 所以在 js 中设置, 方便补全被剔除出的东西
    function onChangeMock(index: number) {

        // 清除上次设置的表单与表单数据
        fcApi.value.rule.length = 0;
        const keys = Object.keys((fcApi.value.form || {}));
        keys.forEach(key => {
            fcApi.value.removeField(key);
        });


        nextTick(() => {

            if (index == 1) {
                // 使用深拷贝, 保持与后端请求的的数据一致
                // 原因：export const _testData1 是 js 的 object 对象,
                //       不是纯粹的 json 数据, 纯 json 数据是不会包含 function 函数对象的
                const mockData = myCommon.Copy(_testData1);

                // 补全函数操作
                mockData.forEach(item => {
                    if (item.type == 'uploader') {
                        item.props.afterRead = myFunc.afterRead;
                    }
                });

                // 设置新的规则
                fcApi.value.rule.push(...mockData);
            }


            if (index == 2) {

                // 还原真实效果
                const mockData = myCommon.Copy(_testData2);

                // 补全函数操作
                mockData.forEach(item => {
                    if (item.type == 'uploader') {
                        item.props.afterRead = myFunc.afterRead;
                    }
                });

                // 设置新的规则
                fcApi.value.rule.push(...mockData);
            }
        });
    }

</script>
<style lang="less" scoped>


    .my-box {
        height: 100%;
        padding: 20px;
        display: flex;
        justify-content: left;
        column-gap: 45px;
    }

    .mock-box {
        margin-top: 32px;
        display: flex;
        justify-content: left;
        flex-direction: column;
    }

    .mock-btn {
        margin-left: 0px;
        margin-bottom: 15px;
    }


    .json-viewer-title {
        height: 32px;
        line-height: 32px;
    }
    .json-viewer-box {
        width: 650px;
        height: calc(100vh - 120px - 32px);
        border: 1px solid #ccc;
        font-family: monospace;
        font-size: 20px;
    }


    /******** 重写样式(原样式太淡了, 不操作都不知道哪儿的输入框) ********/

    .van-field__control--custom {
        --border: 1px solid #ddd;
        border: 0.8px solid #eee;
        background-color: #f8f8f8;
        border-radius: 5px;
    }

    .fc-box .form-create-m {
        width: 360px;
        min-height: calc(100vh - 120px);
        max-height: calc(100vh - 120px);
        border: 5px solid #ddd;
        border-radius: 15px;
        padding: 15px 10px;
        margin: 0 auto;
        overflow-y: auto;
    }

    .fc-box /deep/ .van-field__control--custom input,
    .fc-box /deep/ .van-field__control--custom textarea,
    .fc-box /deep/ .van-field__control--custom .van-cell--clickable {
        --border: 1px solid #ddd;
        border: 0.8px solid #eee;
        background-color: #f8f8f8;
        border-radius: 5px;
    }

    /** 选择器,右侧箭头 **/
    .fc-box /deep/ .van-field__control--custom .van-icon-arrow {
        display: flex;
        align-items: center;
        margin-top: 1px;
    }

</style>
