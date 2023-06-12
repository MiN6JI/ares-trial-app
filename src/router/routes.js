
const routes = [
  {
    path: '/app/',
    component: () => import('layouts/AppLayout.vue'),
    children: [
      {
       path: 'dashboard',
       component: () => import('src/pages/AppDashboard.vue'),
       meta: { title: "Dashboard", requiresAuth: false },
      },
      {
        path: "institutes/",
        component: () => import('layouts/MainLayout.vue'),
        children: [
          {
            path: "",
            component: () => import("src/pages/institutes/List.vue"),
            meta: { title: "Institutes", requiresAuth: false },
          },
          {
            path: "create",
            component: () => import("src/pages/institutes/Create.vue"),
            meta: { title: "New Institute", requiresAuth: false },
          },
          {
            path: "edit/:id",
            component: () => import("src/pages/institutes/Edit.vue"),
            meta: { title: "Edit Institute", requiresAuth: false },
          },
          {
            path: ":id",
            component: () => import("src/pages/institutes/Details.vue"),
            meta: { title: "Institute Details", requiresAuth: false },
          },
          {
            path: "trash",
            component: () => import("src/pages/institutes/Trash.vue"),
            meta: { title: "Institutes Trash", requiresAuth: false },
          },
          {
            path: "staff-types",
            component: () => import("src/pages/institutes/Staff.vue"),
            meta: { title: "Create Staff", requiresAuth: false },
          },
        ]
      },
      {
        path: "patients/",
        component: () => import('layouts/MainLayout.vue'),
        children: [
          {
            path: "",
            component: () => import("src/pages/patients/List.vue"),
            meta: { title: "Patients", requiresAuth: false },
          },
          {
            path: "create/",
            component: () => import("layouts/MainLayout.vue"),
            children: [
              {
                path: "basic",
                component: () => import("pages/patients/Create.vue"),
                meta: { title: "Contact Information", requiresAuth: false },
              },
              {
                path: "contact",
                component: () => import("pages/patients/Create/ContactInfo.vue"),
                meta: { title: "Contact Information", requiresAuth: false },
              },
              {
                path: "medical",
                component: () => import("pages/patients/Create/MedicalInfo.vue"),
                meta: { title: "Medical Information", requiresAuth: false },
              },
              {
                path: "family",
                component: () => import("pages/patients/Create/FamilyInfo.vue"),
                meta: { title: "Family's Information", requiresAuth: false },
              },
              {
                path: "lifestyle",
                component: () => import("pages/patients/Create/LifeStyleInfo.vue"),
                meta: { title: "Lifestyle Information", requiresAuth: false },
              },
              {
                path: "confirm",
                component: () => import("pages/patients/Create/ConfirmInfo.vue"),
                meta: { title: "Review", requiresAuth: false },
              },
            ]
          },
          {
            path: "edit/:id",
            component: () => import("src/pages/patients/Edit.vue"),
            meta: { title: "Edit Patient", requiresAuth: false },
          },
          {
            path: ":id",
            component: () => import("src/pages/patients/Details.vue"),
            meta: { title: "Patient Details", requiresAuth: false },
            children: [
              {
                path: 'overview',
                component: () => import("src/pages/patients/Details.vue"),
              },
              {
                path: 'vitals',
                component: () => import("src/pages/patients/vitals.vue"),
              },
            ]
          },
          {
            path: "trash",
            component: () => import("src/pages/patients/Trash.vue"),
            meta: { title: "Patients Trash", requiresAuth: false },
          },
        ]
      },
      {
        path: "nutrition/",
        component: () => import("layouts/MainLayout.vue"),
        children: [
          {
            path: "cuisines/",
            component: () => import("layouts/MainLayout.vue"),
            children: [
              {
                path: "",
                component: () => import("pages/nutrition/cuisines/List.vue"),
                meta: { title: "Cuisines", requiresAuth: false },
              },
              {
                path: "create",
                component: () => import("pages/nutrition/cuisines/Create.vue"),
                meta: { title: "Create Cuisine", requiresAuth: false },
              },
              {
                path: "edit/:id",
                component: () => import("pages/nutrition/cuisines/Edit.vue"),
                meta: { title: "Edit Cuisine", requiresAuth: false },
                props: true,
              },
              {
                path: ":id",
                component: () => import("pages/nutrition/cuisines/Details.vue"),
                meta: { title: "Cuisine Details", requiresAuth: false },
              },
              {
                path: "trash",
                component: () => import("pages/nutrition/cuisines/Trash.vue"),
                meta: { title: "Cusines Trash", requiresAuth: false },
              },
            ]
          },
          {
            path: "diet-types/",
            component: () => import("layouts/MainLayout.vue"),
            children: [
              {
                path: "",
                component: () => import("pages/nutrition/diet-types/List.vue"),
                meta: { title: "Diet Types", requiresAuth: false },
              },
              {
                path: "create",
                component: () => import("pages/nutrition/diet-types/Create.vue"),
                meta: { title: "Create Diet Type", requiresAuth: false },
              },
              {
                path: "edit/:id",
                component: () => import("pages/nutrition/diet-types/Edit.vue"),
                meta: { title: "Edit Diet Type", requiresAuth: false },
              },
              {
                path: ":id",
                component: () => import("pages/nutrition/diet-types/Details.vue"),
                meta: { title: "Diet Type Details", requiresAuth: false },
              },
              {
                path: "trash",
                component: () => import("pages/nutrition/diet-types/Trash.vue"),
                meta: { title: "Diet Type Trash", requiresAuth: false },
              },
            ]
          },
          {
            path: "raw-foods/",
            component: () => import("layouts/MainLayout.vue"),
            children: [
              {
                path: "",
                component: () => import("pages/nutrition/raw-foods/List.vue"),
                meta: { title: "Raw Foods", requiresAuth: false },
              },
              {
                path: "create",
                component: () => import("pages/nutrition/raw-foods/Create.vue"),
                meta: { title: "Create Raw Food", requiresAuth: false },
              },
              {
                path: "edit/:id",
                component: () => import("pages/nutrition/raw-foods/Edit.vue"),
                meta: { title: "Edit Raw Food", requiresAuth: false },
              },
              {
                path: ":id",
                component: () => import("pages/nutrition/raw-foods/Details.vue"),
                meta: { title: "Raw Food Details", requiresAuth: false },
              },
            ]
          },
          {
            path: "raw-food-categories/",
            component: () => import("layouts/MainLayout.vue"),
            children: [
              {
                path: "",
                component: () => import("pages/nutrition/raw-food-categories/List.vue"),
                meta: { title: "Raw Food Categories", requiresAuth: false },
              },
              {
                path: "create",
                component: () => import("pages/nutrition/raw-food-categories/Create.vue"),
                meta: { title: "Create Raw Food Category", requiresAuth: false },
              },
              {
                path: "edit/:id",
                component: () => import("pages/nutrition/raw-food-categories/Edit.vue"),
                meta: { title: "Edit Raw Food Category", requiresAuth: false },
              },
              {
                path: ":id",
                component: () => import("pages/nutrition/raw-food-categories/Details.vue"),
                meta: { title: "Raw Food Category Details", requiresAuth: false },
              },
            ]
          },
          {
            path: "meal-preferences/",
            component: () => import("layouts/MainLayout.vue"),
            children: [
              {
                path: "",
                component: () => import("pages/nutrition/meal-preferences/List.vue"),
                meta: { title: "Meal Preferences", requiresAuth: false },
              },
              {
                path: "create",
                component: () => import("pages/nutrition/meal-preferences/Create.vue"),
                meta: { title: "Create Meal Preference", requiresAuth: false },
              },
              {
                path: "edit/:id",
                component: () => import("pages/nutrition/meal-preferences/Edit.vue"),
                meta: { title: "Edit Meal Preference", requiresAuth: false },
              },
              {
                path: ":id",
                component: () => import("pages/nutrition/meal-preferences/Details.vue"),
                meta: { title: "Cuisine Meal Preference", requiresAuth: false },
              },
              {
                path: "trash",
                component: () => import("pages/nutrition/meal-preferences/Trash.vue"),
                meta: { title: "Meal Preference Trash", requiresAuth: false },
              },
            ]
          },
          {
            path: "recipes/",
            component: () => import("layouts/MainLayout.vue"),
            children: [
              {
                path: "",
                component: () => import("pages/nutrition/recipes/List.vue"),
                meta: { title: "Recipes", requiresAuth: false },
              },
              {
                path: "create",
                component: () => import("pages/nutrition/recipes/Create.vue"),
                meta: { title: "Create Recipe", requiresAuth: false },
              },
              {
                path: "edit/:id",
                component: () => import("pages/nutrition/recipes/Edit.vue"),
                meta: { title: "Edit Recipe", requiresAuth: false },
              },
              {
                path: ":id",
                component: () => import("pages/nutrition/recipes/Details.vue"),
                meta: { title: "Cuisine Recipe", requiresAuth: false },
              },
            ]
          },
          {
            path: "meal/",
            component: () => import("layouts/MainLayout.vue"),
            children: [
              {
                path: "plans",
                component: () => import("pages/nutrition/meal/plans/List.vue"),
                meta: { title: "Meal Plans", requiresAuth: false },
              },
              {
                path: "plans/create",
                component: () => import("pages/nutrition/meal/plans/Create.vue"),
                meta: { title: "Create Meal Plan", requiresAuth: false },
              },
              {
                path: "plans/edit/:id",
                component: () => import("pages/nutrition/meal/plans/Edit.vue"),
                meta: { title: "Edit Meal Plan", requiresAuth: false },
              },
              {
                path: "plans/:id",
                component: () => import("pages/nutrition/meal/plans/Details.vue"),
                meta: { title: "Meal Plan Details", requiresAuth: false },
              },
              {
                path: "templates",
                component: () => import("pages/nutrition/meal/templates/List.vue"),
                meta: { title: "Meal Templates", requiresAuth: false },
              },
              {
                path: "templates/create",
                component: () => import("pages/nutrition/meal/templates/Create.vue"),
                meta: { title: "Create Meal Template", requiresAuth: false },
              },
              {
                path: "templates/edit/:id",
                component: () => import("pages/nutrition/meal/templates/Edit.vue"),
                meta: { title: "Edit Meal Template", requiresAuth: false },
              },
              {
                path: "templates/:id",
                component: () => import("pages/nutrition/meal/templates/Details.vue"),
                meta: { title: "Meal Template Details", requiresAuth: false },
              },
            ]
          },
        ],
      },
      {
        path: "/patientType",
        component: () => import("pages/PrescribeMealPlan/patientType.vue"),
      },
      {
        path: "/mealPlan",
        component: () => import("layouts/MainLayout.vue"),
        children: [
          {
            path: "/mealPlan-basic",
            component: () => import("pages/PrescribeMealPlan/BasicMealPLan.vue"),
            meta: { title: "Meal Plan", requiresAuth: false },
          },
          {
            path: "/mealPlan-other-details",
            component: () => import("pages/PrescribeMealPlan/otherDetails.vue"),
            meta: { title: "Meal Plan", requiresAuth: false },
          },
          {
            path: "/mealPlan-preview",
            component: () => import("pages/PrescribeMealPlan/preview.vue"),
            meta: { title: "Meal Plan", requiresAuth: false },
          },
        ]
      },
      {
       path: '/addPatient',
       component: () => import('src/pages/patientDetails/addPatientCard.vue')
      },
      {
        path: "/mealPreference",
        component: () => import("pages/nutrition/meal-preferences/mealPreference.vue"),
      },
      {
        path: "/meal-create",
        component: () => import("pages/nutrition/meal-preferences/Create.vue"),
      },
      {
        path: "/cuisine-table",
        component: () => import("pages/nutrition/cuisines/cuisine.vue"),
      },
      {
        path: "/createMealPlan",
        component: () => import("pages/PrescribeMealPlan/createMealPlan.vue"),
      },
      {
        path: "/meal-plan-preview",
        component: () => import("pages/PrescribeMealPlan/createMealPlan.vue"),
      },
      {
        path: "/dashboard_content",
        component: () => import("pages/DashBoard/dashboardContent.vue"),
      },
      {
        path: "/diet-type-table",
        component: () => import("pages/nutrition/diet-types/List.vue"),
      },
      {
        path: "/addPatient/basic",
        component: () => import("pages/patientDetails/basic.vue"),
      },

      ]
  },

  {
    path: "/auth/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "register",
        component: () => import("pages/auth/SignUp.vue"),
        meta: { title: "Register", requiresAuth: false },
      },
      {
        path: "login",
        component: () => import("pages/auth/SignIn.vue"),
        meta: { title: "Login", requiresAuth: false },
      },
      {
        path: "forgot-password",
        component: () => import("pages/auth/ForgotPassword.vue"),
        meta: { title: "Forgot Password", requiresAuth: false },
      },
    ],
  },

  {
    path: "/auth/",
    component: () => import("layouts/AppLayout.vue"),
    children: [
      {
        path: "logout",
        component: () => import("pages/auth/SignOut.vue"),
        meta: { title: "Logout", requiresAuth: false },
      },
      {
        path: "change-password",
        component: () => import("pages/auth/ChangePassword.vue"),
        meta: { title: "Change Password", requiresAuth: false },
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
