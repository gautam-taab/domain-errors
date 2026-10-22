import { UnprocessableEntityError } from "../core/UnprocessableEntityError";
import { ErrorOptions } from "../types/ErrorOptions";

export class InvalidAmountError extends UnprocessableEntityError {
  constructor(options: ErrorOptions = {}) {
    super({
      detail:
        options.detail ||
        "The amount must be at least 0.01 with at most 2 decimals",
      code: options.code || "INVALID_AMOUNT",
      ...options,
    });
  }
}
