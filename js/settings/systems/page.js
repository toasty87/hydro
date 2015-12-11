$(function() {
  site.ajax({
    param: {
      format: 'GetSystemInfo'
    },
    success: function(data) {
      $('#hydro_ip').val(data[0]['ip_address']);  // I/O Server
      $('#pump_1_ip').val(data[1]['ip_address']);  // Pump 1-4 Server
      $('#pump_2_ip').val(data[2]['ip_address']);  //Pump -5-8 (Future)
      $('#cam_ip').val(data[3]['ip_address']);  //Camera
    }
  });

  $('#update').bind('click', function() {
    hydro = $('#hydro_ip').val().trim();
    pump_1 = $('#pump_1_ip').val().trim();
    pump_2 = $('#pump_2_ip').val().trim();
    cam =  $('#cam_ip').val().trim();

    site.ajax({
      param: {
        format: 'SetSystems',
        hydro: hydro,
        pump_1: pump_1,
        pump_2: pump_2,
        cam: cam
      },
      success: function(data) {
        $("#updatestatus").show()
        $("#updatestatus").text("Systems updated")
        $("#updatestatus").fadeOut(1500)
      }
    });
  });
});

function model() {
  var model = $('#model').val().trim();
  var modelgroup = document.getElementById('res');

  var select = document.getElementById("res");
  var length = select.options.length;
  for (i = 0; i < length; i++) {
    select.options[i] = null;
  }

  var opt = document.createElement('option');
  if(model === '1' || model === '2' || model === '3' || model === '4' || model === '5' || model === '6 '|| model === '9' || model === '10' || model === '11' ) {
    opt = document.createElement('option');
    opt.text = '320x240';
    opt.value = 1;
    modelgroup.appendChild(opt);
    opt = document.createElement('option');
    opt.text = '640x480';
    opt.value = 2;
    modelgroup.appendChild(opt);
  } else if (model === '0'){

  } else {
    opt = document.createElement('option');
    opt.text = '352x288 - PAL';
    opt.value = 3;
    modelgroup.appendChild(opt);
    opt = document.createElement('option');
    opt.text = '704x576 - PAL';
    opt.value = 4;
    modelgroup.appendChild(opt);
    opt = document.createElement('option');
    opt.text = '352x240 - NTSC';
    opt.value = 5;
    modelgroup.appendChild(opt);
    opt = document.createElement('option');
    opt.text = '704x480 - NTSC';
    opt.value = 6;
    modelgroup.appendChild(opt);
  }
}
