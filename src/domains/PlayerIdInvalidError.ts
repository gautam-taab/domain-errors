import { UnprocessableEntityError } from "../core/UnprocessableEntityError";
import { ErrorOptions } from "../types/ErrorOptions";

export class PlayerIdInvalidError extends UnprocessableEntityError {
  constructor(options: ErrorOptions = {}) {
    super({
      detail:
        options.detail ||
        "The player id may contain only letters, digits, _ and -, up to 64 characters",
      code: options.code || "PLAYER_ID_INVALID",
      ...options,
    });
  }
}
