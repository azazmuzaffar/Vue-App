import { createApp } from 'vue';

import App from './App.vue';
import friendContact from './components/friendContact.vue';
import addFriend from './components/addFriend.vue';


const app = createApp(App)

app.component('friend-contact', friendContact);
app.component('add-friend', addFriend);

app.mount('#app');
