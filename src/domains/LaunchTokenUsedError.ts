import { UnauthorizedError } from "../core/UnauthorizedError";
import { ErrorOptions } from "../types/ErrorOptions";

export class LaunchTokenUsedError extends UnauthorizedError {
  constructor(options: ErrorOptions = {}) {
    super({
      detail:
        options.detail ||
        "This launch link was already used. Launch the game again",
      code: options.code || "LAUNCH_TOKEN_USED",
      ...options,
    });
  }
}
