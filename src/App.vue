<template>
    <NavBar />
    <div class="wrapper">
      <nav>
        <Button icon="pi pi-plus" @click="visible = true" />
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  <template>
    <div class="card flex justify-center">
      <Drawer v-model:visible="visible">
        <template #header>
          <div class="flex items-center gap-2">
            <span class="font-bold">Amy Elsner</span>
          </div>
        </template>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <template #footer>
          <div class="flex items-center gap-2">
            <Button label="Account" icon="pi pi-user" class="flex-auto" outlined></Button>
            <Button label="Logout" icon="pi pi-sign-out" class="flex-auto" severity="danger" text></Button>
          </div>
        </template>
      </Drawer>
    </div>
  </template>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Drawer from 'primevue/drawer'
import Button from 'primevue/button'
import NavBar from '@/components/Navbar.vue'
import { ref } from "vue";

const visible = ref(false);
</script>

<style scoped>

</style>
