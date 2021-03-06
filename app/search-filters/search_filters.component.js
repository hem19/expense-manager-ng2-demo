System.register(['@angular/core', '@vaadin/angular2-polymer'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, angular2_polymer_1;
    var SearchFilters;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular2_polymer_1_1) {
                angular2_polymer_1 = angular2_polymer_1_1;
            }],
        execute: function() {
            SearchFilters = (function () {
                function SearchFilters() {
                    this.filters = {};
                    this.filtersChange = new core_1.EventEmitter();
                    this.activeFilterCount = 0;
                }
                SearchFilters.prototype.updateStatus = function (e) {
                    var status = e.target.name;
                    var toggle = e.target.checked;
                    if (!this.filters.statuses) {
                        this.filters.statuses = [];
                    }
                    if (toggle) {
                        this.filters.statuses.push(status);
                    }
                    else {
                        this.filters.statuses.splice(this.filters.statuses.indexOf(status), 1);
                    }
                };
                SearchFilters.prototype.filtersChanged = function () {
                    var _this = this;
                    this.filtersChange.emit(this.filters);
                    // Count active filters.
                    this.activeFilterCount = ['after', 'before', 'merchant', 'min', 'max', 'statuses'].filter(function (field) {
                        return _this.filters[field] && _this.filters[field].length > 0;
                    }).length;
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], SearchFilters.prototype, "filtersChange");
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], SearchFilters.prototype, "merchants");
                SearchFilters = __decorate([
                    core_1.Component({
                        selector: 'search-filters',
                        templateUrl: './app/search-filters/search_filters.component.html',
                        styleUrls: ['./app/search-filters/search_filters.component.css'],
                        directives: [angular2_polymer_1.PolymerElement('vaadin-combo-box'), angular2_polymer_1.PolymerElement('vaadin-date-picker')]
                    }), 
                    __metadata('design:paramtypes', [])
                ], SearchFilters);
                return SearchFilters;
            })();
            exports_1("SearchFilters", SearchFilters);
        }
    }
});
//# sourceMappingURL=search_filters.component.js.map