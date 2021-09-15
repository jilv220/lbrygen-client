<template>
  <ion-app>
    <ion-header class="ion-no-border">
    </ion-header>
    <ion-content>
      <img alt="Vue logo" src="./assets/logo.png">
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
</style>
