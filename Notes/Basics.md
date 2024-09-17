# COntrollers
* Controllers in nest js are responsible for handling request and returning response.
* Controller is a javascript class with `@Controller()` decorator at the top of it.
* Controllers are based on route mechanism. Each controller has a route, which the user calls.
* A controller class can have any number of routes.
  * A route is a javascript function with have `@Get(), @Post(), @Delete()` any of these decorator at the top of them.
  * Controller are used to perform CRUD operations

  ```javascript
  import {Controller, Get, Post} from '@nestjs/common'

  @Controller('test')
  export class TestController{
    @Get('r1')
    route1(){
      return 'From Get route1'
    }

    @Post()
    route2(){
      return 'From Post route2'
    }
  }
  //route1: GET-http//:localhost:3000/test/r1
  //route2: POST: http//:localhost:3000/test/r2
  ```

# Nest Basics
* Req.query = data after the ? in the url
* Req.param = variable data in the url /:data

