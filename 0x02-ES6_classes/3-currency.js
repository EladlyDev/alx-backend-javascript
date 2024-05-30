export default class Currency {
  constructor(code, name) {
    this._code = code; // eslint-disable-line no-underscore-dangle
    this._name = name; // eslint-disable-line no-underscore-dangle
  }

  get code() {
    return this._code; // eslint-disable-line no-underscore-dangle
  }

  set code(code) {
    this._code = code; // eslint-disable-line no-underscore-dangle
  }

  get name() {
    return this._name; // eslint-disable-line no-underscore-dangle
  }

  set name(name) {
    this._name = name; // eslint-disable-line no-underscore-dangle
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`; // eslint-disable-line no-underscore-dangle
  }
}
