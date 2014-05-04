import logger = require("logger");
import view = require("view");
import viewModel = require("viewModel");


class AppMain implements IAppMain {
    // #region private fields
    private __view: IView;
    private __viewModel: IViewModel;
    // #endregion

    public init(): void {
        // create
        this.__view = new view();
        this.__viewModel = new viewModel();
        
        //init
        this.__view.initLayout();

        // attach event handlers
        this.__view.on('rollAdd', this.__viewModel.addRoll, this.__viewModel);
        this.__viewModel.on('scoreUpdate', this.__view.scoreUpdateHandler, this.__view);

    }

    public showMessage(msg: string): void {
        logger.log(msg);
        alert(msg);
    }
}

var app: IAppMain = new AppMain();
export = app;