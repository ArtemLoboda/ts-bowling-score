/// <amd-dependency path="jquery.validate" />
import $ = require("jquery");
import logger = require("logger");
import storage = require("scoreStorage");
import eventDispatcher = require("eventDispatcher");

class UIViewModel extends eventDispatcher implements IViewModel {

    /// #region psevdo-private fields
    private __storage: IScoreStorage;
    /// #endregion

    /// #region ctor
    /**
     * Initialize a new instance of UIViewModel
     * @constructor
     */
    constructor() {
        super(["scoreUpdate"]);
        // initialize a new storage holder for this ViewModel
        this.__storage = new storage();

    }
    /// #nedregion

    /// #region public methods
    /**
     * Store roll and compute user score
     */
    public addRoll(roll: IRoll) : number;
    public addRoll(first: number, second: number, third?: number) : number;
    public addRoll(...args: any[]) : number {
        if (typeof args[0] === "number" && typeof args[1] === "number") {
            var tmpRoll: IRoll = {
                first: args[0],
                second: args[1]
            };
            return this.addRoll(tmpRoll);
        }
        if (typeof args[0] === "object"
            && typeof (<IRoll>args[0]).first == "number"
            && typeof (<IRoll>args[0]).second == "number") {

            var roll: IRoll = <IRoll>args[0];
            logger.log("first: " + roll.first + " second: " + roll.second);
            this.__storage.add(args[0]);
        }

        this.emit('scoreUpdate', this.__storage.compute())
        return this.__storage.compute();
    }

    /// #endregion

    /// #region private methods

    /// #endregion


}

export = UIViewModel;


