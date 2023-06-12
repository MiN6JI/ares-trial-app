<template>
  <q-form @submit="continueForm">
    <div class="row">
    <div class="col-3">
      <q-checkbox size="md" v-model="familyFormData.familydisease" val="Diabetes" label="Diabetes" />
    </div>
    <div class="col-3">
      <q-checkbox size="md" v-model="familyFormData.familydisease" val="Hypertension" label="Hypertension" />
    </div>
    <div class="col-3">
      <q-checkbox size="md" v-model="familyFormData.familydisease" val="PCOD" label="Polycystic Ovary Disease (PCOD)" />
    </div>
    <div class="col-3">
      <q-checkbox size="md" v-model="familyFormData.familydisease" val="CVD" label="Cardiovascular Disease (CVD)" />
    </div>
    <div class="col-3">
      <q-checkbox size="md" v-model="familyFormData.familydisease" val="CKD" label="Chronic Kidney Disease (CKD)" />
    </div>
    <div class="col-12 q-my-lg">
      <q-input
      dense
      outlined
      v-model="familyFormData.familyOtherDisease"
      type="textarea"
      label="Other Family Disease"
      />
    </div>
  </div>
  <div>
    <q-btn type="submit" label="continue" :disabled="!isFormValid" />
  </div>
  </q-form>
</template>

<script>
import { ref } from 'vue';

export default {
  data(){
    return{
      familyFormData: {
        familydisease: [],
        familyOtherDisease: '',
      }
    }
  },
  computed: {
    isFormValid() {
      const hasFamilyDisease = this.familyFormData.familydisease.length > 0;
      const hasFamilyOtherDisease = !!this.familyFormData.familyOtherDisease.trim();

      return hasFamilyDisease || hasFamilyOtherDisease;
    },
  },
  methods: {
    continueForm() {
      const nextTab = 'life';
      this.$emit('tab', nextTab);
    }
  }
};
</script>
