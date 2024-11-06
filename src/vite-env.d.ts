/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BE_URL: string;
  readonly VITE_PORT: number;
  readonly VITE_LANGUAGE: string;
  readonly VITE_DELAY_GET_DATA: number;
  readonly VITE_DEBOUNCE_TIME: number;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
