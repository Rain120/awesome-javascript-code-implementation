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
import SWUpdatePopup from '@vuepress/plugin-pwa/lib/SWUpdatePopup'

export default {
  components: { SWUpdatePopup }
}
</script>

<style>
.my-sw-update-popup {
  text-align: right;
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #fff;
  font-size: 19px;
  padding: 15px;
  margin: 0px 15px;
  box-shadow: 0 4px 10px rgba(17, 255, 106, 0.2);
}

.my-sw-update-popup:hover {
  box-shadow: 0 1px 6px rgba(0, 0, 0, .2);
  border-color: #fefefe;
  transition: all .2s ease-in-out;
}

.my-sw-update-popup button {
  background-color: #4db6ac;
  border-radius: 28px;
  border: 1px solid #18ab29;
  display: inline-block;
  cursor: pointer;
  color: #fff;
  font-size: 16px;
  margin: 12px 50px;
  padding: 13px 30px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #2f6627;
}

.my-sw-update-popup button:hover {
  background-color: #3eaf7c;
}

</style>
