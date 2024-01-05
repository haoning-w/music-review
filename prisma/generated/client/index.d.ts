
/**
 * Client
**/

import * as runtime from './runtime/library';
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
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model UserReviewLikes
 * 
 */
export type UserReviewLikes = $Result.DefaultSelection<Prisma.$UserReviewLikesPayload>
/**
 * Model SpotifyToken
 * 
 */
export type SpotifyToken = $Result.DefaultSelection<Prisma.$SpotifyTokenPayload>

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
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs>;

  /**
   * `prisma.userReviewLikes`: Exposes CRUD operations for the **UserReviewLikes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserReviewLikes
    * const userReviewLikes = await prisma.userReviewLikes.findMany()
    * ```
    */
  get userReviewLikes(): Prisma.UserReviewLikesDelegate<ExtArgs>;

  /**
   * `prisma.spotifyToken`: Exposes CRUD operations for the **SpotifyToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SpotifyTokens
    * const spotifyTokens = await prisma.spotifyToken.findMany()
    * ```
    */
  get spotifyToken(): Prisma.SpotifyTokenDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.7.1
   * Query Engine version: 0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Review: 'Review',
    UserReviewLikes: 'UserReviewLikes',
    SpotifyToken: 'SpotifyToken'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'review' | 'userReviewLikes' | 'spotifyToken'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>,
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      UserReviewLikes: {
        payload: Prisma.$UserReviewLikesPayload<ExtArgs>
        fields: Prisma.UserReviewLikesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserReviewLikesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserReviewLikesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserReviewLikesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserReviewLikesPayload>
          }
          findFirst: {
            args: Prisma.UserReviewLikesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserReviewLikesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserReviewLikesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserReviewLikesPayload>
          }
          findMany: {
            args: Prisma.UserReviewLikesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserReviewLikesPayload>[]
          }
          create: {
            args: Prisma.UserReviewLikesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserReviewLikesPayload>
          }
          createMany: {
            args: Prisma.UserReviewLikesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserReviewLikesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserReviewLikesPayload>
          }
          update: {
            args: Prisma.UserReviewLikesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserReviewLikesPayload>
          }
          deleteMany: {
            args: Prisma.UserReviewLikesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserReviewLikesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserReviewLikesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserReviewLikesPayload>
          }
          aggregate: {
            args: Prisma.UserReviewLikesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserReviewLikes>
          }
          groupBy: {
            args: Prisma.UserReviewLikesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserReviewLikesGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserReviewLikesCountArgs<ExtArgs>,
            result: $Utils.Optional<UserReviewLikesCountAggregateOutputType> | number
          }
        }
      }
      SpotifyToken: {
        payload: Prisma.$SpotifyTokenPayload<ExtArgs>
        fields: Prisma.SpotifyTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpotifyTokenFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SpotifyTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpotifyTokenFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SpotifyTokenPayload>
          }
          findFirst: {
            args: Prisma.SpotifyTokenFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SpotifyTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpotifyTokenFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SpotifyTokenPayload>
          }
          findMany: {
            args: Prisma.SpotifyTokenFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SpotifyTokenPayload>[]
          }
          create: {
            args: Prisma.SpotifyTokenCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SpotifyTokenPayload>
          }
          createMany: {
            args: Prisma.SpotifyTokenCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SpotifyTokenDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SpotifyTokenPayload>
          }
          update: {
            args: Prisma.SpotifyTokenUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SpotifyTokenPayload>
          }
          deleteMany: {
            args: Prisma.SpotifyTokenDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SpotifyTokenUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SpotifyTokenUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SpotifyTokenPayload>
          }
          aggregate: {
            args: Prisma.SpotifyTokenAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSpotifyToken>
          }
          groupBy: {
            args: Prisma.SpotifyTokenGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SpotifyTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpotifyTokenCountArgs<ExtArgs>,
            result: $Utils.Optional<SpotifyTokenCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    | 'update'
    | 'updateMany'
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
    Review: number
    UserReviewLikes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Review?: boolean | UserCountOutputTypeCountReviewArgs
    UserReviewLikes?: boolean | UserCountOutputTypeCountUserReviewLikesArgs
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
  export type UserCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserReviewLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserReviewLikesWhereInput
  }



  /**
   * Count Type ReviewCountOutputType
   */

  export type ReviewCountOutputType = {
    UserReviewLikes: number
  }

  export type ReviewCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserReviewLikes?: boolean | ReviewCountOutputTypeCountUserReviewLikesArgs
  }

  // Custom InputTypes

  /**
   * ReviewCountOutputType without action
   */
  export type ReviewCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewCountOutputType
     */
    select?: ReviewCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ReviewCountOutputType without action
   */
  export type ReviewCountOutputTypeCountUserReviewLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserReviewLikesWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    auth0Id: string | null
    name: string | null
    email: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    auth0Id: string | null
    name: string | null
    email: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    auth0Id: number
    name: number
    email: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    auth0Id?: true
    name?: true
    email?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    auth0Id?: true
    name?: true
    email?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    auth0Id?: true
    name?: true
    email?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    auth0Id: string
    name: string
    email: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    createdAt?: boolean
    updatedAt?: boolean
    auth0Id?: boolean
    name?: boolean
    email?: boolean
    Review?: boolean | User$ReviewArgs<ExtArgs>
    UserReviewLikes?: boolean | User$UserReviewLikesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    auth0Id?: boolean
    name?: boolean
    email?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Review?: boolean | User$ReviewArgs<ExtArgs>
    UserReviewLikes?: boolean | User$UserReviewLikesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Review: Prisma.$ReviewPayload<ExtArgs>[]
      UserReviewLikes: Prisma.$UserReviewLikesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      auth0Id: string
      name: string
      email: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Review<T extends User$ReviewArgs<ExtArgs> = {}>(args?: Subset<T, User$ReviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, 'findMany'> | Null>;

    UserReviewLikes<T extends User$UserReviewLikesArgs<ExtArgs> = {}>(args?: Subset<T, User$UserReviewLikesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserReviewLikesPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly auth0Id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
  }


  /**
   * User.Review
   */
  export type User$ReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }


  /**
   * User.UserReviewLikes
   */
  export type User$UserReviewLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReviewLikes
     */
    select?: UserReviewLikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserReviewLikesInclude<ExtArgs> | null
    where?: UserReviewLikesWhereInput
    orderBy?: UserReviewLikesOrderByWithRelationInput | UserReviewLikesOrderByWithRelationInput[]
    cursor?: UserReviewLikesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserReviewLikesScalarFieldEnum | UserReviewLikesScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    id: number | null
    rating: number | null
    authorId: number | null
  }

  export type ReviewSumAggregateOutputType = {
    id: number | null
    rating: number | null
    authorId: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    rating: number | null
    albumId: string | null
    content: string | null
    authorId: number | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    rating: number | null
    albumId: string | null
    content: string | null
    authorId: number | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    rating: number
    albumId: number
    content: number
    authorId: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    id?: true
    rating?: true
    authorId?: true
  }

  export type ReviewSumAggregateInputType = {
    id?: true
    rating?: true
    authorId?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    rating?: true
    albumId?: true
    content?: true
    authorId?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    rating?: true
    albumId?: true
    content?: true
    authorId?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    rating?: true
    albumId?: true
    content?: true
    authorId?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    rating: number
    albumId: string
    content: string
    authorId: number
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rating?: boolean
    albumId?: boolean
    content?: boolean
    authorId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    UserReviewLikes?: boolean | Review$UserReviewLikesArgs<ExtArgs>
    _count?: boolean | ReviewCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rating?: boolean
    albumId?: boolean
    content?: boolean
    authorId?: boolean
  }

  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    UserReviewLikes?: boolean | Review$UserReviewLikesArgs<ExtArgs>
    _count?: boolean | ReviewCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      UserReviewLikes: Prisma.$UserReviewLikesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      rating: number
      albumId: string
      content: string
      authorId: number
    }, ExtArgs["result"]["review"]>
    composites: {}
  }


  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ReviewFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>
    ): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Review that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ReviewFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>
    ): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ReviewFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
    **/
    create<T extends ReviewCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>
    ): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Reviews.
     *     @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     *     @example
     *     // Create many Reviews
     *     const review = await prisma.review.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ReviewCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
    **/
    delete<T extends ReviewDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>
    ): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ReviewUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>
    ): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ReviewDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ReviewUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
    **/
    upsert<T extends ReviewUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>
    ): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
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
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    UserReviewLikes<T extends Review$UserReviewLikesArgs<ExtArgs> = {}>(args?: Subset<T, Review$UserReviewLikesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserReviewLikesPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Review model
   */ 
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'Int'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
    readonly updatedAt: FieldRef<"Review", 'DateTime'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly albumId: FieldRef<"Review", 'String'>
    readonly content: FieldRef<"Review", 'String'>
    readonly authorId: FieldRef<"Review", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }


  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }


  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }


  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }


  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }


  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }


  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }


  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
  }


  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }


  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }


  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
  }


  /**
   * Review.UserReviewLikes
   */
  export type Review$UserReviewLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReviewLikes
     */
    select?: UserReviewLikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserReviewLikesInclude<ExtArgs> | null
    where?: UserReviewLikesWhereInput
    orderBy?: UserReviewLikesOrderByWithRelationInput | UserReviewLikesOrderByWithRelationInput[]
    cursor?: UserReviewLikesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserReviewLikesScalarFieldEnum | UserReviewLikesScalarFieldEnum[]
  }


  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewInclude<ExtArgs> | null
  }



  /**
   * Model UserReviewLikes
   */

  export type AggregateUserReviewLikes = {
    _count: UserReviewLikesCountAggregateOutputType | null
    _avg: UserReviewLikesAvgAggregateOutputType | null
    _sum: UserReviewLikesSumAggregateOutputType | null
    _min: UserReviewLikesMinAggregateOutputType | null
    _max: UserReviewLikesMaxAggregateOutputType | null
  }

  export type UserReviewLikesAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    reviewId: number | null
  }

  export type UserReviewLikesSumAggregateOutputType = {
    id: number | null
    userId: number | null
    reviewId: number | null
  }

  export type UserReviewLikesMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
    reviewId: number | null
  }

  export type UserReviewLikesMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
    reviewId: number | null
  }

  export type UserReviewLikesCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    userId: number
    reviewId: number
    _all: number
  }


  export type UserReviewLikesAvgAggregateInputType = {
    id?: true
    userId?: true
    reviewId?: true
  }

  export type UserReviewLikesSumAggregateInputType = {
    id?: true
    userId?: true
    reviewId?: true
  }

  export type UserReviewLikesMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    reviewId?: true
  }

  export type UserReviewLikesMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    reviewId?: true
  }

  export type UserReviewLikesCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    reviewId?: true
    _all?: true
  }

  export type UserReviewLikesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserReviewLikes to aggregate.
     */
    where?: UserReviewLikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserReviewLikes to fetch.
     */
    orderBy?: UserReviewLikesOrderByWithRelationInput | UserReviewLikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserReviewLikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserReviewLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserReviewLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserReviewLikes
    **/
    _count?: true | UserReviewLikesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserReviewLikesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserReviewLikesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserReviewLikesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserReviewLikesMaxAggregateInputType
  }

  export type GetUserReviewLikesAggregateType<T extends UserReviewLikesAggregateArgs> = {
        [P in keyof T & keyof AggregateUserReviewLikes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserReviewLikes[P]>
      : GetScalarType<T[P], AggregateUserReviewLikes[P]>
  }




  export type UserReviewLikesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserReviewLikesWhereInput
    orderBy?: UserReviewLikesOrderByWithAggregationInput | UserReviewLikesOrderByWithAggregationInput[]
    by: UserReviewLikesScalarFieldEnum[] | UserReviewLikesScalarFieldEnum
    having?: UserReviewLikesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserReviewLikesCountAggregateInputType | true
    _avg?: UserReviewLikesAvgAggregateInputType
    _sum?: UserReviewLikesSumAggregateInputType
    _min?: UserReviewLikesMinAggregateInputType
    _max?: UserReviewLikesMaxAggregateInputType
  }

  export type UserReviewLikesGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    userId: number
    reviewId: number
    _count: UserReviewLikesCountAggregateOutputType | null
    _avg: UserReviewLikesAvgAggregateOutputType | null
    _sum: UserReviewLikesSumAggregateOutputType | null
    _min: UserReviewLikesMinAggregateOutputType | null
    _max: UserReviewLikesMaxAggregateOutputType | null
  }

  type GetUserReviewLikesGroupByPayload<T extends UserReviewLikesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserReviewLikesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserReviewLikesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserReviewLikesGroupByOutputType[P]>
            : GetScalarType<T[P], UserReviewLikesGroupByOutputType[P]>
        }
      >
    >


  export type UserReviewLikesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    reviewId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userReviewLikes"]>

  export type UserReviewLikesSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    reviewId?: boolean
  }

  export type UserReviewLikesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }


  export type $UserReviewLikesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserReviewLikes"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      review: Prisma.$ReviewPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      userId: number
      reviewId: number
    }, ExtArgs["result"]["userReviewLikes"]>
    composites: {}
  }


  type UserReviewLikesGetPayload<S extends boolean | null | undefined | UserReviewLikesDefaultArgs> = $Result.GetResult<Prisma.$UserReviewLikesPayload, S>

  type UserReviewLikesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserReviewLikesFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserReviewLikesCountAggregateInputType | true
    }

  export interface UserReviewLikesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserReviewLikes'], meta: { name: 'UserReviewLikes' } }
    /**
     * Find zero or one UserReviewLikes that matches the filter.
     * @param {UserReviewLikesFindUniqueArgs} args - Arguments to find a UserReviewLikes
     * @example
     * // Get one UserReviewLikes
     * const userReviewLikes = await prisma.userReviewLikes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserReviewLikesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserReviewLikesFindUniqueArgs<ExtArgs>>
    ): Prisma__UserReviewLikesClient<$Result.GetResult<Prisma.$UserReviewLikesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserReviewLikes that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserReviewLikesFindUniqueOrThrowArgs} args - Arguments to find a UserReviewLikes
     * @example
     * // Get one UserReviewLikes
     * const userReviewLikes = await prisma.userReviewLikes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserReviewLikesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserReviewLikesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserReviewLikesClient<$Result.GetResult<Prisma.$UserReviewLikesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserReviewLikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserReviewLikesFindFirstArgs} args - Arguments to find a UserReviewLikes
     * @example
     * // Get one UserReviewLikes
     * const userReviewLikes = await prisma.userReviewLikes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserReviewLikesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserReviewLikesFindFirstArgs<ExtArgs>>
    ): Prisma__UserReviewLikesClient<$Result.GetResult<Prisma.$UserReviewLikesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserReviewLikes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserReviewLikesFindFirstOrThrowArgs} args - Arguments to find a UserReviewLikes
     * @example
     * // Get one UserReviewLikes
     * const userReviewLikes = await prisma.userReviewLikes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserReviewLikesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserReviewLikesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserReviewLikesClient<$Result.GetResult<Prisma.$UserReviewLikesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserReviewLikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserReviewLikesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserReviewLikes
     * const userReviewLikes = await prisma.userReviewLikes.findMany()
     * 
     * // Get first 10 UserReviewLikes
     * const userReviewLikes = await prisma.userReviewLikes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userReviewLikesWithIdOnly = await prisma.userReviewLikes.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserReviewLikesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserReviewLikesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserReviewLikesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserReviewLikes.
     * @param {UserReviewLikesCreateArgs} args - Arguments to create a UserReviewLikes.
     * @example
     * // Create one UserReviewLikes
     * const UserReviewLikes = await prisma.userReviewLikes.create({
     *   data: {
     *     // ... data to create a UserReviewLikes
     *   }
     * })
     * 
    **/
    create<T extends UserReviewLikesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserReviewLikesCreateArgs<ExtArgs>>
    ): Prisma__UserReviewLikesClient<$Result.GetResult<Prisma.$UserReviewLikesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserReviewLikes.
     *     @param {UserReviewLikesCreateManyArgs} args - Arguments to create many UserReviewLikes.
     *     @example
     *     // Create many UserReviewLikes
     *     const userReviewLikes = await prisma.userReviewLikes.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserReviewLikesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserReviewLikesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserReviewLikes.
     * @param {UserReviewLikesDeleteArgs} args - Arguments to delete one UserReviewLikes.
     * @example
     * // Delete one UserReviewLikes
     * const UserReviewLikes = await prisma.userReviewLikes.delete({
     *   where: {
     *     // ... filter to delete one UserReviewLikes
     *   }
     * })
     * 
    **/
    delete<T extends UserReviewLikesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserReviewLikesDeleteArgs<ExtArgs>>
    ): Prisma__UserReviewLikesClient<$Result.GetResult<Prisma.$UserReviewLikesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserReviewLikes.
     * @param {UserReviewLikesUpdateArgs} args - Arguments to update one UserReviewLikes.
     * @example
     * // Update one UserReviewLikes
     * const userReviewLikes = await prisma.userReviewLikes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserReviewLikesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserReviewLikesUpdateArgs<ExtArgs>>
    ): Prisma__UserReviewLikesClient<$Result.GetResult<Prisma.$UserReviewLikesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserReviewLikes.
     * @param {UserReviewLikesDeleteManyArgs} args - Arguments to filter UserReviewLikes to delete.
     * @example
     * // Delete a few UserReviewLikes
     * const { count } = await prisma.userReviewLikes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserReviewLikesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserReviewLikesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserReviewLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserReviewLikesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserReviewLikes
     * const userReviewLikes = await prisma.userReviewLikes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserReviewLikesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserReviewLikesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserReviewLikes.
     * @param {UserReviewLikesUpsertArgs} args - Arguments to update or create a UserReviewLikes.
     * @example
     * // Update or create a UserReviewLikes
     * const userReviewLikes = await prisma.userReviewLikes.upsert({
     *   create: {
     *     // ... data to create a UserReviewLikes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserReviewLikes we want to update
     *   }
     * })
    **/
    upsert<T extends UserReviewLikesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserReviewLikesUpsertArgs<ExtArgs>>
    ): Prisma__UserReviewLikesClient<$Result.GetResult<Prisma.$UserReviewLikesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UserReviewLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserReviewLikesCountArgs} args - Arguments to filter UserReviewLikes to count.
     * @example
     * // Count the number of UserReviewLikes
     * const count = await prisma.userReviewLikes.count({
     *   where: {
     *     // ... the filter for the UserReviewLikes we want to count
     *   }
     * })
    **/
    count<T extends UserReviewLikesCountArgs>(
      args?: Subset<T, UserReviewLikesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserReviewLikesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserReviewLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserReviewLikesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserReviewLikesAggregateArgs>(args: Subset<T, UserReviewLikesAggregateArgs>): Prisma.PrismaPromise<GetUserReviewLikesAggregateType<T>>

    /**
     * Group by UserReviewLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserReviewLikesGroupByArgs} args - Group by arguments.
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
      T extends UserReviewLikesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserReviewLikesGroupByArgs['orderBy'] }
        : { orderBy?: UserReviewLikesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserReviewLikesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserReviewLikesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserReviewLikes model
   */
  readonly fields: UserReviewLikesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserReviewLikes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserReviewLikesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    review<T extends ReviewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReviewDefaultArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UserReviewLikes model
   */ 
  interface UserReviewLikesFieldRefs {
    readonly id: FieldRef<"UserReviewLikes", 'Int'>
    readonly createdAt: FieldRef<"UserReviewLikes", 'DateTime'>
    readonly updatedAt: FieldRef<"UserReviewLikes", 'DateTime'>
    readonly userId: FieldRef<"UserReviewLikes", 'Int'>
    readonly reviewId: FieldRef<"UserReviewLikes", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * UserReviewLikes findUnique
   */
  export type UserReviewLikesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReviewLikes
     */
    select?: UserReviewLikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserReviewLikesInclude<ExtArgs> | null
    /**
     * Filter, which UserReviewLikes to fetch.
     */
    where: UserReviewLikesWhereUniqueInput
  }


  /**
   * UserReviewLikes findUniqueOrThrow
   */
  export type UserReviewLikesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReviewLikes
     */
    select?: UserReviewLikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserReviewLikesInclude<ExtArgs> | null
    /**
     * Filter, which UserReviewLikes to fetch.
     */
    where: UserReviewLikesWhereUniqueInput
  }


  /**
   * UserReviewLikes findFirst
   */
  export type UserReviewLikesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReviewLikes
     */
    select?: UserReviewLikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserReviewLikesInclude<ExtArgs> | null
    /**
     * Filter, which UserReviewLikes to fetch.
     */
    where?: UserReviewLikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserReviewLikes to fetch.
     */
    orderBy?: UserReviewLikesOrderByWithRelationInput | UserReviewLikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserReviewLikes.
     */
    cursor?: UserReviewLikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserReviewLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserReviewLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserReviewLikes.
     */
    distinct?: UserReviewLikesScalarFieldEnum | UserReviewLikesScalarFieldEnum[]
  }


  /**
   * UserReviewLikes findFirstOrThrow
   */
  export type UserReviewLikesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReviewLikes
     */
    select?: UserReviewLikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserReviewLikesInclude<ExtArgs> | null
    /**
     * Filter, which UserReviewLikes to fetch.
     */
    where?: UserReviewLikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserReviewLikes to fetch.
     */
    orderBy?: UserReviewLikesOrderByWithRelationInput | UserReviewLikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserReviewLikes.
     */
    cursor?: UserReviewLikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserReviewLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserReviewLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserReviewLikes.
     */
    distinct?: UserReviewLikesScalarFieldEnum | UserReviewLikesScalarFieldEnum[]
  }


  /**
   * UserReviewLikes findMany
   */
  export type UserReviewLikesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReviewLikes
     */
    select?: UserReviewLikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserReviewLikesInclude<ExtArgs> | null
    /**
     * Filter, which UserReviewLikes to fetch.
     */
    where?: UserReviewLikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserReviewLikes to fetch.
     */
    orderBy?: UserReviewLikesOrderByWithRelationInput | UserReviewLikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserReviewLikes.
     */
    cursor?: UserReviewLikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserReviewLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserReviewLikes.
     */
    skip?: number
    distinct?: UserReviewLikesScalarFieldEnum | UserReviewLikesScalarFieldEnum[]
  }


  /**
   * UserReviewLikes create
   */
  export type UserReviewLikesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReviewLikes
     */
    select?: UserReviewLikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserReviewLikesInclude<ExtArgs> | null
    /**
     * The data needed to create a UserReviewLikes.
     */
    data: XOR<UserReviewLikesCreateInput, UserReviewLikesUncheckedCreateInput>
  }


  /**
   * UserReviewLikes createMany
   */
  export type UserReviewLikesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserReviewLikes.
     */
    data: UserReviewLikesCreateManyInput | UserReviewLikesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * UserReviewLikes update
   */
  export type UserReviewLikesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReviewLikes
     */
    select?: UserReviewLikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserReviewLikesInclude<ExtArgs> | null
    /**
     * The data needed to update a UserReviewLikes.
     */
    data: XOR<UserReviewLikesUpdateInput, UserReviewLikesUncheckedUpdateInput>
    /**
     * Choose, which UserReviewLikes to update.
     */
    where: UserReviewLikesWhereUniqueInput
  }


  /**
   * UserReviewLikes updateMany
   */
  export type UserReviewLikesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserReviewLikes.
     */
    data: XOR<UserReviewLikesUpdateManyMutationInput, UserReviewLikesUncheckedUpdateManyInput>
    /**
     * Filter which UserReviewLikes to update
     */
    where?: UserReviewLikesWhereInput
  }


  /**
   * UserReviewLikes upsert
   */
  export type UserReviewLikesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReviewLikes
     */
    select?: UserReviewLikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserReviewLikesInclude<ExtArgs> | null
    /**
     * The filter to search for the UserReviewLikes to update in case it exists.
     */
    where: UserReviewLikesWhereUniqueInput
    /**
     * In case the UserReviewLikes found by the `where` argument doesn't exist, create a new UserReviewLikes with this data.
     */
    create: XOR<UserReviewLikesCreateInput, UserReviewLikesUncheckedCreateInput>
    /**
     * In case the UserReviewLikes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserReviewLikesUpdateInput, UserReviewLikesUncheckedUpdateInput>
  }


  /**
   * UserReviewLikes delete
   */
  export type UserReviewLikesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReviewLikes
     */
    select?: UserReviewLikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserReviewLikesInclude<ExtArgs> | null
    /**
     * Filter which UserReviewLikes to delete.
     */
    where: UserReviewLikesWhereUniqueInput
  }


  /**
   * UserReviewLikes deleteMany
   */
  export type UserReviewLikesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserReviewLikes to delete
     */
    where?: UserReviewLikesWhereInput
  }


  /**
   * UserReviewLikes without action
   */
  export type UserReviewLikesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserReviewLikes
     */
    select?: UserReviewLikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserReviewLikesInclude<ExtArgs> | null
  }



  /**
   * Model SpotifyToken
   */

  export type AggregateSpotifyToken = {
    _count: SpotifyTokenCountAggregateOutputType | null
    _avg: SpotifyTokenAvgAggregateOutputType | null
    _sum: SpotifyTokenSumAggregateOutputType | null
    _min: SpotifyTokenMinAggregateOutputType | null
    _max: SpotifyTokenMaxAggregateOutputType | null
  }

  export type SpotifyTokenAvgAggregateOutputType = {
    id: number | null
  }

  export type SpotifyTokenSumAggregateOutputType = {
    id: number | null
  }

  export type SpotifyTokenMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    token: string | null
  }

  export type SpotifyTokenMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    token: string | null
  }

  export type SpotifyTokenCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    token: number
    _all: number
  }


  export type SpotifyTokenAvgAggregateInputType = {
    id?: true
  }

  export type SpotifyTokenSumAggregateInputType = {
    id?: true
  }

  export type SpotifyTokenMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    token?: true
  }

  export type SpotifyTokenMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    token?: true
  }

  export type SpotifyTokenCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    token?: true
    _all?: true
  }

  export type SpotifyTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpotifyToken to aggregate.
     */
    where?: SpotifyTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpotifyTokens to fetch.
     */
    orderBy?: SpotifyTokenOrderByWithRelationInput | SpotifyTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpotifyTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpotifyTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpotifyTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SpotifyTokens
    **/
    _count?: true | SpotifyTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpotifyTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpotifyTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpotifyTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpotifyTokenMaxAggregateInputType
  }

  export type GetSpotifyTokenAggregateType<T extends SpotifyTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateSpotifyToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpotifyToken[P]>
      : GetScalarType<T[P], AggregateSpotifyToken[P]>
  }




  export type SpotifyTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpotifyTokenWhereInput
    orderBy?: SpotifyTokenOrderByWithAggregationInput | SpotifyTokenOrderByWithAggregationInput[]
    by: SpotifyTokenScalarFieldEnum[] | SpotifyTokenScalarFieldEnum
    having?: SpotifyTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpotifyTokenCountAggregateInputType | true
    _avg?: SpotifyTokenAvgAggregateInputType
    _sum?: SpotifyTokenSumAggregateInputType
    _min?: SpotifyTokenMinAggregateInputType
    _max?: SpotifyTokenMaxAggregateInputType
  }

  export type SpotifyTokenGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    token: string
    _count: SpotifyTokenCountAggregateOutputType | null
    _avg: SpotifyTokenAvgAggregateOutputType | null
    _sum: SpotifyTokenSumAggregateOutputType | null
    _min: SpotifyTokenMinAggregateOutputType | null
    _max: SpotifyTokenMaxAggregateOutputType | null
  }

  type GetSpotifyTokenGroupByPayload<T extends SpotifyTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpotifyTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpotifyTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpotifyTokenGroupByOutputType[P]>
            : GetScalarType<T[P], SpotifyTokenGroupByOutputType[P]>
        }
      >
    >


  export type SpotifyTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    token?: boolean
  }, ExtArgs["result"]["spotifyToken"]>

  export type SpotifyTokenSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    token?: boolean
  }


  export type $SpotifyTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SpotifyToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      token: string
    }, ExtArgs["result"]["spotifyToken"]>
    composites: {}
  }


  type SpotifyTokenGetPayload<S extends boolean | null | undefined | SpotifyTokenDefaultArgs> = $Result.GetResult<Prisma.$SpotifyTokenPayload, S>

  type SpotifyTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SpotifyTokenFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: SpotifyTokenCountAggregateInputType | true
    }

  export interface SpotifyTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SpotifyToken'], meta: { name: 'SpotifyToken' } }
    /**
     * Find zero or one SpotifyToken that matches the filter.
     * @param {SpotifyTokenFindUniqueArgs} args - Arguments to find a SpotifyToken
     * @example
     * // Get one SpotifyToken
     * const spotifyToken = await prisma.spotifyToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SpotifyTokenFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SpotifyTokenFindUniqueArgs<ExtArgs>>
    ): Prisma__SpotifyTokenClient<$Result.GetResult<Prisma.$SpotifyTokenPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SpotifyToken that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SpotifyTokenFindUniqueOrThrowArgs} args - Arguments to find a SpotifyToken
     * @example
     * // Get one SpotifyToken
     * const spotifyToken = await prisma.spotifyToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SpotifyTokenFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SpotifyTokenFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SpotifyTokenClient<$Result.GetResult<Prisma.$SpotifyTokenPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SpotifyToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotifyTokenFindFirstArgs} args - Arguments to find a SpotifyToken
     * @example
     * // Get one SpotifyToken
     * const spotifyToken = await prisma.spotifyToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SpotifyTokenFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SpotifyTokenFindFirstArgs<ExtArgs>>
    ): Prisma__SpotifyTokenClient<$Result.GetResult<Prisma.$SpotifyTokenPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SpotifyToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotifyTokenFindFirstOrThrowArgs} args - Arguments to find a SpotifyToken
     * @example
     * // Get one SpotifyToken
     * const spotifyToken = await prisma.spotifyToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SpotifyTokenFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SpotifyTokenFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SpotifyTokenClient<$Result.GetResult<Prisma.$SpotifyTokenPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SpotifyTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotifyTokenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SpotifyTokens
     * const spotifyTokens = await prisma.spotifyToken.findMany()
     * 
     * // Get first 10 SpotifyTokens
     * const spotifyTokens = await prisma.spotifyToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const spotifyTokenWithIdOnly = await prisma.spotifyToken.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SpotifyTokenFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SpotifyTokenFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpotifyTokenPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SpotifyToken.
     * @param {SpotifyTokenCreateArgs} args - Arguments to create a SpotifyToken.
     * @example
     * // Create one SpotifyToken
     * const SpotifyToken = await prisma.spotifyToken.create({
     *   data: {
     *     // ... data to create a SpotifyToken
     *   }
     * })
     * 
    **/
    create<T extends SpotifyTokenCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SpotifyTokenCreateArgs<ExtArgs>>
    ): Prisma__SpotifyTokenClient<$Result.GetResult<Prisma.$SpotifyTokenPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SpotifyTokens.
     *     @param {SpotifyTokenCreateManyArgs} args - Arguments to create many SpotifyTokens.
     *     @example
     *     // Create many SpotifyTokens
     *     const spotifyToken = await prisma.spotifyToken.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SpotifyTokenCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SpotifyTokenCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SpotifyToken.
     * @param {SpotifyTokenDeleteArgs} args - Arguments to delete one SpotifyToken.
     * @example
     * // Delete one SpotifyToken
     * const SpotifyToken = await prisma.spotifyToken.delete({
     *   where: {
     *     // ... filter to delete one SpotifyToken
     *   }
     * })
     * 
    **/
    delete<T extends SpotifyTokenDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SpotifyTokenDeleteArgs<ExtArgs>>
    ): Prisma__SpotifyTokenClient<$Result.GetResult<Prisma.$SpotifyTokenPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SpotifyToken.
     * @param {SpotifyTokenUpdateArgs} args - Arguments to update one SpotifyToken.
     * @example
     * // Update one SpotifyToken
     * const spotifyToken = await prisma.spotifyToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SpotifyTokenUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SpotifyTokenUpdateArgs<ExtArgs>>
    ): Prisma__SpotifyTokenClient<$Result.GetResult<Prisma.$SpotifyTokenPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SpotifyTokens.
     * @param {SpotifyTokenDeleteManyArgs} args - Arguments to filter SpotifyTokens to delete.
     * @example
     * // Delete a few SpotifyTokens
     * const { count } = await prisma.spotifyToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SpotifyTokenDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SpotifyTokenDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpotifyTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotifyTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SpotifyTokens
     * const spotifyToken = await prisma.spotifyToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SpotifyTokenUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SpotifyTokenUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SpotifyToken.
     * @param {SpotifyTokenUpsertArgs} args - Arguments to update or create a SpotifyToken.
     * @example
     * // Update or create a SpotifyToken
     * const spotifyToken = await prisma.spotifyToken.upsert({
     *   create: {
     *     // ... data to create a SpotifyToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SpotifyToken we want to update
     *   }
     * })
    **/
    upsert<T extends SpotifyTokenUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SpotifyTokenUpsertArgs<ExtArgs>>
    ): Prisma__SpotifyTokenClient<$Result.GetResult<Prisma.$SpotifyTokenPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SpotifyTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotifyTokenCountArgs} args - Arguments to filter SpotifyTokens to count.
     * @example
     * // Count the number of SpotifyTokens
     * const count = await prisma.spotifyToken.count({
     *   where: {
     *     // ... the filter for the SpotifyTokens we want to count
     *   }
     * })
    **/
    count<T extends SpotifyTokenCountArgs>(
      args?: Subset<T, SpotifyTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpotifyTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SpotifyToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotifyTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SpotifyTokenAggregateArgs>(args: Subset<T, SpotifyTokenAggregateArgs>): Prisma.PrismaPromise<GetSpotifyTokenAggregateType<T>>

    /**
     * Group by SpotifyToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpotifyTokenGroupByArgs} args - Group by arguments.
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
      T extends SpotifyTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpotifyTokenGroupByArgs['orderBy'] }
        : { orderBy?: SpotifyTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SpotifyTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpotifyTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SpotifyToken model
   */
  readonly fields: SpotifyTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SpotifyToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpotifyTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SpotifyToken model
   */ 
  interface SpotifyTokenFieldRefs {
    readonly id: FieldRef<"SpotifyToken", 'Int'>
    readonly createdAt: FieldRef<"SpotifyToken", 'DateTime'>
    readonly updatedAt: FieldRef<"SpotifyToken", 'DateTime'>
    readonly token: FieldRef<"SpotifyToken", 'String'>
  }
    

  // Custom InputTypes

  /**
   * SpotifyToken findUnique
   */
  export type SpotifyTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotifyToken
     */
    select?: SpotifyTokenSelect<ExtArgs> | null
    /**
     * Filter, which SpotifyToken to fetch.
     */
    where: SpotifyTokenWhereUniqueInput
  }


  /**
   * SpotifyToken findUniqueOrThrow
   */
  export type SpotifyTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotifyToken
     */
    select?: SpotifyTokenSelect<ExtArgs> | null
    /**
     * Filter, which SpotifyToken to fetch.
     */
    where: SpotifyTokenWhereUniqueInput
  }


  /**
   * SpotifyToken findFirst
   */
  export type SpotifyTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotifyToken
     */
    select?: SpotifyTokenSelect<ExtArgs> | null
    /**
     * Filter, which SpotifyToken to fetch.
     */
    where?: SpotifyTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpotifyTokens to fetch.
     */
    orderBy?: SpotifyTokenOrderByWithRelationInput | SpotifyTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpotifyTokens.
     */
    cursor?: SpotifyTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpotifyTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpotifyTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpotifyTokens.
     */
    distinct?: SpotifyTokenScalarFieldEnum | SpotifyTokenScalarFieldEnum[]
  }


  /**
   * SpotifyToken findFirstOrThrow
   */
  export type SpotifyTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotifyToken
     */
    select?: SpotifyTokenSelect<ExtArgs> | null
    /**
     * Filter, which SpotifyToken to fetch.
     */
    where?: SpotifyTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpotifyTokens to fetch.
     */
    orderBy?: SpotifyTokenOrderByWithRelationInput | SpotifyTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpotifyTokens.
     */
    cursor?: SpotifyTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpotifyTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpotifyTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpotifyTokens.
     */
    distinct?: SpotifyTokenScalarFieldEnum | SpotifyTokenScalarFieldEnum[]
  }


  /**
   * SpotifyToken findMany
   */
  export type SpotifyTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotifyToken
     */
    select?: SpotifyTokenSelect<ExtArgs> | null
    /**
     * Filter, which SpotifyTokens to fetch.
     */
    where?: SpotifyTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpotifyTokens to fetch.
     */
    orderBy?: SpotifyTokenOrderByWithRelationInput | SpotifyTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SpotifyTokens.
     */
    cursor?: SpotifyTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpotifyTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpotifyTokens.
     */
    skip?: number
    distinct?: SpotifyTokenScalarFieldEnum | SpotifyTokenScalarFieldEnum[]
  }


  /**
   * SpotifyToken create
   */
  export type SpotifyTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotifyToken
     */
    select?: SpotifyTokenSelect<ExtArgs> | null
    /**
     * The data needed to create a SpotifyToken.
     */
    data: XOR<SpotifyTokenCreateInput, SpotifyTokenUncheckedCreateInput>
  }


  /**
   * SpotifyToken createMany
   */
  export type SpotifyTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SpotifyTokens.
     */
    data: SpotifyTokenCreateManyInput | SpotifyTokenCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * SpotifyToken update
   */
  export type SpotifyTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotifyToken
     */
    select?: SpotifyTokenSelect<ExtArgs> | null
    /**
     * The data needed to update a SpotifyToken.
     */
    data: XOR<SpotifyTokenUpdateInput, SpotifyTokenUncheckedUpdateInput>
    /**
     * Choose, which SpotifyToken to update.
     */
    where: SpotifyTokenWhereUniqueInput
  }


  /**
   * SpotifyToken updateMany
   */
  export type SpotifyTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SpotifyTokens.
     */
    data: XOR<SpotifyTokenUpdateManyMutationInput, SpotifyTokenUncheckedUpdateManyInput>
    /**
     * Filter which SpotifyTokens to update
     */
    where?: SpotifyTokenWhereInput
  }


  /**
   * SpotifyToken upsert
   */
  export type SpotifyTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotifyToken
     */
    select?: SpotifyTokenSelect<ExtArgs> | null
    /**
     * The filter to search for the SpotifyToken to update in case it exists.
     */
    where: SpotifyTokenWhereUniqueInput
    /**
     * In case the SpotifyToken found by the `where` argument doesn't exist, create a new SpotifyToken with this data.
     */
    create: XOR<SpotifyTokenCreateInput, SpotifyTokenUncheckedCreateInput>
    /**
     * In case the SpotifyToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpotifyTokenUpdateInput, SpotifyTokenUncheckedUpdateInput>
  }


  /**
   * SpotifyToken delete
   */
  export type SpotifyTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotifyToken
     */
    select?: SpotifyTokenSelect<ExtArgs> | null
    /**
     * Filter which SpotifyToken to delete.
     */
    where: SpotifyTokenWhereUniqueInput
  }


  /**
   * SpotifyToken deleteMany
   */
  export type SpotifyTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpotifyTokens to delete
     */
    where?: SpotifyTokenWhereInput
  }


  /**
   * SpotifyToken without action
   */
  export type SpotifyTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpotifyToken
     */
    select?: SpotifyTokenSelect<ExtArgs> | null
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
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    auth0Id: 'auth0Id',
    name: 'name',
    email: 'email'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    rating: 'rating',
    albumId: 'albumId',
    content: 'content',
    authorId: 'authorId'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const UserReviewLikesScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    reviewId: 'reviewId'
  };

  export type UserReviewLikesScalarFieldEnum = (typeof UserReviewLikesScalarFieldEnum)[keyof typeof UserReviewLikesScalarFieldEnum]


  export const SpotifyTokenScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    token: 'token'
  };

  export type SpotifyTokenScalarFieldEnum = (typeof SpotifyTokenScalarFieldEnum)[keyof typeof SpotifyTokenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    auth0Id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    Review?: ReviewListRelationFilter
    UserReviewLikes?: UserReviewLikesListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    auth0Id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    Review?: ReviewOrderByRelationAggregateInput
    UserReviewLikes?: UserReviewLikesOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    auth0Id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    name?: StringFilter<"User"> | string
    Review?: ReviewListRelationFilter
    UserReviewLikes?: UserReviewLikesListRelationFilter
  }, "id" | "auth0Id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    auth0Id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    auth0Id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: IntFilter<"Review"> | number
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    rating?: IntFilter<"Review"> | number
    albumId?: StringFilter<"Review"> | string
    content?: StringFilter<"Review"> | string
    authorId?: IntFilter<"Review"> | number
    author?: XOR<UserRelationFilter, UserWhereInput>
    UserReviewLikes?: UserReviewLikesListRelationFilter
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rating?: SortOrder
    albumId?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    author?: UserOrderByWithRelationInput
    UserReviewLikes?: UserReviewLikesOrderByRelationAggregateInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    rating?: IntFilter<"Review"> | number
    albumId?: StringFilter<"Review"> | string
    content?: StringFilter<"Review"> | string
    authorId?: IntFilter<"Review"> | number
    author?: XOR<UserRelationFilter, UserWhereInput>
    UserReviewLikes?: UserReviewLikesListRelationFilter
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rating?: SortOrder
    albumId?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Review"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    rating?: IntWithAggregatesFilter<"Review"> | number
    albumId?: StringWithAggregatesFilter<"Review"> | string
    content?: StringWithAggregatesFilter<"Review"> | string
    authorId?: IntWithAggregatesFilter<"Review"> | number
  }

  export type UserReviewLikesWhereInput = {
    AND?: UserReviewLikesWhereInput | UserReviewLikesWhereInput[]
    OR?: UserReviewLikesWhereInput[]
    NOT?: UserReviewLikesWhereInput | UserReviewLikesWhereInput[]
    id?: IntFilter<"UserReviewLikes"> | number
    createdAt?: DateTimeFilter<"UserReviewLikes"> | Date | string
    updatedAt?: DateTimeFilter<"UserReviewLikes"> | Date | string
    userId?: IntFilter<"UserReviewLikes"> | number
    reviewId?: IntFilter<"UserReviewLikes"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    review?: XOR<ReviewRelationFilter, ReviewWhereInput>
  }

  export type UserReviewLikesOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    reviewId?: SortOrder
    user?: UserOrderByWithRelationInput
    review?: ReviewOrderByWithRelationInput
  }

  export type UserReviewLikesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserReviewLikesWhereInput | UserReviewLikesWhereInput[]
    OR?: UserReviewLikesWhereInput[]
    NOT?: UserReviewLikesWhereInput | UserReviewLikesWhereInput[]
    createdAt?: DateTimeFilter<"UserReviewLikes"> | Date | string
    updatedAt?: DateTimeFilter<"UserReviewLikes"> | Date | string
    userId?: IntFilter<"UserReviewLikes"> | number
    reviewId?: IntFilter<"UserReviewLikes"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    review?: XOR<ReviewRelationFilter, ReviewWhereInput>
  }, "id">

  export type UserReviewLikesOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    reviewId?: SortOrder
    _count?: UserReviewLikesCountOrderByAggregateInput
    _avg?: UserReviewLikesAvgOrderByAggregateInput
    _max?: UserReviewLikesMaxOrderByAggregateInput
    _min?: UserReviewLikesMinOrderByAggregateInput
    _sum?: UserReviewLikesSumOrderByAggregateInput
  }

  export type UserReviewLikesScalarWhereWithAggregatesInput = {
    AND?: UserReviewLikesScalarWhereWithAggregatesInput | UserReviewLikesScalarWhereWithAggregatesInput[]
    OR?: UserReviewLikesScalarWhereWithAggregatesInput[]
    NOT?: UserReviewLikesScalarWhereWithAggregatesInput | UserReviewLikesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserReviewLikes"> | number
    createdAt?: DateTimeWithAggregatesFilter<"UserReviewLikes"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserReviewLikes"> | Date | string
    userId?: IntWithAggregatesFilter<"UserReviewLikes"> | number
    reviewId?: IntWithAggregatesFilter<"UserReviewLikes"> | number
  }

  export type SpotifyTokenWhereInput = {
    AND?: SpotifyTokenWhereInput | SpotifyTokenWhereInput[]
    OR?: SpotifyTokenWhereInput[]
    NOT?: SpotifyTokenWhereInput | SpotifyTokenWhereInput[]
    id?: IntFilter<"SpotifyToken"> | number
    createdAt?: DateTimeFilter<"SpotifyToken"> | Date | string
    updatedAt?: DateTimeFilter<"SpotifyToken"> | Date | string
    token?: StringFilter<"SpotifyToken"> | string
  }

  export type SpotifyTokenOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    token?: SortOrder
  }

  export type SpotifyTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SpotifyTokenWhereInput | SpotifyTokenWhereInput[]
    OR?: SpotifyTokenWhereInput[]
    NOT?: SpotifyTokenWhereInput | SpotifyTokenWhereInput[]
    createdAt?: DateTimeFilter<"SpotifyToken"> | Date | string
    updatedAt?: DateTimeFilter<"SpotifyToken"> | Date | string
    token?: StringFilter<"SpotifyToken"> | string
  }, "id">

  export type SpotifyTokenOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    token?: SortOrder
    _count?: SpotifyTokenCountOrderByAggregateInput
    _avg?: SpotifyTokenAvgOrderByAggregateInput
    _max?: SpotifyTokenMaxOrderByAggregateInput
    _min?: SpotifyTokenMinOrderByAggregateInput
    _sum?: SpotifyTokenSumOrderByAggregateInput
  }

  export type SpotifyTokenScalarWhereWithAggregatesInput = {
    AND?: SpotifyTokenScalarWhereWithAggregatesInput | SpotifyTokenScalarWhereWithAggregatesInput[]
    OR?: SpotifyTokenScalarWhereWithAggregatesInput[]
    NOT?: SpotifyTokenScalarWhereWithAggregatesInput | SpotifyTokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SpotifyToken"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SpotifyToken"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SpotifyToken"> | Date | string
    token?: StringWithAggregatesFilter<"SpotifyToken"> | string
  }

  export type UserCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    auth0Id?: string
    name: string
    email: string
    Review?: ReviewCreateNestedManyWithoutAuthorInput
    UserReviewLikes?: UserReviewLikesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    auth0Id?: string
    name: string
    email: string
    Review?: ReviewUncheckedCreateNestedManyWithoutAuthorInput
    UserReviewLikes?: UserReviewLikesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auth0Id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Review?: ReviewUpdateManyWithoutAuthorNestedInput
    UserReviewLikes?: UserReviewLikesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auth0Id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Review?: ReviewUncheckedUpdateManyWithoutAuthorNestedInput
    UserReviewLikes?: UserReviewLikesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    auth0Id?: string
    name: string
    email: string
  }

  export type UserUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auth0Id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auth0Id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    rating: number
    albumId: string
    content: string
    author: UserCreateNestedOneWithoutReviewInput
    UserReviewLikes?: UserReviewLikesCreateNestedManyWithoutReviewInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    rating: number
    albumId: string
    content: string
    authorId: number
    UserReviewLikes?: UserReviewLikesUncheckedCreateNestedManyWithoutReviewInput
  }

  export type ReviewUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
    albumId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneRequiredWithoutReviewNestedInput
    UserReviewLikes?: UserReviewLikesUpdateManyWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
    albumId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    UserReviewLikes?: UserReviewLikesUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type ReviewCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    rating: number
    albumId: string
    content: string
    authorId: number
  }

  export type ReviewUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
    albumId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
    albumId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type UserReviewLikesCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserReviewLikesInput
    review: ReviewCreateNestedOneWithoutUserReviewLikesInput
  }

  export type UserReviewLikesUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    reviewId: number
  }

  export type UserReviewLikesUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserReviewLikesNestedInput
    review?: ReviewUpdateOneRequiredWithoutUserReviewLikesNestedInput
  }

  export type UserReviewLikesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    reviewId?: IntFieldUpdateOperationsInput | number
  }

  export type UserReviewLikesCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    reviewId: number
  }

  export type UserReviewLikesUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserReviewLikesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    reviewId?: IntFieldUpdateOperationsInput | number
  }

  export type SpotifyTokenCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    token: string
  }

  export type SpotifyTokenUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    token: string
  }

  export type SpotifyTokenUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
  }

  export type SpotifyTokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
  }

  export type SpotifyTokenCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    token: string
  }

  export type SpotifyTokenUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
  }

  export type SpotifyTokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type UserReviewLikesListRelationFilter = {
    every?: UserReviewLikesWhereInput
    some?: UserReviewLikesWhereInput
    none?: UserReviewLikesWhereInput
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserReviewLikesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    auth0Id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    auth0Id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    auth0Id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rating?: SortOrder
    albumId?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    authorId?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rating?: SortOrder
    albumId?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rating?: SortOrder
    albumId?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    authorId?: SortOrder
  }

  export type ReviewRelationFilter = {
    is?: ReviewWhereInput
    isNot?: ReviewWhereInput
  }

  export type UserReviewLikesCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    reviewId?: SortOrder
  }

  export type UserReviewLikesAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    reviewId?: SortOrder
  }

  export type UserReviewLikesMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    reviewId?: SortOrder
  }

  export type UserReviewLikesMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    reviewId?: SortOrder
  }

  export type UserReviewLikesSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    reviewId?: SortOrder
  }

  export type SpotifyTokenCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    token?: SortOrder
  }

  export type SpotifyTokenAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SpotifyTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    token?: SortOrder
  }

  export type SpotifyTokenMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    token?: SortOrder
  }

  export type SpotifyTokenSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ReviewCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ReviewCreateWithoutAuthorInput, ReviewUncheckedCreateWithoutAuthorInput> | ReviewCreateWithoutAuthorInput[] | ReviewUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutAuthorInput | ReviewCreateOrConnectWithoutAuthorInput[]
    createMany?: ReviewCreateManyAuthorInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type UserReviewLikesCreateNestedManyWithoutUserInput = {
    create?: XOR<UserReviewLikesCreateWithoutUserInput, UserReviewLikesUncheckedCreateWithoutUserInput> | UserReviewLikesCreateWithoutUserInput[] | UserReviewLikesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserReviewLikesCreateOrConnectWithoutUserInput | UserReviewLikesCreateOrConnectWithoutUserInput[]
    createMany?: UserReviewLikesCreateManyUserInputEnvelope
    connect?: UserReviewLikesWhereUniqueInput | UserReviewLikesWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ReviewCreateWithoutAuthorInput, ReviewUncheckedCreateWithoutAuthorInput> | ReviewCreateWithoutAuthorInput[] | ReviewUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutAuthorInput | ReviewCreateOrConnectWithoutAuthorInput[]
    createMany?: ReviewCreateManyAuthorInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type UserReviewLikesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserReviewLikesCreateWithoutUserInput, UserReviewLikesUncheckedCreateWithoutUserInput> | UserReviewLikesCreateWithoutUserInput[] | UserReviewLikesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserReviewLikesCreateOrConnectWithoutUserInput | UserReviewLikesCreateOrConnectWithoutUserInput[]
    createMany?: UserReviewLikesCreateManyUserInputEnvelope
    connect?: UserReviewLikesWhereUniqueInput | UserReviewLikesWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ReviewUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ReviewCreateWithoutAuthorInput, ReviewUncheckedCreateWithoutAuthorInput> | ReviewCreateWithoutAuthorInput[] | ReviewUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutAuthorInput | ReviewCreateOrConnectWithoutAuthorInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutAuthorInput | ReviewUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ReviewCreateManyAuthorInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutAuthorInput | ReviewUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutAuthorInput | ReviewUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type UserReviewLikesUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserReviewLikesCreateWithoutUserInput, UserReviewLikesUncheckedCreateWithoutUserInput> | UserReviewLikesCreateWithoutUserInput[] | UserReviewLikesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserReviewLikesCreateOrConnectWithoutUserInput | UserReviewLikesCreateOrConnectWithoutUserInput[]
    upsert?: UserReviewLikesUpsertWithWhereUniqueWithoutUserInput | UserReviewLikesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserReviewLikesCreateManyUserInputEnvelope
    set?: UserReviewLikesWhereUniqueInput | UserReviewLikesWhereUniqueInput[]
    disconnect?: UserReviewLikesWhereUniqueInput | UserReviewLikesWhereUniqueInput[]
    delete?: UserReviewLikesWhereUniqueInput | UserReviewLikesWhereUniqueInput[]
    connect?: UserReviewLikesWhereUniqueInput | UserReviewLikesWhereUniqueInput[]
    update?: UserReviewLikesUpdateWithWhereUniqueWithoutUserInput | UserReviewLikesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserReviewLikesUpdateManyWithWhereWithoutUserInput | UserReviewLikesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserReviewLikesScalarWhereInput | UserReviewLikesScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ReviewUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ReviewCreateWithoutAuthorInput, ReviewUncheckedCreateWithoutAuthorInput> | ReviewCreateWithoutAuthorInput[] | ReviewUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutAuthorInput | ReviewCreateOrConnectWithoutAuthorInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutAuthorInput | ReviewUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ReviewCreateManyAuthorInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutAuthorInput | ReviewUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutAuthorInput | ReviewUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type UserReviewLikesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserReviewLikesCreateWithoutUserInput, UserReviewLikesUncheckedCreateWithoutUserInput> | UserReviewLikesCreateWithoutUserInput[] | UserReviewLikesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserReviewLikesCreateOrConnectWithoutUserInput | UserReviewLikesCreateOrConnectWithoutUserInput[]
    upsert?: UserReviewLikesUpsertWithWhereUniqueWithoutUserInput | UserReviewLikesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserReviewLikesCreateManyUserInputEnvelope
    set?: UserReviewLikesWhereUniqueInput | UserReviewLikesWhereUniqueInput[]
    disconnect?: UserReviewLikesWhereUniqueInput | UserReviewLikesWhereUniqueInput[]
    delete?: UserReviewLikesWhereUniqueInput | UserReviewLikesWhereUniqueInput[]
    connect?: UserReviewLikesWhereUniqueInput | UserReviewLikesWhereUniqueInput[]
    update?: UserReviewLikesUpdateWithWhereUniqueWithoutUserInput | UserReviewLikesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserReviewLikesUpdateManyWithWhereWithoutUserInput | UserReviewLikesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserReviewLikesScalarWhereInput | UserReviewLikesScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutReviewInput = {
    create?: XOR<UserCreateWithoutReviewInput, UserUncheckedCreateWithoutReviewInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewInput
    connect?: UserWhereUniqueInput
  }

  export type UserReviewLikesCreateNestedManyWithoutReviewInput = {
    create?: XOR<UserReviewLikesCreateWithoutReviewInput, UserReviewLikesUncheckedCreateWithoutReviewInput> | UserReviewLikesCreateWithoutReviewInput[] | UserReviewLikesUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: UserReviewLikesCreateOrConnectWithoutReviewInput | UserReviewLikesCreateOrConnectWithoutReviewInput[]
    createMany?: UserReviewLikesCreateManyReviewInputEnvelope
    connect?: UserReviewLikesWhereUniqueInput | UserReviewLikesWhereUniqueInput[]
  }

  export type UserReviewLikesUncheckedCreateNestedManyWithoutReviewInput = {
    create?: XOR<UserReviewLikesCreateWithoutReviewInput, UserReviewLikesUncheckedCreateWithoutReviewInput> | UserReviewLikesCreateWithoutReviewInput[] | UserReviewLikesUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: UserReviewLikesCreateOrConnectWithoutReviewInput | UserReviewLikesCreateOrConnectWithoutReviewInput[]
    createMany?: UserReviewLikesCreateManyReviewInputEnvelope
    connect?: UserReviewLikesWhereUniqueInput | UserReviewLikesWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<UserCreateWithoutReviewInput, UserUncheckedCreateWithoutReviewInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewInput
    upsert?: UserUpsertWithoutReviewInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewInput, UserUpdateWithoutReviewInput>, UserUncheckedUpdateWithoutReviewInput>
  }

  export type UserReviewLikesUpdateManyWithoutReviewNestedInput = {
    create?: XOR<UserReviewLikesCreateWithoutReviewInput, UserReviewLikesUncheckedCreateWithoutReviewInput> | UserReviewLikesCreateWithoutReviewInput[] | UserReviewLikesUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: UserReviewLikesCreateOrConnectWithoutReviewInput | UserReviewLikesCreateOrConnectWithoutReviewInput[]
    upsert?: UserReviewLikesUpsertWithWhereUniqueWithoutReviewInput | UserReviewLikesUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: UserReviewLikesCreateManyReviewInputEnvelope
    set?: UserReviewLikesWhereUniqueInput | UserReviewLikesWhereUniqueInput[]
    disconnect?: UserReviewLikesWhereUniqueInput | UserReviewLikesWhereUniqueInput[]
    delete?: UserReviewLikesWhereUniqueInput | UserReviewLikesWhereUniqueInput[]
    connect?: UserReviewLikesWhereUniqueInput | UserReviewLikesWhereUniqueInput[]
    update?: UserReviewLikesUpdateWithWhereUniqueWithoutReviewInput | UserReviewLikesUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: UserReviewLikesUpdateManyWithWhereWithoutReviewInput | UserReviewLikesUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: UserReviewLikesScalarWhereInput | UserReviewLikesScalarWhereInput[]
  }

  export type UserReviewLikesUncheckedUpdateManyWithoutReviewNestedInput = {
    create?: XOR<UserReviewLikesCreateWithoutReviewInput, UserReviewLikesUncheckedCreateWithoutReviewInput> | UserReviewLikesCreateWithoutReviewInput[] | UserReviewLikesUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: UserReviewLikesCreateOrConnectWithoutReviewInput | UserReviewLikesCreateOrConnectWithoutReviewInput[]
    upsert?: UserReviewLikesUpsertWithWhereUniqueWithoutReviewInput | UserReviewLikesUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: UserReviewLikesCreateManyReviewInputEnvelope
    set?: UserReviewLikesWhereUniqueInput | UserReviewLikesWhereUniqueInput[]
    disconnect?: UserReviewLikesWhereUniqueInput | UserReviewLikesWhereUniqueInput[]
    delete?: UserReviewLikesWhereUniqueInput | UserReviewLikesWhereUniqueInput[]
    connect?: UserReviewLikesWhereUniqueInput | UserReviewLikesWhereUniqueInput[]
    update?: UserReviewLikesUpdateWithWhereUniqueWithoutReviewInput | UserReviewLikesUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: UserReviewLikesUpdateManyWithWhereWithoutReviewInput | UserReviewLikesUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: UserReviewLikesScalarWhereInput | UserReviewLikesScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserReviewLikesInput = {
    create?: XOR<UserCreateWithoutUserReviewLikesInput, UserUncheckedCreateWithoutUserReviewLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserReviewLikesInput
    connect?: UserWhereUniqueInput
  }

  export type ReviewCreateNestedOneWithoutUserReviewLikesInput = {
    create?: XOR<ReviewCreateWithoutUserReviewLikesInput, ReviewUncheckedCreateWithoutUserReviewLikesInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutUserReviewLikesInput
    connect?: ReviewWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserReviewLikesNestedInput = {
    create?: XOR<UserCreateWithoutUserReviewLikesInput, UserUncheckedCreateWithoutUserReviewLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserReviewLikesInput
    upsert?: UserUpsertWithoutUserReviewLikesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserReviewLikesInput, UserUpdateWithoutUserReviewLikesInput>, UserUncheckedUpdateWithoutUserReviewLikesInput>
  }

  export type ReviewUpdateOneRequiredWithoutUserReviewLikesNestedInput = {
    create?: XOR<ReviewCreateWithoutUserReviewLikesInput, ReviewUncheckedCreateWithoutUserReviewLikesInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutUserReviewLikesInput
    upsert?: ReviewUpsertWithoutUserReviewLikesInput
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutUserReviewLikesInput, ReviewUpdateWithoutUserReviewLikesInput>, ReviewUncheckedUpdateWithoutUserReviewLikesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type ReviewCreateWithoutAuthorInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    rating: number
    albumId: string
    content: string
    UserReviewLikes?: UserReviewLikesCreateNestedManyWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutAuthorInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    rating: number
    albumId: string
    content: string
    UserReviewLikes?: UserReviewLikesUncheckedCreateNestedManyWithoutReviewInput
  }

  export type ReviewCreateOrConnectWithoutAuthorInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutAuthorInput, ReviewUncheckedCreateWithoutAuthorInput>
  }

  export type ReviewCreateManyAuthorInputEnvelope = {
    data: ReviewCreateManyAuthorInput | ReviewCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type UserReviewLikesCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    review: ReviewCreateNestedOneWithoutUserReviewLikesInput
  }

  export type UserReviewLikesUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewId: number
  }

  export type UserReviewLikesCreateOrConnectWithoutUserInput = {
    where: UserReviewLikesWhereUniqueInput
    create: XOR<UserReviewLikesCreateWithoutUserInput, UserReviewLikesUncheckedCreateWithoutUserInput>
  }

  export type UserReviewLikesCreateManyUserInputEnvelope = {
    data: UserReviewLikesCreateManyUserInput | UserReviewLikesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewUpsertWithWhereUniqueWithoutAuthorInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutAuthorInput, ReviewUncheckedUpdateWithoutAuthorInput>
    create: XOR<ReviewCreateWithoutAuthorInput, ReviewUncheckedCreateWithoutAuthorInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutAuthorInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutAuthorInput, ReviewUncheckedUpdateWithoutAuthorInput>
  }

  export type ReviewUpdateManyWithWhereWithoutAuthorInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutAuthorInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: IntFilter<"Review"> | number
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    rating?: IntFilter<"Review"> | number
    albumId?: StringFilter<"Review"> | string
    content?: StringFilter<"Review"> | string
    authorId?: IntFilter<"Review"> | number
  }

  export type UserReviewLikesUpsertWithWhereUniqueWithoutUserInput = {
    where: UserReviewLikesWhereUniqueInput
    update: XOR<UserReviewLikesUpdateWithoutUserInput, UserReviewLikesUncheckedUpdateWithoutUserInput>
    create: XOR<UserReviewLikesCreateWithoutUserInput, UserReviewLikesUncheckedCreateWithoutUserInput>
  }

  export type UserReviewLikesUpdateWithWhereUniqueWithoutUserInput = {
    where: UserReviewLikesWhereUniqueInput
    data: XOR<UserReviewLikesUpdateWithoutUserInput, UserReviewLikesUncheckedUpdateWithoutUserInput>
  }

  export type UserReviewLikesUpdateManyWithWhereWithoutUserInput = {
    where: UserReviewLikesScalarWhereInput
    data: XOR<UserReviewLikesUpdateManyMutationInput, UserReviewLikesUncheckedUpdateManyWithoutUserInput>
  }

  export type UserReviewLikesScalarWhereInput = {
    AND?: UserReviewLikesScalarWhereInput | UserReviewLikesScalarWhereInput[]
    OR?: UserReviewLikesScalarWhereInput[]
    NOT?: UserReviewLikesScalarWhereInput | UserReviewLikesScalarWhereInput[]
    id?: IntFilter<"UserReviewLikes"> | number
    createdAt?: DateTimeFilter<"UserReviewLikes"> | Date | string
    updatedAt?: DateTimeFilter<"UserReviewLikes"> | Date | string
    userId?: IntFilter<"UserReviewLikes"> | number
    reviewId?: IntFilter<"UserReviewLikes"> | number
  }

  export type UserCreateWithoutReviewInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    auth0Id?: string
    name: string
    email: string
    UserReviewLikes?: UserReviewLikesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    auth0Id?: string
    name: string
    email: string
    UserReviewLikes?: UserReviewLikesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewInput, UserUncheckedCreateWithoutReviewInput>
  }

  export type UserReviewLikesCreateWithoutReviewInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserReviewLikesInput
  }

  export type UserReviewLikesUncheckedCreateWithoutReviewInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type UserReviewLikesCreateOrConnectWithoutReviewInput = {
    where: UserReviewLikesWhereUniqueInput
    create: XOR<UserReviewLikesCreateWithoutReviewInput, UserReviewLikesUncheckedCreateWithoutReviewInput>
  }

  export type UserReviewLikesCreateManyReviewInputEnvelope = {
    data: UserReviewLikesCreateManyReviewInput | UserReviewLikesCreateManyReviewInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutReviewInput = {
    update: XOR<UserUpdateWithoutReviewInput, UserUncheckedUpdateWithoutReviewInput>
    create: XOR<UserCreateWithoutReviewInput, UserUncheckedCreateWithoutReviewInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewInput, UserUncheckedUpdateWithoutReviewInput>
  }

  export type UserUpdateWithoutReviewInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auth0Id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    UserReviewLikes?: UserReviewLikesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auth0Id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    UserReviewLikes?: UserReviewLikesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserReviewLikesUpsertWithWhereUniqueWithoutReviewInput = {
    where: UserReviewLikesWhereUniqueInput
    update: XOR<UserReviewLikesUpdateWithoutReviewInput, UserReviewLikesUncheckedUpdateWithoutReviewInput>
    create: XOR<UserReviewLikesCreateWithoutReviewInput, UserReviewLikesUncheckedCreateWithoutReviewInput>
  }

  export type UserReviewLikesUpdateWithWhereUniqueWithoutReviewInput = {
    where: UserReviewLikesWhereUniqueInput
    data: XOR<UserReviewLikesUpdateWithoutReviewInput, UserReviewLikesUncheckedUpdateWithoutReviewInput>
  }

  export type UserReviewLikesUpdateManyWithWhereWithoutReviewInput = {
    where: UserReviewLikesScalarWhereInput
    data: XOR<UserReviewLikesUpdateManyMutationInput, UserReviewLikesUncheckedUpdateManyWithoutReviewInput>
  }

  export type UserCreateWithoutUserReviewLikesInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    auth0Id?: string
    name: string
    email: string
    Review?: ReviewCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutUserReviewLikesInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    auth0Id?: string
    name: string
    email: string
    Review?: ReviewUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutUserReviewLikesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserReviewLikesInput, UserUncheckedCreateWithoutUserReviewLikesInput>
  }

  export type ReviewCreateWithoutUserReviewLikesInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    rating: number
    albumId: string
    content: string
    author: UserCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutUserReviewLikesInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    rating: number
    albumId: string
    content: string
    authorId: number
  }

  export type ReviewCreateOrConnectWithoutUserReviewLikesInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserReviewLikesInput, ReviewUncheckedCreateWithoutUserReviewLikesInput>
  }

  export type UserUpsertWithoutUserReviewLikesInput = {
    update: XOR<UserUpdateWithoutUserReviewLikesInput, UserUncheckedUpdateWithoutUserReviewLikesInput>
    create: XOR<UserCreateWithoutUserReviewLikesInput, UserUncheckedCreateWithoutUserReviewLikesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserReviewLikesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserReviewLikesInput, UserUncheckedUpdateWithoutUserReviewLikesInput>
  }

  export type UserUpdateWithoutUserReviewLikesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auth0Id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Review?: ReviewUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutUserReviewLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auth0Id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Review?: ReviewUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type ReviewUpsertWithoutUserReviewLikesInput = {
    update: XOR<ReviewUpdateWithoutUserReviewLikesInput, ReviewUncheckedUpdateWithoutUserReviewLikesInput>
    create: XOR<ReviewCreateWithoutUserReviewLikesInput, ReviewUncheckedCreateWithoutUserReviewLikesInput>
    where?: ReviewWhereInput
  }

  export type ReviewUpdateToOneWithWhereWithoutUserReviewLikesInput = {
    where?: ReviewWhereInput
    data: XOR<ReviewUpdateWithoutUserReviewLikesInput, ReviewUncheckedUpdateWithoutUserReviewLikesInput>
  }

  export type ReviewUpdateWithoutUserReviewLikesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
    albumId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutUserReviewLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
    albumId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewCreateManyAuthorInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    rating: number
    albumId: string
    content: string
  }

  export type UserReviewLikesCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewId: number
  }

  export type ReviewUpdateWithoutAuthorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
    albumId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    UserReviewLikes?: UserReviewLikesUpdateManyWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
    albumId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    UserReviewLikes?: UserReviewLikesUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
    albumId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
  }

  export type UserReviewLikesUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: ReviewUpdateOneRequiredWithoutUserReviewLikesNestedInput
  }

  export type UserReviewLikesUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewId?: IntFieldUpdateOperationsInput | number
  }

  export type UserReviewLikesUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewId?: IntFieldUpdateOperationsInput | number
  }

  export type UserReviewLikesCreateManyReviewInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type UserReviewLikesUpdateWithoutReviewInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserReviewLikesNestedInput
  }

  export type UserReviewLikesUncheckedUpdateWithoutReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserReviewLikesUncheckedUpdateManyWithoutReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReviewCountOutputTypeDefaultArgs instead
     */
    export type ReviewCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReviewCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReviewDefaultArgs instead
     */
    export type ReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReviewDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserReviewLikesDefaultArgs instead
     */
    export type UserReviewLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserReviewLikesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SpotifyTokenDefaultArgs instead
     */
    export type SpotifyTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SpotifyTokenDefaultArgs<ExtArgs>

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