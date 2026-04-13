import { DomainError } from "./DomainError";
import { ErrorOptions } from "../types/ErrorOptions";

export class UnprocessableEntityError extends DomainError {
  constructor(options: ErrorOptions = {}) {
    super({
      type: "unprocessable-entity",
      title: "Unprocessable Entity",
      status: 422,
      ...options,
    });
  }
}
