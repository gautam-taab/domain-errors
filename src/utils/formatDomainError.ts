import { DomainError } from "../core/DomainError";

export function formatDomainError(error: Error, defaultInstance?: string) {
  if (error instanceof DomainError) {
    const problemDetails: Record<string, any> = {
      type: error.type,
      title: error.title,
      status: error.status,
    };

    if (error.detail) problemDetails.detail = error.detail;
    if (error.instance || defaultInstance) problemDetails.instance = error.instance || defaultInstance;
    if (error.code) problemDetails.code = error.code;
    if (error.extensions) Object.assign(problemDetails, error.extensions);

    return problemDetails;
  }

  return {
    type: "internal-server-error",
    title: "Internal Server Error",
    status: 500,
    detail: error.message,
    instance: defaultInstance,
  };
}
