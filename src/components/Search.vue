<template>
  <div>
    <div class="pb-04">
        <input class="mr-04"
               type="text" 
               v-model="search" 
            placeholder="Search some contents..." 
            @keyup.enter="searchContent(picked)"
        />
        <button @click="searchContent(picked)">Search</button>
    </div>

    <form class="pb-04" autocomplete="off">
        <input type="radio" id="tag" value="tag" v-model="picked">
        <label for="tag">Search by Tag</label>
        <input type="radio" id="text" value="text" v-model="picked">
        <label for="text">Search by Text</label>
    </form>


    <div v-if="sourceData!=''">
        <li v-for="item in sourceData.result.items" :key="item">
            <p id="streaming-url" class="text-left" @click="getStream(item.short_url)">
                {{item.short_url}}
            </p>
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
      picked: "tag"
    };
  },
  mounted() {

  },
  methods: {
    async searchContent(picked) {
      // console.log(picked)
      switch(picked) {
          case "tag":
              EventService.getContentByTag(this.search).then((response) => {
                  // console.log(response)
                  this.sourceData = response
                })
              break
          case "text":
              EventService.getContentByText(this.search).then((response) => {
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
button {
    cursor: pointer;
}
.pb-04 {
    padding-bottom: 0.4rem;
}
.pr-04 {
    padding-right: 0.4rem;
}
.mr-04 {
    margin-right: 0.4rem;
}
.text-right {
    text-align: right;
}
.text-left {
    text-align: left;
}

#streaming-url {
    cursor: pointer;
}
</style>