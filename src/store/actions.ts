import {
  IAccountData,
  INewAccountData,
  IApplicationAction,
  ISelectAccount,
  ISetAccounts,
  ILogin,
  ICreateAccount,
  IUpdateIndex,
} from "./types";

export enum applicationActionTypes {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
  SELECT_ACCOUNT = "SELECT_ACCOUNT",
  CREATE_ACCOUNT = "CREATE_ACCOUNT",
  SET_ACCOUNTS = "SET_ACCOUNTS",
  UPDATE_TAB_INDEX = "UPDATE_TAB_INDEX",
}

export const login = (customerId: string): ILogin => ({
  type: applicationActionTypes.LOGIN,
  customerId,
});

export const logout = (): IApplicationAction => ({
  type: applicationActionTypes.LOGOUT,
});

export const selectAccount = (selectAccount: string): ISelectAccount => ({
  type: applicationActionTypes.SELECT_ACCOUNT,
  selectAccount,
});

export const createNewAccount = (
  newAccount: INewAccountData
): ICreateAccount => ({
  type: applicationActionTypes.CREATE_ACCOUNT,
  newAccount,
});

export const setAccounts = (accounts: IAccountData[]): ISetAccounts => ({
  type: applicationActionTypes.SET_ACCOUNTS,
  accounts,
});

export const updateTabIndex = (tabIndex: number): IUpdateIndex => ({
  type: applicationActionTypes.UPDATE_TAB_INDEX,
  tabIndex,
});
