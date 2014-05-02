interface IScoreStorage {
    /**
     * Add roll to the storage
     * @param first Score from the first roll
     * @param second Score from the second roll
     */
    add(first: number, second: number): void;

    /**
     * Add roll to the storage
     * @param first Structure of a roll score
     */
    add(roll: IRoll): void;

    /**
     * Get score of all rolls
     */
    getAll(): IRoll[]; 

    /**
     * Compute score based on added rolls
     */
    compute(): number;
 }

interface IScoreStorageCtor extends IScoreStorage {
    new() : IScoreStorage;
}