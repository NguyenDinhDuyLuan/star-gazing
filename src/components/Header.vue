<template>
  <div class="header-bar">
    <div class="header-logo">
      <img :src="urlLogo" alt="website-logo" />
    </div>
    <div class="header-function">
      <div class="icon-notification">
        <font-awesome-icon
          :class="['function-icon']"
          :icon="['fas', 'bell']"
          size="lg"
          style="color: #c1c1c1"
        />
      </div>
      <font-awesome-icon
        :class="['function-icon']"
        :icon="['fas', 'cart-shopping']"
        size="lg"
        style="color: #c1c1c1"
      />
      <font-awesome-icon
        :class="['function-icon']"
        :icon="['fas', 'user']"
        size="lg"
        style="color: #c1c1c1"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    urlLogo: {
      type: String,
    },
  },
};
</script>

<style>
@import url("../assets/css/Header.css");
</style>
