import { DomainError } from "./DomainError";
import { ErrorOptions } from "../types/ErrorOptions";

export class NotFoundError extends DomainError {
  constructor(options: ErrorOptions = {}) {
    super({
      type: "not-found",
      title: "Not Found",
      status: 404,
      ...options,
    });
  }
}
