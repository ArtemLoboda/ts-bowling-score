
interface IViewModel {

    /**
     * Setup event handlers
     */
    setupEventHandlers?() : void;

    /**
     * Store roll and compute user score
     */
    addRoll(first: number, second: number, third?: number) : number;

}

interface IViewModelCtorable extends IViewModel {
    new(settings: IViewFormSettings) : IViewModel
}
