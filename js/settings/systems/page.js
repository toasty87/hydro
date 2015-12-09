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
