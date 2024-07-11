/// <reference types="vite-plugin-electron/electron-env.d.ts" />

declare namespace NodeJS {
  interface ProcessEnv {
    VSCODE_DEBUG?: 'true'
    APP_ROOT: string
    VITE_PUBLIC: string
  }
}
