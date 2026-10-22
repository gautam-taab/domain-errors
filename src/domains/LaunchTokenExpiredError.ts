import { UnauthorizedError } from "../core/UnauthorizedError";
import { ErrorOptions } from "../types/ErrorOptions";

export class LaunchTokenExpiredError extends UnauthorizedError {
  constructor(options: ErrorOptions = {}) {
    super({
      detail:
        options.detail ||
        "The launch token has expired. Launch the game again",
      code: options.code || "LAUNCH_TOKEN_EXPIRED",
      ...options,
    });
  }
}
