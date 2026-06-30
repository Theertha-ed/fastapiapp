import type {Job} from "./job";
 interface Company {
    id: number;
    name: string;
    email:string;
    address: string;
    phone: string;
    location: string;
    jobs: Job[];
}
export type {Company}