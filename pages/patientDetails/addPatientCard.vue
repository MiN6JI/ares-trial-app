<template>
<div class="q-pa-md">
    <q-stepper
      v-model="step"
      ref="stepper"
      alternative-labels
      color="primary"
      animated
    >
      <q-step
        :name="1"
        title="Basic"
        icon="perm_contact_calendar"
        :done="step > 1"
      >
      <q-form class="q-gutter-md">
        <basicInfo />
      </q-form>
      </q-step>

      <q-step
        :name="2"
        title="Contact"
        icon="contacts"
        :done="step > 2"
      >
      <q-form class="q-gutter-md">
        <contactInfo />
      </q-form>
      </q-step>

      <q-step
        :name="3"
        title="Medical History"
        icon="monitor_heart"
        :done="step > 3"
      >
      <q-form class="q-gutter-md">
        <medicalHistoryInfo />
      </q-form>
      </q-step>

      <q-step
        :name="4"
        title="Family History"
        icon="house"
        :done="step > 4"
      >
      <q-form>
        <familyHistoryInfo />
      </q-form>
      </q-step>

      <q-step
        :name="5"
        title="Lifestyle"
        icon="sensor_occupied"
        :done="step > 5"
      >
      <q-form>
        <lifeStyle />
      </q-form>
      </q-step>

      <q-step
        :name="6"
        title="Confirm"
        icon="fact_check"
      >
      <q-form>
        <confirm />
      </q-form>

      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn @click="$refs.stepper.next()" color="primary" :label="step === 6 ? 'Finish' : 'Continue'" />
          <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </template>
    </q-stepper>
  </div>
  </template>

<script>
import { ref } from 'vue'
import basicInfo from './basic.vue'
import contactInfo from './contact.vue'
import medicalHistoryInfo from './medicalHistory.vue'
import familyHistoryInfo from './familyHistory.vue'
import lifeStyle from './lifeStyle.vue'
import confirm from './confirm.vue'



export default {
  components: {
    basicInfo,
    contactInfo,
    medicalHistoryInfo,
    familyHistoryInfo,
    lifeStyle,
    confirm
  },
  setup () {

    return {
      step: ref(1)
    }
  }
}
</script>

