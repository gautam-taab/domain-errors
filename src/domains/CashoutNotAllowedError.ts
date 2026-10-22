import { ConflictError } from "../core/ConflictError";
import { ErrorOptions } from "../types/ErrorOptions";

export class CashoutNotAllowedError extends ConflictError {
  constructor(options: ErrorOptions = {}) {
    super({
      detail: options.detail || "Cash-out is not possible at this moment",
      code: options.code || "CASHOUT_NOT_ALLOWED",
      ...options,
    });
  }
}
