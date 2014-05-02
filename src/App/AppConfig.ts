/// <reference path="./Contracts/IAppMain.ts"/>
/// <reference path="../Scripts/typings/jquery/jquery.d.ts"/>

require.config({
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

declare module "eventDispatcher" {export = eventDispatcher;}
declare var eventDispatcher: IEventDispatcherCtor;
// #endregion

require( ["appMain", "jquery", "bootstrap"], (main:IAppMain) => {
    main.init();
});

