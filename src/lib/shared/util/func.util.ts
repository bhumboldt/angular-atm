
export const get = <T, K extends keyof T>(property: K) => (item: T): T[K] => item[property];
