const errorMiddleware = (err, req, res, next) => {
    console.log('There is the error');
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.status(statusCode)
    /* stack: process.env.NODE_ENV === 'development' ? err.stack : null  -- kani na code kay para kung under development pa
      application makita ang error pero ug production na kay null na ang makita sa err.message*/
    res.json({message: err.message, stack: process.env.NODE_ENV === 'development' ? err.stack : null});
}

module.exports = errorMiddleware