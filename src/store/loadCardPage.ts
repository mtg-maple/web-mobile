import { ActionType, IAction } from './actions';
import { IStore, ICardImage, ICardText } from '../models';

// Action
export interface LoadCardPageAction {
  type: ActionType.LoadCardPage;
  payload: LoadCardPageActionPayload;
}

export interface LoadCardPageActionPayload {
  title?: string;
  cardImages?: ICardImage[];
  cardText?: ICardText;
}

// Action Creator
export const loadCardPage = (payload: LoadCardPageActionPayload): LoadCardPageAction => ({
  type: ActionType.LoadCardPage,
  payload,
});

// User-Defined Type Guard
export const isLoadCardPageAction = (arg: any): arg is LoadCardPageAction => {
  return arg !== null && typeof arg === 'object' && arg.type === ActionType.LoadCardPage;
}

// Reducer
export const reduceLoadCardPage = (state: IStore, action: IAction): IStore => {
  if (isLoadCardPageAction(action)) {
    const cardPage = {
      ...state.cardPage,
      title: action.payload.title,
      cardImages: action.payload.cardImages,
      cardText: action.payload.cardText,
    };
    return { ...state, cardPage };
  }
  return state;
};
