import { Request, Response } from 'express';
import * as staticFile from 'connect-static-file'
import * as path from 'path';

export default function handle404(serveDir : string) {
    const handle404Middleware = staticFile(path.join(serveDir, '.404.html'));
    return function (request : Request, response : Response, next : Function) {
        response.statusCode = 404;
        return handle404Middleware(request, response, next);
    }
}
