import { ILocalIO } from "../../services/storage/local-io.interface";

export interface IUseLocalIO extends ILocalIO {
  // Namespace
  getDefaultNamespace: () => string;

  // User namespace
  getDefaultUserNamespace: () => string;

  // Prefix
  getKeyPrefix: () => string;

  // Key path
  getKeyPath: (key: string) => string;
}
