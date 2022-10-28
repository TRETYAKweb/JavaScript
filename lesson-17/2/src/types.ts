export interface IPerson {
  name: string,
  balance: number,
}

export interface IPaymentData  {
  personId: number
  amount: number
}

export interface ITransactionInfo  {
  name: string,
  amount: number,
}

export enum EvantNameEnum {
  Add = "add",
  Register = "register",
  ChangeBalance = "changeBalance",
  Withdraw = "withdraw"
}

// interface HandlerType<T> {

// }






