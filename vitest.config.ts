// vitest.config.mts
import path from 'node:path';

// import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: [path.resolve(__dirname, 'src/shared/lib/test-setup.ts')],
    css: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});

//
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
//
// export default defineConfig(async () => {
//   // ⬇️ ESM 전용 패키지를 동적 import로 로드 (require 충돌 방지)
//   const { default: react } = await import('@vitejs/plugin-react');
//
//   return {
//     plugins: [react(), tsconfigPaths()],
//     resolve: {
//       alias: {
//         '@': path.resolve(__dirname, 'src'),
//       },
//     },
//     test: {
//       environment: 'jsdom',
//       globals: true,
//       setupFiles: [path.resolve(__dirname, 'src/shared/lib/test-setup.ts')],
//       css: true,
//     },
//   };
// });
