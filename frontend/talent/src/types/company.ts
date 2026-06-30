import type { Job } from "./job";

export interface Company {
    id: number;
    name: string;
    address: string;
    phone: string;
    location: string;
    jobs: Job[];
}