<template>
  <div class="navbar-wrapper">
    <nav class="navbar-menu">
      <ul>
        <li>
          <router-link to="/" class="menu-links" >Home</router-link>
        </li>
        <li><router-link to="." class="menu-links" >Ephemeris</router-link></li>
        <li><router-link to="." class="menu-links" >Event information</router-link></li>
        <li>
            <router-link to="." class="menu-links" >Service</router-link>
          <ul>
            <li>Service 1</li>
            <li>Service 2</li>
          </ul>
        </li>
        <li><router-link to="." class="menu-links" >Shop</router-link></li>
        <li>
            <router-link to="." class="menu-links" >Help</router-link>
          <ul>
            <li>Help 1</li>
            <li>Help 2</li>
          </ul>
        </li>
        <li><router-link to="." class="menu-links" >Contact Us</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<style>
@import url("../assets/css/Navbar.css");
</style>

<script>
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
</script>