import React, { Component } from 'react';
import CanvasJSReact from '../../js/canvasjs.react';
import firebase from '../../firebase';
import $ from 'jquery';

var CanvasJS = CanvasJSReact.CanvasJS;

class Canvas extends Component {
  componentDidMount() {
    var chart, toOffline;
    var newItems = false;

    $(document).ready(function (e) {
      chart = new CanvasJS.Chart('chartContainer', {
        animationEnabled: true,
        title: {
          text: 'PM Detector Chart',
        },
        axisX: {
          valueFormatString: 'HH:mm',
        },
        axisY: {
          valueFormatString: '0.0#',
        },
        toolTip: {
          shared: true,
          contentFormatter: function (e) {
            var content =
              CanvasJS.formatDate(
                e.entries[0].dataPoint.x,
                'D DDD YYYY <br> HH:mm:ss'
              ) + '<br>';
            content +=
              '<strong style="color:rgba(40,175,101,0.7)">PM1:</strong> ' +
              e.entries[0].dataPoint.y +
              ' µm<br>';
            content +=
              '<strong style="color:rgba(40,175,101,0.9)">PM2.5:</strong> ' +
              e.entries[1].dataPoint.y +
              ' µm<br>';
            content +=
              '<strong style="color:rgba(0,75,141,0.7)">PM10:</strong> ' +
              e.entries[2].dataPoint.y +
              ' µm';
            return content;
          },
        },
        legend: {
          verticalAlign: 'top',
          horizontalAlign: 'right',
          dockInsidePlotArea: false,
        },
        dataPointWidth: 10,
        zoomEnabled: true,
        data: [
          {
            name: 'PM1',
            showInLegend: true,
            legendMarkerType: 'square',
            type: 'area',
            color: 'rgba(40,175,101,0.5)',
            markerSize: 0,
            dataPoints: [],
          },
          {
            name: 'PM2.5',
            showInLegend: true,
            legendMarkerType: 'square',
            type: 'area',
            color: 'rgba(40,175,101,0.7)',
            markerSize: 0,
            dataPoints: [],
          },
          {
            name: 'PM10',
            showInLegend: true,
            legendMarkerType: 'square',
            type: 'area',
            color: 'rgba(0,75,141,0.5)',
            markerSize: 0,
            dataPoints: [],
          },
        ],
      });
      chart.render();

      var Sensor = firebase.database().ref().child('Sensor');

      Sensor.on('child_added', function (sanp) {
        if (!newItems) return;
        var row = sanp.val();

        row.time = new Date(row.time);
        chart.options.data[0].dataPoints.push({ x: row.time, y: row.PM10 });
        chart.options.data[1].dataPoints.push({ x: row.time, y: row.PM25 });
        chart.options.data[2].dataPoints.push({ x: row.time, y: row.PM100 });
        chart.render();

        $('#time > .contentDate1').html(row.time);
        $('#PM10 > .content').text(row.PM10 + ' µm');
        $('#PM25 > .content').text(row.PM25 + ' µm');
        $('#PM100 > .content').text(row.PM100 + ' µm');

        $('#status').removeClass('danger').addClass('success');
        $('#status > .content').text('ONLINE');

        setTimeoffline();
      });

      var now = new Date();
      Sensor.orderByChild('time')
        .startAt(
          now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate()
        )
        .once('value', function (sanp) {
          //   console.log(sanp);
          newItems = true;
          var dataRows = sanp.val();
          var lastRows = 0;
          $.each(dataRows, function (index, row) {
            row.time = new Date(row.time);
            chart.options.data[0].dataPoints.push({ x: row.time, y: row.PM10 });
            chart.options.data[1].dataPoints.push({ x: row.time, y: row.PM25 });
            chart.options.data[2].dataPoints.push({
              x: row.time,
              y: row.PM100,
            });
            lastRows = row;
          });
          chart.render();

          var Arow = lastRows;
          $('#PM10 > .content').text(Arow.PM10 + ' µm');
          $('#PM25 > .content').text(Arow.PM25 + ' µm');
          $('#PM100 > .content').text(Arow.PM100 + ' µm');

          var now = new Date();
          Arow.time = new Date(Arow.time);
          if (Math.round(now) - Math.round(Arow.time) < 60 * 60 * 10) {
            $('#status').removeClass('danger').addClass('success');
            $('#status > .content').text('ONLINE');
          } else {
            $('#status').removeClass('success').addClass('danger');
            $('#status > .content').text('OFFLINE');
          }

          setTimeoffline();
        });
    });

    var setTimeoffline = function () {
      if (typeof toOffline === 'number') clearTimeout(toOffline);

      toOffline = setTimeout(function () {
        $('#status').removeClass('success').addClass('danger');
        $('#status > .content').text('OFFLINE');
      }, 60 * 60 * 10);
    };
  }

  render() {
    return (
      <div>
        <div
          id="chartContainer"
          style={{ height: '400px', width: '100%' }}
        ></div>
        <br />
      </div>
    );
  }
}
export default Canvas;
