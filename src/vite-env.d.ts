/// <reference types="vite/client" />

declare module "*.vue" {
    import type { DefineComponent } from "vue";
    const vueComponent: DefineComponent<{}, {}, any>;
    export default vueComponent;

}

interface Date {
    toGMTString(): string
}


interface LuckySheetPCreateParam {
    container: String,
    showinfobar?: Boolean,
    data?: any,
    title?: any,
    userInfo?: any
}

interface Window {
    luckysheet: {
        create: (param: LuckySheetPCreateParam) => void,
        destroy: () => void
    }
}
