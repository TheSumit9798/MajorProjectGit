class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}
export const errorMiddleware = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || 'Internal Server Error';
  if (err.code === 11000) {
    err.statusCode = 400;
    err.message = `Duplicate field value entered: ${Object.keys(err.keyValue)[0]}`;
  }
  if(err.name === 'JsonWebtokenError') {
    err.statusCode = 400;
    err.message = 'Json Web Token is invalid, try again';
  }
  if(err.name === 'TokenExpiredError') {
    err.statusCode = 400;
    err.message = 'Json Web Token is expired, try again';
    }
    if(err.name === 'CastError') {
      err.statusCode = 400;
      err.message = `Resource not found. Invalid: ${err.path}`;
    }
    const errorMessage = err.errors ? Object.values(err.errors).map(val => val.message).join(', ') : null;
    if (errorMessage) {
      err.statusCode = 400;
      err.message = errorMessage;
    }
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
};

export default ErrorHandler;