import { GatewayTimeoutError } from "../core/GatewayTimeoutError";
import { ErrorOptions } from "../types/ErrorOptions";

export class PartnerWalletTimeoutError extends GatewayTimeoutError {
  constructor(options: ErrorOptions = {}) {
    super({
      detail:
        options.detail ||
        "The partner wallet did not respond in time. The action is being reconciled",
      code: options.code || "PARTNER_WALLET_TIMEOUT",
      ...options,
    });
  }
}
