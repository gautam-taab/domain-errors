import { ConflictError } from "../core/ConflictError";
import { ErrorOptions } from "../types/ErrorOptions";

export class BalanceBusyError extends ConflictError {
  constructor(options: ErrorOptions = {}) {
    super({
      detail: options.detail || "The balance is being updated. Try again",
      code: options.code || "BALANCE_BUSY",
      ...options,
    });
  }
}
