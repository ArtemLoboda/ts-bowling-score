/// View engine to build a form

interface IViewFormSettings {
    firstRollId : string;
    secondRollId : string;
    thirdRollId? : string;
    addButtonId : string;
    formId: string;
}

interface IView extends IViewValid {
    /**
     * Init Layout of the form
     * @param holder - an optional holder for markup structure
     */
    initLayout(holder?:JQuery): void;

    /**
     * Attach event handler to rollAdd event
     */
    onRollAdd(callback: (roll: IRoll) => void): void;

    scoreUpdateHandler(score: number) : void;

    /**
     * Get Form field ids
     */
    getFormSettings(): IViewFormSettings;
}

interface IViewCtor {
    new(): IView
}