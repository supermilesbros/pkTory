<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          Tory
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" overlay behavior="mobile" elevated>
      <drawer-comp/>
    </q-drawer>

    <q-page-container>
      <router-view />
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn @click="openNewInventory()" fab icon="add" color="primary" dense />
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
import DrawerComp from "components/drawer/DrawerComp.vue";

// Basic layout setup
const tab = ref('home')

  // Drawer Setup and functions

const leftDrawerOpen = ref(false)
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

// FAB setup and functions
// will either be a drawer component for entering new inventory or a new page or dialog haven't decided

const openNewInventory = () => {
  toggleLeftDrawer()
}


</script>
