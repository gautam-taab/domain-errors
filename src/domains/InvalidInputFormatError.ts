import { UnprocessableEntityError } from "../core/UnprocessableEntityError";
import { ErrorOptions } from "../types/ErrorOptions";

export class InvalidInputFormatError extends UnprocessableEntityError {
  constructor(options: ErrorOptions = {}) {
    super({
      detail: options.detail || "The provided input format is invalid",
      code: options.code || "INVALID_INPUT_FORMAT",
      ...options,
    });
  }
}
