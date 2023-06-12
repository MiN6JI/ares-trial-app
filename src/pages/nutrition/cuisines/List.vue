

<template>
<div class="row flex items-center q-mx-md q-my-sm q-gutter-md">
  <q-icon size="30px" name="local_dining" color="primary" />
    <div class="col">
      <div class="text-h5">Diet Types</div>
      <div class="text-caption" style="color: #B2B2B2;">Discover a Variety of Diet Types for Healthy Living!</div>
    </div>
</div>
  <div>
    <!-- <q-btn icon="delete"  to="/app/nutrition/cuisines/trash"/> -->
    <div>
      <q-list class="q-ma-md">
      <q-item class="q-my-md q-pa-md" style="background-color: #def5e8; border-radius: 10px;" v-for="item in cuisineList" :key="item.id" clickable @click="goToItem(item.id)">
        <q-item-section>
          <q-item-label class="text-bold text-primary">{{ item.name }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="navigate_next" color="primary" />
        </q-item-section>
      </q-item>
    </q-list>
    </div>

    <pre>{{ cuisineList }}</pre>
  </div>
</template>

<script>
import { api } from "boot/axios";
import { Loading } from "quasar";

export default {
  data() {
    return{
      cuisineList: []
    }
  },
  mounted() { // Changed from "onMounted"
    Loading.show();
    api.get("/manage/nutrition/cuisines/").then((response) => {
      this.cuisineList = response.data; // Changed from "cuisineList.value"
      Loading.hide();
    });
  },
  methods: {
    goToItem(id) {
      this.$router.push(`/app/nutrition/cuisines/${id}`)
    }
  }
}
</script>




