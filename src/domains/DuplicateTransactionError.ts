import { ConflictError } from "../core/ConflictError";
import { ErrorOptions } from "../types/ErrorOptions";

export class DuplicateTransactionError extends ConflictError {
  constructor(options: ErrorOptions = {}) {
    super({
      detail:
        options.detail ||
        "This transaction id was already used with different data",
      code: options.code || "DUPLICATE_TRANSACTION",
      ...options,
    });
  }
}
