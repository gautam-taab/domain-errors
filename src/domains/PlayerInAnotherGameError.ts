import { ConflictError } from "../core/ConflictError";
import { ErrorOptions } from "../types/ErrorOptions";

export class PlayerInAnotherGameError extends ConflictError {
  constructor(options: ErrorOptions = {}) {
    super({
      detail:
        options.detail ||
        "The player is playing another game. Finish it first",
      code: options.code || "PLAYER_IN_ANOTHER_GAME",
      ...options,
    });
  }
}
