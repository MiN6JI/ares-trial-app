<template>
  <q-card class="q-ma-md">
    <MealPlanTabs/>
  <q-form>
    <div class="row">
    <div class="col-md-4 col-xs-12 q-pa-sm">
      <q-select
        dense
        outlined
        v-model="patient"
        option-label="name"
        :options="patientAvailOpt"
        option-value="id"
        label="Select a Patient"/>
    </div>
    <div class="col-md-4 col-xs-12 q-pa-sm">
      <q-select
        dense
        outlined
        v-model="patient"
        option-label="Gender"
        :options="patientAvailOpt"
        option-value="id"
        label="Gender" />
    </div>
    <div class="col-md-4 col-xs-12 q-pa-sm">
      <q-input
        dense
        outlined
        type="date"
        v-model="date"
        hint="Native date"/>
    </div>
  </div>
  <div class="row">
    <div class="col-md-4 col-xs-12 q-pa-sm">
      <q-input
        dense
        outlined
        v-model.number="right"
        type="number"
        label="Weight (in kg)"
      />
    </div>
    <div class="col-md-4 col-xs-12 q-pa-sm">
      <q-input
        dense
        outlined
        v-model.number="model"
        type="number"
        label="Height (in cm)"
        />
    </div>
    <div class="col-md-4 col-xs-12 q-pa-sm">
      <q-select
        dense
        outlined
        v-model="patient"
        option-label="physical activity"
        :options="phyActivity"
        option-value="id"
        label="Physical Activity"
      />
    </div>
  </div>

  <div>
    <q-btn type="submit" to="mealPlan-other-details" label="Continue"/>
  </div>

  </q-form>
  </q-card>
</template>

<script>
import { ref } from 'vue'
import MealPlanTabs from 'pages/PrescribeMealPlan/mealPlanTabs.vue'

export default {
  components: {
    MealPlanTabs
  },
  setup () {

    return {
      patient: ref(null),
      patientAvailOpt: ['Bindu', 'Rasa', 'Satish', 'Madhuri', 'John D'],
      phyActivity: ['Sedantry', 'Light Active', 'Moderate Active', 'Very Active', 'Extra Active'],
      weight: ref(10),
      date: ref(''),
      right:ref(''),
      model:ref('')
    }
  }
}
</script>

<style>
.q-field__native {
  padding: 0.5rem;
}
</style>
