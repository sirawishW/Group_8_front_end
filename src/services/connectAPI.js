import axios from "axios";

const url = "http://localhost:8082/"
let token = ''
export default{
    async getAPI(path){
        return axios.get(url + path 
        //     , {
        //     headers: {
        //       Authorization: "Bearer " + JSON.parse(localStorage.getItem("auth.userProfile")).jwt
        //     }
        // }
        ).then((res) => {
            return res.data;
        });
    },
    async getAPIWithToken(path){
        return axios.get(url + path 
            , {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("me")
            }
        }
        ).then((res) => {
            return res.data;
        });
    },
    async registerUser(name, email, password){
        return axios.post(url + "auth/local/register" 
            , {
                username: name,
                email : email,
                password : password,
        }
        ).then((res) => {
            this.token = res.data.jwt;
            return res.data;
        });
    },
    async login(email, password){
        return axios.post(url + "auth/local" 
            , {
                identifier : email,
                password : password,
        }
        ).then((res) => {
            this.token = res.data.jwt;
            localStorage.setItem("me", this.token)
            return res.data;
        });
    },
    async putAPI(path, body){
        return axios.put(url + path , body
        ).then((res) => {
            return res.data;
        });
    },
    async postAPI(path, body){
        return axios.post(url + path , body
            ,{
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("me")
                }
            }
        ).then((res) => {
            return res.data;
        });
    },
    logout(){
        localStorage.removeItem("me")
        this.token = '';
    },
    async deleteAPI(path, id){
     return axios.delete(url + path + id ,{ headers: {
        Authorization: "Bearer " + localStorage.getItem("me")
    } 
      }
     )}
}