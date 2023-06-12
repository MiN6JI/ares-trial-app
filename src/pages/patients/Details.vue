<template>
  <q-page class="bg-grey-1">
    <div class="q-mx-lg  q-my-sm text-h6 text-bold text-secondary">Patient List
      <q-icon name="navigate_next"/>
      <span class="text-black text-subtitle1">{{ selectedItem.name }}</span>
    </div>
    <div>
      <q-card class="no-shadow q-ma-md q-pa-md" style="border-radius: 20px">
        <div class="row">
          <div class="col-3 flex items-center">
            <q-avatar size="60px" style="background-color: #F8F9FD;" text-color="secondary">
              {{ selectedItem.name ? selectedItem.name.substring(0, 1) : '' }}
            </q-avatar>
          </div>
        <div class="col-5 q-pa-md">
          <div class="row text-h5">{{ selectedItem.name }}</div>
          <div class="row text-caption">{{ selectedItem.email }}</div>
        </div>
        <div class="col-4 flex text-center justify-evenly items-center">
          <div class="row q-gutter-sm">
            <div class="col "><q-btn dense unelevated rounded color="secondary" icon="map" size="12px"></q-btn></div>
            <div class="col "><q-btn dense unelevated rounded color="secondary" icon="call" size="12px"></q-btn></div>
            <div class="col "><q-btn dense unelevated rounded color="secondary" icon="add" to="/patientType" size="12px"></q-btn></div>
          </div>
        </div>
      </div>
    </q-card>
    <q-card class="no-shadow q-ma-md q-pa-md" style="border-radius: 20px">
      <div class="col">
        <div class="row">
          <div class="col">
            <q-list>
              <q-item>
              <q-item-section>
                <q-item-label caption class="text-bold">Date of Birth</q-item-label>
                <q-item-label>{{ selectedItem.birthdate }}</q-item-label>
              </q-item-section>
            </q-item>
            </q-list>
          </div>
          <div class="col">
            <q-list>
              <q-item>
              <q-item-section>
                <q-item-label caption class="text-bold">Postal Code</q-item-label>
                <q-item-label>{{ selectedItem.pincode }}</q-item-label>
              </q-item-section>
            </q-item>
            </q-list>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <q-list>
            <q-item>
              <q-item-section>
                <q-item-label caption class="text-bold">Address</q-item-label>
                <q-item-label>{{ selectedItem.address ? selectedItem.address : '-'  }}</q-item-label>
              </q-item-section>
            </q-item>
            </q-list>
          </div>
          <div class="col">
            <q-list>
              <q-item>
                <q-item-section>
                  <q-item-label caption class="text-bold">Phone Number</q-item-label>
                  <q-item-label>{{ selectedItem.mobile }}</q-item-label>
                </q-item-section>
            </q-item>
          </q-list>
          </div>
        </div>
      </div>
    </q-card>
  </div>
  <div class="q-ma-md">
    <q-expansion-item
    class="shadow-1 overflow-hidden q-my-sm"
    style="border-radius: 15px;"
    label="Personal Details"
    header-class="bg-secondary text-white"
    expand-icon-class="text-white"
    >
    <div class="q-ma-md">
      <div class="row">
        <div class="col">
          <q-list>
              <q-item>
              <q-item-section>
                <q-item-label caption class="text-bold">Height</q-item-label>
                <q-item-label v-if="selectedItem.vitals && selectedItem.vitals.length > 0">{{ selectedItem.vitals[0].height }} cm</q-item-label>
              </q-item-section>
            </q-item>
            </q-list>
        </div>
        <div class="col">
          <q-list>
              <q-item>
              <q-item-section>
                <q-item-label caption class="text-bold">Weight</q-item-label>
                <q-item-label v-if="selectedItem.vitals && selectedItem.vitals.length > 0">{{ selectedItem.vitals[0].weight }} kg</q-item-label>
              </q-item-section>
            </q-item>
            </q-list>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <q-list>
              <q-item>
              <q-item-section>
                <q-item-label caption class="text-bold">Gender</q-item-label>
                <q-item-label>{{ selectedItem.gender === 1 ? 'Female' : selectedItem.gender === 2 ? 'Male' : 'Other' }}</q-item-label>
              </q-item-section>
            </q-item>
            </q-list>
        </div>
        <div class="col">
          <q-list>
              <q-item>
              <q-item-section>
                <q-item-label caption class="text-bold">DOB</q-item-label>
                <q-item-label>{{ selectedItem.birthdate }}</q-item-label>
              </q-item-section>
            </q-item>
            </q-list>
        </div>
      </div>
    </div>
    </q-expansion-item>
    <q-expansion-item
    class="shadow-1 overflow-hidden"
    style="border-radius: 15px;"
    label="Patient's History"
    header-class="bg-secondary text-white"
    expand-icon-class="text-white"
    >
    <div class="q-ma-md">
      <div class="row">
        <div class="col">
          <q-list>
              <q-item>
              <q-item-section>
                <q-item-label caption class="text-bold">Medical History</q-item-label>
                <q-item-label v-for="(history, index) in medicalHistory" :key="index">
                  <span>{{ history.key }}</span>
                </q-item-label>
              </q-item-section>
            </q-item>
            </q-list>
        </div>
        <div class="col">
          <q-list>
              <q-item>
              <q-item-section>
                <q-item-label caption class="text-bold">Family History</q-item-label>
                <q-item-label v-for="(history, index) in familyHistory" :key="index">
                  <span>{{ history.key }}</span>
                </q-item-label>
              </q-item-section>
            </q-item>
            </q-list>
        </div>
      </div>
    </div>
    </q-expansion-item>
  </div>

  <div class="q-ma-md"  >
    <q-tabs v-model="tab" indicator-color="secondary">
      <q-tab label="Overview" name="overview" :to="`/app/patients/${id}/overview`"/>
      <q-tab label="Vital" name="vitals" @click="goToItem()"/>
    </q-tabs>
    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="overview">
        <q-expansion-item
    class="shadow-1 overflow-hidden q-my-md"
    style="border-radius: 15px;"
    label="Patient's History"
    header-class="bg-secondary text-white"
    expand-icon-class="text-white"
    default-opened
    >
    <div class="q-ma-md">
      <div class="row">
        <div class="col">
          <q-list>
              <q-item>
              <q-item-section>
                <q-item-label caption class="text-bold">Cigarettes / day</q-item-label>
                <q-item-label v-for="activity in lifestyleData" :key="activity.physical_activity.id">
                  <span>{{ activity.cigarettes_per_day !== null ? activity.cigarettes_per_day : '-' }}</span>
                </q-item-label>
              </q-item-section>
            </q-item>
            </q-list>
        </div>
        <div class="col">
          <q-list>
              <q-item>
              <q-item-section>
                <q-item-label caption class="text-bold">Sleep / day</q-item-label>
                <q-item-label v-for="activity in lifestyleData" :key="activity.physical_activity.id">
                  <span>{{ activity.sleep_hours_per_night !== null ? activity.sleep_hours_per_night : '-' }}</span>
                </q-item-label>
              </q-item-section>
            </q-item>
            </q-list>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <q-list>
              <q-item>
              <q-item-section>
                <q-item-label caption class="text-bold">Eatouts / week</q-item-label>
                <q-item-label v-for="activity in lifestyleData" :key="activity.physical_activity.id">
                  <span>{{ activity.eating_out_frequency !== null ? activity.eating_out_frequency : '-' }}</span>
                </q-item-label>
              </q-item-section>
            </q-item>
            </q-list>
        </div>
        <div class="col">
          <q-list>
              <q-item>
              <q-item-section>
                <q-item-label caption class="text-bold">Physical Activity</q-item-label>
                <q-item-label v-for="activity in lifestyleData" :key="activity.physical_activity.id">
                  {{ activity.physical_activity.name }}
                </q-item-label>
              </q-item-section>
            </q-item>
            </q-list>
        </div>
      </div>
    </div>
    </q-expansion-item>
      </q-tab-panel>
      <q-tab-panel name="vitals">
        <vitals/>
      </q-tab-panel>
    </q-tab-panels>
  </div>
    <!-- <pre>{{ selectedItem }}</pre> -->
  </q-page>
</template>
<script>
import { api } from 'src/boot/axios'
import vitals from 'pages/patients/vitals.vue'
import { ref } from 'vue';

export default {
  components: {
    vitals
  },
  data() {
    return {
      selectedItem: {},
      medicalHistory: [],
      familyHistory: [],
      lifestyleData: [],
      tab: ref('overview'),
    }
  },
  mounted() {
    const id = this.$route.params.id;
    api.get(`/manage/patients/${id}`)
      .then(response => {
        this.selectedItem = response.data;

        const parsedMedicalHistory = JSON.parse(response.data.medical_history);
        const parsedFamilyHistory = JSON.parse(response.data.family_history);
        this.lifestyleData = JSON.parse(response.data.lifestyle);

        const medicalHistoryKeys = Object.keys(parsedMedicalHistory[0]);
        const familyHistoryKeys = Object.keys(parsedFamilyHistory[0]);

        medicalHistoryKeys.forEach(key => {
          if (parsedMedicalHistory[0][key] === true) {
            this.medicalHistory.push({ key, value: parsedMedicalHistory[0][key] });
          }
        });

        familyHistoryKeys.forEach(key => {
          if (parsedFamilyHistory[0][key] === true) {
            this.familyHistory.push({ key, value: parsedFamilyHistory[0][key] });
          }
        });

      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    goToItem() {
      this.$router.push(`/app/patients/${this.id}/vitals`);
    },
  }
};
</script>

<style>
  .bg-secondary .q-tab--active {
    background-color: var(--q-color-secondary);
  }
</style>
