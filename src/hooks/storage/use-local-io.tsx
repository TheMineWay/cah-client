import Hex from "crypto-js/enc-hex";
import { IUseLocalIO } from "./use-local-io.interface";
import sha256 from "crypto-js/sha256";
import {
  ILocalIO,
  ILocalIOSafeGetOptions,
} from "../../services/storage/local-io.interface";

export function useLocalIO(io: ILocalIO): IUseLocalIO {
  const get = <T extends Object>(key: string) => {
    const k = getKeyPath(key);
    try {
      return io.get(k) as T | null;
    } catch (e) {
      console.error(e);
      remove(k);
      return null;
    }
  };
  const safeGet = <T extends Object>(
    key: string,
    fallback: T,
    options?: ILocalIOSafeGetOptions
  ) => {
    const k = getKeyPath(key);

    const getFallback = () => {
      if (options?.saveFallback) set(k, fallback);
      return fallback;
    };

    try {
      const item = localStorage.getItem(k);
      if (item === null) return getFallback();
      return JSON.parse(item) as T;
    } catch (e) {
      console.error(e);
      return getFallback();
    }
  };

  const set = <T extends Object = Object>(key: string, value: T) => {
    const k = getKeyPath(key);
    io.set(k, value);
  };

  const remove = (key: string) => {
    const k = getKeyPath(key);
    io.remove(k);
  };

  const clear = io.clear;

  const getDefaultNamespace = () => "0";
  const getDefaultUserNamespace = () => "default";
  const getKeyPrefix = () =>
    [
      "ds", // Device storage
      Hex.stringify(sha256(getDefaultUserNamespace())).substring(0, 24),
      Hex.stringify(sha256(getDefaultNamespace())).substring(0, 24),
    ].join("-");

  const getKeyPath = (key: string) => getKeyPrefix() + "-" + key;

  return {
    get,
    set,
    remove,
    safeGet,
    getDefaultNamespace,
    getDefaultUserNamespace,
    getKeyPrefix,
    getKeyPath,
    clear,
  };
}
