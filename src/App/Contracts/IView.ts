/// View engine to build a form

interface IViewFormSettings {
    firstRollId : string;
    secondRollId : string;
    thirdRollId? : string;
    addButtonId : string;
    form: JQuery;
}

interface IView {
    /**
     * Init Layout of the form
     * @param holder - an optional holder for markup structure
     */
    initLayout(holder?:JQuery): void;

    /**
     * Get Form field ids
     */
    getFormSettings(): IViewFormSettings;
}