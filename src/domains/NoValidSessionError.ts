import { UnauthorizedError } from "../core/UnauthorizedError";
import { ErrorOptions } from "../types/ErrorOptions";

export class NoValidSessionError extends UnauthorizedError {
  constructor(options: ErrorOptions = {}) {
    super({
      detail:
        options.detail || "No valid session for user. Re-authentication needed",
      code: options.code || "NO_VALID_SESSION",
      ...options,
    });
  }
}
