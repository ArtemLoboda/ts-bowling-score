/// <reference path="./Contracts/IAppMain.ts"/>
/// <reference path="../Scripts/typings/jquery/jquery.d.ts"/>

require.config({
    paths: {
        jquery: "http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min",
        appMain: "./AppMain",
        logger: "./Models/Logger",
        "bs.form": "./Models/BSForm"
    }/*,
    shim: {
        jquery: {exports: "$"},
        main: {exports: "main"},
        logger: {exports: "logger"}
    }*/
});
// #region require.config duplicated definition for TypeScript to be able to use import x = required("y") syntax
declare module "logger" {export = log;}
declare var log: ILogger;

declare module "bs.form" {export = form;}
declare var form: IForm;
// #endregion

require( ["appMain", "jquery"], (main:IAppMain, $:JQuery) => {
    main.init();
});

