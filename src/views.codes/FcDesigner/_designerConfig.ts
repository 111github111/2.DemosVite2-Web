import { UploaderFileListItem } from 'vant'
import img1 from '../../assets/img/cropper1.jpg?url';

// 表单配置数据
export const formCofnig = {
    "resetBtn": { "show": true, "innerText": "重置" },
    "submitBtn": { "show": true, "innerText": "提交" },
    "form": { "labelWidth": "100%", "colon": true, "inputAlign": "left", "labelAlign": "left" },
}

// 表单测试数据
export const _testData1 = [
    {
        "type": "input",
        "field": "inputField",
        "title": "输入框",
        "info": "",
        "$required": false,
        "_fc_id": "id_F4kbmbjghlv4acc",
        "name": "ref_Fwrtmbjghlv4adc",
        "display": true,
        "hidden": false,
        "_fc_drag_tag": "input"
    },
    {
        "type": "checkbox",
        "field": "CheckboxField",
        "title": "多选框",
        "info": "",
        "effect": { "fetch": "" },
        "$required": false,
        "optionsTo": "props.options",
        "options": [
            { "text": "选项01", "value": "1" },
            { "text": "选项02", "value": "2" },
            { "text": "选项03", "value": "3" }
        ],
        "_fc_id": "id_Ffkembkfk0eabcc",
        "name": "ref_F51ymbkfk0eabdc",
        "display": true,
        "hidden": false,
        "_fc_drag_tag": "checkbox"
    },
    {
        "type": "radio",
        "field": "RadioField",
        "title": "单选框",
        "info": "",
        "effect": { "fetch": "" },
        "$required": false,
        "optionsTo": "props.options",
        "options": [
            { "text": "选项01", "value": "1" },
            { "text": "选项02", "value": "2" },
            { "text": "选项03", "value": "3" }
        ],
        "_fc_id": "id_Fsazmbkfk18bbfc",
        "name": "ref_Ft5umbkfk18bbgc",
        "display": true,
        "hidden": false,
        "_fc_drag_tag": "radio"
    },
    {
        "type": "switch",
        "field": "SwitchField",
        "title": "开关",
        "info": "",
        "$required": false,
        "_fc_id": "id_Fqnzmbkfk2vybic",
        "name": "ref_F0r5mbkfk2vybjc",
        "display": true,
        "hidden": false,
        "_fc_drag_tag": "switch"
    },
    {
        "type": "rate",
        "field": "RateField",
        "title": "评分",
        "info": "",
        "$required": false,
        "_fc_id": "id_Fpgrmbkfk3sjblc",
        "name": "ref_Fruembkfk3sjbmc",
        "display": true,
        "hidden": false,
        "_fc_drag_tag": "rate"
    },
    {
        "type": "cascader",
        "field": "CascaderField",
        "title": "级联选择器",
        "info": "",
        "effect": { "fetch": "" },
        "$required": false,
        "props": {
            "options": [
                {
                    "text": "选项201",
                    "value": "1",
                    "children": [
                        {
                            "text": "选项101",
                            "value": "2",
                            "children": [
                                { "text": "选项01", "value": "3" },
                                { "text": "选项02", "value": "4" },
                                { "text": "选项03", "value": "5" }
                            ]
                        },
                        {
                            "text": "选项102",
                            "value": "6",
                            "children": [
                                { "text": "选项01", "value": "7" },
                                { "text": "选项02", "value": "8" },
                                { "text": "选项03", "value": "9" }
                            ]
                        },
                        {
                            "text": "选项103",
                            "value": "10",
                            "children": [
                                { "text": "选项01", "value": "11" },
                                { "text": "选项02", "value": "12" },
                                { "text": "选项03", "value": "13" }
                            ]
                        }
                    ]
                },
                {
                    "text": "选项202",
                    "value": "14",
                    "children": [
                        {
                            "text": "选项101",
                            "value": "15",
                            "children": [
                                { "text": "选项01", "value": "16" },
                                { "text": "选项02", "value": "17" },
                                { "text": "选项03", "value": "18" }
                            ]
                        },
                        {
                            "text": "选项102",
                            "value": "19",
                            "children": [
                                { "text": "选项01", "value": "20" },
                                { "text": "选项02", "value": "21" },
                                { "text": "选项03", "value": "22" }
                            ]
                        },
                        {
                            "text": "选项103",
                            "value": "23",
                            "children": [
                                { "text": "选项01", "value": "24" },
                                { "text": "选项02", "value": "25" },
                                { "text": "选项03", "value": "26" }
                            ]
                        }
                    ]
                },
                {
                    "text": "选项203",
                    "value": "27",
                    "children": [
                        {
                            "text": "选项101",
                            "value": "28",
                            "children": [
                                { "text": "选项01", "value": "29" },
                                { "text": "选项02", "value": "30" },
                                { "text": "选项03", "value": "31" }
                            ]
                        },
                        {
                            "text": "选项102",
                            "value": "32",
                            "children": [
                                { "text": "选项01", "value": "33" },
                                { "text": "选项02", "value": "34" },
                                { "text": "选项03", "value": "35" }
                            ]
                        },
                        {
                            "text": "选项103",
                            "value": "36",
                            "children": [
                                { "text": "选项01", "value": "37" },
                                { "text": "选项02", "value": "38" },
                                { "text": "选项03", "value": "39" }
                            ]
                        }
                    ]
                }
            ]
        },
        "_fc_id": "id_Fhnxmbkfk53oboc",
        "name": "ref_F18bmbkfk53obpc",
        "display": true,
        "hidden": false,
        "_fc_drag_tag": "cascader"
    },
    {
        // 说明一下, uploader 是 vant 的组件, 不是 element-plus 的组件
        "type": "uploader",
        "field": "UploadImage01",
        "title": "上传",
        "info": "",
        "$required": false,
        value: [],
        "props": {
            "action": "#",
            'maxCount': 1,

            // ( 这里是 vant 的 uploader, 存在问题, 所以这里没用到 )
            // // 必须加入 onSuccess, 否则 formCreate 获取不到值
            // // 文档对应位置：https://www.form-create.com/v2/vant/components/uploader.html
            // "onSuccess": function (res, file) {
            //     console.log(res.data);
            //     file.url = res.data.url;
            // },

            // 文件读取完成后的回调函数, 返回布尔值
            // https://develop365.gitlab.io/vant/zh-CN/uploader/
            "afterRead": function (item: UploaderFileListItem) {
                item.status = 'uploading';
                item.message = '上传中...';


                // vant的upload上传后不会回写数据到formCreate的临时解决方法：
                // 1. 最外层写上： value: [], 解决 this._object.modelValue 为 null 的问题
                // 2. 通过 this._object.modelValue 拿到表单中当前项值的引用
                // 3. myValue.push(img1); 写入到引用对象内即可
                const myValue = this._object.modelValue as string[];

                return new Promise((resolve, reject) => {

                    setTimeout(() => {
                        item.url = img1;
                        item.objectUrl = img1;

                        item.status = 'done';
                        item.message = '上传成功';

                        myValue.push(img1);
                        resolve(img1);
                    }, 1500);
                });
            }
        },
        "_fc_id": "id_F23kmbkfk60abrc",
        "name": "ref_Fsk7mbkfk60absc",
        "display": true,
        "hidden": false,
        "_fc_drag_tag": "uploader"
    }
]
