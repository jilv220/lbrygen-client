<template>
  <div>
    <input type="text" 
           v-model="search" 
           placeholder="Search some contents..." 
           @keyup.enter="getEventData()"
    />
    <button @click="getEventData()">Search</button>

    <div v-if="sourceData!=''">
        <li v-for="item in sourceData.result.items" :key="item">
            <a @click="getStream(item.short_url)">
                {{item.short_url}}
            </a>
        </li>
    </div>
   
  </div>
</template>

<script>
import EventService from "@/services/EventService.js";
export default {
  data() {
    return {
      search: "",
      sourceData: "",
      streamUrl: "",
      urlList: []
    };
  },
  mounted() {

  },
  methods: {
    async getEventData() {
      // Use the eventService to call the getEventSingle() method
      EventService.getContentByTag(this.search).then((response) => {
        console.log(response)
        this.sourceData = response
      })
    },
    async getStream(url) {
        EventService.getStreamByUrl(url).then((response) => {
        console.log(response)
        window.location.href=response
      })
    }
  },
};
</script>

<style>
li {
    list-style-type: none;
}
button, a {
    cursor: pointer;
}
</style>