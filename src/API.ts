/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateDeckInput = {
  colors: Array< string >,
  commander?: Array< CardInput > | null,
  companion?: Array< CardInput > | null,
  description: string,
  format: string,
  mainboard: Array< DeckCardInput >,
  memo: string,
  name: string,
  sideboard: Array< DeckCardInput >,
  thumbnailImageUrl: string,
  versionDescription: string,
};

export type CardInput = {
  id: string,
  name: string,
  subtypes: Array< string >,
  supertypes: Array< string >,
  text?: string | null,
  thumbnailImageUrl?: string | null,
  types: Array< string >,
};

export type DeckCardInput = {
  card: CardInput,
  count: number,
};

export type UserProfileInput = {
  bio?: string | null,
  displayName?: string | null,
  iconImageUrl?: string | null,
};

export enum DeckStatus {
  DELETED = "DELETED",
  LIMITED_PUBLISHED = "LIMITED_PUBLISHED",
  PRIVATE = "PRIVATE",
  PUBLISHED = "PUBLISHED",
}


export type UpdateDeckMetaInput = {
  colors?: Array< string > | null,
  description?: string | null,
  format?: string | null,
  memo?: string | null,
  name?: string | null,
  thumbnailImageUrl?: string | null,
};

export type UpdateDeckVersionInput = {
  commander?: Array< CardInput > | null,
  companion?: Array< CardInput > | null,
  description?: string | null,
  mainboard?: Array< DeckCardInput > | null,
  sideboard?: Array< DeckCardInput > | null,
};

export type UserOptionInput = {
  lang: string,
  locale: string,
};

export type DeckListFilterInput = {
  format?: string | null,
};

export type SearchCardInput = {
  query?: string | null,
};

export type SearchDeckInput = {
  query?: string | null,
};

export type CancelLikeCardMutationVariables = {
  cardId: string,
};

export type CancelLikeCardMutation = {
  cancelLikeCard: boolean | null,
};

export type CancelLikeDeckMutationVariables = {
  deckId: string,
};

export type CancelLikeDeckMutation = {
  cancelLikeDeck: boolean | null,
};

export type CreateDeckMutationVariables = {
  input?: CreateDeckInput | null,
};

export type CreateDeckMutation = {
  createDeck: string | null,
};

export type CreateUserMutationVariables = {
  input?: UserProfileInput | null,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    createdAt: number,
    option:  {
      __typename: "UserOption",
      lang: string,
      locale: string,
    } | null,
    profile:  {
      __typename: "UserProfile",
      bio: string | null,
      displayName: string | null,
      iconImageUrl: string | null,
    } | null,
    updatedAt: number,
    username: string,
  } | null,
};

export type LikeCardMutationVariables = {
  cardId: string,
};

export type LikeCardMutation = {
  likeCard: boolean | null,
};

export type LikeDeckMutationVariables = {
  deckId: string,
};

export type LikeDeckMutation = {
  likeDeck: boolean | null,
};

export type RemoveDeckMutationVariables = {
  deckId: string,
};

export type RemoveDeckMutation = {
  removeDeck: boolean | null,
};

export type RestoreDeckVersionMutationVariables = {
  deckId: string,
  version: number,
};

export type RestoreDeckVersionMutation = {
  restoreDeckVersion:  {
    __typename: "Deck",
    colors: Array< string >,
    createdAt: number,
    description: string | null,
    format: string | null,
    id: string,
    latestVersion:  {
      __typename: "DeckVersion",
      commander:  Array< {
        __typename: "Card",
        id: string,
        name: string,
        subtypes: Array< string >,
        supertypes: Array< string >,
        text: string | null,
        thumbnailImageUrl: string | null,
        types: Array< string >,
      } > | null,
      companion:  Array< {
        __typename: "Card",
        id: string,
        name: string,
        subtypes: Array< string >,
        supertypes: Array< string >,
        text: string | null,
        thumbnailImageUrl: string | null,
        types: Array< string >,
      } > | null,
      createdAt: number,
      mainboard:  Array< {
        __typename: "DeckCard",
        card:  {
          __typename: "Card",
          id: string,
          name: string,
          subtypes: Array< string >,
          supertypes: Array< string >,
          text: string | null,
          thumbnailImageUrl: string | null,
          types: Array< string >,
        },
        count: number,
      } >,
      sideboard:  Array< {
        __typename: "DeckCard",
        card:  {
          __typename: "Card",
          id: string,
          name: string,
          subtypes: Array< string >,
          supertypes: Array< string >,
          text: string | null,
          thumbnailImageUrl: string | null,
          types: Array< string >,
        },
        count: number,
      } >,
    } | null,
    memo: string | null,
    name: string,
    ownerUserId: string,
    status: DeckStatus,
    thumbnailImageUrl: string | null,
    timestamp: number,
  } | null,
};

export type UpdateDeckMetaMutationVariables = {
  deckId: string,
  input?: UpdateDeckMetaInput | null,
};

export type UpdateDeckMetaMutation = {
  updateDeckMeta:  {
    __typename: "Deck",
    colors: Array< string >,
    createdAt: number,
    description: string | null,
    format: string | null,
    id: string,
    latestVersion:  {
      __typename: "DeckVersion",
      commander:  Array< {
        __typename: "Card",
        id: string,
        name: string,
        subtypes: Array< string >,
        supertypes: Array< string >,
        text: string | null,
        thumbnailImageUrl: string | null,
        types: Array< string >,
      } > | null,
      companion:  Array< {
        __typename: "Card",
        id: string,
        name: string,
        subtypes: Array< string >,
        supertypes: Array< string >,
        text: string | null,
        thumbnailImageUrl: string | null,
        types: Array< string >,
      } > | null,
      createdAt: number,
      mainboard:  Array< {
        __typename: "DeckCard",
        card:  {
          __typename: "Card",
          id: string,
          name: string,
          subtypes: Array< string >,
          supertypes: Array< string >,
          text: string | null,
          thumbnailImageUrl: string | null,
          types: Array< string >,
        },
        count: number,
      } >,
      sideboard:  Array< {
        __typename: "DeckCard",
        card:  {
          __typename: "Card",
          id: string,
          name: string,
          subtypes: Array< string >,
          supertypes: Array< string >,
          text: string | null,
          thumbnailImageUrl: string | null,
          types: Array< string >,
        },
        count: number,
      } >,
    } | null,
    memo: string | null,
    name: string,
    ownerUserId: string,
    status: DeckStatus,
    thumbnailImageUrl: string | null,
    timestamp: number,
  } | null,
};

export type UpdateDeckVersionMutationVariables = {
  deckId: string,
  input?: UpdateDeckVersionInput | null,
};

export type UpdateDeckVersionMutation = {
  updateDeckVersion: number | null,
};

export type UpdateOptionMutationVariables = {
  input?: UserOptionInput | null,
};

export type UpdateOptionMutation = {
  updateOption:  {
    __typename: "UserOption",
    lang: string,
    locale: string,
  } | null,
};

export type UpdateProfileMutationVariables = {
  input?: UserProfileInput | null,
};

export type UpdateProfileMutation = {
  updateProfile:  {
    __typename: "UserProfile",
    bio: string | null,
    displayName: string | null,
    iconImageUrl: string | null,
  } | null,
};

export type GetCardQueryVariables = {
  cardId: string,
};

export type GetCardQuery = {
  getCard:  {
    __typename: "Card",
    id: string,
    name: string,
    subtypes: Array< string >,
    supertypes: Array< string >,
    text: string | null,
    thumbnailImageUrl: string | null,
    types: Array< string >,
  } | null,
};

export type GetDeckQueryVariables = {
  deckId: string,
  userId: string,
};

export type GetDeckQuery = {
  getDeck:  {
    __typename: "Deck",
    colors: Array< string >,
    createdAt: number,
    description: string | null,
    format: string | null,
    id: string,
    latestVersion:  {
      __typename: "DeckVersion",
      commander:  Array< {
        __typename: "Card",
        id: string,
        name: string,
        subtypes: Array< string >,
        supertypes: Array< string >,
        text: string | null,
        thumbnailImageUrl: string | null,
        types: Array< string >,
      } > | null,
      companion:  Array< {
        __typename: "Card",
        id: string,
        name: string,
        subtypes: Array< string >,
        supertypes: Array< string >,
        text: string | null,
        thumbnailImageUrl: string | null,
        types: Array< string >,
      } > | null,
      createdAt: number,
      mainboard:  Array< {
        __typename: "DeckCard",
        card:  {
          __typename: "Card",
          id: string,
          name: string,
          subtypes: Array< string >,
          supertypes: Array< string >,
          text: string | null,
          thumbnailImageUrl: string | null,
          types: Array< string >,
        },
        count: number,
      } >,
      sideboard:  Array< {
        __typename: "DeckCard",
        card:  {
          __typename: "Card",
          id: string,
          name: string,
          subtypes: Array< string >,
          supertypes: Array< string >,
          text: string | null,
          thumbnailImageUrl: string | null,
          types: Array< string >,
        },
        count: number,
      } >,
    } | null,
    memo: string | null,
    name: string,
    ownerUserId: string,
    status: DeckStatus,
    thumbnailImageUrl: string | null,
    timestamp: number,
  } | null,
};

export type GetDeckByUsernameQueryVariables = {
  deckId: string,
  username: string,
};

export type GetDeckByUsernameQuery = {
  getDeckByUsername:  {
    __typename: "Deck",
    colors: Array< string >,
    createdAt: number,
    description: string | null,
    format: string | null,
    id: string,
    latestVersion:  {
      __typename: "DeckVersion",
      commander:  Array< {
        __typename: "Card",
        id: string,
        name: string,
        subtypes: Array< string >,
        supertypes: Array< string >,
        text: string | null,
        thumbnailImageUrl: string | null,
        types: Array< string >,
      } > | null,
      companion:  Array< {
        __typename: "Card",
        id: string,
        name: string,
        subtypes: Array< string >,
        supertypes: Array< string >,
        text: string | null,
        thumbnailImageUrl: string | null,
        types: Array< string >,
      } > | null,
      createdAt: number,
      mainboard:  Array< {
        __typename: "DeckCard",
        card:  {
          __typename: "Card",
          id: string,
          name: string,
          subtypes: Array< string >,
          supertypes: Array< string >,
          text: string | null,
          thumbnailImageUrl: string | null,
          types: Array< string >,
        },
        count: number,
      } >,
      sideboard:  Array< {
        __typename: "DeckCard",
        card:  {
          __typename: "Card",
          id: string,
          name: string,
          subtypes: Array< string >,
          supertypes: Array< string >,
          text: string | null,
          thumbnailImageUrl: string | null,
          types: Array< string >,
        },
        count: number,
      } >,
    } | null,
    memo: string | null,
    name: string,
    ownerUserId: string,
    status: DeckStatus,
    thumbnailImageUrl: string | null,
    timestamp: number,
  } | null,
};

export type GetDeckListQueryVariables = {
  filter?: DeckListFilterInput | null,
  nextToken?: string | null,
  userId?: string | null,
};

export type GetDeckListQuery = {
  getDeckList:  {
    __typename: "DeckList",
    items:  Array< {
      __typename: "Deck",
      colors: Array< string >,
      createdAt: number,
      description: string | null,
      format: string | null,
      id: string,
      latestVersion:  {
        __typename: "DeckVersion",
        commander:  Array< {
          __typename: "Card",
          id: string,
          name: string,
          subtypes: Array< string >,
          supertypes: Array< string >,
          text: string | null,
          thumbnailImageUrl: string | null,
          types: Array< string >,
        } > | null,
        companion:  Array< {
          __typename: "Card",
          id: string,
          name: string,
          subtypes: Array< string >,
          supertypes: Array< string >,
          text: string | null,
          thumbnailImageUrl: string | null,
          types: Array< string >,
        } > | null,
        createdAt: number,
        mainboard:  Array< {
          __typename: "DeckCard",
          count: number,
        } >,
        sideboard:  Array< {
          __typename: "DeckCard",
          count: number,
        } >,
      } | null,
      memo: string | null,
      name: string,
      ownerUserId: string,
      status: DeckStatus,
      thumbnailImageUrl: string | null,
      timestamp: number,
    } >,
    nextToken: string | null,
    scannedCount: number | null,
  } | null,
};

export type GetDeckListByUsernameQueryVariables = {
  filter?: DeckListFilterInput | null,
  nextToken?: string | null,
  username: string,
};

export type GetDeckListByUsernameQuery = {
  getDeckListByUsername:  {
    __typename: "DeckList",
    items:  Array< {
      __typename: "Deck",
      colors: Array< string >,
      createdAt: number,
      description: string | null,
      format: string | null,
      id: string,
      latestVersion:  {
        __typename: "DeckVersion",
        commander:  Array< {
          __typename: "Card",
          id: string,
          name: string,
          subtypes: Array< string >,
          supertypes: Array< string >,
          text: string | null,
          thumbnailImageUrl: string | null,
          types: Array< string >,
        } > | null,
        companion:  Array< {
          __typename: "Card",
          id: string,
          name: string,
          subtypes: Array< string >,
          supertypes: Array< string >,
          text: string | null,
          thumbnailImageUrl: string | null,
          types: Array< string >,
        } > | null,
        createdAt: number,
        mainboard:  Array< {
          __typename: "DeckCard",
          count: number,
        } >,
        sideboard:  Array< {
          __typename: "DeckCard",
          count: number,
        } >,
      } | null,
      memo: string | null,
      name: string,
      ownerUserId: string,
      status: DeckStatus,
      thumbnailImageUrl: string | null,
      timestamp: number,
    } >,
    nextToken: string | null,
    scannedCount: number | null,
  } | null,
};

export type GetDeckVersionListQueryVariables = {
  deckId: string,
  nextToken?: string | null,
};

export type GetDeckVersionListQuery = {
  getDeckVersionList:  {
    __typename: "DeckVersionList",
    items:  Array< {
      __typename: "DeckVersion",
      commander:  Array< {
        __typename: "Card",
        id: string,
        name: string,
        subtypes: Array< string >,
        supertypes: Array< string >,
        text: string | null,
        thumbnailImageUrl: string | null,
        types: Array< string >,
      } > | null,
      companion:  Array< {
        __typename: "Card",
        id: string,
        name: string,
        subtypes: Array< string >,
        supertypes: Array< string >,
        text: string | null,
        thumbnailImageUrl: string | null,
        types: Array< string >,
      } > | null,
      createdAt: number,
      mainboard:  Array< {
        __typename: "DeckCard",
        card:  {
          __typename: "Card",
          id: string,
          name: string,
          subtypes: Array< string >,
          supertypes: Array< string >,
          text: string | null,
          thumbnailImageUrl: string | null,
          types: Array< string >,
        },
        count: number,
      } >,
      sideboard:  Array< {
        __typename: "DeckCard",
        card:  {
          __typename: "Card",
          id: string,
          name: string,
          subtypes: Array< string >,
          supertypes: Array< string >,
          text: string | null,
          thumbnailImageUrl: string | null,
          types: Array< string >,
        },
        count: number,
      } >,
    } >,
    nextToken: string | null,
    scannedCount: number | null,
  } | null,
};

export type GetProfileQueryVariables = {
  userId: string,
};

export type GetProfileQuery = {
  getProfile:  {
    __typename: "UserProfile",
    bio: string | null,
    displayName: string | null,
    iconImageUrl: string | null,
  } | null,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    createdAt: number,
    option:  {
      __typename: "UserOption",
      lang: string,
      locale: string,
    } | null,
    profile:  {
      __typename: "UserProfile",
      bio: string | null,
      displayName: string | null,
      iconImageUrl: string | null,
    } | null,
    updatedAt: number,
    username: string,
  } | null,
};

export type SearchCardListQueryVariables = {
  input?: SearchCardInput | null,
};

export type SearchCardListQuery = {
  searchCardList:  Array< {
    __typename: "Card",
    id: string,
    name: string,
    subtypes: Array< string >,
    supertypes: Array< string >,
    text: string | null,
    thumbnailImageUrl: string | null,
    types: Array< string >,
  } >,
};

export type SearchLimitedDeckListQueryVariables = {
  input?: SearchDeckInput | null,
};

export type SearchLimitedDeckListQuery = {
  searchLimitedDeckList:  Array< {
    __typename: "Deck",
    colors: Array< string >,
    createdAt: number,
    description: string | null,
    format: string | null,
    id: string,
    latestVersion:  {
      __typename: "DeckVersion",
      commander:  Array< {
        __typename: "Card",
        id: string,
        name: string,
        subtypes: Array< string >,
        supertypes: Array< string >,
        text: string | null,
        thumbnailImageUrl: string | null,
        types: Array< string >,
      } > | null,
      companion:  Array< {
        __typename: "Card",
        id: string,
        name: string,
        subtypes: Array< string >,
        supertypes: Array< string >,
        text: string | null,
        thumbnailImageUrl: string | null,
        types: Array< string >,
      } > | null,
      createdAt: number,
      mainboard:  Array< {
        __typename: "DeckCard",
        card:  {
          __typename: "Card",
          id: string,
          name: string,
          subtypes: Array< string >,
          supertypes: Array< string >,
          text: string | null,
          thumbnailImageUrl: string | null,
          types: Array< string >,
        },
        count: number,
      } >,
      sideboard:  Array< {
        __typename: "DeckCard",
        card:  {
          __typename: "Card",
          id: string,
          name: string,
          subtypes: Array< string >,
          supertypes: Array< string >,
          text: string | null,
          thumbnailImageUrl: string | null,
          types: Array< string >,
        },
        count: number,
      } >,
    } | null,
    memo: string | null,
    name: string,
    ownerUserId: string,
    status: DeckStatus,
    thumbnailImageUrl: string | null,
    timestamp: number,
  } >,
};

export type SearchOwnDeckListQueryVariables = {
  input?: SearchDeckInput | null,
};

export type SearchOwnDeckListQuery = {
  searchOwnDeckList:  Array< {
    __typename: "Deck",
    colors: Array< string >,
    createdAt: number,
    description: string | null,
    format: string | null,
    id: string,
    latestVersion:  {
      __typename: "DeckVersion",
      commander:  Array< {
        __typename: "Card",
        id: string,
        name: string,
        subtypes: Array< string >,
        supertypes: Array< string >,
        text: string | null,
        thumbnailImageUrl: string | null,
        types: Array< string >,
      } > | null,
      companion:  Array< {
        __typename: "Card",
        id: string,
        name: string,
        subtypes: Array< string >,
        supertypes: Array< string >,
        text: string | null,
        thumbnailImageUrl: string | null,
        types: Array< string >,
      } > | null,
      createdAt: number,
      mainboard:  Array< {
        __typename: "DeckCard",
        card:  {
          __typename: "Card",
          id: string,
          name: string,
          subtypes: Array< string >,
          supertypes: Array< string >,
          text: string | null,
          thumbnailImageUrl: string | null,
          types: Array< string >,
        },
        count: number,
      } >,
      sideboard:  Array< {
        __typename: "DeckCard",
        card:  {
          __typename: "Card",
          id: string,
          name: string,
          subtypes: Array< string >,
          supertypes: Array< string >,
          text: string | null,
          thumbnailImageUrl: string | null,
          types: Array< string >,
        },
        count: number,
      } >,
    } | null,
    memo: string | null,
    name: string,
    ownerUserId: string,
    status: DeckStatus,
    thumbnailImageUrl: string | null,
    timestamp: number,
  } >,
};

export type SearchPublicDeckListQueryVariables = {
  input?: SearchDeckInput | null,
};

export type SearchPublicDeckListQuery = {
  searchPublicDeckList:  Array< {
    __typename: "Deck",
    colors: Array< string >,
    createdAt: number,
    description: string | null,
    format: string | null,
    id: string,
    latestVersion:  {
      __typename: "DeckVersion",
      commander:  Array< {
        __typename: "Card",
        id: string,
        name: string,
        subtypes: Array< string >,
        supertypes: Array< string >,
        text: string | null,
        thumbnailImageUrl: string | null,
        types: Array< string >,
      } > | null,
      companion:  Array< {
        __typename: "Card",
        id: string,
        name: string,
        subtypes: Array< string >,
        supertypes: Array< string >,
        text: string | null,
        thumbnailImageUrl: string | null,
        types: Array< string >,
      } > | null,
      createdAt: number,
      mainboard:  Array< {
        __typename: "DeckCard",
        card:  {
          __typename: "Card",
          id: string,
          name: string,
          subtypes: Array< string >,
          supertypes: Array< string >,
          text: string | null,
          thumbnailImageUrl: string | null,
          types: Array< string >,
        },
        count: number,
      } >,
      sideboard:  Array< {
        __typename: "DeckCard",
        card:  {
          __typename: "Card",
          id: string,
          name: string,
          subtypes: Array< string >,
          supertypes: Array< string >,
          text: string | null,
          thumbnailImageUrl: string | null,
          types: Array< string >,
        },
        count: number,
      } >,
    } | null,
    memo: string | null,
    name: string,
    ownerUserId: string,
    status: DeckStatus,
    thumbnailImageUrl: string | null,
    timestamp: number,
  } >,
};
