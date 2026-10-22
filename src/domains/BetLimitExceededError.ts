import { UnprocessableEntityError } from "../core/UnprocessableEntityError";
import { ErrorOptions } from "../types/ErrorOptions";

export class BetLimitExceededError extends UnprocessableEntityError {
  constructor(options: ErrorOptions = {}) {
    super({
      detail: options.detail || "The bet is outside the allowed limits",
      code: options.code || "BET_LIMIT_EXCEEDED",
      ...options,
    });
  }
}
