<template>
  <q-page>
    <q-card class="q-ma-md">
  <PatientTabs/>
  <q-form>
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
      <q-btn type="submit" label="continue" @click="nextForm"/>
      <q-btn type="reset" label="Reset" @click="resetForm"/>
    </div>
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
import PatientTabs from '../patientDetails/PatientTabs.vue'
export default{
  components: {
    PatientTabs,
  },
  setup() {
    const patientForm = usePatientStore()
    const $router = useRouter()
    const name = ref('')
    const gender = ref('')
    const date = ref('')

    const genderOptions = [
      { id: 'male', label: 'Male' },
      { id: 'female', label: 'Female' },
      { id: 'other', label: 'Other' },
    ]

    //check if it is empty
    onMounted(() => {
    if (patientForm.name != '' && patientForm.gender != '' && patientForm.date != '') {
      name.value = patientForm.BasicInfo.name
      gender.value = patientForm.BasicInfo.gender
      date.value = patientForm.BasicInfo.date
    }
  })

    //update to the store
    const nextForm = () => {
      patientForm.BasicInfo.name = name.value,
      patientForm.BasicInfo.gender = gender.value,
      patientForm.BasicInfo.date = date.value,
      console.log(patientForm.BasicInfo.name)
      $router.push('/app/patients/create/contact')
    }

    //reset all the va;
    const resetForm = () => {
      name.value = '',
      gender.value = '',
      date.value = '',

      patientForm.BasicInfo.name = '',
      patientForm.BasicInfo.gender = '',
      patientForm.BasicInfo.date = ''
    }

    return {
      patientForm,

      name,
      gender,
      date,

      genderOptions,

      nextForm,
      resetForm
    }
 },

}
</script>
