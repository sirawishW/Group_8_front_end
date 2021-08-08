<template>
  <div class="jingle-bell" v-drag-and-drop:options="options">
    <h1>Jingle Bell : Correct : {{ getCorrect }} / 23</h1>

    <audio autoplay>
      <source src="@/assets/Jingle.mp3" type="audio/ogg">
    </audio>

    <div class="main">
      <div class="notepad" v-for="(_,index) in getMusic" :key="index">
        <div class="colume" v-for="(v,index_colume) in _.colums" :key="index_colume" :style="'margin-right:' + v.marginRight + 'px'">
          <div class="block" v-for="(a,index_note) in v.notes" :key="index_note" :style="{border: (a.correct ? '1px solid black' : '1px dashed black'),'position': 'relative'}" 
            :index = "index"
            :index_colume = "index_colume"
            :index_note = "index_note"
            :correct = "a.note"
          >
            <img v-if="a.correct" :src="require(`@/assets/${a.note}.png`)" :style="{width:'75px' ,position:'absolute', top:a.top + 'px', left:a.left + 'px'}">
          </div>
        </div>
      </div>
    </div>

    <img v-for="(v) in note_lists" class="note-start" :key="v" :alt="v" :src="require(`@/assets/${v}.png`)" :value="v" style="width:5vw;">

  </div>
</template>

<script>
export default {
  computed:{
    getMusic: function(){
      return this.music;
    },
    getCorrect: function(){
      return this.correct;
    }
  },
  data(){
    return{
      correct:0,
      options:{
        dropzoneSelector: '.block',
        draggableSelector: '.note-start',
        handlerSelector: null,
        reactivityEnabled: true,
        multipleDropzonesItemsDraggingEnabled: true,
        showDropzoneAreas: true,
        onDrop: function(event) {
          const item = event.items[0].attributes.value.value
          const drop = event.droptarget.attributes
          if(drop["correct"].value == item){
            this.music[drop["index"].value].colums[drop["index_colume"].value].notes[drop["index_note"].value].correct = true;
          }else{
            this.missed ++;
          }
          if(this.correct == 23){
            console.log('complete');
          }
        },
      },
      note_lists:[1,2,6],
      music:[
        {
          colums:[
            {
              marginRight:60,
              notes:[
                {
                  note:1,
                  left:-5,
                  top:10,
                  correct:false
                },
                {
                  note:1,
                  left:-5,
                  top:10,
                  correct:false
                },
                {
                  note:2,
                  left:-5,
                  top:10,
                  correct:false
                }
              ]
            },
            {
              marginRight:55,
              notes:[
                {note:1},
                {note:2},
                {note:6}
              ]
            },
            {
              marginRight:5,
              notes:[
                {note:1},
                {note:2},
                {note:6},
                {note:1}
              ]
            },
            {
              marginRight:5,
              notes:[
                {note:1}
              ]
            }
          ]
        },
        {
          colums:[
            {
              marginRight:60,
              notes:[
                {note:1},
                {note:2},
                {note:6}
              ]
            },
            {
              marginRight:60,
              notes:[
                {note:1},
                {note:2},
                {note:6}
              ]
            },
            {
              marginRight:5,
              notes:[
                {note:1},
                {note:2},
                {note:6},
                {note:1}
              ]
            },
            {
              marginRight:10,
              notes:[
                {note:1},
                {note:2}
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



