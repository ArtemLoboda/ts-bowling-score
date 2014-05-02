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
        this.__view.onRollAdd((roll: IRoll) => this.__viewModel.addRoll(roll));
        this.__viewModel.onScoreUpdate((score: number) => this.__view.scoreUpdateHandler(score));

    }

    public showMessage(msg: string): void {
        logger.log(msg);
        alert(msg);
    }
}

var app: IAppMain = new AppMain();
export = app;