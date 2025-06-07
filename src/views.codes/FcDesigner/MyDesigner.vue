<!-- 设计器 -->
<template>
    <div class="box">
        <FcDesigner height="calc(100vh - 56px)"
                    ref="designer"
                    :config="myConfig"
                    :rule="rules"
                    :options="options" />
    </div>
</template>
<script setup lang="ts">
    import { Prop, PropType, nextTick, onMounted, ref, watch } from 'vue'
    import { ElMessage } from 'element-plus';
    import FcDesigner, { Config, designerForm } from '@form-create/vant-designer'
    import { FormCreateProps } from '@form-create/vant'
    import { formCofnig, _testData1 } from './_designerConfig';


    // 设计器方法：ref<typeof FcDesigner.methods | null>(null);
    // 设计器配置：https://view.form-create.com/ts
    // 设计器事件：https://view.form-create.com/event
    // 静态预览表单：FcDesigner.formCreate

    // FcDesigner.formCreate    // 预览
    // FcDesigner.designerForm  // 设计器

    // designer.value.preview       // 手机 or 电脑 or 平板 预览
    // designer.value.previewStatus // 预览窗口是否打开: true/false


    const designer = ref<(typeof FcDesigner.methods) & FormCreateProps>(null);

    const rules = ref([]);
    const options = ref([]);


    // 编辑器各种参数, 选项配置
    // @ts-ignore
    const myConfig: Config = {
        showConfig: true,
        formOptions: formCofnig
    }


    onMounted(() => {

        nextTick(() => {

            // designer.value.getOptionsJson() // 获取当前设计器配置信息
            // designer.value.getJson()        // 获取当前设计的表单规则数据


            // 设置默认组件项
            designer.value.setRule(_testData1);
        });

        // 监视preview操作
        // @ts-ignore
        watch(() => designer.value.preview.state, (newVal, oldVal) => {
            if (newVal) {
                nextTick(() => {
                    // 预览对话框
                    const elOverlay = document.querySelector<HTMLDivElement>('._fd-preview-dialog');
                    elOverlay.classList.add('costom-overlay');


                    console.log('designer.value.getJson() = ', designer.value.getJson());
                })
            }
        });
    });

</script>
<style lang="less" scoped>

    .van-field__control--custom {
        --border: 1px solid #ddd;
        border: 0.8px solid #eee;
        background-color: #f8f8f8;
        border-radius: 5px;
    }

    .box /deep/ .van-field__control--custom input,
    .box /deep/ .van-field__control--custom textarea,
    .box /deep/ .van-field__control--custom .van-cell--clickable {
        --border: 1px solid #ddd;
        border: 0.8px solid #eee;
        background-color: #f8f8f8;
        border-radius: 5px;
    }

    /** 选择器,右侧箭头 **/
    .box /deep/ .van-field__control--custom .van-icon-arrow {
        display: flex;
        align-items: center;
        margin-top: 1px;
    }
</style>
<style lang="less">

    .costom-overlay {
        margin-top: 6vh;
        margin-bottom: 20px;
    }

    .costom-overlay .form-create-m {
        width: 320px;
        min-height: 472px;
        max-height: calc(100vh - 199px);
        border: 5px solid #ddd;
        border-radius: 15px;
        padding: 15px 10px;
        margin: 0 auto;
        margin-top: 10px;
        margin-bottom: 10px;
        overflow-y: auto;
    }

    .costom-overlay .van-field__control--custom input,
    .costom-overlay .van-field__control--custom textarea,
    .costom-overlay .van-field__control--custom .van-cell--clickable {
        --border: 1px solid #ddd;
        border: 0.8px solid #eee;
        background-color: #f8f8f8;
        border-radius: 5px;
    }

    /** 选择器,右侧箭头 **/
    .costom-overlay .van-field__control--custom .van-icon-arrow {
        display: flex;
        align-items: center;
        margin-top: 1px;
    }
</style>
