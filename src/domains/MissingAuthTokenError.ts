import { UnauthorizedError } from "../core/UnauthorizedError";
import { ErrorOptions } from "../types/ErrorOptions";

export class MissingAuthTokenError extends UnauthorizedError {
  constructor(options: ErrorOptions = {}) {
    super({
      detail: options.detail || "Authentication token is missing",
      code: options.code || "MISSING_AUTH_TOKEN",
      ...options,
    });
  }
}
