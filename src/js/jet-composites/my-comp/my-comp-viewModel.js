/**
  Copyright (c) 2015, 2018, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
'use strict';
define(
    ['knockout', 'jquery', 'ojL10n!./resources/nls/my-comp-strings', 'ojs/ojswitch'], function (ko, $, componentStrings) {
    
    function ExampleComponentModel(context) {
        var self = this;
        self.isChecked = ko.observable();

        console.log('Loading my component');
        
        //At the start of your viewModel constructor
        var busyContext = oj.Context.getContext(context.element).getBusyContext();
        var options = {"description": "CCA Startup - Waiting for data"};
        self.busyResolve = busyContext.addBusyState(options);

        self.composite = context.element;

        self.properties = context.properties;
        self.res = componentStrings['my-comp'];

        if (context.properties.myparam) {
            self.isChecked(context.properties.myparam);
        }

        self.isChecked.subscribe(function (newValue) {
            context.properties.myparam = newValue;
        });

        //Once all startup and async activities have finished, relocate if there are any async activities
        self.busyResolve();
    };
    
    //Lifecycle methods - uncomment and implement if necessary 
    //ExampleComponentModel.prototype.activated = function(context){
    //};

    //ExampleComponentModel.prototype.connected = function(context){
    //};

    //ExampleComponentModel.prototype.bindingsApplied = function(context){
    //};

    //ExampleComponentModel.prototype.disconnect = function(context){
    //};

    //ExampleComponentModel.prototype.propertyChanged = function(context){
    //};

    return ExampleComponentModel;
});