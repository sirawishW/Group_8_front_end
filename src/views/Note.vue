<template>
  <div class="note">
    <div class="header">
      <h1>เรียงลำดับตัวโน๊ตที่อยู่ในช่องเก็บของ</h1>
    </div>

    <div class="center">
      
      <div style="margin-right:50px;">
        <div id="container">
          <router-link to="/numalee" >
            <img src="@/assets/8.png" /><br />
          </router-link>
        </div>
        <h2>เพลงหนูมาลี</h2>
      </div>


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
</template>

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
