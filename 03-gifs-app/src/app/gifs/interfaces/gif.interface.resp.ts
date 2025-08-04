
// con esta interface definimos la estructura de un GIF utilizando
// solo los campos que necesitamos para nuestra aplicación
// esto es útil para evitar errores si no se proporciona un valor
// en caso de que no se proporcione un valor, el componente no se renderizará correctamente
// y se mostrará un error en la consola
// esto es una buena práctica para asegurarnos de que el componente se use correctamente
// y evitar errores en tiempo de ejecución
export interface Gifs{
  id: string;
  title: string;
  url: string;
}
