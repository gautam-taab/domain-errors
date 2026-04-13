import { BadRequestError } from "../core/BadRequestError";
import { ErrorOptions } from "../types/ErrorOptions";

export class PaymentFailedError extends BadRequestError {
  constructor(options: ErrorOptions = {}) {
    super({
      detail: options.detail || "The payment transaction could not be processed",
      code: options.code || "PAYMENT_FAILED",
      ...options,
    });
  }
}
