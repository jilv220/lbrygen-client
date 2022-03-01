<template>
  <ion-app>
    <ion-header class="ion-no-border">
    </ion-header>
    <ion-content>

      <img class="lbry-logo" alt="Lbry logo" src="./assets/lbry_logo.svg">
      <ion-toggle class="theme-toggle"
      @ionChange="!this.$theme"
      value="mushrooms">
      </ion-toggle>
      <router-view :key="$route.fullPath"></router-view>
    </ion-content>
  </ion-app>
</template>

<script>

import { 
  IonApp,
  IonContent, 
  IonHeader,
  IonToggle
} from '@ionic/vue';

export default {
  name: 'App',
  components: {
    IonApp,
    IonContent, 
    IonHeader,
    IonToggle
  },
}
</script>

<style>
:root {
  /* dark theme colors */
  /* --ion-background-color: #1f1f22;
  --ion-text-color: #ffffff;
  --ion-item-border-color: #ffffff;
  --ion-placeholder-color: #ffffff;
  --ion-border-color: #ffffff; */

  /* light theme colors */
  --ion-background-color: #ffffff;
  --ion-text-color: #1f1f22;
  --ion-item-border-color: #1f1f22;
  --ion-placeholder-color: #1f1f22;
  --ion-border-color: #1f1f22;

}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 4rem;
}

ion-toggle {
  --background: grey;
}

.lbry-logo {
  max-width: 25%;
  margin: 10px 0px 50px 300px;
  padding: 10px;
}

.theme-toggle {
  padding-left: 300px;
  padding-bottom: 140px;
}
</style>
