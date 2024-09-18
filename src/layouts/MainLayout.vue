<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>

        <q-toolbar-title>
          Project Tory
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn @click="show(false)" fab icon="add" color="primary" dense />
      </q-page-sticky>
    </q-page-container>

    <q-footer reveal elevated class="text-white">
      <q-tabs
        v-model="tab"
      >
        <q-route-tab to="/inventory" icon="inventory" label="Inventory" exact />
        <q-route-tab to="/" icon="home" label="Home" exact />
        <q-route-tab to="/settings" icon="settings" label="Settings" exact />
      </q-tabs>
    </q-footer>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import {useRouter} from "vue-router";

// Basic layout setup
const tab = ref('home')
const router = useRouter()

const $q = useQuasar()

  // Bottom Sheet Setup and functions

const show = (grid) => {
  $q.bottomSheet({
    message: 'What would you like to do?',
    grid,
    actions: [
      {
        label: 'Start New Inventory',
        img: 'https://cdn.quasar.dev/img/logo_drive_128px.png',
        id: 'new'
      },
      {
        label: 'Add New Dough Count',
        img: 'https://cdn.quasar.dev/img/logo_keep_128px.png',
        id: 'settings'
      },
      {},
      {
        label: 'User Profile INFO',
        avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
        id: 'inventory'
      }
    ]
  }).onOk(action => {
   console.log('Action chosen:', action.id)
    router.push('/inventory/' + action.id)
  }).onCancel(() => {
// console.log('Dismissed')
  }).onDismiss(() => {
// console.log('I am triggered on both OK and Cancel')
  })
}

// FAB setup and functions
// will either be a drawer component for entering new inventory or a new page or dialog haven't decided



</script>
