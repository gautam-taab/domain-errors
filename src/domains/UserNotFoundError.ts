import { NotFoundError } from "../core/NotFoundError";
import { ErrorOptions } from "../types/ErrorOptions";

export class UserNotFoundError extends NotFoundError {
  constructor(options: ErrorOptions = {}) {
    super({
      detail: options.detail || "The requested user was not found",
      code: options.code || "USER_NOT_FOUND",
      ...options,
    });
  }
}
