import { describe, it, expect } from "vitest";
import { BadRequestError } from "./BadRequestError";
import { UnauthorizedError } from "./UnauthorizedError";
import { ForbiddenError } from "./ForbiddenError";
import { NotFoundError } from "./NotFoundError";
import { ConflictError } from "./ConflictError";
import { UnprocessableEntityError } from "./UnprocessableEntityError";
import { TooManyRequestsError } from "./TooManyRequestsError";
import { InternalServerError } from "./InternalServerError";

describe("Core DomainErrors", () => {
  it("BadRequestError inherits correct properties", () => {
    const error = new BadRequestError({ detail: "Missing parameter" });
    expect(error.name).toBe("BadRequestError");
    expect(error.status).toBe(400);
    expect(error.type).toBe("bad-request");
    expect(error.title).toBe("Bad Request");
    expect(error.detail).toBe("Missing parameter");
    expect(error instanceof Error).toBe(true);
  });

  it("UnauthorizedError sets status to 401", () => {
    const error = new UnauthorizedError();
    expect(error.status).toBe(401);
    expect(error.type).toBe("unauthorized");
    expect(error.title).toBe("Unauthorized");
  });

  it("ForbiddenError sets status to 403", () => {
    const error = new ForbiddenError();
    expect(error.status).toBe(403);
    expect(error.type).toBe("forbidden");
    expect(error.title).toBe("Forbidden");
  });

  it("NotFoundError sets status to 404", () => {
    const error = new NotFoundError();
    expect(error.status).toBe(404);
    expect(error.type).toBe("not-found");
    expect(error.title).toBe("Not Found");
  });

  it("ConflictError sets status to 409", () => {
    const error = new ConflictError();
    expect(error.status).toBe(409);
    expect(error.type).toBe("conflict");
    expect(error.title).toBe("Conflict");
  });

  it("UnprocessableEntityError sets status to 422", () => {
    const error = new UnprocessableEntityError();
    expect(error.status).toBe(422);
    expect(error.type).toBe("unprocessable-entity");
    expect(error.title).toBe("Unprocessable Entity");
  });

  it("TooManyRequestsError sets status to 429", () => {
    const error = new TooManyRequestsError();
    expect(error.status).toBe(429);
    expect(error.type).toBe("too-many-requests");
    expect(error.title).toBe("Too Many Requests");
  });

  it("InternalServerError sets status to 500", () => {
    const error = new InternalServerError();
    expect(error.status).toBe(500);
    expect(error.type).toBe("internal-server-error");
    expect(error.title).toBe("Internal Server Error");
  });
});
