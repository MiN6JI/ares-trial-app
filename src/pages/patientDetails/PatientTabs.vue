<template>
    <q-tabs
    class="text-grey"
    active-color="primary"
    indicator-color="primary"
    align="justify"
    narrow-indicator
    >
      <q-route-tab to="/app/patients/create/basic" name="basic" icon="looks_one" label="Basic" exact/>
      <q-route-tab to="/app/patients/create/contact" name="contact" icon="looks_two" label="Contact" exact/>
      <q-route-tab to="/app/patients/create/medical" name="medical" icon="looks_3" label="Medical History" />
      <q-route-tab to="/app/patients/create/family" name="family" icon="looks_4" label="Family History" />
      <q-route-tab to="/app/patients/create/lifestyle" name="life" icon="looks_5" label="Lifestyle" />
      <q-route-tab to="/app/patients/create/confirm" name="confirm" icon="looks_6" label="Confirm" />
    </q-tabs>
</template>

<script>

export default {
  name: 'AddPatient',
  data() {
    return {
      selectedTab: 'basic'
    }
}
}
</script>
