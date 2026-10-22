import { ForbiddenError } from "../core/ForbiddenError";
import { ErrorOptions } from "../types/ErrorOptions";

export class TransfersNotAllowedError extends ForbiddenError {
  constructor(options: ErrorOptions = {}) {
    super({
      detail:
        options.detail ||
        "Deposits, withdrawals and transfers are not available for this player",
      code: options.code || "TRANSFERS_NOT_ALLOWED",
      ...options,
    });
  }
}
