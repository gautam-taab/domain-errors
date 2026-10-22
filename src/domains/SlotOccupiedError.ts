import { ConflictError } from "../core/ConflictError";
import { ErrorOptions } from "../types/ErrorOptions";

export class SlotOccupiedError extends ConflictError {
  constructor(options: ErrorOptions = {}) {
    super({
      detail: options.detail || "This slot already has a bet",
      code: options.code || "SLOT_OCCUPIED",
      ...options,
    });
  }
}
