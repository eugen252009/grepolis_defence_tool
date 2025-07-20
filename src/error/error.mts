type ErrorTypeValue = typeof ERRORTYPES[keyof typeof ERRORTYPES];

class ErrorType {
    constructor(private error: ErrorTypeValue, private msg?: any) { }
    unwrap() {
        console.error(this.msg ?? this.error);
        return undefined;
    }
    getError(): string {
        return this.error;
    }
    isErr(): this is ErrorType {
        return true;
    }
    isOk(): this is ResultType<unknown> {
        return false;
    }
}

class ResultType<T> {
    constructor(private item: T) { }
    unwrap(): T {
        return this.item;
    }
    isErr(): this is ErrorType {
        return false;
    }
    isOk(): this is ResultType<T> {
        return true;
    }
    getError(): undefined {
        console.error("Trying to get an Error from a OK!")
        return undefined;
    }
}



export function Ok(item: any) {
    return new ResultType(item);
}
export function Err(errorString: ErrorTypeValue, msg?: string) {
    return new ErrorType(errorString, msg);
}
export type CustomError<T> = ErrorType | ResultType<T>;

export const ERRORTYPES = {
    TODO: "TODO!",
    COLLECTION_NOT_FOUND: "Collection not Found!",
    NOT_DEFINED: "This Text is a Placeholder for other Errors",
} as const;
