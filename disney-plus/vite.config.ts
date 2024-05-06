import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  console.log(mode);
  const env = loadEnv(mode, process.cwd(), 'VITE_');
  if(!env.hasOwnProperty('VITE_TMDB_API_KEY') || !env.hasOwnProperty('VITE_GOOGLE_OAUTH_CLIENT_ID')) {
      console.error(`env variable is missing in ${mode} mode`);
      process.exit(1);
  }

  return {
    plugins: [react()],
  }
});
