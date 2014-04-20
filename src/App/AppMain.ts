import logger = require("logger");
import view = require("view");


class AppMain implements IAppMain {
    public init(): void {
        logger.log("init");
        view.initLayout();
    }

    public showMessage(msg: string): void {
        logger.log(msg);
        alert(msg);
    }
}

var app: IAppMain = new AppMain();
export = app;