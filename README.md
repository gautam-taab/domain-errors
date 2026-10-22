# @gautam-taab/domain-errors

Typed errors shared across TAAB services. Each error carries an HTTP status and serializes to an
[RFC 7807](https://datatracker.ietf.org/doc/html/rfc7807) Problem Details object.

## Install

```sh
npm install @gautam-taab/domain-errors
```

## Usage

```ts
import { UserNotFoundError, formatDomainError } from "@gautam-taab/domain-errors";

throw new UserNotFoundError({ detail: "User 1234 was not found", instance: "/users/1234" });

// In an error handler:
const problem = formatDomainError(err, req.originalUrl);
res.status(problem.status).json(problem);
// { type: "not-found", title: "Not Found", status: 404, detail: "User 1234 was not found",
//   instance: "/users/1234", code: "USER_NOT_FOUND" }
```

Works with both `import` and `require`.

## Errors

- **Core errors** set the HTTP status, `type` and `title`: `BadRequestError` (400), `UnauthorizedError` (401),
  `ForbiddenError` (403), `NotFoundError` (404), `ConflictError` (409), `UnprocessableEntityError` (422),
  `TooManyRequestsError` (429), `InternalServerError` (500), `BadGatewayError` (502), `ServiceUnavailableError` (503),
  `GatewayTimeoutError` (504).
- **Domain errors** extend a core error and add a default `detail` and an UPPER_SNAKE `code`, for example
  `UserNotFoundError` (`USER_NOT_FOUND`) or `InsufficientBalanceError` (`INSUFFICIENT_BALANCE`). All are exported
  from the package root.

Every constructor takes optional `ErrorOptions`:

| Option | Effect |
| :-- | :-- |
| `detail` | Replaces the default detail. Also becomes `error.message`. |
| `code` | Replaces the default code. |
| `instance` | URI of the failing request or resource. |
| `extensions` | Extra fields, merged into the top level of the Problem Details object. |

`status`, `type` and `title` cannot be overridden: they come from the core error.

`formatDomainError(error, defaultInstance?)` returns the Problem Details object. Any error that is not a domain error
becomes a 500 with its `message` as `detail`.

## Development

```sh
npm ci
npm test
npm run build   # cleans dist/, then compiles
npm publish     # builds and runs the tests first
```
