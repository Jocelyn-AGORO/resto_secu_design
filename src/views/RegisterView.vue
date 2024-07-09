<template>
  <div class="register-page p-4 shadow-2 border-round">
    <div class="flex flex-col items-center gap-2 text-center mb-5">
      <span class="pi pi-user" style="font-size: 2.5rem"></span>
      <div class="text-900 text-3xl font-medium mb-3">Créer votre compte</div>
    </div>
    <div class="flex flex-col gap-2">
      <div class="flex flex-col gap-1">
        <label for="nom" class="block text-900 font-medium mb-2">Nom</label>
        <InputText v-model="user.nom" name="nom" id="nom" type="text" class="w-full mb-3" />
      </div>
      <div class="flex flex-col gap-1">
        <label for="prenom" class="block text-900 font-medium mb-2">Prénom</label>
        <InputText v-model="user.prenom" name="prenom" id="prenom" type="text" class="w-full mb-3" />
      </div>
      <div class="flex flex-col gap-1">
        <label for="email" class="block text-900 font-medium mb-2">Email</label>
        <InputText v-model="user.email" name="email" id="email" type="text" class="w-full mb-3" />
      </div>
      <div class="flex flex-col gap-1">
        <label for="password" class="block text-900 font-medium mb-2">Mot de passe</label>
        <InputText v-model="user.motDePasse" name="password" id="password" type="password" class="w-full mb-3" />
      </div>
      <div class="flex flex-col gap-1">
        <label for="telephone" class="block text-900 font-medium mb-2">Téléphone</label>
        <InputText v-model="user.telephone" name="telephone" id="telephone" type="telephone" class="w-full mb-3" />
      </div>
      <div>
        {{user}}
      </div>
      <div class="w-full my-2 flex justify-center">
        <Button label="Créer"
                icon="pi pi-user"
                class="w-full"
                @click="register"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {reactive, ref} from "vue"
import {useRouter} from "vue-router"
import PlateIcon from "@/components/icons/PlateIcon.vue";
import InputText from "primevue/inputtext";
import Checkbox from "primevue/checkbox";
import Button from "primevue/button";
import {useAuthStore} from "@/stores/auth"

const router = useRouter()
const {signIn, isAuthenticated} = useAuthStore()
const checked = ref<boolean>(false)
const user = reactive({
  nom: "",
  prenom: "",
  email: "",
  motDePasse: "",
  telephone: ""
})

const register = async () => {
  //
}

</script>

<style scoped>
.register-page {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>