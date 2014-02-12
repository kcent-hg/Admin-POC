this["JST"] = this["JST"] || {};

this["JST"]["templates/example/form.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h2>Example Module Form</h2>";
  });

this["JST"]["templates/example/show.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h1>Example Module</h1>\n\n<p>Example module with a form submodule, that manages parameters.</p>\n<div id=\"example-region\">\n    \n</div>";
  });