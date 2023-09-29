<template>
    <div class="header" id="header">
        <div class="container">
            <div class="header-wrapper">
                <img src="../../../assets/img/logo.svg" alt="" class="header-logo">
                <div class="header-inner">
                    <router-link v-if="showLink" to="/home" class="header-link">
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M22.8596 22.1821L15.8614 15.1838C17.315 13.5699 18.2084 11.442 18.2084 9.10414C18.2083 4.08416 14.1242 0 9.10418 0C4.08416 0 0 4.08416 0 9.10418C0 14.1242 4.08416 18.2084 9.10418 18.2084C11.442 18.2084 13.5699 17.315 15.1839 15.8614L22.1821 22.8596C22.2756 22.9532 22.3983 23 22.5209 23C22.6435 23 22.766 22.9532 22.8597 22.8596C23.0468 22.6724 23.0468 22.3692 22.8596 22.1821ZM9.10418 17.25C4.61294 17.25 0.958363 13.5959 0.958363 9.10418C0.958363 4.61249 4.61294 0.958318 9.10418 0.958318C13.5954 0.958318 17.25 4.61244 17.25 9.10418C17.25 13.5959 13.5954 17.25 9.10418 17.25Z"
                                fill="white" />
                        </svg>
                        <span>Поиск</span>
                    </router-link>
                    <router-link v-if="showLink" to="/favorite" class="header-link">
                        <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M18.4896 0C15.7166 0 13.4262 2.57568 12.5 3.79131C11.5738 2.57568 9.28345 0 6.5104 0C2.92056 0 0 3.30049 0 7.35679C0 9.56982 0.878418 11.6323 2.41597 13.0437C2.43833 13.0824 2.46582 13.118 2.49785 13.15L12.1323 22.7646C12.234 22.8658 12.3667 22.9167 12.5 22.9167C12.6333 22.9167 12.7665 22.8658 12.8683 22.7641L22.8231 12.8128L22.9258 12.7131C23.0072 12.6363 23.0876 12.5585 23.1776 12.4588C23.2152 12.4217 23.2462 12.38 23.2702 12.3347C24.3866 10.9675 25 9.2041 25 7.35679C25 3.30049 22.0795 0 18.4896 0ZM22.4035 11.7488C22.3892 11.7656 22.376 11.7833 22.3643 11.8017C22.3155 11.8576 22.2621 11.9069 22.2092 11.9573L12.4995 21.6599L3.35288 12.5315C3.32339 12.4735 3.28218 12.4207 3.23184 12.3764C1.8397 11.1608 1.04165 9.33125 1.04165 7.35679C1.04165 3.87471 3.49478 1.0417 6.5104 1.0417C9.49199 1.0417 12.0366 4.93066 12.0621 4.96982C12.2543 5.26685 12.7457 5.26685 12.9379 4.96982C12.9634 4.93066 15.508 1.0417 18.4896 1.0417C21.5052 1.0417 23.9583 3.87476 23.9583 7.35679C23.9583 8.99761 23.406 10.5576 22.4035 11.7488Z"
                                fill="white" />
                        </svg>
                        <span>Избранное</span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'HeaderMain',
    methods: {
        showLink() {
            return this.$route.name !== 'HomePage';
        },
    }
}
</script>
<style lang="scss" scoped>
.header {
    background: #000000;
    padding: 40px 0;
    @media(max-width: 1600px){
        padding: 20px 0;
    }
    &-logo{
        width: 185px;
        @media(max-width: 1600px){
            width: 150px;
        }
        @media(max-width: 1024px){
            width: 120px;
        }
        @media(max-width: 475px){
            width: 85px;
        }
    }
    &-wrapper{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    &-inner{
        display: flex;
        align-items: center;
        column-gap: 40px;
    }
    &-link {
        display: flex;
        align-items: center;
        column-gap: 10px;
        color: #FFF;
        font-size: 18px;
        font-weight: 400;
        @media(max-width: 550px){
            & span{
                display: none;
            }
        }
    }
}
</style>