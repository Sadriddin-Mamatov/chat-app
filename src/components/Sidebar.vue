<template >
  <div  class="sidebar-menu">
   <div>
     <h3><img src="../assets/Agrobank-icon-white.png" alt="logo"> Agrobank</h3>
     <div class="profile">
       <img src="../assets/e.jpg" alt="main-man" class="my-image">
       <p class="my-title">Sadriddin Mamatov</p>
     </div>
     <ul>

       <li>
         <img src="../assets/dash.png" alt="main-icon">
         <router-link class="link" to="/">Главный экран</router-link>
       </li>
       <li>
         <img src="../assets/icon-chat.png" alt="chat-icons">
         <router-link class="link" to="/chat">Чат</router-link>
       </li>
       <li>
         <img src="../assets/icon-set.png" alt="seticon">
         <router-link class="link" to="/settings">Настройки</router-link>
       </li>
     </ul>
   </div>
    <p>Выйти</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useSidebarStore } from './sidebarStore';

export default defineComponent({
  name: 'Sidebar',
  setup() {
    const sidebarStore = useSidebarStore();
    const isOpen = computed(() => sidebarStore.isOpen);

    return {
      isOpen,
    };
  },
});
</script>

<style scoped>
*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.sidebar-menu{
  height: 100vh;
  width: 200px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding-left: 20px;
  padding-bottom: 20px;
}
.my-title{
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 120%;
  color: rgba(1, 29, 50, 0.5);
}
li img{
  font-size: 10px;

}
.profile{
  text-align: center;
}
.my-image{
  margin: 10px auto;
  object-fit: cover;
  width: 70px;
  height: 70px;
  border-radius: 50%;
}
h3{
  margin: 0;
  margin-left: 30px;
  display: flex;
  align-items: center;
}
h3 img{
  margin-right: 10px;
  font-family: sans-serif;
}

li{
  list-style-type: none;
  font-family: sans-serif;
  display: flex;
  align-items: center;
  margin: 10px 0;
}
.link{
  font-family: 'ALS Agrofont';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 120%;
  text-decoration: none;
  margin-left: 20px;
  display: flex;
  align-items: center;
  color: #011D32;
}
</style>
