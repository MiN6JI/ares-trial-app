<template>
  <div>
    hello world
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>

</style>

<!-- <template>
  <q-page>
    Expanding Items
    <q-expansion-item
        class="shadow-1 overflow-hidden q-ma-md br"
        style= "border-radius: 10px"
        icon="business"
        label="General"
        default-opened
        header-class="bg-secondary text-white"
        expand-icon-class="text-white"
      >
    <q-form>
    <div class="row">
    <div class="col-md-8 col-xs-12 q-pa-sm">
    <q-input
      dense
      outlined
      label="Institute Name"
      type="text"
      v-model="instituteName"
      lazy-rules
      :rules="[(val) => val && val.length > 0 || 'Please type something']"
      />
    </div>
    <div class="col-md-4 col-xs-12 q-pa-sm">
    <q-select
      dense
      outlined
      v-model="instituteType"
      :options="instituteOpt"
      option-name="name"
      option-value="id"
      label="clinic Type"
      />
    </div>
    </div>
    <div class="row">
      <div class="col-md-4 col-xs-12 q-pa-sm">
        <q-input
          dense
          outlined
          type="email"
          v-model="instituteEmail"
          label="Institute Email"
          lazy-rules
          :rules="emailRules"
        />
      </div>
      <div class="col-md-4 col-xs-12 q-pa-sm">
        <q-input
          dense
          outlined
          type="tel"
          v-model="institutePhone"
          mask="##### #####"
          lazy-rules
          :rules="phoneRules"
          label="Phone Number"
        />
      </div>
      <div class="col-md-4 col-xs-12 q-pa-sm">
        <q-input
          dense
          outlined
          type="tel"
          v-model="instituteAlternatePhone"
          mask="##### #####"
          lazy-rules
          :rules="phoneRules"
          label="Alternate Phone Number"
        />
      </div>
      <div class="col-md-4 col-xs-12 q-pa-sm">
        <q-input
          dense
          outlined
          type="tel"
          v-model="instituteMobile"
          mask="##### #####"
          lazy-rules
          :rules="phoneRules"
          label="Mobile Phone Number"
        />
      </div>
      <div class="col-md-4 col-xs-12 q-pa-sm">
        <q-input
          dense
          outlined
          type="tel"
          v-model="instituteAlternateMobile"
          mask="##### #####"
          lazy-rules
          :rules="phoneRules"
          label="Alternate Mobile Number"
        />
      </div>
      <div class="col-md-4 col-xs-12 q-pa-sm">
        <q-input
          dense
          outlined
          type="url"
          v-model="instituteWebsite"
          label="Website"
        />
      </div>
    </div>
    <div class="row">
        <div class="col-md-3 col-xs-12 q-pa-sm">
          <q-select
          dense
          outlined
          v-model="instituteCountry"
          :options="countryOpt"
          option-label="name"
          option-value="id"
          label="Country"
          />
        </div>
        <div class="col-md-3 col-xs-12 q-pa-sm">
          <q-select
          dense
          outlined
          v-model="instituteState"
          :options="stateOpt"
          option-label="name"
          option-value="id"
          label="State"
          />
        </div>
        <div class="col-md-3 col-xs-12 q-pa-sm">
          <q-select
          dense
          outlined
          v-model="instituteCity"
          :options="cityOpt"
          option-label="name"
          option-value="id"
          label="City"
          />
        </div>
        <div class="col-md-3 col-xs-12 q-pa-sm">
          <q-input
          dense
          outlined
          v-model.number="institutePincode"
          label="Pincode"
          />
        </div>
    </div>
    <div class="row">
      <div class="col-12 col-xs-12 q-pa-sm">
      <q-input
        dense
        outlined
        v-model="instituteAddress"
        label="Address"
        type="textarea"
      />
    </div>
    </div>
    <div class="col-md-12 col-xs-12 q-pa-sm">
      <q-btn type="submit" color="primary" class="q-pa-sm" label="Submit" @click="saveForm()"/>
      <q-btn dense type="submit" color="primary" class="q-pa-sm" label="Save and Submit"/>
    </div>
  </q-form>
    </q-expansion-item>
    Sticky Button
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn
        fab
        icon="add"
        color="primary"
        to="/app/institutes/"
      />
    </q-page-sticky>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useInstituteStore } from 'stores/institute'

const instituteForm = useInstituteStore()
const $router = useRouter()

const instituteName = ref('');
const instituteType = ref([]);

const instituteOpt = [
  { name: 'Clinic', id: 1},
  { name: 'Hospital', id: 2},
  { name: 'Pathology Lab', id: 3}
];

const instituteLogo = ref('');
const instituteEmail = ref('');

const emailRules = [
  val => !!val || 'Email is required',
  val => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(val) || 'Invalid email'
]

const phoneRules = [
  val => val.trim().length > 0 || 'Phone number is required',
  val => /^\d{5} \d{5}$/.test(val) || 'Phone number should have a format of ##### #####'
]

const institutePhone = ref('');
const instituteAlternatePhone = ref('');
const instituteMobile = ref('');
const instituteAlternateMobile = ref('');
const instituteWebsite = ref('');
const instituteCountry = ref('');

const countryOpt = [
  { name: 'Country 1', id: 1 },
  { name: 'Country 2', id: 2 },
  { name: 'Country 3', id: 3 }
]
const stateOpt = [
  { name: 'State 1', id: 1 },
  { name: 'State 2', id: 2 },
  { name: 'State 3', id: 3 }
]
const cityOpt = [
  { name: 'City 1', id: 1 },
  { name: 'City 2', id: 2 },
  { name: 'City 3', id: 3 }
]

const instituteState = ref('');
const instituteCity = ref('');
const institutePincode = ref('');
const instituteAddress = ref('');

onMounted (() => {
  if(instituteForm.generalInstiInfo.instituteName != '' &&
  instituteForm.generalInstiInfo.instituteType != '' &&
  instituteForm.generalInstiInfo.instituteLogo != '' &&

  instituteForm.instituteContactInfo.instituteEmail != '' &&
  instituteForm.instituteContactInfo.institutePhone != '' &&
  instituteForm.instituteContactInfo.instituteAlternatePhone != '' &&
  instituteForm.instituteContactInfo.instituteMobile != '' &&
  instituteForm.instituteContactInfo.instituteAlternateMobile != '' &&
  instituteForm.instituteContactInfo.instituteCountry != '' &&
  instituteForm.instituteContactInfo.instituteState != '' &&
  instituteForm.instituteContactInfo.instituteCity != '' &&
  instituteForm.instituteContactInfo.institutePincode != '' &&
  instituteForm.instituteContactInfo.instituteAddress != ''){
    instituteName.value = instituteForm.generalInstiInfo.instituteName
    instituteType.value = instituteForm.generalInstiInfo.instituteType
    instituteLogo.value = instituteForm.generalInstiInfo.instituteLogo

    instituteEmail.value = instituteForm.instituteContactInfo.instituteEmail
    institutePhone.value = instituteForm.instituteContactInfo.institutePhone
    instituteAlternatePhone.value = instituteForm.instituteContactInfo.instituteAlternatePhone
    instituteMobile.value = instituteForm.instituteContactInfo.instituteMobile
    instituteAlternateMobile.value = instituteForm.instituteContactInfo.instituteAlternateMobile
    instituteWebsite.value = instituteForm.instituteContactInfo.instituteWebsite
    instituteCountry.value = instituteForm.instituteContactInfo.instituteCountry
    instituteState.value = instituteForm.instituteContactInfo.instituteState
    instituteCity.value = instituteForm.instituteContactInfo.instituteCity
    institutePincode.value = instituteForm.instituteContactInfo.institutePincode
    instituteAddress.value = instituteForm.instituteContactInfo.instituteAddress
  }
})

const saveForm = () => {
  instituteForm.generalInstiInfo.instituteName = instituteName.value,
  instituteForm.generalInstiInfo.instituteType = instituteType.value,
  instituteForm.generalInstiInfo.instituteLogo = instituteLogo.value,

  instituteForm.instituteContactInfo.instituteEmail = instituteEmail.value,
  instituteForm.instituteContactInfo.institutePhone = nstitutePhone.value,
  instituteForm.instituteContactInfo.instituteAlternatePhone = instituteAlternatePhone.value,
  instituteForm.instituteContactInfo.instituteMobile = instituteMobile.value,
  instituteForm.instituteContactInfo.instituteAlternateMobile = instituteAlternateMobile.value,
  instituteForm.instituteContactInfo.instituteWebsite = instituteWebsite.value,
  instituteForm.instituteContactInfo.instituteCountry = instituteCountry.value
  instituteForm.instituteContactInfo.instituteState = instituteState.value
  instituteForm.instituteContactInfo.instituteCity = instituteCity.value
  instituteForm.instituteContactInfo.institutePincode = institutePincode.value
  instituteForm.instituteContactInfo.instituteAddress = instituteAddress.value
}

</script> -->
