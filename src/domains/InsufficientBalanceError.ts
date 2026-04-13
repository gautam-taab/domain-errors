import { BadRequestError } from "../core/BadRequestError";
import { ErrorOptions } from "../types/ErrorOptions";

export class InsufficientBalanceError extends BadRequestError {
  constructor(options: ErrorOptions = {}) {
    super({
      detail: options.detail || "Not enough balance to perform this action",
      code: options.code || "INSUFFICIENT_BALANCE",
      ...options,
    });
  }
}
