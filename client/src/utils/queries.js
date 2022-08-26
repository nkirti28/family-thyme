import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($firstName: String!) {
    user(firstName: $firstName) {
      _id
      firstName
      email
      events {
        _id
        title
        firstName
        startDate
        dueDate
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      firstName
      email
      events {
        _id
        title
        startDate
        dueDate
      }
      lists {
        _id
        listName
        createdAt
        itemsCount
      }
    }
  }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      firstName
      email
    }
  }
`;

export const QUERY_LISTS = gql`
  query lists {
    lists {
      _id
      listName
      createdAt
      firstName
      itemsCount
      items {
        _id
        itemDescription
        quantity
      }
    }
  }
`;



export const QUERY_LIST = gql`
  query list($id: ID!) {
    list(_id: $id) {
      _id
      listName
      createdAt
      itemsCount
      items {
        _id
        itemDescription
        quantity
      }
    }
  }
`;

export const QUERY_EVENT = gql`
  query event($id: ID!) {
    event(_id: $id) {
      _id
      title
      firstName
      startDate
      dueDate
    }
  }
`;
