import { IState } from "./types";
import { applicationActionTypes } from "./actions";

const initialState = {
  customerId: "",
  isLogin: false,
  selectedAccount: "",
  newAccounts: [],
  accounts: [],
  tabIndex: 0,
};

const reducer = (state: IState = initialState, action: any) => {
  switch (action.type) {
    case applicationActionTypes.LOGIN:
      return {
        ...state,
        customerId: action.customerId,
        isLogin: true,
      };
    case applicationActionTypes.LOGOUT:
      return {
        ...state,
        customerId: "",
        isLogin: false,
      };
    case applicationActionTypes.SELECT_ACCOUNT:
      return {
        ...state,
        selectedAccount: action.selectAccount,
      };
    case applicationActionTypes.CREATE_ACCOUNT:
      return {
        ...state,
        newAccounts: [...state.newAccounts, action.newAccount],
      };
    case applicationActionTypes.SET_ACCOUNTS:
      return {
        ...state,
        accounts: [...action.accounts],
      };
    case applicationActionTypes.UPDATE_TAB_INDEX:
      return {
        ...state,
        tabIndex: action.tabIndex,
      };
    default:
      return state;
  }
};

export default reducer;
