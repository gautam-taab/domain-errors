import { DomainError } from "./DomainError";
import { ErrorOptions } from "../types/ErrorOptions";

export class BadRequestError extends DomainError {
  constructor(options: ErrorOptions = {}) {
    super({
      type: "bad-request",
      title: "Bad Request",
      status: 400,
      ...options,
    });
  }
}
