import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';

// Load environment variables from the respective .env files
dotenv.config({ path: `.env.${process.env.NODE_ENV || 'development'}` });


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
