<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="shadow-1">
      <q-toolbar class="bg-white text-black">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> {{ $route.meta.title }} </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!-- <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer> -->

    <app-sidebar
      :leftDrawerOpen="leftDrawerOpen"
      :links="essentialLinks"
    ></app-sidebar>

    <q-page-container>
      <!-- style="background-color: #F8F9FD;" -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
//import EssentialLink from "components/EssentialLink.vue";
import AppSidebar from "components/app/AppSidebar.vue";

const linksList = [
  {
    title: "Dashboard",
    caption: "",
    icon: "dashboard",
    link: "/#/app/dashboard",
  },
  {
    title: "Institutes",
    caption: "",
    icon: "business",
    link: "/#/app/institutes",
  },
  {
    title: "Patients",
    caption: "",
    icon: "group_add",
    link: "/#/app/patients",
  },
  {
    title: "Nutrition",
    caption: "",
    icon: "soup_kitchen",
    link: "/#/app/nutrition",
    items: [
      {
        title: "Recipes",
        caption: "",
        icon: "breakfast_dining",
        link: "/#/app/nutrition/recipes",
      },
      {
        title: "Cuisines",
        caption: "",
        icon: "local_dining",
        link: "/#/app/nutrition/cuisines",
      },
      {
        title: "Meal Preferences",
        caption: "",
        icon: "food_bank",
        link: "/#/app/nutrition/meal-preferences",
      },
      {
        title: "Diet Types",
        caption: "",
        icon: "rice_bowl",
        link: "/#/app/nutrition/diet-types",
      },
      {
        title: "Meal",
        caption: "",
        icon: "menu_book",
        items: [
          {
            title: "Plans",
            caption: "",
            icon: "checklist",
            link: "/#/app/nutrition/meal/plans",
          },
          {
            title: "Templates",
            caption: "",
            icon: "menu_open",
            link: "/#/app/nutrition/meal/templates",
          },
        ],
      },
    ],
  },
  {
    title: "Blog",
    caption: "",
    icon: "rss_feed",
    items: [
      {
        title: "Posts",
        caption: "",
        icon: "article",
        link: "/#/app/blog",
      },
      {
        title: "Categories",
        caption: "",
        icon: "category",
        link: "/#/app/blog",
      },
      {
        title: "Tags",
        caption: "",
        icon: "sell",
        link: "/#/app/blog",
      },
    ],
  },
  {
    title: "System",
    caption: "",
    icon: "settings_suggest",
    items: [
      {
        title: "Localization",
        caption: "",
        icon: "local_library",
        items: [
          {
            title: "Countries",
            caption: "",
            icon: "public",
            link: "/#/app/blog",
          },
          {
            title: "States",
            caption: "",
            icon: "flag",
            link: "/#/app/blog",
          },
          {
            title: "Cities",
            caption: "",
            icon: "place",
            link: "/#/app/blog",
          },
          {
            title: "Languages",
            caption: "",
            icon: "language",
            link: "/#/app/blog",
          },
        ],
      },
    ],
  },
  {
    title: "Logout",
    caption: "",
    icon: "logout",
    link: "/#/auth/logout",
  },
];

export default defineComponent({
  name: "AppLayout",

  components: {
    //EssentialLink,
    AppSidebar,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
