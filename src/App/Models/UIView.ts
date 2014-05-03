/// <amd-dependency path="jquery.validate" />
import $ = require("jquery");
import logger = require("logger");
import eventDispatcher = require("eventDispatcher");

class UIView extends eventDispatcher implements IView, IViewValid {
    // #region private fields
    private __events: IEventDispatcher; 

    private _firstRollName: string = "first";
    private _secondRollName: string = "second";
    private _addButtonName:string = "add";
    // #endregion

    constructor() {
        super(["rollAdd"]);
    }

    // #region public method
    /**
     * Init Layout of the form
     * @param (jQuery) holder - an optional holder for markup structure
     */
    public initLayout(holder: JQuery = $("#content")): void {
        logger.log(holder);
        // build markup
        this.__buildInputForm(holder);
        this.__setupValidate($("#" + UIView.formId));
        this.__setupEvents(holder);
    }

    public scoreUpdateHandler(score: number): void {
        var app: IAppMain = require("appMain");
        app.showMessage("Your score: " + score);
    }

    /**
     * Get Form field ids
     */
    public getFormSettings() : IViewFormSettings {
        return {
            firstRollId: UIView.firstRollId,
            secondRollId: UIView.secondRollId,
            addButtonId: UIView.addId,
            formId: UIView.formId
        };
    }

    public isValid(validationGroup?: string): boolean {
        return $("#" + UIView.formId).valid();
    }

    public showErrorMessage(): void {
        //TODO: need to implement logic which will add custom error message to the holder
        throw "Not implemented yet";
    }

    // #endregion 

    // #region private methods
    /**
     * Build markup with a form to input data
     * @param root Holder of a markup
     */
    private __buildInputForm(root: JQuery): void {
        var markup: JQuery = $("<form />", {
                id: UIView.formId,
                method: "GET",
                action: ".",
                role: "form"
            }).addClass("form-horizontal")
            .append(
                $("<div />").addClass("form-group")
                .append(
                    $("<label />", { for: UIView.firstRollId }).addClass("col-sm-2 control-label").text("First Roll")
                )
                .append(
                    $("<div />").addClass("col-sm-4")
                    .append(
                        $("<input />", {
                            id: UIView.firstRollId,
                            name: this._firstRollName,
                            type: "number",
                            min: 0,
                            max: 10
                        }).addClass("form-control")
                    )
                ),
                $("<div />").addClass("form-group")
                    .append(
                        $("<label />", { for: UIView.secondRollId })
                            .addClass("col-sm-2 control-label")
                            .text("Second Roll")
                    )
                    .append(
                        $("<div />").addClass("col-sm-4")
                        .append(
                            $("<input />", {
                                id: UIView.secondRollId,
                                name: this._secondRollName,
                                type: "number",
                                min: 0,
                                max: 10
                            }).addClass("form-control")
                        )
                    ),
                $("<div />").addClass("form-group")
                .append(
                    $("<div />").addClass("col-sm-offset-2 col-sm-5")
                    .append(
                        $("<button />", {
                            type: "submit",
                            name: this._addButtonName,
                            id: UIView.addId
                        }).addClass("btn btn-success").text("Add Round")
                    )
                )
            );

        root.append(markup);
    }

    /**
     * Attach jquery validation to the fields
     * @param root Holder of the form
     */
    private __setupValidate(form: JQuery): void {
        // define a rules set object
        var rulesSet = {};
        rulesSet[this._firstRollName] = {
            required: true,
            min: 0,
            max: 10,
            digits: true,
        };
        rulesSet[this._secondRollName] = {
            min: 0,
            max: 10,
            digits: true,
        }

        var validate : ValidationOptions = { rules: rulesSet };
        form.validate(validate);
    }

    /**
     * Setup DOM event handlers to catch form actions an notify subscribers
     */
    private __setupEvents(root: JQuery): void {
        root.find("#" + UIView.addId).bind("click", (e: JQueryEventObject) => this.__addButtonClickHandler(e));
    }

    // #endregion

    // #region private event handlers
    /**
     * internal click event handler which check form and notify subscribers about the event.
     */
    private __addButtonClickHandler(e: JQueryEventObject): boolean {
        e.preventDefault();
        if (!this.isValid()) return;
        
        var firstVal: string = $("#" + UIView.firstRollId).val();;
        var secondVal: string = $("#" + UIView.secondRollId).val();

        logger.log("__addRollHandler: First = \"" + firstVal + "\", Second = \"" + secondVal + "\"");

        var first: number = parseInt(firstVal);
        var second: number = parseInt(secondVal);

        var roll: IRoll = {
            first: first,
            second: second
        };
        // notify subscribers about the event
        this.emit("rollAdd", roll);

        return false;
    }

    // #endregion

    // #region  static fields
    public static firstRollId : string = "firstRoll";
    public static secondRollId : string = "secondRoll";
    public static addId : string = "addRoll";
    public static formId: string = "score"
    // #endregion
}

export = UIView;