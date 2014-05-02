
interface IViewModel {

    /**
     * Store roll and compute user score
     */
    addRoll(first: number, second: number, third?: number) : number;
    addRoll(roll: IRoll) : number;

    /**
     * Attach handler to ScoreUpdate event
     */
    onScoreUpdate(callback: (score: number) => void): void;
}

interface IViewModelCtor extends IViewModel {
    new() : IViewModel
}
