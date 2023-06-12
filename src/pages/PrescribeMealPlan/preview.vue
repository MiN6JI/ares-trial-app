<template>
  <q-card class="q-ma-md">
  <MealPlanTabs/>
   <div class="q-px-lg q-pb-md">
    <q-timeline color="warning">

      <q-timeline-entry
        title="Basic"
        icon="done"
      >
      <q-card class="my-card">
          <q-card-section>
            <div class="row q-my-md">
              <div class="col text-weight-bold">
                Name
                <div class="row text-weight-regular">
                  -
                </div>
              </div>
              <div class="col text-weight-bold">
                Birth Date
                <div class="row text-weight-regular">
                  -
                </div>
              </div>
              <div class="col text-weight-bold">
                Age
                <div class="row text-weight-regular">
                  -
                </div>
              </div>
              <div class="col text-weight-bold">
                Gender
                <div class="row text-weight-regular">
                  -
                </div>
              </div>
              <div class="col text-weight-bold">
                Activity
                <div class="row text-weight-regular">
                  -
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </q-timeline-entry>

      <q-timeline-entry
        title="BMI, BMR, and TEE"
        icon="done"
        >
        <q-card class="my-card">
        <q-card-section>
          <div class="row q-my-md">
            <div class="col text-weight-bold">
                BMI
                <div class="row text-weight-regular">
                  -
                </div>
              </div>
              <div class="col text-weight-bold">
                BMR
                <div class="row text-weight-regular">
                  -
                </div>
              </div>
              <div class="col text-weight-bold">
                Total Energy Expenditure
                <div class="row text-weight-regular">
                  -
                </div>
              </div>
            </div>
          </q-card-section>
      </q-card>
      </q-timeline-entry>

      <q-timeline-entry
        title="Other"
        icon="done"

      >
      <q-card class="my-card">
        <q-card-section>
            <div class="row q-my-md">
              <div class="col text-weight-bold">
                Meal Preference
                <div class="row text-weight-regular">
                  -
                </div>
              </div>
              <div class="col text-weight-bold">
                Diet Type
                <div class="row text-weight-regular">
                  -
                </div>
              </div>
              <div class="col text-weight-bold">
                Cuisine
                <div class="row text-weight-regular">
                  -
                </div>
              </div>
            </div>
          </q-card-section>
      </q-card>
      </q-timeline-entry>

      <q-timeline-entry
        title="Recommended Daily Allowance"
        color="orange"
        icon="done_all"
      >
      <q-card class="my-card">
        <q-card-section>
            <div class="row q-my-md">
              <div class="col text-weight-bold">
                Energy
                <div class="row text-weight-regular">
                  -
                  <span>kcal/day</span>
                </div>
              </div>
              <div class="col text-weight-bold">
                Protien
                <div class="row text-weight-regular">
                  -
                  <span>gm</span>
                </div>
              </div>
              <div class="col text-weight-bold">
                Cuisine
                <div class="row text-weight-regular">
                  -
                  <span>gm</span>
                </div>
              </div>
              <div class="col text-weight-bold">
                Carbohydrates
                <div class="row text-weight-regular">
                  -
                  <span>gm</span>
                </div>
              </div>
            </div>
          </q-card-section>
      </q-card>
      </q-timeline-entry>

    </q-timeline>
  </div>
  </q-card>
</template>

<script>
import MealPlanTabs from 'pages/PrescribeMealPlan/mealPlanTabs.vue'

export default {
  components: {
    MealPlanTabs,
  },
  setup() {
    return {
    }
  }
}
</script>
