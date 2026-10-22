import { ConflictError } from "../core/ConflictError";
import { ErrorOptions } from "../types/ErrorOptions";

export class BetAlreadySettledError extends ConflictError {
  constructor(options: ErrorOptions = {}) {
    super({
      detail: options.detail || "This bet is already settled",
      code: options.code || "BET_ALREADY_SETTLED",
      ...options,
    });
  }
}
