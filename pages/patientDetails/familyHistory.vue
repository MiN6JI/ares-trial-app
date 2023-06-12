<template>
  <div class="row">
    <div class="col-3">
      <q-checkbox size="md" v-model="familydisease" val="Diabetes" label="Diabetes" />
    </div>
    <div class="col-3">
      <q-checkbox size="md" v-model="familydisease" val="Hypertension" label="Hypertension" />
    </div>
    <div class="col-3">
      <q-checkbox size="md" v-model="familydisease" val="PCOD" label="Polycystic Ovary Disease (PCOD)" />
    </div>
    <div class="col-3">
      <q-checkbox size="md" v-model="familydisease" val="CVD" label="Cardiovascular Disease (CVD)" />
    </div>
    <div class="col-3">
      <q-checkbox size="md" v-model="familydisease" val="CKD" label="Chronic Kidney Disease (CKD)" />
    </div>
    <div class="col-12 q-my-lg">Any other
      <q-input v-model="familydisease" filled type="textarea"/>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default{
setup() {
return{
  familydisease: ref([])
   }
  }
}
</script>
