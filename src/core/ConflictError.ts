import { DomainError } from "./DomainError";
import { ErrorOptions } from "../types/ErrorOptions";

export class ConflictError extends DomainError {
  constructor(options: ErrorOptions = {}) {
    super({
      type: "conflict",
      title: "Conflict",
      status: 409,
      ...options,
    });
  }
}
