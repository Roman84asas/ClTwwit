import { axios } from "../../core/axois";
import {LoginFormProps} from "../../pages/Signin/components/LoginModal";
import {RegisterFormProps} from "../../pages/Signin/components/RegisterModal";

interface Response {
    status: string,
    data: any
}

export const AuthApi = {
    async signIn(postData: LoginFormProps): Promise<Response> {
        const { data } = await axios.post('/api/auth/login', {username: postData.username, password: postData.password});
        return data;
    },
    async signUp(postData: RegisterFormProps): Promise<Response> {
        const { data } = await axios.post('/api/auth/register', { email: postData.email, fullname: postData.fullname, username: postData.username, password: postData.password, password2: postData.password});
        return data;
    },
    async getMe(): Promise<Response> {
        const { data } = await axios.get('/api/user/me');
        return data;
    },
};