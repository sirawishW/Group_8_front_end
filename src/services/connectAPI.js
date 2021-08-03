import axios from "axios";

const url = "http://localhost:8082/"
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
    }
}