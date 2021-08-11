<template>
  <div class="card card-custom bg-white border-white border-0">
    <div class="card-custom-img"></div>
    <div class="card-custom-avatar">
      <img class="img" src="https://res.cloudinary.com/tamas-demo/image/upload/w_100,h_100,f_auto,q_auto,c_thumb,g_face,r_max/web-perf/author.jpg" alt="Avatar" />
    </div>
    <div class="card-header">
      <p class="text-muted"><small><strong>Written by</strong>: Jennifer McMara - 2019.01.12</small></p>
    </div>
    <div class="card-body" style="overflow-y: auto">
      <h4 class="card-title">Winning shot in the final</h4>
      <p class="card-text">
        Two teams have prevailed in the final for the MadeUp Waterpolo Tournament. Check out the video below where the home side's final, winning shot is gorgeously placed into the top left corner of the net.
      </p>
      <p class="text-center">
        <video muted controls autoplay v-if="this.connection === 'fast'" crossOrigin="anonymous" src="https://res.cloudinary.com/tamas-demo/video/upload/c_scale,w_550/v1547201869/web-perf/IMG_0460.mp4"></video>

        <img src="https://res.cloudinary.com/tamas-demo/video/upload/c_scale,w_550/v1547201869/web-perf/IMG_0460.jpg" v-show="offline || this.connection === 'slow'"/>

      </p>
      <p class="card-text">
        In the game between Hungary and France the audience witnessed a whopping 16 goals shared by the sides. The final shot and its class is only shown by the most talented players and there are no shortage of such in both of these teams. However player #9 managed to swing in a shot in the final seconds of the game, giving his team a well deserved win.
      </p>
      <p class="card-text">
        Take a look at some additional photos from the final:
        <Carousel />
      </p>
      <p class="card-text">
        The two teams will have a well deserved rest now - the next tournament will start in 3 months. Until that time they have the chance to improve their game. 
      </p>
    </div>
  </div>
</template>

<script>
import Carousel from './Carousel.vue';
export default {
  name: 'Article',
  data: () => ({
    connection: 'fast',
    offline: false
  }),
  components: {
    Carousel
  },
  mounted: function() {
    if ('onLine' in navigator) {
      if (!navigator.onLine) {
        this.connection = null;
        this.offline = true;
      }
    }
    if (navigator.connection && navigator.connection.effectiveType.length > 0) {
      switch (navigator.connection.effectiveType) {
        case 'slow-2g':
        case '2g':
        case '3g':
          this.connection = 'slow';
          break;
        case '4g':
          this.connection = 'fast';
          break;
        default: 
          this.connection = 'fast';
      }
    } else {
      if (window.screen.height / window.screen.width === 1366 / 1024) {
        this.connection = 'fast';
      } else if (window.screen.height / window.screen.width === 1112 / 834) {
        this.connection = 'fast';
      } else {
        this.connection = 'slow';
      }
    }
  }
}
</script>
<style scoped>
.card-title {
  font-family: 'Anton', sans-serif;
}
.card-custom {
  overflow: hidden;
  min-height: 450px;
  width: 800px;
  box-shadow: 0 0 15px rgba(10, 10, 10, 0.3);
}

.card-custom-img {
  background-image: url('https://res.cloudinary.com/tamas-demo/image/upload/q_auto,f_auto,ar_4.0,c_crop/web-perf/water-polo-card-title.jpg');
  height: 200px;
  min-height: 200px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-color: inherit;
}

.card-custom-img::after {
  position: absolute;
  content: '';
  top: 161px;
  left: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-top-width: 40px;
  border-right-width: 0;
  border-bottom-width: 0;
  border-left-width: 545px;
  border-left-width: calc(575px - 5vw);
  border-top-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
  border-left-color: inherit;
}

.card-custom-avatar img {
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.9);
  position: absolute;
  top: 100px;
  left: 1.25rem;
}
</style>