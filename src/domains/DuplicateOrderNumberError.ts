import { ConflictError } from "../core/ConflictError";
import { ErrorOptions } from "../types/ErrorOptions";

export class DuplicateOrderNumberError extends ConflictError {
  constructor(options: ErrorOptions = {}) {
    super({
      detail: options.detail || "This order number was already used",
      code: options.code || "DUPLICATE_ORDER_NUMBER",
      ...options,
    });
  }
}
