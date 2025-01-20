const productos = [
  {
    id: 1,
    nombre: "Chaqueta casual",
    precio: 20,
    categoria: "hombre",
    imagen: "/CatalogoRopa/image/Hombre/Ropa de hombre.png", // Ruta corregida
  },
  {
    id: 2,
    nombre: "Chaqueta gótica con cremallera,",
    precio: 70,
    categoria: "mujer",
    imagen: "/CatalogoRopa/image/Mujer/Ropa de Mujer.png", // Ruta corregida
  },
  {
    id: 3,
    nombre:
      "Camisetas con Estampado de Dragón y Dinosaurio, Shorts y Pantalones - Conjunto Casual Cómodo",
    precio: 27,
    categoria: "niños",
    imagen: "/CatalogoRopa/image/Nino/Ropa de niño.png", // Ruta corregida
  },
  {
    id: 4,
    nombre: "Camisetas largas y holgadas para hombre",
    precio: 10.61,
    categoria: "hombre",
    imagen: "/CatalogoRopa/image/Hombre/Ropa de hombre1.png", // Ruta corregida
  },
  {
    id: 5,
    nombre: "Vestido Estampado - Manga Corta",
    precio: 90,
    categoria: "mujer",
    imagen: "/CatalogoRopa/image/Mujer/Ropa de Mujer1.png", // Ruta corregida
  },
  {
    id: 6,
    nombre: " Chaleco de chico con estampado de píxeles",
    precio: 10,
    categoria: "niños",
    imagen: "/CatalogoRopa/image/Nino/Ropa de niño1.png", // Ruta corregida
  },
  {
    id: 7,
    nombre: "Camiseta de manga corta para hombre",
    precio: 15,
    categoria: "hombre",
    imagen: "/CatalogoRopa/image/Hombre/Ropa de hombre2.png", // Ruta corregida
  },
  {
    id: 8,
    nombre: "Blusa elegante de cuello alto para mujer",
    precio: 10,
    categoria: "mujer",
    imagen: "/CatalogoRopa/image/Mujer/Ropa de Mujer2.png", // Ruta corregida
  },
  {
    id: 9,
    nombre: "Traje de 2 piezas para niños Mosedou",
    precio: 26,
    categoria: "niños",
    imagen: "/CatalogoRopa/image/Nino/Ropa de niño2.png", // Ruta corregida
  },
  {
    id: 10,
    nombre: "Conjunto de traje deportivo casual para hombres",
    precio: 30,
    categoria: "hombre",
    imagen: "/CatalogoRopa/image/Hombre/Ropa de hombre3.png", // Ruta corregida
  },
  {
    id: 11,
    nombre: "Blazer con botones para La oficina",
    precio: 30,
    categoria: "mujer",
    imagen: "/CatalogoRopa/image/Mujer/Ropa de Mujer3.png", // Ruta corregida
  },
  {
    id: 12,
    nombre: "Conjunto de 2 piezas para Niños: Chaqueta Varsity con Estampado ",
    precio: 18,
    categoria: "niños",
    imagen: "/CatalogoRopa/image/Nino/Ropa de niño3.png", // Ruta corregida
  },
  {
    id: 13,
    nombre: "Camiseta de coche para hombre",
    precio: 10,
    categoria: "hombre",
    imagen: "/CatalogoRopa/image/Hombre/Ropa de hombre5.png", // Ruta corregida
  },
  {
    id: 14,
    nombre: " Camiseta casual de cuello redondo",
    precio: 10,
    categoria: "mujer",
    imagen: "/CatalogoRopa/image/Mujer/Ropa de Mujer4.png", // Ruta corregida
  },
  {
    id: 15,
    nombre: "Sudadera con Capucha de Impresión 3D de Rayo Degradado para Niños",
    precio: 20,
    categoria: "niños",
    imagen: "/CatalogoRopa/image/Nino/Ropa de niño4.png", // Ruta corregida
  },
  {
    id: 16,
    nombre: "Sudadera con capucha para hombre",
    precio: 40,
    categoria: "hombre",
    imagen: "/CatalogoRopa/image/Hombre/Ropa de hombre6.png", // Ruta corregida
  },
  {
    id: 17,
    nombre: "Vestido Mini con Estampado Floral de Verano",
    precio: 20,
    categoria: "mujer",
    imagen: "/CatalogoRopa/image/Mujer/Ropa de Mujer5.png", // Ruta corregida
  },
  {
    id: 18,
    nombre: "Conjunto de sudadera y pantalones de manga larga de astronauta ",
    precio: 13,
    categoria: "niños",
    imagen: "/CatalogoRopa/image/Nino/Ropa de niño5.png", // Ruta corregida
  },
  {
    id: 19,
    nombre: "Abrigo para hombre",
    precio: 30,
    categoria: "hombre",
    imagen: "/CatalogoRopa/image/Hombre/Ropa de hombre4.png", // Ruta corregida
  },
  {
    id: 20,
    nombre: "Abrigo de solapa de doble botonadura,",
    precio: 36,
    categoria: "mujer",
    imagen: "/CatalogoRopa/image/Mujer/Ropa de Mujer6.png", // Ruta corregida
  },
  {
    id: 21,
    nombre: "Chaqueta con Capucha de Forro Polar con Estampado de Estilo Cómic para Niños",
    precio: 15,
    categoria: "niños",
    imagen: "/CatalogoRopa/image/Nino/Ropa de niño6.png", // Ruta corregida
  },
  {
    id: 22,
    nombre: "Sudadera con Capucha Fallout para hombre",
    precio: 60,
    categoria: "hombre",
    imagen: "/CatalogoRopa/image/Hombre/Ropa de hombre7.png", // Ruta corregida
  },
  {
    id: 23,
    nombre: "Vestido Elegante de Tul con Estampado Floral",
    precio: 15,
    categoria: "mujer",
    imagen: "/CatalogoRopa/image/Mujer/Ropa de Mujer7.png", // Ruta corregida
  },
  {
    id: 24,
    nombre: "Conjunto Deportivo Casual de Verano para Niños - Estampado Digital 3D",
    precio: 12,
    categoria: "niños",
    imagen: "/CatalogoRopa/image/Nino/Ropa de niño7.png", // Ruta corregida
  },
  {
    id: 25,
    nombre: "Abrigo De Gabardina",
    precio: 50,
    categoria: "hombre",
    imagen: "/CatalogoRopa/image/Hombre/Ropa de hombre8.png", // Ruta corregida
  },
  {
    id: 26,
    nombre: "Pantalones Elegantes de Cintura Alta",
    precio: 16.35,
    categoria: "mujer",
    imagen: "/CatalogoRopa/image/Mujer/Ropa de Mujer8.png", // Ruta corregida
  },
  {
    id: 27,
    nombre: "Sudadera con Capucha de Estampado de Consola de Juegos",
    precio: 40,
    categoria: "niños",
    imagen: "/CatalogoRopa/image/Nino/Ropa de niño8.png", // Ruta corregida
  },
  {
    id: 28,
    nombre: "Camisa casual de manga larga para hombre",
    precio: 25,
    categoria: "hombre",
    imagen: "/CatalogoRopa/image/Hombre/Ropa de hombre9.png", // Ruta corregida
  },
  {
    id: 29,
    nombre: "Conjunto Chic de 3 Camisetas para Mujer",
    precio: 20,
    categoria: "mujer",
    imagen: "/CatalogoRopa/image/Mujer/Ropa de Mujer9.png", // Ruta corregida
  },
  {
    id: 30,
    nombre: "Traje casual para niños jóvenes con mangas a raya",
    precio: 50,
    categoria: "niños",
    imagen: "/CatalogoRopa/image/Nino/Ropa de niño9.png", // Ruta corregida
  },
  {
    id: 31,
    nombre: "Sudadera con Capucha Gráfica de Los Ángeles para Hombre",
    precio: 35,
    categoria: "hombre",
    imagen: "/CatalogoRopa/image/Hombre/Ropa de hombre11.png", // Ruta corregida
  },
  {
    id: 32,
    nombre: "Falda mini de mujer",
    precio: 10,
    categoria: "mujer",
    imagen: "/CatalogoRopa/image/Mujer/Ropa de Mujer12.png", // Ruta corregida
  },
  {
    id: 33,
    nombre: "Camisa de manga larga",
    precio: 10,
    categoria: "hombre",
    imagen: "/CatalogoRopa/image/Hombre/Ropa de hombre12.png", // Ruta corregida
  },
  {
    id: 34,
    nombre: " Abrigo De Invierno Térmico De Manga Larga",
    precio: 36.5,
    categoria: "mujer",
    imagen: "/CatalogoRopa/image/Mujer/Ropa de Mujer10.png", // Ruta corregida
  },
  {
    id: 35,
    nombre: "2 Juegos de Sudadera con Capucha y Pantalones de Colores Contrastantes Clásicos",
    precio: 35,
    categoria: "niños",
    imagen: "/CatalogoRopa/image/Nino/Ropa de niño10.png", // Ruta corregida
  },
  {
    id: 36,
    nombre: "Conjunto de tres piezas de cuello alto de color liso y corte",
    precio: 18,
    categoria: "mujer",
    imagen: "/CatalogoRopa/image/Nino/Mujer/Ropa de Mujer11.png", // Ruta corregida
  },
  {
    id: 37,
    nombre: "4 piezas de camisetas de manga larga con textura de punto acanalado de color liso para niños",
    precio: 25,
    categoria: "niños",
    imagen: "/CatalogoRopa/image/Nino/Ropa de niño11.png", // Ruta corregida
  },
];

let paginaActual = 1;
const productosPorPagina = 12; // Actualizar a 10 productos por página

let productosFiltrados = productos; // Variable para almacenar los productos filtrados

// Función para obtener productos según la página
function obtenerProductosPorPagina() {
  const inicio = (paginaActual - 1) * productosPorPagina;
  const fin = inicio + productosPorPagina;

  return productosFiltrados.slice(inicio, fin); // Cambiar a productosFiltrados
}

// Función para mostrar productos (ahora acepta un array de productos)
function mostrarProductos(productosParaMostrar) {
  const contenedorTarjetas = document.getElementById("tarjetas-productos");
  contenedorTarjetas.innerHTML = ""; // Limpiar contenido previo

  const productosPagina = obtenerProductosPorPagina(); // Obtener productos filtrados según la página

  productosPagina.forEach((producto) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");

    tarjeta.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}" class="imagen-producto" />
      <h3>${producto.nombre}</h3>
      <p>Precio: $${producto.precio}</p>
      <button onclick="verDetalle(${producto.id})">Ver Detalle</button>
    `;

    contenedorTarjetas.appendChild(tarjeta);
  });

  // Actualizar el número de la página actual
  document.getElementById(
    "pagina-actual"
  ).textContent = `Página ${paginaActual}`;
}

// Función para filtrar productos
function aplicarFiltros() {
  const categoriaSeleccionada = Array.from(
    document.querySelectorAll('input[name="categoria"]:checked')
  ).map((input) => input.value);
  const precioSeleccionado = document.querySelector(
    'input[name="precio"]:checked'
  )?.value;
  const textoBusqueda = document
    .getElementById("buscar-nombre")
    .value.toLowerCase();

  let productosFiltradosTemp = productos; // Crear una copia de la lista original de productos

  // Filtrar por categoría
  if (categoriaSeleccionada.length > 0) {
    productosFiltradosTemp = productosFiltradosTemp.filter((producto) =>
      categoriaSeleccionada.includes(producto.categoria)
    );
  }

  // Filtrar por precio
  if (precioSeleccionado) {
    const [minPrecio, maxPrecio] = precioSeleccionado.split("-").map(Number);
    productosFiltradosTemp = productosFiltradosTemp.filter(
      (producto) => producto.precio >= minPrecio && producto.precio <= maxPrecio
    );
  }

  // Filtrar por nombre
  if (textoBusqueda) {
    productosFiltradosTemp = productosFiltradosTemp.filter((producto) =>
      producto.nombre.toLowerCase().includes(textoBusqueda)
    );
  }

  // Actualizar los productos filtrados
  productosFiltrados = productosFiltradosTemp;

  // Reiniciar la paginación y mostrar productos filtrados
  paginaActual = 1;
  mostrarProductos(productosFiltrados); // Usar productos filtrados
}

// Función para limpiar filtros
document.getElementById("limpiar-filtros").addEventListener("click", () => {
  // Limpiar los filtros
  document.getElementById("buscar-nombre").value = "";
  document
    .querySelectorAll('input[name="categoria"]')
    .forEach((input) => (input.checked = false));
  document
    .querySelectorAll('input[name="precio"]')
    .forEach((input) => (input.checked = false));

  // Volver a mostrar todos los productos
  productosFiltrados = productos; // Resetear productos filtrados
  mostrarProductos(productos);
});

// Función para manejar los cambios de página
document.getElementById("pagina-anterior").addEventListener("click", () => {
  if (paginaActual > 1) {
    paginaActual--;
    mostrarProductos(productosFiltrados); // Usar productos filtrados al cambiar de página
  }
});

document.getElementById("pagina-siguiente").addEventListener("click", () => {
  if (paginaActual * productosPorPagina < productosFiltrados.length) {
    paginaActual++;
    mostrarProductos(productosFiltrados); // Usar productos filtrados al cambiar de página
  }
});

// Añadir event listeners a los filtros
document
  .getElementById("buscar-nombre")
  .addEventListener("input", aplicarFiltros);

document.querySelectorAll('input[name="categoria"]').forEach((input) => {
  input.addEventListener("change", aplicarFiltros);
});

document.querySelectorAll('input[name="precio"]').forEach((input) => {
  input.addEventListener("change", aplicarFiltros);
});

mostrarProductos(productos); // Inicialmente mostrar todos los productos
