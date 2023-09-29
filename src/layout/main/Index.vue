<template>
    <div class="main-page">
        <header-main />
        <router-view />
    </div>
</template>

<script>
import HeaderMain from './header/Header.vue'
    export default{
        name: 'MainPage',
        components:{
            HeaderMain, 
        }
    }
</script>
<style lang="scss" scoped>
</style>