!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery","datatables.net"],(function(e){return t(e,window,document)})):"object"==typeof exports?module.exports=function(e,l){return e||(e=window),l&&l.fn.dataTable||(l=require("datatables.net")(e,l).$),t(l,0,e.document)}:t(jQuery,window,document)}((function(t,e,l,i){"use strict";var r=t.fn.dataTable;function f(e,l){var i=e.settings()[0],r=!1;t.grep(i._pfFilter.filters,(function(t){t.column===l.column&&t.value===l.value&&(r=!0)})),r||(i._pfFilter.filters.push(l),e.draw(),function(e,l){var i,r=e.settings()[0];r._pfFilter.activeFilterControls.append('<li><span class="label label-info">'+l.name+": "+l.value+'<a href="#"><span class="pficon pficon-close"/></a></span></li>'),t("a",r._pfFilter.activeFilterControls).last().on("click",(function(f){for(i=0;i<r._pfFilter.filters.length;i++)if(r._pfFilter.filters[i].column===l.column&&r._pfFilter.filters[i].value===l.value){r._pfFilter.filters.splice(i,1),t(this).parents("li").remove();break}0===r._pfFilter.filters.length&&r._pfFilter.activeFilters.addClass("hidden"),e.draw(),p(e)})),r._pfFilter.activeFilters.removeClass("hidden")}(e,l),p(e)),i._pfFilter.filterInput.val("")}function n(t){var e=t.settings()[0];e._pfFilter.filters.length=0,e._pfFilter.activeFilterControls.html(""),e._pfFilter.activeFilters.addClass("hidden"),t.draw()}function o(e,l){var r=e.settings()[0];null!==r._pfFilter.filterCols[l]&&r._pfFilter.filterCols[l].optionSelector!==i&&t(r._pfFilter.filterCols[l].optionSelector).on("click",(function(e){r._pfFilter.filterInput!==i&&0!==r._pfFilter.filterInput.length&&(r._pfFilter.filterInput.get(0).placeholder=r._pfFilter.filterCols[l].placeholder),r._pfFilter.filterLabel!==i&&0!==r._pfFilter.filterLabel.length&&r._pfFilter.filterLabel.html(t(this).text()),r._pfFilter.filterButton!==i&&0!==r._pfFilter.filterButton.length&&r._pfFilter.filterButton.html(t(this).text()+' <span class="caret"></span>'),r._pfFilter.filterColumn=l,r._pfFilter.filterName=t(this).text()}))}function p(t){var e=t.settings()[0],l=t.rows({page:"current",search:"applied"}).flatten().length;e._pfFilter.filterResults!==i&&0!==e._pfFilter.filterResults.length&&e._pfFilter.filterResults.html(l+" Results")}return r.pfFilter={},r.pfFilter.init=function(e){var l,r=e.settings()[0],p=r.oInit.pfConfig?r.oInit.pfConfig:{};if(r._pfFilter={},r._pfFilter.filterButton=t(".toolbar-pf-filter button",p.toolbarSelector),r._pfFilter.filterCols=p.filterCols,r._pfFilter.filterLabel=t(".toolbar-pf-filter label",p.toolbarSelector),r._pfFilter.filterInput=t(".toolbar-pf-filter input",p.toolbarSelector),r._pfFilter.filters=[],r._pfFilter.activeFilterControls=t(".list-inline",p.toolbarSelector),r._pfFilter.activeFilters=r._pfFilter.activeFilterControls.closest("div"),r._pfFilter.clearFilters=t(".toolbar-pf-results a",p.toolbarSelector),r._pfFilter.results=t(".toolbar-pf-results",p.toolbarSelector),r._pfFilter.filterResults=t(".toolbar-pf-results h5",p.toolbarSelector),r._pfFilter.filterCols!==i){for(l=0;l<r._pfFilter.filterCols.length&&(null===r._pfFilter.filterCols[l]||(r._pfFilter.filterColumn=l,r._pfFilter.filterName=t(r._pfFilter.filterCols[l].optionSelector).text(),!0!==r._pfFilter.filterCols[l].default));l++);for(l=0;l<r._pfFilter.filterCols.length;l++)o(e,l);!function(t){var e=t.settings()[0];e._pfFilter.filterInput!==i&&0!==e._pfFilter.filterInput.length&&e._pfFilter.filterInput.on("keypress",(function(l){return 13!==(l.keyCode?l.keyCode:l.which)||(l.preventDefault(),this.value.trim().length>0&&f(t,{column:e._pfFilter.filterColumn,name:e._pfFilter.filterName,value:this.value}),!1)}))}(e),function(t){var e=t.settings()[0];e._pfFilter.clearFilters!==i&&0!==e._pfFilter.clearFilters.length&&e._pfFilter.clearFilters.on("click",(function(e){n(t)}))}(e),t.fn.dataTable.ext.search.push((function(e,l,i){var r=!0;return e._pfFilter&&t.each(e._pfFilter.filters,(function(t,e){-1===l[e.column].indexOf(e.value)&&(r=!1)})),r}))}},r.Api.register("pfFilter.addFilter()",(function(t){return this.iterator("table",(function(e){f(new r.Api(e),t)}))})),r.Api.register("pfFilter.clearFilters()",(function(){return this.iterator("table",(function(t){n(new r.Api(t))}))})),t(l).on("init.dt",(function(t,e,l){"dt"===t.namespace&&r.pfFilter.init(new r.Api(e))})),r.pfFilter}));