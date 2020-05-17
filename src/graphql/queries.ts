// tslint:disable
// eslint-disable
// this is an auto generated file. This will be overwritten

export const getCard = /* GraphQL */ `
  query GetCard($cardId: ID!) {
    getCard(cardId: $cardId) {
      id
      name
      subtypes
      supertypes
      text
      thumbnailImageUrl
      types
    }
  }
`;
export const getDeck = /* GraphQL */ `
  query GetDeck($deckId: ID!, $username: ID!) {
    getDeck(deckId: $deckId, username: $username) {
      colors
      createdAt
      description
      format
      id
      latestVersion
      memo
      name
      ownerUsername
      status
      thumbnailImageUrl
      timestamp
      versionDetail {
        commander {
          id
          name
          subtypes
          supertypes
          text
          thumbnailImageUrl
          types
        }
        companion {
          id
          name
          subtypes
          supertypes
          text
          thumbnailImageUrl
          types
        }
        createdAt
        mainboard {
          card {
            id
            name
            subtypes
            supertypes
            text
            thumbnailImageUrl
            types
          }
          count
        }
        sideboard {
          card {
            id
            name
            subtypes
            supertypes
            text
            thumbnailImageUrl
            types
          }
          count
        }
      }
    }
  }
`;
export const getDeckList = /* GraphQL */ `
  query GetDeckList(
    $filter: DeckListFilterInput
    $nextToken: String
    $userId: ID
  ) {
    getDeckList(filter: $filter, nextToken: $nextToken, userId: $userId) {
      items {
        colors
        createdAt
        description
        format
        id
        latestVersion
        memo
        name
        ownerUsername
        status
        thumbnailImageUrl
        timestamp
        versionDetail {
          commander {
            id
            name
            subtypes
            supertypes
            text
            thumbnailImageUrl
            types
          }
          companion {
            id
            name
            subtypes
            supertypes
            text
            thumbnailImageUrl
            types
          }
          createdAt
          mainboard {
            count
          }
          sideboard {
            count
          }
        }
      }
      nextToken
      scannedCount
    }
  }
`;
export const getDeckListByUsername = /* GraphQL */ `
  query GetDeckListByUsername(
    $filter: DeckListFilterInput
    $nextToken: String
    $username: String!
  ) {
    getDeckListByUsername(
      filter: $filter
      nextToken: $nextToken
      username: $username
    ) {
      items {
        colors
        createdAt
        description
        format
        id
        latestVersion
        memo
        name
        ownerUsername
        status
        thumbnailImageUrl
        timestamp
        versionDetail {
          commander {
            id
            name
            subtypes
            supertypes
            text
            thumbnailImageUrl
            types
          }
          companion {
            id
            name
            subtypes
            supertypes
            text
            thumbnailImageUrl
            types
          }
          createdAt
          mainboard {
            count
          }
          sideboard {
            count
          }
        }
      }
      nextToken
      scannedCount
    }
  }
`;
export const getDeckVersionList = /* GraphQL */ `
  query GetDeckVersionList($deckId: ID!, $nextToken: String) {
    getDeckVersionList(deckId: $deckId, nextToken: $nextToken) {
      items {
        commander {
          id
          name
          subtypes
          supertypes
          text
          thumbnailImageUrl
          types
        }
        companion {
          id
          name
          subtypes
          supertypes
          text
          thumbnailImageUrl
          types
        }
        createdAt
        mainboard {
          card {
            id
            name
            subtypes
            supertypes
            text
            thumbnailImageUrl
            types
          }
          count
        }
        sideboard {
          card {
            id
            name
            subtypes
            supertypes
            text
            thumbnailImageUrl
            types
          }
          count
        }
      }
      nextToken
      scannedCount
    }
  }
`;
export const getProfile = /* GraphQL */ `
  query GetProfile($userId: ID!) {
    getProfile(userId: $userId) {
      bio
      displayName
      iconImageUrl
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser {
    getUser {
      createdAt
      option {
        lang
        locale
      }
      profile {
        bio
        displayName
        iconImageUrl
      }
      updatedAt
      username
    }
  }
`;
export const searchCardList = /* GraphQL */ `
  query SearchCardList($input: SearchCardInput) {
    searchCardList(input: $input) {
      id
      name
      subtypes
      supertypes
      text
      thumbnailImageUrl
      types
    }
  }
`;
export const searchLimitedDeckList = /* GraphQL */ `
  query SearchLimitedDeckList($input: SearchDeckInput) {
    searchLimitedDeckList(input: $input) {
      colors
      createdAt
      description
      format
      id
      latestVersion
      memo
      name
      ownerUsername
      status
      thumbnailImageUrl
      timestamp
      versionDetail {
        commander {
          id
          name
          subtypes
          supertypes
          text
          thumbnailImageUrl
          types
        }
        companion {
          id
          name
          subtypes
          supertypes
          text
          thumbnailImageUrl
          types
        }
        createdAt
        mainboard {
          card {
            id
            name
            subtypes
            supertypes
            text
            thumbnailImageUrl
            types
          }
          count
        }
        sideboard {
          card {
            id
            name
            subtypes
            supertypes
            text
            thumbnailImageUrl
            types
          }
          count
        }
      }
    }
  }
`;
export const searchOwnDeckList = /* GraphQL */ `
  query SearchOwnDeckList($input: SearchDeckInput) {
    searchOwnDeckList(input: $input) {
      colors
      createdAt
      description
      format
      id
      latestVersion
      memo
      name
      ownerUsername
      status
      thumbnailImageUrl
      timestamp
      versionDetail {
        commander {
          id
          name
          subtypes
          supertypes
          text
          thumbnailImageUrl
          types
        }
        companion {
          id
          name
          subtypes
          supertypes
          text
          thumbnailImageUrl
          types
        }
        createdAt
        mainboard {
          card {
            id
            name
            subtypes
            supertypes
            text
            thumbnailImageUrl
            types
          }
          count
        }
        sideboard {
          card {
            id
            name
            subtypes
            supertypes
            text
            thumbnailImageUrl
            types
          }
          count
        }
      }
    }
  }
`;
export const searchPublicDeckList = /* GraphQL */ `
  query SearchPublicDeckList($input: SearchDeckInput) {
    searchPublicDeckList(input: $input) {
      colors
      createdAt
      description
      format
      id
      latestVersion
      memo
      name
      ownerUsername
      status
      thumbnailImageUrl
      timestamp
      versionDetail {
        commander {
          id
          name
          subtypes
          supertypes
          text
          thumbnailImageUrl
          types
        }
        companion {
          id
          name
          subtypes
          supertypes
          text
          thumbnailImageUrl
          types
        }
        createdAt
        mainboard {
          card {
            id
            name
            subtypes
            supertypes
            text
            thumbnailImageUrl
            types
          }
          count
        }
        sideboard {
          card {
            id
            name
            subtypes
            supertypes
            text
            thumbnailImageUrl
            types
          }
          count
        }
      }
    }
  }
`;
