<template>
  <div class="row">
    <div class="row__inner">

      <div class="tile" v-for="photo in photos" :key="photo.src">
        <div class="tile__media">
          <img :src="require(`@/assets/img/${photo.src}`)" class="tile__img" />
        </div>
        <div class="tile__details">
          <div class="tile__title">
            {{ photo.title }}
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<style scoped>
* {
  box-sizing: border-box;
}
h1,
p {
  text-align: center;
}
p {
  width: 100%;
  max-width: 500px;
  margin: auto;
}
a:link,
a:hover,
a:active,
a:visited {
  transition: color 150ms;
  color: #95a5a6;
  text-decoration: none;
}
a:hover {
  color: #7f8c8d;
  text-decoration: underline;
}

.row {
  overflow: scroll;
  width: 800px;
}
.row__inner {
  transition: 450ms transform;
  font-size: 0;
  white-space: nowrap;
  margin: 70.3125px 0;
  padding-bottom: 10px;
}
.tile {
  position: relative;
  display: inline-block;
  width: 250px;
  height: 140.625px;
  margin-right: 10px;
  font-size: 20px;
  cursor: pointer;
  transition: 450ms all;
  transform-origin: center left;
}
.tile__img {
  width: 250px;
  height: 140.625px;
  object-fit: cover;
}
.tile__details {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  font-size: 10px;
  opacity: 0;
  transition: 450ms opacity;
}
.tile__details:before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  display: #000;
}
.tile:hover .tile__details {
  opacity: 1;
}
.tile__title {
  position: static;
  bottom: 0;
  padding: 5px;
  text-align: center;
  background-color: #eee;
}
.row__inner:hover {
  transform: translate3d(-62.5px, 0, 0);
}
.row__inner:hover .tile {
  opacity: 0.3;
}
.row__inner:hover .tile:hover {
  transform: scale(1.5);
  opacity: 1;
}
.tile:hover ~ .tile {
  transform: translate3d(125px, 0, 0);
}
</style>
<script>
export default {
  name: 'Carousel',
  data() {
    return {
      photos: [{
        src: 'wp-1.jpg',
        title: 'Teams greet each other'
      }, {
        src: 'wp-2.jpg',
        title: 'Discussing the strategy'
      }, {
        src: 'wp-3.jpg',
        title: 'The first attack'
      }, {
        src: 'wp-4.jpg',
        title: 'A goalie\'s view'
      }, {
        src: 'wp-5.jpg',
        title: 'Wonderful supporters'
      }, {
        src: 'wp-6.jpg',
        title: 'Team introductions'
      }, {
        src: 'wp-7.jpg',
        title: 'Good, tactical attacking'
      }]
    };
  }
}
</script>