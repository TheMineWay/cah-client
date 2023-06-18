import { LocalIO } from '../local-io';

export class SessionStorageService extends LocalIO {
    constructor() {
        super({
            get: (key) => {
                const item = sessionStorage.getItem(key);
                if (item === null) return null;
                return JSON.parse(item) as Object;
            },
            set: (key, value) => {
                sessionStorage.setItem(key, JSON.stringify(value));
            },
            remove: (key) => {
                sessionStorage.removeItem(key);
            },
            clear: sessionStorage.clear,
        });
    }
}
