<template>
  <div class="container">
    <div class="row justify-content-center my-4">
      <div class="col-md-6">
        <h4>Create User</h4>
        <form @submit.prevent="addUser">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" v-model="name" />
          </div>
          <div class="form-group">
            <label for="name">Email</label>
            <input type="email" v-model="email" class="form-control" />
          </div>
          <button class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
    <ul>
      <li v-for="user in users" :key="user.id" class="card">
        <div class="d-flex justify-content-between align-items-center">
          <p class="m-0">{{ user.id }} {{ user.name }} {{ user.email }}</p>
          <div>
            <button
              class="btn btn-primary btn-sm"
              @click="setUserData(user.name, user.email, user.id)"
            >
              Edit
            </button>
            <button
              class="btn btn-danger btn-sm ml-2"
              @click="deleteUser(user.id)"
            >
              Delete
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "HomeView",

  data() {
    return {
      name: "",
      email: "",
      id: "",
    };
  },
  computed: {
    ...mapGetters({
      users: "getUsers",
    }),
  },
  methods: {
    ...mapActions({
      getUsers: "getUsers",
      postAddUser: "addUser",
      updateUserById: "updateUserById",
      deleteUserById: "deleteUserById",
    }),
    setUserData(name = "", email = "", id = "") {
      this.email = email;
      this.name = name;
      this.id = id;
    },
    async addUser() {
      if (!this.id)
        await this.postAddUser({ name: this.name, email: this.email });
      else
        await this.updateUserById({
          name: this.name,
          email: this.email,
          id: this.id,
        });
      this.setUserData();
    },
    async deleteUser(id) {
      await this.deleteUserById(id);
    },
  },
  async created() {
    await this.getUsers();
  },
};
</script>
<style lang="scss" scoped>
.card {
  border: #ddd 1px solid;
  background: #eee;
  padding: 12px;
}
</style>