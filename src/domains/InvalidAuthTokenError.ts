import { UnauthorizedError } from "../core/UnauthorizedError";
import { ErrorOptions } from "../types/ErrorOptions";

export class InvalidAuthTokenError extends UnauthorizedError {
  constructor(options: ErrorOptions = {}) {
    super({
      detail: options.detail || "Authentication token is invalid or expired",
      code: options.code || "INVALID_AUTH_TOKEN",
      ...options,
    });
  }
}
