import { ConflictError } from "../core/ConflictError";
import { ErrorOptions } from "../types/ErrorOptions";

export class BettingClosedError extends ConflictError {
  constructor(options: ErrorOptions = {}) {
    super({
      detail: options.detail || "Betting is closed for this round",
      code: options.code || "BETTING_CLOSED",
      ...options,
    });
  }
}
