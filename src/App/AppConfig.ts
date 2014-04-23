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
        scoreStorage: "./Models/ScoreStorage"
    },
    shim: {
        jquery: { exports: "$" },
        "jquey.validate": {deps: ["jquery"]},
        bootstrap: {
            // load bootstrap after jquery is loaded
            deps: ["jquery"]
        },
        appMain: {exports: "appMain"},
        logger: {exports: "logger"},
        view: {exports: "view"},
        viewModel: { exports: "viewModel"},
        scoreStorage: { exports: "scoreStorage" }
    }
});
// #region require.config duplicated definition for Typ eScript to be able to use import x = required("y") syntax
declare module "jquery.validate" { export = $;}

declare module "logger" {export = log;}
declare var log: ILogger;

declare module "view" {export = view;}
declare var view: IView;

declare module "viewModel" { export = viewModel;}
declare var viewModel: IViewModelCtorable;

declare module "scoreStorage" { export = scoreStorage;}
declare var scoreStorage: IScoreStorageCtorable;

// #endregion

require( ["appMain", "jquery", "bootstrap"], (main:IAppMain) => {
    main.init();
});

