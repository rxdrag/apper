
import { useCallback } from 'react';
import { IApp } from '../model';
import { IAppInput } from '../model/input';
import { IMutationResponse } from './IMutationResponse';

type CreateFn = (app: IAppInput) => void;

export function useCreateApp(): [create: CreateFn, response: IMutationResponse<IApp>] {
  const create = useCallback((app: IAppInput) => {

  }, [])

  return [create, {}];
}