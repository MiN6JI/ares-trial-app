<template>
  <q-toolbar inset class="bg-white">
    <!-- Heading -->
    <q-toolbar-title>
      <div class="row items-center q-pa-sm">
        <div class="col-10">
          <div class="col">
            Create Prescription
          </div>
          <div class="col">
            <small>fields marked with <span style="color: #da251c;">*</span> are mandatory</small>
          </div></div>
      </div>
    </q-toolbar-title>
  </q-toolbar>

  <q-card class="q-ma-lg">
    <q-card-section class="bg-secondary text-white">Patient type</q-card-section>
      <q-form class="q-gutter-md q-pa-md">
        <q-option-group
        v-model="patientType"
        :options="patientTypeOpt"
        @click="onSelect"
        inline
        />
        <div v-if="patientType === 'Existing Patient'">
          <q-btn rounded no-caps
          icon-right="navigate_next"
          padding="10px 25px"
          color="secondary"
          label="Continue"
          @click="goToPage('mealPlan')"
          />
        </div>

        <div v-else-if="patientType === 'New Patient'" >
          <q-card flat bordered class="q-ma-md">
            <q-card-section>Patient Data</q-card-section>
          <q-separator />
          <q-card-section class="q-gutter-sm">
            <q-option-group
            v-model="newPatientOption"
            :options="newPatientOptions"
            />
            <q-btn
            rounded no-caps
            icon-right="navigate_next"
            padding="10px 25px"
            color="secondary"
            label="Continue"
            class="q-ma-lg"
            @click="goToPage(newPatientOption === 'Add Patient' ? 'Create Patient Id' : 'Continue with Prescription')"
            />
          </q-card-section>
          </q-card>
        </div>
    </q-form>
  </q-card>

</template>

<script>
  export default {

    methods: {
      onSelect() {
        this.newPatientOption = null
      },
      goToPage(page) {
        let path = '/mealPlan-basic'
        if (page === 'Create Patient Id') {
        path = '/app/patients/create/basic'
      }
      this.$router.push({ path })
      },


    },
    data() {

      return{
        patientType: null,
        newPatientOption: null,

        patientTypeOpt: [
        {
          label: 'Existing Patient',
          value: 'Existing Patient',
        },
        {
          label: 'New Patient',
          value: 'New Patient',
        },
      ],

      newPatientOptions: [
        {
          label: 'Add Patient to System',
          value: 'Add Patient',
        },
        {
          label: 'Continue without adding patient to system',
          value: 'Create meal plan without Adding',
        },
      ],
      }
    }
  }
</script>
