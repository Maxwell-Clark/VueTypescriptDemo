<template>
  <div class="container h-50">
      <h1 class="bg-info rounded text-light">DashBoard</h1>
        <div v-if="!isLoading">
            <UserInfo :userinfo="user"/> 
        </div>
        <a href="/dashboard">
        <button type="button" class="btn btn-info text-white m-5">Next Person</button>
        </a>

  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UserInfo from "../components/UserInfo.vue";
import { User } from "../models/user";
import axios from "axios";

@Component({
  components: {
    UserInfo,
  },
})
export default class Dashboard extends Vue {
  public user!: any;
  public isLoading = true;

  public async created(): Promise<void> {
    let response = await axios.get("https://randomuser.me/api/");

    if(response.status == 200) {
        this.user = new User(response.data.results[0])
    }
    else {
        console.log("error")
    }
    
    this.user = new User(response.data.results[0])
    this.isLoading = false;
  }
}
</script>
