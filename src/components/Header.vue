<template>
  <div class="header-bar">
    <div class="header-logo">
      <img src="../assets/img/website-logo.svg" alt="" />
    </div>
    <div class="header-function">
        <div class="notify"><font-awesome-icon :icon="['fas', 'bell']" size="xl" style="color: #755c5c;" /></div>
        <div class="shopping-cart"><font-awesome-icon :icon="['fas', 'cart-shopping']" size="xl" style="color: #5c626a;" /></div>
        <div class="user-avatar"><font-awesome-icon :icon="['fas', 'user']" size="xl" style="color: #404754;" /></div>
    </div>
  </div>
</template>

<style>
    @import url("../assets/css/Header.css");
</style>
