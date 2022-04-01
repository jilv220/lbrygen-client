<template>
  <div id="content" class="mx-10" >
    <div id="search-bar" class="pb-04 flex-x">
        <ion-toolbar class="mr-06">
        <ion-input
            type="text" 
            v-model="search" 
            placeholder="Search some contents..." 
            @keyup.enter="resetPage(); searchContent(searchType, streamType, this.currPage);"
        >
        </ion-input>
        </ion-toolbar>
        <ion-button @click="resetPage(); searchContent(searchType, streamType, this.currPage);">Search</ion-button>
    </div>

    <div id="filter-area" class="pb-06 flex-x ion-justify-content-center">

        <form id="stream-filter" autocomplete="off">
            <ion-label class="pl-02 pr-06">Filter by : </ion-label>

            <input type="radio" id="video" value="video" v-model="streamType">
            <label class="pl-02 pr-06" for="video">Video</label>

            <input type="radio" id="image" value="image" v-model="streamType">
            <label class="pl-02 pr-06" for="image">Image</label>

            <input type="radio" id="document" value="Document" v-model="streamType">
            <label class="pl-02" for="document">Document</label>
        </form>

        <form id="search-filter" autocomplete="off">
            <ion-label class="pl-02 pr-06">Search by : </ion-label>

            <input type="radio" id="tag" value="tag" v-model="searchType">
            <label class="pl-02 pr-06" for="tag">Tag</label>

            <input type="radio" id="text" value="text" v-model="searchType">
            <label class="pl-02 pr-06" for="text">Text</label>

            <input type="radio" id="channel" value="channel" v-model="searchType">
            <label class="pl-02" for="channel">Channel</label>
        </form>

    </div>

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
            <ion-button @click="resetPage(); searchContent(searchType, streamType, this.currPage);">First</ion-button>
            <ion-button @click="prevPage()">Prev</ion-button>
            <ion-button @click="nextPage()">Next</ion-button>
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
  IonToolbar
} from '@ionic/vue';

export default {
  components: {
      IonButton,
      IonItem, 
      IonInput,
      IonLabel,
      IonToolbar
  },
  data() {
    return {
      search: "",
      sourceData: "",
      streamUrl: "",
      searchType: "tag",
      streamType: "video",
      currPage: 1,
    };
  },
  mounted() {

  },
  methods: {
    async searchContent(searchType, streamType, pageNum) {

      let normalizedSearch = Normalizer.run(this.search, searchType)

      EventService.getContent(searchType, streamType, normalizedSearch, pageNum).then((response) => {
                  console.log(response)
                  this.sourceData = response
                })
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
            this.searchContent(this.searchType, this.currPage)
        }
    },
    nextPage() {
        this.currPage += 1
        this.searchContent(this.searchType, this.currPage)
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

ion-toolbar {
    border: 1px solid black;
    border-radius: 4px;
    --min-height: 0px;
}

ion-input {
    text-align: start;
    border: transparent;
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
    margin-right: auto;
}

#stream-filter {
    margin-right: auto;
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