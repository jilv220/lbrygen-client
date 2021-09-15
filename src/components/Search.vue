<template>
  <div id="content" class="mx-10" >
    <div id="search-bar" class="pb-04 flex-x">
        <ion-input 
            class="mr-06"
            type="text" 
            v-model="search" 
            placeholder="Search some contents..." 
            @keyup.enter="searchContent(picked)"
        />
        <ion-button @click="searchContent(picked)">Search</ion-button>
    </div>

    <form class="pb-06 flex-x ion-justify-content-center" autocomplete="off">
        <input type="radio" id="tag" value="tag" v-model="picked">
        <label class="pl-02 pr-06" for="tag">Search by Tag</label>
        <input type="radio" id="text" value="text" v-model="picked">
        <label class="pl-02" for="text">Search by Text</label>
    </form>

    <div v-if="sourceData!=''">
        <li v-for="item in sourceData.result.items" :key="item">
            <ion-item>
                <ion-label id="streaming-url" class="m-04" @click="getStream(item.short_url)">
                    {{item.short_url}}
                </ion-label>
                <ion-label 
                    v-if="item.value.source"
                    class="ion-text-right"
                > 
                    {{item.value.source.media_type}} 
                </ion-label>
                <ion-label v-else class="ion-text-right"> unknown </ion-label>
            </ion-item>
            <hr>
        </li>
    </div>
   
  </div>
</template>

<script>
import EventService from "@/services/EventService.js"
import Normalizer from '@/utils/Normalizer.js'
import { 
  IonButton,
  IonItem, 
  IonInput,
  IonLabel
} from '@ionic/vue';

export default {
  components: {
      IonButton,
      IonItem, 
      IonInput,
      IonLabel
  },
  data() {
    return {
      search: "",
      sourceData: "",
      streamUrl: "",
      picked: "tag"
    };
  },
  mounted() {

  },
  methods: {
    async searchContent(picked) {
      // console.log(picked)
      let normalizedSearch = Normalizer.run(this.search)
      switch(picked) {
          case "tag":
              EventService.getContentByTag(normalizedSearch).then((response) => {
                  // console.log(response)
                  this.sourceData = response
                })
              break
          case "text":
              EventService.getContentByText(normalizedSearch).then((response) => {
                  // console.log(response)
                  this.sourceData = response
                })
              break
      }
    },
    async getStream(url) {
        EventService.getStreamByUrl(url).then((response) => {
        // console.log(response)
        window.location.href=response
      })
    },
  },
};
</script>

<style>
li {
    list-style-type: none;
}

ion-button {
    cursor: pointer;
    height: 39px;
}
ion-input {
    text-align: start;
    border: 1px solid black;
    border-radius: 4px;
}

.pb-04 {
    padding-bottom: 0.4rem;
}
.pb-06 {
    padding-bottom: 0.6rem;
}
.pl-02 {
    padding-left: 0.2rem;
}
.pr-04 {
    padding-right: 0.4rem;
}
.pr-06 {
    padding-right: 0.6rem;
}
.m-04 {
    margin: 0.4rem;
}
.mr-04 {
    margin-right: 0.4rem;
}
.mr-06 {
    margin-right: 0.6rem;
}
.mx-4 {
    margin-right: 4rem;
    margin-left: 4rem;
}
.mx-10 {
    margin-right: 10rem;
    margin-left: 10rem;
}
.text-right {
    text-align: right;
}
.text-left {
    text-align: left;
}
.text-base {
    font-size: 1rem;
    line-height: 1.5rem;
}
.flex-x {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

#streaming-url {
    cursor: pointer;
}
@media (max-width: 900px) { 
    #content {
        margin-right: 4rem;
        margin-left: 4rem;
    }
}
</style>