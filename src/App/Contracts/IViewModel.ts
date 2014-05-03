
interface IViewModel extends IEventDispatcher {

    /**
     * Store roll and compute user score
     */
    addRoll(first: number, second: number, third?: number) : number;
    addRoll(roll: IRoll) : number;
}

interface IViewModelCtor extends IViewModel {
    new() : IViewModel
}
