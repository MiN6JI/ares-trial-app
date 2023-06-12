<template>
<q-page>
  <q-card class="q-ma-md">
    <PatientTabs/>
    <q-form>
    <div class="row">
      <div class="col-md-4 col-xs-12 q-pa-sm">
        <q-select
          dense
          outlined
          :options="exerciseOpt"
          option-value="id"
          v-model="exercise"
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
          v-model.number="hours"
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
          v-model.number="eatingFrequency"
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
          v-model.number="alcoholConsumption"
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
          v-model.number="cigarettesPerDay"
          label="Cigarettes /day"
        />
      </div>
    </div>
    <div class="q-mt-lg">
      <q-btn type="submit" label="Continue" @click="nextForm" />
      <q-btn type="reset" label="Reset" @click="resetForm" />
    </div>
  </q-form>
  </q-card>
  <q-page-sticky position="bottom-right" :offset="[18, 18]">
  <q-btn fab icon="add" color="primary" to="/app/patients/" />
  </q-page-sticky>
</q-page>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { usePatientStore } from 'stores/patientForm'
import PatientTabs from 'pages/patientDetails/PatientTabs.vue'

export default {

  components: {
    PatientTabs,
  },
  setup() {
    const patientForm = usePatientStore()
    const $router = useRouter()

    const exercise = ref('')
    const exerciseOpt = [
      {label: 'Sedentary (little/no exercise)', id: 1},
      {label: 'Light Exercise (1-2 times a week)', id: 2},
      {label: 'Moderate Exercise (2-3 times a week)', id: 3},
      {label: 'Hard Exercise (2-3 times a week)', id: 4},
      {label: 'Physical Job or Hard Exercise 6-7 times a week)', id: 5},
      {label: 'Professional Athlete', id: 6},
    ]
    const hours = ref('')
    const eatingFrequency = ref('')
    const alcoholConsumption = ref('')
    const cigarettesPerDay = ref('')

    onMounted(() => {
      if(patientForm.LifestyleInfo.exercise != '' &&
      patientForm.LifestyleInfo.hours != '' &&
      patientForm.LifestyleInfo.eatingFrequency!= '' &&
      patientForm.LifestyleInfo.alcoholConsumption!= '' &&
      patientForm.LifestyleInfo.cigarettesPerDay!= '') {
        exercise.value = patientForm.LifestyleInfo.exercise
        hours.value = patientForm.LifestyleInfo.hours
        eatingFrequency.value = patientForm.LifestyleInfo.eatingFrequency
        alcoholConsumption.value = patientForm.LifestyleInfo.alcoholConsumption
        cigarettesPerDay.value = patientForm.LifestyleInfo.cigarettesPerDay
      }
    })

    const nextForm = () => {
      patientForm.LifestyleInfo.exercise = exercise.value
      patientForm.LifestyleInfo.hours = hours.value
      patientForm.LifestyleInfo.eatingFrequency = eatingFrequency.value
      patientForm.LifestyleInfo.alcoholConsumption = alcoholConsumption.value
      patientForm.LifestyleInfo.cigarettesPerDay = cigarettesPerDay.value
      $router.push('/app/patients/create/confirm')
    }

    const resetForm = () => {
      exercise.value = ''
      hours.value = ''
      eatingFrequency.value = ''
      alcoholConsumption.value = ''
      cigarettesPerDay.value = ''

      patientForm.LifestyleInfo.exercise = ''
      patientForm.LifestyleInfo.hours = ''
      patientForm.LifestyleInfo.eatingFrequency = ''
      patientForm.LifestyleInfo.alcoholConsumption = ''
      patientForm.LifestyleInfo.cigarettesPerDay = ''
    }

  return {
    patientForm,

    exercise,
    hours,
    eatingFrequency,
    alcoholConsumption,
    cigarettesPerDay,

    exerciseOpt,

    nextForm,
    resetForm,
  }
  }
}
</script>

