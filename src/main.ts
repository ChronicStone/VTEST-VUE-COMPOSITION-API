import { createApp } from 'vue'
import AppProvider from './AppProvider.vue'
// import { apiNotification, conf } from './composables/notifications.js'
import sequentialEntrance from 'vue3-sequential-entrance'
import 'vue3-sequential-entrance/vue-sequential-entrance.css'

import 'virtual:windi.css'

// createApp(AppProvider).provide(/* key */ 'toast', /* value */ apiNotification).use(SequentialEntrance).mount('#app');
createApp(AppProvider).use(sequentialEntrance).mount('#app');
