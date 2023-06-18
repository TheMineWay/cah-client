import { LocalIO } from '../local-io';

export class LocalStorageService extends LocalIO {
    constructor() {
        super({
            get: (key) => {
                const item = localStorage.getItem(key);
                if (item === null) return null;
                return JSON.parse(item) as Object;
            },
            set: (key, value) => {
                localStorage.setItem(key, JSON.stringify(value));
            },
            remove: (key) => {
                localStorage.removeItem(key);
            },
            clear: localStorage.clear,
        });
    }
}
