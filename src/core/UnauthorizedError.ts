import { DomainError } from "./DomainError";
import { ErrorOptions } from "../types/ErrorOptions";

export class UnauthorizedError extends DomainError {
  constructor(options: ErrorOptions = {}) {
    super({
      type: "unauthorized",
      title: "Unauthorized",
      status: 401,
      ...options,
    });
  }
}
