import $ = require("jquery");
import logger = require("logger");

class UIView implements IView {

    public static firstRollId : string = "firstRoll";
    public static secondRollId : string = "secondRoll";

    public initLayout(holder?: JQuery): void {
        logger.log(holder);
        var root = holder || $("#content");
        buildInputForm(root);
    }
}

/// #region "private methods"
function buildInputForm(root: JQuery) {
    var temp = $("<div />", {role: "form" }).addClass("form-horizontal")
        .append(
            $("<div />").addClass("form-group")
            .append(
                $("<label />", {for: UIView.firstRollId}).addClass("col-sm-2 control-label").text("First Roll")
            )
            .append(
                $("<div />").addClass("col-sm-4")
                .append(
                    $("<input />", {id:UIView.firstRollId, type: "text" }).addClass("form-control")
                )
            ),
            $("<div />").addClass("form-group")
            .append(
                $("<label />", {for: UIView.secondRollId}).addClass("col-sm-2 control-label").text("Second Roll")
            )
            .append(
                $("<div />").addClass("col-sm-4")
                .append(
                    $("<input />", {id:UIView.secondRollId, type: "text" }).addClass("form-control")
                )
            )
        );

    root.append(temp);
}

/// #endregion

var formBuilder : IView = new UIView();
export = formBuilder; 