import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { Withdrawal } from '../../../../../core/funds/models/withdrawal.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionHistoryComponent implements OnChanges, AfterViewInit {
  @Input() transactions: Withdrawal[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sorter!: MatSort;

  dataSource: MatTableDataSource<Withdrawal> = new MatTableDataSource<Withdrawal>([]);
  displayedColumns = ['date', 'amount'];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['transactions'] && changes['transactions'].currentValue) {
      this.dataSource.data = changes['transactions'].currentValue;
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sorter;
  }

  sort(sortEvent: Sort) {

  }
}
