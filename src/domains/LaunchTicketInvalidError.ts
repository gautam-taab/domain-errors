import { UnauthorizedError } from "../core/UnauthorizedError";
import { ErrorOptions } from "../types/ErrorOptions";

export class LaunchTicketInvalidError extends UnauthorizedError {
  constructor(options: ErrorOptions = {}) {
    super({
      detail:
        options.detail ||
        "The launch ticket is invalid or was already used",
      code: options.code || "LAUNCH_TICKET_INVALID",
      ...options,
    });
  }
}
