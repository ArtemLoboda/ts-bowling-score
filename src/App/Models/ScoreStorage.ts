import logger = require("logger");

class ScoreStorage implements IScoreStorage {
    public add(first: number, second: number): void;
    public add(roll: IRoll) : void;

    public add(...args: any[]) : void {

        if (typeof args[0] === "object" 
            && (<IRoll>args[0]).first != void(0)
            && (<IRoll>args[0]).second != void (0)) {
            this.__storage.push(<IRoll>args[0]);
        } else if(!isNaN(args[0]) && !isNaN(args[1])) {
            // recursive call to prevent code duplication
            this.add({
                first: parseInt(args[0]),
                second: parseInt(args[1])
            });
        }
    }

    public getAll(): Array<IRoll> {
        // make a copy of a array
        return this.__storage.slice();
    }

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