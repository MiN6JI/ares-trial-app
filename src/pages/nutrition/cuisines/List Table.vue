<template>
  <q-page>
  <div class="q-ma-lg" style="width: 450px; border: 1px solid black; height: 500px;">
    <q-tabs class="q-mb-sm" indicator-color="primary" active-color="primary">
      <q-route-tab dense name="All" label="All" to="/app/nutrition/cuisiness" exact/>
      <q-route-tab dense name="Trash" label="Trash" to="/app/nutrition/cuisines/trashs" exact/>
    </q-tabs>
    <q-list separator bordered>
      <q-item v-ripple clickable v-for="(cuisine, cuisineIndex) in cuisineList" :key="cuisineIndex">
        <q-item-section>
          <q-item-label>{{ cuisine.name }}</q-item-label>
        </q-item-section>
          <q-item-section side>
            <q-btn dense flat rounded icon="arrow_forward_ios" />
          </q-item-section>
        </q-item>
    </q-list>
  </div>


    <pre>
      {{ cuisineList }}
    </pre>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn
        fab
        icon="add"
        color="primary"
        to="/app/nutrition/cuisines/create"
      />
    </q-page-sticky>
  </q-page>
</template>
<template>
  <div>
    <q-list>
      <q-item v-for="item in items" :key="item.id" clickable @click="goToItem(item.id)">
        <q-item-section>
          <q-item-label>{{ item.title }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

    <pre>{{ items }}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: []
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        this.items = data
      })
  },
  methods: {
    goToItem(id) {
      this.$router.push(`/app/nutrition/cuisines/${id}`)
    }
  }
}
</script>
<!--
<template>
  <q-page>

    <div class="q-ma-md" style="width: 450px; height: 500px; border: 1px solid black;">
      <q-tabs class="q-mb-sm" indicator-color="primary" active-color="primary">
      <q-route-tab dense name="All" label="All" to="/app/nutrition/cuisiness" exact/>
      <q-route-tab dense name="Trash" label="Trash" to="/app/nutrition/cuisines/trashs" exact/>
    </q-tabs>
    <div>
        <div class="q-mx-md text-h6">Search</div>
        <q-input outlined dense debounce="300" v-model="filter" placeholder="Search" class="q-mx-sm">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
    </div>

    <q-list separator bordered class="q-ma-md">
      <router-link v-for="(cuisine, cuisineIndex) in cuisineList" :key="cuisineIndex" :to="'/app/nutrition/cuisines/' + cuisine.id">
        <q-item v-ripple clickable>
          <q-item-section>
            <q-item-label>{{ cuisine.name }}</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-btn dense flat rounded icon="arrow_forward_ios" />
          </q-item-section>
        </q-item>
      </router-link>
    </q-list>
    </div>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <router-link to="/app/nutrition/cuisines/create">
        <q-btn fab icon="add" color="primary" />
      </router-link>
    </q-page-sticky>
  </q-page>
</template>

<script>
import { onMounted, ref } from "vue";
import { api } from "boot/axios";
import { Loading } from "quasar";

export default {
setup() {
  const cuisineList = ref([]);

  onMounted(() => {
    Loading.show();
    api.get("/manage/nutrition/cuisines/").then((response) => {
      cuisineList.value = response.data;
      Loading.hide();
    });
  });

  return{
    cuisineList
  }
}
};
</script>
