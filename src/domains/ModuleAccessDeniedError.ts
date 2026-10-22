import { ForbiddenError } from "../core/ForbiddenError";
import { ErrorOptions } from "../types/ErrorOptions";

export class ModuleAccessDeniedError extends ForbiddenError {
  constructor(options: ErrorOptions = {}) {
    super({
      detail:
        options.detail ||
        "This client does not have access to this module",
      code: options.code || "MODULE_ACCESS_DENIED",
      ...options,
    });
  }
}
