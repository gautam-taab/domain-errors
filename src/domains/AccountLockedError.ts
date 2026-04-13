import { ForbiddenError } from "../core/ForbiddenError";
import { ErrorOptions } from "../types/ErrorOptions";

export class AccountLockedError extends ForbiddenError {
  constructor(options: ErrorOptions = {}) {
    super({
      detail: options.detail || "This account has been locked due to suspicious activity",
      code: options.code || "ACCOUNT_LOCKED",
      ...options,
    });
  }
}
