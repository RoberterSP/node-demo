import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

/**
 * @description 中间件函数的作用解释：
 * 中间件是处理路由被调用之前的函数。中间件函数可以访问请求和响应对象，以及应用程序请求响应周期中的next()中间件函数。
 * 1.执行任何代码
 * 2. 对请求和相应的数据进行更改
 * 3.如果当前的中间件函数没有结束请求-响应周期, 它必须调用 next() 将控制传递给下一个中间件函数。否则, 请求将被挂起
 * **/

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...');
    next();
  }
}
