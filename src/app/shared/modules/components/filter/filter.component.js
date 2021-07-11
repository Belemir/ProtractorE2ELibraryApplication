var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
var FilterComponent = (function () {
    function FilterComponent() {
        this.itemsFiltered = new EventEmitter();
        this.valueChange = new EventEmitter();
        this.filterValue = "";
        this.valueUpper = "";
    }
    Object.defineProperty(FilterComponent.prototype, "items", {
        set: function (items) {
            if (items instanceof Set) {
                this._items = Array.from(items);
            }
            else {
                this._items = items;
            }
            if (this.filterValue) {
                this.applyFilter();
            }
            else {
                this.filteredItems = this._items;
                this.itemsFiltered.next(this.filteredItems);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FilterComponent.prototype, "value", {
        set: function (value) {
            this.filterValue = value;
            var valueUpper = value.toUpperCase();
            if (valueUpper != this.valueUpper) {
                var incremental = valueUpper.length > this.valueUpper.length && valueUpper.indexOf(this.valueUpper) != -1;
                this.valueUpper = valueUpper;
                this.applyFilter(incremental);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FilterComponent.prototype, "comparer", {
        set: function (value) {
            this._comparer = value;
            this.applyFilter();
        },
        enumerable: true,
        configurable: true
    });
    ;
    FilterComponent.prototype.clearFilter = function (input) {
        input.focus();
        this.updateFilter("");
    };
    FilterComponent.prototype.updateFilter = function (value) {
        this.valueChange.next(value);
        this.value = value;
    };
    FilterComponent.prototype.applyFilter = function (incremental) {
        if (incremental === void 0) { incremental = false; }
        if (!this.valueUpper || !this._comparer) {
            this.filteredItems = this._items;
        }
        else if (!incremental) {
            this.filteredItems = this._items && this._items.filter(this.checkFilter, this);
        }
        else if (this.filteredItems) {
            this.filteredItems = this.filteredItems.filter(this.checkFilter, this);
        }
        this.itemsFiltered.next(this.filteredItems);
    };
    FilterComponent.prototype.checkFilter = function (i) {
        return this._comparer(i, this.valueUpper);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FilterComponent.prototype, "items", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], FilterComponent.prototype, "value", null);
    __decorate([
        Input(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function])
    ], FilterComponent.prototype, "comparer", null);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], FilterComponent.prototype, "itemsFiltered", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], FilterComponent.prototype, "valueChange", void 0);
    FilterComponent = __decorate([
        Component({
            moduleId: "" + module.id,
            selector: 'filter',
            templateUrl: './filter.component.html',
            styleUrls: ['./filter.component.scss']
        })
    ], FilterComponent);
    return FilterComponent;
}());
export { FilterComponent };
