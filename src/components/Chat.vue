<!--<script setup lang="ts">-->
<!--import { ref } from 'vue'-->

<!--defineProps<{ msg: string }>()-->

<!--const count = ref(0)-->
<!--</script>-->

<!--<template>-->
<!--  <h1>{{ msg }}</h1>-->

<!--  <div class="card">-->
<!--    Chat-->
<!--  </div>-->
<!--</template>-->

<!--<style scoped>-->
<!--.read-the-docs {-->
<!--  color: #888;-->
<!--}-->
<!--</style>-->
<template>
  <div class="chat">
    <h1>Chat App</h1>
    <div class="message-container">
      <div v-for="message in messages" :key="message" class="message">{{ message }}</div>
    </div>
    <div class="input-container">
      <input v-model="newMessage" type="text" placeholder="Enter a message" />
      <button @click="sendMessage">Send</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useChatStore } from '../store';
import { ref } from 'vue'

export default defineComponent({
  name: 'Chat',
  setup() {
    const chatStore = useChatStore();

    const newMessage = ref('');

    const sendMessage = () => {
      chatStore.addMessage(newMessage.value);
      newMessage.value = '';
    };

    return {
      messages: chatStore.messages,
      newMessage,
      sendMessage,
    };
  },
});
</script>

<style scoped>
.chat {
  max-width: 400px;
  margin: 0 auto;
}

.message-container {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  max-height: 300px;
  overflow-y: auto;
}

.message {
  background-color: #f5f5f5;
  padding: 5px;
  margin-bottom: 5px;
}

.input-container {
  display: flex;
}

.input-container input {
  flex: 1;
  padding: 5px;
  margin-right: 5px;
}

.input-container button {
  padding: 5px 10px;
}
</style>
