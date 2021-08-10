<template>
  <div class="quizz_entrance">
    <!-- <div v-if="started">
      <quizcompo :question_array="data_array[`question_1`]" />
    </div>
    <div v-else> -->

    <div v-if="started">
      <quizcompo :set="1" />
      </div>
    <div v-else>

    <div class="header">
      <h2>ยินดีต้อนรับสู่แบบทดสอบ ! พร้อมกันหรือยัง !?</h2>
    </div>

      <div class="center">
        <div id="container">
          <button @click="started = true; quest = 1;"><img src="@/assets/9.png" ></button>

        </div>
      </div>

      <div class="header">
        <h2></h2>&nbsp; &nbsp; &nbsp;&nbsp;
        <h2>แบบทดสอบ ชุดที่ 1</h2>
    </div>

    </div>
  </div>
</template>

<script>
import quizcompo from '../components/quizcompo.vue'
// import jsondata from '../json/default.json'
export default {
  components:{quizcompo},
  data(){
    return{
      started:false,
      set_what: '',
      // data_array: jsondata || [],
      quest:1
    }
  }
}
</script>


<style scoped>
  .center {
    display: flex;
    justify-content: center;

  }

  .header {
    display: flex;
    justify-content: center;
    padding: 2.5%;

  }

  #container:hover img {
    transform: scale(1.2, 1.2);
    z-index: 9;
  }

</style>
