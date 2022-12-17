import { gql } from '@apollo/client'

export const GET_MOVIES_FROM_CACHE = gql`
  query GetMovies {
    movies @client
  }
`

export const GET_SINGLE_PROJECT = gql`
  query projectEntryQuery($projectSysId: String!) {
    project(id: $projectSysId) {
      sys {
        id
      }
      description {
        json
      }
      name
      picturesCollection {
        items {
          url
        }
      }
      # add the fields you want to query
    }
  }
`

export const GET_SINGLE_JOURNAL = gql`
  query journalEntryQuery($journalSysId: String!) {
    journal(id: $journalSysId) {
      sys {
        id
      }
      content {
        json
      }
      title
      pictureCollection {
        items {
          url
        }
      }
    }
  }
`

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
`

export const GET_ALL_JOURNALS = gql`
  query foo {
    journalCollection {
      items {
        sys {
          id
        }
        title
        date
        pictureCollection {
          items {
            url
          }
        }
      }
    }
  }
`

export const GET_ABOUT_PAGE = gql`
  query {
    staticData(id: "Yc1MlxVguGdPbESt6ZjGR") {
      content {
        json
      }
    }
  }
`

export const GET_COMPANY_PAGE = gql`
  query {
    staticData(id: "4Rw2XUuDtESn7nZkhzJYki") {
      content {
        json
      }
    }
  }
`

export const GET_CONTACT_ADDRESS = gql`
  query {
    staticData(id: "RVZkMzHE6La1UAtucgKpN") {
      content {
        json
      }
    }
  }
`

export const GET_IMG_BY_ID = gql`
  query foo($projectSysId: String!) {
    asset(id: $projectSysId) {
      url
    }
  }
`
