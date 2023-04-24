<template>
  <header>
    <div class="section-header-navbar">
      <div class="container">
        <Header :urlLogo="urlLogo" />
      </div>
    </div>
    <div class="section-header-menu">
      <div class="container">
        <Menu />
      </div>
    </div>
  </header>
  <body></body>
</template>

<script>
import Header from "./components/Header.vue";
import Menu from "./components/Navbar.vue";
import websiteLogo from "./assets/img/website-logo.svg";

export default {
  name: "App",
  data() {
    return {
      urlLogo: websiteLogo,
    };
  },
  components: { Header, Menu },
};
</script>
