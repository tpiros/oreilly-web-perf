<template>
  <div class="card card-custom bg-white border-white border-0">
    <div class="card-custom-img"></div>
    <div class="card-custom-avatar">
      <img class="img-fluid" src="../assets/img/author.jpg" alt="Avatar" />
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
        <img src="../assets/img/waterpolo-hun-goal.gif" alt="The winning shot" width="550" />
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

// function fibonacci(num) {
//   if (num <= 1) return 1;
//   return fibonacci(num - 1) + fibonacci(num - 2);
// }
// /* eslint-disable no-console */
// console.log(`Just for fun: ${fibonacci(43)}`);

import Carousel from './Carousel.vue';
export default {
  name: 'Article',
  components: {
    Carousel
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
  background-image: url('../assets/img/water-polo-card-title.jpg');
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
  width: 100px;
  height: 100px;
}
</style>