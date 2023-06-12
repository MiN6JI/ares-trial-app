<template>
<q-page>
  <q-card class="q-ma-md">
  <PatientTabs/>
  <q-form>
    <div class="row">
      <div class="col-md-6 col-xs-12 q-pa-sm">
        <q-input
          dense
          outlined
          type="email"
          v-model="email"
          lazy-rules
          :rules="emailRules"
          label="Email"
        />
        </div>
      <div class="col-md-6 col-xs-12 q-pa-sm">
        <q-input
          dense
          outlined
          type="tel"
          v-model="tel"
          mask="##### #####"
          lazy-rules
          :rules="phoneRules"
          label="Phone Number"
        />
      </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-xs-12 q-pa-sm">
          <q-select
          dense
          outlined
          v-model="country"
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
          v-model="state"
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
          v-model="city"
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
          v-model.number="pincode"
          label="Pincode"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 col-xs-12 q-pa-sm">
          <q-input
            dense
            outlined
            v-model="address"
            type="textarea"
            label="Address"
            />
        </div>
      </div>
      <div class="q-my-md">
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

    const email = ref('')
    const tel = ref('')
    const country = ref('')
    const state = ref('')
    const city = ref('')
    const pincode = ref('')
    const address = ref('')

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
    const emailRules = [
      val => !!val || 'Email is required',
      val => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(val) || 'Invalid email'
    ]

    const phoneRules = [
      val => val.trim().length > 0 || 'Phone number is required',
      val => /^\d{5} \d{5}$/.test(val) || 'Phone number should have a format of ##### #####'
    ]

    onMounted(() => {
      if(patientForm.ContactInfo.email != '' && patientForm.ContactInfo.tel != '' &&
      patientForm.ContactInfo.country != '' && patientForm.ContactInfo.state != '' &&
      patientForm.ContactInfo.city != '' && patientForm.ContactInfo.pincode != '' &&
      patientForm.ContactInfo.address != ''){
        email.value = patientForm.ContactInfo.email
        tel.value = patientForm.ContactInfo.tel
        country.value = patientForm.ContactInfo.country
        state.value = patientForm.ContactInfo.state
        city.value = patientForm.ContactInfo.city
        pincode.value = patientForm.ContactInfo.pincode
        address.value = patientForm.ContactInfo.address
      }
    })

    const nextForm = () => {
      patientForm.ContactInfo.email = email.value
      patientForm.ContactInfo.tel = tel.value
      patientForm.ContactInfo.country = country.value
      patientForm.ContactInfo.state = state.value
      patientForm.ContactInfo.city = city.value
      patientForm.ContactInfo.pincode = pincode.value
      patientForm.ContactInfo.address = address.value
      $router.push('/app/patients/create/medical')
    }

    const resetForm = () => {
      email.value = ''
      tel.value = ''
      country.value = ''
      state.value = ''
      city.value = ''
      pincode.value = ''
      address.value = ''

      patientForm.ContactInfo.email = ''
      patientForm.ContactInfo.tel = ''
      patientForm.ContactInfo.country = ''
      patientForm.ContactInfo.state = ''
      patientForm.ContactInfo.city = ''
      patientForm.ContactInfo.pincode = ''
      patientForm.ContactInfo.address = ''
    }

    return{
      patientForm,

      email,
      tel,
      country,
      state,
      city,
      pincode,
      address,

      emailRules,
      phoneRules,

      countryOpt,
      stateOpt,
      cityOpt,

      nextForm,
      resetForm,
    }
  }
}
</script>

