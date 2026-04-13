import { DomainErrorParams } from "../types/DomainErrorParams";

export abstract class DomainError extends Error {
  public readonly type: string;
  public readonly title: string;
  public readonly status: number;
  public readonly detail?: string;
  public readonly instance?: string;
  public readonly code?: string;
  public readonly extensions?: Record<string, any>;

  constructor(params: DomainErrorParams) {
    super(params.detail || params.title);
    this.name = this.constructor.name;
    this.type = params.type;
    this.title = params.title;
    this.status = params.status;
    this.detail = params.detail;
    this.instance = params.instance;
    this.code = params.code;
    this.extensions = params.extensions;
  }
}
