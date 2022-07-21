import { ID } from "../shared";
import { useApp } from "./useApp";
import { useEffect, useState } from 'react';
import { Device, IApp } from "../model";

export function useAppDeviceFace(id: ID, device: Device) {
  const [app, setApp] = useState<IApp>();
  const { data, loading, error } = useApp(id)
  useEffect(() => {
    if (data) {
      data
    }
  }, [data])
  return { data: app, loading, error }
}