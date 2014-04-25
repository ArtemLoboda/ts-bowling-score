import logger = require("logger");

class ScoreStorage implements IScoreStorage {
    /**
     * Add roll to the storage
     * @param first Score from the first roll
     * @param second Score from the second roll
     */
    public add(first: number, second: number): void;
    /**
     * Add roll to the storage
     * @param first Structure of a roll score
     */
    public add(roll: IRoll) : void;
    public add(...args: any[]) : void {

        if (typeof args[0] === "object" 
            && typeof (<IRoll>args[0]).first == "number"
            && typeof (<IRoll>args[0]).second == "number") {
            this.__storage.push(<IRoll>args[0]);

        } else if(!isNaN(args[0]) && !isNaN(args[1])) {
            // prepare structure and push it to the storage
            this.add({
                first: parseInt(args[0]),
                second: parseInt(args[1])
            });
        } else {
            //logger.log(args);
            throw "Could not add roll to the storage!";
        }
    }

    /**
     * Get score of all rolls
     */
    public getAll(): Array<IRoll> {
        // make a copy of a array
        return this.__storage.slice();
    }

    /**
     * Compute score based on added rolls
     */
    public compute(): number {
        var result: number = 0;
        for (var index = 0; index < this.__storage.length; index++) {
            result += this.__storage[index].first + this.__storage[index].second;
        }
        return result;
    }

    /// #region  private fields
    private __storage : Array<IRoll> = <Array<IRoll>>[];
    /// #endregion
}

export = ScoreStorage;