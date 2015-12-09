$(function() {
  $('#start').datetimepicker({
    datepicker:false,
    format:'H:i'
  });
  $('#end').datetimepicker({
    datepicker:false,
    format:'H:i'
  });

  site.ajax({
    param: {
      format: 'GetSettings'
    },
    success: function(data) {
      $('#start').val(data[0]['start']);
      $('#end').val(data[0]['end']);
      $('#water_full').val(data[0]['water_full']);
      $('#water_empty').val(data[0]['water_empty']);
      $('#water_high').val(data[0]['water_high']);
      $('#water_low').val(data[0]['water_low']);
      $('#air_high').val(data[0]['air_high']);
      $('#air_low').val(data[0]['air_low']);
    }
  });

  $('#update').bind('click', function() {
    start = $('#start').val().trim();
    end = $('#end').val().trim();
    water_full = $('#water_full').val().trim();
    water_empty = $('#water_empty').val().trim();
    water_high = $('#water_high').val().trim();
    water_low = $('#water_low').val().trim();
    air_high = $('#air_high').val().trim();
    air_low = $('#air_low').val().trim();

    site.ajax({
      param: {
        format: 'SetSettings',
        start: start,
        end: end,
        water_full: water_full,
        water_empty: water_empty,
        water_high: water_high,
        water_low: water_low,
        air_high: air_high,
        air_low: air_low
      },
      success: function(data) {
        $("#updatestatus").show()
        $("#updatestatus").text("Systems updated")
        $("#updatestatus").fadeOut(1500)
      }
    });
  });
});
