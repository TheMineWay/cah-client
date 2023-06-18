import { uuid } from '../../types/generic/uuid.type';

export type ILocalIOGetOptions = CommonOptions;
export type ILocalIOSafeGetOptions = {
    // In case fallback is used, store it as the item value.
    saveFallback?: boolean;
} & CommonOptions;
export type ILocalIOSetOptions = CommonOptions;
export type ILocalIORemoveOptions = CommonOptions;

export type CommonOptions = {
    namespace?: string;
    userNamespace?: uuid;
};

export interface ILocalIO {
    get: <T extends Object>(key: string, options?: ILocalIOGetOptions) => T | null;
    safeGet: <T extends Object>(key: string, fallback: T, options?: ILocalIOSafeGetOptions) => T;
    set: <T extends Object = Object>(key: string, value: T, options?: ILocalIOSetOptions) => void;
    remove: (key: string, options?: ILocalIORemoveOptions) => void;
    clear: () => void;
}
