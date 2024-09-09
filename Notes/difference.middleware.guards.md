# Difference between Middleware and Guards
* Middleware are executed before guards.
* Guard returns `true`/`false` values on the basis of which route handler gets executed. It true then proceed execution.If returns false then throws default error is thrown back to the controller(which can also be customized/modified)
* In Middleware next() function must be called, otherwise next middleware in the chain or route handler will not be executed
* Can not throw exceptions to the controller from middleware, but exceptions can be thrown back to the controller response. from guards