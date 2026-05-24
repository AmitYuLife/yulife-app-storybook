import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";

export const storyApolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.empty(),
  defaultOptions: {
    query: { errorPolicy: "ignore" },
    watchQuery: { errorPolicy: "ignore" },
  },
});
