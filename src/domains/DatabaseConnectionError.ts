import { InternalServerError } from "../core/InternalServerError";
import { ErrorOptions } from "../types/ErrorOptions";

export class DatabaseConnectionError extends InternalServerError {
  constructor(options: ErrorOptions = {}) {
    super({
      detail: options.detail || "Failed to establish a connection to the database",
      code: options.code || "DATABASE_CONNECTION_ERROR",
      ...options,
    });
  }
}
