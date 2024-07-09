
export interface Restaurant {
    id_restaurant: number;
    nom: string,
    adresse: string,
    telephone: string
}

export interface RestaurantItem extends Restaurant {
    itemImageSrc: any;
}