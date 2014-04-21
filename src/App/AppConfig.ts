/// <reference path="./Contracts/IAppMain.ts"/>
/// <reference path="../Scripts/typings/jquery/jquery.d.ts"/>

require.config({
    paths: {
        jquery: "http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min",
        bootstrap: "../Scripts/bootstrap.min",
        appMain: "./AppMain",
        logger: "./Models/Logger",
        view: "./Models/UIView",
        viewModel: "./Models/UIViewModel",
        scoreStorage: "./Models/ScoreStorage"
    },
    shim: {
        jquery: { exports: "$" },
        bootstrap: {exports: "$"},
        appMain: {exports: "appMain"},
        logger: {exports: "logger"},
        view: {exports: "view"}
    }
});
// #region require.config duplicated definition for Typ eScript to be able to use import x = required("y") syntax
declare module "logger" {export = log;}
declare var log: ILogger;

declare module "view" {export = view;}
declare var view: IView;

declare module "viewModel" { export = viewModel;}
declare var viewModel: IViewModelCtorable;

declare module "scoreStorage" { export = scoreStorage;}
declare var scoreStorage: IScoreStorageCtorable;

// #endregion

require( ["appMain", "jquery", "bootstrap", "viewModel"], (main:IAppMain, $:JQuery, bts:JQuery) => {
    main.init();
});

