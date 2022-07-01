export default class GenericError extends Error {
  public _message: string;
  public _status: number;
  constructor(message: string, status: number) {
    super(message);
    this._message = message;
  }
}
