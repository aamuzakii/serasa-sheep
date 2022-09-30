import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://graphql.contentful.com/content/v1/spaces/17h3ih7qgcc4/environments/master",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = "9T3udGmotyJzeD1eusewAakWP0wqvT2kSNawChPTT7M";
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
