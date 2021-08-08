<template>
  <div class="note">

  <div class="header">
    <h1>เรียงลำดับตัวโน๊ตที่อยู่ในช่องเก็บของ</h1>
  </div>
    

      <div class="center">

        <div id="container">
            <router-link to="/numalee"><img src="@/assets/8.png" ></router-link> &nbsp; &nbsp; &nbsp;&nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
        </div>

        <div id="container">
          <div class="center">
            <router-link to="/jingle-bell"><img src="@/assets/7.png"></router-link>
          </div>
        </div>

      </div>

   

    <div class="center">
      <h2 ></h2> &nbsp; &nbsp; &nbsp; &nbsp;
      <h2>เพลงหนูมาลี</h2>  &nbsp;&nbsp;  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
      <h2>เพลง Jingle Bell</h2>
    </div>

  </div>
</template>


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
