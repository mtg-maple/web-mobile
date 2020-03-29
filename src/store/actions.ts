export interface IAction {
  type: ActionType;
  payload?: any;
}

export enum ActionType {
  SetScrollPosition = 'SET_SCROLL_POSITION',
  SetSearchBarQuery = 'SET_SEARCH_BAR_QUERY',
  SetSearchBarTags = 'SET_SEARCH_BAR_TAGS',
  SetDecks = 'SET_DECKS',
  AppendDecks = 'APPEND_DECKS',
}
