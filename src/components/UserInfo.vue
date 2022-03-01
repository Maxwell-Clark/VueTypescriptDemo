<template>
  <div class="container bg-secondary d-flex text-light rounded p-5">
    <div class="row float-left w-50 rounded">
      <div class="row float-left rounded">
        <img
          :src="userinfo.image"
          class="rounded-circle float-left w-50"
          alt="User Image"
        />
      </div>
      <div class="row rounded-3xl p-3 text-secondary">
        <div class="card columns-md mx-0" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">
              User Info:
              {{ userinfo.firstName }} {{ userinfo.lastName }}
            </h5>
            <p class="card-text">
              {{ userinfo.email }}
            </p>
            <a
              :href="
                'https://www.facebook.com/public/' +
                userinfo.firstName +
                ' ' +
                userinfo.lastName
              "
              target="blank"
              class="btn text-white btn-info"
              >Visit FaceBook Page</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="row text-center align-bottom w-50 float-right">
      <ul class="list-group rounded align-middle">
        <li class="list-group-item">Gender: {{ userinfo.gender }}</li>
        <li class="list-group-item">Age: {{ userinfo.age }}</li>
        <li class="list-group-item">BirthDay: {{ userinfo.birthday }}</li>
        <li class="list-group-item">Phone: {{ userinfo.phone }}</li>
        <li class="list-group-item">Email: {{ userinfo.email }}</li>
        <li class="list-group-item">
          Street: {{ userinfo.streetnum }} {{ userinfo.street }}
        </li>
        <li class="list-group-item">City: {{ userinfo.city }}</li>
        <li class="list-group-item">State: {{ userinfo.state }}</li>
        <li class="list-group-item">Country: {{ userinfo.country }}</li>
        <li class="list-group-item">
          Coordinates: Lat {{ userinfo.lat }} Lng {{ userinfo.lng }}
        </li>
        <li class="list-group-item">
          TimeZone: {{ userinfo.timezoneoffset }} {{ userinfo.timezonedes }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { User } from "../models/user";
@Component
export default class UserInfo extends Vue {
  @Prop() public userinfo!: User;

  created() {
    console.log("working", this.userinfo);
  }
}
</script>
<style lang="css">
.card_parent {
  display: flex;
  justify-content: center;
}
</style>
