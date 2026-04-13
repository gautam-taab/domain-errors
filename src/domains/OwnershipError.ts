import { ForbiddenError } from "../core/ForbiddenError";
import { ErrorOptions } from "../types/ErrorOptions";

export class OwnershipError extends ForbiddenError {
  constructor(options: ErrorOptions = {}) {
    super({
      detail:
        options.detail ||
        "You do not have permission to perform this action because you do not own the resource",
      code: options.code || "OWNERSHIP_ERROR",
      ...options,
    });
  }
}
