// tslint:disable
// eslint-disable
// this is an auto generated file. This will be overwritten

export const cancelLikeCard = /* GraphQL */ `
  mutation CancelLikeCard($cardId: ID!) {
    cancelLikeCard(cardId: $cardId)
  }
`;
export const cancelLikeDeck = /* GraphQL */ `
  mutation CancelLikeDeck($deckId: ID!) {
    cancelLikeDeck(deckId: $deckId)
  }
`;
export const createDeck = /* GraphQL */ `
  mutation CreateDeck($input: CreateDeckInput) {
    createDeck(input: $input)
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser($input: UserProfileInput) {
    createUser(input: $input) {
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
export const likeCard = /* GraphQL */ `
  mutation LikeCard($cardId: ID!) {
    likeCard(cardId: $cardId)
  }
`;
export const likeDeck = /* GraphQL */ `
  mutation LikeDeck($deckId: ID!) {
    likeDeck(deckId: $deckId)
  }
`;
export const removeDeck = /* GraphQL */ `
  mutation RemoveDeck($deckId: ID!) {
    removeDeck(deckId: $deckId)
  }
`;
export const restoreDeckVersion = /* GraphQL */ `
  mutation RestoreDeckVersion($deckId: ID!, $version: AWSTimestamp!) {
    restoreDeckVersion(deckId: $deckId, version: $version) {
      colors
      createdAt
      description
      format
      id
      latestVersion {
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
      memo
      name
      ownerUserId
      status
      thumbnailImageUrl
      timestamp
    }
  }
`;
export const updateDeckMeta = /* GraphQL */ `
  mutation UpdateDeckMeta($deckId: ID!, $input: UpdateDeckMetaInput) {
    updateDeckMeta(deckId: $deckId, input: $input) {
      colors
      createdAt
      description
      format
      id
      latestVersion {
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
      memo
      name
      ownerUserId
      status
      thumbnailImageUrl
      timestamp
    }
  }
`;
export const updateDeckVersion = /* GraphQL */ `
  mutation UpdateDeckVersion($deckId: ID!, $input: UpdateDeckVersionInput) {
    updateDeckVersion(deckId: $deckId, input: $input)
  }
`;
export const updateOption = /* GraphQL */ `
  mutation UpdateOption($input: UserOptionInput) {
    updateOption(input: $input) {
      lang
      locale
    }
  }
`;
export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile($input: UserProfileInput) {
    updateProfile(input: $input) {
      bio
      displayName
      iconImageUrl
    }
  }
`;
