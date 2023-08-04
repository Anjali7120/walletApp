export class InternalServerError extends Error {
  constructor(message, data) {
    super();
    this.message = 'Internal Server Error';
    this.data = data;
  }
}
export class BadRequestError extends Error {
  constructor(msg, errors) {
    super();
    this.message = msg || 'Bad Request';
    this.errors = errors;
  }
}
