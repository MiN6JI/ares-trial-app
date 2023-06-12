<template>
  <div class="q-pa-md">
    <q-card class="my-card">
      <q-card-section>

        <q-form ref="mealPlanForm" class="q-gutter-md">
          <q-radio name="patientType" v-model="patientType" val="Existing Patient" label="Existing Patient" />
          <q-radio name="patientType" v-model="patientType" val="New Patient" label="New Patient" />

      <q-card v-if="patientType === 'New Patient'" flat bordered class="q-mt-md ">
        <q-card-section>Patient Data</q-card-section>
          <q-separator />
      <q-card-section class="row q-gutter-sm items-center">
        <q-separator />
        <div class="q-px-sm q-py-xs rounded-borders text-center text-no-wrap">
          <q-radio name="patientType" v-model="shape" val="addPatient" label="Add Patient to System" />
          <q-radio name="patientType" v-model="shape" val="MealPlan" label="Continue without adding patient to system" />
        </div>
      </q-card-section>
    </q-card>

    </q-form>

      <div class="row flex-center q-my-md">
        <q-btn @click=" $refs.mealPlanForm.next()" label="Continue" type="submit" color="primary"/>
      </div>

      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const submitResult = ref([])

    return {
      patientType: ref('Existing Patient'),
      submitResult,

      onSubmit (evt) {
        const formData = new FormData(evt.target)
        const data = []

        for (const [ name, value ] of formData.entries()) {
          data.push({
            name,
            value
          })
        }

        submitResult.value = data
      }
    }
  }
}
</script>
