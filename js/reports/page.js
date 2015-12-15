$(function () {
  $('#startdatetimepicker').datetimepicker();
  $('#enddatetimepicker').datetimepicker();
  var starttime = $('#startdatetimepicker').val().trim();
  var endtime = $('#enddatetimepicker').val().trim();
  var localtime = moment().format('YYYY-MM-DD HH:mm');

  $('#list').jqGrid({
    url: 'jqgrid.php?' + $.param({
      starttime: starttime,
      endtime: endtime,
      localtime: localtime
    }),
    altRows: true,
    autowidth: true,
    datatype: 'json',
    mtype: 'GET',
    colModel: [{
			name: 'hour',
			label: 'Date/Time'
		}, {
			name: 'air',
			label: 'Temp. Air'
		}, {
			name: 'water',
			label: 'Temp. Water'
		}, {
			name: 'ph',
			label: 'PH Level'
    } ],
    loadonce: false,
    pager: '#pager',
    rowNum: 25,
    rowList: [25, 50, 100],
    sortname: 'hour',
    sortorder: 'desc',
    sorttype: 'int',
    viewrecords: true,
    gridview: true,
    autoencode: true,
    ignoreCase: true,
		rownumber: true,
    loadComplete: function () {
      var starttime = $('#startdatetimepicker').val().trim();
      var endtime = $('#enddatetimepicker').val().trim();
      var localtime = moment().format('YYYY-MM-DD HH:mm');
      if (starttime.length == 0) {
        starttime = '*';
      }
      if (endtime.length == 0) {
        endtime = '*';
      }
      $.ajax({
        url: 'chart.php?' + $.param({
          starttime: starttime,
          endtime: endtime,
          localtime: localtime
        }),
        type: 'GET',
        success: function (data) {
          var chartData = JSON.parse(data);
          successajax(chartData);
        }
      });
    }
  });
});

function GetPhData(data) {
  var ph = [];
  for (var i = 0; i < data.length; i++) {
    ph.push(data[i].ph);
  }
  return ph;
}

function GetAirData(data) {
  var air = [];
  for (var i = 0; i < data.length; i++) {
    air.push(data[i].air);
  }
  return air;
}

function GetWaterData(data) {
  var water = [];
  for (var i = 0; i < data.length; i++) {
    water.push(data[i].water);
  }
  return water;
}

function GetHourData(data) {
  var hour = [];
  for (var i = 0; i < data.length; i++) {
    hour.push(data[i].hour);

  }
  return hour;
}

function successajax(chartData) {
/****************************************************************************
* successajax
* Builds chart.
*
* Parameters:
* array * chartdata: Chart data.
*
* Returns:
*  Succesful completion returns chart.
****************************************************************************/
  var categories = GetHourData(chartData).sort();
  var ph_data = GetPhData(chartData).sort();
  var air_data = GetAirData(chartData).sort();
  var water_data =GetWaterData(chartData).sort();

  $('#container').highcharts({
    title: {
      text: 'Average Hourly Temperature and PH level'
    },
    xAxis: {
      categories: categories
    },
    yAxis: [{ // Primary yAxis
        labels: { format: '{value}°F' },
        title: { text: 'Temperature' }
    }, { // Secondary yAxis
        title: { text: 'PH' },
        labels: { format: '{value}' },
        opposite: true
    }],
    tooltip: {
      shared: true
    },
    legend: {
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom'
    },
    series: [{
        name: 'PH',
        type: 'column',
        yAxis: 1,
        data: ph_data
    }, {
        name: 'Water Temperature',
        type: 'spline',
        data: water_data,
        tooltip: { valueSuffix: '°F' }
    }, {
        name: 'Air Temperature',
        type: 'spline',
        data: air_data,
        tooltip: { valueSuffix: '°F' }
    }]
  });
}
