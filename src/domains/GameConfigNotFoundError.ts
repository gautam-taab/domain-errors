import { NotFoundError } from "../core/NotFoundError";
import { ErrorOptions } from "../types/ErrorOptions";

export class GameConfigNotFoundError extends NotFoundError {
  constructor(options: ErrorOptions = {}) {
    super({
      detail: options.detail || "No game configuration was found",
      code: options.code || "GAME_CONFIG_NOT_FOUND",
      ...options,
    });
  }
}
