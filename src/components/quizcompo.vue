<template>
  <div class="quizz">
      <div>
          Question : {{ question_array[current_question].question }}
          <h2>{{ current_question+1 }}</h2>
          <button @click="checkAnswer(question_array[current_question].one)">{{ question_array[current_question].one }}</button>
          <button @click="checkAnswer(question_array[current_question].two)">{{ question_array[current_question].two }}</button>
          <button @click="checkAnswer(question_array[current_question].three)">{{ question_array[current_question].three }}</button>
          <button @click="checkAnswer(question_array[current_question].four)">{{ question_array[current_question].four }}</button>
      </div>
      <transition name="fade">
        <p v-if="popup" style="position:absolute; top:50%; left:50%;">ถูกต้อง 🎵</p>
    </transition>
  </div>
</template>

<script>
export default {
  props:['question_array'],
  data(){
      return{
          current_question:0,
          popup:false
      }
  },
  methods:{
      checkAnswer(answer){
          if(answer == this.question_array[this.current_question].answer){
              if(this.current_question + 1 > this.question_array.length - 1){
                  console.log('All Question Answered')
                  return
              }
              this.current_question += 1
              this.popup = true
              setTimeout(() => {
                this.popup = false
              },1000)
              console.log('Correct ! ')
          }else{
              console.log('Wrong')
          }
      }
  }
}
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>