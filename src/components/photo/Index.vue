<template>
  <div class="photo-list">

    <router-link v-for="(photo, index) in photos" :key="index" :to="'/photo/' + photo.id">
      <div class="photo" :style="`background-image: url(${photo.urls.regular})`">
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'PhotoList',
  props: ['photos']
}
</script>
<style scoped lang="scss">
.photo {
  width: 100%;
  height: 450px;
  background-repeat: no-repeat;
  border-radius: 8px;

  @media(max-width: 1600px) {
    height: 400px;
  }

  @media(max-width: 1200px) {
    height: 350px;
  }

  @media(max-width: 1024px) {
    height: 320px;
  }

  &-list {
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
}</style>