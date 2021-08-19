<template>
  <form @submit.prevent="addnewFriend()">
    <input type="text" placeholder="Friend Name" v-model="friendName"/>
    <input type="tel" placeholder="Friend Phone" v-model="friendPhone"/>
    <input type="email" placeholder="Friend Email" v-model="friendEmail"/>
    <button>Add Friend</button> <br /><br />
  </form>
</template>

<script>
export default {
    emits:['add-the-friend'],
    data(){
        return {
            friendName: '',
            friendPhone: '',
            friendEmail: '',
        };
    },
    methods:{
        addnewFriend(){
            this.$emit('add-the-friend', this.friendName, this.friendPhone, this.friendEmail);
        }
    }
};
</script>

<style>
#app input {
  font: inherit;
  padding: 0.15rem;
  display: table;
  margin: 0 auto;
  margin-bottom: 20px;
}
#app button {
  display: table;
  margin: 0 auto;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>
