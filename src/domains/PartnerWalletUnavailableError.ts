import { ServiceUnavailableError } from "../core/ServiceUnavailableError";
import { ErrorOptions } from "../types/ErrorOptions";

export class PartnerWalletUnavailableError extends ServiceUnavailableError {
  constructor(options: ErrorOptions = {}) {
    super({
      detail:
        options.detail ||
        "The partner wallet could not be reached. The action was not completed",
      code: options.code || "PARTNER_WALLET_UNAVAILABLE",
      ...options,
    });
  }
}
