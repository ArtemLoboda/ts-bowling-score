/// <reference path="./Contracts/IAppMain.ts"/>
/// <reference path="../Scripts/typings/jquery/jquery.d.ts"/>

require.config({
    paths: {
        jquery: "http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min",
        bootstrap: "../Scripts/bootstrap.min",
        appMain: "./AppMain",
        logger: "./Models/Logger",
        view: "./Models/UIView",

    },
    shim: {
        jquery: { exports: "$" },
        bootstrap: {exports: "$"},
        appMain: {exports: "appMain"},
        logger: {exports: "logger"},
        view: {exports: "view"}
    }
});
// #region require.config duplicated definition for TypeScript to be able to use import x = required("y") syntax
declare module "logger" {export = log;}
declare var log: ILogger;

declare module "view" {export = view;}
declare var view: IView;
// #endregion

require( ["appMain", "jquery", "bootstrap"], (main:IAppMain, $:JQuery, bts:JQuery) => {
    main.init();
});

