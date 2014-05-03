/// <reference path="./Contracts/IAppMain.ts"/>
/// <reference path="./Common/EventDispatcher.ts"/>
/// <reference path="../Scripts/typings/jquery/jquery.d.ts"/>

require.config({
    urlArgs: "bust=" + (+new Date),
    paths: {
        jquery: "http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min",
        "jquery.validate": "../Scripts/jquery.validate",
        bootstrap: "../Scripts/bootstrap.min",
        appMain: "./AppMain",
        logger: "./Models/Logger",
        view: "./Models/UIView",
        viewModel: "./Models/UIViewModel",
        scoreStorage: "./Models/ScoreStorage",
        eventDispatcher: "./Common/EventDispatcher"
    },
    shim: {
        jquery: { exports: "$" },
        "jquery.validate": {
            deps: ["jquery"]
        },
        bootstrap: {
            // load bootstrap after jquery is loaded
            deps: ["jquery"]
        },
    }
});

require( ["appMain", "jquery", "bootstrap"], (main:IAppMain) => {
    main.init();
});

// #region require.config duplicated definition for Typ eScript to be able to use import x = required("y") syntax
declare module "appMain" { export = appMain;}
declare var appMain: IAppMain;

declare module "logger" {export = log;}
declare var log: ILogger;

declare module "view" {export = view;}
declare var view: IViewCtor;

declare module "viewModel" { export = viewModel;}
declare var viewModel: IViewModelCtor;

declare module "scoreStorage" { export = scoreStorage;}
declare var scoreStorage: IScoreStorageCtor;

declare module "eventDispatcher" {export = EventDispatcher}
declare class EventDispatcher implements IEventDispatcher {
    constructor();
    constructor(allowedEvents?: any[]);
    register(eventName: string, callback: IListenerCallback):void;
    register(eventName: string, callback: IListenerCallback, context: any):void;
    emit(eventName: string):void;
    emit(eventName: string, ...params:any[]):void;
}

// #endregion

