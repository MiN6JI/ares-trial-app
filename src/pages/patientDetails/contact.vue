<template>
    <q-form @submit="continueForm">
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
        <q-btn type="submit" label="continue" :disabled="!isFormValid" />
      </div>
        </q-form>

</template>

<script>
export default {
  data() {
    return {
      email: '',
      tel: '',
      country: '',
      state: '',
      city: '',
      pincode: '',
      address: '',
      countryOpt: [
        { name: 'Country 1', id: 1 },
        { name: 'Country 2', id: 2 },
        { name: 'Country 3', id: 3 }
      ],
      stateOpt: [
        { name: 'State 1', id: 1 },
        { name: 'State 2', id: 2 },
        { name: 'State 3', id: 3 }
      ],
      cityOpt: [
        { name: 'City 1', id: 1 },
        { name: 'City 2', id: 2 },
        { name: 'City 3', id: 3 }
      ],
      emailRules: [
        val => !!val || 'Email is required',
        val => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(val) || 'Invalid email'
      ],
      phoneRules: [
        val => val.trim().length > 0 || 'Phone number is required',
        val => /^\d{5} \d{5}$/.test(val) || 'Phone number should have a format of ##### #####'
      ]
    }
  },
  computed: {
    isFormValid() {
      return !!this.email && !!this.tel && !!this.country && !!this.state && !!this.city && !!this.pincode && !!this.address
    }
  },
  methods: {
    continueForm() {
      this.$emit('tab', 'medical');
      }
    }
  }

</script>
