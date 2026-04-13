import { UnauthorizedError } from "../core/UnauthorizedError";
import { ErrorOptions } from "../types/ErrorOptions";

export class InvalidCredentialsError extends UnauthorizedError {
  constructor(options: ErrorOptions = {}) {
    super({
      detail: options.detail || "Invalid email or password provided",
      code: options.code || "INVALID_CREDENTIALS",
      ...options,
    });
  }
}
