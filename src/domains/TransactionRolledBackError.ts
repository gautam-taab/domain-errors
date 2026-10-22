import { ConflictError } from "../core/ConflictError";
import { ErrorOptions } from "../types/ErrorOptions";

export class TransactionRolledBackError extends ConflictError {
  constructor(options: ErrorOptions = {}) {
    super({
      detail: options.detail || "This transaction was already rolled back",
      code: options.code || "TRANSACTION_ROLLED_BACK",
      ...options,
    });
  }
}
