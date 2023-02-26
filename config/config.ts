import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  plugins: ['@umijs/plugins/dist/request'],
  request: {},
  favicons: ['/favicon.ico'],
  npmClient: 'yarn',
  routes,
});
