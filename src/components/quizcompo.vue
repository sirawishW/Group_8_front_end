<template>
  <div class="quizz">
      <div class="center">

          <div class="header">

            <h2>{{ current_question+1 }}. </h2> 
          
          </div>

          <div class="header">

            <h2>{{ question_array[current_question].question }} </h2>
          
          </div>
          
      </div>
            
        <div class="center">
          <button class="button" @click="checkAnswer(question_array[current_question].one)">{{ question_array[current_question].one }}</button>
          <button class="button2" @click="checkAnswer(question_array[current_question].two)">{{ question_array[current_question].two }}</button>
        </div>

        <div class="center">
          <button class="button3" @click="checkAnswer(question_array[current_question].three)">{{ question_array[current_question].three }}</button>
          <button class="button4" @click="checkAnswer(question_array[current_question].four)">{{ question_array[current_question].four }}</button>      
        </div>

      <transition name="fade">
          <div class="c">
            <h1>
                <p v-if="popup" style="position:absolute; top:40%; left:45%; "  >ถูกต้อง 🎵
                    <audio autoplay>
                        <source src="@/assets/sss.wav" type="audio/ogg">
                    </audio>
                </p>
            </h1>
          </div>
    </transition>

        <transition name="fade">
          <div class="c">
            <h2>
                <p v-if="popup2" style="position:absolute; top:40%; left:25%; right:30%"  >ถูกต้อง 🎵 ท่านทำแบบทดสอบชุดนี้ครบแล้ว! จากนี้หากทำซ้ำจะไม่เป็นการเพิ่มคะแนน
                    <audio autoplay>
                        <source src="@/assets/sss.wav" type="audio/ogg">
                    </audio>
                </p>
            </h2>
          </div>
    </transition>

  </div>
</template>

<script>
import connectAPI from "@/services/connectAPI";
export default {
  props:['question_array'],
  data(){
      return{
          current_question:0,
          popup:false,
          popup2:false,
          count_question:0,
          correct_question:0,
        //   question:''
      }
  },
  mounted(){
        this.getData()
        this.getPoint()
    },
  methods:{
      checkAnswer(answer){
          if(answer == this.question_array[this.current_question].answer){
              if(this.current_question + 1 > this.question_array.length -1){
                  this.popup2 = true
                  console.log('All Question Answered')
                  
                  return
                  
              }
              this.current_question += 1
              this.popup = true
              setTimeout(() => {
                this.popup = false
                this.popup2 = false
              },1000)
              console.log('Correct ! ')
              this.correct_question+1
              

          }else{
              console.log('Wrong')
          }
      },
        async getData(){
            await connectAPI.getAPI("/quizzes").then((res) =>{
                this.question = res
            })            
        },
        async getPoint(){
            await connectAPI.getAPIWithToken("users/me").then((res) =>{
                this.user_point = res.point
            })
        },
  }
}
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
        color: rgb(249, 249, 255);
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
        
    }

    .header {
        padding: 3%;
    }

    .c {
        color: rgb(249, 249, 255);
    }

    .center {
    display: flex;
    justify-content: center;

    }

    #container:hover img {
        transform: scale(1.2, 1.2);
        z-index: 9;
    }


    .button {
        position: relative;
        background-color: #d8375a;
        border: none;
        font-size: 28px;
        color: #FFFFFF;
        padding: 20px;
        width: 400px;
        height: 200px;
        text-align: center;
        -webkit-transition-duration: 0.4s; /* Safari */
        transition-duration: 0.6s;
        text-decoration: none;
        overflow: hidden;
        cursor: pointer;
    }

    .button:after {
        content: "";
        background: #ee90a7;
        display: block;
        position: absolute;
        padding-top: 300%;
        padding-left: 350%;
        margin-left: -20px!important;
        margin-top: -120%;
        opacity: 0;
        transition: all 0.8s
    }

    .button:active:after {
        padding: 0;
        margin: 0;
        opacity: 1;
        transition: 0s
    }




    .button2 {
        position: relative;
        background-color: #3432c7;
        border: none;
        font-size: 28px;
        color: #FFFFFF;
        padding: 20px;
        width: 400px;
        height: 200px;
        text-align: center;
        -webkit-transition-duration: 0.4s; /* Safari */
        transition-duration: 0.6s;
        text-decoration: none;
        overflow: hidden;
        cursor: pointer;
    }

    .button2:after {
        content: "";
        background: #90a6ee;
        display: block;
        position: absolute;
        padding-top: 300%;
        padding-left: 350%;
        margin-left: -20px!important;
        margin-top: -120%;
        opacity: 0;
        transition: all 0.8s
    }

    .button2:active:after {
        padding: 0;
        margin: 0;
        opacity: 1;
        transition: 0s
    }

    
    
    
    
    .button3 {
        position: relative;
        background-color: #f5d33b;
        border: none;
        font-size: 28px;
        color: #FFFFFF;
        padding: 20px;
        width: 400px;
        height: 200px;
        text-align: center;
        -webkit-transition-duration: 0.4s; /* Safari */
        transition-duration: 0.6s;
        text-decoration: none;
        overflow: hidden;
        cursor: pointer;
    }

    .button3:after {
        content: "";
        background: #ecee90;
        display: block;
        position: absolute;
        padding-top: 300%;
        padding-left: 350%;
        margin-left: -20px!important;
        margin-top: -120%;
        opacity: 0;
        transition: all 0.8s
    }

    .button3:active:after {
        padding: 0;
        margin: 0;
        opacity: 1;
        transition: 0s
    }

    
    
    
    
    .button4 {
        position: relative;
        background-color: #0eb97b;
        border: none;
        font-size: 28px;
        color: #FFFFFF;
        padding: 20px;
        width: 400px;
        height: 200px;
        text-align: center;
        -webkit-transition-duration: 0.4s; /* Safari */
        transition-duration: 0.6s;
        text-decoration: none;
        overflow: hidden;
        cursor: pointer;
    }

    .button4:after {
        content: "";
        background: #90EE90;
        display: block;
        position: absolute;
        padding-top: 300%;
        padding-left: 350%;
        margin-left: -20px!important;
        margin-top: -120%;
        opacity: 0;
        transition: all 0.8s
    }

    .button4:active:after {
        padding: 0;
        margin: 0;
        opacity: 1;
        transition: 0s
    }
</style>