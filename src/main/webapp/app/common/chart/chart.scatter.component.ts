import { Component, ElementRef, Injector, Input, OnChanges, Output, EventEmitter, OnInit } from '@angular/core';
import * as JQuery from 'jquery';

declare let echarts: any;

@Component({
  selector: 'jhi-scatter-chart',
  templateUrl: './chart.scatter.component.html'
})
export class ScatterChartComponent {
  private $element: JQuery;
  private $chartEl: JQuery = null;

  @Input()
  public option: any;

  @Input()
  public result: any;

  @Output()
  public clickHandler: EventEmitter<String> = new EventEmitter();

  constructor(protected elementRef: ElementRef, protected injector: Injector) {}

  // public ngOnInit() {
  //
  //     this.$element = $( this.elementRef.nativeElement );
  //
  //     if ( this.result ) {
  //         this.initChart();
  //     }
  // }
  //
  // public ngOnChanges( changes: any ) {
  //
  //     if ( !this.$element ) { return; }
  //
  //     this.initChart();
  // }
  //
  // private initChart(): void {
  //
  //     echarts = require( 'echarts' );
  //
  //     this.$chartEl = this.$element.find('.graph-history');
  //     const $chart = echarts.init( this.$chartEl[0] );
  //     const option = {
  //         dataZoom: [
  //             {
  //                 type: 'slider',
  //                 show: true,
  //                 xAxisIndex: [0],
  //                 filterMode: 'empty'
  //             },
  //             {
  //                 type: 'inside',
  //                 xAxisIndex: [0],
  //                 filterMode: 'empty'
  //             }
  //         ],
  //         label : {
  //             show : false,
  //             position: 'bottom',
  //             // formatter: (param) => {
  //             //     return param.data[3];
  //             // },
  //         },
  //         tooltip: this.result.tooltip,
  //         // color: ['#7ba8df'],
  //         grid: this.result.grid,
  //         legend: this.result.legend,
  //         xAxis: this.result.xAxis,
  //         yAxis: this.result.yAxis,
  //         series: this.result.series
  //     };
  //
  //     this.option = option;
  //
  //     if ( this.option !== null ) {
  //         $.extend( true, option, this.option );
  //     }
  //
  //     $chart.clear();
  //     $chart.setOption( option );
  //     $chart.resize();
  //
  //     $(window).on('resize', (event) => {
  //         $chart.resize();
  //     } );
  //
  // }
}
