<template>
  <q-card class="q-ma-md">
    <MealPlanTabs/>
  <q-form>
    <div class="row">
      <div class="col-md-4 col-xs-12 q-pa-sm">
        <q-select
        dense
        outlined
        v-model="dietType"
        :options="dietOpt"
        option-value="id"
        label="Select a Diet Type"
        />
      </div>
      <div class="col-md-4 col-xs-12 q-pa-sm">
        <q-select
        dense
        outlined
        v-model="mealType"
        :options="preferenceOpt"
        option-value="id"
        label="Select a Meal Preference"
        />
      </div>
      <div class="col-md-4 col-xs-12 q-pa-sm">
        <q-select
        dense outlined
        v-model="cuisineType"
        :options="cuisineOpt"
        option-value="id"
        label="Select Cuisine"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 col-xs-12 q-pa-sm">
        <q-select
        dense outlined
        v-model="langType"
        :options="langOpt"
        option-value="id"
        label="Select language" />
      </div>
    </div>
    <div>
    <q-btn type="submit" to="mealPlan-preview" label="Continue"/>
  </div>
  </q-form>
  </q-card>
</template>

<script>
import {ref} from 'vue'
import MealPlanTabs from 'pages/PrescribeMealPlan/mealPlanTabs.vue'

export default {
  components: {
    MealPlanTabs
  },

  setup() {
    const dietType = ref('')
    const dietOpt = [
      'Diabetes (Diabetes and Obesity)',
      'Glucose Control',
      'Strict Diabetic Diet',
      'MetS and PreDiabetes',
      'Diabetes + Hypertension',
      'CKD(Stage &#x2160;) on HD',
      'CKD(Stage &#x2160;&#x2160;) on HD',
      'CKD(Stage &#x2160;&#x2160;&#x2160;) on HD', 'Hypercholestrolemia',
      'Hypercholestrolemia + DM',
      'Heart Healthy Diet',
      'Heart Healthy Diabetic Diet'
    ]

    const mealType =  ref('')
    const preferenceOpt = ['Vegetarian', 'Non-Vegetarian']

    const cuisine = ref('')
    const cuisineOpt = [
      'Maharashta',
      'Cosmopolitan',
      'Gujarat',
      'North India',
      'Marwari'
    ]

    const langType = ref('')
    const langOpt = [
      'Assamese',
      'Bengali',
      'Bihari',
      'English(IN)',
      'GUjarati',
      'Kannada',
      'Tamil',
      'Telugu'
    ]

    return{
    dietType,
    dietOpt,
    mealType,
    preferenceOpt,
    cuisine,
    cuisineOpt,
    langType,
    langOpt
    }
  },
   }
</script>
