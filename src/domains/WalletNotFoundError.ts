import { NotFoundError } from "../core/NotFoundError";
import { ErrorOptions } from "../types/ErrorOptions";

export class WalletNotFoundError extends NotFoundError {
  constructor(options: ErrorOptions = {}) {
    super({
      detail: options.detail || "The player has no wallet in this currency",
      code: options.code || "WALLET_NOT_FOUND",
      ...options,
    });
  }
}
