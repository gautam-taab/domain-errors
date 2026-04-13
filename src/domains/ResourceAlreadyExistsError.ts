import { ConflictError } from "../core/ConflictError";
import { ErrorOptions } from "../types/ErrorOptions";

export class ResourceAlreadyExistsError extends ConflictError {
  constructor(options: ErrorOptions = {}) {
    super({
      detail: options.detail || "The requested resource already exists",
      code: options.code || "RESOURCE_ALREADY_EXISTS",
      ...options,
    });
  }
}
