function errorLog(err, req, res, next) {
  const timestamp = new Date().toISOString();

  console.error("==== ERROR LOG ====");
  console.error("Time    :", timestamp);
  console.error("Method  :", req.method);
  console.error("URL     :", req.originalUrl);
  console.error("Message :", err.message);

  if (process.env.NODE_ENV !== "production") {
    console.error("Stack    :", err.stack);
  }

  console.error("======================");
  next(err);
}

export default errorLog;
