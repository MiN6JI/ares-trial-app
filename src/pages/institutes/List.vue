<template>
  <q-page class="q-mt-md">

    <div class="row flex items-center q-mx-md q-gutter-md">
        <q-icon size="30px" name="corporate_fare" color="primary" />
        <div class="col">
          <div class="text-h5">Insititutes</div>
          <div class="text-caption" style="color: #B2B2B2;">Get the Best Medical Care</div>
        </div>
        <div v-if="!showAll">
          <q-btn flat text-color="primary" no-caps label="See All" @click="showAll = true" />

      </div>


  </div>
    <q-list class="q-ma-md" style="background-color: white;">
      <q-item class="q-my-md" style="border: 1px solid #DBDFEA; border-radius: 10px;" v-for="item in showAll ? instituteList : instituteList.slice(0, 3)" :key="item.id" clickable v-ripple @click="goToItem(item.id)">
          <q-item-section avatar>
            <q-avatar color="grey-2" size="60px" text-color="primary" >
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
              <q-icon name="arrow_forward" size="20px" color="primary" />
            </q-item-section>
        </q-item>
    </q-list>



    <!-- <pre>{{ instituteList }}</pre> -->
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="primary" to="/app/institutes/create" />
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
      instituteList: [],
      showAll: false
    }
  },
  mounted() { // Changed from "onMounted"
    Loading.show();
    api.get("/manage/institutes").then((response) => {
      this.instituteList = response.data; // Changed from "cuisineList.value"
      Loading.hide();
    });
  },
  methods: {
    goToItem(id) {
      this.$router.push(`/app/institutes/${id}`)
    }
  }
}
</script>
