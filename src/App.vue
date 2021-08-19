<template>
  <section>
    <header><h1>My Friends</h1></header>
    <add-friend @add-the-friend="addFriend"></add-friend>
    <ul>
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :the-id="friend.id"
        :the-name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.email"
        :the-favourite="friend.favourite"
        @toggle-favourite="togglefriendStatus"
        @delete-friend="deleteFriends"
      ></friend-contact>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0123 45678 90",
          email: "manuel@localhost.com",
          favourite: true,
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "0987 654421 21",
          email: "julie@localhost.com",
          favourite: false,
        },
      ],
    };
  },
  methods: {
    togglefriendStatus(friendid) {
      const identifiedFriend = this.friends.find(
        (friend) => friend.id === friendid
      );
      identifiedFriend.favourite = !identifiedFriend.favourite;
    },
    addFriend(names, phones, emails) {
      const addnewFriend = {
        id: new Date().toISOString(),
        name: names,
        phone: phones,
        email: emails,
        favourite: false,
      };
      this.friends.push(addnewFriend);
    },
    deleteFriends(friendid) {
      this.friends = this.friends.filter((friend) => friend.id !== friendid);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");
</style>
