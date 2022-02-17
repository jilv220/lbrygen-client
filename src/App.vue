<template>
  <ion-app>
    <ion-header class="ion-no-border">
    </ion-header>
    <ion-content>
      <img class="lbry-logo" alt="Lbry logo" src="./assets/lbry_logo.svg">
      <Search/>
    </ion-content>
  </ion-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Search from './components/Search.vue'
import { 
  IonApp,
  IonContent, 
  IonHeader,
} from '@ionic/vue';

export default {
  name: 'App',
  components: {
    //HelloWorld,
    Search,
    IonApp,
    IonContent, 
    IonHeader,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 4rem;
}

.lbry-logo {
  max-width: 25%;
  margin: 50px;
}
</style>
