import { ForbiddenError } from "../core/ForbiddenError";
import { ErrorOptions } from "../types/ErrorOptions";

export class RegionBlockedError extends ForbiddenError {
  constructor(options: ErrorOptions = {}) {
    super({
      detail: options.detail || "Access from this region is not allowed",
      code: options.code || "REGION_BLOCKED",
      ...options,
    });
  }
}
