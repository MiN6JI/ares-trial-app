<template>
<q-page>
  <q-card class="q-ma-md">
    <PatientTabs/>
    <q-form>
    <div class="row">

      <div class="col-12">
        <q-option-group
        v-model="familydisease"
        :options="familyDiseaseOpt"
        type="checkbox"
        inline
        />
      </div>
    <div class="col-12 q-my-lg">
      <q-input
      dense
      outlined
      v-model="familyOtherDisease"
      type="textarea"
      label="Other Family Disease"
      />
    </div>
  </div>
  <div>
    <q-btn type="submit" label="continue" @click="nextForm"/>
    <q-btn type="reset" label="Reset" @click="resetForm"/>
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
    const familydisease = ref([])
    const familyOtherDisease = ref('')
    const familyDiseaseOpt = [
      { label: 'Diabetes', value: 'option1' },
      { label: 'Hypertension', value: 'option2' },
      { label: 'Cardiovascular Disease (CVD)', value: 'option3' },
      { label: 'Chronic Kidney Disease (CkD)', value: 'option4' },
      { label: 'Polycystic Ovary Disease (PCOD)', value: 'option5' },
    ]

    onMounted(() => {
      if(patientForm.FamilyInfo.familydisease != '' && patientForm.FamilyInfo.familyOtherDisease != '' ){
        familydisease.value = patientForm.FamilyInfo.familydisease
        familyOtherDisease.value = patientForm.FamilyInfo.familyOtherDisease
      }
    })

    const nextForm = () => {
      patientForm.FamilyInfo.familydisease = familydisease.value,
      patientForm.FamilyInfo.familyOtherDisease = familyOtherDisease.value
      $router.push('/app/patients/create/lifestyle')
    }

    const resetForm = () => {
      familydisease.value = '',
      familyOtherDisease.value = ''

      patientForm.FamilyInfo.familydisease = '',
      patientForm.FamilyInfo.familyOtherDisease = ''
    }

  return {
    patientForm,

    familydisease,
    familyDiseaseOpt,
    familyOtherDisease,

    nextForm,
    resetForm,
  }
}
}
</script>

