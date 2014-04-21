import $ = require("jquery");
import logger = require("logger");

class UIView implements IView {

    // #region public method

    /**
     * Init Layout of the form
     * @param (jQuery) holder - an optional holder for markup structure
     */
    public initLayout(holder: JQuery = $("#content")): void {
        logger.log(holder);
        // build markup
        buildInputForm(holder);
    }

    /**
     * Get Form field ids
     */
    public getFormSettings() : IViewFormSettings {
        return {
            firstRollId: UIView.firstRollId,
            secondRollId: UIView.secondRollId,
            addButtonId: UIView.addId
        };
    }
    // #endregion 

    // #region  static fields
    public static firstRollId : string = "firstRoll";
    public static secondRollId : string = "secondRoll";
    public static addId : string = "addRoll";
    // #endregion
}

// #region "private methods"
/**
 * Build markup with a form to input data
 * @param {jQuery} root - holder of a markup
 */
function buildInputForm(root: JQuery) : void {
    var markup: JQuery = $("<div />", { role: "form" }).addClass("form-horizontal")
        .append(
            $("<div />").addClass("form-group")
            .append(
                $("<label />", { for: UIView.firstRollId }).addClass("col-sm-2 control-label").text("First Roll")
            )
            .append(
                $("<div />").addClass("col-sm-4")
                .append(
                    $("<input />", { id: UIView.firstRollId, type: "text" }).addClass("form-control")
                )
            ),
            $("<div />").addClass("form-group")
            .append(
                $("<label />", { for: UIView.secondRollId }).addClass("col-sm-2 control-label").text("Second Roll")
            )
            .append(
                $("<div />").addClass("col-sm-4")
                .append(
                    $("<input />", { id: UIView.secondRollId, type: "text" }).addClass("form-control")
                )
            ),
            $("<div />").addClass("form-group")
            .append(
                $("<div />").addClass("col-sm-offset-2 col-sm-5")
                .append(
                    $("<button />", { type: "submit", id: UIView.addId }).addClass("btn btn-success").text("Add Round")
                )
            )
        );

    root.append(markup);
}


// #endregion

var formBuilder : IView = new UIView();
export = formBuilder; 