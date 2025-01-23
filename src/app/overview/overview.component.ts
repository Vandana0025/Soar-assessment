import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as echarts from 'echarts';
import { CardDetailsComponent } from './card-details/card-details.component';
import { RecentTransactionsComponent } from './recent-transactions/recent-transactions.component';
import { QuickTransferComponent } from './quick-transfer/quick-transfer.component';

@Component({
  selector: 'app-overview',
  imports: [
    CardDetailsComponent,
    RecentTransactionsComponent,
    QuickTransferComponent,
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css',
})
export class OverviewComponent implements OnInit {
  ngOnInit(): void {
    this.initCharts();
  }

  initCharts(): void {
    // Chart 1: Bar Chart
    const chart1 = echarts.init(
      document.getElementById('chart1') as HTMLElement
    );
    chart1.setOption({
      title: { text: '' },
      tooltip: {},
      legend: {
        data: ['Deposit', 'Withdraw'],
        right: 10,
        top: 10,
        textStyle: {
          color: '#888',
        },
      },
      xAxis: {
        type: 'category',
        data: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        axisLabel: {
          color: '#888',
        },
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          color: '#888',
        },
      },
      series: [
        {
          name: 'Withdraw',
          type: 'bar',
          data: [400, 300, 350, 450, 250, 300, 350],
          barWidth: '15%',
          itemStyle: {
            color: '#333',
            barBorderRadius: [10, 10, 0, 0],
          },
        },
        {
          name: 'Deposit',
          type: 'bar',
          data: [200, 100, 150, 300, 200, 150, 250],
          barWidth: '15%',
          itemStyle: {
            color: '#4a6cf7',
            barBorderRadius: [10, 10, 0, 0],
          },
        },
      ],
    });

    // Chart 2: Pie Chart
    const chart2 = echarts.init(
      document.getElementById('chart2') as HTMLElement
    );
    chart2.setOption({
      title: { text: '' },
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {c} ({d}%)',
      },
      series: [
        {
          type: 'pie',
          radius: '70%',
          avoidLabelOverlap: false,
          selectedMode: 'multiple',
          selectedOffset: 3,
          label: {
            show: true,
            position: 'inside',
            formatter: '{d}%\n{b}',
            color: '#fff',
            fontWeight: 'bold',
          },
          labelLine: {
            show: false,
          },
          itemStyle: {
            borderColor: '#fff',
            borderWidth: 5,
          },
          data: [
            {
              value: 30,
              name: 'Entertainment',
              itemStyle: { color: '#2c3e50' },
              selected: true,
            },
            {
              value: 30,
              name: 'Bill Expense',
              itemStyle: { color: '#e67e22' },
            },
            {
              value: 20,
              name: 'Investment',
              itemStyle: { color: '#4a6cf7' },
              selected: true,
            },
            { value: 20, name: 'Others', itemStyle: { color: '#333' } },
          ],
        },
      ],
    });

    // Chart 3: Line Chart
    const chart3 = echarts.init(
      document.getElementById('chart3') as HTMLElement
    );
    chart3.setOption({
      title: { text: '' },
      tooltip: {
        trigger: 'axis',
      },
      xAxis: {
        type: 'category',
        data: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        axisLabel: {
          color: '#888',
        },
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          color: '#888',
        },
      },
      series: [
        {
          type: 'line',
          data: [200, 300, 400, 800, 600, 400, 600],
          smooth: true,
          lineStyle: {
            color: '#4a6cf7',
            width: 2,
          },
          areaStyle: {
            color: 'rgba(74, 108, 247, 0.2)',
          },
        },
      ],
    });
  }
}
