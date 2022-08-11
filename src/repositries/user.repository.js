import apolloClient from '../apollo'
import gql from 'graphql-tag'
import { GET_USERS } from '@/graphql/queries.gql'
import { ADD_USER, UPDATE_USER, DELETE_USER } from '@/graphql/mutations.gql'

const getUsers = async () => {
  return await apolloClient.query({
    query: GET_USERS,
  })
}
const addUser = async (user) => {
  return await apolloClient.mutate({
    mutation: ADD_USER,
    variables: {
      name: user.name,
      email: user.email,
    },
  })
}
const updateUser = async (user) => {
  return await apolloClient.mutate({
    mutation: UPDATE_USER,
    variables: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  })
}
const deleteUser = async (id) => {
  return await apolloClient.mutate({
    mutation: DELETE_USER,
    variables: {
      id: id,
    },
  })
}

export default {
  getUsers,
  addUser,
  updateUser,
  deleteUser
}
