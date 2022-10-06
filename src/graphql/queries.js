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
  query projectEntryQuery($projectSysId: String!) {
    project(id: $projectSysId) {
      sys {
        id
      }
      description
      name
      picturesCollection {
        items {
          url
        }
      }
      # add the fields you want to query
    }
  }
`;

export const GET_ALL_PROJECT = gql`
  query projectCollectionQuery {
    projectCollection {
      items {
        sys {
          id
        }
        name
        location
        projectType
        year
        picturesCollection {
          items {
            url
          }
        }
      }
    }
  }
`;
