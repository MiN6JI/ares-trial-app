<template>
  <q-page>
    <q-card class="q-ma-md">
      <q-tabs
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
          v-model="tab" ref="tabs"
        >
          <q-tab name="basic" icon="looks_one" label="Basic" exact/>
          <q-tab name="contact" icon="looks_two" label="Contact" exact/>
          <q-tab name="medical" icon="looks_3" label="Medical History" />
          <q-tab name="family" icon="looks_4" label="Family History" />
          <q-tab name="life" icon="looks_5" label="Lifestyle" />
          <q-tab name="confirm" icon="looks_6" label="Confirm" />
        </q-tabs>
        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="basic" >
            <basic-info @tab="handleTabChange"/>
          </q-tab-panel>

          <q-tab-panel name="contact">
            <contact-info @tab="handleTabChange"/>
          </q-tab-panel>

          <q-tab-panel name="medical">
            <medical-info @tab="handleTabChange"/>
          </q-tab-panel>

          <q-tab-panel name="family">
            <family-info @tab="handleTabChange"/>
          </q-tab-panel>

          <q-tab-panel name="life">
            <lifestyle-info @tab="handleTabChange"/>
          </q-tab-panel>

          <q-tab-panel name="confirm">
            <confirm-info @tab="handleTabChange"/>
          </q-tab-panel>
        </q-tab-panels>
    </q-card>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn fab icon="add" color="primary" to="/app/institutes/create" />
    </q-page-sticky>
  </q-page>
</template>

<script>
import basicInfo from './basic.vue'
import contactInfo from './contact.vue'
import medicalInfo from './medicalHistory.vue'
import familyInfo from './familyHistory.vue'
import lifestyleInfo from './lifeStyle.vue'
import confirmInfo from './confirm.vue'

export default {
  components: {
    'basic-info': basicInfo,
    'contact-info': contactInfo,
    'medical-info': medicalInfo,
    'family-info': familyInfo,
    'lifestyle-info': lifestyleInfo,
    'confirm-info': confirmInfo,
  },
  data() {
    return {
      tab: 'basic',
    };
  },
  methods: {
    handleTabChange(tabName) {
      this.tab = tabName;
    },
  },
};
</script>
