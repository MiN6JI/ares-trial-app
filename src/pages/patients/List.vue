<template>
  <q-page class="q-mt-md">

    <div class="row flex items-center q-mx-md q-gutter-md">
        <q-icon size="30px" name="masks" color="primary" />
        <div class="col">
          <div class="text-h5">Patients</div>
          <div class="text-caption" style="color: #B2B2B2;">Beyond Diagnosis: A Life in Progress</div>
        </div>
        <div v-if="!showAll">
          <q-btn flat text-color="primary" no-caps label="See All" @click="showAll = true" />
      </div>
  </div>

    <div>
    <q-list class="q-ma-md">
      <q-item class="q-ma-md" style="border-radius: 10px; border: 1px solid rgb(190, 190, 190);"  v-for="item in showAll ? patientList : patientList.slice(0, 5)" :key="item.id" clickable v-ripple @click="goToItem(item.id)">
          <q-item-section avatar>
            <q-avatar color="primary" text-color="white">
              {{ item.name.substring(0, 1) }}
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ item.name }}</q-item-label>
            <q-item-label v-if="item.gender === 1">Female</q-item-label>
            <q-item-label v-if="item.gender === 2">Male</q-item-label>
            <q-item-label v-if="item.gender === 3">Other</q-item-label>
            <q-item-label caption lines="1">{{ item.email }}</q-item-label>
          </q-item-section>

            <q-item-section side>
                <q-fab
                  flat
                v-model="fab1"
                  direction="down"
                  icon="more_vert"
                  padding="xs"
                  >
                  <q-fab-action padding="5px" color="primary" icon="mail" />
                  <q-fab-action padding="5px" color="orange" icon="room" />
                </q-fab>
            </q-item-section>
        </q-item>
    </q-list>

    <pre>{{ patientList }}</pre>
  </div>

  <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="primary" to="/app/patients/create/basic" />
    </q-page-sticky>


  </q-page>
</template>

<script>
import { ref } from "vue";
import { api } from "boot/axios";
import { Loading } from "quasar";

export default {
  data() {
    return{
      fab1: ref(false),
      patientList: [],
      showAll: false

    }
  },
  mounted() { // Changed from "onMounted"
    Loading.show();
    api.get("/manage/patients").then((response) => {
      this.patientList = response.data; // Changed from "cuisineList.value"
      Loading.hide();
    });
  },
  methods: {
    goToItem(id) {
      this.$router.push(`/app/patients/${id}/overview`)
    }
  }
}
</script>

