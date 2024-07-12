<template>
  <div>
    <Navbar security="unsafe" />
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
    <div class="flex justify-center text-5xl py-3 font-sans">
      Les Restaurants
    </div>
    <div class="flex justify-end w-2/3 lg:w-1/2">
      <IconField>
        <InputIcon
            class="pi pi-search"
            @click="() => console.log('clickable!!!')"
        />
        <InputText v-model="restaurant" placeholder="Rechercher un restaurant" />
      </IconField>
    </div>
    <div class="w-full p-3 flex items-center justify-center" >
      <Galleria :value="restaurants"
                :responsiveOptions="responsiveOptions"
                :numVisible="3"
                :circular="true"
                :autoPlay="true"
                :transitionInterval="20000"
                containerStyle="max-width: 640px;width: 80%">
        <template #item="slotProps">
          <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.adresse" style="width: 100%; display: block" />
        </template>
        <template #thumbnail="slotProps">
          <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.adresse" style="display: block" />
        </template>
        <template #caption="slotProps">
          <div class="text-xl mb-2 font-bold">{{ slotProps.item.nom }}</div>
          <p class="text-white">{{ slotProps.item.adresse }}</p>
        </template>
      </Galleria>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import Drawer from 'primevue/drawer'
import Button from 'primevue/button'
import { ref, onMounted } from "vue";
import restaurantsApi from "@/dal/restaurants.api";
import type {RestaurantItem} from "@/models/restaurants";
import Galleria from "primevue/galleria";

const responsiveOptions = ref([
  {
    breakpoint: '1300px',
    numVisible: 4
  },
  {
    breakpoint: '575px',
    numVisible: 1
  }
]);
const visible = ref(false);
const restaurants = ref<RestaurantItem[]>([]);
const restaurant = ref<string>("");

onMounted(async () => {
  const restos = await restaurantsApi.getRestaurants()
  restaurants.value = restos.map((resto, index) => {
    return {
      ...resto,
      itemImageSrc: new URL(`../assets/restos/${resto.id_restaurant}.jpeg`, import.meta.url).href
    }
  })
})

</script>