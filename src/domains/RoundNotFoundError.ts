import { NotFoundError } from "../core/NotFoundError";
import { ErrorOptions } from "../types/ErrorOptions";

export class RoundNotFoundError extends NotFoundError {
  constructor(options: ErrorOptions = {}) {
    super({
      detail: options.detail || "No active round was found",
      code: options.code || "ROUND_NOT_FOUND",
      ...options,
    });
  }
}
