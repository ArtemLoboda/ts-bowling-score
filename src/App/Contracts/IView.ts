/// View engine to build a form

interface IViewFormSettings {
    firstRollId : string;
    secondRollId : string;
    thirdRollId? : string;
    addButtonId : string;
    formId: string;
}

interface IView extends IViewValid, IEventDispatcher {
    /**
     * Init Layout of the form
     * @param holder - an optional holder for markup structure
     */
    initLayout(holder?:JQuery): void;

    /**
     * Update score-table
     * @param score Total score of a member
     * @param rolls All rounds of a member
     */
    scoreUpdateHandler(score: number, rolls: IRoll[]) : void;

    /**
     * Get Form field ids
     */
    getFormSettings(): IViewFormSettings;
}

interface IViewCtor {
    new(): IView
}