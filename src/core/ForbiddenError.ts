import { DomainError } from "./DomainError";
import { ErrorOptions } from "../types/ErrorOptions";

export class ForbiddenError extends DomainError {
  constructor(options: ErrorOptions = {}) {
    super({
      type: "forbidden",
      title: "Forbidden",
      status: 403,
      ...options,
    });
  }
}
