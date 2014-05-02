class EventDispatcher implements IEventDispatcher {
    // #region private properties
    private __prefix: string = "on_";
    private __listeners:IListenerStorage = {};
    // #endregion

    // #region public method
    /**
     * Register an event handler
     * @param eventName A string containing event type. 
     * @param callback A callback function which will be called in emit
     */
    public register(eventName: string, callback: IListenerCallback): void;
    /**
     * Register an event handler
     * @param eventName A string containing event type. 
     * @param context The context of a callback call
     * @param callback A callback function which will be called in emit
     */
    public register(eventName: string, context: any, callback: IListenerCallback): void;
    public register(eventName: string, ...args:any[]): void {
        var context: any = null;
        var callback: IListenerCallback = null;

        if (typeof args[0] === "function") {
            callback = args[0];
            context = this;
        }
        if (typeof args[0] === "object" && typeof args[1] === "function") {
            context = args[0];
            callback = args[1];
        }

        var evtName: string = this.__prefix + eventName;
        if (typeof this.__listeners[evtName] === "undefined") {
            this.__listeners[evtName] = [];
        }

        var descriptor: IListenerDescriptor = {
            context: context,
            callback: callback
        };

        this.__listeners[evtName].push(descriptor);
    }

    /**
     * Emit subscribers by the defined event
     * @param eventName A string containing event type. 
     */
    public emit(eventName: string):void;
    /**
     * Register an event handler
     * @param eventName A string containing event type. 
     * @param params Paramaters which will be paased to the event handlers
     */
    public emit(eventName: string, ...params: any[]): void {
        var evtName: string = this.__prefix + eventName;

        if (typeof this.__listeners[evtName] === "undefined") return;

        for (var index:number = 0; index < this.__listeners[evtName].length; index++) {
            var descriptor: IListenerDescriptor = this.__listeners[evtName][index];
            descriptor.callback.apply(descriptor.context, params);
        }
    }
    // #endregion
}

export = EventDispatcher;