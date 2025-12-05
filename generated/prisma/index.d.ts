
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model niveis
 * 
 */
export type niveis = $Result.DefaultSelection<Prisma.$niveisPayload>
/**
 * Model usuarios
 * 
 */
export type usuarios = $Result.DefaultSelection<Prisma.$usuariosPayload>
/**
 * Model sorvetes
 * 
 */
export type sorvetes = $Result.DefaultSelection<Prisma.$sorvetesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Niveis
 * const niveis = await prisma.niveis.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Niveis
   * const niveis = await prisma.niveis.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.niveis`: Exposes CRUD operations for the **niveis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Niveis
    * const niveis = await prisma.niveis.findMany()
    * ```
    */
  get niveis(): Prisma.niveisDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarios`: Exposes CRUD operations for the **usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.usuariosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sorvetes`: Exposes CRUD operations for the **sorvetes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sorvetes
    * const sorvetes = await prisma.sorvetes.findMany()
    * ```
    */
  get sorvetes(): Prisma.sorvetesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    niveis: 'niveis',
    usuarios: 'usuarios',
    sorvetes: 'sorvetes'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "niveis" | "usuarios" | "sorvetes"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      niveis: {
        payload: Prisma.$niveisPayload<ExtArgs>
        fields: Prisma.niveisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.niveisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$niveisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.niveisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$niveisPayload>
          }
          findFirst: {
            args: Prisma.niveisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$niveisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.niveisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$niveisPayload>
          }
          findMany: {
            args: Prisma.niveisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$niveisPayload>[]
          }
          create: {
            args: Prisma.niveisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$niveisPayload>
          }
          createMany: {
            args: Prisma.niveisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.niveisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$niveisPayload>[]
          }
          delete: {
            args: Prisma.niveisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$niveisPayload>
          }
          update: {
            args: Prisma.niveisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$niveisPayload>
          }
          deleteMany: {
            args: Prisma.niveisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.niveisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.niveisUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$niveisPayload>[]
          }
          upsert: {
            args: Prisma.niveisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$niveisPayload>
          }
          aggregate: {
            args: Prisma.NiveisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNiveis>
          }
          groupBy: {
            args: Prisma.niveisGroupByArgs<ExtArgs>
            result: $Utils.Optional<NiveisGroupByOutputType>[]
          }
          count: {
            args: Prisma.niveisCountArgs<ExtArgs>
            result: $Utils.Optional<NiveisCountAggregateOutputType> | number
          }
        }
      }
      usuarios: {
        payload: Prisma.$usuariosPayload<ExtArgs>
        fields: Prisma.usuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findFirst: {
            args: Prisma.usuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findMany: {
            args: Prisma.usuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          create: {
            args: Prisma.usuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          createMany: {
            args: Prisma.usuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usuariosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          delete: {
            args: Prisma.usuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          update: {
            args: Prisma.usuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          deleteMany: {
            args: Prisma.usuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usuariosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          upsert: {
            args: Prisma.usuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.usuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuariosCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
          }
        }
      }
      sorvetes: {
        payload: Prisma.$sorvetesPayload<ExtArgs>
        fields: Prisma.sorvetesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sorvetesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sorvetesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sorvetesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sorvetesPayload>
          }
          findFirst: {
            args: Prisma.sorvetesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sorvetesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sorvetesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sorvetesPayload>
          }
          findMany: {
            args: Prisma.sorvetesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sorvetesPayload>[]
          }
          create: {
            args: Prisma.sorvetesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sorvetesPayload>
          }
          createMany: {
            args: Prisma.sorvetesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.sorvetesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sorvetesPayload>[]
          }
          delete: {
            args: Prisma.sorvetesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sorvetesPayload>
          }
          update: {
            args: Prisma.sorvetesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sorvetesPayload>
          }
          deleteMany: {
            args: Prisma.sorvetesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sorvetesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.sorvetesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sorvetesPayload>[]
          }
          upsert: {
            args: Prisma.sorvetesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sorvetesPayload>
          }
          aggregate: {
            args: Prisma.SorvetesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSorvetes>
          }
          groupBy: {
            args: Prisma.sorvetesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SorvetesGroupByOutputType>[]
          }
          count: {
            args: Prisma.sorvetesCountArgs<ExtArgs>
            result: $Utils.Optional<SorvetesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    niveis?: niveisOmit
    usuarios?: usuariosOmit
    sorvetes?: sorvetesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type NiveisCountOutputType
   */

  export type NiveisCountOutputType = {
    usuarios: number
  }

  export type NiveisCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | NiveisCountOutputTypeCountUsuariosArgs
  }

  // Custom InputTypes
  /**
   * NiveisCountOutputType without action
   */
  export type NiveisCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NiveisCountOutputType
     */
    select?: NiveisCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NiveisCountOutputType without action
   */
  export type NiveisCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuariosWhereInput
  }


  /**
   * Models
   */

  /**
   * Model niveis
   */

  export type AggregateNiveis = {
    _count: NiveisCountAggregateOutputType | null
    _avg: NiveisAvgAggregateOutputType | null
    _sum: NiveisSumAggregateOutputType | null
    _min: NiveisMinAggregateOutputType | null
    _max: NiveisMaxAggregateOutputType | null
  }

  export type NiveisAvgAggregateOutputType = {
    id: number | null
  }

  export type NiveisSumAggregateOutputType = {
    id: number | null
  }

  export type NiveisMinAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type NiveisMaxAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type NiveisCountAggregateOutputType = {
    id: number
    nome: number
    _all: number
  }


  export type NiveisAvgAggregateInputType = {
    id?: true
  }

  export type NiveisSumAggregateInputType = {
    id?: true
  }

  export type NiveisMinAggregateInputType = {
    id?: true
    nome?: true
  }

  export type NiveisMaxAggregateInputType = {
    id?: true
    nome?: true
  }

  export type NiveisCountAggregateInputType = {
    id?: true
    nome?: true
    _all?: true
  }

  export type NiveisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which niveis to aggregate.
     */
    where?: niveisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of niveis to fetch.
     */
    orderBy?: niveisOrderByWithRelationInput | niveisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: niveisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` niveis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` niveis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned niveis
    **/
    _count?: true | NiveisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NiveisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NiveisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NiveisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NiveisMaxAggregateInputType
  }

  export type GetNiveisAggregateType<T extends NiveisAggregateArgs> = {
        [P in keyof T & keyof AggregateNiveis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNiveis[P]>
      : GetScalarType<T[P], AggregateNiveis[P]>
  }




  export type niveisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: niveisWhereInput
    orderBy?: niveisOrderByWithAggregationInput | niveisOrderByWithAggregationInput[]
    by: NiveisScalarFieldEnum[] | NiveisScalarFieldEnum
    having?: niveisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NiveisCountAggregateInputType | true
    _avg?: NiveisAvgAggregateInputType
    _sum?: NiveisSumAggregateInputType
    _min?: NiveisMinAggregateInputType
    _max?: NiveisMaxAggregateInputType
  }

  export type NiveisGroupByOutputType = {
    id: number
    nome: string
    _count: NiveisCountAggregateOutputType | null
    _avg: NiveisAvgAggregateOutputType | null
    _sum: NiveisSumAggregateOutputType | null
    _min: NiveisMinAggregateOutputType | null
    _max: NiveisMaxAggregateOutputType | null
  }

  type GetNiveisGroupByPayload<T extends niveisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NiveisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NiveisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NiveisGroupByOutputType[P]>
            : GetScalarType<T[P], NiveisGroupByOutputType[P]>
        }
      >
    >


  export type niveisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    usuarios?: boolean | niveis$usuariosArgs<ExtArgs>
    _count?: boolean | NiveisCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["niveis"]>

  export type niveisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["niveis"]>

  export type niveisSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["niveis"]>

  export type niveisSelectScalar = {
    id?: boolean
    nome?: boolean
  }

  export type niveisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome", ExtArgs["result"]["niveis"]>
  export type niveisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | niveis$usuariosArgs<ExtArgs>
    _count?: boolean | NiveisCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type niveisIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type niveisIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $niveisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "niveis"
    objects: {
      usuarios: Prisma.$usuariosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
    }, ExtArgs["result"]["niveis"]>
    composites: {}
  }

  type niveisGetPayload<S extends boolean | null | undefined | niveisDefaultArgs> = $Result.GetResult<Prisma.$niveisPayload, S>

  type niveisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<niveisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NiveisCountAggregateInputType | true
    }

  export interface niveisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['niveis'], meta: { name: 'niveis' } }
    /**
     * Find zero or one Niveis that matches the filter.
     * @param {niveisFindUniqueArgs} args - Arguments to find a Niveis
     * @example
     * // Get one Niveis
     * const niveis = await prisma.niveis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends niveisFindUniqueArgs>(args: SelectSubset<T, niveisFindUniqueArgs<ExtArgs>>): Prisma__niveisClient<$Result.GetResult<Prisma.$niveisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Niveis that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {niveisFindUniqueOrThrowArgs} args - Arguments to find a Niveis
     * @example
     * // Get one Niveis
     * const niveis = await prisma.niveis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends niveisFindUniqueOrThrowArgs>(args: SelectSubset<T, niveisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__niveisClient<$Result.GetResult<Prisma.$niveisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Niveis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {niveisFindFirstArgs} args - Arguments to find a Niveis
     * @example
     * // Get one Niveis
     * const niveis = await prisma.niveis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends niveisFindFirstArgs>(args?: SelectSubset<T, niveisFindFirstArgs<ExtArgs>>): Prisma__niveisClient<$Result.GetResult<Prisma.$niveisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Niveis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {niveisFindFirstOrThrowArgs} args - Arguments to find a Niveis
     * @example
     * // Get one Niveis
     * const niveis = await prisma.niveis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends niveisFindFirstOrThrowArgs>(args?: SelectSubset<T, niveisFindFirstOrThrowArgs<ExtArgs>>): Prisma__niveisClient<$Result.GetResult<Prisma.$niveisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Niveis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {niveisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Niveis
     * const niveis = await prisma.niveis.findMany()
     * 
     * // Get first 10 Niveis
     * const niveis = await prisma.niveis.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const niveisWithIdOnly = await prisma.niveis.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends niveisFindManyArgs>(args?: SelectSubset<T, niveisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$niveisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Niveis.
     * @param {niveisCreateArgs} args - Arguments to create a Niveis.
     * @example
     * // Create one Niveis
     * const Niveis = await prisma.niveis.create({
     *   data: {
     *     // ... data to create a Niveis
     *   }
     * })
     * 
     */
    create<T extends niveisCreateArgs>(args: SelectSubset<T, niveisCreateArgs<ExtArgs>>): Prisma__niveisClient<$Result.GetResult<Prisma.$niveisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Niveis.
     * @param {niveisCreateManyArgs} args - Arguments to create many Niveis.
     * @example
     * // Create many Niveis
     * const niveis = await prisma.niveis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends niveisCreateManyArgs>(args?: SelectSubset<T, niveisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Niveis and returns the data saved in the database.
     * @param {niveisCreateManyAndReturnArgs} args - Arguments to create many Niveis.
     * @example
     * // Create many Niveis
     * const niveis = await prisma.niveis.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Niveis and only return the `id`
     * const niveisWithIdOnly = await prisma.niveis.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends niveisCreateManyAndReturnArgs>(args?: SelectSubset<T, niveisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$niveisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Niveis.
     * @param {niveisDeleteArgs} args - Arguments to delete one Niveis.
     * @example
     * // Delete one Niveis
     * const Niveis = await prisma.niveis.delete({
     *   where: {
     *     // ... filter to delete one Niveis
     *   }
     * })
     * 
     */
    delete<T extends niveisDeleteArgs>(args: SelectSubset<T, niveisDeleteArgs<ExtArgs>>): Prisma__niveisClient<$Result.GetResult<Prisma.$niveisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Niveis.
     * @param {niveisUpdateArgs} args - Arguments to update one Niveis.
     * @example
     * // Update one Niveis
     * const niveis = await prisma.niveis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends niveisUpdateArgs>(args: SelectSubset<T, niveisUpdateArgs<ExtArgs>>): Prisma__niveisClient<$Result.GetResult<Prisma.$niveisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Niveis.
     * @param {niveisDeleteManyArgs} args - Arguments to filter Niveis to delete.
     * @example
     * // Delete a few Niveis
     * const { count } = await prisma.niveis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends niveisDeleteManyArgs>(args?: SelectSubset<T, niveisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Niveis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {niveisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Niveis
     * const niveis = await prisma.niveis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends niveisUpdateManyArgs>(args: SelectSubset<T, niveisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Niveis and returns the data updated in the database.
     * @param {niveisUpdateManyAndReturnArgs} args - Arguments to update many Niveis.
     * @example
     * // Update many Niveis
     * const niveis = await prisma.niveis.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Niveis and only return the `id`
     * const niveisWithIdOnly = await prisma.niveis.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends niveisUpdateManyAndReturnArgs>(args: SelectSubset<T, niveisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$niveisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Niveis.
     * @param {niveisUpsertArgs} args - Arguments to update or create a Niveis.
     * @example
     * // Update or create a Niveis
     * const niveis = await prisma.niveis.upsert({
     *   create: {
     *     // ... data to create a Niveis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Niveis we want to update
     *   }
     * })
     */
    upsert<T extends niveisUpsertArgs>(args: SelectSubset<T, niveisUpsertArgs<ExtArgs>>): Prisma__niveisClient<$Result.GetResult<Prisma.$niveisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Niveis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {niveisCountArgs} args - Arguments to filter Niveis to count.
     * @example
     * // Count the number of Niveis
     * const count = await prisma.niveis.count({
     *   where: {
     *     // ... the filter for the Niveis we want to count
     *   }
     * })
    **/
    count<T extends niveisCountArgs>(
      args?: Subset<T, niveisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NiveisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Niveis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NiveisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NiveisAggregateArgs>(args: Subset<T, NiveisAggregateArgs>): Prisma.PrismaPromise<GetNiveisAggregateType<T>>

    /**
     * Group by Niveis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {niveisGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends niveisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: niveisGroupByArgs['orderBy'] }
        : { orderBy?: niveisGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, niveisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNiveisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the niveis model
   */
  readonly fields: niveisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for niveis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__niveisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends niveis$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, niveis$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the niveis model
   */
  interface niveisFieldRefs {
    readonly id: FieldRef<"niveis", 'Int'>
    readonly nome: FieldRef<"niveis", 'String'>
  }
    

  // Custom InputTypes
  /**
   * niveis findUnique
   */
  export type niveisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the niveis
     */
    select?: niveisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the niveis
     */
    omit?: niveisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: niveisInclude<ExtArgs> | null
    /**
     * Filter, which niveis to fetch.
     */
    where: niveisWhereUniqueInput
  }

  /**
   * niveis findUniqueOrThrow
   */
  export type niveisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the niveis
     */
    select?: niveisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the niveis
     */
    omit?: niveisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: niveisInclude<ExtArgs> | null
    /**
     * Filter, which niveis to fetch.
     */
    where: niveisWhereUniqueInput
  }

  /**
   * niveis findFirst
   */
  export type niveisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the niveis
     */
    select?: niveisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the niveis
     */
    omit?: niveisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: niveisInclude<ExtArgs> | null
    /**
     * Filter, which niveis to fetch.
     */
    where?: niveisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of niveis to fetch.
     */
    orderBy?: niveisOrderByWithRelationInput | niveisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for niveis.
     */
    cursor?: niveisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` niveis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` niveis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of niveis.
     */
    distinct?: NiveisScalarFieldEnum | NiveisScalarFieldEnum[]
  }

  /**
   * niveis findFirstOrThrow
   */
  export type niveisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the niveis
     */
    select?: niveisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the niveis
     */
    omit?: niveisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: niveisInclude<ExtArgs> | null
    /**
     * Filter, which niveis to fetch.
     */
    where?: niveisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of niveis to fetch.
     */
    orderBy?: niveisOrderByWithRelationInput | niveisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for niveis.
     */
    cursor?: niveisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` niveis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` niveis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of niveis.
     */
    distinct?: NiveisScalarFieldEnum | NiveisScalarFieldEnum[]
  }

  /**
   * niveis findMany
   */
  export type niveisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the niveis
     */
    select?: niveisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the niveis
     */
    omit?: niveisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: niveisInclude<ExtArgs> | null
    /**
     * Filter, which niveis to fetch.
     */
    where?: niveisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of niveis to fetch.
     */
    orderBy?: niveisOrderByWithRelationInput | niveisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing niveis.
     */
    cursor?: niveisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` niveis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` niveis.
     */
    skip?: number
    distinct?: NiveisScalarFieldEnum | NiveisScalarFieldEnum[]
  }

  /**
   * niveis create
   */
  export type niveisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the niveis
     */
    select?: niveisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the niveis
     */
    omit?: niveisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: niveisInclude<ExtArgs> | null
    /**
     * The data needed to create a niveis.
     */
    data: XOR<niveisCreateInput, niveisUncheckedCreateInput>
  }

  /**
   * niveis createMany
   */
  export type niveisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many niveis.
     */
    data: niveisCreateManyInput | niveisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * niveis createManyAndReturn
   */
  export type niveisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the niveis
     */
    select?: niveisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the niveis
     */
    omit?: niveisOmit<ExtArgs> | null
    /**
     * The data used to create many niveis.
     */
    data: niveisCreateManyInput | niveisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * niveis update
   */
  export type niveisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the niveis
     */
    select?: niveisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the niveis
     */
    omit?: niveisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: niveisInclude<ExtArgs> | null
    /**
     * The data needed to update a niveis.
     */
    data: XOR<niveisUpdateInput, niveisUncheckedUpdateInput>
    /**
     * Choose, which niveis to update.
     */
    where: niveisWhereUniqueInput
  }

  /**
   * niveis updateMany
   */
  export type niveisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update niveis.
     */
    data: XOR<niveisUpdateManyMutationInput, niveisUncheckedUpdateManyInput>
    /**
     * Filter which niveis to update
     */
    where?: niveisWhereInput
    /**
     * Limit how many niveis to update.
     */
    limit?: number
  }

  /**
   * niveis updateManyAndReturn
   */
  export type niveisUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the niveis
     */
    select?: niveisSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the niveis
     */
    omit?: niveisOmit<ExtArgs> | null
    /**
     * The data used to update niveis.
     */
    data: XOR<niveisUpdateManyMutationInput, niveisUncheckedUpdateManyInput>
    /**
     * Filter which niveis to update
     */
    where?: niveisWhereInput
    /**
     * Limit how many niveis to update.
     */
    limit?: number
  }

  /**
   * niveis upsert
   */
  export type niveisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the niveis
     */
    select?: niveisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the niveis
     */
    omit?: niveisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: niveisInclude<ExtArgs> | null
    /**
     * The filter to search for the niveis to update in case it exists.
     */
    where: niveisWhereUniqueInput
    /**
     * In case the niveis found by the `where` argument doesn't exist, create a new niveis with this data.
     */
    create: XOR<niveisCreateInput, niveisUncheckedCreateInput>
    /**
     * In case the niveis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<niveisUpdateInput, niveisUncheckedUpdateInput>
  }

  /**
   * niveis delete
   */
  export type niveisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the niveis
     */
    select?: niveisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the niveis
     */
    omit?: niveisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: niveisInclude<ExtArgs> | null
    /**
     * Filter which niveis to delete.
     */
    where: niveisWhereUniqueInput
  }

  /**
   * niveis deleteMany
   */
  export type niveisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which niveis to delete
     */
    where?: niveisWhereInput
    /**
     * Limit how many niveis to delete.
     */
    limit?: number
  }

  /**
   * niveis.usuarios
   */
  export type niveis$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    where?: usuariosWhereInput
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    cursor?: usuariosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * niveis without action
   */
  export type niveisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the niveis
     */
    select?: niveisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the niveis
     */
    omit?: niveisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: niveisInclude<ExtArgs> | null
  }


  /**
   * Model usuarios
   */

  export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  export type UsuariosAvgAggregateOutputType = {
    id: number | null
    nivel_id: number | null
  }

  export type UsuariosSumAggregateOutputType = {
    id: number | null
    nivel_id: number | null
  }

  export type UsuariosMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    nivel_id: number | null
  }

  export type UsuariosMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    nivel_id: number | null
  }

  export type UsuariosCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha: number
    nivel_id: number
    _all: number
  }


  export type UsuariosAvgAggregateInputType = {
    id?: true
    nivel_id?: true
  }

  export type UsuariosSumAggregateInputType = {
    id?: true
    nivel_id?: true
  }

  export type UsuariosMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    nivel_id?: true
  }

  export type UsuariosMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    nivel_id?: true
  }

  export type UsuariosCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    nivel_id?: true
    _all?: true
  }

  export type UsuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to aggregate.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType
  }

  export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios[P]>
      : GetScalarType<T[P], AggregateUsuarios[P]>
  }




  export type usuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuariosWhereInput
    orderBy?: usuariosOrderByWithAggregationInput | usuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: usuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosCountAggregateInputType | true
    _avg?: UsuariosAvgAggregateInputType
    _sum?: UsuariosSumAggregateInputType
    _min?: UsuariosMinAggregateInputType
    _max?: UsuariosMaxAggregateInputType
  }

  export type UsuariosGroupByOutputType = {
    id: number
    nome: string
    email: string
    senha: string
    nivel_id: number
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  type GetUsuariosGroupByPayload<T extends usuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
        }
      >
    >


  export type usuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    nivel_id?: boolean
    niveis?: boolean | niveisDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    nivel_id?: boolean
    niveis?: boolean | niveisDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    nivel_id?: boolean
    niveis?: boolean | niveisDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    nivel_id?: boolean
  }

  export type usuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "senha" | "nivel_id", ExtArgs["result"]["usuarios"]>
  export type usuariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    niveis?: boolean | niveisDefaultArgs<ExtArgs>
  }
  export type usuariosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    niveis?: boolean | niveisDefaultArgs<ExtArgs>
  }
  export type usuariosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    niveis?: boolean | niveisDefaultArgs<ExtArgs>
  }

  export type $usuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuarios"
    objects: {
      niveis: Prisma.$niveisPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      senha: string
      nivel_id: number
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }

  type usuariosGetPayload<S extends boolean | null | undefined | usuariosDefaultArgs> = $Result.GetResult<Prisma.$usuariosPayload, S>

  type usuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface usuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuarios'], meta: { name: 'usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {usuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuariosFindUniqueArgs>(args: SelectSubset<T, usuariosFindUniqueArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, usuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuariosFindFirstArgs>(args?: SelectSubset<T, usuariosFindFirstArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, usuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usuariosFindManyArgs>(args?: SelectSubset<T, usuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuarios.
     * @param {usuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
     */
    create<T extends usuariosCreateArgs>(args: SelectSubset<T, usuariosCreateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuariosCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuariosCreateManyArgs>(args?: SelectSubset<T, usuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {usuariosCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usuariosCreateManyAndReturnArgs>(args?: SelectSubset<T, usuariosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuarios.
     * @param {usuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
     */
    delete<T extends usuariosDeleteArgs>(args: SelectSubset<T, usuariosDeleteArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuarios.
     * @param {usuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuariosUpdateArgs>(args: SelectSubset<T, usuariosUpdateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuariosDeleteManyArgs>(args?: SelectSubset<T, usuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuariosUpdateManyArgs>(args: SelectSubset<T, usuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {usuariosUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usuariosUpdateManyAndReturnArgs>(args: SelectSubset<T, usuariosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuarios.
     * @param {usuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
     */
    upsert<T extends usuariosUpsertArgs>(args: SelectSubset<T, usuariosUpsertArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuariosCountArgs>(
      args?: Subset<T, usuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuariosAggregateArgs>(args: Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>

    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuariosGroupByArgs['orderBy'] }
        : { orderBy?: usuariosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuarios model
   */
  readonly fields: usuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    niveis<T extends niveisDefaultArgs<ExtArgs> = {}>(args?: Subset<T, niveisDefaultArgs<ExtArgs>>): Prisma__niveisClient<$Result.GetResult<Prisma.$niveisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the usuarios model
   */
  interface usuariosFieldRefs {
    readonly id: FieldRef<"usuarios", 'Int'>
    readonly nome: FieldRef<"usuarios", 'String'>
    readonly email: FieldRef<"usuarios", 'String'>
    readonly senha: FieldRef<"usuarios", 'String'>
    readonly nivel_id: FieldRef<"usuarios", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * usuarios findUnique
   */
  export type usuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findUniqueOrThrow
   */
  export type usuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findFirst
   */
  export type usuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findFirstOrThrow
   */
  export type usuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findMany
   */
  export type usuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios create
   */
  export type usuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to create a usuarios.
     */
    data: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
  }

  /**
   * usuarios createMany
   */
  export type usuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios createManyAndReturn
   */
  export type usuariosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * usuarios update
   */
  export type usuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to update a usuarios.
     */
    data: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
    /**
     * Choose, which usuarios to update.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios updateMany
   */
  export type usuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios updateManyAndReturn
   */
  export type usuariosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * usuarios upsert
   */
  export type usuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The filter to search for the usuarios to update in case it exists.
     */
    where: usuariosWhereUniqueInput
    /**
     * In case the usuarios found by the `where` argument doesn't exist, create a new usuarios with this data.
     */
    create: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
    /**
     * In case the usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
  }

  /**
   * usuarios delete
   */
  export type usuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter which usuarios to delete.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios deleteMany
   */
  export type usuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuarios without action
   */
  export type usuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
  }


  /**
   * Model sorvetes
   */

  export type AggregateSorvetes = {
    _count: SorvetesCountAggregateOutputType | null
    _avg: SorvetesAvgAggregateOutputType | null
    _sum: SorvetesSumAggregateOutputType | null
    _min: SorvetesMinAggregateOutputType | null
    _max: SorvetesMaxAggregateOutputType | null
  }

  export type SorvetesAvgAggregateOutputType = {
    id: number | null
  }

  export type SorvetesSumAggregateOutputType = {
    id: number | null
  }

  export type SorvetesMinAggregateOutputType = {
    id: number | null
    nome: string | null
    status: string | null
  }

  export type SorvetesMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    status: string | null
  }

  export type SorvetesCountAggregateOutputType = {
    id: number
    nome: number
    status: number
    _all: number
  }


  export type SorvetesAvgAggregateInputType = {
    id?: true
  }

  export type SorvetesSumAggregateInputType = {
    id?: true
  }

  export type SorvetesMinAggregateInputType = {
    id?: true
    nome?: true
    status?: true
  }

  export type SorvetesMaxAggregateInputType = {
    id?: true
    nome?: true
    status?: true
  }

  export type SorvetesCountAggregateInputType = {
    id?: true
    nome?: true
    status?: true
    _all?: true
  }

  export type SorvetesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sorvetes to aggregate.
     */
    where?: sorvetesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sorvetes to fetch.
     */
    orderBy?: sorvetesOrderByWithRelationInput | sorvetesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sorvetesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sorvetes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sorvetes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sorvetes
    **/
    _count?: true | SorvetesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SorvetesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SorvetesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SorvetesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SorvetesMaxAggregateInputType
  }

  export type GetSorvetesAggregateType<T extends SorvetesAggregateArgs> = {
        [P in keyof T & keyof AggregateSorvetes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSorvetes[P]>
      : GetScalarType<T[P], AggregateSorvetes[P]>
  }




  export type sorvetesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sorvetesWhereInput
    orderBy?: sorvetesOrderByWithAggregationInput | sorvetesOrderByWithAggregationInput[]
    by: SorvetesScalarFieldEnum[] | SorvetesScalarFieldEnum
    having?: sorvetesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SorvetesCountAggregateInputType | true
    _avg?: SorvetesAvgAggregateInputType
    _sum?: SorvetesSumAggregateInputType
    _min?: SorvetesMinAggregateInputType
    _max?: SorvetesMaxAggregateInputType
  }

  export type SorvetesGroupByOutputType = {
    id: number
    nome: string
    status: string
    _count: SorvetesCountAggregateOutputType | null
    _avg: SorvetesAvgAggregateOutputType | null
    _sum: SorvetesSumAggregateOutputType | null
    _min: SorvetesMinAggregateOutputType | null
    _max: SorvetesMaxAggregateOutputType | null
  }

  type GetSorvetesGroupByPayload<T extends sorvetesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SorvetesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SorvetesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SorvetesGroupByOutputType[P]>
            : GetScalarType<T[P], SorvetesGroupByOutputType[P]>
        }
      >
    >


  export type sorvetesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    status?: boolean
  }, ExtArgs["result"]["sorvetes"]>

  export type sorvetesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    status?: boolean
  }, ExtArgs["result"]["sorvetes"]>

  export type sorvetesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    status?: boolean
  }, ExtArgs["result"]["sorvetes"]>

  export type sorvetesSelectScalar = {
    id?: boolean
    nome?: boolean
    status?: boolean
  }

  export type sorvetesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "status", ExtArgs["result"]["sorvetes"]>

  export type $sorvetesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sorvetes"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      status: string
    }, ExtArgs["result"]["sorvetes"]>
    composites: {}
  }

  type sorvetesGetPayload<S extends boolean | null | undefined | sorvetesDefaultArgs> = $Result.GetResult<Prisma.$sorvetesPayload, S>

  type sorvetesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sorvetesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SorvetesCountAggregateInputType | true
    }

  export interface sorvetesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sorvetes'], meta: { name: 'sorvetes' } }
    /**
     * Find zero or one Sorvetes that matches the filter.
     * @param {sorvetesFindUniqueArgs} args - Arguments to find a Sorvetes
     * @example
     * // Get one Sorvetes
     * const sorvetes = await prisma.sorvetes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sorvetesFindUniqueArgs>(args: SelectSubset<T, sorvetesFindUniqueArgs<ExtArgs>>): Prisma__sorvetesClient<$Result.GetResult<Prisma.$sorvetesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sorvetes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sorvetesFindUniqueOrThrowArgs} args - Arguments to find a Sorvetes
     * @example
     * // Get one Sorvetes
     * const sorvetes = await prisma.sorvetes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sorvetesFindUniqueOrThrowArgs>(args: SelectSubset<T, sorvetesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sorvetesClient<$Result.GetResult<Prisma.$sorvetesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sorvetes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sorvetesFindFirstArgs} args - Arguments to find a Sorvetes
     * @example
     * // Get one Sorvetes
     * const sorvetes = await prisma.sorvetes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sorvetesFindFirstArgs>(args?: SelectSubset<T, sorvetesFindFirstArgs<ExtArgs>>): Prisma__sorvetesClient<$Result.GetResult<Prisma.$sorvetesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sorvetes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sorvetesFindFirstOrThrowArgs} args - Arguments to find a Sorvetes
     * @example
     * // Get one Sorvetes
     * const sorvetes = await prisma.sorvetes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sorvetesFindFirstOrThrowArgs>(args?: SelectSubset<T, sorvetesFindFirstOrThrowArgs<ExtArgs>>): Prisma__sorvetesClient<$Result.GetResult<Prisma.$sorvetesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sorvetes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sorvetesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sorvetes
     * const sorvetes = await prisma.sorvetes.findMany()
     * 
     * // Get first 10 Sorvetes
     * const sorvetes = await prisma.sorvetes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sorvetesWithIdOnly = await prisma.sorvetes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sorvetesFindManyArgs>(args?: SelectSubset<T, sorvetesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sorvetesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sorvetes.
     * @param {sorvetesCreateArgs} args - Arguments to create a Sorvetes.
     * @example
     * // Create one Sorvetes
     * const Sorvetes = await prisma.sorvetes.create({
     *   data: {
     *     // ... data to create a Sorvetes
     *   }
     * })
     * 
     */
    create<T extends sorvetesCreateArgs>(args: SelectSubset<T, sorvetesCreateArgs<ExtArgs>>): Prisma__sorvetesClient<$Result.GetResult<Prisma.$sorvetesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sorvetes.
     * @param {sorvetesCreateManyArgs} args - Arguments to create many Sorvetes.
     * @example
     * // Create many Sorvetes
     * const sorvetes = await prisma.sorvetes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sorvetesCreateManyArgs>(args?: SelectSubset<T, sorvetesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sorvetes and returns the data saved in the database.
     * @param {sorvetesCreateManyAndReturnArgs} args - Arguments to create many Sorvetes.
     * @example
     * // Create many Sorvetes
     * const sorvetes = await prisma.sorvetes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sorvetes and only return the `id`
     * const sorvetesWithIdOnly = await prisma.sorvetes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends sorvetesCreateManyAndReturnArgs>(args?: SelectSubset<T, sorvetesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sorvetesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sorvetes.
     * @param {sorvetesDeleteArgs} args - Arguments to delete one Sorvetes.
     * @example
     * // Delete one Sorvetes
     * const Sorvetes = await prisma.sorvetes.delete({
     *   where: {
     *     // ... filter to delete one Sorvetes
     *   }
     * })
     * 
     */
    delete<T extends sorvetesDeleteArgs>(args: SelectSubset<T, sorvetesDeleteArgs<ExtArgs>>): Prisma__sorvetesClient<$Result.GetResult<Prisma.$sorvetesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sorvetes.
     * @param {sorvetesUpdateArgs} args - Arguments to update one Sorvetes.
     * @example
     * // Update one Sorvetes
     * const sorvetes = await prisma.sorvetes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sorvetesUpdateArgs>(args: SelectSubset<T, sorvetesUpdateArgs<ExtArgs>>): Prisma__sorvetesClient<$Result.GetResult<Prisma.$sorvetesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sorvetes.
     * @param {sorvetesDeleteManyArgs} args - Arguments to filter Sorvetes to delete.
     * @example
     * // Delete a few Sorvetes
     * const { count } = await prisma.sorvetes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sorvetesDeleteManyArgs>(args?: SelectSubset<T, sorvetesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sorvetes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sorvetesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sorvetes
     * const sorvetes = await prisma.sorvetes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sorvetesUpdateManyArgs>(args: SelectSubset<T, sorvetesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sorvetes and returns the data updated in the database.
     * @param {sorvetesUpdateManyAndReturnArgs} args - Arguments to update many Sorvetes.
     * @example
     * // Update many Sorvetes
     * const sorvetes = await prisma.sorvetes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sorvetes and only return the `id`
     * const sorvetesWithIdOnly = await prisma.sorvetes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends sorvetesUpdateManyAndReturnArgs>(args: SelectSubset<T, sorvetesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sorvetesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sorvetes.
     * @param {sorvetesUpsertArgs} args - Arguments to update or create a Sorvetes.
     * @example
     * // Update or create a Sorvetes
     * const sorvetes = await prisma.sorvetes.upsert({
     *   create: {
     *     // ... data to create a Sorvetes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sorvetes we want to update
     *   }
     * })
     */
    upsert<T extends sorvetesUpsertArgs>(args: SelectSubset<T, sorvetesUpsertArgs<ExtArgs>>): Prisma__sorvetesClient<$Result.GetResult<Prisma.$sorvetesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sorvetes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sorvetesCountArgs} args - Arguments to filter Sorvetes to count.
     * @example
     * // Count the number of Sorvetes
     * const count = await prisma.sorvetes.count({
     *   where: {
     *     // ... the filter for the Sorvetes we want to count
     *   }
     * })
    **/
    count<T extends sorvetesCountArgs>(
      args?: Subset<T, sorvetesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SorvetesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sorvetes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SorvetesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SorvetesAggregateArgs>(args: Subset<T, SorvetesAggregateArgs>): Prisma.PrismaPromise<GetSorvetesAggregateType<T>>

    /**
     * Group by Sorvetes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sorvetesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sorvetesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sorvetesGroupByArgs['orderBy'] }
        : { orderBy?: sorvetesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sorvetesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSorvetesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sorvetes model
   */
  readonly fields: sorvetesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sorvetes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sorvetesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sorvetes model
   */
  interface sorvetesFieldRefs {
    readonly id: FieldRef<"sorvetes", 'Int'>
    readonly nome: FieldRef<"sorvetes", 'String'>
    readonly status: FieldRef<"sorvetes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * sorvetes findUnique
   */
  export type sorvetesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sorvetes
     */
    select?: sorvetesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sorvetes
     */
    omit?: sorvetesOmit<ExtArgs> | null
    /**
     * Filter, which sorvetes to fetch.
     */
    where: sorvetesWhereUniqueInput
  }

  /**
   * sorvetes findUniqueOrThrow
   */
  export type sorvetesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sorvetes
     */
    select?: sorvetesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sorvetes
     */
    omit?: sorvetesOmit<ExtArgs> | null
    /**
     * Filter, which sorvetes to fetch.
     */
    where: sorvetesWhereUniqueInput
  }

  /**
   * sorvetes findFirst
   */
  export type sorvetesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sorvetes
     */
    select?: sorvetesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sorvetes
     */
    omit?: sorvetesOmit<ExtArgs> | null
    /**
     * Filter, which sorvetes to fetch.
     */
    where?: sorvetesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sorvetes to fetch.
     */
    orderBy?: sorvetesOrderByWithRelationInput | sorvetesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sorvetes.
     */
    cursor?: sorvetesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sorvetes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sorvetes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sorvetes.
     */
    distinct?: SorvetesScalarFieldEnum | SorvetesScalarFieldEnum[]
  }

  /**
   * sorvetes findFirstOrThrow
   */
  export type sorvetesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sorvetes
     */
    select?: sorvetesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sorvetes
     */
    omit?: sorvetesOmit<ExtArgs> | null
    /**
     * Filter, which sorvetes to fetch.
     */
    where?: sorvetesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sorvetes to fetch.
     */
    orderBy?: sorvetesOrderByWithRelationInput | sorvetesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sorvetes.
     */
    cursor?: sorvetesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sorvetes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sorvetes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sorvetes.
     */
    distinct?: SorvetesScalarFieldEnum | SorvetesScalarFieldEnum[]
  }

  /**
   * sorvetes findMany
   */
  export type sorvetesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sorvetes
     */
    select?: sorvetesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sorvetes
     */
    omit?: sorvetesOmit<ExtArgs> | null
    /**
     * Filter, which sorvetes to fetch.
     */
    where?: sorvetesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sorvetes to fetch.
     */
    orderBy?: sorvetesOrderByWithRelationInput | sorvetesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sorvetes.
     */
    cursor?: sorvetesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sorvetes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sorvetes.
     */
    skip?: number
    distinct?: SorvetesScalarFieldEnum | SorvetesScalarFieldEnum[]
  }

  /**
   * sorvetes create
   */
  export type sorvetesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sorvetes
     */
    select?: sorvetesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sorvetes
     */
    omit?: sorvetesOmit<ExtArgs> | null
    /**
     * The data needed to create a sorvetes.
     */
    data: XOR<sorvetesCreateInput, sorvetesUncheckedCreateInput>
  }

  /**
   * sorvetes createMany
   */
  export type sorvetesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sorvetes.
     */
    data: sorvetesCreateManyInput | sorvetesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sorvetes createManyAndReturn
   */
  export type sorvetesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sorvetes
     */
    select?: sorvetesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sorvetes
     */
    omit?: sorvetesOmit<ExtArgs> | null
    /**
     * The data used to create many sorvetes.
     */
    data: sorvetesCreateManyInput | sorvetesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sorvetes update
   */
  export type sorvetesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sorvetes
     */
    select?: sorvetesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sorvetes
     */
    omit?: sorvetesOmit<ExtArgs> | null
    /**
     * The data needed to update a sorvetes.
     */
    data: XOR<sorvetesUpdateInput, sorvetesUncheckedUpdateInput>
    /**
     * Choose, which sorvetes to update.
     */
    where: sorvetesWhereUniqueInput
  }

  /**
   * sorvetes updateMany
   */
  export type sorvetesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sorvetes.
     */
    data: XOR<sorvetesUpdateManyMutationInput, sorvetesUncheckedUpdateManyInput>
    /**
     * Filter which sorvetes to update
     */
    where?: sorvetesWhereInput
    /**
     * Limit how many sorvetes to update.
     */
    limit?: number
  }

  /**
   * sorvetes updateManyAndReturn
   */
  export type sorvetesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sorvetes
     */
    select?: sorvetesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sorvetes
     */
    omit?: sorvetesOmit<ExtArgs> | null
    /**
     * The data used to update sorvetes.
     */
    data: XOR<sorvetesUpdateManyMutationInput, sorvetesUncheckedUpdateManyInput>
    /**
     * Filter which sorvetes to update
     */
    where?: sorvetesWhereInput
    /**
     * Limit how many sorvetes to update.
     */
    limit?: number
  }

  /**
   * sorvetes upsert
   */
  export type sorvetesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sorvetes
     */
    select?: sorvetesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sorvetes
     */
    omit?: sorvetesOmit<ExtArgs> | null
    /**
     * The filter to search for the sorvetes to update in case it exists.
     */
    where: sorvetesWhereUniqueInput
    /**
     * In case the sorvetes found by the `where` argument doesn't exist, create a new sorvetes with this data.
     */
    create: XOR<sorvetesCreateInput, sorvetesUncheckedCreateInput>
    /**
     * In case the sorvetes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sorvetesUpdateInput, sorvetesUncheckedUpdateInput>
  }

  /**
   * sorvetes delete
   */
  export type sorvetesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sorvetes
     */
    select?: sorvetesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sorvetes
     */
    omit?: sorvetesOmit<ExtArgs> | null
    /**
     * Filter which sorvetes to delete.
     */
    where: sorvetesWhereUniqueInput
  }

  /**
   * sorvetes deleteMany
   */
  export type sorvetesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sorvetes to delete
     */
    where?: sorvetesWhereInput
    /**
     * Limit how many sorvetes to delete.
     */
    limit?: number
  }

  /**
   * sorvetes without action
   */
  export type sorvetesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sorvetes
     */
    select?: sorvetesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sorvetes
     */
    omit?: sorvetesOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const NiveisScalarFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type NiveisScalarFieldEnum = (typeof NiveisScalarFieldEnum)[keyof typeof NiveisScalarFieldEnum]


  export const UsuariosScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    nivel_id: 'nivel_id'
  };

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


  export const SorvetesScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    status: 'status'
  };

  export type SorvetesScalarFieldEnum = (typeof SorvetesScalarFieldEnum)[keyof typeof SorvetesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type niveisWhereInput = {
    AND?: niveisWhereInput | niveisWhereInput[]
    OR?: niveisWhereInput[]
    NOT?: niveisWhereInput | niveisWhereInput[]
    id?: IntFilter<"niveis"> | number
    nome?: StringFilter<"niveis"> | string
    usuarios?: UsuariosListRelationFilter
  }

  export type niveisOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    usuarios?: usuariosOrderByRelationAggregateInput
  }

  export type niveisWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: niveisWhereInput | niveisWhereInput[]
    OR?: niveisWhereInput[]
    NOT?: niveisWhereInput | niveisWhereInput[]
    nome?: StringFilter<"niveis"> | string
    usuarios?: UsuariosListRelationFilter
  }, "id">

  export type niveisOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    _count?: niveisCountOrderByAggregateInput
    _avg?: niveisAvgOrderByAggregateInput
    _max?: niveisMaxOrderByAggregateInput
    _min?: niveisMinOrderByAggregateInput
    _sum?: niveisSumOrderByAggregateInput
  }

  export type niveisScalarWhereWithAggregatesInput = {
    AND?: niveisScalarWhereWithAggregatesInput | niveisScalarWhereWithAggregatesInput[]
    OR?: niveisScalarWhereWithAggregatesInput[]
    NOT?: niveisScalarWhereWithAggregatesInput | niveisScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"niveis"> | number
    nome?: StringWithAggregatesFilter<"niveis"> | string
  }

  export type usuariosWhereInput = {
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    id?: IntFilter<"usuarios"> | number
    nome?: StringFilter<"usuarios"> | string
    email?: StringFilter<"usuarios"> | string
    senha?: StringFilter<"usuarios"> | string
    nivel_id?: IntFilter<"usuarios"> | number
    niveis?: XOR<NiveisScalarRelationFilter, niveisWhereInput>
  }

  export type usuariosOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    nivel_id?: SortOrder
    niveis?: niveisOrderByWithRelationInput
  }

  export type usuariosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    nome?: StringFilter<"usuarios"> | string
    email?: StringFilter<"usuarios"> | string
    senha?: StringFilter<"usuarios"> | string
    nivel_id?: IntFilter<"usuarios"> | number
    niveis?: XOR<NiveisScalarRelationFilter, niveisWhereInput>
  }, "id">

  export type usuariosOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    nivel_id?: SortOrder
    _count?: usuariosCountOrderByAggregateInput
    _avg?: usuariosAvgOrderByAggregateInput
    _max?: usuariosMaxOrderByAggregateInput
    _min?: usuariosMinOrderByAggregateInput
    _sum?: usuariosSumOrderByAggregateInput
  }

  export type usuariosScalarWhereWithAggregatesInput = {
    AND?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    OR?: usuariosScalarWhereWithAggregatesInput[]
    NOT?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"usuarios"> | number
    nome?: StringWithAggregatesFilter<"usuarios"> | string
    email?: StringWithAggregatesFilter<"usuarios"> | string
    senha?: StringWithAggregatesFilter<"usuarios"> | string
    nivel_id?: IntWithAggregatesFilter<"usuarios"> | number
  }

  export type sorvetesWhereInput = {
    AND?: sorvetesWhereInput | sorvetesWhereInput[]
    OR?: sorvetesWhereInput[]
    NOT?: sorvetesWhereInput | sorvetesWhereInput[]
    id?: IntFilter<"sorvetes"> | number
    nome?: StringFilter<"sorvetes"> | string
    status?: StringFilter<"sorvetes"> | string
  }

  export type sorvetesOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    status?: SortOrder
  }

  export type sorvetesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: sorvetesWhereInput | sorvetesWhereInput[]
    OR?: sorvetesWhereInput[]
    NOT?: sorvetesWhereInput | sorvetesWhereInput[]
    nome?: StringFilter<"sorvetes"> | string
    status?: StringFilter<"sorvetes"> | string
  }, "id">

  export type sorvetesOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    status?: SortOrder
    _count?: sorvetesCountOrderByAggregateInput
    _avg?: sorvetesAvgOrderByAggregateInput
    _max?: sorvetesMaxOrderByAggregateInput
    _min?: sorvetesMinOrderByAggregateInput
    _sum?: sorvetesSumOrderByAggregateInput
  }

  export type sorvetesScalarWhereWithAggregatesInput = {
    AND?: sorvetesScalarWhereWithAggregatesInput | sorvetesScalarWhereWithAggregatesInput[]
    OR?: sorvetesScalarWhereWithAggregatesInput[]
    NOT?: sorvetesScalarWhereWithAggregatesInput | sorvetesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"sorvetes"> | number
    nome?: StringWithAggregatesFilter<"sorvetes"> | string
    status?: StringWithAggregatesFilter<"sorvetes"> | string
  }

  export type niveisCreateInput = {
    nome: string
    usuarios?: usuariosCreateNestedManyWithoutNiveisInput
  }

  export type niveisUncheckedCreateInput = {
    id?: number
    nome: string
    usuarios?: usuariosUncheckedCreateNestedManyWithoutNiveisInput
  }

  export type niveisUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    usuarios?: usuariosUpdateManyWithoutNiveisNestedInput
  }

  export type niveisUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    usuarios?: usuariosUncheckedUpdateManyWithoutNiveisNestedInput
  }

  export type niveisCreateManyInput = {
    id?: number
    nome: string
  }

  export type niveisUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type niveisUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type usuariosCreateInput = {
    nome: string
    email: string
    senha: string
    niveis: niveisCreateNestedOneWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    senha: string
    nivel_id: number
  }

  export type usuariosUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    niveis?: niveisUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nivel_id?: IntFieldUpdateOperationsInput | number
  }

  export type usuariosCreateManyInput = {
    id?: number
    nome: string
    email: string
    senha: string
    nivel_id: number
  }

  export type usuariosUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type usuariosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nivel_id?: IntFieldUpdateOperationsInput | number
  }

  export type sorvetesCreateInput = {
    nome: string
    status: string
  }

  export type sorvetesUncheckedCreateInput = {
    id?: number
    nome: string
    status: string
  }

  export type sorvetesUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type sorvetesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type sorvetesCreateManyInput = {
    id?: number
    nome: string
    status: string
  }

  export type sorvetesUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type sorvetesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UsuariosListRelationFilter = {
    every?: usuariosWhereInput
    some?: usuariosWhereInput
    none?: usuariosWhereInput
  }

  export type usuariosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type niveisCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type niveisAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type niveisMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type niveisMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type niveisSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NiveisScalarRelationFilter = {
    is?: niveisWhereInput
    isNot?: niveisWhereInput
  }

  export type usuariosCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    nivel_id?: SortOrder
  }

  export type usuariosAvgOrderByAggregateInput = {
    id?: SortOrder
    nivel_id?: SortOrder
  }

  export type usuariosMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    nivel_id?: SortOrder
  }

  export type usuariosMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    nivel_id?: SortOrder
  }

  export type usuariosSumOrderByAggregateInput = {
    id?: SortOrder
    nivel_id?: SortOrder
  }

  export type sorvetesCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    status?: SortOrder
  }

  export type sorvetesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type sorvetesMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    status?: SortOrder
  }

  export type sorvetesMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    status?: SortOrder
  }

  export type sorvetesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usuariosCreateNestedManyWithoutNiveisInput = {
    create?: XOR<usuariosCreateWithoutNiveisInput, usuariosUncheckedCreateWithoutNiveisInput> | usuariosCreateWithoutNiveisInput[] | usuariosUncheckedCreateWithoutNiveisInput[]
    connectOrCreate?: usuariosCreateOrConnectWithoutNiveisInput | usuariosCreateOrConnectWithoutNiveisInput[]
    createMany?: usuariosCreateManyNiveisInputEnvelope
    connect?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
  }

  export type usuariosUncheckedCreateNestedManyWithoutNiveisInput = {
    create?: XOR<usuariosCreateWithoutNiveisInput, usuariosUncheckedCreateWithoutNiveisInput> | usuariosCreateWithoutNiveisInput[] | usuariosUncheckedCreateWithoutNiveisInput[]
    connectOrCreate?: usuariosCreateOrConnectWithoutNiveisInput | usuariosCreateOrConnectWithoutNiveisInput[]
    createMany?: usuariosCreateManyNiveisInputEnvelope
    connect?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type usuariosUpdateManyWithoutNiveisNestedInput = {
    create?: XOR<usuariosCreateWithoutNiveisInput, usuariosUncheckedCreateWithoutNiveisInput> | usuariosCreateWithoutNiveisInput[] | usuariosUncheckedCreateWithoutNiveisInput[]
    connectOrCreate?: usuariosCreateOrConnectWithoutNiveisInput | usuariosCreateOrConnectWithoutNiveisInput[]
    upsert?: usuariosUpsertWithWhereUniqueWithoutNiveisInput | usuariosUpsertWithWhereUniqueWithoutNiveisInput[]
    createMany?: usuariosCreateManyNiveisInputEnvelope
    set?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    disconnect?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    delete?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    connect?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    update?: usuariosUpdateWithWhereUniqueWithoutNiveisInput | usuariosUpdateWithWhereUniqueWithoutNiveisInput[]
    updateMany?: usuariosUpdateManyWithWhereWithoutNiveisInput | usuariosUpdateManyWithWhereWithoutNiveisInput[]
    deleteMany?: usuariosScalarWhereInput | usuariosScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usuariosUncheckedUpdateManyWithoutNiveisNestedInput = {
    create?: XOR<usuariosCreateWithoutNiveisInput, usuariosUncheckedCreateWithoutNiveisInput> | usuariosCreateWithoutNiveisInput[] | usuariosUncheckedCreateWithoutNiveisInput[]
    connectOrCreate?: usuariosCreateOrConnectWithoutNiveisInput | usuariosCreateOrConnectWithoutNiveisInput[]
    upsert?: usuariosUpsertWithWhereUniqueWithoutNiveisInput | usuariosUpsertWithWhereUniqueWithoutNiveisInput[]
    createMany?: usuariosCreateManyNiveisInputEnvelope
    set?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    disconnect?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    delete?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    connect?: usuariosWhereUniqueInput | usuariosWhereUniqueInput[]
    update?: usuariosUpdateWithWhereUniqueWithoutNiveisInput | usuariosUpdateWithWhereUniqueWithoutNiveisInput[]
    updateMany?: usuariosUpdateManyWithWhereWithoutNiveisInput | usuariosUpdateManyWithWhereWithoutNiveisInput[]
    deleteMany?: usuariosScalarWhereInput | usuariosScalarWhereInput[]
  }

  export type niveisCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<niveisCreateWithoutUsuariosInput, niveisUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: niveisCreateOrConnectWithoutUsuariosInput
    connect?: niveisWhereUniqueInput
  }

  export type niveisUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: XOR<niveisCreateWithoutUsuariosInput, niveisUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: niveisCreateOrConnectWithoutUsuariosInput
    upsert?: niveisUpsertWithoutUsuariosInput
    connect?: niveisWhereUniqueInput
    update?: XOR<XOR<niveisUpdateToOneWithWhereWithoutUsuariosInput, niveisUpdateWithoutUsuariosInput>, niveisUncheckedUpdateWithoutUsuariosInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type usuariosCreateWithoutNiveisInput = {
    nome: string
    email: string
    senha: string
  }

  export type usuariosUncheckedCreateWithoutNiveisInput = {
    id?: number
    nome: string
    email: string
    senha: string
  }

  export type usuariosCreateOrConnectWithoutNiveisInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutNiveisInput, usuariosUncheckedCreateWithoutNiveisInput>
  }

  export type usuariosCreateManyNiveisInputEnvelope = {
    data: usuariosCreateManyNiveisInput | usuariosCreateManyNiveisInput[]
    skipDuplicates?: boolean
  }

  export type usuariosUpsertWithWhereUniqueWithoutNiveisInput = {
    where: usuariosWhereUniqueInput
    update: XOR<usuariosUpdateWithoutNiveisInput, usuariosUncheckedUpdateWithoutNiveisInput>
    create: XOR<usuariosCreateWithoutNiveisInput, usuariosUncheckedCreateWithoutNiveisInput>
  }

  export type usuariosUpdateWithWhereUniqueWithoutNiveisInput = {
    where: usuariosWhereUniqueInput
    data: XOR<usuariosUpdateWithoutNiveisInput, usuariosUncheckedUpdateWithoutNiveisInput>
  }

  export type usuariosUpdateManyWithWhereWithoutNiveisInput = {
    where: usuariosScalarWhereInput
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyWithoutNiveisInput>
  }

  export type usuariosScalarWhereInput = {
    AND?: usuariosScalarWhereInput | usuariosScalarWhereInput[]
    OR?: usuariosScalarWhereInput[]
    NOT?: usuariosScalarWhereInput | usuariosScalarWhereInput[]
    id?: IntFilter<"usuarios"> | number
    nome?: StringFilter<"usuarios"> | string
    email?: StringFilter<"usuarios"> | string
    senha?: StringFilter<"usuarios"> | string
    nivel_id?: IntFilter<"usuarios"> | number
  }

  export type niveisCreateWithoutUsuariosInput = {
    nome: string
  }

  export type niveisUncheckedCreateWithoutUsuariosInput = {
    id?: number
    nome: string
  }

  export type niveisCreateOrConnectWithoutUsuariosInput = {
    where: niveisWhereUniqueInput
    create: XOR<niveisCreateWithoutUsuariosInput, niveisUncheckedCreateWithoutUsuariosInput>
  }

  export type niveisUpsertWithoutUsuariosInput = {
    update: XOR<niveisUpdateWithoutUsuariosInput, niveisUncheckedUpdateWithoutUsuariosInput>
    create: XOR<niveisCreateWithoutUsuariosInput, niveisUncheckedCreateWithoutUsuariosInput>
    where?: niveisWhereInput
  }

  export type niveisUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: niveisWhereInput
    data: XOR<niveisUpdateWithoutUsuariosInput, niveisUncheckedUpdateWithoutUsuariosInput>
  }

  export type niveisUpdateWithoutUsuariosInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type niveisUncheckedUpdateWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type usuariosCreateManyNiveisInput = {
    id?: number
    nome: string
    email: string
    senha: string
  }

  export type usuariosUpdateWithoutNiveisInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type usuariosUncheckedUpdateWithoutNiveisInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type usuariosUncheckedUpdateManyWithoutNiveisInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}