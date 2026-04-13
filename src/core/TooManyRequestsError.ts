import { DomainError } from "./DomainError";
import { ErrorOptions } from "../types/ErrorOptions";

export class TooManyRequestsError extends DomainError {
  constructor(options: ErrorOptions = {}) {
    super({
      type: "too-many-requests",
      title: "Too Many Requests",
      status: 429,
      ...options,
    });
  }
}
