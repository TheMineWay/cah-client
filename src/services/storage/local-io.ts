import { ILocalIO, ILocalIOSafeGetOptions } from './local-io.interface';

type Options = {
    get: (key: string) => Object | null;
    set: (key: string, value: Object) => void;
    remove: (key: string) => void;
    clear: () => void;
};

export class LocalIO implements ILocalIO {
    constructor(private readonly options: Options) {}

    get = <T extends Object>(key: string) => {
        try {
            return this.options.get(key) as T | null;
        } catch (e) {
            console.error(e);
            this.remove(key);
            return null;
        }
    };
    safeGet = <T extends Object>(key: string, fallback: T, options?: ILocalIOSafeGetOptions) => {
        const getFallback = () => {
            if (options?.saveFallback) this.set(key, fallback);
            return fallback;
        };

        try {
            const item = localStorage.getItem(key);
            if (item === null) return getFallback();
            return JSON.parse(item) as T;
        } catch (e) {
            console.error(e);
            return getFallback();
        }
    };

    set = <T extends Object = Object>(key: string, value: T) => {
        this.options.set(key, value);
    };

    remove = (key: string) => {
        this.options.remove(key);
    };

    clear = this.options.clear;
}
