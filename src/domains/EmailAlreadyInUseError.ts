import { ConflictError } from "../core/ConflictError";
import { ErrorOptions } from "../types/ErrorOptions";

export class EmailAlreadyInUseError extends ConflictError {
  constructor(options: ErrorOptions = {}) {
    super({
      detail: options.detail || "The provided email address is already registered",
      code: options.code || "EMAIL_ALREADY_IN_USE",
      ...options,
    });
  }
}
