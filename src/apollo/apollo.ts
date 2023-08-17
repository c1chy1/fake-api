import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client/core";

export const httpLink = createHttpLink({
    uri: 'https://api.escuelajs.co/graphql'
});

const cache = new InMemoryCache();

export const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
});