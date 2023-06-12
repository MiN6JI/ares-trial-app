<template>
  <div class="q-pa-md">
    <q-form class="q-gutter-md">
      <q-separator />
      <div>Lifestyle</div>
      <div class="row">
        <div class="col q-my-md q-mr-md">Physical Activity
          <q-select filled v-model="model" :options="exersizeOpt"/>
        </div>
        <div class="col q-my-md q-mr-md">Sleep hours / night
          <q-input v-model.number="model" type="number" filled/>
        </div>
        <div class="col q-my-md q-mr-md">Eating out Frequency
          <q-input v-model.number="model" type="number" filled/>
        </div>
      </div>
      <div class="row">
        <div class="col-4 q-my-md q-mr-md">Alcohol consumption / week
          <q-input v-model.number="model" type="number" filled/>
        </div>
        <div class="col-4 q-my-md">Cigarattes /day
          <q-input v-model.number="model" type="number" filled/>
        </div>
      </div>
    </q-form>
  </div>

</template>

<script>
import { ref } from 'vue'

const model = ref(null)
const exersizeOpt = ref(['Sedentary(little/no exersize)','Light Exersize (1-2 times a week)','Moderate Exersize(2-3 times a week)','Hard Exersize(2-3 times a week)','Physical Job or Hard Exersize(6-7 times a week)','Professional Athelete'])

export default{
  setup() {
    return{
      model,
      exersizeOpt
    }
  }
}
</script>
