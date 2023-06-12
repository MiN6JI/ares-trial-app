<template>
  <q-page class="q-mt-md">

    <div class="row flex items-center q-mx-md q-gutter-md">
        <q-icon size="30px" name="corporate_fare" color="primary" />
        <div class="col">
          <div class="text-h5">Diet Types</div>
          <div class="text-caption" style="color: #B2B2B2;">Discover a Variety of Diet Types for Healthy Living!</div>
        </div>
        <div v-if="!showAll">
          <q-btn flat text-color="primary" no-caps label="See All" @click="showAll = true" />
      </div>
  </div>

    <q-list class="q-ma-md" style="background-color: white;">
      <q-item class="q-my-md q-pa-md" style="background-color: #def5e8; border-radius: 10px;" v-for="item in showAll ? dietType : dietType.slice(0, 3)" :key="item.id" clickable v-ripple @click="goToItem(item.id)">

          <q-item-section>
            <q-item-label lines="1" class="text-bold text-h6 text-primary">{{ item.name }}</q-item-label>
            <q-item-label lines="2" class="q-pt-md " caption >Composition</q-item-label>
            <q-item-label lines="3">
              <div class="row">
              <div class="col">Carbohydrates: {{ item.carbs }}%</div>
              <div class="col">Protein: {{ item.protein }}%</div>
              <div class="col">Fats: {{ item.fats }}%</div>
            </div>
            </q-item-label>
          </q-item-section>
        </q-item>
    </q-list>

    <!-- <pre>{{ dietType }}</pre> -->

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="primary" to="/app/institutes/create" />
    </q-page-sticky>
    
  </q-page>
</template>

<script>
import { ref } from "vue";
import { api } from "boot/axios";
import { Loading } from "quasar";

export default {
  data() {
    return{
      fab1: ref(false),
      dietType: [],
      showAll: false
    }
  },
  mounted() { // Changed from "onMounted"
    Loading.show();
    api.get("/manage/nutrition/diet-types").then((response) => {
      this.dietType = response.data; // Changed from "cuisineList.value"
      Loading.hide();
    });
  },
  methods: {
    goToItem(id) {
      this.$router.push(`/manage/nutrition/diet-types/${id}`)
    }
  }
}
</script>
