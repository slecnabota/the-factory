<template>
    <div class="home">
        <div class="home-top">
            <div class="home-search">
                <input type="text" class="home-search__input" placeholder="Поиск"  v-model="searchText">
                <svg @click="search" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M22.8596 22.1821L15.8614 15.1838C17.315 13.5699 18.2084 11.442 18.2084 9.10414C18.2083 4.08416 14.1242 0 9.10418 0C4.08416 0 0 4.08416 0 9.10418C0 14.1242 4.08416 18.2084 9.10418 18.2084C11.442 18.2084 13.5699 17.315 15.1839 15.8614L22.1821 22.8596C22.2756 22.9532 22.3983 23 22.5209 23C22.6435 23 22.766 22.9532 22.8597 22.8596C23.0468 22.6724 23.0468 22.3692 22.8596 22.1821ZM9.10418 17.25C4.61294 17.25 0.958363 13.5959 0.958363 9.10418C0.958363 4.61249 4.61294 0.958318 9.10418 0.958318C13.5954 0.958318 17.25 4.61244 17.25 9.10418C17.25 13.5959 13.5954 17.25 9.10418 17.25Z"
                        fill="black" />
                </svg>
            </div>
        </div>
        <div class="photos">
            <div class="container">
                <photo-list :photos="photos" />
            </div>
        </div>

    </div>
</template>
<script>
import PhotoList from '../../components/photo/Index.vue'
import axios from 'axios'
export default {
    name: 'HomePage',
    components: { PhotoList, },
    data() {
        return {
            photos: [],
            searchText: "",
        }
    },
    created() {
        const apiKey = 'H9JWlp4BcvouJ2nnoKVpl-Z_uX3MPLW_dxJ-GD9132w'
        let apiUrl = `https://api.unsplash.com/photos/random/?count=9&query=art&client_id=${apiKey}`


        axios.get(apiUrl)
            .then(response => {
                this.photos = response.data
            })
            .catch(error => {
                console.error('Error fetching photos:', error)
            })
    },
    methods:{
        search() {
        const apiKey = 'H9JWlp4BcvouJ2nnoKVpl-Z_uX3MPLW_dxJ-GD9132w'
        let apiUrl = `https://api.unsplash.com/photos/random/?count=9&query=${this.searchText}&client_id=${apiKey}`

        axios.get(apiUrl)
            .then(response => {
                this.photos = response.data
            })
            .catch(error => {
                console.error('Error fetching photos:', error)
            })
    },
    }
    
}
</script>
<style lang="scss" scoped>
.home {
    &-top {
        background-image: url('../../assets/img/home-background.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        height: 250px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;

        &::before { 
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 1;
        }

        @media(max-width: 1600px) {
            height: 200px;
        }
        @media(max-width: 1024px){
            padding: 0 20px;
            height: 230px;
        }
        @media(max-width: 550px){
            background-image: url('../../assets/img/home-bg-mob.png');
        }
    }

    &-search {
        background: #FFF;
        padding: 20px 25px;
        min-width: 850px;
        position: relative;
        z-index: 2;
        display: flex;
        align-items: center;
        column-gap: 10px;

        @media(max-width: 1600px) {
            padding: 15px 20px;
        }
        @media(max-width: 1024px){
            width: 100%;
            min-width: 100%;
        }
        &__input {
            width: 100%;
            color: #000;
            font-family: 'Roboto', sans-serif;
            font-size: 24px;
            font-weight: 300;
            background: transparent;
            outline: none;
            border: none;

            @media(max-width: 1600px) {
                font-size: 22px;
            }

            &::placeholder {
                color: #000;
                font-weight: 300;
            }
        }

        & svg {
            cursor: pointer;
        }
    }

    & .photos {
        margin: 100px 0;
        @media(max-width: 1024px){
            margin: 45px 0 100px;
        }
    }

    & .back-to-top {
        width: 50px;
        height: 50px;
        position: fixed;
        bottom: 50px;
        right: 110px;

        cursor: pointer;
    }
}
</style>