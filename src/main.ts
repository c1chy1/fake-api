import { createApp, provide, h } from 'vue'
import { createPinia } from 'pinia'

import { ApolloClient, InMemoryCache , createHttpLink } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'

import App from './App.vue'


// Cache implementation
const cache = new InMemoryCache()
const httpLink = createHttpLink({
    uri: "https://api.escuelajs.co/graphql",
})
// Create the apollo client
const apolloClient = new ApolloClient({
    cache,
    link: httpLink
})

const app = createApp({
    setup() {
        provide(DefaultApolloClient, apolloClient)
    },
    render: () => h(App)
})

app.use(createPinia())

app.mount('#app')