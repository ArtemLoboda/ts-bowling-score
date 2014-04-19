import logger = require("logger");
import form = require("bs.form");


class AppMain implements IAppMain {
    init(): void {
        logger.log("init");
    }

    showMessage(msg: string): void {
        logger.log(msg);
        alert(msg);
    }
}

var app: IAppMain = new AppMain();
export = app;