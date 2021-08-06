<template>
  <div class="numalee">
    <h1>หนูมาลี</h1>
    <div class="main">
      <div class="notepad" v-for="(_,index) in music" :key="index">
        <div class="colume" v-for="(v,index_colume) in _.colums" :key="index_colume" :style="'margin-right:' + v.marginRight + 'px'">
          <div class="block" v-for="(a,index_note) in v.notes" :key="index_note" :style="{border: (a.correct ? '1px solid black' : '1px dashed black') }">
            
          </div>
        </div>
      </div>
    </div>

    <img v-for="(v) in note_lists" :key="v" :src="require(`@/assets/${v}.png`)" style="width:5vw;">
  </div>
</template>

<script>
export default {
  data(){
    return{
      note_lists:[1,2,3,5],
      music:[
        {
          colums:[
            {
              marginRight:5,
              notes:[
                {note:'a'},
                {note:'b'},
                {note:'c'},
                {note:'d'}
              ]
            },
            {
              marginRight:60,
              notes:[
                {note:'a'},
                {note:'b'},
                {note:'c'}
              ]
            },
            {
              marginRight:60,
              notes:[
                {note:'a'},
                {note:'b'},
                {note:'c'}
              ]
            },
            {
              marginRight:40,
              notes:[
                {note:'a'},
                {note:'b'},
                {note:'c'}
              ]
            }
          ]
        },
        {
          colums:[
            {
              marginRight:2,
              notes:[
                {note:'a'},
                {note:'b'},
                {note:'c'},
                {note:'d'}
              ]
            },
            {
              marginRight:1,
              notes:[
                {note:'a'},
                {note:'b'},
                {note:'c'},
                {note:'d'}
              ]
            },
            {
              marginRight:10,
              notes:[
                {note:'a'},
                {note:'b'},
                {note:'c'},
                {note:'d'}
              ]
            },
            {
              marginRight:10,
              notes:[
                {note:'a'}
              ]
            }
          ]
        },
      ]
    }
  }
}
</script>

<style scoped>
  .main{
    width:1100px;
    height:300px;
    background: url(../assets/561.png);
    background-repeat: no-repeat;
    background-size:cover;
    position: relative;
    padding-top:37px;
    padding-left:100px;
  }
  .notepad{
    width:1000px;
    height:150px;
    display: flex;
  }
  .colum{
    width:500px;
    display: inline-block;
  }
  .block{
    float:left;
    width:50px;
    height:80px;
    margin-right:7px;
  }
</style>

