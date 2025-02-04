type LogType = "Warning" | "Error" | "Info";
const LogLevel = {
    "Info": 0,
    "Warning": 1,
    "Error": 2,
} as const;

export class GDTLoggerFactory {
    debug: boolean = false;
    LogLevel: number = 0;
    logHistory: { [K in LogType]: Array<any> } = { Info: [], Error: [], Warning: [] };
    constructor(debug = false) {
        this.debug = debug;
    };

    //These 3 functions serve as wrappers for the standard ones, with the key difference that they are stored and can be disabled to prevent them from appearing in the console.

    log = (type: LogType, ...message: any) => {
        console.log(type, message);
        this.logHistory[type].push(message);
        if (this.debug && this.LogLevel >= LogLevel[type]) {
            console.log("[GDT]", ...message);
        }
    };

    dir = (type: LogType, ...message: any) => {
        this.logHistory[type].push(message);
        if (this.debug && this.LogLevel >= LogLevel[type]) {
            console.dir({ GDT: "[GDT]", message });
        }
    };

    error = (type: LogType, ...message: any) => {
        this.logHistory[type].push(message);
        if (this.debug && this.LogLevel >= LogLevel[type]) {
            console.error("[GDT]", ...message);
        }
    };


    getAllMessages() {
        return this.logHistory;
    }
    getError() {
        return this.logHistory.Error;
    }
    getInfo() {
        return this.logHistory.Info;
    }
    getWarning() {
        return this.logHistory.Warning;
    }
};

