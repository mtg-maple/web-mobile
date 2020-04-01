import { ActionType, IAction } from './actions';
import { IStore, Page } from './model';
import * as H from 'history';

// Action
export interface InitSubPageAction {
  type: ActionType.InitSubPage;
  payload: {
    targetPage: Page,
    fromLocation: H.Location<H.History.PoorMansUnknown>;
  };
}

// Action Creator
export const initSubPage = (targetPage: Page, fromLocation: H.Location<H.History.PoorMansUnknown>): InitSubPageAction => ({
  type: ActionType.InitSubPage,
  payload: { targetPage, fromLocation },
});

// User-Defined Type Guard
export const isInitSubPageAction = (arg: any): arg is InitSubPageAction => {
  return arg !== null && typeof arg === 'object' && arg.type === ActionType.InitSubPage;
}

// Reducer
export const reduceInitSubPage = (state: IStore, action: IAction): IStore => {
  if (isInitSubPageAction(action)) {
    const fromLocation = action.payload.fromLocation;
    switch (action.payload.targetPage) {
      case Page.Deck: 
        const deckPage = {
          ...state.deckPage,
          fromLocation,
          scrollPositionY: 0,
        };
        return { ...state, deckPage };
      default:
        return state;
    }
  }
  return state;
};
