import { NotFoundError } from "../core/NotFoundError";
import { ErrorOptions } from "../types/ErrorOptions";

export class PlayerNotFoundError extends NotFoundError {
  constructor(options: ErrorOptions = {}) {
    super({
      detail: options.detail || "The player was not found",
      code: options.code || "PLAYER_NOT_FOUND",
      ...options,
    });
  }
}
