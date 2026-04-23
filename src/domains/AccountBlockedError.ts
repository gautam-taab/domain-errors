import { ForbiddenError } from "../core/ForbiddenError";
import { ErrorOptions } from "../types/ErrorOptions";

export class AccountBlockedError extends ForbiddenError {
  constructor(options: ErrorOptions = {}) {
    super({
      detail: options.detail || "This account has been blocked",
      code: options.code || "ACCOUNT_BLOCKED",
      ...options,
    });
  }
}
