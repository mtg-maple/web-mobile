import { ActionType, IAction } from './actions';
import { IStore, IDeck, Page } from '../models';

// Action
export interface SetDeckAction {
  type: ActionType.SetDeck;
  payload: {
    targetPage: Page;
    deck: IDeck;
  };
}

// Action Creator
export const setDeck = (targetPage: Page, deck: IDeck): SetDeckAction => ({
  type: ActionType.SetDeck,
  payload: { targetPage, deck },
});

// User-Defined Type Guard
export const isSetDeckAction = (arg: any): arg is SetDeckAction => {
  return arg !== null && typeof arg === 'object' && arg.type === ActionType.SetDeck;
}

// Reducer
export const reduceSetDeck = (state: IStore, action: IAction): IStore => {
  if (isSetDeckAction(action)) {
    if (action.payload.targetPage === Page.Deck) {
      const deckPage = { ...state.deckPage, deck: { ...state.deckPage.deck, ...action.payload.deck } };
      return { ...state, deckPage };
    }
  }
  return state;
};
