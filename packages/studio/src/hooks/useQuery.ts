import { IQueryResponse } from "./IQueryResponse";
import { useState } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { mockQueryRequest } from "./query";

export function useQuery<T>(key:string): IQueryResponse<T> {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState<boolean>();
  const [revalidating, setRevalidating] = useState<boolean>();
  const [error, setError] = useState<Error>();

  const load = useCallback(() => {
    mockQueryRequest<T>(key)
      .then(apps => {
        setData(apps)
        setLoading(false)
        setRevalidating(false)
      })
      .catch(err => {
        setError(err)
        setLoading(false)
        setRevalidating(false)
      })
  }, []);

  useEffect(() => {
    setLoading(true);
    load()
  }, []);

  const refresh = useCallback(() => {
    setRevalidating(true)
    if (!loading) {
      load()
    }
  }, [])

  return { data, loading, revalidating, error, refresh }
}