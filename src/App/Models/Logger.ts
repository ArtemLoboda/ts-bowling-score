/// <reference path="../Contracts/ILogger.ts"/>

class Logger implements ILogger {
    public log(msg: JQuery): void;
    public log(msg: number): void;
    public log(msg: string): void;
    public log(msg: Element): void;
    public log(msg: any): void {
        if (msg instanceof jQuery) {
            var self = this;
            this.log("jquery");
            (<JQuery>msg).each((i: number, v: Element) => {
                self.log(v);
            });
        } else {
            console && console.log && console.log(msg);
        }
    }
}

var log: ILogger = new Logger();
export = log;
