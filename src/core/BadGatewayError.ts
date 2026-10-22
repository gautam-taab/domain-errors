import { DomainError } from "./DomainError";
import { ErrorOptions } from "../types/ErrorOptions";

export class BadGatewayError extends DomainError {
  constructor(options: ErrorOptions = {}) {
    super({
      type: "bad-gateway",
      title: "Bad Gateway",
      status: 502,
      ...options,
    });
  }
}
