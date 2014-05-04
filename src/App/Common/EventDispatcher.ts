class EventDispatcher implements IEventDispatcher {
    // #region private properties
    private __prefix: string = "on_";
    private __listeners:IListenerStorage = {};
    private __allowedEvents:any[];
    // #endregion

    // #region constructor
    constructor(allowedEvents?: any[]){
        // store allowed events, or pass all
        this.__allowedEvents = allowedEvents || [<IEventAllowedRegex>{ regex: /.*/ }];
    }

    // #endregion

    // #region public method
    /**
     * Register an event handler
     * @param eventName A string containing event type. 
     * @param callback A callback function which will be called in emit
     * @param context The context of a callback call
     */
    public register(eventName: string, callback: IListenerCallback, context?: any): void {
        if (!this._isEventAllowed(eventName)) {
            throw "\"" + eventName + "\" is not allowed";
        }

        // define callback scope. In case of null will be used callback scope
        context = <any>(context||callback);

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
        if (!this._isEventAllowed(eventName)) {
            throw "\"" + eventName + "\" is not allowed";
        }

        var evtName: string = this.__prefix + eventName;

        if (typeof this.__listeners[evtName] === "undefined") return;

        for (var index:number = 0; index < this.__listeners[evtName].length; index++) {
            var descriptor: IListenerDescriptor = this.__listeners[evtName][index];
            descriptor.callback.apply(descriptor.context, params);
        }
    }

    public on(eventName: string, callback: IListenerCallback, context?: any): void {
        this.register(eventName, callback, context);
    }

    // #endregion

    // #region private methods
    private _isEventAllowed(eventName: string) : boolean {
        return this.__allowedEvents.map((value) => {
            if (typeof value == "string") {
                return value == eventName ? value : null;
            }
            if (typeof value == "object") {
                var test: RegExp = null;

                if (typeof (<IEventAllowedStrRegex>value).regex === "string") {
                    test = new RegExp((<IEventAllowedStrRegex>value).regex);
                }
                if (typeof (<IEventAllowedRegex>value).regex === "object") {
                    test = (<IEventAllowedRegex>value).regex;
                }
                if (!test) return null;

                return test.test(eventName) ? value : null;
            }
            return null;
        }).length > 0;
    }

// #endregion
}

export = EventDispatcher;