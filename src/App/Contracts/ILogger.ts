// if interface will be on the first line, then VS2012 will crash on compile time. Don't know why :)

interface ILogger {
    log(msg: string) : void
}
