import toast from "react-hot-toast"
import { changePassword as changePasswordRequest } from "../../services"

export const useChangePassword = () => {
    const changePassword = async (password, newPassword) => {
        const responseData = await changePasswordRequest({ password, newPassword})

        if (responseData.error){
            return toast.error(responseData.e?.responseData?.data || 'Error ocurred when updating password')
        }

        toast.success('Password changed successfully')
    }

    return {
        changePassword
    }
}