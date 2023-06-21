import { defineStore } from 'pinia';

export const useChatStore = defineStore('chat', {
    state: () => ({
        messages: [] as string[],
    }),
    actions: {
        addMessage(message: string) {
            this.messages.push(message);
        },
    },
});
