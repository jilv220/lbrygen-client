<template>
    <div>
        <div id="Container" 
        style="padding-bottom:56.25%; position:relative;
        display:block; width: 100%">

            <iframe width="100%" height="100%" 
                allowfullscreen webkitallowfullscreen
                :src="this.stream" 
                frameborder="0"
                style="position:absolute; top:0; left: 0">
            </iframe>

        </div>
    </div>
</template>

<script>
export default {
    props: {
      stream: String,
    },
    mounted() {
        console.log(this.stream)
    },
}
</script>

<style>

</style>