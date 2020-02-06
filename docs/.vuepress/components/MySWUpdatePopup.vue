<template>
  <SWUpdatePopup v-slot="{ enabled, reload, message, buttonText }">
    <div
      v-if="enabled"
      class="my-sw-update-popup">
      {{ message }}<br>
      <button @click="reload">{{ buttonText }}</button>
    </div>
  </SWUpdatePopup>
</template>

<script>
import SWUpdatePopup from '@vuepress/plugin-pwa/lib/SWUpdatePopup.vue'

export default {
  components: { SWUpdatePopup }
}
</script>

<style>
@keyframes drop {
  0% {
    top: -20px;
    oapcity: 0;
  }

  100% {
    top: 20px;
    opacity: 1;
  }
}

.my-sw-update-popup {
  text-align: right;
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #fff;
  color:#6a8bad;
  font-size: 19px;
  padding: 15px;
  margin: 0px 15px;
  box-shadow: 0 4px 10px rgba(17, 255, 106, 0.2);
  animation: drop 2s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
}

.my-sw-update-popup:hover {
  box-shadow: 0 1px 6px rgba(0, 0, 0, .2);
  border-color: #fefefe;
  transition: all .2s ease-in-out;
}

.my-sw-update-popup button {
  background-color: #4db6ac;
  -moz-border-radius: 28px;
  -webkit-border-radius: 28px;
  border-radius: 28px;
  border: 1px solid #18ab29;
  display: inline-block;
  cursor: pointer;
  color: #fff;
  font-family: Arial;
  font-size: 16px;
  margin: 12px 50px;
  padding:13px 30px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #2f6627;
}

.my-sw-update-popup button:hover {
  background-color: #3eaf7c;
}

</style>
