interface IEventDispatcher {
    /**
     * Register an event handler
     * @param eventName A string containing event type. 
     * @param callback A callback function which will be called in emit
     */
    register(eventName: string, callback: IListenerCallback):void;
    /**
     * Register an event handler
     * @param eventName A string containing event type. 
     * @param context The context of a callback call
     * @param callback A callback function which will be called in emit
     */
    register(eventName: string, context: any, callback: IListenerCallback):void;

    /**
     * Emit subscribers by the defined event
     * @param eventName A string containing event type. 
     */
    emit(eventName: string):void;
    /**
     * Register an event handler
     * @param eventName A string containing event type. 
     * @param params Paramaters which will be paased to the event handlers
     */
    emit(eventName: string, ...params:any[]):void;
}

interface IEventDispatcherCtor extends IEventDispatcher {
    new(): IEventDispatcher;
}

interface IListenerCallback {
    (...params:any[]): void
}

interface IListenerDescriptor {
    context : any;
    callback : IListenerCallback;
}

interface IListenerStorage {
    [key: string]: Array<IListenerDescriptor>;
}
 