<template>
  <ion-app>
    <ion-header class="ion-no-border"> </ion-header>
    <ion-content>
      <div class="flex-x-center">
        <img class="lbry-logo" alt="Lbry logo" src="./assets/lbry_logo.svg" />
        <ion-toggle
          class="theme-toggle"
          @ionChange="switchTheme()"
          v-model="checked"
        >
        </ion-toggle>
      </div>

      <router-view :key="$route.fullPath"></router-view>
    </ion-content>
  </ion-app>
</template>

<script>
import { IonApp, IonContent, IonHeader, IonToggle } from "@ionic/vue";

export default {
  name: "App",
  components: {
    IonApp,
    IonContent,
    IonHeader,
    IonToggle,
  },
  data() {
    return {
      checked: false,
    };
  },
  methods: {
    switchTheme() {
      this.$theme = !this.$theme;

      console.log(this.$theme);

      if (this.checked) {
        localStorage.setItem("theme", "dark");
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
        document.documentElement.setAttribute("data-theme", "light");
      }
    },
  },
};
</script>

<style>
[data-theme="dark"]:root {
  /* dark theme colors */
  --ion-background-color: #121212;
  --ion-text-color: #ffffff;
  --ion-item-border-color: #ffffff;
  --ion-placeholder-color: #ffffff;
  --ion-border-color: #1f1f22;
  --ion-toolbar-background: #1f1f22;
}

:root {
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

ion-button {
  cursor: pointer;
}

[data-theme="dark"]ion-input {
  text-align: start;
  border: 1px solid #242424;
  border-radius: 4px;
}

ion-input {
  text-align: start;
  border: 1px solid black;
  border-radius: 4px;
}

ion-toggle {
  --background: grey;
}

/* small screen */
@media (max-width: 890px) {
  .theme-toggle {
    margin-left: 100px;
    margin-bottom: 100px;
  }
  .lbry-logo {
    max-width: 25%;
    margin: 10px 0px 20px 100px;
    padding: 10px;
  }
}

@media (min-width: 890px) {
  .theme-toggle {
    margin-left: 320px;
    margin-bottom: 140px;
  }
  .lbry-logo {
    max-width: 25%;
    margin: 10px 0px 20px 320px;
    padding: 10px;
  }
}

.flex-x-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
