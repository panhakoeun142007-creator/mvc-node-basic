class BaseController {
  success(res, message, data = null, status = 200) {
    return res.status(status).json({
      message,
      data,
    });
  }

  error(res, message, error = null, status = 500) {
    return res.status(status).json({
      message,
      error,
    });
  }
}

export default BaseController;
