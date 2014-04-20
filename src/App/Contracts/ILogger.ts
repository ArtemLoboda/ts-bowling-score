// we need to have comments here because if compiled file will not have any output,
// the Visual studio will crash

interface ILogger {
    log(msg: JQuery ) : void
    log(msg: number) : void
    log(msg: string) : void
    log(msg: Element) : void
}
