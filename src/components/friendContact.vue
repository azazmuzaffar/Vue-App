<template>
  <li>
    <h2>{{ theName }} {{ theFavourite ? "(Favourite)" : "" }}</h2>
    <button @click="toggleFav">Toggle Favourite</button><br />
    <button @click="toggleDetails">
      {{ visibleContacts ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="visibleContacts">
      <li><strong>Phone: </strong>{{ phoneNumber }}</li>
      <li><strong>Email: </strong>{{ emailAddress }}</li>
    </ul>
    <br />
    <button @click="$emit('delete-friend', theId)">Delete</button>
  </li>
</template>

<script>
export default {
  // props: ["theName", "phoneNumber", "emailAddress", "theFavourite"],
  props: {
    theId: {
      type: String,
      required: true,
    },
    theName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    theFavourite: {
      type: Boolean,
      required: false,
      default: false,
      // means only 1 or 0 values are alowed here
      /* validator: function(value){
          return value === '1' || value === '0';
      }, */
    },
  },
  emits: ['toggle-favourite', 'delete-friend'],
  /*   emits: {
    'toggle-favourite': function(theId) {
      if(theId){
        return true;
      }
      else{
        console.warn('ID not found!');
        return false;
      }
    },
  }, */
  data() {
    return {
      visibleContacts: false,
    };
  },
  methods: {
    toggleDetails() {
      this.visibleContacts = !this.visibleContacts;
    },
    toggleFav() {
      this.$emit("toggle-favourite", this.theId);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
