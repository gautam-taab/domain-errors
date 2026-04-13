export interface DomainErrorParams {
  type: string;
  title: string;
  status: number;
  detail?: string;
  instance?: string;
  code?: string;
  extensions?: Record<string, any>;
}
