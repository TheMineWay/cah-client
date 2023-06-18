export interface IStorage {
    read: <T extends Object = Object, K extends string = string>(key: K) => T | null;
    write: <T extends Object = Object, K extends string = string>(key: K, value: T) => void;
}
