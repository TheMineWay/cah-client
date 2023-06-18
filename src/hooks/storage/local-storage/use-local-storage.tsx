import { LocalStorageService } from "../../../services/storage/local-storage/local-storage.service";
import { useLocalIO } from "../use-local-io";

export function useLocalStorage() {
  return useLocalIO(new LocalStorageService());
}
