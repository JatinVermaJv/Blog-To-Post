
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ProcessedPost
 * 
 */
export type ProcessedPost = $Result.DefaultSelection<Prisma.$ProcessedPostPayload>
/**
 * Model SocialPost
 * 
 */
export type SocialPost = $Result.DefaultSelection<Prisma.$SocialPostPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.processedPost`: Exposes CRUD operations for the **ProcessedPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProcessedPosts
    * const processedPosts = await prisma.processedPost.findMany()
    * ```
    */
  get processedPost(): Prisma.ProcessedPostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.socialPost`: Exposes CRUD operations for the **SocialPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SocialPosts
    * const socialPosts = await prisma.socialPost.findMany()
    * ```
    */
  get socialPost(): Prisma.SocialPostDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    User: 'User',
    ProcessedPost: 'ProcessedPost',
    SocialPost: 'SocialPost'
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
      modelProps: "user" | "processedPost" | "socialPost"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ProcessedPost: {
        payload: Prisma.$ProcessedPostPayload<ExtArgs>
        fields: Prisma.ProcessedPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProcessedPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessedPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProcessedPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessedPostPayload>
          }
          findFirst: {
            args: Prisma.ProcessedPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessedPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProcessedPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessedPostPayload>
          }
          findMany: {
            args: Prisma.ProcessedPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessedPostPayload>[]
          }
          create: {
            args: Prisma.ProcessedPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessedPostPayload>
          }
          createMany: {
            args: Prisma.ProcessedPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProcessedPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessedPostPayload>[]
          }
          delete: {
            args: Prisma.ProcessedPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessedPostPayload>
          }
          update: {
            args: Prisma.ProcessedPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessedPostPayload>
          }
          deleteMany: {
            args: Prisma.ProcessedPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProcessedPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProcessedPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessedPostPayload>[]
          }
          upsert: {
            args: Prisma.ProcessedPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessedPostPayload>
          }
          aggregate: {
            args: Prisma.ProcessedPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProcessedPost>
          }
          groupBy: {
            args: Prisma.ProcessedPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProcessedPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProcessedPostCountArgs<ExtArgs>
            result: $Utils.Optional<ProcessedPostCountAggregateOutputType> | number
          }
        }
      }
      SocialPost: {
        payload: Prisma.$SocialPostPayload<ExtArgs>
        fields: Prisma.SocialPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SocialPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SocialPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPostPayload>
          }
          findFirst: {
            args: Prisma.SocialPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SocialPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPostPayload>
          }
          findMany: {
            args: Prisma.SocialPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPostPayload>[]
          }
          create: {
            args: Prisma.SocialPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPostPayload>
          }
          createMany: {
            args: Prisma.SocialPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SocialPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPostPayload>[]
          }
          delete: {
            args: Prisma.SocialPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPostPayload>
          }
          update: {
            args: Prisma.SocialPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPostPayload>
          }
          deleteMany: {
            args: Prisma.SocialPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SocialPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SocialPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPostPayload>[]
          }
          upsert: {
            args: Prisma.SocialPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPostPayload>
          }
          aggregate: {
            args: Prisma.SocialPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSocialPost>
          }
          groupBy: {
            args: Prisma.SocialPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<SocialPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.SocialPostCountArgs<ExtArgs>
            result: $Utils.Optional<SocialPostCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    user?: UserOmit
    processedPost?: ProcessedPostOmit
    socialPost?: SocialPostOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    processedPosts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    processedPosts?: boolean | UserCountOutputTypeCountProcessedPostsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProcessedPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcessedPostWhereInput
  }


  /**
   * Count Type ProcessedPostCountOutputType
   */

  export type ProcessedPostCountOutputType = {
    socialPosts: number
  }

  export type ProcessedPostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    socialPosts?: boolean | ProcessedPostCountOutputTypeCountSocialPostsArgs
  }

  // Custom InputTypes
  /**
   * ProcessedPostCountOutputType without action
   */
  export type ProcessedPostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedPostCountOutputType
     */
    select?: ProcessedPostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProcessedPostCountOutputType without action
   */
  export type ProcessedPostCountOutputTypeCountSocialPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialPostWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    authProvider: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    authProvider: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    authProvider: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    authProvider?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    authProvider?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    authProvider?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    authProvider: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    authProvider?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    processedPosts?: boolean | User$processedPostsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    authProvider?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    authProvider?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    authProvider?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "authProvider" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    processedPosts?: boolean | User$processedPostsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      processedPosts: Prisma.$ProcessedPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      authProvider: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    processedPosts<T extends User$processedPostsArgs<ExtArgs> = {}>(args?: Subset<T, User$processedPostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessedPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly authProvider: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.processedPosts
   */
  export type User$processedPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedPost
     */
    select?: ProcessedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedPost
     */
    omit?: ProcessedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessedPostInclude<ExtArgs> | null
    where?: ProcessedPostWhereInput
    orderBy?: ProcessedPostOrderByWithRelationInput | ProcessedPostOrderByWithRelationInput[]
    cursor?: ProcessedPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProcessedPostScalarFieldEnum | ProcessedPostScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model ProcessedPost
   */

  export type AggregateProcessedPost = {
    _count: ProcessedPostCountAggregateOutputType | null
    _min: ProcessedPostMinAggregateOutputType | null
    _max: ProcessedPostMaxAggregateOutputType | null
  }

  export type ProcessedPostMinAggregateOutputType = {
    id: string | null
    originalUrl: string | null
    summary: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type ProcessedPostMaxAggregateOutputType = {
    id: string | null
    originalUrl: string | null
    summary: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type ProcessedPostCountAggregateOutputType = {
    id: number
    originalUrl: number
    summary: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type ProcessedPostMinAggregateInputType = {
    id?: true
    originalUrl?: true
    summary?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type ProcessedPostMaxAggregateInputType = {
    id?: true
    originalUrl?: true
    summary?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type ProcessedPostCountAggregateInputType = {
    id?: true
    originalUrl?: true
    summary?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type ProcessedPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProcessedPost to aggregate.
     */
    where?: ProcessedPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcessedPosts to fetch.
     */
    orderBy?: ProcessedPostOrderByWithRelationInput | ProcessedPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProcessedPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcessedPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcessedPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProcessedPosts
    **/
    _count?: true | ProcessedPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProcessedPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProcessedPostMaxAggregateInputType
  }

  export type GetProcessedPostAggregateType<T extends ProcessedPostAggregateArgs> = {
        [P in keyof T & keyof AggregateProcessedPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProcessedPost[P]>
      : GetScalarType<T[P], AggregateProcessedPost[P]>
  }




  export type ProcessedPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcessedPostWhereInput
    orderBy?: ProcessedPostOrderByWithAggregationInput | ProcessedPostOrderByWithAggregationInput[]
    by: ProcessedPostScalarFieldEnum[] | ProcessedPostScalarFieldEnum
    having?: ProcessedPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProcessedPostCountAggregateInputType | true
    _min?: ProcessedPostMinAggregateInputType
    _max?: ProcessedPostMaxAggregateInputType
  }

  export type ProcessedPostGroupByOutputType = {
    id: string
    originalUrl: string
    summary: string
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: ProcessedPostCountAggregateOutputType | null
    _min: ProcessedPostMinAggregateOutputType | null
    _max: ProcessedPostMaxAggregateOutputType | null
  }

  type GetProcessedPostGroupByPayload<T extends ProcessedPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProcessedPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProcessedPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProcessedPostGroupByOutputType[P]>
            : GetScalarType<T[P], ProcessedPostGroupByOutputType[P]>
        }
      >
    >


  export type ProcessedPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    originalUrl?: boolean
    summary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    socialPosts?: boolean | ProcessedPost$socialPostsArgs<ExtArgs>
    _count?: boolean | ProcessedPostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["processedPost"]>

  export type ProcessedPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    originalUrl?: boolean
    summary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["processedPost"]>

  export type ProcessedPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    originalUrl?: boolean
    summary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["processedPost"]>

  export type ProcessedPostSelectScalar = {
    id?: boolean
    originalUrl?: boolean
    summary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type ProcessedPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "originalUrl" | "summary" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["processedPost"]>
  export type ProcessedPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    socialPosts?: boolean | ProcessedPost$socialPostsArgs<ExtArgs>
    _count?: boolean | ProcessedPostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProcessedPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProcessedPostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProcessedPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProcessedPost"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      socialPosts: Prisma.$SocialPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      originalUrl: string
      summary: string
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["processedPost"]>
    composites: {}
  }

  type ProcessedPostGetPayload<S extends boolean | null | undefined | ProcessedPostDefaultArgs> = $Result.GetResult<Prisma.$ProcessedPostPayload, S>

  type ProcessedPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProcessedPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProcessedPostCountAggregateInputType | true
    }

  export interface ProcessedPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProcessedPost'], meta: { name: 'ProcessedPost' } }
    /**
     * Find zero or one ProcessedPost that matches the filter.
     * @param {ProcessedPostFindUniqueArgs} args - Arguments to find a ProcessedPost
     * @example
     * // Get one ProcessedPost
     * const processedPost = await prisma.processedPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProcessedPostFindUniqueArgs>(args: SelectSubset<T, ProcessedPostFindUniqueArgs<ExtArgs>>): Prisma__ProcessedPostClient<$Result.GetResult<Prisma.$ProcessedPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProcessedPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProcessedPostFindUniqueOrThrowArgs} args - Arguments to find a ProcessedPost
     * @example
     * // Get one ProcessedPost
     * const processedPost = await prisma.processedPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProcessedPostFindUniqueOrThrowArgs>(args: SelectSubset<T, ProcessedPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProcessedPostClient<$Result.GetResult<Prisma.$ProcessedPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProcessedPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessedPostFindFirstArgs} args - Arguments to find a ProcessedPost
     * @example
     * // Get one ProcessedPost
     * const processedPost = await prisma.processedPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProcessedPostFindFirstArgs>(args?: SelectSubset<T, ProcessedPostFindFirstArgs<ExtArgs>>): Prisma__ProcessedPostClient<$Result.GetResult<Prisma.$ProcessedPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProcessedPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessedPostFindFirstOrThrowArgs} args - Arguments to find a ProcessedPost
     * @example
     * // Get one ProcessedPost
     * const processedPost = await prisma.processedPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProcessedPostFindFirstOrThrowArgs>(args?: SelectSubset<T, ProcessedPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProcessedPostClient<$Result.GetResult<Prisma.$ProcessedPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProcessedPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessedPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProcessedPosts
     * const processedPosts = await prisma.processedPost.findMany()
     * 
     * // Get first 10 ProcessedPosts
     * const processedPosts = await prisma.processedPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const processedPostWithIdOnly = await prisma.processedPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProcessedPostFindManyArgs>(args?: SelectSubset<T, ProcessedPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessedPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProcessedPost.
     * @param {ProcessedPostCreateArgs} args - Arguments to create a ProcessedPost.
     * @example
     * // Create one ProcessedPost
     * const ProcessedPost = await prisma.processedPost.create({
     *   data: {
     *     // ... data to create a ProcessedPost
     *   }
     * })
     * 
     */
    create<T extends ProcessedPostCreateArgs>(args: SelectSubset<T, ProcessedPostCreateArgs<ExtArgs>>): Prisma__ProcessedPostClient<$Result.GetResult<Prisma.$ProcessedPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProcessedPosts.
     * @param {ProcessedPostCreateManyArgs} args - Arguments to create many ProcessedPosts.
     * @example
     * // Create many ProcessedPosts
     * const processedPost = await prisma.processedPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProcessedPostCreateManyArgs>(args?: SelectSubset<T, ProcessedPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProcessedPosts and returns the data saved in the database.
     * @param {ProcessedPostCreateManyAndReturnArgs} args - Arguments to create many ProcessedPosts.
     * @example
     * // Create many ProcessedPosts
     * const processedPost = await prisma.processedPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProcessedPosts and only return the `id`
     * const processedPostWithIdOnly = await prisma.processedPost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProcessedPostCreateManyAndReturnArgs>(args?: SelectSubset<T, ProcessedPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessedPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProcessedPost.
     * @param {ProcessedPostDeleteArgs} args - Arguments to delete one ProcessedPost.
     * @example
     * // Delete one ProcessedPost
     * const ProcessedPost = await prisma.processedPost.delete({
     *   where: {
     *     // ... filter to delete one ProcessedPost
     *   }
     * })
     * 
     */
    delete<T extends ProcessedPostDeleteArgs>(args: SelectSubset<T, ProcessedPostDeleteArgs<ExtArgs>>): Prisma__ProcessedPostClient<$Result.GetResult<Prisma.$ProcessedPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProcessedPost.
     * @param {ProcessedPostUpdateArgs} args - Arguments to update one ProcessedPost.
     * @example
     * // Update one ProcessedPost
     * const processedPost = await prisma.processedPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProcessedPostUpdateArgs>(args: SelectSubset<T, ProcessedPostUpdateArgs<ExtArgs>>): Prisma__ProcessedPostClient<$Result.GetResult<Prisma.$ProcessedPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProcessedPosts.
     * @param {ProcessedPostDeleteManyArgs} args - Arguments to filter ProcessedPosts to delete.
     * @example
     * // Delete a few ProcessedPosts
     * const { count } = await prisma.processedPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProcessedPostDeleteManyArgs>(args?: SelectSubset<T, ProcessedPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProcessedPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessedPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProcessedPosts
     * const processedPost = await prisma.processedPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProcessedPostUpdateManyArgs>(args: SelectSubset<T, ProcessedPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProcessedPosts and returns the data updated in the database.
     * @param {ProcessedPostUpdateManyAndReturnArgs} args - Arguments to update many ProcessedPosts.
     * @example
     * // Update many ProcessedPosts
     * const processedPost = await prisma.processedPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProcessedPosts and only return the `id`
     * const processedPostWithIdOnly = await prisma.processedPost.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProcessedPostUpdateManyAndReturnArgs>(args: SelectSubset<T, ProcessedPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessedPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProcessedPost.
     * @param {ProcessedPostUpsertArgs} args - Arguments to update or create a ProcessedPost.
     * @example
     * // Update or create a ProcessedPost
     * const processedPost = await prisma.processedPost.upsert({
     *   create: {
     *     // ... data to create a ProcessedPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProcessedPost we want to update
     *   }
     * })
     */
    upsert<T extends ProcessedPostUpsertArgs>(args: SelectSubset<T, ProcessedPostUpsertArgs<ExtArgs>>): Prisma__ProcessedPostClient<$Result.GetResult<Prisma.$ProcessedPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProcessedPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessedPostCountArgs} args - Arguments to filter ProcessedPosts to count.
     * @example
     * // Count the number of ProcessedPosts
     * const count = await prisma.processedPost.count({
     *   where: {
     *     // ... the filter for the ProcessedPosts we want to count
     *   }
     * })
    **/
    count<T extends ProcessedPostCountArgs>(
      args?: Subset<T, ProcessedPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProcessedPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProcessedPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessedPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProcessedPostAggregateArgs>(args: Subset<T, ProcessedPostAggregateArgs>): Prisma.PrismaPromise<GetProcessedPostAggregateType<T>>

    /**
     * Group by ProcessedPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessedPostGroupByArgs} args - Group by arguments.
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
      T extends ProcessedPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProcessedPostGroupByArgs['orderBy'] }
        : { orderBy?: ProcessedPostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProcessedPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProcessedPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProcessedPost model
   */
  readonly fields: ProcessedPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProcessedPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProcessedPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    socialPosts<T extends ProcessedPost$socialPostsArgs<ExtArgs> = {}>(args?: Subset<T, ProcessedPost$socialPostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ProcessedPost model
   */
  interface ProcessedPostFieldRefs {
    readonly id: FieldRef<"ProcessedPost", 'String'>
    readonly originalUrl: FieldRef<"ProcessedPost", 'String'>
    readonly summary: FieldRef<"ProcessedPost", 'String'>
    readonly createdAt: FieldRef<"ProcessedPost", 'DateTime'>
    readonly updatedAt: FieldRef<"ProcessedPost", 'DateTime'>
    readonly userId: FieldRef<"ProcessedPost", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProcessedPost findUnique
   */
  export type ProcessedPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedPost
     */
    select?: ProcessedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedPost
     */
    omit?: ProcessedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessedPostInclude<ExtArgs> | null
    /**
     * Filter, which ProcessedPost to fetch.
     */
    where: ProcessedPostWhereUniqueInput
  }

  /**
   * ProcessedPost findUniqueOrThrow
   */
  export type ProcessedPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedPost
     */
    select?: ProcessedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedPost
     */
    omit?: ProcessedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessedPostInclude<ExtArgs> | null
    /**
     * Filter, which ProcessedPost to fetch.
     */
    where: ProcessedPostWhereUniqueInput
  }

  /**
   * ProcessedPost findFirst
   */
  export type ProcessedPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedPost
     */
    select?: ProcessedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedPost
     */
    omit?: ProcessedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessedPostInclude<ExtArgs> | null
    /**
     * Filter, which ProcessedPost to fetch.
     */
    where?: ProcessedPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcessedPosts to fetch.
     */
    orderBy?: ProcessedPostOrderByWithRelationInput | ProcessedPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProcessedPosts.
     */
    cursor?: ProcessedPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcessedPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcessedPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProcessedPosts.
     */
    distinct?: ProcessedPostScalarFieldEnum | ProcessedPostScalarFieldEnum[]
  }

  /**
   * ProcessedPost findFirstOrThrow
   */
  export type ProcessedPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedPost
     */
    select?: ProcessedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedPost
     */
    omit?: ProcessedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessedPostInclude<ExtArgs> | null
    /**
     * Filter, which ProcessedPost to fetch.
     */
    where?: ProcessedPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcessedPosts to fetch.
     */
    orderBy?: ProcessedPostOrderByWithRelationInput | ProcessedPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProcessedPosts.
     */
    cursor?: ProcessedPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcessedPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcessedPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProcessedPosts.
     */
    distinct?: ProcessedPostScalarFieldEnum | ProcessedPostScalarFieldEnum[]
  }

  /**
   * ProcessedPost findMany
   */
  export type ProcessedPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedPost
     */
    select?: ProcessedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedPost
     */
    omit?: ProcessedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessedPostInclude<ExtArgs> | null
    /**
     * Filter, which ProcessedPosts to fetch.
     */
    where?: ProcessedPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcessedPosts to fetch.
     */
    orderBy?: ProcessedPostOrderByWithRelationInput | ProcessedPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProcessedPosts.
     */
    cursor?: ProcessedPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcessedPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcessedPosts.
     */
    skip?: number
    distinct?: ProcessedPostScalarFieldEnum | ProcessedPostScalarFieldEnum[]
  }

  /**
   * ProcessedPost create
   */
  export type ProcessedPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedPost
     */
    select?: ProcessedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedPost
     */
    omit?: ProcessedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessedPostInclude<ExtArgs> | null
    /**
     * The data needed to create a ProcessedPost.
     */
    data: XOR<ProcessedPostCreateInput, ProcessedPostUncheckedCreateInput>
  }

  /**
   * ProcessedPost createMany
   */
  export type ProcessedPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProcessedPosts.
     */
    data: ProcessedPostCreateManyInput | ProcessedPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProcessedPost createManyAndReturn
   */
  export type ProcessedPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedPost
     */
    select?: ProcessedPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedPost
     */
    omit?: ProcessedPostOmit<ExtArgs> | null
    /**
     * The data used to create many ProcessedPosts.
     */
    data: ProcessedPostCreateManyInput | ProcessedPostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessedPostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProcessedPost update
   */
  export type ProcessedPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedPost
     */
    select?: ProcessedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedPost
     */
    omit?: ProcessedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessedPostInclude<ExtArgs> | null
    /**
     * The data needed to update a ProcessedPost.
     */
    data: XOR<ProcessedPostUpdateInput, ProcessedPostUncheckedUpdateInput>
    /**
     * Choose, which ProcessedPost to update.
     */
    where: ProcessedPostWhereUniqueInput
  }

  /**
   * ProcessedPost updateMany
   */
  export type ProcessedPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProcessedPosts.
     */
    data: XOR<ProcessedPostUpdateManyMutationInput, ProcessedPostUncheckedUpdateManyInput>
    /**
     * Filter which ProcessedPosts to update
     */
    where?: ProcessedPostWhereInput
    /**
     * Limit how many ProcessedPosts to update.
     */
    limit?: number
  }

  /**
   * ProcessedPost updateManyAndReturn
   */
  export type ProcessedPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedPost
     */
    select?: ProcessedPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedPost
     */
    omit?: ProcessedPostOmit<ExtArgs> | null
    /**
     * The data used to update ProcessedPosts.
     */
    data: XOR<ProcessedPostUpdateManyMutationInput, ProcessedPostUncheckedUpdateManyInput>
    /**
     * Filter which ProcessedPosts to update
     */
    where?: ProcessedPostWhereInput
    /**
     * Limit how many ProcessedPosts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessedPostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProcessedPost upsert
   */
  export type ProcessedPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedPost
     */
    select?: ProcessedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedPost
     */
    omit?: ProcessedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessedPostInclude<ExtArgs> | null
    /**
     * The filter to search for the ProcessedPost to update in case it exists.
     */
    where: ProcessedPostWhereUniqueInput
    /**
     * In case the ProcessedPost found by the `where` argument doesn't exist, create a new ProcessedPost with this data.
     */
    create: XOR<ProcessedPostCreateInput, ProcessedPostUncheckedCreateInput>
    /**
     * In case the ProcessedPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProcessedPostUpdateInput, ProcessedPostUncheckedUpdateInput>
  }

  /**
   * ProcessedPost delete
   */
  export type ProcessedPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedPost
     */
    select?: ProcessedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedPost
     */
    omit?: ProcessedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessedPostInclude<ExtArgs> | null
    /**
     * Filter which ProcessedPost to delete.
     */
    where: ProcessedPostWhereUniqueInput
  }

  /**
   * ProcessedPost deleteMany
   */
  export type ProcessedPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProcessedPosts to delete
     */
    where?: ProcessedPostWhereInput
    /**
     * Limit how many ProcessedPosts to delete.
     */
    limit?: number
  }

  /**
   * ProcessedPost.socialPosts
   */
  export type ProcessedPost$socialPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPost
     */
    select?: SocialPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialPost
     */
    omit?: SocialPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialPostInclude<ExtArgs> | null
    where?: SocialPostWhereInput
    orderBy?: SocialPostOrderByWithRelationInput | SocialPostOrderByWithRelationInput[]
    cursor?: SocialPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SocialPostScalarFieldEnum | SocialPostScalarFieldEnum[]
  }

  /**
   * ProcessedPost without action
   */
  export type ProcessedPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessedPost
     */
    select?: ProcessedPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcessedPost
     */
    omit?: ProcessedPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessedPostInclude<ExtArgs> | null
  }


  /**
   * Model SocialPost
   */

  export type AggregateSocialPost = {
    _count: SocialPostCountAggregateOutputType | null
    _min: SocialPostMinAggregateOutputType | null
    _max: SocialPostMaxAggregateOutputType | null
  }

  export type SocialPostMinAggregateOutputType = {
    id: string | null
    platform: string | null
    scheduledTime: Date | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    processedPostId: string | null
  }

  export type SocialPostMaxAggregateOutputType = {
    id: string | null
    platform: string | null
    scheduledTime: Date | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    processedPostId: string | null
  }

  export type SocialPostCountAggregateOutputType = {
    id: number
    platform: number
    scheduledTime: number
    status: number
    createdAt: number
    updatedAt: number
    processedPostId: number
    _all: number
  }


  export type SocialPostMinAggregateInputType = {
    id?: true
    platform?: true
    scheduledTime?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    processedPostId?: true
  }

  export type SocialPostMaxAggregateInputType = {
    id?: true
    platform?: true
    scheduledTime?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    processedPostId?: true
  }

  export type SocialPostCountAggregateInputType = {
    id?: true
    platform?: true
    scheduledTime?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    processedPostId?: true
    _all?: true
  }

  export type SocialPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialPost to aggregate.
     */
    where?: SocialPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialPosts to fetch.
     */
    orderBy?: SocialPostOrderByWithRelationInput | SocialPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SocialPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SocialPosts
    **/
    _count?: true | SocialPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SocialPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SocialPostMaxAggregateInputType
  }

  export type GetSocialPostAggregateType<T extends SocialPostAggregateArgs> = {
        [P in keyof T & keyof AggregateSocialPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSocialPost[P]>
      : GetScalarType<T[P], AggregateSocialPost[P]>
  }




  export type SocialPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialPostWhereInput
    orderBy?: SocialPostOrderByWithAggregationInput | SocialPostOrderByWithAggregationInput[]
    by: SocialPostScalarFieldEnum[] | SocialPostScalarFieldEnum
    having?: SocialPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SocialPostCountAggregateInputType | true
    _min?: SocialPostMinAggregateInputType
    _max?: SocialPostMaxAggregateInputType
  }

  export type SocialPostGroupByOutputType = {
    id: string
    platform: string
    scheduledTime: Date | null
    status: string
    createdAt: Date
    updatedAt: Date
    processedPostId: string
    _count: SocialPostCountAggregateOutputType | null
    _min: SocialPostMinAggregateOutputType | null
    _max: SocialPostMaxAggregateOutputType | null
  }

  type GetSocialPostGroupByPayload<T extends SocialPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SocialPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SocialPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SocialPostGroupByOutputType[P]>
            : GetScalarType<T[P], SocialPostGroupByOutputType[P]>
        }
      >
    >


  export type SocialPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platform?: boolean
    scheduledTime?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    processedPostId?: boolean
    processedPost?: boolean | ProcessedPostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialPost"]>

  export type SocialPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platform?: boolean
    scheduledTime?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    processedPostId?: boolean
    processedPost?: boolean | ProcessedPostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialPost"]>

  export type SocialPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platform?: boolean
    scheduledTime?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    processedPostId?: boolean
    processedPost?: boolean | ProcessedPostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialPost"]>

  export type SocialPostSelectScalar = {
    id?: boolean
    platform?: boolean
    scheduledTime?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    processedPostId?: boolean
  }

  export type SocialPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "platform" | "scheduledTime" | "status" | "createdAt" | "updatedAt" | "processedPostId", ExtArgs["result"]["socialPost"]>
  export type SocialPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    processedPost?: boolean | ProcessedPostDefaultArgs<ExtArgs>
  }
  export type SocialPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    processedPost?: boolean | ProcessedPostDefaultArgs<ExtArgs>
  }
  export type SocialPostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    processedPost?: boolean | ProcessedPostDefaultArgs<ExtArgs>
  }

  export type $SocialPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SocialPost"
    objects: {
      processedPost: Prisma.$ProcessedPostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      platform: string
      scheduledTime: Date | null
      status: string
      createdAt: Date
      updatedAt: Date
      processedPostId: string
    }, ExtArgs["result"]["socialPost"]>
    composites: {}
  }

  type SocialPostGetPayload<S extends boolean | null | undefined | SocialPostDefaultArgs> = $Result.GetResult<Prisma.$SocialPostPayload, S>

  type SocialPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SocialPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SocialPostCountAggregateInputType | true
    }

  export interface SocialPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SocialPost'], meta: { name: 'SocialPost' } }
    /**
     * Find zero or one SocialPost that matches the filter.
     * @param {SocialPostFindUniqueArgs} args - Arguments to find a SocialPost
     * @example
     * // Get one SocialPost
     * const socialPost = await prisma.socialPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SocialPostFindUniqueArgs>(args: SelectSubset<T, SocialPostFindUniqueArgs<ExtArgs>>): Prisma__SocialPostClient<$Result.GetResult<Prisma.$SocialPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SocialPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SocialPostFindUniqueOrThrowArgs} args - Arguments to find a SocialPost
     * @example
     * // Get one SocialPost
     * const socialPost = await prisma.socialPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SocialPostFindUniqueOrThrowArgs>(args: SelectSubset<T, SocialPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SocialPostClient<$Result.GetResult<Prisma.$SocialPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialPostFindFirstArgs} args - Arguments to find a SocialPost
     * @example
     * // Get one SocialPost
     * const socialPost = await prisma.socialPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SocialPostFindFirstArgs>(args?: SelectSubset<T, SocialPostFindFirstArgs<ExtArgs>>): Prisma__SocialPostClient<$Result.GetResult<Prisma.$SocialPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialPostFindFirstOrThrowArgs} args - Arguments to find a SocialPost
     * @example
     * // Get one SocialPost
     * const socialPost = await prisma.socialPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SocialPostFindFirstOrThrowArgs>(args?: SelectSubset<T, SocialPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__SocialPostClient<$Result.GetResult<Prisma.$SocialPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SocialPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SocialPosts
     * const socialPosts = await prisma.socialPost.findMany()
     * 
     * // Get first 10 SocialPosts
     * const socialPosts = await prisma.socialPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const socialPostWithIdOnly = await prisma.socialPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SocialPostFindManyArgs>(args?: SelectSubset<T, SocialPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SocialPost.
     * @param {SocialPostCreateArgs} args - Arguments to create a SocialPost.
     * @example
     * // Create one SocialPost
     * const SocialPost = await prisma.socialPost.create({
     *   data: {
     *     // ... data to create a SocialPost
     *   }
     * })
     * 
     */
    create<T extends SocialPostCreateArgs>(args: SelectSubset<T, SocialPostCreateArgs<ExtArgs>>): Prisma__SocialPostClient<$Result.GetResult<Prisma.$SocialPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SocialPosts.
     * @param {SocialPostCreateManyArgs} args - Arguments to create many SocialPosts.
     * @example
     * // Create many SocialPosts
     * const socialPost = await prisma.socialPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SocialPostCreateManyArgs>(args?: SelectSubset<T, SocialPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SocialPosts and returns the data saved in the database.
     * @param {SocialPostCreateManyAndReturnArgs} args - Arguments to create many SocialPosts.
     * @example
     * // Create many SocialPosts
     * const socialPost = await prisma.socialPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SocialPosts and only return the `id`
     * const socialPostWithIdOnly = await prisma.socialPost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SocialPostCreateManyAndReturnArgs>(args?: SelectSubset<T, SocialPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SocialPost.
     * @param {SocialPostDeleteArgs} args - Arguments to delete one SocialPost.
     * @example
     * // Delete one SocialPost
     * const SocialPost = await prisma.socialPost.delete({
     *   where: {
     *     // ... filter to delete one SocialPost
     *   }
     * })
     * 
     */
    delete<T extends SocialPostDeleteArgs>(args: SelectSubset<T, SocialPostDeleteArgs<ExtArgs>>): Prisma__SocialPostClient<$Result.GetResult<Prisma.$SocialPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SocialPost.
     * @param {SocialPostUpdateArgs} args - Arguments to update one SocialPost.
     * @example
     * // Update one SocialPost
     * const socialPost = await prisma.socialPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SocialPostUpdateArgs>(args: SelectSubset<T, SocialPostUpdateArgs<ExtArgs>>): Prisma__SocialPostClient<$Result.GetResult<Prisma.$SocialPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SocialPosts.
     * @param {SocialPostDeleteManyArgs} args - Arguments to filter SocialPosts to delete.
     * @example
     * // Delete a few SocialPosts
     * const { count } = await prisma.socialPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SocialPostDeleteManyArgs>(args?: SelectSubset<T, SocialPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SocialPosts
     * const socialPost = await prisma.socialPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SocialPostUpdateManyArgs>(args: SelectSubset<T, SocialPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialPosts and returns the data updated in the database.
     * @param {SocialPostUpdateManyAndReturnArgs} args - Arguments to update many SocialPosts.
     * @example
     * // Update many SocialPosts
     * const socialPost = await prisma.socialPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SocialPosts and only return the `id`
     * const socialPostWithIdOnly = await prisma.socialPost.updateManyAndReturn({
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
    updateManyAndReturn<T extends SocialPostUpdateManyAndReturnArgs>(args: SelectSubset<T, SocialPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SocialPost.
     * @param {SocialPostUpsertArgs} args - Arguments to update or create a SocialPost.
     * @example
     * // Update or create a SocialPost
     * const socialPost = await prisma.socialPost.upsert({
     *   create: {
     *     // ... data to create a SocialPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SocialPost we want to update
     *   }
     * })
     */
    upsert<T extends SocialPostUpsertArgs>(args: SelectSubset<T, SocialPostUpsertArgs<ExtArgs>>): Prisma__SocialPostClient<$Result.GetResult<Prisma.$SocialPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SocialPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialPostCountArgs} args - Arguments to filter SocialPosts to count.
     * @example
     * // Count the number of SocialPosts
     * const count = await prisma.socialPost.count({
     *   where: {
     *     // ... the filter for the SocialPosts we want to count
     *   }
     * })
    **/
    count<T extends SocialPostCountArgs>(
      args?: Subset<T, SocialPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SocialPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SocialPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SocialPostAggregateArgs>(args: Subset<T, SocialPostAggregateArgs>): Prisma.PrismaPromise<GetSocialPostAggregateType<T>>

    /**
     * Group by SocialPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialPostGroupByArgs} args - Group by arguments.
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
      T extends SocialPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SocialPostGroupByArgs['orderBy'] }
        : { orderBy?: SocialPostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SocialPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocialPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SocialPost model
   */
  readonly fields: SocialPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SocialPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SocialPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    processedPost<T extends ProcessedPostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProcessedPostDefaultArgs<ExtArgs>>): Prisma__ProcessedPostClient<$Result.GetResult<Prisma.$ProcessedPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SocialPost model
   */
  interface SocialPostFieldRefs {
    readonly id: FieldRef<"SocialPost", 'String'>
    readonly platform: FieldRef<"SocialPost", 'String'>
    readonly scheduledTime: FieldRef<"SocialPost", 'DateTime'>
    readonly status: FieldRef<"SocialPost", 'String'>
    readonly createdAt: FieldRef<"SocialPost", 'DateTime'>
    readonly updatedAt: FieldRef<"SocialPost", 'DateTime'>
    readonly processedPostId: FieldRef<"SocialPost", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SocialPost findUnique
   */
  export type SocialPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPost
     */
    select?: SocialPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialPost
     */
    omit?: SocialPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialPostInclude<ExtArgs> | null
    /**
     * Filter, which SocialPost to fetch.
     */
    where: SocialPostWhereUniqueInput
  }

  /**
   * SocialPost findUniqueOrThrow
   */
  export type SocialPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPost
     */
    select?: SocialPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialPost
     */
    omit?: SocialPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialPostInclude<ExtArgs> | null
    /**
     * Filter, which SocialPost to fetch.
     */
    where: SocialPostWhereUniqueInput
  }

  /**
   * SocialPost findFirst
   */
  export type SocialPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPost
     */
    select?: SocialPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialPost
     */
    omit?: SocialPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialPostInclude<ExtArgs> | null
    /**
     * Filter, which SocialPost to fetch.
     */
    where?: SocialPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialPosts to fetch.
     */
    orderBy?: SocialPostOrderByWithRelationInput | SocialPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialPosts.
     */
    cursor?: SocialPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialPosts.
     */
    distinct?: SocialPostScalarFieldEnum | SocialPostScalarFieldEnum[]
  }

  /**
   * SocialPost findFirstOrThrow
   */
  export type SocialPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPost
     */
    select?: SocialPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialPost
     */
    omit?: SocialPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialPostInclude<ExtArgs> | null
    /**
     * Filter, which SocialPost to fetch.
     */
    where?: SocialPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialPosts to fetch.
     */
    orderBy?: SocialPostOrderByWithRelationInput | SocialPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialPosts.
     */
    cursor?: SocialPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialPosts.
     */
    distinct?: SocialPostScalarFieldEnum | SocialPostScalarFieldEnum[]
  }

  /**
   * SocialPost findMany
   */
  export type SocialPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPost
     */
    select?: SocialPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialPost
     */
    omit?: SocialPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialPostInclude<ExtArgs> | null
    /**
     * Filter, which SocialPosts to fetch.
     */
    where?: SocialPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialPosts to fetch.
     */
    orderBy?: SocialPostOrderByWithRelationInput | SocialPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SocialPosts.
     */
    cursor?: SocialPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialPosts.
     */
    skip?: number
    distinct?: SocialPostScalarFieldEnum | SocialPostScalarFieldEnum[]
  }

  /**
   * SocialPost create
   */
  export type SocialPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPost
     */
    select?: SocialPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialPost
     */
    omit?: SocialPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialPostInclude<ExtArgs> | null
    /**
     * The data needed to create a SocialPost.
     */
    data: XOR<SocialPostCreateInput, SocialPostUncheckedCreateInput>
  }

  /**
   * SocialPost createMany
   */
  export type SocialPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SocialPosts.
     */
    data: SocialPostCreateManyInput | SocialPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SocialPost createManyAndReturn
   */
  export type SocialPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPost
     */
    select?: SocialPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SocialPost
     */
    omit?: SocialPostOmit<ExtArgs> | null
    /**
     * The data used to create many SocialPosts.
     */
    data: SocialPostCreateManyInput | SocialPostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialPostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SocialPost update
   */
  export type SocialPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPost
     */
    select?: SocialPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialPost
     */
    omit?: SocialPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialPostInclude<ExtArgs> | null
    /**
     * The data needed to update a SocialPost.
     */
    data: XOR<SocialPostUpdateInput, SocialPostUncheckedUpdateInput>
    /**
     * Choose, which SocialPost to update.
     */
    where: SocialPostWhereUniqueInput
  }

  /**
   * SocialPost updateMany
   */
  export type SocialPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SocialPosts.
     */
    data: XOR<SocialPostUpdateManyMutationInput, SocialPostUncheckedUpdateManyInput>
    /**
     * Filter which SocialPosts to update
     */
    where?: SocialPostWhereInput
    /**
     * Limit how many SocialPosts to update.
     */
    limit?: number
  }

  /**
   * SocialPost updateManyAndReturn
   */
  export type SocialPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPost
     */
    select?: SocialPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SocialPost
     */
    omit?: SocialPostOmit<ExtArgs> | null
    /**
     * The data used to update SocialPosts.
     */
    data: XOR<SocialPostUpdateManyMutationInput, SocialPostUncheckedUpdateManyInput>
    /**
     * Filter which SocialPosts to update
     */
    where?: SocialPostWhereInput
    /**
     * Limit how many SocialPosts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialPostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SocialPost upsert
   */
  export type SocialPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPost
     */
    select?: SocialPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialPost
     */
    omit?: SocialPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialPostInclude<ExtArgs> | null
    /**
     * The filter to search for the SocialPost to update in case it exists.
     */
    where: SocialPostWhereUniqueInput
    /**
     * In case the SocialPost found by the `where` argument doesn't exist, create a new SocialPost with this data.
     */
    create: XOR<SocialPostCreateInput, SocialPostUncheckedCreateInput>
    /**
     * In case the SocialPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SocialPostUpdateInput, SocialPostUncheckedUpdateInput>
  }

  /**
   * SocialPost delete
   */
  export type SocialPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPost
     */
    select?: SocialPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialPost
     */
    omit?: SocialPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialPostInclude<ExtArgs> | null
    /**
     * Filter which SocialPost to delete.
     */
    where: SocialPostWhereUniqueInput
  }

  /**
   * SocialPost deleteMany
   */
  export type SocialPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialPosts to delete
     */
    where?: SocialPostWhereInput
    /**
     * Limit how many SocialPosts to delete.
     */
    limit?: number
  }

  /**
   * SocialPost without action
   */
  export type SocialPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPost
     */
    select?: SocialPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialPost
     */
    omit?: SocialPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialPostInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    authProvider: 'authProvider',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProcessedPostScalarFieldEnum: {
    id: 'id',
    originalUrl: 'originalUrl',
    summary: 'summary',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type ProcessedPostScalarFieldEnum = (typeof ProcessedPostScalarFieldEnum)[keyof typeof ProcessedPostScalarFieldEnum]


  export const SocialPostScalarFieldEnum: {
    id: 'id',
    platform: 'platform',
    scheduledTime: 'scheduledTime',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    processedPostId: 'processedPostId'
  };

  export type SocialPostScalarFieldEnum = (typeof SocialPostScalarFieldEnum)[keyof typeof SocialPostScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    authProvider?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    processedPosts?: ProcessedPostListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    authProvider?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    processedPosts?: ProcessedPostOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    authProvider?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    processedPosts?: ProcessedPostListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    authProvider?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    authProvider?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProcessedPostWhereInput = {
    AND?: ProcessedPostWhereInput | ProcessedPostWhereInput[]
    OR?: ProcessedPostWhereInput[]
    NOT?: ProcessedPostWhereInput | ProcessedPostWhereInput[]
    id?: StringFilter<"ProcessedPost"> | string
    originalUrl?: StringFilter<"ProcessedPost"> | string
    summary?: StringFilter<"ProcessedPost"> | string
    createdAt?: DateTimeFilter<"ProcessedPost"> | Date | string
    updatedAt?: DateTimeFilter<"ProcessedPost"> | Date | string
    userId?: StringFilter<"ProcessedPost"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    socialPosts?: SocialPostListRelationFilter
  }

  export type ProcessedPostOrderByWithRelationInput = {
    id?: SortOrder
    originalUrl?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    socialPosts?: SocialPostOrderByRelationAggregateInput
  }

  export type ProcessedPostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProcessedPostWhereInput | ProcessedPostWhereInput[]
    OR?: ProcessedPostWhereInput[]
    NOT?: ProcessedPostWhereInput | ProcessedPostWhereInput[]
    originalUrl?: StringFilter<"ProcessedPost"> | string
    summary?: StringFilter<"ProcessedPost"> | string
    createdAt?: DateTimeFilter<"ProcessedPost"> | Date | string
    updatedAt?: DateTimeFilter<"ProcessedPost"> | Date | string
    userId?: StringFilter<"ProcessedPost"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    socialPosts?: SocialPostListRelationFilter
  }, "id">

  export type ProcessedPostOrderByWithAggregationInput = {
    id?: SortOrder
    originalUrl?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: ProcessedPostCountOrderByAggregateInput
    _max?: ProcessedPostMaxOrderByAggregateInput
    _min?: ProcessedPostMinOrderByAggregateInput
  }

  export type ProcessedPostScalarWhereWithAggregatesInput = {
    AND?: ProcessedPostScalarWhereWithAggregatesInput | ProcessedPostScalarWhereWithAggregatesInput[]
    OR?: ProcessedPostScalarWhereWithAggregatesInput[]
    NOT?: ProcessedPostScalarWhereWithAggregatesInput | ProcessedPostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProcessedPost"> | string
    originalUrl?: StringWithAggregatesFilter<"ProcessedPost"> | string
    summary?: StringWithAggregatesFilter<"ProcessedPost"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProcessedPost"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProcessedPost"> | Date | string
    userId?: StringWithAggregatesFilter<"ProcessedPost"> | string
  }

  export type SocialPostWhereInput = {
    AND?: SocialPostWhereInput | SocialPostWhereInput[]
    OR?: SocialPostWhereInput[]
    NOT?: SocialPostWhereInput | SocialPostWhereInput[]
    id?: StringFilter<"SocialPost"> | string
    platform?: StringFilter<"SocialPost"> | string
    scheduledTime?: DateTimeNullableFilter<"SocialPost"> | Date | string | null
    status?: StringFilter<"SocialPost"> | string
    createdAt?: DateTimeFilter<"SocialPost"> | Date | string
    updatedAt?: DateTimeFilter<"SocialPost"> | Date | string
    processedPostId?: StringFilter<"SocialPost"> | string
    processedPost?: XOR<ProcessedPostScalarRelationFilter, ProcessedPostWhereInput>
  }

  export type SocialPostOrderByWithRelationInput = {
    id?: SortOrder
    platform?: SortOrder
    scheduledTime?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    processedPostId?: SortOrder
    processedPost?: ProcessedPostOrderByWithRelationInput
  }

  export type SocialPostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SocialPostWhereInput | SocialPostWhereInput[]
    OR?: SocialPostWhereInput[]
    NOT?: SocialPostWhereInput | SocialPostWhereInput[]
    platform?: StringFilter<"SocialPost"> | string
    scheduledTime?: DateTimeNullableFilter<"SocialPost"> | Date | string | null
    status?: StringFilter<"SocialPost"> | string
    createdAt?: DateTimeFilter<"SocialPost"> | Date | string
    updatedAt?: DateTimeFilter<"SocialPost"> | Date | string
    processedPostId?: StringFilter<"SocialPost"> | string
    processedPost?: XOR<ProcessedPostScalarRelationFilter, ProcessedPostWhereInput>
  }, "id">

  export type SocialPostOrderByWithAggregationInput = {
    id?: SortOrder
    platform?: SortOrder
    scheduledTime?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    processedPostId?: SortOrder
    _count?: SocialPostCountOrderByAggregateInput
    _max?: SocialPostMaxOrderByAggregateInput
    _min?: SocialPostMinOrderByAggregateInput
  }

  export type SocialPostScalarWhereWithAggregatesInput = {
    AND?: SocialPostScalarWhereWithAggregatesInput | SocialPostScalarWhereWithAggregatesInput[]
    OR?: SocialPostScalarWhereWithAggregatesInput[]
    NOT?: SocialPostScalarWhereWithAggregatesInput | SocialPostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SocialPost"> | string
    platform?: StringWithAggregatesFilter<"SocialPost"> | string
    scheduledTime?: DateTimeNullableWithAggregatesFilter<"SocialPost"> | Date | string | null
    status?: StringWithAggregatesFilter<"SocialPost"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SocialPost"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SocialPost"> | Date | string
    processedPostId?: StringWithAggregatesFilter<"SocialPost"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    authProvider: string
    createdAt?: Date | string
    updatedAt?: Date | string
    processedPosts?: ProcessedPostCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    authProvider: string
    createdAt?: Date | string
    updatedAt?: Date | string
    processedPosts?: ProcessedPostUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    authProvider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedPosts?: ProcessedPostUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    authProvider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedPosts?: ProcessedPostUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    authProvider: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    authProvider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    authProvider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcessedPostCreateInput = {
    id?: string
    originalUrl: string
    summary: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProcessedPostsInput
    socialPosts?: SocialPostCreateNestedManyWithoutProcessedPostInput
  }

  export type ProcessedPostUncheckedCreateInput = {
    id?: string
    originalUrl: string
    summary: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    socialPosts?: SocialPostUncheckedCreateNestedManyWithoutProcessedPostInput
  }

  export type ProcessedPostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProcessedPostsNestedInput
    socialPosts?: SocialPostUpdateManyWithoutProcessedPostNestedInput
  }

  export type ProcessedPostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    socialPosts?: SocialPostUncheckedUpdateManyWithoutProcessedPostNestedInput
  }

  export type ProcessedPostCreateManyInput = {
    id?: string
    originalUrl: string
    summary: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ProcessedPostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcessedPostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SocialPostCreateInput = {
    id?: string
    platform: string
    scheduledTime?: Date | string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    processedPost: ProcessedPostCreateNestedOneWithoutSocialPostsInput
  }

  export type SocialPostUncheckedCreateInput = {
    id?: string
    platform: string
    scheduledTime?: Date | string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    processedPostId: string
  }

  export type SocialPostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    scheduledTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedPost?: ProcessedPostUpdateOneRequiredWithoutSocialPostsNestedInput
  }

  export type SocialPostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    scheduledTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedPostId?: StringFieldUpdateOperationsInput | string
  }

  export type SocialPostCreateManyInput = {
    id?: string
    platform: string
    scheduledTime?: Date | string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    processedPostId: string
  }

  export type SocialPostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    scheduledTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialPostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    scheduledTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processedPostId?: StringFieldUpdateOperationsInput | string
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProcessedPostListRelationFilter = {
    every?: ProcessedPostWhereInput
    some?: ProcessedPostWhereInput
    none?: ProcessedPostWhereInput
  }

  export type ProcessedPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    authProvider?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    authProvider?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    authProvider?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SocialPostListRelationFilter = {
    every?: SocialPostWhereInput
    some?: SocialPostWhereInput
    none?: SocialPostWhereInput
  }

  export type SocialPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProcessedPostCountOrderByAggregateInput = {
    id?: SortOrder
    originalUrl?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ProcessedPostMaxOrderByAggregateInput = {
    id?: SortOrder
    originalUrl?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ProcessedPostMinOrderByAggregateInput = {
    id?: SortOrder
    originalUrl?: SortOrder
    summary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ProcessedPostScalarRelationFilter = {
    is?: ProcessedPostWhereInput
    isNot?: ProcessedPostWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SocialPostCountOrderByAggregateInput = {
    id?: SortOrder
    platform?: SortOrder
    scheduledTime?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    processedPostId?: SortOrder
  }

  export type SocialPostMaxOrderByAggregateInput = {
    id?: SortOrder
    platform?: SortOrder
    scheduledTime?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    processedPostId?: SortOrder
  }

  export type SocialPostMinOrderByAggregateInput = {
    id?: SortOrder
    platform?: SortOrder
    scheduledTime?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    processedPostId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ProcessedPostCreateNestedManyWithoutUserInput = {
    create?: XOR<ProcessedPostCreateWithoutUserInput, ProcessedPostUncheckedCreateWithoutUserInput> | ProcessedPostCreateWithoutUserInput[] | ProcessedPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProcessedPostCreateOrConnectWithoutUserInput | ProcessedPostCreateOrConnectWithoutUserInput[]
    createMany?: ProcessedPostCreateManyUserInputEnvelope
    connect?: ProcessedPostWhereUniqueInput | ProcessedPostWhereUniqueInput[]
  }

  export type ProcessedPostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProcessedPostCreateWithoutUserInput, ProcessedPostUncheckedCreateWithoutUserInput> | ProcessedPostCreateWithoutUserInput[] | ProcessedPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProcessedPostCreateOrConnectWithoutUserInput | ProcessedPostCreateOrConnectWithoutUserInput[]
    createMany?: ProcessedPostCreateManyUserInputEnvelope
    connect?: ProcessedPostWhereUniqueInput | ProcessedPostWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProcessedPostUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProcessedPostCreateWithoutUserInput, ProcessedPostUncheckedCreateWithoutUserInput> | ProcessedPostCreateWithoutUserInput[] | ProcessedPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProcessedPostCreateOrConnectWithoutUserInput | ProcessedPostCreateOrConnectWithoutUserInput[]
    upsert?: ProcessedPostUpsertWithWhereUniqueWithoutUserInput | ProcessedPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProcessedPostCreateManyUserInputEnvelope
    set?: ProcessedPostWhereUniqueInput | ProcessedPostWhereUniqueInput[]
    disconnect?: ProcessedPostWhereUniqueInput | ProcessedPostWhereUniqueInput[]
    delete?: ProcessedPostWhereUniqueInput | ProcessedPostWhereUniqueInput[]
    connect?: ProcessedPostWhereUniqueInput | ProcessedPostWhereUniqueInput[]
    update?: ProcessedPostUpdateWithWhereUniqueWithoutUserInput | ProcessedPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProcessedPostUpdateManyWithWhereWithoutUserInput | ProcessedPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProcessedPostScalarWhereInput | ProcessedPostScalarWhereInput[]
  }

  export type ProcessedPostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProcessedPostCreateWithoutUserInput, ProcessedPostUncheckedCreateWithoutUserInput> | ProcessedPostCreateWithoutUserInput[] | ProcessedPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProcessedPostCreateOrConnectWithoutUserInput | ProcessedPostCreateOrConnectWithoutUserInput[]
    upsert?: ProcessedPostUpsertWithWhereUniqueWithoutUserInput | ProcessedPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProcessedPostCreateManyUserInputEnvelope
    set?: ProcessedPostWhereUniqueInput | ProcessedPostWhereUniqueInput[]
    disconnect?: ProcessedPostWhereUniqueInput | ProcessedPostWhereUniqueInput[]
    delete?: ProcessedPostWhereUniqueInput | ProcessedPostWhereUniqueInput[]
    connect?: ProcessedPostWhereUniqueInput | ProcessedPostWhereUniqueInput[]
    update?: ProcessedPostUpdateWithWhereUniqueWithoutUserInput | ProcessedPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProcessedPostUpdateManyWithWhereWithoutUserInput | ProcessedPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProcessedPostScalarWhereInput | ProcessedPostScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProcessedPostsInput = {
    create?: XOR<UserCreateWithoutProcessedPostsInput, UserUncheckedCreateWithoutProcessedPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProcessedPostsInput
    connect?: UserWhereUniqueInput
  }

  export type SocialPostCreateNestedManyWithoutProcessedPostInput = {
    create?: XOR<SocialPostCreateWithoutProcessedPostInput, SocialPostUncheckedCreateWithoutProcessedPostInput> | SocialPostCreateWithoutProcessedPostInput[] | SocialPostUncheckedCreateWithoutProcessedPostInput[]
    connectOrCreate?: SocialPostCreateOrConnectWithoutProcessedPostInput | SocialPostCreateOrConnectWithoutProcessedPostInput[]
    createMany?: SocialPostCreateManyProcessedPostInputEnvelope
    connect?: SocialPostWhereUniqueInput | SocialPostWhereUniqueInput[]
  }

  export type SocialPostUncheckedCreateNestedManyWithoutProcessedPostInput = {
    create?: XOR<SocialPostCreateWithoutProcessedPostInput, SocialPostUncheckedCreateWithoutProcessedPostInput> | SocialPostCreateWithoutProcessedPostInput[] | SocialPostUncheckedCreateWithoutProcessedPostInput[]
    connectOrCreate?: SocialPostCreateOrConnectWithoutProcessedPostInput | SocialPostCreateOrConnectWithoutProcessedPostInput[]
    createMany?: SocialPostCreateManyProcessedPostInputEnvelope
    connect?: SocialPostWhereUniqueInput | SocialPostWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutProcessedPostsNestedInput = {
    create?: XOR<UserCreateWithoutProcessedPostsInput, UserUncheckedCreateWithoutProcessedPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProcessedPostsInput
    upsert?: UserUpsertWithoutProcessedPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProcessedPostsInput, UserUpdateWithoutProcessedPostsInput>, UserUncheckedUpdateWithoutProcessedPostsInput>
  }

  export type SocialPostUpdateManyWithoutProcessedPostNestedInput = {
    create?: XOR<SocialPostCreateWithoutProcessedPostInput, SocialPostUncheckedCreateWithoutProcessedPostInput> | SocialPostCreateWithoutProcessedPostInput[] | SocialPostUncheckedCreateWithoutProcessedPostInput[]
    connectOrCreate?: SocialPostCreateOrConnectWithoutProcessedPostInput | SocialPostCreateOrConnectWithoutProcessedPostInput[]
    upsert?: SocialPostUpsertWithWhereUniqueWithoutProcessedPostInput | SocialPostUpsertWithWhereUniqueWithoutProcessedPostInput[]
    createMany?: SocialPostCreateManyProcessedPostInputEnvelope
    set?: SocialPostWhereUniqueInput | SocialPostWhereUniqueInput[]
    disconnect?: SocialPostWhereUniqueInput | SocialPostWhereUniqueInput[]
    delete?: SocialPostWhereUniqueInput | SocialPostWhereUniqueInput[]
    connect?: SocialPostWhereUniqueInput | SocialPostWhereUniqueInput[]
    update?: SocialPostUpdateWithWhereUniqueWithoutProcessedPostInput | SocialPostUpdateWithWhereUniqueWithoutProcessedPostInput[]
    updateMany?: SocialPostUpdateManyWithWhereWithoutProcessedPostInput | SocialPostUpdateManyWithWhereWithoutProcessedPostInput[]
    deleteMany?: SocialPostScalarWhereInput | SocialPostScalarWhereInput[]
  }

  export type SocialPostUncheckedUpdateManyWithoutProcessedPostNestedInput = {
    create?: XOR<SocialPostCreateWithoutProcessedPostInput, SocialPostUncheckedCreateWithoutProcessedPostInput> | SocialPostCreateWithoutProcessedPostInput[] | SocialPostUncheckedCreateWithoutProcessedPostInput[]
    connectOrCreate?: SocialPostCreateOrConnectWithoutProcessedPostInput | SocialPostCreateOrConnectWithoutProcessedPostInput[]
    upsert?: SocialPostUpsertWithWhereUniqueWithoutProcessedPostInput | SocialPostUpsertWithWhereUniqueWithoutProcessedPostInput[]
    createMany?: SocialPostCreateManyProcessedPostInputEnvelope
    set?: SocialPostWhereUniqueInput | SocialPostWhereUniqueInput[]
    disconnect?: SocialPostWhereUniqueInput | SocialPostWhereUniqueInput[]
    delete?: SocialPostWhereUniqueInput | SocialPostWhereUniqueInput[]
    connect?: SocialPostWhereUniqueInput | SocialPostWhereUniqueInput[]
    update?: SocialPostUpdateWithWhereUniqueWithoutProcessedPostInput | SocialPostUpdateWithWhereUniqueWithoutProcessedPostInput[]
    updateMany?: SocialPostUpdateManyWithWhereWithoutProcessedPostInput | SocialPostUpdateManyWithWhereWithoutProcessedPostInput[]
    deleteMany?: SocialPostScalarWhereInput | SocialPostScalarWhereInput[]
  }

  export type ProcessedPostCreateNestedOneWithoutSocialPostsInput = {
    create?: XOR<ProcessedPostCreateWithoutSocialPostsInput, ProcessedPostUncheckedCreateWithoutSocialPostsInput>
    connectOrCreate?: ProcessedPostCreateOrConnectWithoutSocialPostsInput
    connect?: ProcessedPostWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ProcessedPostUpdateOneRequiredWithoutSocialPostsNestedInput = {
    create?: XOR<ProcessedPostCreateWithoutSocialPostsInput, ProcessedPostUncheckedCreateWithoutSocialPostsInput>
    connectOrCreate?: ProcessedPostCreateOrConnectWithoutSocialPostsInput
    upsert?: ProcessedPostUpsertWithoutSocialPostsInput
    connect?: ProcessedPostWhereUniqueInput
    update?: XOR<XOR<ProcessedPostUpdateToOneWithWhereWithoutSocialPostsInput, ProcessedPostUpdateWithoutSocialPostsInput>, ProcessedPostUncheckedUpdateWithoutSocialPostsInput>
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ProcessedPostCreateWithoutUserInput = {
    id?: string
    originalUrl: string
    summary: string
    createdAt?: Date | string
    updatedAt?: Date | string
    socialPosts?: SocialPostCreateNestedManyWithoutProcessedPostInput
  }

  export type ProcessedPostUncheckedCreateWithoutUserInput = {
    id?: string
    originalUrl: string
    summary: string
    createdAt?: Date | string
    updatedAt?: Date | string
    socialPosts?: SocialPostUncheckedCreateNestedManyWithoutProcessedPostInput
  }

  export type ProcessedPostCreateOrConnectWithoutUserInput = {
    where: ProcessedPostWhereUniqueInput
    create: XOR<ProcessedPostCreateWithoutUserInput, ProcessedPostUncheckedCreateWithoutUserInput>
  }

  export type ProcessedPostCreateManyUserInputEnvelope = {
    data: ProcessedPostCreateManyUserInput | ProcessedPostCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProcessedPostUpsertWithWhereUniqueWithoutUserInput = {
    where: ProcessedPostWhereUniqueInput
    update: XOR<ProcessedPostUpdateWithoutUserInput, ProcessedPostUncheckedUpdateWithoutUserInput>
    create: XOR<ProcessedPostCreateWithoutUserInput, ProcessedPostUncheckedCreateWithoutUserInput>
  }

  export type ProcessedPostUpdateWithWhereUniqueWithoutUserInput = {
    where: ProcessedPostWhereUniqueInput
    data: XOR<ProcessedPostUpdateWithoutUserInput, ProcessedPostUncheckedUpdateWithoutUserInput>
  }

  export type ProcessedPostUpdateManyWithWhereWithoutUserInput = {
    where: ProcessedPostScalarWhereInput
    data: XOR<ProcessedPostUpdateManyMutationInput, ProcessedPostUncheckedUpdateManyWithoutUserInput>
  }

  export type ProcessedPostScalarWhereInput = {
    AND?: ProcessedPostScalarWhereInput | ProcessedPostScalarWhereInput[]
    OR?: ProcessedPostScalarWhereInput[]
    NOT?: ProcessedPostScalarWhereInput | ProcessedPostScalarWhereInput[]
    id?: StringFilter<"ProcessedPost"> | string
    originalUrl?: StringFilter<"ProcessedPost"> | string
    summary?: StringFilter<"ProcessedPost"> | string
    createdAt?: DateTimeFilter<"ProcessedPost"> | Date | string
    updatedAt?: DateTimeFilter<"ProcessedPost"> | Date | string
    userId?: StringFilter<"ProcessedPost"> | string
  }

  export type UserCreateWithoutProcessedPostsInput = {
    id?: string
    email: string
    authProvider: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutProcessedPostsInput = {
    id?: string
    email: string
    authProvider: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutProcessedPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProcessedPostsInput, UserUncheckedCreateWithoutProcessedPostsInput>
  }

  export type SocialPostCreateWithoutProcessedPostInput = {
    id?: string
    platform: string
    scheduledTime?: Date | string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SocialPostUncheckedCreateWithoutProcessedPostInput = {
    id?: string
    platform: string
    scheduledTime?: Date | string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SocialPostCreateOrConnectWithoutProcessedPostInput = {
    where: SocialPostWhereUniqueInput
    create: XOR<SocialPostCreateWithoutProcessedPostInput, SocialPostUncheckedCreateWithoutProcessedPostInput>
  }

  export type SocialPostCreateManyProcessedPostInputEnvelope = {
    data: SocialPostCreateManyProcessedPostInput | SocialPostCreateManyProcessedPostInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutProcessedPostsInput = {
    update: XOR<UserUpdateWithoutProcessedPostsInput, UserUncheckedUpdateWithoutProcessedPostsInput>
    create: XOR<UserCreateWithoutProcessedPostsInput, UserUncheckedCreateWithoutProcessedPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProcessedPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProcessedPostsInput, UserUncheckedUpdateWithoutProcessedPostsInput>
  }

  export type UserUpdateWithoutProcessedPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    authProvider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutProcessedPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    authProvider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialPostUpsertWithWhereUniqueWithoutProcessedPostInput = {
    where: SocialPostWhereUniqueInput
    update: XOR<SocialPostUpdateWithoutProcessedPostInput, SocialPostUncheckedUpdateWithoutProcessedPostInput>
    create: XOR<SocialPostCreateWithoutProcessedPostInput, SocialPostUncheckedCreateWithoutProcessedPostInput>
  }

  export type SocialPostUpdateWithWhereUniqueWithoutProcessedPostInput = {
    where: SocialPostWhereUniqueInput
    data: XOR<SocialPostUpdateWithoutProcessedPostInput, SocialPostUncheckedUpdateWithoutProcessedPostInput>
  }

  export type SocialPostUpdateManyWithWhereWithoutProcessedPostInput = {
    where: SocialPostScalarWhereInput
    data: XOR<SocialPostUpdateManyMutationInput, SocialPostUncheckedUpdateManyWithoutProcessedPostInput>
  }

  export type SocialPostScalarWhereInput = {
    AND?: SocialPostScalarWhereInput | SocialPostScalarWhereInput[]
    OR?: SocialPostScalarWhereInput[]
    NOT?: SocialPostScalarWhereInput | SocialPostScalarWhereInput[]
    id?: StringFilter<"SocialPost"> | string
    platform?: StringFilter<"SocialPost"> | string
    scheduledTime?: DateTimeNullableFilter<"SocialPost"> | Date | string | null
    status?: StringFilter<"SocialPost"> | string
    createdAt?: DateTimeFilter<"SocialPost"> | Date | string
    updatedAt?: DateTimeFilter<"SocialPost"> | Date | string
    processedPostId?: StringFilter<"SocialPost"> | string
  }

  export type ProcessedPostCreateWithoutSocialPostsInput = {
    id?: string
    originalUrl: string
    summary: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProcessedPostsInput
  }

  export type ProcessedPostUncheckedCreateWithoutSocialPostsInput = {
    id?: string
    originalUrl: string
    summary: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ProcessedPostCreateOrConnectWithoutSocialPostsInput = {
    where: ProcessedPostWhereUniqueInput
    create: XOR<ProcessedPostCreateWithoutSocialPostsInput, ProcessedPostUncheckedCreateWithoutSocialPostsInput>
  }

  export type ProcessedPostUpsertWithoutSocialPostsInput = {
    update: XOR<ProcessedPostUpdateWithoutSocialPostsInput, ProcessedPostUncheckedUpdateWithoutSocialPostsInput>
    create: XOR<ProcessedPostCreateWithoutSocialPostsInput, ProcessedPostUncheckedCreateWithoutSocialPostsInput>
    where?: ProcessedPostWhereInput
  }

  export type ProcessedPostUpdateToOneWithWhereWithoutSocialPostsInput = {
    where?: ProcessedPostWhereInput
    data: XOR<ProcessedPostUpdateWithoutSocialPostsInput, ProcessedPostUncheckedUpdateWithoutSocialPostsInput>
  }

  export type ProcessedPostUpdateWithoutSocialPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProcessedPostsNestedInput
  }

  export type ProcessedPostUncheckedUpdateWithoutSocialPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ProcessedPostCreateManyUserInput = {
    id?: string
    originalUrl: string
    summary: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProcessedPostUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    socialPosts?: SocialPostUpdateManyWithoutProcessedPostNestedInput
  }

  export type ProcessedPostUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    socialPosts?: SocialPostUncheckedUpdateManyWithoutProcessedPostNestedInput
  }

  export type ProcessedPostUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalUrl?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialPostCreateManyProcessedPostInput = {
    id?: string
    platform: string
    scheduledTime?: Date | string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SocialPostUpdateWithoutProcessedPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    scheduledTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialPostUncheckedUpdateWithoutProcessedPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    scheduledTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialPostUncheckedUpdateManyWithoutProcessedPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    scheduledTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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