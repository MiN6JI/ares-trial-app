<template>
  <div>
    <q-toolbar class="bg-white">
      <q-toolbar-title>
        <!-- Heading -->
        <div class="row">
          <div class="col-7">
            <div class="q-pa-sm">
              <div class="text-h6 text-weight-bold">
                Welcome back, {Name}! <br />
                <span class="text-weight-light"
                  >Kefitup Health and Digital Solutions</span
                >
              </div>
            </div>
          </div>
          <div class="col-5 flex flex-center">
            <div>
              <q-btn
                class="q-ma-sm"
                no-caps
                rounded
                unelevated
                to="patients/create/basic"
                color="primary"
                icon="add"
                label="Add patient"
                />
              <q-btn
                class="q-ma-sm"
                no-caps
                rounded
                unelevated
                to="/patientType"
                color="accent"
                icon="medication_liquid"
                label="Prescribe a Meal Plan"
              />
            </div>
          </div>
        </div>
      </q-toolbar-title>
    </q-toolbar>
    <!-- Cards -->
    <div class="row">
      <!-- First card -->
      <q-card style="width: 250px" class="q-ma-md">
        <q-card-section>
          <div class="row">
            <div class="col-10 text-h5">Patients</div>
            <div class="col-2">
              <q-btn flat round dense color="dark" icon="more_vert" />
            </div>
          </div>
          <div class="row justify-around text-center">
            <div
              class="col-12 text-h2 text-weight-medium q-my-md text-secondary"
            >
              0
            </div>
            <div class="col-12 text-secondary">New Patients</div>
            <div class="col-12">Total Patient : <span>00</span></div>
          </div>
        </q-card-section>
      </q-card>

      <!-- Second card -->
      <q-card style="width: 250px" class="q-ma-md">
        <q-card-section>
          <div class="row">
            <div class="col-10 text-h5">Patients</div>
            <div class="col-2">
              <q-btn flat round dense color="dark" icon="more_vert" />
            </div>
          </div>
          <div class="row text-center">
            <div
              class="col-12 text-h2 text-weight-medium q-my-md text-secondary"
            >
              0
            </div>
            <div class="col-12 text-secondary">New Patients</div>
            <div class="col-12">Total Patient : <span>00</span></div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {};
</script>
