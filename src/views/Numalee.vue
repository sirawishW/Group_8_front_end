<template>
  <div class="center">
    <div class="numalee" v-drag-and-drop:options="options">
      <h1>หนูมาลี : Correct : {{ getCorrect }} / 26</h1>

      <audio autoplay>
        <source src="@/assets/Numalee.mp3" type="audio/ogg">
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

      <transition name="fade">
          <h1>
            <p v-if="popup" style="position:absolute; top:25%; left:45%; "  >สำเร็จ ! 🎵
                <audio autoplay>
                    <source src="@/assets/sss.wav" type="audio/ogg">
                </audio>
            </p>
          </h1>
      </transition>

    </div>
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
      popup:false,
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
            this.correct ++;
          }
          if(this.correct == 26){
            this.popup = true
            console.log('complete');
            return
          }
        },
      },

      note_lists:[1,2,3,5],
      music:[
        {
          colums:[
            {
              marginRight:5,
              notes:[
                {
                  note:'1',
                  left:-5,
                  top:10,
                  correct:false
                },
                {
                  note:'1',
                  left:-5,
                  top:16,
                  correct:false
                },
                {
                  note:'5',
                  left:-5,
                  top:23,
                  correct:false
                },
                {
                  note:'1',
                  left:-5,
                  top:16,
                  correct:false
                }
              ]
            },
            {
              marginRight:60,
              notes:[
                {
                  note:'1',
                  left:-5,
                  top:10,
                  correct:false
                },
                {
                  note:'1',
                  left:-5,
                  top:10,
                  correct:false
                },
                {
                  note:'2',
                  left:-5,
                  top:10,
                  correct:false
                }
              ]
            },
            {
              marginRight:60,
              notes:[
                {
                  note:'1',
                  left:-5,
                  top:16,
                  correct:false
                },
                {
                  note:'1',
                  left:-5,
                  top:16,
                  correct:false
                },
                {
                  note:'2',
                  left:-5,
                  top:16,
                  correct:false
                }
              ]
            },
            {
              marginRight:40,
              notes:[
                {
                  note:'1',
                  left:-5,
                  top:10,
                  correct:false
                },
                {
                  note:'1',
                  left:-5,
                  top:-5,
                  correct:false
                },
                {
                  note:'2',
                  left:-5,
                  top:-5,
                  correct:false
                }
              ]
            }
          ]
        },
        {
          colums:[
            {
              marginRight:2,
              notes:[
                {
                  note:'1',
                  left:-5,
                  top:8,
                  correct:false
                },
                {
                  note:'1',
                  left:-5,
                  top:15,
                  correct:false
                },
                {
                  note:'5',
                  left:-5,
                  top:22,
                  correct:false
                },
                {
                  note:'1',
                  left:-5,
                  top:15,
                  correct:false
                }
              ]
            },
            {
              marginRight:1,
              notes:[
                {
                  note:'1',
                  left:-5,
                  top:8,
                  correct:false
                },
                {
                  note:'1',
                  left:-5,
                  top:8,
                  correct:false
                },
                {
                  note:'1',
                  left:-5,
                  top:8,
                  correct:false
                },
                {
                  note:'1',
                  left:-5,
                  top:8,
                  correct:false
                }
              ]
            },
            {
              marginRight:10,
              notes:[
                {
                  note:'1',
                  left:-5,
                  top:15,
                  correct:false
                },
                {
                  note:'1',
                  left:-5,
                  top:15,
                  correct:false
                },
                {
                  note:'1',
                  left:-5,
                  top:8,
                  correct:false
                },
                {
                  note:'1',
                  left:-5,
                  top:15,
                  correct:false
                }
              ]
            },
            {
              marginRight:10,
              notes:[
                {
                  note:'3',
                  left:-5,
                  top:22,
                  correct:false
                }
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

  .center {
    display: flex;
    justify-content: center;
    text-align: center;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
    color: rgb(249, 249, 255);
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
      
  }
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

