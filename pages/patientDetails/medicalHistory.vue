<template>
      <div class="row">
        <div class="col-3">
          <q-checkbox size="md" v-model="disease" val="Diabetes" label="Diabetes" />
        </div>
        <div class="col-3">
          <q-checkbox size="md" v-model="disease" val="Hypertension" label="Hypertension" />
        </div>
        <div class="col-3">
          <q-checkbox size="md" v-model="disease" val="CVD" label="Cardiovascular Disease (CVD)" />
        </div>
        <div class="col-3">
          <q-checkbox size="md" v-model="disease" val="CKD" label="Chronic Kidney Disease (CKD)" />
        </div>
        <div class="col-12 q-my-lg">Any other
          <q-input v-model="disease" filled type="textarea"/>
        </div>
      </div>
</template>

<script>
import { ref } from 'vue'

export default{
  setup() {
    return{
      disease: ref([])
    }
  }
}
</script>
