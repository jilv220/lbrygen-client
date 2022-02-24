<template>
  <div id="content" class="mx-10" >
    <div id="search-bar" class="pb-04 flex-x">
        <ion-input 
            class="mr-06"
            type="text" 
            v-model="search" 
            placeholder="Search some contents..." 
            @keyup.enter="resetPage(); searchContent(picked, this.currPage);"
        />
        <ion-button @click="resetPage(); searchContent(picked, this.currPage);">Search</ion-button>
    </div>

    <form id="search-filter" class="pb-06 flex-x ion-justify-content-center" autocomplete="off">
        <input type="radio" id="tag" value="tag" v-model="picked">
        <label class="pl-02 pr-06" for="tag">Search by Tag</label>
        <input type="radio" id="text" value="text" v-model="picked">
        <label class="pl-02" for="text">Search by Text</label>
    </form>

    <div v-if="sourceData!=''">
        <li v-for="item in sourceData.result.items" :key="item">
            <ion-item id="search-result-item">

                <ion-label id="streaming-url" class="mx-04 mr-02" @click="getStream(item.short_url)">
                    {{item.short_url.replace('lbry://','')}}
                </ion-label>

                <div id="search-result-rear">
                    <ion-label
                        v-if="item.value.source"
                        class="ion-text-right"
                        @click="download(item.short_url)"
                    >   
                        <ion-button id="download-button">
                            Download
                        </ion-button>

                        {{item.value.source.media_type}}

                    </ion-label>
                    
                    <text v-else id="text-unknown"> 
                        unknown 
                    </text>
                </div>

            </ion-item>
            <hr>
        </li>
    </div>

    <!-- pagination -->
    <div v-if="sourceData!=''">
        <p> {{ this.currPage }} </p>
        <p> 
            <button @click="resetPage(); searchContent(picked, this.currPage);">First</button>
            <button @click="prevPage()">Prev</button>
            <button @click="nextPage()">Next</button>
        </p>
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
  IonLabel,
} from '@ionic/vue';

export default {
  components: {
      IonButton,
      IonItem, 
      IonInput,
      IonLabel,
  },
  data() {
    return {
      search: "",
      sourceData: "",
      streamUrl: "",
      picked: "tag",
      currPage: 1,
    };
  },
  mounted() {

  },
  methods: {
    async searchContent(picked, pageNum) {

      let normalizedSearch = Normalizer.run(this.search)

      switch(picked) {
          case "tag":
              EventService.getContent("tag", normalizedSearch, pageNum).then((response) => {
                  // console.log(response)
                  this.sourceData = response
                })
              break
          case "text":
              EventService.getContent("text", normalizedSearch, pageNum).then((response) => {
                  // console.log(response)
                  this.sourceData = response
                })
              break
      }
    },
    async getStream(url) {
        EventService.getStreamByUrl(url).then((response) => {

        window.open(
             response,
            '_blank'
        );

      })
    },
    async download(url) {
        EventService.downloadFromStream(url).then(() => {
            
        let filename = url.replace('lbry://','')
        alert(`File ${filename} saved to Downloads folder !`)

      })
    },
    prevPage() {
        if (this.currPage > 1) {
            this.currPage -= 1
            this.searchContent(this.picked, this.currPage)
        }
    },
    nextPage() {
        this.currPage += 1
        this.searchContent(this.picked, this.currPage)
    },
    resetPage() {
        this.currPage = 1
    }
  },
};
</script>

<style>
li {
    list-style-type: none;
}

ion-button {
    cursor: pointer;
}
ion-input {
    text-align: start;
    border: 1px solid black;
    border-radius: 4px;
}

.p-04 {
    padding: 0.4rem
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
.mx-04 {
    margin-right: 0.4rem;
    margin-left: 0.4rem;
}
.mt-02 {
    margin-top: 0.2rem;
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

#download-button {
    margin-right: 12px;
    margin-bottom: 12px;
}

#streaming-url {
    cursor: pointer;
}

#search-filter {
    margin: 10px;
}

#search-result-item {
    align-content: center;
}

#search-result-rear {
    align-content: center;
}

#text-unknown {
    padding-right: 10px;
}

@media (max-width: 900px) { 
    #content {
        margin-right: 4rem;
        margin-left: 4rem;
    }
}
</style>