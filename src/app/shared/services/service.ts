export interface Service {
    $key?: string;
    name: string;
    description: string;
    imagen: string;
    price: number;
    url?:string;
    time?:string;
}
