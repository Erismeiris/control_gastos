
//Interface for user
export interface User {
    uid: string;
    email: string;
    displayName?: string;
    photoURL?: string;
    pais?: string;
    tipoMoneda?: string;
    emailVerified: boolean;
}