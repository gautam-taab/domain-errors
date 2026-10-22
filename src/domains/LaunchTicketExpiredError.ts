import { UnauthorizedError } from "../core/UnauthorizedError";
import { ErrorOptions } from "../types/ErrorOptions";

export class LaunchTicketExpiredError extends UnauthorizedError {
  constructor(options: ErrorOptions = {}) {
    super({
      detail:
        options.detail ||
        "The launch ticket has expired. Launch the game again",
      code: options.code || "LAUNCH_TICKET_EXPIRED",
      ...options,
    });
  }
}
