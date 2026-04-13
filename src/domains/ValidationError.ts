import { UnprocessableEntityError } from "../core/UnprocessableEntityError";
import { ErrorOptions } from "../types/ErrorOptions";

export class ValidationError extends UnprocessableEntityError {
  constructor(options: ErrorOptions = {}) {
    super({
      detail:
        options.detail ||
        "One or more validation errors occurred. Please check the details for more information.",
      code: options.code || "VALIDATION_ERROR",
      ...options,
    });
  }
}
