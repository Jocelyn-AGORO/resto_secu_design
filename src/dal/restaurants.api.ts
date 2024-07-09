import {axiosInstance} from "@/dal/axios";
import type {Restaurant} from "@/models/restaurants";

export default {
    async getRestaurants (): Promise<Restaurant[]> {
        const response = await axiosInstance.get('/restaurants')
        return response.data;
    }
}