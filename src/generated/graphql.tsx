import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  DateTimeTz: any;
  Upload: any;
};

export type Asiento = {
  __typename?: 'Asiento';
  asiento?: Maybe<Scalars['String']>;
  asientoId?: Maybe<Scalars['ID']>;
  code?: Maybe<Scalars['String']>;
  codigo?: Maybe<Scalars['String']>;
  eventoId?: Maybe<Scalars['Int']>;
  feriaId?: Maybe<Scalars['Int']>;
  reservado?: Maybe<Scalars['String']>;
  tendido?: Maybe<Scalars['String']>;
};

export type AsignacionEntrada = {
  __typename?: 'AsignacionEntrada';
  Evento?: Maybe<Evento>;
  apellidos?: Maybe<Scalars['String']>;
  asientoId?: Maybe<Scalars['ID']>;
  codigo?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  eventoId?: Maybe<Scalars['Int']>;
  fecha?: Maybe<Scalars['Date']>;
  hora?: Maybe<Scalars['String']>;
  nombres?: Maybe<Scalars['String']>;
  numDocumento?: Maybe<Scalars['String']>;
  reservado?: Maybe<Scalars['String']>;
  tendido?: Maybe<Scalars['String']>;
  tipoDocumento?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

export type AsignacionEntradaInput = {
  apellidos?: InputMaybe<Scalars['String']>;
  asientoId?: InputMaybe<Scalars['ID']>;
  nombres?: InputMaybe<Scalars['String']>;
  numDocumento?: InputMaybe<Scalars['String']>;
  tipoDocumento?: InputMaybe<Scalars['String']>;
};

export type AsignacionEntradaVentaInput = {
  apellidos?: InputMaybe<Scalars['String']>;
  asientoId?: InputMaybe<Scalars['ID']>;
  code?: InputMaybe<Scalars['String']>;
  nombres?: InputMaybe<Scalars['String']>;
  numDocumento?: InputMaybe<Scalars['String']>;
  tipoDocumento?: InputMaybe<Scalars['String']>;
};

export type Asistente = {
  __typename?: 'Asistente';
  apellidos?: Maybe<Scalars['String']>;
  asiento?: Maybe<Scalars['String']>;
  asientoId?: Maybe<Scalars['ID']>;
  codigo?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  nombres?: Maybe<Scalars['String']>;
  numDocumento?: Maybe<Scalars['String']>;
  tipoDocumento?: Maybe<Scalars['String']>;
};

export type Bloque = {
  __typename?: 'Bloque';
  asiento?: Maybe<Scalars['String']>;
  bloqueId?: Maybe<Scalars['ID']>;
  codigo?: Maybe<Scalars['String']>;
  reservado?: Maybe<Scalars['String']>;
  tendido?: Maybe<Scalars['String']>;
};

export type BloqueoAsientoInput = {
  asiento?: InputMaybe<Scalars['String']>;
  codigo?: InputMaybe<Scalars['String']>;
  eventoId?: InputMaybe<Scalars['Int']>;
  feriaId?: InputMaybe<Scalars['Int']>;
  reservado?: InputMaybe<Scalars['String']>;
  tendido?: InputMaybe<Scalars['String']>;
};

export type Butaca = {
  __typename?: 'Butaca';
  butacaId?: Maybe<Scalars['ID']>;
  cantidad?: Maybe<Scalars['Int']>;
  codigo?: Maybe<Scalars['String']>;
  precio?: Maybe<Scalars['Float']>;
  tendido?: Maybe<Scalars['String']>;
};

export type ButacaEvento = {
  __typename?: 'ButacaEvento';
  butacaEventoId?: Maybe<Scalars['Int']>;
  cantidad?: Maybe<Scalars['Int']>;
  codigo?: Maybe<Scalars['String']>;
  eventoId?: Maybe<Scalars['Int']>;
  precio?: Maybe<Scalars['Float']>;
  tendido?: Maybe<Scalars['String']>;
};

export type ButacaEventoInput = {
  butacaEventoId?: InputMaybe<Scalars['Int']>;
  eventoId?: InputMaybe<Scalars['Int']>;
  precio?: InputMaybe<Scalars['Float']>;
};

export type ButacaInput = {
  butacaId?: InputMaybe<Scalars['ID']>;
  precio?: InputMaybe<Scalars['Float']>;
};

export type DetallePedido = {
  __typename?: 'DetallePedido';
  Evento?: Maybe<Evento>;
  asiento?: Maybe<Scalars['String']>;
  codigo?: Maybe<Scalars['String']>;
  detallePedidoId?: Maybe<Scalars['ID']>;
  eventoId?: Maybe<Scalars['Int']>;
  feriaId?: Maybe<Scalars['Int']>;
  pedidoId?: Maybe<Scalars['Int']>;
  precio?: Maybe<Scalars['Float']>;
  tendido?: Maybe<Scalars['String']>;
};

export type DetallePedidoInput = {
  asiento?: InputMaybe<Scalars['String']>;
  codigo?: InputMaybe<Scalars['String']>;
  eventoId?: InputMaybe<Scalars['Int']>;
  feriaId?: InputMaybe<Scalars['Int']>;
  precio?: InputMaybe<Scalars['Float']>;
  reservado?: InputMaybe<Scalars['String']>;
  tendido?: InputMaybe<Scalars['String']>;
};

export type DetalleVenta = {
  __typename?: 'DetalleVenta';
  Evento?: Maybe<Evento>;
  asiento?: Maybe<Scalars['String']>;
  codigo?: Maybe<Scalars['String']>;
  detalleVentaId?: Maybe<Scalars['ID']>;
  eventoId?: Maybe<Scalars['Int']>;
  feriaId?: Maybe<Scalars['Int']>;
  precio?: Maybe<Scalars['Float']>;
  tendido?: Maybe<Scalars['String']>;
  ventaId?: Maybe<Scalars['Int']>;
};

export type DetalleVentaInput = {
  asiento?: InputMaybe<Scalars['String']>;
  codigo?: InputMaybe<Scalars['String']>;
  eventoId?: InputMaybe<Scalars['Int']>;
  feriaId?: InputMaybe<Scalars['Int']>;
  precio?: InputMaybe<Scalars['Float']>;
  reservado?: InputMaybe<Scalars['String']>;
  tendido?: InputMaybe<Scalars['String']>;
};

export type Evento = {
  __typename?: 'Evento';
  Feria?: Maybe<Feria>;
  descripcionCorta?: Maybe<Scalars['String']>;
  descripcionLarga?: Maybe<Scalars['String']>;
  direccion?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  eventoId?: Maybe<Scalars['ID']>;
  fecha?: Maybe<Scalars['Date']>;
  fechaFinal?: Maybe<Scalars['Date']>;
  fechaInicial?: Maybe<Scalars['Date']>;
  feriaId?: Maybe<Scalars['Int']>;
  hora?: Maybe<Scalars['String']>;
  horaFinal?: Maybe<Scalars['String']>;
  horaInicial?: Maybe<Scalars['String']>;
  imagenPrincipal?: Maybe<Imagen>;
  slug?: Maybe<Scalars['String']>;
  terminosCondiciones?: Maybe<Scalars['String']>;
  titulo?: Maybe<Scalars['String']>;
  ubicacion?: Maybe<Scalars['String']>;
};

export type EventoInput = {
  descripcionCorta?: InputMaybe<Scalars['String']>;
  descripcionLarga?: InputMaybe<Scalars['String']>;
  direccion?: InputMaybe<Scalars['String']>;
  eventoId?: InputMaybe<Scalars['ID']>;
  fecha?: InputMaybe<Scalars['Date']>;
  fechaFinal?: InputMaybe<Scalars['Date']>;
  fechaInicial?: InputMaybe<Scalars['Date']>;
  hora?: InputMaybe<Scalars['String']>;
  horaFinal?: InputMaybe<Scalars['String']>;
  horaInicial?: InputMaybe<Scalars['String']>;
  imagenPrincipal?: InputMaybe<Scalars['Int']>;
  terminosCondiciones?: InputMaybe<Scalars['String']>;
  titulo?: InputMaybe<Scalars['String']>;
  ubicacion?: InputMaybe<Scalars['String']>;
};

export type Feria = {
  __typename?: 'Feria';
  descripcionCorta?: Maybe<Scalars['String']>;
  descripcionLarga?: Maybe<Scalars['String']>;
  descuento?: Maybe<Scalars['Int']>;
  fecha?: Maybe<Scalars['Date']>;
  fechaFinal?: Maybe<Scalars['Date']>;
  fechaInicial?: Maybe<Scalars['Date']>;
  feriaId?: Maybe<Scalars['ID']>;
  hora?: Maybe<Scalars['String']>;
  horaFinal?: Maybe<Scalars['String']>;
  horaInicial?: Maybe<Scalars['String']>;
  imagenPrincipal?: Maybe<Imagen>;
  imagenSecundaria?: Maybe<Imagen>;
  slug?: Maybe<Scalars['String']>;
  terminosCondiciones?: Maybe<Scalars['String']>;
  tipoColiseo?: Maybe<Scalars['String']>;
  titulo?: Maybe<Scalars['String']>;
};

export type FeriaInput = {
  descripcionCorta?: InputMaybe<Scalars['String']>;
  descripcionLarga?: InputMaybe<Scalars['String']>;
  descuento?: InputMaybe<Scalars['Int']>;
  fecha?: InputMaybe<Scalars['Date']>;
  fechaFinal?: InputMaybe<Scalars['Date']>;
  fechaInicial?: InputMaybe<Scalars['Date']>;
  feriaId?: InputMaybe<Scalars['ID']>;
  hora?: InputMaybe<Scalars['String']>;
  horaFinal?: InputMaybe<Scalars['String']>;
  horaInicial?: InputMaybe<Scalars['String']>;
  imagenPrincipal?: InputMaybe<Scalars['Int']>;
  imagenSecundaria?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
  terminosCondiciones?: InputMaybe<Scalars['String']>;
  tipoColiseo?: InputMaybe<Scalars['String']>;
  titulo?: InputMaybe<Scalars['String']>;
};

export type GetAllAsientos = {
  __typename?: 'GetAllAsientos';
  data?: Maybe<Array<Maybe<Asiento>>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllButacaEvento = {
  __typename?: 'GetAllButacaEvento';
  data?: Maybe<Array<Maybe<ButacaEvento>>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllButacas = {
  __typename?: 'GetAllButacas';
  data?: Maybe<Array<Maybe<Butaca>>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllEventos = {
  __typename?: 'GetAllEventos';
  data?: Maybe<Array<Evento>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllFerias = {
  __typename?: 'GetAllFerias';
  data?: Maybe<Array<Feria>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllImagenes = {
  __typename?: 'GetAllImagenes';
  data?: Maybe<Array<Imagen>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllPedidos = {
  __typename?: 'GetAllPedidos';
  data?: Maybe<Array<Pedido>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllSuscriptores = {
  __typename?: 'GetAllSuscriptores';
  data?: Maybe<Array<Maybe<Suscriptor>>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllVendedoras = {
  __typename?: 'GetAllVendedoras';
  data?: Maybe<Array<Maybe<Vendedora>>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllVentas = {
  __typename?: 'GetAllVentas';
  data?: Maybe<Array<Venta>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type Imagen = {
  __typename?: 'Imagen';
  id?: Maybe<Scalars['ID']>;
  titulo?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type LoginInput = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  AsignarPrecioButacaEvento: ButacaEvento;
  ConsultEmail?: Maybe<Scalars['String']>;
  CreateBloqueoAsiento?: Maybe<Scalars['String']>;
  CreateBloqueoAsientoAbono?: Maybe<Scalars['String']>;
  CreateEvento?: Maybe<Evento>;
  CreateFeria?: Maybe<Feria>;
  CreateImagen: Scalars['String'];
  CreatePedido: Pedido;
  CreatePedidoAbonado: Pedido;
  CreateShoppingCart?: Maybe<Scalars['String']>;
  CreateShoppingCartAdmin?: Maybe<Scalars['String']>;
  CreateSuscriptor?: Maybe<Suscriptor>;
  CreateUsuario: User;
  CreateVendedora?: Maybe<Vendedora>;
  CreateVenta: Venta;
  CreateVentaAbonado: Venta;
  DeleteAsientoBloqueado?: Maybe<Scalars['String']>;
  DeleteEvento?: Maybe<Scalars['String']>;
  DeleteImagen: Scalars['String'];
  DeleteVenta?: Maybe<Scalars['String']>;
  Login?: Maybe<User>;
  RecoverPassword?: Maybe<Scalars['String']>;
  RestartAsientos?: Maybe<Scalars['String']>;
  UpdateAsignacionEntrada?: Maybe<AsignacionEntrada>;
  UpdateAsignacionEntradaVenta?: Maybe<AsignacionEntrada>;
  UpdateAsistencia?: Maybe<Asistente>;
  UpdateEstadoEvento?: Maybe<Evento>;
  UpdateEstadoVendedora?: Maybe<Vendedora>;
  UpdateEvento?: Maybe<Evento>;
  UpdateFeria?: Maybe<Feria>;
  UpdateImagen: Imagen;
  UpdatePassword: User;
  UpdatePrecio: Butaca;
  UpdatePrecioReferencial?: Maybe<Referencial>;
  UpdateUsuario: User;
  UpdateVendedora?: Maybe<Vendedora>;
  ValidacionEntrada?: Maybe<Asistente>;
};


export type MutationAsignarPrecioButacaEventoArgs = {
  input?: InputMaybe<ButacaEventoInput>;
};


export type MutationConsultEmailArgs = {
  email: Scalars['String'];
};


export type MutationCreateBloqueoAsientoArgs = {
  input?: InputMaybe<Array<BloqueoAsientoInput>>;
};


export type MutationCreateBloqueoAsientoAbonoArgs = {
  input?: InputMaybe<Array<BloqueoAsientoInput>>;
};


export type MutationCreateEventoArgs = {
  input: EventoInput;
};


export type MutationCreateFeriaArgs = {
  input: FeriaInput;
};


export type MutationCreateImagenArgs = {
  imagen: Scalars['Upload'];
};


export type MutationCreatePedidoArgs = {
  input1: PedidoInput;
  input2?: InputMaybe<Array<DetallePedidoInput>>;
  input3?: InputMaybe<UserInput>;
};


export type MutationCreatePedidoAbonadoArgs = {
  input1: PedidoInput;
  input2?: InputMaybe<Array<DetallePedidoInput>>;
  input3?: InputMaybe<UserInput>;
};


export type MutationCreateShoppingCartArgs = {
  input: ShoppingCartInput;
};


export type MutationCreateShoppingCartAdminArgs = {
  input: ShoppingCartAdminInput;
};


export type MutationCreateSuscriptorArgs = {
  input: SuscriptorInput;
};


export type MutationCreateUsuarioArgs = {
  input: UserInput;
};


export type MutationCreateVendedoraArgs = {
  input: VendedoraInput;
};


export type MutationCreateVentaArgs = {
  input1: VentaInput;
  input2?: InputMaybe<Array<DetalleVentaInput>>;
};


export type MutationCreateVentaAbonadoArgs = {
  input1: VentaInput;
  input2?: InputMaybe<Array<DetalleVentaInput>>;
};


export type MutationDeleteAsientoBloqueadoArgs = {
  asientoId: Scalars['Int'];
};


export type MutationDeleteEventoArgs = {
  eventoId: Scalars['Int'];
};


export type MutationDeleteImagenArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteVentaArgs = {
  ventaId: Scalars['Int'];
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationRecoverPasswordArgs = {
  email?: InputMaybe<Scalars['String']>;
};


export type MutationRestartAsientosArgs = {
  feriaId: Scalars['Int'];
};


export type MutationUpdateAsignacionEntradaArgs = {
  input: AsignacionEntradaInput;
};


export type MutationUpdateAsignacionEntradaVentaArgs = {
  input: AsignacionEntradaVentaInput;
};


export type MutationUpdateAsistenciaArgs = {
  input: UpdateAsistenciaInput;
};


export type MutationUpdateEstadoEventoArgs = {
  input: UpdateEstadoEventoInput;
};


export type MutationUpdateEstadoVendedoraArgs = {
  input: UpdateEstadoVendedoraInput;
};


export type MutationUpdateEventoArgs = {
  input: EventoInput;
};


export type MutationUpdateFeriaArgs = {
  input: FeriaInput;
};


export type MutationUpdateImagenArgs = {
  id?: InputMaybe<Scalars['Int']>;
  titulo?: InputMaybe<Scalars['String']>;
};


export type MutationUpdatePasswordArgs = {
  input?: InputMaybe<UpdatePasswordInput>;
};


export type MutationUpdatePrecioArgs = {
  input?: InputMaybe<ButacaInput>;
};


export type MutationUpdatePrecioReferencialArgs = {
  input: ReferencialInput;
};


export type MutationUpdateUsuarioArgs = {
  input?: InputMaybe<UserInput>;
};


export type MutationUpdateVendedoraArgs = {
  input: VendedoraInput;
};


export type MutationValidacionEntradaArgs = {
  constante?: InputMaybe<Scalars['String']>;
  eventoId?: InputMaybe<Scalars['Int']>;
  numDocumento?: InputMaybe<Scalars['String']>;
  tipoDocumento?: InputMaybe<Scalars['String']>;
};

/** Allows ordering a list of records. */
export type OrderByClause = {
  /** The column that is used for ordering. */
  field: Scalars['String'];
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Pagination information about the corresponding list of items. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** Count of nodes in current request. */
  count?: Maybe<Scalars['Int']>;
  /** Current page of request. */
  currentPage?: Maybe<Scalars['Int']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Last page in connection. */
  lastPage?: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** Total number of node in connection. */
  total?: Maybe<Scalars['Int']>;
};

/** Pagination information about the corresponding list of items. */
export type PaginatorInfo = {
  __typename?: 'PaginatorInfo';
  /** Total count of available items in the page. */
  count: Scalars['Int'];
  /** Current pagination page. */
  currentPage: Scalars['Int'];
  /** Index of first item in the current page. */
  firstItem?: Maybe<Scalars['Int']>;
  /** If collection has more pages. */
  hasMorePages: Scalars['Boolean'];
  /** Index of last item in the current page. */
  lastItem?: Maybe<Scalars['Int']>;
  /** Last page number of the collection. */
  lastPage: Scalars['Int'];
  /** Number of items per page in the collection. */
  perPage: Scalars['Int'];
  /** Total items available in the collection. */
  total: Scalars['Int'];
};

export type Pedido = {
  __typename?: 'Pedido';
  DetallePedido?: Maybe<Array<DetallePedido>>;
  Usuario?: Maybe<User>;
  email?: Maybe<Scalars['String']>;
  fechaPedido?: Maybe<Scalars['Date']>;
  numeroComprobante?: Maybe<Scalars['String']>;
  pedidoId?: Maybe<Scalars['ID']>;
  precioTotal?: Maybe<Scalars['Float']>;
  razonSocial?: Maybe<Scalars['String']>;
  tipoComprobante?: Maybe<Scalars['String']>;
  transaccionId?: Maybe<Scalars['Float']>;
  usuarioId?: Maybe<Scalars['Int']>;
};

export type PedidoInput = {
  fechaPedido?: InputMaybe<Scalars['Date']>;
  numeroComprobante?: InputMaybe<Scalars['String']>;
  pedidoId?: InputMaybe<Scalars['ID']>;
  precioTotal?: InputMaybe<Scalars['Float']>;
  razonSocial?: InputMaybe<Scalars['String']>;
  tipoComprobante?: InputMaybe<Scalars['String']>;
  transaccionId?: InputMaybe<Scalars['Float']>;
};

export type Query = {
  __typename?: 'Query';
  GetAllAsientos?: Maybe<Array<Maybe<Asiento>>>;
  GetAllAsientosAbonados?: Maybe<Array<Maybe<Asiento>>>;
  GetAllAsientosBloqueados?: Maybe<Array<Maybe<AsignacionEntrada>>>;
  GetAllBloques?: Maybe<Array<Maybe<Bloque>>>;
  GetAllButacaEvento?: Maybe<GetAllButacaEvento>;
  GetAllButacas?: Maybe<GetAllButacas>;
  GetAllEntradasUsuario?: Maybe<Array<Maybe<AsignacionEntrada>>>;
  GetAllEventos?: Maybe<GetAllEventos>;
  GetAllEventosUsuario?: Maybe<GetAllEventos>;
  GetAllFerias?: Maybe<GetAllFerias>;
  GetAllImagenes?: Maybe<GetAllImagenes>;
  GetAllPedidos?: Maybe<GetAllPedidos>;
  GetAllPrecioReferencial?: Maybe<Array<Maybe<Referencial>>>;
  GetAllSuscriptores?: Maybe<GetAllSuscriptores>;
  GetAllVendedoras?: Maybe<GetAllVendedoras>;
  GetAllVentas?: Maybe<GetAllVentas>;
  GetDetalleAsientoVenta?: Maybe<AsignacionEntrada>;
  GetEventoSlug?: Maybe<Evento>;
  GetFeriaSlug?: Maybe<Feria>;
  GetPedidoId?: Maybe<Pedido>;
  GetReporteExcel?: Maybe<Scalars['String']>;
  GetVentaId?: Maybe<Venta>;
  ReporteAsientoVendedora?: Maybe<Scalars['String']>;
  ReporteGetAllPedidos?: Maybe<Scalars['String']>;
  ReporteGetAllVentas?: Maybe<Scalars['String']>;
};


export type QueryGetAllAsientosArgs = {
  eventoId?: InputMaybe<Scalars['Int']>;
  feriaId?: InputMaybe<Scalars['Int']>;
  tendido?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllAsientosAbonadosArgs = {
  feriaId?: InputMaybe<Scalars['Int']>;
  tendido?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllBloquesArgs = {
  feriaId?: InputMaybe<Scalars['Int']>;
  tendido?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllButacaEventoArgs = {
  eventoId?: InputMaybe<Scalars['Int']>;
  tendido?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllButacasArgs = {
  feriaId?: InputMaybe<Scalars['Int']>;
  tendido?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllEntradasUsuarioArgs = {
  eventoId?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllEventosArgs = {
  estado?: InputMaybe<Scalars['String']>;
  feriaSlug?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllImagenesArgs = {
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllPedidosArgs = {
  email?: InputMaybe<Scalars['String']>;
  fechaFinal?: InputMaybe<Scalars['String']>;
  fechaInicial?: InputMaybe<Scalars['String']>;
  feriaId?: InputMaybe<Scalars['Int']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
  razonSocial?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllSuscriptoresArgs = {
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllVendedorasArgs = {
  estado?: InputMaybe<Scalars['String']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllVentasArgs = {
  fechaFinal?: InputMaybe<Scalars['String']>;
  fechaInicial?: InputMaybe<Scalars['String']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
  tipoVenta?: InputMaybe<Scalars['String']>;
  vendedorId?: InputMaybe<Scalars['Int']>;
};


export type QueryGetDetalleAsientoVentaArgs = {
  code?: InputMaybe<Scalars['String']>;
};


export type QueryGetEventoSlugArgs = {
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryGetFeriaSlugArgs = {
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryGetPedidoIdArgs = {
  pedidoId?: InputMaybe<Scalars['Int']>;
};


export type QueryGetReporteExcelArgs = {
  pedidoId: Scalars['Int'];
};


export type QueryGetVentaIdArgs = {
  ventaId?: InputMaybe<Scalars['Int']>;
};


export type QueryReporteAsientoVendedoraArgs = {
  code?: InputMaybe<Scalars['String']>;
};


export type QueryReporteGetAllPedidosArgs = {
  email?: InputMaybe<Scalars['String']>;
  fechaFinal?: InputMaybe<Scalars['String']>;
  fechaInicial?: InputMaybe<Scalars['String']>;
  razonSocial?: InputMaybe<Scalars['String']>;
};


export type QueryReporteGetAllVentasArgs = {
  fechaFinal?: InputMaybe<Scalars['String']>;
  fechaInicial?: InputMaybe<Scalars['String']>;
  tipoVenta?: InputMaybe<Scalars['String']>;
  vendedorId?: InputMaybe<Scalars['Int']>;
};

export type Referencial = {
  __typename?: 'Referencial';
  precio?: Maybe<Scalars['Float']>;
  referenciaId?: Maybe<Scalars['ID']>;
  tendido?: Maybe<Scalars['String']>;
  titulo?: Maybe<Scalars['String']>;
};

export type ReferencialInput = {
  precio?: InputMaybe<Scalars['Float']>;
  referenciaId?: InputMaybe<Scalars['ID']>;
};

export type ShoppingCart = {
  __typename?: 'ShoppingCart';
  datetimeOfExpiry: Scalars['String'];
  id: Scalars['ID'];
  userId: Scalars['ID'];
};

export type ShoppingCartAdminInput = {
  asiento: Scalars['String'];
  codigo: Scalars['String'];
  eventoId: Scalars['ID'];
  userId: Scalars['ID'];
};

export type ShoppingCartInput = {
  asiento: Scalars['String'];
  codigo: Scalars['String'];
  eventoId: Scalars['ID'];
};

/** The available directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  Asc = 'ASC',
  /** Sort records in descending order. */
  Desc = 'DESC'
}

export type Suscriptor = {
  __typename?: 'Suscriptor';
  email?: Maybe<Scalars['String']>;
  nombres?: Maybe<Scalars['String']>;
  suscriptorId?: Maybe<Scalars['ID']>;
};

export type SuscriptorInput = {
  email?: InputMaybe<Scalars['String']>;
  nombres?: InputMaybe<Scalars['String']>;
};

/** Specify if you want to include or exclude trashed results from a query. */
export enum Trashed {
  /** Only return trashed results. */
  Only = 'ONLY',
  /** Return both trashed and non-trashed results. */
  With = 'WITH',
  /** Only return non-trashed results. */
  Without = 'WITHOUT'
}

export type UpdateAsistenciaInput = {
  asientoId?: InputMaybe<Scalars['ID']>;
  constante?: InputMaybe<Scalars['String']>;
  numDocumento?: InputMaybe<Scalars['String']>;
  tipoDocumento?: InputMaybe<Scalars['String']>;
};

export type UpdateEstadoEventoInput = {
  estado?: InputMaybe<Scalars['String']>;
  eventoId?: InputMaybe<Scalars['ID']>;
};

export type UpdateEstadoVendedoraInput = {
  estado?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type UpdatePasswordInput = {
  passwordAntiguo?: InputMaybe<Scalars['String']>;
  passwordNuevo?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  apellidos?: Maybe<Scalars['String']>;
  apiToken?: Maybe<Scalars['String']>;
  celular?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  nombres?: Maybe<Scalars['String']>;
  numeroDocumento?: Maybe<Scalars['String']>;
  tipoDocumento?: Maybe<Scalars['String']>;
  tipoUsuario?: Maybe<Scalars['Int']>;
};

export type UserInput = {
  apellidos?: InputMaybe<Scalars['String']>;
  celular?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  nombres?: InputMaybe<Scalars['String']>;
  numeroDocumento?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  tipoDocumento?: InputMaybe<Scalars['String']>;
};

export type Vendedora = {
  __typename?: 'Vendedora';
  apellidos?: Maybe<Scalars['String']>;
  celular?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  nombres?: Maybe<Scalars['String']>;
  numeroDocumento?: Maybe<Scalars['String']>;
  tipoDocumento?: Maybe<Scalars['String']>;
};

export type VendedoraInput = {
  apellidos?: InputMaybe<Scalars['String']>;
  celular?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  nombres?: InputMaybe<Scalars['String']>;
  numeroDocumento?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  tipoDocumento?: InputMaybe<Scalars['String']>;
};

export type Venta = {
  __typename?: 'Venta';
  DetalleVenta?: Maybe<Array<DetalleVenta>>;
  Usuario?: Maybe<User>;
  celular?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  fechaVenta?: Maybe<Scalars['Date']>;
  numeroDocumento?: Maybe<Scalars['String']>;
  precioTotal?: Maybe<Scalars['Float']>;
  razonSocial?: Maybe<Scalars['String']>;
  tipoComprobante?: Maybe<Scalars['String']>;
  tipoDocumento?: Maybe<Scalars['String']>;
  tipoVenta?: Maybe<Scalars['String']>;
  usuarioId?: Maybe<Scalars['Int']>;
  ventaId?: Maybe<Scalars['ID']>;
};

export type VentaInput = {
  celular?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  fechaVenta?: InputMaybe<Scalars['Date']>;
  numeroDocumento?: InputMaybe<Scalars['String']>;
  precioTotal?: InputMaybe<Scalars['Float']>;
  razonSocial?: InputMaybe<Scalars['String']>;
  tipoComprobante?: InputMaybe<Scalars['String']>;
  tipoDocumento?: InputMaybe<Scalars['String']>;
  tipoVenta?: InputMaybe<Scalars['String']>;
  transaccionId?: InputMaybe<Scalars['Float']>;
  ventaId?: InputMaybe<Scalars['ID']>;
};

export type CreateUsuarioMutationVariables = Exact<{
  input: UserInput;
}>;


export type CreateUsuarioMutation = { __typename?: 'Mutation', CreateUsuario: { __typename?: 'User', id?: string | null, tipoUsuario?: number | null, tipoDocumento?: string | null, numeroDocumento?: string | null, nombres?: string | null, apellidos?: string | null, celular?: string | null, email?: string | null, estado?: string | null, apiToken?: string | null } };

export type RecoverPasswordMutationVariables = Exact<{
  email?: InputMaybe<Scalars['String']>;
}>;


export type RecoverPasswordMutation = { __typename?: 'Mutation', RecoverPassword?: string | null };

export type UpdatePasswordMutationVariables = Exact<{
  input?: InputMaybe<UpdatePasswordInput>;
}>;


export type UpdatePasswordMutation = { __typename?: 'Mutation', UpdatePassword: { __typename?: 'User', id?: string | null, tipoUsuario?: number | null, tipoDocumento?: string | null, numeroDocumento?: string | null, nombres?: string | null, apellidos?: string | null, celular?: string | null, email?: string | null, estado?: string | null, apiToken?: string | null } };

export type CreateShoppingCartMutationVariables = Exact<{
  input: ShoppingCartInput;
}>;


export type CreateShoppingCartMutation = { __typename?: 'Mutation', CreateShoppingCart?: string | null };

export type UpdateUsuarioMutationVariables = Exact<{
  input?: InputMaybe<UserInput>;
}>;


export type UpdateUsuarioMutation = { __typename?: 'Mutation', UpdateUsuario: { __typename?: 'User', id?: string | null, tipoUsuario?: number | null, tipoDocumento?: string | null, numeroDocumento?: string | null, nombres?: string | null, apellidos?: string | null, celular?: string | null, email?: string | null, estado?: string | null, apiToken?: string | null } };

export type GetAllFeriasQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllFeriasQuery = { __typename?: 'Query', GetAllFerias?: { __typename?: 'GetAllFerias', numeroTotal?: number | null, data?: Array<{ __typename?: 'Feria', feriaId?: string | null, titulo?: string | null, slug?: string | null, descripcionCorta?: string | null, descripcionLarga?: string | null, terminosCondiciones?: string | null, fecha?: any | null, hora?: string | null, fechaInicial?: any | null, horaInicial?: string | null, fechaFinal?: any | null, horaFinal?: string | null, descuento?: number | null, imagenPrincipal?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, url?: string | null } | null, imagenSecundaria?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, url?: string | null } | null }> | null } | null };

export type GetFeriaSlugQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type GetFeriaSlugQuery = { __typename?: 'Query', GetFeriaSlug?: { __typename?: 'Feria', feriaId?: string | null, titulo?: string | null, slug?: string | null, descripcionCorta?: string | null, descripcionLarga?: string | null, terminosCondiciones?: string | null, fecha?: any | null, hora?: string | null, fechaInicial?: any | null, horaInicial?: string | null, fechaFinal?: any | null, horaFinal?: string | null, descuento?: number | null, imagenPrincipal?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, url?: string | null } | null, imagenSecundaria?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, url?: string | null } | null } | null };


export const CreateUsuarioDocument = gql`
    mutation CreateUsuario($input: UserInput!) {
  CreateUsuario(input: $input) {
    id
    tipoUsuario
    tipoDocumento
    numeroDocumento
    nombres
    apellidos
    celular
    email
    estado
    apiToken
  }
}
    `;
export type CreateUsuarioMutationFn = Apollo.MutationFunction<CreateUsuarioMutation, CreateUsuarioMutationVariables>;

/**
 * __useCreateUsuarioMutation__
 *
 * To run a mutation, you first call `useCreateUsuarioMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUsuarioMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUsuarioMutation, { data, loading, error }] = useCreateUsuarioMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUsuarioMutation(baseOptions?: Apollo.MutationHookOptions<CreateUsuarioMutation, CreateUsuarioMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUsuarioMutation, CreateUsuarioMutationVariables>(CreateUsuarioDocument, options);
      }
export type CreateUsuarioMutationHookResult = ReturnType<typeof useCreateUsuarioMutation>;
export type CreateUsuarioMutationResult = Apollo.MutationResult<CreateUsuarioMutation>;
export type CreateUsuarioMutationOptions = Apollo.BaseMutationOptions<CreateUsuarioMutation, CreateUsuarioMutationVariables>;
export const RecoverPasswordDocument = gql`
    mutation RecoverPassword($email: String) {
  RecoverPassword(email: $email)
}
    `;
export type RecoverPasswordMutationFn = Apollo.MutationFunction<RecoverPasswordMutation, RecoverPasswordMutationVariables>;

/**
 * __useRecoverPasswordMutation__
 *
 * To run a mutation, you first call `useRecoverPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRecoverPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [recoverPasswordMutation, { data, loading, error }] = useRecoverPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useRecoverPasswordMutation(baseOptions?: Apollo.MutationHookOptions<RecoverPasswordMutation, RecoverPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RecoverPasswordMutation, RecoverPasswordMutationVariables>(RecoverPasswordDocument, options);
      }
export type RecoverPasswordMutationHookResult = ReturnType<typeof useRecoverPasswordMutation>;
export type RecoverPasswordMutationResult = Apollo.MutationResult<RecoverPasswordMutation>;
export type RecoverPasswordMutationOptions = Apollo.BaseMutationOptions<RecoverPasswordMutation, RecoverPasswordMutationVariables>;
export const UpdatePasswordDocument = gql`
    mutation UpdatePassword($input: UpdatePasswordInput) {
  UpdatePassword(input: $input) {
    id
    tipoUsuario
    tipoDocumento
    numeroDocumento
    nombres
    apellidos
    celular
    email
    estado
    apiToken
  }
}
    `;
export type UpdatePasswordMutationFn = Apollo.MutationFunction<UpdatePasswordMutation, UpdatePasswordMutationVariables>;

/**
 * __useUpdatePasswordMutation__
 *
 * To run a mutation, you first call `useUpdatePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePasswordMutation, { data, loading, error }] = useUpdatePasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePasswordMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePasswordMutation, UpdatePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePasswordMutation, UpdatePasswordMutationVariables>(UpdatePasswordDocument, options);
      }
export type UpdatePasswordMutationHookResult = ReturnType<typeof useUpdatePasswordMutation>;
export type UpdatePasswordMutationResult = Apollo.MutationResult<UpdatePasswordMutation>;
export type UpdatePasswordMutationOptions = Apollo.BaseMutationOptions<UpdatePasswordMutation, UpdatePasswordMutationVariables>;
export const CreateShoppingCartDocument = gql`
    mutation CreateShoppingCart($input: ShoppingCartInput!) {
  CreateShoppingCart(input: $input)
}
    `;
export type CreateShoppingCartMutationFn = Apollo.MutationFunction<CreateShoppingCartMutation, CreateShoppingCartMutationVariables>;

/**
 * __useCreateShoppingCartMutation__
 *
 * To run a mutation, you first call `useCreateShoppingCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateShoppingCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createShoppingCartMutation, { data, loading, error }] = useCreateShoppingCartMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateShoppingCartMutation(baseOptions?: Apollo.MutationHookOptions<CreateShoppingCartMutation, CreateShoppingCartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateShoppingCartMutation, CreateShoppingCartMutationVariables>(CreateShoppingCartDocument, options);
      }
export type CreateShoppingCartMutationHookResult = ReturnType<typeof useCreateShoppingCartMutation>;
export type CreateShoppingCartMutationResult = Apollo.MutationResult<CreateShoppingCartMutation>;
export type CreateShoppingCartMutationOptions = Apollo.BaseMutationOptions<CreateShoppingCartMutation, CreateShoppingCartMutationVariables>;
export const UpdateUsuarioDocument = gql`
    mutation UpdateUsuario($input: UserInput) {
  UpdateUsuario(input: $input) {
    id
    tipoUsuario
    tipoDocumento
    numeroDocumento
    nombres
    apellidos
    celular
    email
    estado
    apiToken
  }
}
    `;
export type UpdateUsuarioMutationFn = Apollo.MutationFunction<UpdateUsuarioMutation, UpdateUsuarioMutationVariables>;

/**
 * __useUpdateUsuarioMutation__
 *
 * To run a mutation, you first call `useUpdateUsuarioMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUsuarioMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUsuarioMutation, { data, loading, error }] = useUpdateUsuarioMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUsuarioMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUsuarioMutation, UpdateUsuarioMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUsuarioMutation, UpdateUsuarioMutationVariables>(UpdateUsuarioDocument, options);
      }
export type UpdateUsuarioMutationHookResult = ReturnType<typeof useUpdateUsuarioMutation>;
export type UpdateUsuarioMutationResult = Apollo.MutationResult<UpdateUsuarioMutation>;
export type UpdateUsuarioMutationOptions = Apollo.BaseMutationOptions<UpdateUsuarioMutation, UpdateUsuarioMutationVariables>;
export const GetAllFeriasDocument = gql`
    query GetAllFerias {
  GetAllFerias {
    numeroTotal
    data {
      feriaId
      titulo
      slug
      descripcionCorta
      descripcionLarga
      terminosCondiciones
      imagenPrincipal {
        id
        titulo
        url
      }
      imagenSecundaria {
        id
        titulo
        url
      }
      fecha
      hora
      fechaInicial
      horaInicial
      fechaFinal
      horaFinal
      descuento
    }
  }
}
    `;

/**
 * __useGetAllFeriasQuery__
 *
 * To run a query within a React component, call `useGetAllFeriasQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllFeriasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllFeriasQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllFeriasQuery(baseOptions?: Apollo.QueryHookOptions<GetAllFeriasQuery, GetAllFeriasQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllFeriasQuery, GetAllFeriasQueryVariables>(GetAllFeriasDocument, options);
      }
export function useGetAllFeriasLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllFeriasQuery, GetAllFeriasQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllFeriasQuery, GetAllFeriasQueryVariables>(GetAllFeriasDocument, options);
        }
export type GetAllFeriasQueryHookResult = ReturnType<typeof useGetAllFeriasQuery>;
export type GetAllFeriasLazyQueryHookResult = ReturnType<typeof useGetAllFeriasLazyQuery>;
export type GetAllFeriasQueryResult = Apollo.QueryResult<GetAllFeriasQuery, GetAllFeriasQueryVariables>;
export const GetFeriaSlugDocument = gql`
    query GetFeriaSlug($slug: String) {
  GetFeriaSlug(slug: $slug) {
    feriaId
    titulo
    slug
    descripcionCorta
    descripcionLarga
    terminosCondiciones
    imagenPrincipal {
      id
      titulo
      url
    }
    imagenSecundaria {
      id
      titulo
      url
    }
    fecha
    hora
    fechaInicial
    horaInicial
    fechaFinal
    horaFinal
    descuento
  }
}
    `;

/**
 * __useGetFeriaSlugQuery__
 *
 * To run a query within a React component, call `useGetFeriaSlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFeriaSlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFeriaSlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetFeriaSlugQuery(baseOptions?: Apollo.QueryHookOptions<GetFeriaSlugQuery, GetFeriaSlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFeriaSlugQuery, GetFeriaSlugQueryVariables>(GetFeriaSlugDocument, options);
      }
export function useGetFeriaSlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFeriaSlugQuery, GetFeriaSlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFeriaSlugQuery, GetFeriaSlugQueryVariables>(GetFeriaSlugDocument, options);
        }
export type GetFeriaSlugQueryHookResult = ReturnType<typeof useGetFeriaSlugQuery>;
export type GetFeriaSlugLazyQueryHookResult = ReturnType<typeof useGetFeriaSlugLazyQuery>;
export type GetFeriaSlugQueryResult = Apollo.QueryResult<GetFeriaSlugQuery, GetFeriaSlugQueryVariables>;