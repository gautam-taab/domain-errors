import { UnauthorizedError } from "../core/UnauthorizedError";
import { ErrorOptions } from "../types/ErrorOptions";

export class LaunchTokenInvalidError extends UnauthorizedError {
  constructor(options: ErrorOptions = {}) {
    super({
      detail: options.detail || "The launch token is invalid",
      code: options.code || "LAUNCH_TOKEN_INVALID",
      ...options,
    });
  }
}
