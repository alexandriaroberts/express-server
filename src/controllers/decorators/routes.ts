import 'reflect-metadata';
import { Methods } from './Methods';
import { MetadataKeys } from './MetadataKeys';

function routeBindr(method: string) {
  return function (path: string) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata(MetadataKeys.path, path, target, key);
      Reflect.defineMetadata(MetadataKeys.method, method, target, key);
    };
  };
}

export const get = routeBindr(Methods.get);
export const put = routeBindr(Methods.put);
export const post = routeBindr(Methods.post);
export const del = routeBindr(Methods.del);
export const patch = routeBindr(Methods.patch);
