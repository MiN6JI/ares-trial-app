<template>
  <q-form @submit="continueForm">
    <div class="row">
    <div class="col-3">
      <q-checkbox size="md" v-model="medicalFormData.disease" val="Diabetes" label="Diabetes" />
    </div>
    <div class="col-3">
      <q-checkbox size="md" v-model="medicalFormData.disease" val="Hypertension" label="Hypertension" />
    </div>
    <div class="col-3">
      <q-checkbox size="md" v-model="medicalFormData.disease" val="CVD" label="Cardiovascular Disease (CVD)" />
    </div>
    <div class="col-3">
      <q-checkbox size="md" v-model="medicalFormData.disease" val="CKD" label="Chronic Kidney Disease (CKD)" />
    </div>
    <div class="col-12 q-my-lg">
      <q-input
        dense
        outlined
        v-model="medicalFormData.medicalOtherDisease"
        label="Other Diseases"
        type="textarea"
      />
    </div>
  </div>
  <div>
    <q-btn type="submit" label="continue" :disable="!isFormValid" />
  </div>
  </q-form>
</template>

<script>
import { ref } from 'vue';

export default {
  data(){
    return{
      medicalFormData: {
        disease: [],
        medicalOtherDisease: '',
      }
    }
  },
  computed: {
    isFormValid() {
    const hasDisease = this.medicalFormData.disease.length > 0;
    const hasOtherDisease = !!this.medicalFormData.medicalOtherDisease.trim();

    return hasDisease || hasOtherDisease;
    },
  },
  methods: {
    continueForm() {
      const nextTab = 'family';
      this.$emit('tab', nextTab);
      }
    }
};
</script>
