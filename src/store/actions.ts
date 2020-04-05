export interface IAction {
  type: ActionType;
  payload?: any;
}

export enum ActionType {
  SetScrollPosition = 'SET_SCROLL_POSITION',
  SetSearchBarQuery = 'SET_SEARCH_BAR_QUERY',
  SetSearchBarTags = 'SET_SEARCH_BAR_TAGS',
  SetDeck = 'SET_DECK',
  SetDeckList = 'SET_DECK_LIST',
  AppendDecks = 'APPEND_DECKS',
  SetLastLocation = 'SET_LAST_LOCATION',
  InitSubPage = 'INIT_SUB_PAGE',
}
