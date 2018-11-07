/**
  Copyright (c) 2015, 2018, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
define(['ojs/ojcomposite', 'text!./my-comp-view.html', './my-comp-viewModel', 'text!./component.json', 'css!./my-comp-styles'],
  function(Composite, view, viewModel, metadata) {
    Composite.register('my-comp', {
      view: view,
      viewModel: viewModel,
      metadata: JSON.parse(metadata)
    });
  }
);