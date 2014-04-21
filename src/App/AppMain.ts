import logger = require("logger");
import view = require("view");
import viewModel = require("viewModel");


class AppMain implements IAppMain {
    public init(): void {
        // init layout form
        view.initLayout();

        // init viewModel
        this.__viewModel = new viewModel(view.getFormSettings());
        // attach events handliers to ViewModel
        this.__viewModel.setupEventHandlers();
    }

    public showMessage(msg: string): void {
        logger.log(msg);
        alert(msg);
    }

    /// #region  private fields
    private __viewModel : IViewModel;

    /// #endregion
}

var app: IAppMain = new AppMain();
export = app;