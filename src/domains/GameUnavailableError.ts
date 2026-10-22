import { NotFoundError } from "../core/NotFoundError";
import { ErrorOptions } from "../types/ErrorOptions";

export class GameUnavailableError extends NotFoundError {
  constructor(options: ErrorOptions = {}) {
    super({
      detail: options.detail || "This game is not available",
      code: options.code || "GAME_UNAVAILABLE",
      ...options,
    });
  }
}
