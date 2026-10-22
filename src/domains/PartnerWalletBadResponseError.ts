import { BadGatewayError } from "../core/BadGatewayError";
import { ErrorOptions } from "../types/ErrorOptions";

export class PartnerWalletBadResponseError extends BadGatewayError {
  constructor(options: ErrorOptions = {}) {
    super({
      detail:
        options.detail ||
        "The partner wallet returned an invalid response. The action is being reconciled",
      code: options.code || "PARTNER_WALLET_BAD_RESPONSE",
      ...options,
    });
  }
}
