import { NotFoundError } from "../core/NotFoundError";
import { ErrorOptions } from "../types/ErrorOptions";

export class BetNotFoundError extends NotFoundError {
  constructor(options: ErrorOptions = {}) {
    super({
      detail: options.detail || "The bet was not found",
      code: options.code || "BET_NOT_FOUND",
      ...options,
    });
  }
}
