import { InternalServerError } from "../core/InternalServerError";
import { ErrorOptions } from "../types/ErrorOptions";

export class WalletMisconfiguredError extends InternalServerError {
  constructor(options: ErrorOptions = {}) {
    super({
      detail: options.detail || "The wallet for this client is not configured",
      code: options.code || "WALLET_MISCONFIGURED",
      ...options,
    });
  }
}
