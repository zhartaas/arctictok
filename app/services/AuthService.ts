import axios from "axios";

const baseUrl = 'http://localhost:8000'

export interface AuthProps{
    email: string;
    password: string;
}

class AuthService {
    async register(data: AuthProps){
        const response = await axios.post(`${baseUrl}/auth/users`, {
            email: data.email,
            password: data.password
        })
        const result = response.data
        return result
    }
    async login(data: AuthProps){
        const url = 'http://localhost:8000/auth/users/tokens';
        const headers = {
            'accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        };
        const requestData = `grant_type=&username=${encodeURIComponent(data.email)}&password=${encodeURIComponent(data.password)}&scope=&client_id=&client_secret=`;

        return axios.post(url, requestData, { headers })
            .then(response => {

            // console.log(response.data.accessToken)
            localStorage.setItem("user", JSON.stringify(response.data));
            
            console.log(response.data)
            return response.data;
            })
            .catch(error => {
            throw error;
            });
    }

    logout() {
        localStorage.removeItem("user");
  }

}

export const authService = new AuthService()

