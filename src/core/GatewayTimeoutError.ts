import { DomainError } from "./DomainError";
import { ErrorOptions } from "../types/ErrorOptions";

export class GatewayTimeoutError extends DomainError {
  constructor(options: ErrorOptions = {}) {
    super({
      type: "gateway-timeout",
      title: "Gateway Timeout",
      status: 504,
      ...options,
    });
  }
}
