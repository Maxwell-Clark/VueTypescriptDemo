<template>
  <div class="container">
    <span class="d-inline-block m-3 w-50 mx-auto">
      <form class="form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search Name"
          aria-label="Search"
          v-model="searchQuery"
        />
        <!-- <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button> -->
      </form>
    </span>
    <table class="table table-secondary" v-if="!loading">
      <thead>
        <tr>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Address</th>
        </tr>
      </thead>
      <tbody v-for="user in results" :key="user.address">
        <tr>
          <td>{{ user.first }}</td>
          <td>{{ user.last }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.address }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { TableData } from "../models/table";
import axios from "axios";

@Component
export default class TableView extends Vue {
  public tableData!: TableData[];
  public loading = true;
  public searchQuery = "";

  get results() {
    return this.tableData.filter((user) => {
      let name = user.first + user.last + user.email;
      return this.searchQuery
        .toLowerCase()
        .split(" ")
        .every((v) => name.toLowerCase().includes(v));
    });
  }

  public async created(): Promise<void> {
    let response = await axios.get(
      "https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb"
    );
    if (response.status == 200) {
      this.tableData = response.data.results[0];
    } else {
      console.log("An Error has Occured with the api");
    }

    this.loading = false;
  }
}
</script>
<style lang="css"></style>
