## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## JSON-SERVER
To run your FAKE API you need to have json-server installed on your PC. When you finish your Instalation run this script:

```bash
npm run db
```
This Script give you some localhosts URL: 

  [http://localhost:4000](http://localhost:4000)
  [http://localhost:4000/productos](http://localhost:4000/productos)
  [http://localhost:4000/categorias](http://localhost:4000/categorias)
  [http://localhost:4000/ubicaciones](http://localhost:4000/ubicaciones)
  
Each of these endpoints is equals to the data in de data/data.json.

## Proyect Structure

This project has Context. You can find the Provider in the 'Context' folder, from this folder you can find all the calls to the FAKE API and find all the States used. Then you can find a folder called 'data' in this folder you can find a json file, this contains all the data of the application, both url of the images, names, prices, descriptions, category names, etc.
I created a custom hook to help us to manage all the information than the provider gives us, i called 'useBk' you can find it too many times in all the app.

### Images
src: public/assets/images
Here you can find all de media photos from the app. 

### SRC
In the SRC folder, you can find four more folders (components, layout, pages, styles). 
- components: 
  - Categoria.js
  - Item.js (Slider 1)
  - Item2.js (Slider 2)
  - Preview.js 
  - Producto.js
  - Ubicacion.js

This components are used to iterate and show all the data from the API and make easier the customization of the styles and other things.

- layout: 
  - Layout.js

This component contains HEADER and FOOTER, this helps us to re-use it on new endpoints, components, etc. This is functional because we only need to instanciated and write some new code between of the component and the HTML and CSS will be the same with a different body content.

- layout: 
  - categoria
    - bebidas.js
    - chapin.js
    - croissants.js
    - ensaladas.js
    - extras.js
    - muffins.js
    - ninos.js
    - otros.js
    - panqueques.js
    - pollo.js
    - postres.js
  
  - producto
    - [id].js (Dynamic Routing)

  - _app.js (Default nextjs file)
  - _document.js (Default nextjs file)
  - direcciones.js
  - index.js 
  - nuevo.js
  - ordenes.js
  - ubicaciones.js

Now here you can find all the endpoints, but the most important is de producto/[id].js this is Dynamic Routing this have a special funcion 'getServerSideProps' is used to identify which id we are making a click and show it on Component with its proper information. The other routes contain more iterations, imports of components, own states, etc.

- styles: 
  - globals.css 

Here we can find the TailwindCSS directives.
