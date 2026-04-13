import { DomainError } from "./DomainError";
import { ErrorOptions } from "../types/ErrorOptions";

export class InternalServerError extends DomainError {
  constructor(options: ErrorOptions = {}) {
    super({
      type: "internal-server-error",
      title: "Internal Server Error",
      status: 500,
      ...options,
    });
  }
}
