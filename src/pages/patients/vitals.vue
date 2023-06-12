<template>
  <div>
    <q-form>
      <div class="row q-my-md q-gutter-sm">
        <div class="col">
          <q-input
          dense
          outlined
          type="tel"
          v-model="weight"
          placeholder="Weight">
          <template v-slot:append>
          <span class="text-subtitle1">kg</span>
          </template>
          </q-input>
        </div>
        <div class="col">
        <q-input
          dense
          outlined
          type="tel"
          v-model="height"
          placeholder="Height">
          <template v-slot:append>
          <span class="text-subtitle1">cm</span>
          </template>
          </q-input>
      </div>
        <div class="col">
        <q-input
          dense
          outlined
          type="tel"
          v-model="waistCircumference"
          placeholder="Waist Circumference">
          <template v-slot:append>
          <span class="text-subtitle1">cm</span>
          </template>
          </q-input>
      </div>
      <div class="col">
        <q-input
          dense
          outlined
          type="tel"
          v-model="bmi"
          placeholder="BMI">
          <template v-slot:append>
          <span class="text-subtitle1">kg/cm2</span>
          </template>
          </q-input>
      </div>
      </div>
      <div class="row q-my-md q-gutter-sm">
        <div class="col">
        <q-input
          dense
          outlined
          type="tel"
          v-model="bmr"
          placeholder="BMR">
          <template v-slot:append>
          <span class="text-subtitle1">kcal/day</span>
          </template>
          </q-input>
      </div>
      <div class="col">
        <q-input
          dense
          outlined
          type="tel"
          v-model="HBA1C"
          placeholder="HBA1C">
          <template v-slot:append>
          <span class="text-subtitle1">%</span>
          </template>
          </q-input>
      </div>
      <div class="col">
        <q-input
          dense
          outlined
          type="tel"
          v-model="fbg"
          placeholder="Fasting Blood Glucose">
          <template v-slot:append>
          <span class="text-subtitle1">mg/dl</span>
          </template>
          </q-input>
      </div>
    </div>
    <div class="row q-my-md q-gutter-sm">
      <div class="col">
        <q-input
          dense
          outlined
          type="tel"
          v-model="plbg"
          placeholder="Post-Lunch Blood Glucose">
          <template v-slot:append>
          <span class="text-subtitle1">mg/dl</span>
          </template>
          </q-input>
      </div>
      <div class="col">
        <q-input
          dense
          outlined
          type="tel"
          v-model="rbg"
          placeholder="Random Blood Glucose">
          <template v-slot:append>
          <span class="text-subtitle1">mg/dl</span>
          </template>
          </q-input>
      </div>
      <div class="col">
        <q-input
          dense
          outlined
          type="tel"
          v-model="cholesterol"
          placeholder="Cholesterol">
          <template v-slot:append>
          <span class="text-subtitle1">mg/dl</span>
          </template>
          </q-input>
      </div>
    </div>
    <div class="row q-my-md q-gutter-sm">
      <div class="col">
        <q-input
          dense
          outlined
          type="tel"
          v-model="temperature"
          placeholder="Temperature">
          <template v-slot:append>
          <span class="text-subtitle1">℃</span>
          </template>
          </q-input>
      </div>
      <div class="col">
        <q-input
          dense
          outlined
          type="tel"
          v-model="pulse"
          placeholder="Pulse">
          <template v-slot:append>
          <span class="text-subtitle1">BPM</span>
          </template>
          </q-input>
      </div>
    </div>
    <div class="col-4">
      <span>Blood Pressure</span>
      <div class="row q-gutter-sm">
        <q-input
          dense
          outlined
          type="tel"
          v-model="systolic"
          placeholder="Systolic">
          <template v-slot:append>
          <span class="text-subtitle1">mmHg</span>
          </template>
          </q-input>
        <q-input
          dense
          outlined
          type="tel"
          v-model="diastolic"
          placeholder="Diastolic">
          <template v-slot:append>
          <span class="text-subtitle1">mmHg</span>
          </template>
          </q-input>
      </div>
    </div>
    <div class="row q-my-md q-gutter-sm">
      <div class="col">
        <q-input
          dense
          outlined
          type="tel"
          v-model="respirationRate"
          placeholder="Respiration Rate">
          <template v-slot:append>
          <span class="text-subtitle1">BPM</span>
          </template>
          </q-input>
      </div>
      <div class="col">
        <q-input
          dense
          outlined
          type="tel"
          v-model="abos"
          placeholder="Arterial Blood Oxygen Saturation">
          <template v-slot:append>
          <span class="text-subtitle1">%</span>
          </template>
          </q-input>
      </div>
    </div>
    <q-btn unelevated rounded color="primary" icon="done" label="submit" @click="storeValue"/>
    </q-form>
  </div>
</template>

<script>
import { useVitalStore } from 'stores/vitals';
import { ref, onMounted } from 'vue';

export default ({
  setup() {
    const vitalForm = useVitalStore();

    const weight = ref('');
    const height = ref('');
    const waistCircumference = ref('');
    const bmi = ref('');
    const bmr = ref('');
    const HBA1C = ref('');
    const fbg = ref('');
    const plbg = ref('');
    const rbg = ref('');
    const cholesterol = ref('');
    const temperature = ref('');
    const pulse = ref('');
    const systolic = ref('');
    const diastolic = ref('');
    const respirationRate = ref('');
    const abos = ref('');

//     const storeValue = () => {
//   for (const key in vitalForm) {
//     if (Object.hasOwnProperty.call(vitalForm, key)) {
//       vitalForm[key] = inputRefs[key].value;
//       store.setId('someId');
//     }
//   }
// }

    onMounted(() => {
      if (
        vitalForm.weight != '' &&
        vitalForm.height != '' &&
        vitalForm.waistCircumference != '' &&
        vitalForm.bmi != '' &&
        vitalForm.bmr != '' &&
        vitalForm.HBA1C != '' &&
        vitalForm.fbg != '' &&
        vitalForm.plbg != '' &&
        vitalForm.rbg != '' &&
        vitalForm.temperature != '' &&
        vitalForm.pulse != '' &&
        vitalForm.systolic != '' &&
        vitalForm.diastolic != '' &&
        vitalForm.respirationRate != '' &&
        vitalForm.abos != ''
        ) {
        weight.value = vitalForm.weight
        height.value = vitalForm.height
        waistCircumference.value = vitalForm.waistCircumference
        bmi.value = vitalForm.bmi
        bmr.value = vitalForm.bmr
        HBA1C.value = vitalForm.HBA1C
        fbg.value = vitalForm.fbg
        plbg.value = vitalForm.plbg
        cholesterol.value = vitalForm.cholesterol
        temperature.value = vitalForm.temperature
        pulse.value = vitalForm.pulse
        systolic.value = vitalForm.systolic
        diastolic.value = vitalForm.diastolic
        respirationRate.value = vitalForm.respirationRate
        abos.value = abos.diastolic


      }
    })

    const storeValue = () => {
      vitalForm.weight = weight.value,
      vitalForm.height = height.value,
      vitalForm.waistCircumference = waistCircumference.value,
      vitalForm.bmi = bmi.value,
      vitalForm.bmr = bmr.value,
      vitalForm.HBA1C = HBA1C.value,
      vitalForm.fbg = fbg.value,
      vitalForm.plbg = plbg.value,
      vitalForm.rbg = rbg.value,
      vitalForm.cholesterol = cholesterol.value,
      vitalForm.temperature = temperature.value,
      vitalForm.pulse = pulse.value,
      vitalForm.systolic = systolic.value,
      vitalForm.diastolic = diastolic.value,
      vitalForm.respirationRate = respirationRate.value,
      vitalForm.abos = abos.value
    }


    return {
    weight,
    height,
    waistCircumference,
    bmi,
    bmr,
    HBA1C,
    fbg,
    plbg,
    rbg,
    cholesterol,
    temperature,
    pulse,
    systolic,
    diastolic,
    respirationRate,
    abos,

    storeValue,
    vitalForm
    }
  }
})
</script>







