import { UnprocessableEntityError } from "../core/UnprocessableEntityError";
import { ErrorOptions } from "../types/ErrorOptions";

export class ConstraintError extends UnprocessableEntityError {
  constructor(options: ErrorOptions = {}) {
    super({
      detail:
        options.detail ||
        "The operation could not be completed due to a constraint violation. Please check the details for more information.",
      code: options.code || "CONSTRAINT_ERROR",
      ...options,
    });
  }
}
