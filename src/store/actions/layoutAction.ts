import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const LayoutActions = {
  toggleMenu: actionCreator<boolean>('TOGGLE_MENU'),
  toggleExpand: actionCreator<boolean>('TOGGLE_EXPAND'),
};
