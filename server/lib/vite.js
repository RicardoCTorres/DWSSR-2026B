//flujo de archivos
import fs from 'node:fs'
//viblioteca de rutas
import path from 'node:path'
import { fileURLToPath } from 'node:url';
//creando variables de rutas
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Helper para handlebars que genera las etiquetas de vite
 * En desarrooll: conecta al servidor de sewsaroollo de cite
 * En producion: usa los compilados de vite
 */
export function viteAssets(){
    //obtener modo de ejecucion
    const isDev = process.env.NODE_ENV !== 'production';
// rescatando la url del servidor de desarooloo
    const server = process.env.VITE_SERVER || 'http://localhost:5173';
    if(isDev){
        //el desarollo cargamos los archivos del frontend directamente del servidor de desarrollo de vite
        return `
        <script type="module" src="${viteDevServer}/@vite/client"></script>
        <script type="module" src="${viteDevServer}/main.js"></script>
        `
    }
    //en producion leemos el manifest 
    // //y generamos las etiquetas finales de produccion
    const manifestPath = path.join(__dirname, '..', '..', 'dist', '.vite', 'manifest.json');

    //si no existe el manifiesto
    if (!fs.existsSync(manifestPath)) {
        console.warn("Vite Manifest not found. Run npm run build");
        return'';
    }
}