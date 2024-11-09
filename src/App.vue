<script setup lang="ts">
import SRHeader from './components/SRHeader.vue';


</script>


<template>
  <div id="app">
    <header>
      <SRHeader/>
    </header>
    <div class="Start-View-main-frame">
    <div class="Start-View-left"></div>
    <div class="Start-View-right"></div></div>
  <router-view />
</div>
</template>



<style scoped>

.Start-View-right {
    margin-left: 1331px;
    height: 722px;
    width: 273px;
    background-color:  rgba(211, 144, 81, 0.397); 
    
}
.Start-View-left {
    height: 722px;
    width: 275px;
    background-color:  rgba(211, 144, 81, 0.397); 
}
.Start-View-main-frame{
    display: flex;
    flex-direction: row;
    width: 1880px;
    height: 600px;
  background-image: url('d:/vsCode/WebseiteVue/image/HP_Home_004.JPG'); /* Pfad zu deinem Bild */
  background-size:auto; /* Deckt den gesamten Bildschirm ab */
  background-position: center; /* Zentriert das Bild */
  background-repeat: no-repeat; /* Verhindert das Wiederholen des Bildes */
  height: 75vh; /* Stellt sicher, dass der Hintergrund den gesamten Viewport abdeckt */  
  position: relative;
}

.Start-View-main-frame ::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0);
  z-index: -1; /* Stellt sicher, dass die Überlagerung hinter dem Inhalt bleibt */
}
</style>
