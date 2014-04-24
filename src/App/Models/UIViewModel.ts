/// <amd-dependency path="jquery.validate" />
import $ = require("jquery");
import logger = require("logger");
import storage = require("scoreStorage");

class UIViewModel implements IViewModel {

    /// #region ctor
    /**
     * Initialize a new instance of UIViewModel
     * @constructor
     */
    constructor(formSettings: IViewFormSettings) {
        this.__settings = formSettings;
        // initialize a new storage holder for this ViewModel
        this.__storage = new storage();

    }
    /// #nedregion

    /// #region public methods
    /**
     * Setup event handlers
     */
    public setupEventHandlers(): void {
        // attach click event to handle 
        $('#' + this.__settings.addButtonId).on('click', (e: JQueryEventObject) => this.__addRollHandler(e));
    }

    /**
     * Store roll and compute user score
     */
    public addRoll(first: number, second: number) : number {
        logger.log("addRoll: First = " + first + ", Second = " + second);
        this.__storage.add(first, second);
        return this.__storage.compute();
    }
    /// #endregion

    /// #region private methods
    /**
     * Handler of a button click to grab data and pass them to addRoll method
     */
    private __addRollHandler(e: JQueryEventObject) : boolean {
        // stop event and don't send make a postback
        e.preventDefault();
        var isValid = this.__settings.form.valid();
        if (!isValid) {
            var app :IAppMain = require("appMain");
            app.showMessage("form is not valid");
        }

        var firstVal: string = $('#' + this.__settings.firstRollId).val();
        var secondVal: string = $('#' + this.__settings.secondRollId).val();

        logger.log("__addRollHandler: First = \"" + firstVal + "\", Second = \"" + secondVal + "\"");

        var first: number = parseInt(firstVal);
        var second: number = parseInt(secondVal);

        this.addRoll(first, second);

        return false;
    }

    /// #endregion


    /// #region psevdo-private fields
    private __settings: IViewFormSettings;
    private __storage: IScoreStorage;
    /// #endregion
}

export = UIViewModel;


