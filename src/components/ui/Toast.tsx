import { toast } from "react-toastify";

export const handleSuccess = (msg:string) => {
    toast.success(msg)
}


export const handleError = (msg:string) => {
    toast.error(msg)
}