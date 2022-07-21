
export interface IResponse<T> {
  loading?: boolean;
  revalidating?: boolean;
  error?: Error;
  data?: T;
  refresh?: ()=>void;
}
