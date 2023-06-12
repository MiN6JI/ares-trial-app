<template>
  <q-page class="q-mt-lg">
    <div class="row flex items-center q-mx-md q-gutter-md">
      <q-icon size="30px" name="delete_sweep" color="primary" />
      <div class="col">
        <div class="text-h5">Trash</div>
      </div>
      <div v-if="!showAll">
          <q-btn flat text-color="primary" no-caps label="See All" @click="showAll = true" />
      </div>
    </div>

    <q-list class="q-ma-md" style="background-color: white;">
      <template v-if="instituteTrashList && instituteTrashList.length">
      <q-item class="q-my-md" style="border: 1px solid #DBDFEA; border-radius: 10px;" v-for="item in showAll ? instituteTrashList : instituteTrashList.slice(0, 3)" :key="item.id" clickable v-ripple @click="goToItem(item.id)">
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
        </template>
        <template v-else>
        <q-item>
          <q-item-section>
            <q-item-label>The trash is empty</q-item-label>
          </q-item-section>
        </q-item>
      </template>
    </q-list>
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
      instituteTrashList: [],
      showAll: false
    }
  },
  mounted() { // Changed from "onMounted"
    Loading.show();
    api.get("/manage/institutes/trash").then((response) => {
      this.instituteTrashList = response.data; // Changed from "cuisineList.value"
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
