import { sayHello } from './drugi';

console.info('przywitujem się');

sayHello();

setTimeout(() => {
    console.info('Kłuniec przywitania');
}, 5000);