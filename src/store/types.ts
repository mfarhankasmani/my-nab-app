import { applicationActionTypes } from "./actions";

export interface INewAccountData {
  accountId: string;
  accoutType: string;
  isPending: boolean;
  currentBalance?: number;
  availableBalance?: number;
}

export interface IAccountData extends INewAccountData {
  currentBalance: number;
  availableBalance: number;
}

export interface IState {
  customerId: string;
  isLogin: boolean;
  selectedAccount: string;
  newAccounts: INewAccountData[] | [];
  accounts: IAccountData[] | [];
  tabIndex: number;
}

export interface IApplicationAction {
  type: applicationActionTypes;
}

export interface ILogin extends IApplicationAction {
  customerId: string;
}

export interface ISelectAccount extends IApplicationAction {
  selectAccount: string;
}

export interface ICreateAccount extends IApplicationAction {
  newAccount: INewAccountData;
}

export interface ISetAccounts extends IApplicationAction {
  accounts: IAccountData[];
}

export interface IUpdateIndex extends IApplicationAction {
  tabIndex: number;
}
