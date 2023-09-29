<template>
    <div class="photo-detail-page" v-if="photo" :style="`background-image:url(${photo.urls?.regular})`">
        <div class="container">
            <div class="photo-detail">
                <div class="photo-detail__inner">
                    <div class="photo-info">
                        <img :src="photo.user.profile_image.medium" alt="Author Avatar" class="photo-ava">
                        <div class="photo-user">
                            <h3>{{ photo.user.name }}</h3>
                            <p>@{{ photo.user.username }}</p>
                        </div>
                    </div>
                    <div class="photo-btn">
                        <div class="btn photo-fav" @click="addToFavoritesHandler">
                            <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_11_271)">
                                    <rect x="4.93164" y="4.93164" width="49.0684" height="49.0684" rx="8" fill="white" />
                                </g>
                                <path
                                    d="M34.652 18.1184C31.9926 18.1184 29.7961 20.5886 28.9078 21.7544C28.0195 20.5886 25.823 18.1184 23.1636 18.1184C19.7208 18.1184 16.9199 21.2837 16.9199 25.1738C16.9199 27.2962 17.7624 29.2741 19.2369 30.6278C19.2584 30.6648 19.2847 30.699 19.3154 30.7297L28.5551 39.9503C28.6527 40.0474 28.78 40.0962 28.9078 40.0962C29.0356 40.0962 29.1634 40.0474 29.261 39.9499L38.808 30.4063L38.9065 30.3107C38.9846 30.237 39.0616 30.1624 39.1479 30.0668C39.184 30.0312 39.2138 29.9912 39.2367 29.9478C40.3074 28.6366 40.8957 26.9454 40.8957 25.1738C40.8957 21.2837 38.0948 18.1184 34.652 18.1184ZM38.4055 29.3858C38.3919 29.402 38.3792 29.419 38.368 29.4366C38.3211 29.4902 38.2699 29.5375 38.2192 29.5858L28.9073 38.8909L20.1354 30.1365C20.1072 30.0809 20.0676 30.0302 20.0194 29.9878C18.6842 28.8219 17.9189 27.0674 17.9189 25.1738C17.9189 21.8344 20.2715 19.1174 23.1636 19.1174C26.023 19.1174 28.4634 22.8471 28.4878 22.8846C28.6722 23.1695 29.1434 23.1695 29.3278 22.8846C29.3522 22.8471 31.7926 19.1174 34.652 19.1174C37.5441 19.1174 39.8967 21.8344 39.8967 25.1738C39.8967 26.7474 39.3669 28.2434 38.4055 29.3858Z"
                                    fill="black" />
                                <defs>
                                    <filter id="filter0_d_11_271" x="0.931641" y="0.931641" width="57.0684" height="57.0684"
                                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset />
                                        <feGaussianBlur stdDeviation="2" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix"
                                            result="effect1_dropShadow_11_271" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_11_271"
                                            result="shape" />
                                    </filter>
                                </defs>
                            </svg>

                        </div>
                        <a class="btn photo-download" :href="photo.links.download" download="photo.jpg">
                            <img src="../../assets/img/download.svg" alt="">
                            <span>Download</span>
                        </a>
                    </div>
                </div>
                <img :src="photo.urls.small" alt="Photo" class="photo-detail__main">
            </div>

        </div>
    </div>
    <div v-else>
        Loading...
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'PhotoDetailPage',
    data() {
        return {
            photo: ''
        };
    },
    methods: {
        addToFavoritesHandler() {
            this.$store.commit('addToFavorites', this.photo);
        },
        fetchPhotoData() {
            const photoId = this.$route.params.id;
            const apiKey = 'H9JWlp4BcvouJ2nnoKVpl-Z_uX3MPLW_dxJ-GD9132w';
            const apiUrl = `https://api.unsplash.com/photos/${photoId}?client_id=${apiKey}`;

            axios.get(apiUrl)
                .then(response => {
                    this.photo = response.data;
                })
                .catch(error => {
                    console.error('Error fetching photo data:', error);
                });
        },
    },
    created() {
        this.fetchPhotoData();
    }
}
</script>
<style scoped lang="scss">
.photo {
    &-detail {
        &-page {
            background-repeat: no-repeat;
            background-size: cover;
            margin-bottom: 200px;
            position: relative;

            &::after {
                width: 100%;
                height: 100%;
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                background: rgba(0, 0, 0, 0.50);
                backdrop-filter: blur(4px);
                z-index: 0;

                @media(max-width: 550px) {
                    position: static;
                }
            }

            @media(max-width: 550px) {
                background-image: none !important;
            }

            .container {
                position: relative;
                z-index: 1;
            }
        }

        &__main {
            display: block;
            width: 50%;
            margin: 0 auto;
            position: relative;
            bottom: -100px;
            @media(max-width: 550px){
                border-radius: 8px;
                width: 100%;
                position: static;
            }
        }

        &__inner {
            padding: 45px 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }

    &-user {
        h3 {
            color: #F2F2F2;
            font-size: 30px;
            font-weight: 400;

            @media(max-width: 550px) {
                color: #000;
                font-size: 18px;
            }
        }

        p {
            color: #F2F2F2;
            font-size: 18px;
            font-weight: 400;
            @media(max-width: 550px){
                font-size: 14px;
                color: #BDBDBD;
            }
        }
    }

    &-info {
        display: flex;
        align-items: center;
        column-gap: 10px;
        & img{
            @media(max-width: 550px){
                width: 45px;
                height: 45px;
            }
        }
    }

    &-btn {
        display: flex;
        align-items: center;
        column-gap: 20px;
        & span{
            @media(max-width: 550px){
                display: none;
            }
        }
    }

    &-ava {
        width: 55px;
        height: 55px;
        border-radius: 8px;
        border: 1px solid #FFF;
    }

    &-download {
        display: flex;
        align-items: center;
        column-gap: 15px;
        border-radius: 8px;
        border: 1px solid #FFF200;
        background: #FFF200;
        box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
        padding: 12px 25px;
        color: #000;
        font-size: 20px;
        font-weight: 400;
        @media(max-width: 550px){
            padding: 12px;
        }
    }


}

.btn {
    cursor: pointer;
}
</style>