<template>
  <div class="quizz_entrance">
    <div v-if="started">
      <quizcompo :question_array="data_array[`question_2`]" />
    </div>
    <div v-else>
      <h2>ยินดีต้อนรับสู่แบบทดสอบ ! พร้อมกันหรือยัง !?</h2>
      <button @click="started = true; quest = 2">แบบทดสอบ ชุดที่ 2</button>
    </div>
  </div>
</template>

<script>
import quizcompo from '../components/quizcompo.vue'
import jsondata from '../json/default.json'

export default {
  components:{quizcompo},
  data(){
    return{
      started:false,
      data_array: jsondata || [],
      quest:1
    }
    
  }


}
</script>
