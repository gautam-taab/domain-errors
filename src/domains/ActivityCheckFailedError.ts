import { ServiceUnavailableError } from "../core/ServiceUnavailableError";
import { ErrorOptions } from "../types/ErrorOptions";

export class ActivityCheckFailedError extends ServiceUnavailableError {
  constructor(options: ErrorOptions = {}) {
    super({
      detail:
        options.detail ||
        "Could not confirm the player is free to play. Try again shortly",
      code: options.code || "ACTIVITY_CHECK_FAILED",
      ...options,
    });
  }
}
