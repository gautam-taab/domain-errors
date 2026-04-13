import { describe, it, expect } from "vitest";
import { formatDomainError } from "./formatDomainError";
import { BadRequestError } from "../core/BadRequestError";

describe("formatDomainError", () => {
  it("formats a DomainError correctly into problem details format", () => {
    const error = new BadRequestError({
      detail: "Invalid input",
      code: "INVALID_INPUT",
      extensions: { field: "username" }
    });

    const formatted = formatDomainError(error);

    expect(formatted).toEqual({
      type: "bad-request",
      title: "Bad Request",
      status: 400,
      detail: "Invalid input",
      code: "INVALID_INPUT",
      field: "username" // Extensions should be spread
    });
  });

  it("handles standard fallback JavaScript Errors", () => {
    const error = new Error("Something blew up");
    
    const formatted = formatDomainError(error);
    
    expect(formatted).toEqual({
      type: "internal-server-error",
      title: "Internal Server Error",
      status: 500,
      detail: "Something blew up",
      instance: undefined
    });
  });

  it("merges the defaultInstance when provided", () => {
    const error = new Error("General error");
    const formatted = formatDomainError(error, "/api/users");
    
    expect(formatted.instance).toBe("/api/users");
  });
});
