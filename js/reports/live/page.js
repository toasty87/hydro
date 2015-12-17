getFill();
getDrain();
getLights();

function getFill(){
  /*
  $.get(
    "http://192.168.1.119/api/index.php?f=o1",
    function(data) {
      $('#fill').text(data);
    }
  );
  */
  $('#fill').text("ON");
  setTimeout(getFill, 3000)
}

function getDrain(){
  /*
  $.get(
    "http://192.168.1.119/api/index.php?f=o2",
    function(data) {
      $('#drain').text(data);
    }
  );
  */
  $('#drain').text("OFF");
  setTimeout(getDrain, 3000)
}

function getLights(){
  /*
  $.get(
    "http://192.168.1.119/api/index.php?f=o3",
    function(data) {
      $('#lights').text(data);
    }
  );
  */
  $('#lights').text("ON");
  setTimeout(getLights, 3000)
}

$(function () {
  $('#air').highcharts({
    chart: {
      type: 'gauge',
      height: 200
    },
    title: { text: 'Air Tempature' },
    tooltip: { enabled: false },
    pane: {
      startAngle: -150,
      endAngle: 150,
    },
    // the value axis
    yAxis: {
      min: 32,
      max: 122,
      minorTickInterval: 'auto',
      minorTickPosition: 'inside',
      minorTickColor: '#666',
      tickPixelInterval: 30,
      tickPosition: 'inside',
      tickColor: '#666',
      labels: {
        step: 2,
        rotation: 'auto'
      },
      title: { text: '°F' },
      plotBands: [{
        from: 32,
        to: 55,
        color: '#0066ff' // blue
      }, {
        from: 120,
        to: 160,
      }, {
        from: 80,
        to: 122,
        color: '#DF5353' // red
      }]
    },
    series: [{ data: [80] }]
  },
   // Add some life
   function (chart) {
    if (!chart.renderer.forExport) {
/*
      setInterval(function () {
        $.get(
          "http://192.168.1.119/api/index.php?f=air",
          function(data) {
            var point = chart.series[0].points[0],
                newVal,
                inc = data;
            newVal = point.y + inc;
            if (newVal < 32 || newVal > 122) {
              newVal = point.y - inc;
            }
            point.update(newVal);
          }
        );
      }, 3000);
*/


      setInterval(function () {
        var point = chart.series[0].points[0],
            newVal,
            inc = Math.round((Math.random() - 0.5) * 20);
        newVal = point.y + inc;
        if (newVal < 32 || newVal > 122) {
          newVal = point.y - inc;
        }
        point.update(newVal);
      }, 3000);

    }
  });

//************************************

  $('#water').highcharts({
    chart: {
      type: 'gauge',
      height: 200
    },
    title: { text: 'Water Tempature' },
    tooltip: { enabled: false },
    pane: {
      startAngle: -150,
      endAngle: 150,
    },

    // the value axis
    yAxis: {
      min: 32,
      max: 122,
      minorTickInterval: 'auto',
      minorTickPosition: 'inside',
      minorTickColor: '#666',
      tickPixelInterval: 30,
      tickPosition: 'inside',
      tickColor: '#666',
      labels: {
        step: 2,
        rotation: 'auto'
      },
      title: { text: '°F' },
      plotBands: [{
        from: 32,
        to: 55,
        color: '#0066ff' // blue
      }, {
        from: 120,
        to: 160,
      }, {
        from: 80,
        to: 122,
        color: '#DF5353' // red
      }]
    },
    series: [{ data: [80] }]
  },
   // Add some life
   function (chart) {
    if (!chart.renderer.forExport) {
/*
setInterval(function () {
  $.get(
    "http://192.168.1.119/api/index.php?f=water",
    function(data) {
      var point = chart.series[0].points[0],
          newVal,
          inc = data;
      newVal = point.y + inc;
      if (newVal < 32 || newVal > 122) {
        newVal = point.y - inc;
      }
      point.update(newVal);
    }
  );
}, 3000);
*/

      setInterval(function () {
        var point = chart.series[0].points[0],
            newVal,
            inc = Math.round((Math.random() - 0.5) * 20);
        newVal = point.y + inc;
        if (newVal < 32 || newVal > 122) {
          newVal = point.y - inc;
        }
        point.update(newVal);
      }, 3000);
    }
  });


//******************************************************************************
  $('#ph').highcharts({
     chart: {
         type: 'gauge',
         height: 200
     },
     title: { text: 'PH Level' },
     tooltip: { enabled: false },
     pane: [{
         startAngle: -45,
         endAngle: 45,
         background: null,
         center: ['50%', '115%'],
         size: 300
     }],
     yAxis: [{
       min: 0,
       max: 14,
       plotBands: [{
         from: 0,
         to: 5,
         color: '#C02316',
         innerRadius: '95%',
         outerRadius: '100%'
       }, {
         from: 8,
         to: 14,
         color: '#C02316',
         innerRadius: '95%',
         outerRadius: '100%'
       }],
       pane: 0,
       title: { text: 'PH' }
     }],
     series: [{ data: [7] }]
   },
   // Add some life
   function (chart) {
     /*
     setInterval(function () {
       if (chart.series) {
         $.get(
           "http://192.168.1.119/api/index.php?f=ph",
           function(data) {
             var ph = chart.series[0].points[0],
                 phVal,
                 inc = (Math.random() - 0.5) * 3;
             phVal = left.y + inc;
             if (phVal < 0 || phVal > 14) {
               phVal = ph.y - inc;
             }
             ph.update(phVal, false);
             chart.redraw();
           }
         );
       }
     }, 500);
*/
     setInterval(function () {
       if (chart.series) {
         var left = chart.series[0].points[0],
             leftVal,
             inc = (Math.random() - 0.5) * 3;
         leftVal = left.y + inc;
         if (leftVal < 0 || leftVal > 14) {
           leftVal = left.y - inc;
         }
         left.update(leftVal, false);
         chart.redraw();
       }
     }, 500);
   });
});
