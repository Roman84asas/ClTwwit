import { axios } from "../../core/axois";
import {LoginFormProps} from "../../pages/Signin/components/LoginModal";

interface Response {
    status: string,
    data: any
}

export const AuthApi = {
    async signIn(postData: LoginFormProps): Promise<Response> {
        const { data } = await axios.post('/api/auth/login', postData);
        return data.data;
    },
};