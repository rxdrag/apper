
export interface IUseDataResponse<T> {
  loading?: boolean;
  error?: Error;
  data?: T;
}
