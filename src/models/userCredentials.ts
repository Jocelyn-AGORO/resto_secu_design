export interface UserCredentials {
    message: string;
    token: string;
}

export interface UserRegister {
    nom: string,
    prenom: string,
    email: string,
    motDePasse: string,
    telephone: string
}

export interface UserPersistence extends UserCredentials {
    remember: boolean;
}

export interface UserInfos extends UserRegister {
    id_client: number;
}

export interface UnSafeLoginCredentials {
    message: string;
    client: UserInfos;
}