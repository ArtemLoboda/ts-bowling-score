/**
 * Declaration type needs to be able to inherite this class by AMD loading.
 * Make a reference to this file in a module definition file.
 */
declare class EventDispatcher implements IEventDispatcher {
    constructor(allowedEvents?: any[]);
    /**
    * Register an event handler
    * @param eventName A string containing event type.
    * @param callback A callback function which will be called in emit
    */
    public register(eventName: string, callback: IListenerCallback): void;
    /**
    * Register an event handler
    * @param eventName A string containing event type.
    * @param callback A callback function which will be called in emit
    * @param context The context of a callback call
    */
    public register(eventName: string, callback: IListenerCallback, context: any): void;
    /**
    * Emit subscribers by the defined event
    * @param eventName A string containing event type.
    */
    public emit(eventName: string): void;
    /**
     * Register an event handler
     * @param eventName A string containing event type. 
     * @param params Paramaters which will be paased to the event handlers
     */
    public emit(eventName: string, ...params: any[]): void;
}