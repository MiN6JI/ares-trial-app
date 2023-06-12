<template>
<q-page>
  <q-card class="q-ma-md">
    <PatientTabs/>
    <q-form>
    <div class="row">

      <div class="col-12">
      <q-option-group
      v-model="disease"
      :options="diseaseOpt"
      type="checkbox"
      inline
      />
    </div>

    <div class="col-12 q-my-lg">
      <q-input
        dense
        outlined
        size="md"
        v-model="medicalOtherDisease"
        label="Other Diseases"
        type="textarea"
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

    const medicalOtherDisease = ref('')

    const disease = ref([])
      const diseaseOpt = [
        { label: 'Diabetes', value: 'option1' },
        { label: 'Hypertension', value: 'option2' },
        { label: 'Cardiovascular Disease (CVD)', value: 'option3' },
        { label: 'Cardiovascular Disease (CVD)', value: 'option4' },
      ]

    onMounted(() => {
      if(patientForm.MedicalInfo.disease != '' && patientForm.MedicalInfo.medicalOtherDisease != '' ){
        disease.value = patientForm.MedicalInfo.disease
        medicalOtherDisease.value = patientForm.MedicalInfo.medicalOtherDisease
      }
    })

    const nextForm = () => {
      patientForm.MedicalInfo.disease = disease.value,
      patientForm.MedicalInfo.medicalOtherDisease = medicalOtherDisease.value
      $router.push('/app/patients/create/family')
    }

    const resetForm = () => {
      disease.value = '',
      medicalOtherDisease.value = '',

      patientForm.MedicalInfo.disease = '',
      patientForm.MedicalInfo.medicalOtherDisease = ''
    }

  return {
    disease,
    diseaseOpt,

    patientForm,

    medicalOtherDisease,

    nextForm,
    resetForm,
  }
}
}
</script>


<!-- <template>
  <div>
    <q-option-group
      v-model="selectedValues"
      :options="options"
      type="checkbox"
      inline
    />
    <p>Selected values: {{ selectedValues }}</p>

    <div>
      <div class="row">
        <div class="col">
          <div>Apple</div>
          <div>{{ selectedValues.includes('option1') ? 'Yes' : 'No' }}</div>
        </div>
        <div class="col">
          <div>Banana</div>
          <div>{{ selectedValues.includes('option2') ? 'Yes' : 'No' }}</div>
        </div>
        <div class="col">
          <div>Kiwi</div>
          <div>{{ selectedValues.includes('option3') ? 'Yes' : 'No' }}</div>
        </div>
        <div class="col">
          <div>Pineapple</div>
          <div>{{ selectedValues.includes('option4') ? 'Yes' : 'No' }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedValues: [],
      options: [
        { label: 'Apple', value: 'option1' },
        { label: 'Banana', value: 'option2' },
        { label: 'Kiwi', value: 'option3' },
        { label: 'Pineapple', value: 'option4' },
      ],
    };
  }
};
</script> -->



