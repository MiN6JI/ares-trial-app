<template>
  <q-form @submit.prevent="patientDataStore.continueForm">
    <div class="row">
      <div class="col-md-4 col-xs-12 q-pa-sm">
    <q-input
      dense
      outlined
      label="Name"
      hint="Name and surname"
      type="text"
      v-model="name"
      lazy-rules
      :rules="[(val) => val && val.length > 0 || 'Please type something']"
    />
    </div>
    <div class="col-md-4 col-xs-12 q-pa-sm">
    <q-select
      dense
      outlined
      v-model="gender"
      :options="genderOptions"
      option-value="id"
      label="Gender"
      lazy-rules
      :rules="[(val) => !!val || 'Please select your gender']"
    />
    </div>
      <div class="col-md-4 col-xs-12 q-pa-sm">
    <q-input
      dense
      outlined
      v-model="date"
      type="date"
      hint="Birth date"
    />
    </div>
    <div class="col-md-12 col-xs-12 q-pa-sm">
      <q-btn type="submit" label="continue" :disabled="!isFormValid" />
    </div>
  </div>
  </q-form>
</template>

<script>
import { ref, computed } from 'vue'
import { patientDataStore } from 'src/stores/patient.js'

export default {
  setup() {
    const patientStore = patientDataStore()
    const name = ref('')
    const gender = ref('')
    const date = ref('')

    const genderOptions = [
      { id: 'male', label: 'Male' },
      { id: 'female', label: 'Female' },
      { id: 'other', label: 'Other' },
    ]

    const isFormValid = computed(() => {
      return !!name.value && !!gender.value
    })

    const continueForm = () => {
      this.$emit('tab', 'contact');
    }

    return {
      patientDataStore,
      name,
      gender,
      date,
      genderOptions,
      isFormValid,
      continueForm,
    }
  },
}

</script>
