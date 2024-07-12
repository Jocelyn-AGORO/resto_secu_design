import {axiosInstance} from "@/dal/axios";
import type {Restaurant} from "@/models/restaurants";

export default {
    async getRestaurants (): Promise<Restaurant[]> {
        const response = await axiosInstance.get('/restaurants')
        return response.data;
    },
    async searchRestaurants (name: string): Promise<Restaurant[]> {
        const response = await axiosInstance.get(`restaurants/search?nom=${name}`)
        return response.data;
    },
    async searchUnRestaurants (name: string): Promise<Restaurant[]> {
        const response = await axiosInstance.get(`restaurants/searchUnsafe?nom=${name}`)
        return response.data;
    }
}