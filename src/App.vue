<template>
    <el-container class="app-box">
        <el-header>
            <div class="el-header-left">etcd 管理工具</div>
            <div class="el-header-right">Header</div>
        </el-header>
        <el-container class="app-buttom-box">
            <el-aside>
                <el-menu :router="true" default-active="menuActive" :collapse="false" @select="menuSelect" class="el-menu-vertical-demo">
                    <template v-for="(item,idx) in menuList">
                        <el-menu-item v-if="!(item.children && item.children.length > 0)" :index="item.path">{{ item.name }}</el-menu-item>
                        <el-sub-menu v-if="item.children && item.children.length > 0" :index="item.path">
                            <template #title>
                                <span>{{ item.name }}</span>
                            </template>
                            <el-menu-item :index="child.path" v-for="(child,chIdx) in item.children">{{ child.name }}</el-menu-item>
                        </el-sub-menu>
                    </template>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<script setup lang="ts">
    import { nextTick, onMounted, reactive, ref } from "vue"
    import { RouteRecordRaw } from "vue-router";
    import myRouter from "./utils/myRouter"

    const menuActive = ref('');
    const menuList = ref<ReadonlyArray<RouteRecordRaw>>([]);

    onMounted(() => {
        menuList.value = myRouter.options.routes.filter(s => !!s.name);
    })

    const menuSelect = (a, b, c, d) => {
        // menuActive.value = a
        console.log(a, b, c, d);

        nextTick(() => {
            console.log('app = ', menuActive.value);
        })
    }

</script>


<style lang="less" scoped>

    .app-box {
        width: 100%;
        height: 100vh;
        font-size: 16px;
    }

    .app-buttom-box {
        width: 100%;
        height: calc(100vh - 56px);
    }


    .el-header {
        display: flex;
        padding: 0px;
        height: 56px;
        align-items: center;
        background: var(--el-color-primary-light-7);
    }

    .el-header-left {
        width: 210px;
        padding: 0px 20px;
        box-sizing: border-box;
    }

    .el-header-right {
        width: calc(100% - 210px);
        padding: 0px 20px;
        box-sizing: border-box;
    }


    .el-aside {
        width: 210px;
        background: var(--el-color-primary-light-8);
        overflow-x: hidden;
    }

    .el-main {
        width: calc(100% - 200px);
        padding: 0px;
        --background: var(--el-color-primary-light-9);
    }

    .el-menu-vertical-demo {
        width: 210px;
        height: calc(100vh - 56px);
        background: var(--el-color-primary-light-8);
    }
</style>
