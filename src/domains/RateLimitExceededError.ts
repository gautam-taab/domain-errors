import { TooManyRequestsError } from "../core/TooManyRequestsError";
import { ErrorOptions } from "../types/ErrorOptions";

export class RateLimitExceededError extends TooManyRequestsError {
  constructor(options: ErrorOptions = {}) {
    super({
      detail: options.detail || "You have exceeded the maximum number of requests allowed",
      code: options.code || "RATE_LIMIT_EXCEEDED",
      ...options,
    });
  }
}
