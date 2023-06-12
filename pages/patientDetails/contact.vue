<template>
      <div class="row">
        <div class="col q-my-md q-mr-md">Email
          <q-input filled v-model="email" type="email"/>
        </div>
        <div class="col q-my-md ">Phone Number
          <q-input filled v-model="tel" type="tel"/>
        </div>
      </div>
      <div class="row">
        <div class="col q-my-md q-mr-md">Country
          <q-select filled v-model="country" :options="countryOpt"/>
        </div>
        <div class="col q-my-md q-mr-md">state
          <q-select filled v-model="state" :options="stateOpt"/>
        </div>
        <div class="col q-my-md q-mr-md">City
          <q-select filled v-model="city" :options="cityOpt"/>
        </div>
        <div class="col q-my-md">Pincode
          <q-input v-model="password" filled type="password"/>
        </div>
      </div>
      <div>Address
        <q-input v-model="address" filled type="textarea" />
      </div>

</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      email: ref(''),
      tel: ref(''),

      country: ref(''),
      countryOpt: ref(['India']),

      state: ref(''),
      stateOpt: ref(['Maharashtra']),

      city: ref(''),
      cityOpt: ref(['Mumbai', 'Thane']),

      password: ref(''),
      address: ref('')
    }
  }
}
</script>
