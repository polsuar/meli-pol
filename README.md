# Examen Front End Mercado Libre
## Introducción

Creado con el siguiente stack tecnológico:

● Cliente:
○ HTML
○ JS (React - Redux)
○ CSS (Sass)

● Servidor:
○ Node 
○ Express

### Clonar repositorio
```
git clone https://github.com/polsuar/meli-pol.git
```
### Configuración Inicial
Instalar dependencias, desde la raíz del proyecto:

```
npm install
```

### Inicializando servidores

Ejecutar la siguiente sentencia para inicializar front y backend

```
npm start
```

### Requerimientos funcionales

● En base a los diseños dados, construir las siguientes tres vistas:
○ Caja de búsqueda
○ Resultados de la búsqueda
○ Detalle del producto

● Las vistas son navegables de manera independiente y cuentan con su propia url:
○ Caja de Búsqueda: ​“/”
○ Resultados de la búsqueda: ​“/items?search=”
○ Detalle del producto: ​“/items/:id”

● Construir los endpoints para ser utilizados desde las vistas.


### Descripción funcional de la aplicación

● En la vista de caja de búsqueda, debería poder ingresar el producto a buscar y al enviar el
formulario navegar a la vista de Resultados de búsqueda, visualizando solo 4 productos. Luego,
al hacer click sobre uno de ellos, debería navegar a la vista de Detalle de Producto.

● Dado un id de producto, debería poder ingresar directamente a la vista de detalle de producto.