import { UnprocessableEntityError } from "../core/UnprocessableEntityError";
import { ErrorOptions } from "../types/ErrorOptions";

export class CurrencyNotEnabledError extends UnprocessableEntityError {
  constructor(options: ErrorOptions = {}) {
    super({
      detail: options.detail || "This currency is not enabled for this client",
      code: options.code || "CURRENCY_NOT_ENABLED",
      ...options,
    });
  }
}
