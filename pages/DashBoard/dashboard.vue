<template>
    <q-layout view="lHh Lpr lff" container style="height: 100vh" class="shadow-2 rounded-borders">
      <q-header elevated class="bg-white text-black q-pa-xs">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        </q-toolbar>
        <q-separator class="bg-lime-1" />
        <div class="row q-ma-md">
          <div class="col">
            <div>Welcome back, <strong>christabelle!</strong>
              <br>
             Kefitup Health and Digital Solutions</div>
            </div>
           <!-- <router-link to="/addPatient">Add a Patient</router-link> -->
            <div>
              <q-btn  unelevated rounded class="bg-green-7 text-white q-ma-sm" @click="showPatientForm = true">Add a Patient</q-btn>
              <q-btn  unelevated rounded class="bg-amber-5 q-ma-sm" @click="showMealPlan = true">Prescribe a Meal Plan</q-btn>
            </div>

        </div>

      </q-header>

      <q-drawer class="bg-light-green-2"
        v-model="drawer"
        show-if-above
        :width="250"
        :breakpoint="400"
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="inbox" />
              </q-item-section>

              <q-item-section>
                Dashboard
              </q-item-section>
            </q-item>

            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="star" />
              </q-item-section>

              <q-item-section>
                Institute
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="send" />
              </q-item-section>

              <q-item-section>
                Patients
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="drafts" />
              </q-item-section>

              <q-item-section>
                Nutrition
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <div class="absolute-top" style="height: 150px">
          <div class="row flex-center q-my-lg">
            <img src="src\assets\ahar-essentials-logo.d01b1d4.png" style="width: 150px;">
          </div>
        </div>
      </q-drawer>

      <q-page-container>
        <q-page padding class="bg-light-green-1">
          <AddPatient v-if="showPatientForm"></AddPatient>
          <PrescribeMealPlan v-if="showMealPlan"></PrescribeMealPlan>
        </q-page>
      </q-page-container>
    </q-layout>

</template>

<script>
import { ref } from 'vue'
import AddPatient from '../patientDetails/addPatientCard.vue'
import PrescribeMealPlan from '../PrescribeMealPlan/mealPlanCard.vue'

  const drawer = ref(false)
  const showPatientForm = ref(false)
  const showMealPlan = ref(false)

export default {
  components: {
      AddPatient,
      PrescribeMealPlan
    },
  setup () {
    return {
      drawer,

      showPatientForm,
      showMealPlan
    }
  }
}
</script>
