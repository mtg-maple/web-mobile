export interface IAction {
  type: ActionType;
  payload?: any;
}

export enum ActionType {
  SetScrollPosition = 'SET_SCROLL_POSITION',
}
