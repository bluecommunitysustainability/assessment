!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).bubbles=e()}(this,function(){"use strict";function M(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=i){var n,a,r=[],s=!0,o=!1;try{for(i=i.call(t);!(s=(n=i.next()).done)&&(r.push(n.value),!e||r.length!==e);s=!0);}catch(t){o=!0,a=t}finally{try{s||null==i.return||i.return()}finally{if(o)throw a}}return r}}(t,e)||function(t,e){if(t){if("string"==typeof t)return n(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(i="Object"===i&&t.constructor?t.constructor.name:i)||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?n(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function a(t,e){for(var i,n,a=t,r=0;r<e.length;r+=1)i=e[r],n=a,a=(0,i.process)(n);return a}function L(t){return null!=t}function S(t){return!L(t)}function A(t,e){for(var i={},n=0;n<t.length;n+=1)e in t[n]&&(i[t[n][e]]=!0);return Object.keys(i).sort()}function V(t,e){for(var i=void 0,n=void 0,a=0;a<t.length;a+=1){var r=t[a];S(i)&&L(r[e])&&(i=new Date(r[e]).getTime()),S(n)&&L(r[e])&&(n=new Date(r[e]).getTime()),L(r[e])&&(r=new Date(r[e]).getTime(),i=Math.min(i,r),n=Math.max(n,r))}return[i,n]}function h(t,e,i){var n,a=document.createElement(t);for(n in e)a.setAttribute(n,e[n]);return i&&(a.innerText=i),a}function r(a){var r=h("div",{class:"bubbles-dropdown"},a.value||a.name);return r.addEventListener("click",function(t){if(r.classList.contains("bubbles-dropdown--expanded"))r.innerText=t.target.innerText,r.classList.remove("bubbles-dropdown--expanded"),a.onSelect(t.target.innerText,t.target.getAttribute("data-idx"));else{r.innerText="";for(var e=h("div",{class:"bubbles-dropdown-list"}),i=0;i<a.fields.length;i+=1){var n="bubbles-dropdown-item";a.value===a.fields[i]&&(n+=" bubbles-dropdown-item--selected");n=h("div",{class:n,"data-idx":i},a.fields[i]);e.appendChild(n)}r.classList.add("bubbles-dropdown--expanded"),r.appendChild(e)}}),r}function s(t){if(t.mount)return t.mount instanceof HTMLElement?t.mount:document.querySelector(t.mount);throw new Error("mount field needs to be specified in view configuration.")}function D(t){return Math.floor(t/50)}function B(t){var e=t.bands,t=M(function(t,e){for(var i=void 0,n=void 0,a=0;a<t.length;a+=1){var r=t[a];S(i)&&L(r[e])&&(i=r[e]),S(n)&&L(r[e])&&(n=r[e]),L(r[e])&&(i=Math.min(i,r[e]),n=Math.max(n,r[e]))}return[i,n]}(t.data,t.field),2),t=(t[0],t[1]);return[0,(1+Math.floor(t/e))*e]}function k(t,e){var i=document.createElement("canvas").getContext("2d");return i.font=e,i.measureText(t)}var i={string:["contains","does not contain","equals","does not equal","is empty","is not empty"],number:["greater than","less than","equal to"],date:["before","after"]},d={contains:function(t,e){return L(t)&&-1!==t.indexOf(e)},"does not contain":function(t,e){return t&&-1===t.indexOf(e)},equals:function(t,e){return t===e},"does not equal":function(t,e){return t!==e},"is empty":function(t){return L(t)&&0===t.length},"is not empty":function(t){return L(t)&&0!==t.length},"greater than":function(t,e){return e<t},"less than":function(t,e){return t<e},"equal to":function(t,e){return t===e},before:function(t,e){return new Date(t)<new Date(e)},after:function(t,e){return new Date(t)>new Date(e)}};function o(t){this._viewConfig=t.viewConfig,this._data=t.data,this._fields=Object.keys(this._viewConfig.types),this._field=void 0,this._comparator=void 0,this._value=void 0,this._onConfirm=t.onConfirm,this._onCancel=t.onCancel,this._mount$=void 0,this._fieldSelector$=void 0,this._comparatorSelector$=void 0,this._valueSelector$=void 0,this._actionsContainer$=void 0,this._render()}function t(t){this._bubbleView=t.bubbleView,this._viewConfig=t.viewConfig,this._data=t.data,this._elem$=void 0,this._filterWidget=void 0,this._filters=[],this._filters$=[],this._render()}function e(t){this._data=t.data,this._viewConfig=t.viewConfig,this._rowCount=this._viewConfig.rowCount||10,this._columns=Object.keys(this._viewConfig.headers),this._page=0,this._elem$=void 0,this._headers$=void 0,this._paginator$=void 0,this._render()}o.prototype.getRootNode=function(){return this._mount$},o.prototype._getFilterValues=function(){return this._isValid()?{field:this._field,comparator:this._comparator,value:this._value}:null},o.prototype._isValid=function(){return L(this._field)&&L(this._comparator)&&L(this._value)},o.prototype._render=function(){var e=this;if(S(this._mount$)&&(this._mount$=h("div",{class:"bubbles-filter-widget"})),S(this._field))return this._fieldSelector$=r({name:"Field",fields:this._fields,onSelect:function(t){e._field=t,e._render()}}),this._fieldSelector$.click(),void this._mount$.appendChild(this._fieldSelector$);this._mount$.contains(this._fieldSelector$)&&this._mount$.removeChild(this._fieldSelector$),this._mount$.classList.add("bubbles-filter-widget--selected"),this._createFieldHeader(),this._createComparatorSelector(),this._createValueBox(),this._createActionButtons(),this._mount$.appendChild(this._fieldHeader$),this._mount$.appendChild(this._comparatorSelector$),this._mount$.appendChild(this._valueSelector$),this._mount$.appendChild(this._actionsContainer$)},o.prototype._createComparatorSelector=function(){var t,e=this;L(this._field)&&S(this._comparatorSelector$)&&(t=this._viewConfig.types[this._field],this._comparator=(t=i[t])[0],this._comparatorSelector$=r({name:this._comparator,fields:t,value:this._value,onSelect:function(t){e._comparator=t}}))},o.prototype._createValueBox=function(){var e=this;L(this._valueSelector$)&&this._mount$.removeChild(this._valueSelector$);var i=this._viewConfig.types[this._field]||"string",t=function(t){e._value="string"===i||"date"===i?t.target.value:parseFloat(t.target.value),e._render()};"number"===i?(this._valueSelector$=h("input",{class:"bubbles-filter-value bubbles-input bubbles-input--number",type:"number"}),this._valueSelector$.value=this._value,this._valueSelector$.addEventListener("change",t)):"date"===i?(this._valueSelector$=h("input",{class:"bubbles-filter-value bubbles-input bubbles-input--number",type:"date"}),this._valueSelector$.value=this._value,this._valueSelector$.addEventListener("change",t)):(t=A(this._data,this._field),S(this._value)&&(this._value=0<t.length?t[0]:""),t=r({name:this._value,fields:t,value:this._value,onSelect:function(t){e._value="string"===i?t:parseFloat(t),e._render()}}),this._valueSelector$=t)},o.prototype._createActionButtons=function(){var e=this;L(this._actionsContainer$)&&this._mount$.removeChild(this._actionsContainer$);var t=h("div",{class:"bubbles-filter-widget-actions"}),i=h("button",{class:"bubbles-button bubbles-button--primary"},"Apply");i.disabled=S(this._value);var n=h("button",{class:"bubbles-button"},"Cancel");n.addEventListener("click",function(t){t.stopPropagation(),e._onCancel()}),i.addEventListener("click",function(t){t.stopPropagation(),e._onConfirm(e._getFilterValues())}),t.appendChild(n),t.appendChild(i),this._actionsContainer$=t},o.prototype._createFieldHeader=function(){L(this._fieldHeader$)&&this._mount$.removeChild(this._fieldHeader$),this._fieldHeader$=h("div",{class:"bubbles-filter-widget__header"},this._field)},t.prototype.update=function(t){L(t.data)&&(this._data=t.data),L(t.viewConfig)&&(this._viewConfig=viewConfig),this._render()},t.prototype._render=function(){var t=s(this._viewConfig);L(this.elem$)&&t.removeChild(this.elem$);var i=h("div",{class:"bubbles bubbles-filter"});i.addEventListener("click",function(){var t,e=this;S(this._filterWidget)&&(t=new o({viewConfig:this._viewConfig,data:this._data,onConfirm:function(t){L(t)&&(e._filters.push(t),e._createFilterPills(),e._updateParentBubble()),i.removeChild(e._filterWidget.getRootNode()),e._filterWidget=void 0},onCancel:function(){i.removeChild(e._filterWidget.getRootNode()),e._filterWidget=void 0}}),i.appendChild(t.getRootNode()),this._filterWidget=t)}.bind(this)),this._elem$=i,t.appendChild(this._elem$)},t.prototype._updateParentBubble=function(){for(var t=this._data,e=0;e<this._filters.length;e+=1){for(var i=[],n=0;n<t.length;n+=1){var a=t[n],r=this._filters[e].field,s=this._filters[e].comparator,o=this._filters[e].value;(0,d[s])(a[r],o)&&i.push(a)}t=i}for(var l=0;l<this._bubbleView._children.length;l+=1)this._bubbleView._children[l].update(t)},t.prototype._createFilterPills=function(){for(var s=this,t=this._filters$.length;t<this._filters.length;t+=1){var e=this._filters[t],i=h("div",{class:"bubbles-filter-pill","data-idx":t}),n=h("div",{class:"bubbles-filter-pill__label"},"".concat(e.field," ").concat(e.comparator," ").concat(e.value)),e=h("button",{class:"bubbles-filter-pill__close","data-idx":t},"x");e.addEventListener("click",function(t){var e;t.stopPropagation();for(var i=t.target.getAttribute("data-idx"),n=[],a=[],r=0;r<s._filters.length;r+=1)s._filters$[r].getAttribute("data-idx")!==i?(n.push(s._filters[r]),a.push(s._filters$[r])):e=s._filters$[r];s._filters=n,s._filters$=a,s._elem$.removeChild(e),s._updateParentBubble()}),i.appendChild(n),i.appendChild(e),this._filters$.push(i),this._elem$.appendChild(i)}},e.prototype.update=function(t){L(t.data)&&(this._data=t.data),L(t.viewConfig)&&(this._viewConfig=viewConfig),this._page=0,this._render()},e.prototype._render=function(){var t=s(this._viewConfig);L(this._elem$)&&(t.removeChild(this._elem$),t.removeChild(this._paginator$));var e=h("table",{class:"bubbles bubbles-table"});this._createTableHeaders(),this._createTableBody(),this._createTablePaginator(),e.appendChild(this._headers$),e.appendChild(this._body$),this._elem$=e,t.appendChild(this._elem$),t.appendChild(this._paginator$)},e.prototype._createTableHeaders=function(){for(var t=h("thead",{class:"bubbles-table-header"}),e=h("tr",{class:"bubbles-table-row"}),i=this._viewConfig.headers,n=0;n<this._columns.length;n+=1){var a=h("th",{class:"bubbles-table-column"},i[this._columns[n]]);e.appendChild(a)}t.appendChild(e),this._headers$=t},e.prototype._createTableBody=function(){for(var t=this._rowCount,e=this._page*t,i=Math.min(e+t,this._data.length),n=h("tbody",{class:"bubbles-table-body"}),a=e;a<i;a+=1){for(var r=this._data[a],s=h("tr",{class:"bubbles-table-row"}),o=0;o<this._columns.length;o+=1){var l=h("td",{class:"bubbles-table-column"},r[this._columns[o]]);s.appendChild(l)}n.appendChild(s)}this._body$=n},e.prototype._createTablePaginator=function(){var e=this,t=h("div",{class:"bubbles bubbles-table-paginator"}),i=r({name:this._rowCount,fields:[10,25,50],value:this._rowCount,onSelect:function(t){e._rowCount=parseInt(t,10),e._page=0,e._render()}});i.classList.add("bubbles-table-paginator__pagesize");var n=this._page*this._rowCount+1,a=n+this._rowCount-1,a=h("div",{class:"bubbles-table-paginator__range"},"Showing rows ".concat(n,"-").concat(a," of ").concat(this._data.length));t.appendChild(a),t.appendChild(i),this._createPaginationArrows(t),this._paginator$=t},e.prototype._createPaginationArrows=function(t){var e=this,i=h("button",{class:"bubbles-table-paginator__arrow"},"<"),n=h("button",{class:"bubbles-table-paginator__arrow"},">");i.addEventListener("click",function(t){t.stopPropagation(),--e._page,e._render()}),n.addEventListener("click",function(t){t.stopPropagation(),e._page+=1,e._render()}),i.disabled=0==this._page,n.disabled=this._page===Math.ceil(this._data.length/this._rowCount),t.appendChild(i),t.appendChild(n)};var l=["#7cb5ec","#f7a35c","#28a745","#20c997","#17a2b8","#868e96","#343a40","#007bff","#868e96","#007bff","#6610f2","#6f42c1","#e83e8c","#dc3545","#fd7e14","#ffc107","#28a745","#17a2b8","#ffc107","#dc3545"];function P(t){return l[t%l.length]}function E(t,e,i){var n,a=1<arguments.length&&void 0!==e?e:{},i=2<arguments.length?i:void 0,r=document.createElementNS("http://www.w3.org/2000/svg",t);for(n in a)r.setAttribute(n,a[n]);return L(i)&&(r.textContent=i),r}function c(t){var i=this;this._xField=t.xField,this._yField=t.yField,this._data=t.data.filter(function(t){return L(t[i._xField])}).sort(function(t,e){t=t[i._xField],e=e[i._xField];return t<e?-1:e<t?1:0}),this._series=t.series,this._inactiveSeries=t.inactiveSeries,this._width=t.width,this._xRange=void 0,this._seriesRange=void 0,this._init()}function u(t){this._data=t.data,this._viewConfig=t.viewConfig,this._bubbleView=t.bubbleView,this._elem$=void 0,this._tooltip$=void 0,this._inactiveSeries={},this._render()}c.prototype._init=function(){this._xRange=A(this._data,this._xField),L(this._series)&&(this._seriesRange=A(this._data,this._series))},c.prototype.getTooltipForCoords=function(t,e){var i=this,n={},a=void 0,r=E("g",{class:"bubbles-barchart-tooltip"}),s=Math.floor(t/this._width*this._xRange.length),o=this._xRange[s],l=this._data.filter(function(t){return t[i._xField]===o});if(L(this._series))for(var h=0;h<l.length;h+=1){var d=l[h];L(d[this._xField])&&(a=d[this._xField]),L(d[this._series])&&L(d[this._yField])&&(n[d[this._series]]=d[this._yField])}else for(var c=0;c<l.length;c+=1){var u=l[c];L(u[this._xField])&&(a=u[this._xField]),L(u[this._yField])&&(n[this._yField]=u[this._yField])}for(var _=Object.keys(n).sort().filter(function(t){return S(i._inactiveSeries[t])}),f=0,p=0,v=[],b=0;b<_.length;b+=1){var g=k("".concat(_[b],":"),"11px sans-serif"),w=k(n[_[b]],"bold 11px sans-serif"),f=Math.max(f,g.width),p=Math.max(p,f+w.width+10);v.push(g.width)}k(a,"12px sans-serif");for(var C=E("g",{class:"bubbles bubbles-tooltip-rows"}),t=E("text",{style:"font-size:12px;"},a),m=0;m<_.length;m+=1){var y=_[m],x=E("text",{transform:"translate(0,".concat(15*(m+1),")")}),$=E("tspan",{style:"font-size:11px;color:rgb(95, 95, 95);"},"".concat(y,":")),y=E("tspan",{dx:f+10-v[m],style:"font-size:11px;font-weight:bold;color:rgb(95, 95, 95);"},n[y]);x.appendChild($),x.appendChild(y),C.appendChild(x)}s=E("rect",{x:-5,y:-12,width:p+10,height:12*(_.length+1)+12,style:"fill:rgba(255, 255, 255, 0.9);stroke:rgb(232, 232, 232);"});return r.appendChild(s),r.appendChild(t),r.appendChild(C),{tooltip$:r,xVal:a,markerValues:n,width:p+10}},u.prototype.update=function(t){L(t.data)&&(this._data=t.data),L(t.viewConfig)&&(this._viewConfig=t.viewConfig),this._render()},u.prototype._render=function(){var t=this,e=s(this._viewConfig);L(this._elem$)&&e.removeChild(this._elem$),this._createChartCanvas(),this._createChartTitle(this._elem$),this._createChartYAxis(this._elem$),L(this._viewConfig.channels.color)?(this._createBarSeries(this._elem$),this._createSeriesLegend(this._elem$)):this._createBars(this._elem$),this._createChartXAxis(this._elem$),e.appendChild(this._elem$),setTimeout(function(){t._setupTooltip(t._elem$)},0)},u.prototype._createChartCanvas=function(){var t=E("svg",{width:this._viewConfig.width,height:this._viewConfig.height,viewBox:"0 0 ".concat(this._viewConfig.width," ").concat(this._viewConfig.height),class:"bubbles bubbles-bar-chart"}),e=E("rect",{x:0,y:0,width:this._viewConfig.width,height:this._viewConfig.height,fill:"#ffffff"});t.appendChild(e),this._elem$=t},u.prototype._createValueMapping=function(t,e){for(var i={},n=0;n<this._data.length;n+=1){var a=this._data[n];L(a[t])&&L(a[e])&&(i[a[t]]=a[e])}return i},u.prototype._createBars=function(t){for(var e=this._viewConfig.width,i=this._viewConfig.height,n=this._viewConfig.channels.x,a=this._viewConfig.channels.y,r=.9*e-10,s=A(this._data,n),o=r/s.length,l=D(.65*i),r=M(B({data:this._data,field:a,bands:l}),2),l=r[0],r=r[1],h=this._createValueMapping(n,a),d=.65*i/(r-l),c=.1*e,u=E("g",{class:"bubbles-barchart-bars"}),_=0;_<s.length;_+=1){var f=h[s[_]];L(f)&&(f=E("rect",{x:c+_*o+o/4,y:.15*i+.65*i-d*f,width:o/2,height:d*f,fill:P(0)}),u.appendChild(f))}t.appendChild(u)},u.prototype._createChartTitle=function(t){var e=this._viewConfig.title||"".concat(this._viewConfig.channels.x," vs ").concat(this._viewConfig.channels.y),i=E("g",{class:"bubbles-chart-title-group"}),e=E("text",{class:"bubbles-chart-title",x:"50%",y:"7%","text-anchor":"middle"},e);i.appendChild(e),t.appendChild(i)},u.prototype._createSeriesValueMapping=function(t,e,i){for(var n={},a=0;a<this._data.length;a+=1){var r=this._data[a],s=r[e],o=r[t],r=r[i];L(s)&&L(r)&&L(o)&&(n["".concat(o,"-").concat(s)]=r)}return n},u.prototype._createSeriesLegend=function(t){for(var e=this._viewConfig.width,i=this._viewConfig.height,n=this._viewConfig.channels.color,a=A(this._data,n),r=E("g",{class:"bubbles-series-legend"}),s=0,o=0;o<a.length;o+=1){var l=E("g",{class:"bubbles-series-legend-item"});this._inactiveSeries[a[o]]&&l.classList.add("bubbles-series-legend-item--inactive");var h=E("rect",{width:"".concat(12),height:"".concat(12),rx:"".concat(6),ry:"".concat(6),x:"2",y:"4",fill:P(o),"data-color":a[o]}),d=E("text",{x:"21",y:"15",style:"color:#333333;cursor:pointer;font-size:12px;fill:#333333;","text-anchor":"start","data-color":a[o]},a[o]);l.appendChild(h),l.appendChild(d),l.setAttribute("transform","translate(".concat(s,", 3)")),s+=k(a[o],"12px sans-serif").width+12+30,r.appendChild(l)}i*=.9;r.setAttribute("transform","translate(".concat((e-s)/2,", ").concat(i,")")),r.addEventListener("click",this._onSeriesLegendClick.bind(this)),t.appendChild(r)},u.prototype._onSeriesLegendClick=function(t){t=t.target.getAttribute("data-color");this._inactiveSeries[t]?delete this._inactiveSeries[t]:this._inactiveSeries[t]=!0,this._render(),this._updateParentBubble()},u.prototype._updateParentBubble=function(){for(var t=[],e=0;e<this._data.length;e+=1){var i=this._data[e],n=i[this._viewConfig.channels.color];S(this._inactiveSeries[n])&&t.push(i)}for(var a=0;a<this._bubbleView._children.length;a+=1)this._bubbleView._children[a].update(t)},u.prototype._createBarSeries=function(t){for(var e=this,i=this._viewConfig.width,n=this._viewConfig.height,a=this._viewConfig.channels.x,r=this._viewConfig.channels.y,s=this._viewConfig.channels.color,o=.9*i-10,l=A(this._data,a),h=o/l.length,d=A(this._data,s),c=d.filter(function(t){return!(t in e._inactiveSeries)}),u={},_=0;_<d.length;_+=1)u[d[_]]=_;for(var f=c.length,p=h/f/2,v=D(.65*n),o=M(B({data:this._data,field:r,bands:v}),2),v=o[0],o=o[1],b=this._createSeriesValueMapping(s,a,r),g=.65*n/(o-v),w=.1*i,C=0;C<f;C+=1){for(var m=c[C],y=E("g",{class:"bubbles-barchart-series"}),x=0;x<l.length;x+=1){var $=l[x],$=b["".concat(m,"-").concat($)];L($)&&($=E("rect",{x:w+x*h+h/4+C*p+5,y:.15*n+.65*n-g*$,width:p-10,height:g*$,fill:P(u[m])}),y.appendChild($))}t.appendChild(y)}},u.prototype._createChartYAxis=function(t){for(var e=this._viewConfig.width,i=this._viewConfig.height,n=E("g",{class:"bubbles-barchart-y-axis"}),a=E("g",{class:"bubbles-barchart-y-axis-grid"}),r=this._viewConfig.channels.y,s=D(.65*i),o=M(B({data:this._data,field:r,bands:s}),2),l=o[0],h=o[1],d=(h-l)/s,c=65/s,u=0;u<=s;u+=1){var _=15+u*c,f=h-u*d,p=.1*e,v=_*i/100,b=e-10,f=E("text",{style:"color:#666666;cursor:default;font-size:11px;fill:#666666;","text-anchor":"end",x:"7%",y:"".concat((_*i/100+5)/i*100,"%")},f),v=E("path",{class:"bubbles-grid-line",stroke:"#e6e6e6",d:"M ".concat(p," ").concat(v," L ").concat(b," ").concat(v)});a.appendChild(v),n.appendChild(f)}r=E("text",{class:"bubbles-chart-axis-title",style:"color:#666666;fill:#666666;","text-anchor":"middle",transform:"translate(".concat(.035*e,", ").concat(.45*i,") rotate(-90)")},r);n.appendChild(r),t.appendChild(a),t.appendChild(n)},u.prototype._createChartXAxis=function(t){for(var e=this._viewConfig.width,i=this._viewConfig.height,n=this._viewConfig.channels.x,a=.9*e-10,r=A(this._data,n),s=a/r.length,o=E("g",{class:"bubbles-barchart-x-axis"}),l=E("g",{class:"bubbles-barchart-x-axisband"}),h=.1*e,d=0;d<r.length;d+=1){var c=h+(d+1)*s-s/2,u=.8*i,_=.15*i,f=E("text",{style:"color:#666666;cursor:default;font-size:11px;fill:#666666;","text-anchor":"middle",x:c,y:"85%"},r[d]),_=E("path",{"stroke-width":s,stroke:"rgba(204,214,235,0.25)",class:"bubbles-barchart-band",d:"M ".concat(c," ").concat(u," L ").concat(c," ").concat(_)});l.appendChild(_),o.appendChild(f)}t.appendChild(l),t.appendChild(o)},u.prototype._setupTooltip=function(a){var r=this,s=this._viewConfig.width,o=this._viewConfig.height,l=this._viewConfig.channels.x,h=this._viewConfig.channels.y,d=this._viewConfig.channels.color;a.addEventListener("mousemove",function(t){r._tooltip$&&a.contains(r._tooltip$)&&a.removeChild(r._tooltip$);var e,i,n=a.createSVGPoint();n.x=t.clientX,n.y=t.clientY,(n=n.matrixTransform(a.getScreenCTM().inverse())).x<.1*s||n.x>s-10||n.y<.15*o||n.y>.8*o||(i=n.x,e=n.y,t=i-.1*s,i=e,i=new c({xField:l,yField:h,series:d,width:.9*s-10,data:r._data,inactiveSeries:r._inactiveSeries}).getTooltipForCoords(t,i),r._tooltip$=i.tooltip$,(n=n.x+10)+i.width>s&&(n-=i.width+10),r._tooltip$.setAttribute("transform","translate(".concat(n,", ").concat(e,")")),a.appendChild(r._tooltip$))})};var _={0:"Jan",1:"Feb",2:"Mar",3:"Apr",4:"May",5:"Jun",6:"Jul",7:"Aug",8:"Sep",9:"Oct",10:"Nov",11:"Dec"};function f(t){for(var e=t.data,i=t.field,n=t.width,a=[],r={},s=void 0,o=void 0,l=0;l<e.length;l+=1){var h=e[l][i];L(h)&&(h=new Date(h),S(s)&&(s=h.getTime()),S(o)&&(o=h.getTime()),r[h.getMonth()]=!0,s=Math.min(s,h.getTime()),o=Math.max(o,h.getTime()),a.push(h))}t=new Date(o).getFullYear()-new Date(s).getFullYear(),n={dates:a.sort(),minimum:s,maximum:o,width:n};return(4<=t?function(t){for(var e=Math.ceil(t.width/100),i=t.width/e,n=(t.maximum-t.minimum)/e,a=[],r=0,s=0;s<e-1;s+=1){r+=i;var o=t.minimum+(s+1)*n,l=new Date(o).getFullYear();a.push({position:r,label:l,value:o})}return a}:1<t&&t<4||4<=Object.keys(r)?p:function(t){for(var e=Math.ceil(t.width/100),i=t.width/e,n=(t.maximum-t.minimum)/e,a=[],r=0,s=0;s<e-1;s+=1){r+=i;var o=t.minimum+(s+1)*n,l=new Date(o),h=_[l.getMonth()],l=l.getDate()+1;a.push({position:r,label:"".concat(l," ").concat(h),value:o})}return a})(n)}function p(t){for(var e=Math.ceil(t.width/100),i=t.width/e,n=(t.maximum-t.minimum)/e,a=[],r=0,s=0;s<e-1;s+=1){r+=i;var o=t.minimum+(s+1)*n,l=new Date(o),h=l.getFullYear(),l=_[l.getMonth()];a.push({position:r,label:"".concat(l," ").concat(h),value:o})}return a}function v(t){var i=this;this._xField=t.xField,this._yField=t.yField,this._data=t.data.filter(function(t){return L(t[i._xField])}).sort(function(t,e){t=t[i._xField],e=e[i._xField];return t<e?-1:e<t?1:0}),this._series=t.series,this._inactiveSeries=t.inactiveSeries,this._width=t.width,this._xRange=void 0,this._seriesRange=void 0,this._init()}function b(t){this._data=t.data,this._viewConfig=t.viewConfig,this._bubbleView=t.bubbleView,this._elem$=void 0,this._tooltip$=void 0,this._markers$=void 0,this._inactiveSeries={},this._render()}function g(t){this._data=t.data,this._viewConfig=t.viewConfig,this._label=t.viewConfig.label,this._bubbleView=t.bubbleView,this._elem$=void 0,this._render()}v.prototype._init=function(){this._xRange=function(t,e){for(var i=[],n=0;n<t.length;n+=1){var a=t[n];L(a[e])&&i.push(new Date(a[e]).getTime())}return i}(this._data,this._xField),L(this._series)&&(this._seriesRange=A(this._data,this._series))},v.prototype.getTooltipForCoords=function(t,e){var i=this,n={},a=void 0,r=E("g",{class:"bubbles-linechart-tooltip"}),s=Math.floor(t/this._width*this._xRange.length),t=this._xRange[s],o=function(t,e,i){for(var n,a=t.filter(function(t){return L(t[e])}),r=0,s=a.length-1;r<=s;){var o=Math.floor((r+s)/2),l=a[o];new Date(l[e]).getTime()>i?s=o-1:r=o+1}for(n=r-1,r=0,s=a.length-1;r<=s;){var h=Math.floor((r+s)/2),d=a[h];new Date(d[e]).getTime()>=i?s=h-1:r=h+1}for(var c=[],u=s+1;u<=n;u+=1)c.push(a[u]);return c}(this._data,this._xField,t);if(L(this._series))for(var l=0;l<o.length;l+=1){var h=o[l];L(h[this._xField])&&(a=h[this._xField]),L(h[this._series])&&L(h[this._yField])&&(n[h[this._series]]=h[this._yField])}else for(var d=0;d<o.length;d+=1){var c=o[d];L(c[this._xField])&&(a=c[this._xField]),L(c[this._yField])&&(n[this._yField]=c[this._yField])}for(var u=k(a=new Date(a).toDateString(),"12px sans-serif"),_=Object.keys(n).sort().filter(function(t){return S(i._inactiveSeries[t])}),f=0,p=0,v=[],b=0;b<_.length;b+=1){var g=k("".concat(_[b],":"),"11px sans-serif"),w=k(n[_[b]],"bold 11px sans-serif"),f=Math.max(f,g.width),p=Math.max(p,u.width,f+w.width+10);v.push(g.width)}for(var C=E("g",{class:"bubbles bubbles-tooltip-rows"}),s=E("text",{style:"font-size:12px;"},a),m=0;m<_.length;m+=1){var y=_[m],x=E("text",{transform:"translate(0,".concat(15*(m+1),")")}),$=E("tspan",{style:"font-size:11px;color:rgb(95, 95, 95);"},"".concat(y,":")),y=E("tspan",{dx:f+10-v[m],style:"font-size:11px;font-weight:bold;color:rgb(95, 95, 95);"},n[y]);x.appendChild($),x.appendChild(y),C.appendChild(x)}t=E("rect",{x:-5,y:-12,width:p+10,height:12*(_.length+1)+12,style:"fill:rgba(255, 255, 255, 0.9);stroke:rgb(232, 232, 232);"});return r.appendChild(t),r.appendChild(s),r.appendChild(C),{tooltip$:r,xVal:a,markerValues:n,width:p+10}},b.prototype.update=function(t){L(t.data)&&(this._data=t.data),L(t.viewConfig)&&(this._viewConfig=t.viewConfig),this._render()},b.prototype._render=function(){var t=this,e=s(this._viewConfig);L(this._elem$)&&e.removeChild(this._elem$),this._createChartCanvas(),this._createChartTitle(this._elem$),this._createChartYAxis(this._elem$),this._createChartXAxis(this._elem$),L(this._viewConfig.channels.color)?(this._createLineSeries(this._elem$),this._createSeriesLegend(this._elem$)):this._createLineChartView(this._elem$),e.appendChild(this._elem$),setTimeout(function(){t._setupTooltip(t._elem$)},0)},b.prototype._createChartCanvas=function(){var t=E("svg",{width:this._viewConfig.width,height:this._viewConfig.height,viewBox:"0 0 ".concat(this._viewConfig.width," ").concat(this._viewConfig.height),class:"bubbles bubbles-line-chart"}),e=E("rect",{x:0,y:0,width:this._viewConfig.width,height:this._viewConfig.height,fill:"#ffffff"});t.appendChild(e),this._elem$=t},b.prototype._createChartTitle=function(t){var e=this._viewConfig.title||"".concat(this._viewConfig.channels.x," vs ").concat(this._viewConfig.channels.y),i=E("g",{class:"bubbles-chart-title-group"}),e=E("text",{class:"bubbles-chart-title",x:"50%",y:"7%","text-anchor":"middle"},e);i.appendChild(e),t.appendChild(i)},b.prototype._createLineChartView=function(t){for(var e=this._viewConfig.width,i=this._viewConfig.height,n=this._viewConfig.channels.x,a=this._viewConfig.channels.y,r=function(t,e,i){for(var n={},a=0;a<t.length;a+=1){var r=t[a];L(r[e])&&L(r[i])&&(n[r[e]]=r[i])}return n}(this._data,n,a),s=.9*e-10,o=.65*i,l=D(o),h=M(V(this._data,n),2),d=h[0],h=h[1],a=M(B({data:this._data,field:a,bands:l}),2),l=a[0],c=s/(h-d),u=o/(a[1]-l),_=.1*e,f=.2*i,l=E("g",{class:"bubbles-line-series"}),p=this._data.filter(function(t){return L(t[n])}).sort(function(t,e){t=t[n],e=e[n];return t<e?-1:e<t?1:0}),v=[],b=0;b<p.length;b+=1){var g,w=p[b];L(w[n])&&(g=new Date(w[n]).getTime(),L(w=r[w[n]])&&v.push([g*c+_-d*c,i-w*u-f]))}for(var C="",m=0;m<v.length;m+=1){var y=M(v[m],2),x=y[0],y=y[1];C+=(0===m?"M ":" L ").concat(x," ").concat(y)}e=E("path",{d:C,class:"bubles-linechart-line",fill:"none","stroke-width":2,"stoke-linecap":"round",stroke:P(0)});l.appendChild(e),t.appendChild(l)},b.prototype._createSeriesLegend=function(t){for(var e=this._viewConfig.width,i=this._viewConfig.height,n=this._viewConfig.channels.color,a=A(this._data,n),r=E("g",{class:"bubbles-series-legend"}),s=0,o=0;o<a.length;o+=1){var l=E("g",{class:"bubbles-series-legend-item"});this._inactiveSeries[a[o]]&&l.classList.add("bubbles-series-legend-item--inactive");var h=E("rect",{width:"".concat(12),height:"".concat(12),rx:"".concat(6),ry:"".concat(6),x:"2",y:"4",fill:P(o),"data-color":a[o]}),d=E("text",{x:"21",y:"15",style:"color:#333333;cursor:pointer;font-size:12px;fill:#333333;","text-anchor":"start","data-color":a[o]},a[o]);l.appendChild(h),l.appendChild(d),l.setAttribute("transform","translate(".concat(s,", 3)")),s+=k(a[o],"12px sans-serif").width+12+30,r.appendChild(l)}i*=.9;r.setAttribute("transform","translate(".concat((e-s)/2,", ").concat(i,")")),r.addEventListener("click",this._onSeriesLegendClick.bind(this)),t.appendChild(r)},b.prototype._onSeriesLegendClick=function(t){t=t.target.getAttribute("data-color");this._inactiveSeries[t]?delete this._inactiveSeries[t]:this._inactiveSeries[t]=!0,this._render(),this._updateParentBubble()},b.prototype._updateParentBubble=function(){for(var t=[],e=0;e<this._data.length;e+=1){var i=this._data[e],n=i[this._viewConfig.channels.color];S(this._inactiveSeries[n])&&t.push(i)}for(var a=0;a<this._bubbleView._children.length;a+=1)this._bubbleView._children[a].update(t)},b.prototype._createLineSeries=function(t){for(var e=this._viewConfig.width,i=this._viewConfig.height,n=this._viewConfig.channels.x,a=this._viewConfig.channels.y,r=this._viewConfig.channels.color,s=A(this._data,r),o=function(t,e,i,n){for(var a={},r=0;r<t.length;r+=1){var s=t[r];L(s[e])&&L(s[i])&&L(s[n])&&(a["".concat(s[n],"-").concat(s[e])]=s[i])}return a}(this._data,n,a,r),l=.9*e-10,h=.65*i,d=D(h),r=M(V(this._data,n),2),c=r[0],r=r[1],a=M(B({data:this._data,field:a,bands:d}),2),d=a[0],u=l/(r-c),_=h/(a[1]-d),f=.1*e,p=.2*i,v=E("g",{class:"bubbles-line-series"}),b=this._data.filter(function(t){return L(t[n])}).sort(function(t,e){t=t[n],e=e[n];return t<e?-1:e<t?1:0}),g=0;g<s.length;g+=1){var w=[],C=s[g];if(!this._inactiveSeries[C]){for(var m=0;m<b.length;m+=1){var y,x=b[m];L(x[n])&&(y=new Date(x[n]).getTime(),L(x=o["".concat(C,"-").concat(x[n])])&&w.push([y*u+f-c*u,i-x*_-p]))}for(var $="",S=0;S<w.length;S+=1){var k=M(w[S],2),F=k[0],k=k[1];$+=(0===S?"M ":"L ").concat(F," ").concat(k," ")}var T=E("path",{d:$,class:"bubles-linechart-line",fill:"none","stroke-width":2,"stoke-linecap":"round",stroke:P(g)});v.appendChild(T)}}t.appendChild(v)},b.prototype._createChartXAxis=function(t){for(var e=this._viewConfig.width,i=this._viewConfig.height,n=this._viewConfig.channels.x,a=.1*e,r=f({width:.9*e-10,data:this._data,field:n}),s=E("g",{class:"bubbles-time-axis"}),o=0;o<r.length;o+=1){var l=a+r[o].position,h=.8*i,d=10+h,h=E("path",{class:"bubbles-tick",stroke:"#ccd6eb",d:"M ".concat(l," ").concat(h," L ").concat(l," ").concat(d)}),d=E("text",{x:l,y:10+d,style:"color:#666666;cursor:default;font-size:11px;fill:#666666;","text-anchor":"middle"},r[o].label);s.appendChild(h),s.appendChild(d)}t.appendChild(s)},b.prototype._createChartYAxis=function(t){for(var e=this._viewConfig.width,i=this._viewConfig.height,n=E("g",{class:"bubbles-barchart-y-axis"}),a=E("g",{class:"bubbles-barchart-y-axis-grid"}),r=this._viewConfig.channels.y,s=D(.65*i),o=M(B({data:this._data,field:r,bands:s}),2),l=o[0],h=o[1],d=(h-l)/s,c=65/s,u=0;u<=s;u+=1){var _=15+u*c,f=h-u*d,p=.1*e,v=_*i/100,b=e-10,f=E("text",{style:"color:#666666;cursor:default;font-size:11px;fill:#666666;","text-anchor":"end",x:"7%",y:"".concat((_*i/100+5)/i*100,"%")},f),v=E("path",{class:"bubbles-grid-line",stroke:"#e6e6e6",d:"M ".concat(p," ").concat(v," L ").concat(b," ").concat(v)});a.appendChild(v),n.appendChild(f)}r=E("text",{class:"bubbles-chart-axis-title",style:"color:#666666;fill:#666666;","text-anchor":"middle",transform:"translate(".concat(.035*e*2/3,", ").concat(.45*i,") rotate(-90)")},r);n.appendChild(r),t.appendChild(a),t.appendChild(n)},b.prototype._setupTooltip=function(a){var r=this,s=this._viewConfig.width,o=this._viewConfig.height,l=this._viewConfig.channels.x,h=this._viewConfig.channels.y,d=this._viewConfig.channels.color;a.addEventListener("mousemove",function(t){L(r._tooltip$)&&a.contains(r._tooltip$)&&a.removeChild(r._tooltip$),L(r._markers$)&&a.contains(r._markers$)&&a.removeChild(r._markers$);var e,i,n=a.createSVGPoint();n.x=t.clientX,n.y=t.clientY,(n=n.matrixTransform(a.getScreenCTM().inverse())).x<.1*s||n.x>s-10||n.y<.15*o||n.y>.8*o||(i=n.x,e=n.y,t=i-.1*s,i=e,i=new v({xField:l,yField:h,series:d,width:.9*s-10,data:r._data,inactiveSeries:r._inactiveSeries}).getTooltipForCoords(t,i),r._tooltip$=i.tooltip$,(n=n.x+10)+i.width>s&&(n-=i.width+10),r._tooltip$.setAttribute("transform","translate(".concat(n,", ").concat(e,")")),r._drawTooltipMarkers(a,i),a.appendChild(r._tooltip$))})},b.prototype._drawTooltipMarkers=function(t,e){var i=this._viewConfig.width,n=this._viewConfig.height,a=this._viewConfig.channels.x,r=this._viewConfig.channels.y,s=.9*i-10,o=.65*n,l=D(o),h=M(V(this._data,a),2),a=h[0],h=h[1],r=M(B({data:this._data,field:r,bands:l}),2),l=r[0],h=s/(h-a),d=o/(r[1]-l),i=.1*i,c=.2*n,u=e.markerValues,e=new Date(e.xVal).getTime(),_=Object.keys(u).sort(),f=e*h+i-a*h,a=.8*n,h=.15*n,p=E("g",{class:"bubbles bubbles-highlight-markers"}),h=E("path",{d:"M ".concat(f," ").concat(a," L ").concat(f," ").concat(h),stroke:"#d6d6d6"});p.appendChild(h);for(var v,b=0;b<_.length;b+=1)this._inactiveSeries[_[b]]||(v=E("circle",{cx:f,cy:n-u[_[b]]*d-c,r:4,fill:P(b),stroke:"#ffffff"}),p.appendChild(v));this._markers$=p,t.appendChild(this._markers$)},g.prototype.update=function(t){L(t.data)&&(this._data=t.data),L(t.viewConfig)&&(this._viewConfig=t.viewConfig),this._render()},g.prototype._render=function(){var t=s(this._viewConfig);this._elem$&&t.contains(this._elem$)&&t.removeChild(this._elem$);var e=this._viewConfig.compute(this._data).toFixed(2),i=h("div",{class:"bubbles-kpi-view"}),n=h("h4",{class:"bubbles-kpi-label"},this._label),e=h("h2",{class:"bubbles-kpi-value"},e);i.appendChild(n),i.appendChild(e),t.appendChild(i),this._elem$=i};var w={filter:t,table:e,barchart:u,linechart:b,kpi:g};function C(t){var e;this._viewConfig=t.viewConfig,this._data=t.data,this._children=[],this._view=(e={bubbleView:this,data:this._data,viewConfig:this._viewConfig},t=e.viewConfig.type,new w[t](e))}function m(t){this._data=t,this._children=[],this._transforms=[],this._viewBubbleIndex=void 0}return C.prototype.update=function(t){this._view.update({data:t});for(var e=0;e<this._children.length;e+=1)this._children[e].update(t)},C.prototype.fork=function(){var t=m.fromData(this._data);return this._children.push(t),t},C.prototype._updateViewConfig=function(t){this._viewConfig=t,this._view.update({viewConfig:this._viewConfig})},m.fromData=function(t){return new m(t)},m.prototype.transform=function(t){if(0<t.length){var e=a(this._data,t),e=m.fromData(e);return this._transforms.push(t),this._children.push(e),e}return this},m.prototype.fork=function(){return this.transform([])},m.prototype.update=function(t){this._data=t;for(var e=0;e<this._children.length;e+=1){var i=this._children[e],n=this._transforms[e],n=a(this._data,n);i.update(n)}},m.prototype.viewAs=function(t){if(void 0===this._viewBubbleIndex){var e=new C({viewConfig:t,data:this._data});return this._viewBubbleIndex=this._children.length,this._children.push(e),this._transforms.push([]),e}e=this._children[this._viewBubbleIndex];return e._updateViewConfig(t),e},{bubbles:m,transform:{map:function(e){return{type:"map",process:function(t){return t.map(e)}}},filter:function(e){return{type:"filter",process:function(t){return t.filter(e)}}},groupBy:function(i,n){return{type:"groupBy",process:function(t){var h,c,u,e=Array.isArray(i)?i:[i],t=(h=e,function t(e,i){if(i===h.length)return e;for(var n,a={},r=h[i],s=0;s<e.length;s+=1){var o=e[s],l=o[r];L(l)&&(l in a?a[l].push(o):a[l]=[o])}for(n in a)a[n]=t(a[n],i+1);return a}(t,0));return c=n,u=[],function t(e,i,n,a){if(Array.isArray(e)){var r,s=function(t,e){for(var i={},n=0,a=Object.keys(e);n<a.length;n++){var r=a[n],s=e[r],o=void 0;switch(s){case"min":o=function(t,e){for(var i=void 0,n=0;n<t.length;n+=1){var a=t[n];L(a[e])&&(i=S(i)?a[e]:Math.min(i,a[e]))}return i}(t,r);break;case"max":o=function(t,e){for(var i=void 0,n=0;n<t.length;n+=1){var a=t[n];L(a[e])&&(i=S(i)?a[e]:Math.max(i,a[e]))}return i}(t,r);break;case"mean":o=function(t,e){for(var i=0,n=0,a=0;a<t.length;a+=1){var r=t[a];L(r[e])&&(i+=r[e],n+=1)}return 0<n?i/n:0}(t,r);break;case"sum":o=function(t,e){for(var i=0,n=0;n<t.length;n+=1){var a=t[n];L(a[e])&&(i+=a[e])}return i}(t,r);break;case"count":o=function(t,e){for(var i=0,n=0;n<t.length;n+=1)L(t[n][e])&&(i+=1);return i}(t,r);break;default:throw new Error("Unknown aggregation operator "+s)}i[r]=o}return i}(e,c);for(r in s)a[r]=s[r];u.push(a)}else for(var o in e){var l=i[n],h=o,l=Object.assign({},(d=h,(h=l)in(l={})?Object.defineProperty(l,h,{value:d,enumerable:!0,configurable:!0,writable:!0}):l[h]=d,l),a);t(e[o],i,n+1,l)}var d}(t,e,0,{}),u}}}}}});