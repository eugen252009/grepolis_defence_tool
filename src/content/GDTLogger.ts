export class GDTLoggerFactory {
    debug: boolean = false;
    logHistory: Array<any> = [];
    constructor(debug = false) {
        this.debug = debug;
        this.logHistory = [];
    };

    log = (...message: any) => { this.logHistory.push(message); this.debug ? console.log("[GDT]", ...message) : null; };
    dir = (...message: any) => { this.logHistory.push(message); this.debug ? console.dir({ GDT: "[GDT]", message }) : null; };
    error = (...message: any) => { this.logHistory.push(message); this.debug ? console.error("[GDT]", ...message) : null; };
};
