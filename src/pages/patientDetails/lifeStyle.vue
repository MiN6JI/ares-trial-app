<template>
  <q-form @submit.prevent="continueForm">
    <div class="row">
      <div class="col-md-4 col-xs-12 q-pa-sm">
        <q-select
          dense
          outlined
          :options="lifeStyleFormData.exerciseOpt"
          option-value="id"
          v-model="lifeStyleFormData.exercise"
          label="Select Physical Activity"
        />
      </div>
      <div class="col-md-4 col-xs-12 q-pa-sm">
        <q-input
          dense
          outlined
          mask="##"
          lazy-rules
          :rules="[val => val >= 0 && val <= 10 || 'Enter your value']"
          type="tel"
          v-model.number="lifeStyleFormData.hours"
          label="Sleep hours / night"
        />
      </div>
      <div class="col-md-4 col-xs-12 q-pa-sm">
        <q-input
          dense
          outlined
          mask="##"
          lazy-rules
          :rules="[val => val >= 0 && val <= 10 || 'Enter your value']"
          type="tel"
          v-model.number="lifeStyleFormData.eatingFrequency"
          label="Eating out Frequency"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 col-xs-12 q-pa-sm">
        <q-input
          dense
          outlined
          mask="##"
          lazy-rules
          :rules="[val => val >= 0 && val <= 10 || 'Enter your value']"
          type="tel"
          v-model.number="lifeStyleFormData.alcoholConsumption"
          label="Alcohol consumption / week"
        />
      </div>
      <div class="col-md-6 col-xs-12 q-pa-sm">
        <q-input
          dense
          outlined
          mask="##"
          lazy-rules
          :rules="[val => val >= 0 && val <= 15 || 'Enter your value']"
          type="tel"
          v-model.number="lifeStyleFormData.cigarettesPerDay"
          label="Cigarettes /day"
        />
      </div>
    </div>
    <div class="q-mt-lg">
      <q-btn type="submit" label="Continue" :disabled="!isFormValid" />
    </div>
  </q-form>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'LifestyleForm',
  data() {
    return {
      lifeStyleFormData: {
        exercise: '',
        exerciseOpt: [
          {label: 'Sedentary (little/no exercise)', id: 1},
          {label: 'Light Exercise (1-2 times a week)', id: 2},
          {label: 'Moderate Exercise (2-3 times a week)', id: 3},
          {label: 'Hard Exercise (2-3 times a week)', id: 4},
          {label: 'Physical Job or Hard Exercise 6-7 times a week)', id: 5},
          {label: 'Professional Athlete', id: 6},
        ],
        hours: '',
        eatingFrequency: '',
        alcoholConsumption: '',
        cigarettesPerDay: '',
      }
    }
  },
  computed: {
  isFormValid() {
    return (
      !!this.lifeStyleFormData.exercise &&
      !!this.lifeStyleFormData.hours &&
      !!this.lifeStyleFormData.eatingFrequency &&
      !!this.lifeStyleFormData.alcoholConsumption &&
      !!this.lifeStyleFormData.cigarettesPerDay
    )
  },
},

  methods: {
  continueForm() {
    if (this.isFormValid) {
      this.$emit('tab', 'confirm');
  }
},

  },
})
</script>
