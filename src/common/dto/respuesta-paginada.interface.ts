export interface RespuestaPaginada<T> {
  datos: T[];
  total: number;
  pagina: number;
  limite: number;
  paginas: number;
}
