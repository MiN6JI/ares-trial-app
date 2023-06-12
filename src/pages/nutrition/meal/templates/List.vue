<template>
  <q-page>
    <div class="q-pt-lg">
    <div class="text-bold text-h5 q-mx-md q-mt-md text-center">Meal Templates</div>
  <div class="text-caption q-mx-md text-center">Get the Best Medical Care</div>
  <q-input outlined dense rounded debounce="300" v-model="filter" placeholder="Search" class="q-ma-md" style="border-radius: 10px; padding: 5px;" >
    <template v-slot:prepend >
      <q-icon name="search" />
    </template>
  </q-input>
  </div>
  <q-list :filter="filter" class="q-ma-md">
    <q-item class="q-my-md q-pa-md" style="border: 1px solid rgb(204, 204, 204); border-radius: 10px;" v-for="item in showAll ? filteredMealPlanTemplates : filteredMealPlanTemplates.slice(0, 5)" :key="item.id" clickable v-ripple @click="goToItem(item.id)">
      <q-item-section>
        <q-item-label lines="1" class="text-bold text-primary">{{ item.name }}</q-item-label>
        <q-item-label v-if="item.cuisine && item.cuisine.length == undefined" lines="2">{{ item.cuisine.name }}</q-item-label>
      </q-item-section>
      <q-item-section side>
        <q-item-label caption>Duration</q-item-label>
        <q-item-label class="text-bold">{{ item.duration }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
  <div v-if="!showAll" class="q-ma-md">
    <q-btn flat text-color="primary" no-caps label="See All" @click="showAll = true" style="background-color: #ecfaf2; border-radius: 10px;" class="w-full q-py-md"/>
  </div>
    <pre>
      {{ mealPlanTemplates }}
    </pre>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="primary" to="/app/nutrition/meal/templates/create" />
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
      mealPlanTemplates: [],
      showAll: false
    }
  },
  computed: {
    filteredMealPlanTemplates() {
      return this.mealPlanTemplates.filter((item) =>
        item.name.toLowerCase().includes(this.filter.toLowerCase())
      );
    },
  },
  mounted() { // Changed from "onMounted"
    Loading.show();
    api.get("/manage/nutrition/meal-plan-templates").then((response) => {
      this.mealPlanTemplates = response.data; // Changed from "cuisineList.value"
      Loading.hide();
    });
  },
  methods: {
    goToItem(id) {
      this.$router.push(`/app/nutrition/meal/templates/${id}`)
    }
  },
  setup() {
    return {
      filter: ref('')
    }
  }
}
</script>

