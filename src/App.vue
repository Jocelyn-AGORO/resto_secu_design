<template>
  <div>
    <NavBar />
    <div class="wrapper">
      <nav>
        <Button icon="pi pi-plus" @click="visible = true" />
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
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
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
