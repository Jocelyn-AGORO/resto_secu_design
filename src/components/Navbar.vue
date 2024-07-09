
<template>
  <div class="card">
    <Menubar :model="items" >
      <template #start>
        <PlateIcon/>
      </template>
      <template #end>
        <div class="flex items-center gap-2">
          <SplitButton :pt="{
            pcButton: { class: 'rounded-full', backgroundColor: 'red' }
          }"
          :model="menus">
            <template>
              <Avatar :image="user" shape="circle" />
            </template>
          </SplitButton>
        </div>
      </template>
    </Menubar>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import {useRouter} from "vue-router";
import Menubar from 'primevue/menubar'
import Avatar from 'primevue/avatar'
import SplitButton from 'primevue/splitbutton';
import PlateIcon from '@/components/icons/PlateIcon.vue'
import user from '@/assets/static/user.png'
import {useAuthStore} from "@/stores/auth"

const router = useRouter()
const {signOut} = useAuthStore()
const items = ref([
  {
    label: 'Restaurants',
    icon: 'pi pi-home'
  },
  {
    label: 'Tables',
    icon: 'pi pi-star'
  },
  {
    label: 'Contact',
    icon: 'pi pi-envelope'
  }
]);

const menus = ref([
  {
    label: 'Déconnexion',
    icon: 'pi pi-sign-out',
    command: () => {
      signOut()
      router.push({name: 'login'})
    }
  },
])

</script>

