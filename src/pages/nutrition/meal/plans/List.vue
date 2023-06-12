<template>
  <q-page class="q-py-md">
    <div class="row flex items-center q-mx-md q-gutter-sm">
    <q-icon size="40px" name="food_bank" color="primary" />
    <div class="col">
      <div class="text-h5 text-bold">Meal Plan</div>
    <div caption style="color: #B2B2B2;">Transform your health with our customized Meal Plan</div>
    </div>
    <div v-if="!showAll">
          <q-btn flat text-color="primary" no-caps label="See All" @click="showAll = true" />
      </div>
    </div>
    <q-list class="q-ma-md" style="background-color: white;">
      <q-item class="q-my-md " style="border: 1px solid rgb(194, 194, 194); border-radius: 10px;" v-for="item in showAll ? mealPlan : mealPlan.slice(0, 5)" :key="item.id" clickable v-ripple @click="goToItem(item.id)">
        <q-item-section avatar>
            <q-avatar color="grey-2" size="60px" text-color="primary" >
              {{ item.name.substring(0, 1) }}
            </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">{{ item.name }}</q-item-label>
          <q-item-label caption>By: <span class="text-primary">{{ item.created_by.name }}</span></q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="arrow_forward" color="primary" size="20px" />
        </q-item-section>
      </q-item>
    </q-list>

    <!-- <q-list class="q-ma-md" style="background-color: white;">
      <q-item class="q-my-md" style="border: 1px solid #DBDFEA; border-radius: 10px;" v-for="item in showAll ? instituteList : instituteList.slice(0, 3)" :key="item.id" clickable v-ripple @click="goToItem(item.id)">
          <q-item-section avatar>
            <q-avatar color="grey-2" size="60px" text-color="primary" >
              {{ item.name.substring(0, 1) }}
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ item.name }}</q-item-label>
            <q-item-label v-if="item.gender === 1">Female</q-item-label>
            <q-item-label v-if="item.gender === 2">Male</q-item-label>
            <q-item-label v-if="item.gender === 3">Other</q-item-label>
            <q-item-label caption lines="1">{{ item.email }}</q-item-label>
          </q-item-section>

            <q-item-section side>
              <q-icon name="arrow_forward" size="20px" color="primary" />
            </q-item-section>
        </q-item>
    </q-list> -->


    <pre>{{ mealPlan }}</pre>
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
      mealPlan: [],
      showAll: false
    }
  },
  mounted() { // Changed from "onMounted"
    Loading.show();
    api.get("/manage/nutrition/meal-plans").then((response) => {
      this.mealPlan = response.data; // Changed from "cuisineList.value"
      Loading.hide();
    });
  },
  methods: {
    goToItem(id) {
      this.$router.push(`/app/nutrition/meal/plans/${id}
`)
    }
  }
}
</script>
