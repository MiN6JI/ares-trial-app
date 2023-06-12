<template>
  <q-page class="q-pa-md">
    <div class="text-h4">{{ selectedItem.name }}</div>
    <q-card class="q-pa-md">
      <div class="row text-center q-gutter-lg">
      <div class="col q-pa-md" style="border: 1px dashed rgb(216, 214, 214); border-radius: 5px;">
        <div>Energy</div>
        <span>{{ selectedItem.energy }}</span>
      </div>
      <div class="col q-pa-md" style="border: 1px dashed rgb(216, 214, 214); border-radius: 5px;">
        <div>Carbohydrates:</div>
        <span>{{ selectedItem.carbs }}</span>
      </div>
      <div class="col q-pa-md" style="border: 1px dashed rgb(216, 214, 214); border-radius: 5px;">
        <div>Protein:</div>
        <span>{{ selectedItem.carbs }}</span>
      </div>
      <div class="col q-pa-md" style="border: 1px dashed rgb(216, 214, 214); border-radius: 5px;">
        <div>Fats:</div>
        <span>{{ selectedItem.carbs }}</span>
      </div>
    </div>
    </q-card>
    <q-card class="q-mt-md">
      <div v-html="selectedItem.instructions"></div>
      <div>Meal Preference: <span>{{ selectedItem.meal_preference.name }}</span></div>
    </q-card>
    <pre>{{ selectedItem }}</pre>
  </q-page>
</template>
<script>
import { computed } from 'vue'
import { api } from 'src/boot/axios'
export default {
  data() {
    return {
      selectedItem: []
    }
  },
  mounted() {
    const id = this.$route.params.id
    api.get(`/manage/nutrition/meal-plans/${id}`)
    .then(response => {
      this.selectedItem = response.data
    })
    .catch(error => {
      console.log(error)
    })
  },
  setup() {
    return {
      value: 65
    }
  }
}
</script>
