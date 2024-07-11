<template>
  <div class="login-page p-4 shadow-2 border-round">
    <div class="absolute top-4 right-6">
      <SelectButton v-model="mode" :options="modes" optionLabel="name" optionValue="value" />
    </div>
    <div class="flex flex-col items-center gap-2 text-center mb-5">
      <PlateIcon size="4rem" />
      <div class="text-900 text-3xl font-medium mb-3">Bienvenue à RestoWell</div>
    </div>
    <div class="flex flex-col gap-3 w-2/3 lg:w-1/3">
      <div class="flex flex-col gap-1">
        <label for="email" class="block text-900 font-medium mb-2">Email</label>
        <InputText v-model="credentials.email" name="email" id="email" type="text" class="w-full mb-3" />
      </div>
      <div class="flex flex-col gap-1">
        <label for="password" class="block text-900 font-medium mb-2">Mot de passe</label>
        <InputText v-model="credentials.password" name="password" id="password" type="password" class="w-full mb-3" />
      </div>
      <div class="flex items-center justify-between mb-2">
        <div class="w-full flex items-center justify-between">
          <div>
            <Checkbox id="rememberme" :binary="true" v-model="checked" class="mr-2"></Checkbox>
            <label class="ml-1 cursor-pointer" for="rememberme" @click="checked=!checked">Se souvenir de moi</label>
          </div>
          <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer"
             @click="() => router.push('/unsafe/register')"
          >
            Créer un compte
          </a>
        </div>
      </div>
      <div class="w-full my-2 flex justify-center">
        <Button label="Connexion"
                icon="pi pi-user"
                class="w-full"
                @click="login"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {reactive, ref, watch, onMounted } from "vue"
import {useRouter} from "vue-router"
import PlateIcon from "@/components/icons/PlateIcon.vue";
import InputText from "primevue/inputtext";
import Checkbox from "primevue/checkbox";
import SelectButton from 'primevue/selectbutton';
import Button from "primevue/button";
import {useAuthStore} from "@/stores/auth"

const router = useRouter()
const {unSafeSignIn, rememberedCredentials, rememberCredentials } = useAuthStore()
const checked = ref<boolean>(false)
const credentials = reactive({
  email: "",
  password: ""
})
const modes = ref([
  { name: 'Sécurisé', value: "safe" },
  { name: 'Vulnérable', value: "unsafe" }
]);
const mode = ref<string>("unsafe")

const login = async () => {
  await unSafeSignIn(credentials.email, credentials.password)
  await router.push({name: "unSafeHome"})
}

onMounted(async ()=> {
  checked.value = rememberedCredentials()
})

watch(checked, (isRemenbered: boolean)=> {
  rememberCredentials(isRemenbered)
})

watch(mode, (newMode) => {
  if(newMode === "safe"){
    router.push("/login")
  } else {
    router.push("/unsafe/login")
  }
})

</script>

<style scoped>
.login-page {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>