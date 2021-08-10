<template>
  <div class="note">
    <div class="header">
      <h1>เรียงลำดับตัวโน๊ตที่อยู่ในช่องเก็บของ</h1>
    </div>

    <div class="center">
      
    <div v-if="check_piano==100">
        <div style="margin-right:50px;" >
          <div id="container">
            <router-link to="/numalee" >
              <img src="@/assets/8.png" /><br />
            </router-link>
          </div>
          <h2>เพลงหนูมาลี</h2>
        </div>
    </div>

    <div v-if="check_piano == 200">
        <div style="margin-right:50px;" >
          <div id="container">
            <router-link to="/numalee" >
              <img src="@/assets/8.png" /><br />
            </router-link>
          </div>
          <h2>เพลงหนูมาลี</h2>
        </div>
        <br><br>
        <div style="margin-right:50px;">
          <div id="container">
            <router-link to="/jingle-bell" >
              <img src="@/assets/7.png" /><br />
            </router-link>
          </div>
          <h2>เพลง Jingle Bell</h2>
        </div>
    </div>

    </div>

  </div>
</template>

<script>
import connectAPI from "@/services/connectAPI";
export default {
//   props:['question_array'],
  props:{set:String},
  data(){
      return{
          user_id:'',
          check_piano:0,
      }
  },
  mounted(){
      this.getData()
      this.getPoint()
  },
  methods:{
    async getData(){
        await connectAPI.getAPI("quizzes?Set=" + this.set).then((res) =>{
            this.question = res
        })            
    },
    async getPoint(){
            if (window.localStorage.user){
               var pia = JSON.parse(window.localStorage.user)
              await connectAPI.getAPIWithToken("users/"+pia.id).then((res) =>{

                console.log(res)
                this.user_point = res.point
                this.user_id = res.id;
                console.log(res.set_quizs)
                this.check_piano = res.point
                console.log(this.check_piano)
              })
            }
           
    },

        
  }

}
</script>

<style scoped>
.center {
  display: flex;
  justify-content: center;
  text-align: center;
}

.header {
  display: flex;
  justify-content: center;
  padding: 2.5%;
}

h2 {
  color: black;
}

#container:hover img {
  transform: scale(1.2, 1.2);
  z-index: 9;
}
</style>
