<template>
  <div class="row">
    <div class="col q-my-md q-mr-md"> Name *
      <q-input filled v-model="name" label="Your name " hint="Name and surname"/>
    </div>

    <div class="col q-my-md q-mr-md"> Gender *
      <q-select filled v-model="gender" :options="genderOptions" label="Gender" />
    </div>

    <div class="col q-my-md "> Date *
      <q-input v-model="date" filled type="date" />
    </div>
  </div>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'

export default {
  setup () {
    const $q = useQuasar()

    const name = ref(null)
    const accept = ref(false)

    const gender = ref(null)
    const genderOptions = ['Male', 'Female', 'Other']

    const date = ref('')

    return {
      name,
      accept,

      gender,
      genderOptions,

      date

    }
  }
}
</script>
