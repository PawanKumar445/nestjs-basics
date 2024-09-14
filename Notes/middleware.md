# Middleware
 * Can be class type or function type
 * Middleware are one way, can be used to manipulate request object but not response
 * After the request reaches to nest middleware or route handler, the middleware have no access to the request response object
   * If class type middleware then
      * Class must implement `NestMiddleware` imported from `@nestjs/common`.
      * The class must define the `use()` method. The use method have parameters: request, response and next(). The types of these parameters can be imported from `express`.
   * If function type
      * Function must be a common javascript function.
      * The function must accept `request`, `response` and `next()` parameters. Their types can be imported from `express`.
 * Both type of middleware must call the next() function at the end, otherwise nest middleware or route handler will not be executed
 * Middleware executes sequentially
 * Used to Manipulate Request object. Like request headers
 * Configuration is same for both type of middlewares.
 * Can be used for all routes in the module controller or for a specific controller
    * // .forRoutes({ path: '*', method: RequestMethod.ALL }); // FOR ALL ROUTES
    * // .forRoutes({ path: '/data', method: RequestMethod.ALL }); // FOR SPECIFIC PATH
 * Can be used for all nest app routes
 * To configure complete app use `app.use(LoggerMiddleware);` in the `main.ts` but logger <b>middleware must be function not class</b>
 * Can not throw error from middleware in response. But the error logs on console