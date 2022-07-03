export default class GenericError extends Error {
  readonly _message: string;
  readonly _status: number;
  constructor(message: string, status: number) {
    super(message);
    this._message = message;
    this._status = status;
  }
  get message() {
    return this._message;
  }
  get status() {
    return this._status;
  }
}
