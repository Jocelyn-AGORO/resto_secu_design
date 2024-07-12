import { ref } from 'vue'
import { defineStore } from 'pinia'
import { axiosInstance }  from '@/dal/axios'
import type {UserCredentials, UserRegister, UserPersistence, UnSafeLoginCredentials} from "@/models/userCredentials";
import { useStorage } from '@vueuse/core'
import { useJwt } from '@vueuse/integrations/useJwt'

export const useAuthStore = defineStore('auth', () => {
    const credentials = ref<UserCredentials>({
        message: "",
        token: ""
    })
    const state = useStorage('credentials', credentials.value)
    const infos = useStorage<UserPersistence>('userPersit', {...credentials.value, remember: false})
    const isRemenber = ref<boolean>(false)

    async function signIn(login: string, password: string) {
        const response = await axiosInstance.post('/clients/login', {
            email: login,
            motDePasse: password
        });
        credentials.value = response.data as UserCredentials;
        state.value = credentials.value
        console.log("Hello : ", credentials.value, state.value)
    }

    const isAuthenticated = () : boolean => {
        console.log()
        return state.value.token.length > 15;
    }

    const signOut = () => {
        credentials.value = {message: "", token: ""}
        state.value = credentials.value
        // console.log(state.value)
    }

    const rememberCredentials = (remenber: boolean) => {
        infos.value.remember = remenber
    }

    const rememberedCredentials = () => {
        const  {header, payload} = useJwt(infos.value.token)
        console.log(header.value)
        console.log(payload.value)
        console.log(infos.value.token)
        return infos.value.remember
    }

    const register = async (userInfo: UserRegister) => {
        const response = await axiosInstance.post('/clients', userInfo);
        const info = response.data as UserRegister;
        return info.email;
    }

    async function unSafeSignIn(login: string, password: string) {
        const response = await axiosInstance.post('/clients/loginUnsafe', {
            email: login,
            motDePasse: password
        });
        console.log("Unsafe Login : ", response.data)
        return response.data as UnSafeLoginCredentials;
    }

    const unSafeRegister = async (userInfo: UserRegister) => {
        const response = await axiosInstance.post('/clients/unsafe', userInfo);
        const info = response.data as UserRegister;
        return info.email;
    }

    return { credentials ,
            isRemenber,
            unSafeRegister,
            unSafeSignIn,
            register,
            signIn,
            signOut,
            isAuthenticated,
            rememberCredentials,
            rememberedCredentials
    }
})
