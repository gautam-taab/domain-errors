import { ForbiddenError } from "../core/ForbiddenError";
import { ErrorOptions } from "../types/ErrorOptions";

export class BogonNetworkError extends ForbiddenError {
  constructor(options: ErrorOptions = {}) {
    super({
      detail: options.detail || "Access from private or local network is not allowed",
      code: options.code || "BOGON_NETWORK",
      ...options,
    });
  }
}
