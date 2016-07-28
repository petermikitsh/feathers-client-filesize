import feathers from 'feathers/client';
import rest from 'feathers-rest/client';
import superagent from 'superagent';

const app = feathers().configure(
  rest('http://api.feathersjs.com').superagent(superagent)
);
