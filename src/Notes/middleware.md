# Middleware
 * Middleware executes sequentially
 * Used to Manipulate Request, Response object. Like request headers
 * next() function must be called otherwise nest middleware or route handler will not be executed
 * Can be used for all routes in the module controller or for a specific controller
    * // .forRoutes({ path: '*', method: RequestMethod.ALL }); // FOR ALL ROUTES
    * // .forRoutes({ path: '/data', method: RequestMethod.ALL }); // FOR SPECIFIC PATH
 * Can be used for complete app
 * To configure complete app use app.use(LoggerMiddleware); but logger <b>middleware must be function not class</b>
 * Can not throw error from middleware in response