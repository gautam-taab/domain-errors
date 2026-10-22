import { ConflictError } from "../core/ConflictError";
import { ErrorOptions } from "../types/ErrorOptions";

export class TransactionInProgressError extends ConflictError {
  constructor(options: ErrorOptions = {}) {
    super({
      detail: options.detail || "This transaction is still being processed",
      code: options.code || "TRANSACTION_IN_PROGRESS",
      ...options,
    });
  }
}
