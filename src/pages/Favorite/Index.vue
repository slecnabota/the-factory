<template>
    <div class="favorite">
        <div class="container">
            <h1>Избранное</h1>
            <div v-if="favoritePhotos.length === 0">
                <p>Нет избранных.</p>
            </div>
            <div v-else class="favorite-inner">
                <div v-for="photo in favoritePhotos" :key="photo.id">
                    <div class="photo" :style="`background-image: url(${photo.urls.regular})`"></div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'FavoritePage',
    computed: {
        favoritePhotos() {
            const vuexFavorites = this.$store.state.favorites;
            const localStorageFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
            const allFavorites = [...vuexFavorites, ...localStorageFavorites];
            const uniqueFavorites = allFavorites.filter((photo, index, self) =>
                index === self.findIndex((p) => p.id === photo.id)
            );

            return uniqueFavorites;
        },
    },
};
</script>
  
<style lang="scss" scoped>
.favorite {
    padding-bottom: 100px;

    h1 {
        color: #000;
        text-align: center;
        font-size: 72px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin: 100px 0;

        @media(max-width: 1600px) {
            font-size: 54px;
            margin: 60px 0;
        }

        @media(max-width: 1024px) {
            font-size: 42px;
        }

        @media(max-width: 475px) {
            margin: 50px 0;
            font-size: 36px;
        }
    }
}

.favorite-inner {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 25px;
    row-gap: 25px;

    @media(max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width: 475px) {
        grid-template-columns: repeat(1, 1fr);
    }
}

.photo {
    width: 100%;
    height: 450px;
    border-radius: 8px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;

    @media(max-width: 1600px) {
        height: 400px;
    }

    @media(max-width: 1200px) {
        height: 350px;
    }

    @media(max-width: 1024px) {
        height: 320px;
    }


}</style>
  