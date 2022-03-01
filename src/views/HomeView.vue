<template>
  <div
    class="page-holder bg-cover align-middle"
    style="
      background-image: url(https://images.pexels.com/photos/945982/pexels-photo-945982.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
    "
  >
    <h1 class="text-white bg-info w-50 pt-3 mx-auto p-10 rounded">
      Welcome to the People Generator!
    </h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {}
</script>

<style>
.bg-cover {
  background-size: cover !important;
}
.page-holder {
  min-height: 100vh;
  align-content: center;
}
</style>
