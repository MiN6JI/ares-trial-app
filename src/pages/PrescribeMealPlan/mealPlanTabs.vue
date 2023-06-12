<template>
  <q-tabs
  class="text-grey"
  active-color="primary"
  indicator-color="primary"
  align="justify"
  narrow-indicator
  >
    <q-route-tab to="" name="basic" icon="perm_contact_calendar" label="Basic" exact/>
    <q-route-tab to="" name="other details" icon="display_settings" label="Other Details" exact/>
    <q-route-tab to="" name="preview" icon="remove_red_eye" label="Preview" />
  </q-tabs>
</template>

<script>

export default {
data() {
  return {
    selectedTab: 'basic'
  }
}
}
</script>

<!--
<template>
  <q-toolbar inset class="bg-white">
    <q-toolbar-title>
      <div class="row items-center q-pa-sm">
        <div class="col-10">
          <div class="col">
          Create Prescription
          </div>
            <div class="col">
            <small>fields marked with <span style="color: #da251c;">*</span> are mandatory</small>
            </div>
        </div>
      </div>
  </q-toolbar-title>
  </q-toolbar>
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
        <BasicMealPlan />
      </q-form>
      </q-step>

      <q-step
        :name="2"
        title="Other Details"
        icon="display_settings"
        :done="step > 2"
      >
      <q-form class="q-gutter-md">
        <otherDetails />
      </q-form>
    </q-step>

      <q-step
        :name="3"
        title="Preview"
        icon="remove_red_eye"
      >
      <q-form class="q-gutter-md">
        <preview />
      </q-form>
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn
          flat
          class="q-mr-sm"
          color="secondary"
          label="Back"
          v-if="step > 1"
          @click="$refs.stepper.previous()"
          />
          <q-btn
          @click="$refs.stepper.next()"
          v-if="step >= 0 && step < 3"
          color="secondary"
          label="Continue"
          />
          <q-btn
          class="q-ma-sm"
          color="secondary"
          to="/meal-plan-preview"
          v-if="step > 2"
          label="Create a Customised Meal Plan"
          />
          <q-btn
          class="q-ma-sm"
          color="secondary"
          to="/meal-plan-preview"
          v-if="step > 2"
          label="Use a Ready Meal Plan"
          />
        </q-stepper-navigation>
      </template>
    </q-stepper>
  </div>
</template>

<script>
import { ref } from 'vue'

import BasicMealPlan from '../PrescribeMealPlan/BasicMealPlan.vue';
import otherDetails from '../PrescribeMealPlan/otherDetails.vue';
import preview from '../PrescribeMealPlan/preview.vue';

export default {
  components: {
    BasicMealPlan,
    otherDetails,
    preview
  },
  setup () {
    return {
      step: ref(1)
    }
  }
}</script> -->



