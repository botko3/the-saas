/**
 * for merge css class with the maxwidthwrapper 
 */


import clsx,{ClassValue} from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs:ClassValue[]){
    return twMerge(clsx(inputs))
}