import { NotFoundError } from "../core/NotFoundError";
import { ErrorOptions } from "../types/ErrorOptions";

export class ClientNotFoundError extends NotFoundError {
  constructor(options: ErrorOptions = {}) {
    super({
      detail: options.detail || "The client was not found",
      code: options.code || "CLIENT_NOT_FOUND",
      ...options,
    });
  }
}
