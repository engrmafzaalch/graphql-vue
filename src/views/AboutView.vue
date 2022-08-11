<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <form @submit.prevent="addProduct">
          <div class="form-group">
            <label for="title">Title</label>
            <input type="text" class="form-control" id="title" v-model="title" />
          </div>
          <div class="form-group">
            <label for="price">Price</label>
            <input type="text" class="form-control" id="price" v-model="price" />
          </div>
          <div class="form-group">
            <label for="description">Description</label>
            <textarea id="description" rows="4" class="form-control" v-model="description"></textarea>
          </div>
          <div class="form-group">
            <label for="user">User</label>
            <select name="" id="" class="form-control" v-model="user">
              <option :value="user.id" v-for="user in users" :key="user.id" >
                {{ user.name }}
              </option>
            </select>
          </div>
          <button class="btn btn-primary" >Add product</button>
        </form>
        
      </div>
    </div>
  </div>
</template>
<script>
import { GET_USERS, GET_PRODUCTS } from "@/graphql/queries.gql";
import {ADD_PRODUCT} from '@/graphql/mutations.gql'
export default {
  name: "Products",
  data() {
    return {
      user: "",
      title: "",
      price: "",
      description: "",
    };
  },
  apollo: {
    users: {
      query: GET_USERS,
    },
     products: {
      query: GET_PRODUCTS,
    },
  },
  methods: {
    async addProduct(){
     const result = await  this.$apollo.mutate({
        mutation: ADD_PRODUCT,
        variables: {
          title: this.title,
          price: +this.price,
          description: this.description,
          user_id: +this.user
        },
        refetchQueries: ["getProducts"],

      })
      console.log(result)
    }
  }
};
</script>
