import { defineConfig } from 'umi';

const developServerTarget = 'https://www.baidu.com';
const serverTarget = developServerTarget;

export default defineConfig({
  proxy: {
    '/api/v1': {
      target: serverTarget,
      changeOrigin: true,
    },
  }
});
