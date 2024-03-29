import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-header',
  templateUrl: './list-header.component.html',
  styleUrls: ['./list-header.component.css'],
})
export class ListHeaderComponent implements OnInit {
  @Input() counter: number = 0;
  @Input() caption: string = '';
  @Output() sort: EventEmitter<void> = new EventEmitter<void>();
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}
  ngOnInit(): void {}
  onSortClick() {
    this.sort.emit();
  }
  onSearchKeyUp(eventArg: any) {
    const target: HTMLInputElement = eventArg.target;
    const searchTerm = target.value;
    this.search.emit(searchTerm);
  }
}
