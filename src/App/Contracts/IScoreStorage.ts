interface IScoreStorage {
     add(first: number, second: number) : void;
     add(roll: IRoll) : void;

     getAll() : IRoll[]; 
     compute() : number;
 }

interface IScoreStorageCtorable extends IScoreStorage {
    new() : IScoreStorage;
}