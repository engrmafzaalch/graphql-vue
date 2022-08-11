// import Vue from 'vue'
// import VueApollo from 'vue-apollo'

// import { ApolloClient } from 'apollo-client'
// import { createHttpLink } from 'apollo-link-http'
// import { InMemoryCache } from 'apollo-cache-inmemory'

// const httpLink = createHttpLink({
//   uri: 'https://divine-tahr-28.hasura.app/v1/graphql',
//   headers: {
//     'content-type': 'application/json',
//     'x-hasura-admin-secret':
//       'REiTSUOyD9X3WzG1YJcL8nNIkCPoscRv2rNTCPHxcxKPBi9P6VmZH1KBPBCVwtfN',
//   },
// })
import ApolloClient from 'apollo-boost'

const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: 'https://divine-tahr-28.hasura.app/v1/graphql',
  headers: {
    'content-type': 'application/json',
    'x-hasura-admin-secret':
      'REiTSUOyD9X3WzG1YJcL8nNIkCPoscRv2rNTCPHxcxKPBi9P6VmZH1KBPBCVwtfN',
  },
})

// const cache = new InMemoryCache()

// const apolloClient = new ApolloClient({
//   link: httpLink,
//   cache,
// })

// const apolloProvider = new VueApollo({
//   defaultClient: apolloClient,
// })

// Vue.use(apolloProvider)
export default apolloClient
