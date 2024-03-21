import 'reflect-metadata';

function routeBindr(method: string) {
  return function (path: string) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata('path', path, target, key);
      Reflect.defineMetadata('method', method, target, key);
    };
  };
}

export const get = routeBindr('get');
export const put = routeBindr('put');
export const post = routeBindr('post');
export const del = routeBindr('delete');
