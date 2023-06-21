<template>
  <div class="window-page">
    <sidebar></sidebar>
    <router-view></router-view>
  </div>
</template>

<style scoped>
  .window-page{
    display: flex;
  }
</style>
<script lang="ts">
import { defineComponent } from 'vue';
import Sidebar from './components/Sidebar.vue';
import { useSidebarStore } from './components/sidebarStore';

export default defineComponent({
  name: 'App',
  components: {
    Sidebar,
  },
  setup() {
    const sidebarStore = useSidebarStore();

    const toggleSidebar = () => {
      sidebarStore.toggleSidebar();
    };

    return {
      Sidebar,
    };
  },
});
</script>
