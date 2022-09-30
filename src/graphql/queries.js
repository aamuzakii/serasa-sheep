import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

export const GET_MOVIES_FROM_CACHE = gql`
  query GetMovies {
    movies @client
  }
`;

export const GET_SINGLE_PROJECT = gql`
  query projectEntryQuery {
    project(id: "4jEXKjuKh5tWjSvUunsVk0") {
      sys {
        id
      }
      description
      title
      picturesCollection {
        items {
          url
        }
      }
      # add the fields you want to query
    }
  }
`;
