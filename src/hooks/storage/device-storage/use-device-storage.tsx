import { LocalStorageService } from "../../../services/storage/local-storage/local-storage.service";
import { SessionStorageService } from "../../../services/storage/session-storage/session-storage.service";
import { useLocalIO } from "../use-local-io";

type Options = {
  volatile?: boolean;
};

export function useDeviceStorage(options?: Options) {
  const storage = options?.volatile
    ? new SessionStorageService()
    : new LocalStorageService();

  return useLocalIO(storage);
}
