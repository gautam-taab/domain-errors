import { NotFoundError } from "../core/NotFoundError";
import { ErrorOptions } from "../types/ErrorOptions";

export class TransactionNotFoundError extends NotFoundError {
  constructor(options: ErrorOptions = {}) {
    super({
      detail: options.detail || "The related transaction was not found",
      code: options.code || "TRANSACTION_NOT_FOUND",
      ...options,
    });
  }
}
