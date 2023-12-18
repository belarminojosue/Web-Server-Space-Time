export class UnableToConnectError extends Error {
  constructor(message = 'Unable to connect to the server') {
    super(message)
    this.name = 'ECONNREFUSED'
  }
}
