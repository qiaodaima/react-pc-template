import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  favicons: ['/favicon.ico'],
  npmClient: 'yarn',
  routes,
});
