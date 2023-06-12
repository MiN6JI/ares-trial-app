<template>
<q-page>
  <q-card class="q-ma-md">
    <PatientTabs/>
    <div class="q-px-lg q-pb-md">
    <q-timeline color="warning">
      <q-timeline-entry heading>
        Overview
      </q-timeline-entry>

      <q-timeline-entry
        title="Basic"
        icon="perm_contact_calendar"
      >
        <q-card class="my-card">
          <q-card-section>
            <div class="row q-my-md">
              <div class="col text-weight-bold">
                Name
                <div class="row text-weight-regular q-py-sm">
                  {{ patientForm.BasicInfo.name }}
                </div>
              </div>
              <div class="col text-weight-bold">
                Birth Date
                <div class="row text-weight-regular q-py-sm">
                  {{ patientForm.BasicInfo.date }}
                </div>
              </div>
              <div class="col text-weight-bold">
                Gender
                <div class="row text-weight-regular q-py-sm">
                  {{ patientForm.BasicInfo.gender.label }}
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </q-timeline-entry>

      <q-timeline-entry
        title="Contact"
        icon="contacts"
      >
        <q-card class="my-card">
          <q-card-section>
            <div class="row q-my-lg">
              <div class="col text-weight-bold">
                Email
                <div class="row text-weight-regular q-py-sm">
                  {{patientForm.ContactInfo.email}}
                </div>
              </div>
              <div class="col text-weight-bold">
                Mobile
                <div class="row text-weight-regular q-py-sm">
                  {{ patientForm.ContactInfo.tel }}
                </div>
              </div>
            </div>

            <div class="row q-my-lg">
              <div class="col text-weight-bold">
                Country
                <div class="row text-weight-regular q-py-sm">
                  {{ patientForm.ContactInfo.country.name }}
                </div>
              </div>
              <div class="col text-weight-bold">
                State
                <div class="row text-weight-regular q-py-sm">
                  {{ patientForm.ContactInfo.state.name }}
                </div>
              </div>
              <div class="col text-weight-bold">
                City
                <div class="row text-weight-regular q-py-sm">
                  {{ patientForm.ContactInfo.city.name }}
                </div>
              </div>
              <div class="col text-weight-bold">
                Pincode
                <div class="row text-weight-regular q-py-sm">
                  {{ patientForm.ContactInfo.pincode }}
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </q-timeline-entry>

      <q-timeline-entry
        title="Medical History"
        icon="monitor_heart"
      >
        <q-card class="my-card">
          <q-card-section>
            <div class="row q-my-lg">
              <div class="col text-weight-bold">
                Diabetes
                <div class="row text-weight-regular q-py-sm">
                  {{ patientForm.MedicalInfo.disease.includes('option1') ? 'Yes' : 'No'  }}
                </div>
              </div>
              <div class="col text-weight-bold">
                Hypertension
                <div class="row text-weight-regular q-py-sm">
                  {{ patientForm.MedicalInfo.disease.includes('option2') ? 'Yes' : 'No'  }}
                </div>
              </div>
              <div class="col text-weight-bold">
                Cardiovascular Disease
                <div class="row text-weight-regular q-py-sm">
                  {{ patientForm.MedicalInfo.disease.includes('option3') ? 'Yes' : 'No'  }}
                </div>
              </div>
              <div class="col text-weight-bold">
                Chronic Kidney Disease
                <div class="row text-weight-regular q-py-sm">
                  {{ patientForm.MedicalInfo.disease.includes('option4') ? 'Yes' : 'No'  }}
                </div>
              </div>
            </div>
            <div class="row q-my-lg">
              <div class="col-3 text-weight-bold">
                PCOD
                <div class="row text-weight-regular q-py-sm">
                  -
                </div>
              </div>
              <div class="col-3 text-weight-bold">
                Other Medical History
                <div class="row text-weight-regular q-py-sm">
                  {{ patientForm.MedicalInfo.medicalOtherDisease }}
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </q-timeline-entry>

      <q-timeline-entry
        title="Family History"
        icon="house"
      >
        <q-card class="my-card">
          <q-card-section>
            <div class="row q-my-lg">
              <div class="col text-weight-bold">
                Diabetes
                <div class="row text-weight-regular q-py-sm">
                  {{ patientForm.FamilyInfo.familydisease.includes('option1') ? 'Yes' : 'No'  }}
                </div>
              </div>
              <div class="col text-weight-bold">
                Hypertension
                <div class="row text-weight-regular q-py-sm">
                  {{ patientForm.FamilyInfo.familydisease.includes('option2') ? 'Yes' : 'No'  }}
                </div>
              </div>
              <div class="col text-weight-bold">
                Cardiovascular Disease
                <div class="row text-weight-regular q-py-sm">
                  {{ patientForm.FamilyInfo.familydisease.includes('option3') ? 'Yes' : 'No'  }}
                </div>
              </div>
              <div class="col text-weight-bold">
                Chronic Kidney Disease
                <div class="row text-weight-regular q-py-sm">
                  {{ patientForm.FamilyInfo.familydisease.includes('option4') ? 'Yes' : 'No'  }}
                </div>
              </div>
            </div>
            <div class="row q-my-lg">
              <div class="col-3 text-weight-bold">
                PCOD
                <div class="row text-weight-regular q-py-sm">
                  {{ patientForm.FamilyInfo.familydisease.includes('option5') ? 'Yes' : 'No'  }}
                </div>
              </div>
              <div class="col-3 text-weight-bold">
                Other Medical History
                <div class="row text-weight-regular q-py-sm">
                  {{ patientForm.FamilyInfo.familyOtherDisease }}
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </q-timeline-entry>

      <q-timeline-entry
        title="Lifestyle"
        icon="sensor_occupied"
      >
        <q-card class="my-card">
          <q-card-section>
            <div class="row q-my-lg">
              <div class="col text-weight-bold">
                Physical Activity
                <div class="row text-weight-regular q-py-sm">
                  {{ patientForm.LifestyleInfo.exercise.label }}
                </div>
              </div>
              <div class="col text-weight-bold">
                Sleep hours / night
                <div class="row text-weight-regular q-py-sm">
                  {{ patientForm.LifestyleInfo.hours }}
                </div>
              </div>
              <div class="col text-weight-bold">
                Eating out Frequency
                <div class="row text-weight-regular q-py-sm">
                  {{ patientForm.LifestyleInfo.eatingFrequency }}
                </div>
              </div>
            </div>
            <div class="row q-my-lg">
              <div class="col-4 text-weight-bold">
                Alcohol consumption / week
                <div class="row text-weight-regular q-py-sm">
                  {{ patientForm.LifestyleInfo.alcoholConsumption }}
                </div>
              </div>
              <div class="col- text-weight-bold">
                Cigarattes /day
                <div class="row text-weight-regular q-py-sm">
                  {{ patientForm.LifestyleInfo.cigarettesPerDay }}
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </q-timeline-entry>
    </q-timeline>

    <div class="row justify-center">
        <q-btn
        flat rounded
        class="q-mx-sm text-primary"
        :style="{ backgroundColor: '#E8F5EF' }"
        icon="chevron_left"
        label="Back"
        to="/app/patients/create/lifestyle"
        />
        <q-btn
        unelevated rounded
        class="q-mx-sm"
        color="primary"
        @click="resetForm"
        to="/app/patients"
        icon-right="chevron_right"
        label="submit"
        />
      </div>

  </div>
  </q-card>
  <q-page-sticky position="bottom-right" :offset="[18, 18]">
  <q-btn fab icon="add" color="primary" to="/app/patients/" />
  </q-page-sticky>
</q-page>
</template>

<script>
import { usePatientStore } from 'stores/patientForm'
import PatientTabs from 'pages/patientDetails/PatientTabs.vue'
import { bexBackground } from 'quasar/wrappers'
export default {
  components: {
    PatientTabs,
  },
  setup() {
    const patientForm = usePatientStore()

    const resetForm = () => {
      // Need to write a reset funtion so that whenever a user clicks on submit it should go to patient table where the table gets updated but now  when the user refresh it should refresh the form.
      alert("Please Help me")
    }
    return {
      patientForm,
      resetForm,
    }
  }

}
</script>

