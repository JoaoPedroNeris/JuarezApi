import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'JuarezAPI',
    description: 'Sistema simples para site da sorveteria'
  },
  host: 'localhost:3000'
};

const outputFile = './src/docs/documentation.json';
const routes = ['./index.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen()(outputFile, routes, doc);