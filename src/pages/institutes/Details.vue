<template>
  <q-page>
    <div class="text-h6">Kefitup Health and Digital Solutions</div>
    <div>
      <div class="row">
        <q-icon class="col-1" name="place"/>
        <!-- <div class="col-11">{{ Item.address }}, {{ Item.city.name }}, {{ Item.state.name }}, {{ Item.country.name }} - {{ Item.pincode }}</div> -->
      </div>
      <div class="row">
        <q-icon class="col-1" name="call"/>
        <div class="col-11">{{ Item.phone }}</div>
      </div>
      <div class="row">
        <q-icon class="col-1" name="phone_android"/>
        <div class="col-11">{{ Item.mobile }}</div>
      </div>
      <div class="row">
        <q-icon class="col-1" name="mail"/>
        <div class="col-11">{{ Item.email }}</div>
      </div>
      <div class="row">
        <q-icon class="col-1" name="language"/>
        <div class="col-11">{{ Item.website }}</div>
      </div>
    </div>

    <pre>{{ Item }}</pre>
    <pre>{{ staffTypes }}</pre>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="primary" to="/app/institutes/staff-types" />
    </q-page-sticky>
  </q-page>
</template>
<script>
import { api } from 'src/boot/axios'
import { Loading } from "quasar";

export default {
  data() {
    return {
      Item: {},
      staffTypes: {},
    }
  },
  mounted() {
  const id = this.$route.params.id;
  api.get(`/manage/institutes/${id}`)
    .then(response => {
      this.Item = response.data;
    })
    .catch(error => {
      console.log(error);
    });

  api.get("/manage/institutes/staff-types/1")
    .then(response => {
      this.staffTypes = response.data;
      console.log(this.staffTypes);
    })
}
};
</script>
