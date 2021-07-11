import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css']
})

export class FilterComponent {
    @Input() set items(items: any[] | Set<any>) {
        if (items instanceof Set) {
            this.itemsInternal = Array.from(items);
        } else {
            this.itemsInternal = items;
        }

        if (this.filterValue) {
            this.applyFilter();
        } else {
            this.filteredItems = this.itemsInternal;
            this.itemsFiltered.next(this.filteredItems);
        }
    }

    @Input() set value(value: string) {
        this.filterValue = value;
        const valueUpper = value /*.toUpperCase()*/;
        if (valueUpper !== this.valueUpper) {
            const incremental = valueUpper.length > this.valueUpper.length && valueUpper.indexOf(this.valueUpper) !== -1;
            this.valueUpper = valueUpper;
            this.applyFilter(incremental);
        }
    }

    @Input() set comparer(value: (item: any, filter: string) => boolean) {
        this.comparerInternal = value;
        this.applyFilter();
    }

    @Output() itemsFiltered = new EventEmitter<any[]>();
    @Output() valueChange = new EventEmitter<string>();

    filterValue = '';

    private itemsInternal: any[];
    private comparerInternal: (item: any, filter: string) => boolean;
    private valueUpper = '';
    public filteredItems: any[];

    clearFilter(input: HTMLInputElement) {
        input.focus();
        this.updateFilter('');
    }

    updateFilter(value: string) {
        this.valueChange.next(value);
        this.value = value;
    }

    private applyFilter(incremental = false) {
        if (!this.valueUpper || !this.comparerInternal) {
            this.filteredItems = this.itemsInternal;
        } else if (!incremental) {
            this.filteredItems = this.itemsInternal && this.itemsInternal.filter(this.checkFilter, this);
        } else if (this.filteredItems) {
            this.filteredItems = this.filteredItems.filter(this.checkFilter, this);
        }

        this.itemsFiltered.next(this.filteredItems);
    }

    private checkFilter(i: any) {
        return this.comparerInternal(i, this.valueUpper);
    }
}
