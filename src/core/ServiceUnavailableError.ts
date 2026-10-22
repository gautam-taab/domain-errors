import { DomainError } from "./DomainError";
import { ErrorOptions } from "../types/ErrorOptions";

export class ServiceUnavailableError extends DomainError {
  constructor(options: ErrorOptions = {}) {
    super({
      type: "service-unavailable",
      title: "Service Unavailable",
      status: 503,
      ...options,
    });
  }
}
