import { describe, it, expect } from "vitest";
import { InsufficientBalanceError } from "./InsufficientBalanceError";
import { PaymentFailedError } from "./PaymentFailedError";
import { UserNotFoundError } from "./UserNotFoundError";
import { InvalidCredentialsError } from "./InvalidCredentialsError";
import { EmailAlreadyInUseError } from "./EmailAlreadyInUseError";
import { ResourceAlreadyExistsError } from "./ResourceAlreadyExistsError";
import { AccountLockedError } from "./AccountLockedError";
import { RateLimitExceededError } from "./RateLimitExceededError";
import { InvalidInputFormatError } from "./InvalidInputFormatError";
import { DatabaseConnectionError } from "./DatabaseConnectionError";
import { ConstraintError } from "./ConstraintError";
import { NoValidSessionError } from "./NoValidSessionError";
import { OwnershipError } from "./OwnershipError";
import { StaleSessionError } from "./StaleSessionError";
import { ValidationError } from "./ValidationError";

import { BadRequestError } from "../core/BadRequestError";
import { NotFoundError } from "../core/NotFoundError";
import { UnauthorizedError } from "../core/UnauthorizedError";
import { ConflictError } from "../core/ConflictError";
import { ForbiddenError } from "../core/ForbiddenError";
import { TooManyRequestsError } from "../core/TooManyRequestsError";
import { UnprocessableEntityError } from "../core/UnprocessableEntityError";
import { InternalServerError } from "../core/InternalServerError";

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

  it("Allows overriding specific details at instantiation", () => {
    const error = new UserNotFoundError({ detail: "User ID 1234 was absent" });
    expect(error.detail).toBe("User ID 1234 was absent");
    expect(error.code).toBe("USER_NOT_FOUND");
  });
});
