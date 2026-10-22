import { describe, it, expect } from "vitest";
import { InsufficientBalanceError } from "./InsufficientBalanceError";
import { PaymentFailedError } from "./PaymentFailedError";
import { UserNotFoundError } from "./UserNotFoundError";
import { InvalidCredentialsError } from "./InvalidCredentialsError";
import { EmailAlreadyInUseError } from "./EmailAlreadyInUseError";
import { ResourceAlreadyExistsError } from "./ResourceAlreadyExistsError";
import { AccountLockedError } from "./AccountLockedError";
import { AccountBlockedError } from "./AccountBlockedError";
import { RateLimitExceededError } from "./RateLimitExceededError";
import { InvalidInputFormatError } from "./InvalidInputFormatError";
import { DatabaseConnectionError } from "./DatabaseConnectionError";
import { ConstraintError } from "./ConstraintError";
import { NoValidSessionError } from "./NoValidSessionError";
import { OwnershipError } from "./OwnershipError";
import { StaleSessionError } from "./StaleSessionError";
import { ValidationError } from "./ValidationError";
import { BogonNetworkError } from "./BogonNetworkError";
import { InvalidAuthTokenError } from "./InvalidAuthTokenError";
import { MissingAuthTokenError } from "./MissingAuthTokenError";
import { RegionBlockedError } from "./RegionBlockedError";
import { LaunchTokenInvalidError } from "./LaunchTokenInvalidError";
import { LaunchTokenExpiredError } from "./LaunchTokenExpiredError";
import { LaunchTokenUsedError } from "./LaunchTokenUsedError";
import { LaunchTicketInvalidError } from "./LaunchTicketInvalidError";
import { LaunchTicketExpiredError } from "./LaunchTicketExpiredError";
import { GameUnavailableError } from "./GameUnavailableError";
import { PlayerNotFoundError } from "./PlayerNotFoundError";
import { PlayerIdInvalidError } from "./PlayerIdInvalidError";
import { PlayerInAnotherGameError } from "./PlayerInAnotherGameError";
import { ActivityCheckFailedError } from "./ActivityCheckFailedError";
import { CurrencyNotEnabledError } from "./CurrencyNotEnabledError";
import { WalletNotFoundError } from "./WalletNotFoundError";
import { InvalidAmountError } from "./InvalidAmountError";
import { BalanceBusyError } from "./BalanceBusyError";
import { TransfersNotAllowedError } from "./TransfersNotAllowedError";
import { DuplicateOrderNumberError } from "./DuplicateOrderNumberError";
import { DuplicateTransactionError } from "./DuplicateTransactionError";
import { TransactionInProgressError } from "./TransactionInProgressError";
import { TransactionNotFoundError } from "./TransactionNotFoundError";
import { TransactionRolledBackError } from "./TransactionRolledBackError";
import { PartnerWalletUnavailableError } from "./PartnerWalletUnavailableError";
import { PartnerWalletTimeoutError } from "./PartnerWalletTimeoutError";
import { PartnerWalletBadResponseError } from "./PartnerWalletBadResponseError";
import { WalletMisconfiguredError } from "./WalletMisconfiguredError";
import { RoundNotFoundError } from "./RoundNotFoundError";
import { BettingClosedError } from "./BettingClosedError";
import { BetNotFoundError } from "./BetNotFoundError";
import { BetAlreadySettledError } from "./BetAlreadySettledError";
import { CashoutNotAllowedError } from "./CashoutNotAllowedError";
import { SlotOccupiedError } from "./SlotOccupiedError";
import { BetLimitExceededError } from "./BetLimitExceededError";
import { GameConfigNotFoundError } from "./GameConfigNotFoundError";
import { ClientNotFoundError } from "./ClientNotFoundError";
import { ModuleAccessDeniedError } from "./ModuleAccessDeniedError";

import { BadRequestError } from "../core/BadRequestError";
import { NotFoundError } from "../core/NotFoundError";
import { UnauthorizedError } from "../core/UnauthorizedError";
import { ConflictError } from "../core/ConflictError";
import { ForbiddenError } from "../core/ForbiddenError";
import { TooManyRequestsError } from "../core/TooManyRequestsError";
import { UnprocessableEntityError } from "../core/UnprocessableEntityError";
import { InternalServerError } from "../core/InternalServerError";
import { ServiceUnavailableError } from "../core/ServiceUnavailableError";
import { GatewayTimeoutError } from "../core/GatewayTimeoutError";
import { BadGatewayError } from "../core/BadGatewayError";

describe("Domain Specific Errors", () => {
  it("InsufficientBalanceError extends BadRequestError", () => {
    const error = new InsufficientBalanceError();
    expect(error instanceof BadRequestError).toBe(true);
    expect(error.status).toBe(400);
    expect(error.code).toBe("INSUFFICIENT_BALANCE");
    expect(error.detail).toBe("Not enough balance to perform this action");
  });

  it("PaymentFailedError extends BadRequestError", () => {
    const error = new PaymentFailedError();
    expect(error instanceof BadRequestError).toBe(true);
    expect(error.status).toBe(400);
    expect(error.code).toBe("PAYMENT_FAILED");
  });

  it("UserNotFoundError extends NotFoundError", () => {
    const error = new UserNotFoundError();
    expect(error instanceof NotFoundError).toBe(true);
    expect(error.status).toBe(404);
    expect(error.code).toBe("USER_NOT_FOUND");
  });

  it("InvalidCredentialsError extends UnauthorizedError", () => {
    const error = new InvalidCredentialsError();
    expect(error instanceof UnauthorizedError).toBe(true);
    expect(error.status).toBe(401);
    expect(error.code).toBe("INVALID_CREDENTIALS");
  });

  it("EmailAlreadyInUseError extends ConflictError", () => {
    const error = new EmailAlreadyInUseError();
    expect(error instanceof ConflictError).toBe(true);
    expect(error.status).toBe(409);
    expect(error.code).toBe("EMAIL_ALREADY_IN_USE");
  });

  it("ResourceAlreadyExistsError extends ConflictError", () => {
    const error = new ResourceAlreadyExistsError();
    expect(error instanceof ConflictError).toBe(true);
    expect(error.status).toBe(409);
    expect(error.code).toBe("RESOURCE_ALREADY_EXISTS");
  });

  it("AccountLockedError extends ForbiddenError", () => {
    const error = new AccountLockedError();
    expect(error instanceof ForbiddenError).toBe(true);
    expect(error.status).toBe(403);
    expect(error.code).toBe("ACCOUNT_LOCKED");
  });

  it("AccountBlockedError extends ForbiddenError", () => {
    const error = new AccountBlockedError();
    expect(error instanceof ForbiddenError).toBe(true);
    expect(error.status).toBe(403);
    expect(error.code).toBe("ACCOUNT_BLOCKED");
  });

  it("RateLimitExceededError extends TooManyRequestsError", () => {
    const error = new RateLimitExceededError();
    expect(error instanceof TooManyRequestsError).toBe(true);
    expect(error.status).toBe(429);
    expect(error.code).toBe("RATE_LIMIT_EXCEEDED");
  });

  it("InvalidInputFormatError extends UnprocessableEntityError", () => {
    const error = new InvalidInputFormatError();
    expect(error instanceof UnprocessableEntityError).toBe(true);
    expect(error.status).toBe(422);
    expect(error.code).toBe("INVALID_INPUT_FORMAT");
  });

  it("DatabaseConnectionError extends InternalServerError", () => {
    const error = new DatabaseConnectionError();
    expect(error instanceof InternalServerError).toBe(true);
    expect(error.status).toBe(500);
    expect(error.code).toBe("DATABASE_CONNECTION_ERROR");
  });

  it("ConstraintError extends UnprocessableEntityError", () => {
    const error = new ConstraintError();
    expect(error instanceof UnprocessableEntityError).toBe(true);
    expect(error.status).toBe(422);
    expect(error.code).toBe("CONSTRAINT_ERROR");
  });

  it("NoValidSessionError extends UnauthorizedError", () => {
    const error = new NoValidSessionError();
    expect(error instanceof UnauthorizedError).toBe(true);
    expect(error.status).toBe(401);
    expect(error.code).toBe("NO_VALID_SESSION");
  });

  it("OwnershipError extends ForbiddenError", () => {
    const error = new OwnershipError();
    expect(error instanceof ForbiddenError).toBe(true);
    expect(error.status).toBe(403);
    expect(error.code).toBe("OWNERSHIP_ERROR");
  });

  it("StaleSessionError extends UnauthorizedError", () => {
    const error = new StaleSessionError();
    expect(error instanceof UnauthorizedError).toBe(true);
    expect(error.status).toBe(401);
    expect(error.code).toBe("STALE_SESSION");
  });

  it("ValidationError extends UnprocessableEntityError", () => {
    const error = new ValidationError();
    expect(error instanceof UnprocessableEntityError).toBe(true);
    expect(error.status).toBe(422);
    expect(error.code).toBe("VALIDATION_ERROR");
  });

  it("BogonNetworkError extends ForbiddenError", () => {
    const error = new BogonNetworkError();
    expect(error instanceof ForbiddenError).toBe(true);
    expect(error.status).toBe(403);
    expect(error.code).toBe("BOGON_NETWORK");
  });

  it("InvalidTokenError extends UnauthorizedError", () => {
    const error = new InvalidAuthTokenError();
    expect(error instanceof UnauthorizedError).toBe(true);
    expect(error.status).toBe(401);
    expect(error.code).toBe("INVALID_AUTH_TOKEN");
  });

  it("MissingAuthTokenError extends UnauthorizedError", () => {
    const error = new MissingAuthTokenError();
    expect(error instanceof UnauthorizedError).toBe(true);
    expect(error.status).toBe(401);
    expect(error.code).toBe("MISSING_AUTH_TOKEN");
  });

  it("RegionBlockedError extends ForbiddenError", () => {
    const error = new RegionBlockedError();
    expect(error instanceof ForbiddenError).toBe(true);
    expect(error.status).toBe(403);
    expect(error.code).toBe("REGION_BLOCKED");
  });

  it("LaunchTokenInvalidError extends UnauthorizedError", () => {
    const error = new LaunchTokenInvalidError();
    expect(error instanceof UnauthorizedError).toBe(true);
    expect(error.status).toBe(401);
    expect(error.title).toBe(new UnauthorizedError().title);
    expect(error.code).toBe("LAUNCH_TOKEN_INVALID");
    expect(error.detail).toBe("The launch token is invalid");
  });

  it("LaunchTokenExpiredError extends UnauthorizedError", () => {
    const error = new LaunchTokenExpiredError();
    expect(error instanceof UnauthorizedError).toBe(true);
    expect(error.status).toBe(401);
    expect(error.title).toBe(new UnauthorizedError().title);
    expect(error.code).toBe("LAUNCH_TOKEN_EXPIRED");
    expect(error.detail).toBe("The launch token has expired. Launch the game again");
  });

  it("LaunchTokenUsedError extends UnauthorizedError", () => {
    const error = new LaunchTokenUsedError();
    expect(error instanceof UnauthorizedError).toBe(true);
    expect(error.status).toBe(401);
    expect(error.title).toBe(new UnauthorizedError().title);
    expect(error.code).toBe("LAUNCH_TOKEN_USED");
    expect(error.detail).toBe("This launch link was already used. Launch the game again");
  });

  it("LaunchTicketInvalidError extends UnauthorizedError", () => {
    const error = new LaunchTicketInvalidError();
    expect(error instanceof UnauthorizedError).toBe(true);
    expect(error.status).toBe(401);
    expect(error.title).toBe(new UnauthorizedError().title);
    expect(error.code).toBe("LAUNCH_TICKET_INVALID");
    expect(error.detail).toBe("The launch ticket is invalid or was already used");
  });

  it("LaunchTicketExpiredError extends UnauthorizedError", () => {
    const error = new LaunchTicketExpiredError();
    expect(error instanceof UnauthorizedError).toBe(true);
    expect(error.status).toBe(401);
    expect(error.title).toBe(new UnauthorizedError().title);
    expect(error.code).toBe("LAUNCH_TICKET_EXPIRED");
    expect(error.detail).toBe("The launch ticket has expired. Launch the game again");
  });

  it("GameUnavailableError extends NotFoundError", () => {
    const error = new GameUnavailableError();
    expect(error instanceof NotFoundError).toBe(true);
    expect(error.status).toBe(404);
    expect(error.title).toBe(new NotFoundError().title);
    expect(error.code).toBe("GAME_UNAVAILABLE");
    expect(error.detail).toBe("This game is not available");
  });

  it("PlayerNotFoundError extends NotFoundError", () => {
    const error = new PlayerNotFoundError();
    expect(error instanceof NotFoundError).toBe(true);
    expect(error.status).toBe(404);
    expect(error.title).toBe(new NotFoundError().title);
    expect(error.code).toBe("PLAYER_NOT_FOUND");
    expect(error.detail).toBe("The player was not found");
  });

  it("PlayerIdInvalidError extends UnprocessableEntityError", () => {
    const error = new PlayerIdInvalidError();
    expect(error instanceof UnprocessableEntityError).toBe(true);
    expect(error.status).toBe(422);
    expect(error.title).toBe(new UnprocessableEntityError().title);
    expect(error.code).toBe("PLAYER_ID_INVALID");
    expect(error.detail).toBe("The player id may contain only letters, digits, _ and -, up to 64 characters");
  });

  it("PlayerInAnotherGameError extends ConflictError", () => {
    const error = new PlayerInAnotherGameError();
    expect(error instanceof ConflictError).toBe(true);
    expect(error.status).toBe(409);
    expect(error.title).toBe(new ConflictError().title);
    expect(error.code).toBe("PLAYER_IN_ANOTHER_GAME");
    expect(error.detail).toBe("The player is playing another game. Finish it first");
  });

  it("ActivityCheckFailedError extends ServiceUnavailableError", () => {
    const error = new ActivityCheckFailedError();
    expect(error instanceof ServiceUnavailableError).toBe(true);
    expect(error.status).toBe(503);
    expect(error.title).toBe(new ServiceUnavailableError().title);
    expect(error.code).toBe("ACTIVITY_CHECK_FAILED");
    expect(error.detail).toBe("Could not confirm the player is free to play. Try again shortly");
  });

  it("CurrencyNotEnabledError extends UnprocessableEntityError", () => {
    const error = new CurrencyNotEnabledError();
    expect(error instanceof UnprocessableEntityError).toBe(true);
    expect(error.status).toBe(422);
    expect(error.title).toBe(new UnprocessableEntityError().title);
    expect(error.code).toBe("CURRENCY_NOT_ENABLED");
    expect(error.detail).toBe("This currency is not enabled for this client");
  });

  it("WalletNotFoundError extends NotFoundError", () => {
    const error = new WalletNotFoundError();
    expect(error instanceof NotFoundError).toBe(true);
    expect(error.status).toBe(404);
    expect(error.title).toBe(new NotFoundError().title);
    expect(error.code).toBe("WALLET_NOT_FOUND");
    expect(error.detail).toBe("The player has no wallet in this currency");
  });

  it("InvalidAmountError extends UnprocessableEntityError", () => {
    const error = new InvalidAmountError();
    expect(error instanceof UnprocessableEntityError).toBe(true);
    expect(error.status).toBe(422);
    expect(error.title).toBe(new UnprocessableEntityError().title);
    expect(error.code).toBe("INVALID_AMOUNT");
    expect(error.detail).toBe("The amount must be at least 0.01 with at most 2 decimals");
  });

  it("BalanceBusyError extends ConflictError", () => {
    const error = new BalanceBusyError();
    expect(error instanceof ConflictError).toBe(true);
    expect(error.status).toBe(409);
    expect(error.title).toBe(new ConflictError().title);
    expect(error.code).toBe("BALANCE_BUSY");
    expect(error.detail).toBe("The balance is being updated. Try again");
  });

  it("TransfersNotAllowedError extends ForbiddenError", () => {
    const error = new TransfersNotAllowedError();
    expect(error instanceof ForbiddenError).toBe(true);
    expect(error.status).toBe(403);
    expect(error.title).toBe(new ForbiddenError().title);
    expect(error.code).toBe("TRANSFERS_NOT_ALLOWED");
    expect(error.detail).toBe("Deposits, withdrawals and transfers are not available for this player");
  });

  it("DuplicateOrderNumberError extends ConflictError", () => {
    const error = new DuplicateOrderNumberError();
    expect(error instanceof ConflictError).toBe(true);
    expect(error.status).toBe(409);
    expect(error.title).toBe(new ConflictError().title);
    expect(error.code).toBe("DUPLICATE_ORDER_NUMBER");
    expect(error.detail).toBe("This order number was already used");
  });

  it("DuplicateTransactionError extends ConflictError", () => {
    const error = new DuplicateTransactionError();
    expect(error instanceof ConflictError).toBe(true);
    expect(error.status).toBe(409);
    expect(error.title).toBe(new ConflictError().title);
    expect(error.code).toBe("DUPLICATE_TRANSACTION");
    expect(error.detail).toBe("This transaction id was already used with different data");
  });

  it("TransactionInProgressError extends ConflictError", () => {
    const error = new TransactionInProgressError();
    expect(error instanceof ConflictError).toBe(true);
    expect(error.status).toBe(409);
    expect(error.title).toBe(new ConflictError().title);
    expect(error.code).toBe("TRANSACTION_IN_PROGRESS");
    expect(error.detail).toBe("This transaction is still being processed");
  });

  it("TransactionNotFoundError extends NotFoundError", () => {
    const error = new TransactionNotFoundError();
    expect(error instanceof NotFoundError).toBe(true);
    expect(error.status).toBe(404);
    expect(error.title).toBe(new NotFoundError().title);
    expect(error.code).toBe("TRANSACTION_NOT_FOUND");
    expect(error.detail).toBe("The related transaction was not found");
  });

  it("TransactionRolledBackError extends ConflictError", () => {
    const error = new TransactionRolledBackError();
    expect(error instanceof ConflictError).toBe(true);
    expect(error.status).toBe(409);
    expect(error.title).toBe(new ConflictError().title);
    expect(error.code).toBe("TRANSACTION_ROLLED_BACK");
    expect(error.detail).toBe("This transaction was already rolled back");
  });

  it("PartnerWalletUnavailableError extends ServiceUnavailableError", () => {
    const error = new PartnerWalletUnavailableError();
    expect(error instanceof ServiceUnavailableError).toBe(true);
    expect(error.status).toBe(503);
    expect(error.title).toBe(new ServiceUnavailableError().title);
    expect(error.code).toBe("PARTNER_WALLET_UNAVAILABLE");
    expect(error.detail).toBe("The partner wallet could not be reached. The action was not completed");
  });

  it("PartnerWalletTimeoutError extends GatewayTimeoutError", () => {
    const error = new PartnerWalletTimeoutError();
    expect(error instanceof GatewayTimeoutError).toBe(true);
    expect(error.status).toBe(504);
    expect(error.title).toBe(new GatewayTimeoutError().title);
    expect(error.code).toBe("PARTNER_WALLET_TIMEOUT");
    expect(error.detail).toBe("The partner wallet did not respond in time. The action is being reconciled");
  });

  it("PartnerWalletBadResponseError extends BadGatewayError", () => {
    const error = new PartnerWalletBadResponseError();
    expect(error instanceof BadGatewayError).toBe(true);
    expect(error.status).toBe(502);
    expect(error.title).toBe(new BadGatewayError().title);
    expect(error.code).toBe("PARTNER_WALLET_BAD_RESPONSE");
    expect(error.detail).toBe("The partner wallet returned an invalid response. The action is being reconciled");
  });

  it("WalletMisconfiguredError extends InternalServerError", () => {
    const error = new WalletMisconfiguredError();
    expect(error instanceof InternalServerError).toBe(true);
    expect(error.status).toBe(500);
    expect(error.title).toBe(new InternalServerError().title);
    expect(error.code).toBe("WALLET_MISCONFIGURED");
    expect(error.detail).toBe("The wallet for this client is not configured");
  });

  it("RoundNotFoundError extends NotFoundError", () => {
    const error = new RoundNotFoundError();
    expect(error instanceof NotFoundError).toBe(true);
    expect(error.status).toBe(404);
    expect(error.title).toBe(new NotFoundError().title);
    expect(error.code).toBe("ROUND_NOT_FOUND");
    expect(error.detail).toBe("No active round was found");
  });

  it("BettingClosedError extends ConflictError", () => {
    const error = new BettingClosedError();
    expect(error instanceof ConflictError).toBe(true);
    expect(error.status).toBe(409);
    expect(error.title).toBe(new ConflictError().title);
    expect(error.code).toBe("BETTING_CLOSED");
    expect(error.detail).toBe("Betting is closed for this round");
  });

  it("BetNotFoundError extends NotFoundError", () => {
    const error = new BetNotFoundError();
    expect(error instanceof NotFoundError).toBe(true);
    expect(error.status).toBe(404);
    expect(error.title).toBe(new NotFoundError().title);
    expect(error.code).toBe("BET_NOT_FOUND");
    expect(error.detail).toBe("The bet was not found");
  });

  it("BetAlreadySettledError extends ConflictError", () => {
    const error = new BetAlreadySettledError();
    expect(error instanceof ConflictError).toBe(true);
    expect(error.status).toBe(409);
    expect(error.title).toBe(new ConflictError().title);
    expect(error.code).toBe("BET_ALREADY_SETTLED");
    expect(error.detail).toBe("This bet is already settled");
  });

  it("CashoutNotAllowedError extends ConflictError", () => {
    const error = new CashoutNotAllowedError();
    expect(error instanceof ConflictError).toBe(true);
    expect(error.status).toBe(409);
    expect(error.title).toBe(new ConflictError().title);
    expect(error.code).toBe("CASHOUT_NOT_ALLOWED");
    expect(error.detail).toBe("Cash-out is not possible at this moment");
  });

  it("SlotOccupiedError extends ConflictError", () => {
    const error = new SlotOccupiedError();
    expect(error instanceof ConflictError).toBe(true);
    expect(error.status).toBe(409);
    expect(error.title).toBe(new ConflictError().title);
    expect(error.code).toBe("SLOT_OCCUPIED");
    expect(error.detail).toBe("This slot already has a bet");
  });

  it("BetLimitExceededError extends UnprocessableEntityError", () => {
    const error = new BetLimitExceededError();
    expect(error instanceof UnprocessableEntityError).toBe(true);
    expect(error.status).toBe(422);
    expect(error.title).toBe(new UnprocessableEntityError().title);
    expect(error.code).toBe("BET_LIMIT_EXCEEDED");
    expect(error.detail).toBe("The bet is outside the allowed limits");
  });

  it("GameConfigNotFoundError extends NotFoundError", () => {
    const error = new GameConfigNotFoundError();
    expect(error instanceof NotFoundError).toBe(true);
    expect(error.status).toBe(404);
    expect(error.title).toBe(new NotFoundError().title);
    expect(error.code).toBe("GAME_CONFIG_NOT_FOUND");
    expect(error.detail).toBe("No game configuration was found");
  });

  it("ClientNotFoundError extends NotFoundError", () => {
    const error = new ClientNotFoundError();
    expect(error instanceof NotFoundError).toBe(true);
    expect(error.status).toBe(404);
    expect(error.title).toBe(new NotFoundError().title);
    expect(error.code).toBe("CLIENT_NOT_FOUND");
    expect(error.detail).toBe("The client was not found");
  });

  it("ModuleAccessDeniedError extends ForbiddenError", () => {
    const error = new ModuleAccessDeniedError();
    expect(error instanceof ForbiddenError).toBe(true);
    expect(error.status).toBe(403);
    expect(error.title).toBe(new ForbiddenError().title);
    expect(error.code).toBe("MODULE_ACCESS_DENIED");
    expect(error.detail).toBe("This client does not have access to this module");
  });

  it("Allows overriding specific details at instantiation", () => {
    const error = new UserNotFoundError({ detail: "User ID 1234 was absent" });
    expect(error.detail).toBe("User ID 1234 was absent");
    expect(error.code).toBe("USER_NOT_FOUND");
  });
});
