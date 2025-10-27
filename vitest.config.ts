// vitest.config.mts
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig } from 'vitest/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(async () => {
  // ⬇️ ESM 전용 패키지를 동적 import로 로드 (require 충돌 방지)
  const { default: react } = await import('@vitejs/plugin-react');

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: [path.resolve(__dirname, 'src/shared/lib/test-setup.ts')],
      css: true,
    },
  };
});
