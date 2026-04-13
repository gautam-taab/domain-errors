import { UnauthorizedError } from "../core/UnauthorizedError";
import { ErrorOptions } from "../types/ErrorOptions";

export class StaleSessionError extends UnauthorizedError {
  constructor(options: ErrorOptions = {}) {
    super({
      detail: options.detail || "Session expired. User has a newer session",
      code: options.code || "STALE_SESSION",
      ...options,
    });
  }
}
