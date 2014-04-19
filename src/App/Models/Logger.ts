/// <reference path="../Contracts/ILogger.ts"/>

class Logger implements ILogger {
    log(msg: string): void {
        console && console.log && console.log(msg);
    }
}

var log: ILogger = new Logger();
export = log;
