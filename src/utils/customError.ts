class AppError extends Error {
  public status: string;
  public isOperation: boolean;
  constructor(public statusCode: number = 500, public message: string) {
    super(message);
    this.status = `${statusCode}.startsWith('4) ? 'fail':'error'`;
    this.isOperation = true;
    Error.captureStackTrace(this, this.constructor);
  }
}
