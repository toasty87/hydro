var check1 = false;
var check2 = false;
var check3 = false;
var check4 = false;

$(function() {
  site.ajax({
    param: {
      format: 'GetPumps'
    },
    success: function(data) {
      console.log('data: ', data);
      $("#updatestatus").show()
      $("#updatestatus").text("Pumps updated")
      $("#updatestatus").fadeOut(1500)
    }
  });


  $('#update').bind('click', function() {
    //Set Vairables
    var type_1 = $('#type_1').val().trim();
    var type_2 = $('#type_2').val().trim();
    var type_3 = $('#type_3').val().trim();
    var type_4 = $('#type_4').val().trim();

    if (type_1 === '1' || type_1 === '2') {
      var ph_1 = $('#ph_1').val().trim();
      var description_1 = '';
      var days_1 = '';
      var amount_1 = '';
      var start_1 = '';
      var end_1 = '';
    } else if (type_1 === '3'){
      var ph_1 = '';
      var description_1 = $('#description_1').val().trim();
      var days_1 = $('#days_1').val().trim();
      var amount_1 = $('#amount_1').val().trim();
      var start_1= $('#start_1').val().trim();
      var end_1= $('#end_1').val().trim();
    }
    if (type_2 === '1' || type_2 === '2') {
      var ph_2 = $('#ph_2').val().trim();
      var description_2 = '';
      var days_2 = '';
      var amount_2 = '';
      var start_2 = '';
      var end_2 = '';
    } else if (type_2 === '3'){
      var ph_2 = '';
      var description_2 = $('#description_2').val().trim();
      var days_2 = $('#days_2').val().trim();
      var amount_2 = $('#amount_2').val().trim();
      var start_2= $('#start_2').val().trim();
      var end_2= $('#end_2').val().trim();
    }
    if (type_3 === '1' || type_3 === '2') {
      var ph_3 = $('#ph_3').val().trim();
      var description_3 = '';
      var days_3 = '';
      var amount_3 = '';
      var start_3 = '';
      var end_3 = '';
    } else if (type_3 === '3'){
      var ph_3 = '';
      var description_3 = $('#description_3').val().trim();
      var days_3 = $('#days_3').val().trim();
      var amount_3 = $('#amount_3').val().trim();
      var start_3= $('#start_3').val().trim();
      var end_3= $('#end_3').val().trim();
    }
    if (type_4 === '1' || type_4 === '2') {
      var ph_4 = $('#ph_4').val().trim();
      var description_4 = '';
      var days_4 = '';
      var amount_4 = '';
      var start_4 = '';
      var end_4 = '';
    } else if (type_4 === '3'){
      var ph_4 = '';
      var description_4 = $('#description_4').val().trim();
      var days_4 = $('#days_4').val().trim();
      var amount_4 = $('#amount_4').val().trim();
      var start_4= $('#start_4').val().trim();
      var end_4= $('#end_4').val().trim();
    }

    if (check1 == true) {
      var enable_1 = 1;
    } else {
      enable_1 = 0;
    }
    if (check2 == true) {
      var enable_2 = 1;
    } else {
      enable_2 = 0;
    }
    if (check3 == true) {
      var enable_3 = 1;
    } else {
      enable_3 = 0;
    }
    if (check4 == true) {
      var enable_4 = 1;
    } else {
      enable_4 = 0;
    }
    //Pump 1
    if (enable_1 === 1 && (type_1 === '1' || type_1 === '2') && ph_1 === '') {
      $('#updatestatus').text('PH level required');
      $('#updatestatus').fadeOut(9999);
      $('#ph_1').focus();
    } else if (enable_1 === 1 && type_1 === '3' && description_1 === '') {
      $('#updatestatus').text('Chemical Description required');
      $('#updatestatus').fadeOut(9999);
      $('#description_1').focus();
    } else if (enable_1 === 1 && type_1 === '3' && days_1 === '') {
      $('#updatestatus').text('How often required');
      $('#updatestatus').fadeOut(9999);
      $('#days_1').focus();
    } else if (enable_1 === 1 && type_1 === '3' && amount_1 === '') {
      $('#updatestatus').text('Amount of Checimcal required');
      $('#updatestatus').fadeOut(9999);
      $('#amount_1').focus();
    } else if (enable_1 === 1 && type_1 === '3' && start_1 === '') {
      $('#updatestatus').text('Start Date required');
      $('#updatestatus').fadeOut(9999);
      $('#start_1').focus();
      //Pump 2
    } else if (enable_2 === 1 && (type_2 === '1' || type_2 === '2') && ph_2 === '') {
      $('#updatestatus').text('PH level required');
      $('#updatestatus').fadeOut(9999);
      $('#ph_2').focus();
    } else if (enable_2 === 1 && type_2 === '3' && description_2 === '') {
      $('#updatestatus').text('Chemical Description required');
      $('#updatestatus').fadeOut(9999);
      $('#description_2').focus();
    } else if (enable_2 === 1 && type_2 === '3' && days_2 === '') {
      $('#updatestatus').text('How often required');
      $('#updatestatus').fadeOut(9999);
      $('#days_2').focus();
    } else if (enable_2 === 1 && type_2 === '3' && amount_2 === '') {
      $('#updatestatus').text('Amount of Checimcal required');
      $('#updatestatus').fadeOut(9999);
      $('#amount_2').focus();
    } else if (enable_2 === 1 && type_2 === '3' && start_2 === '') {
      $('#updatestatus').text('Start Date required');
      $('#updatestatus').fadeOut(9999);
      $('#start_2').focus();
      //Pump3
    } else if (enable_3 === 1 && (type_3 === '1' || type_3 === '2') && ph_3 === '') {
      $('#updatestatus').text('PH level required');
      $('#updatestatus').fadeOut(9999);
      $('#ph_3').focus();
    } else if (enable_3 === 1 && type_3 === '3' && description_3 === '') {
      $('#updatestatus').text('Chemical Description required');
      $('#updatestatus').fadeOut(9999);
      $('#description_3').focus();
    } else if (enable_3 === 1 && type_3 === '3' && days_3 === '') {
      $('#updatestatus').text('How often required');
      $('#updatestatus').fadeOut(9999);
      $('#days_3').focus();
    } else if (enable_3 === 1 && type_3 === '3' && amount_3 === '') {
      $('#updatestatus').text('Amount of Checimcal required');
      $('#updatestatus').fadeOut(9999);
      $('#amount_3').focus();
    } else if (enable_3 === 1 && type_3 === '3' && start_3 === '') {
      $('#updatestatus').text('Start Date required');
      $('#updatestatus').fadeOut(9999);
      $('#start_3').focus();
      //Pump4
    } else if (enable_4 === 1 && (type_4 === '1' || type_4 === '2') && ph_4 === '') {
      $('#updatestatus').text('PH level required');
      $('#updatestatus').fadeOut(9999);
      $('#ph_4').focus();
    } else if (enable_4 === 1 && type_4 === '3' && description_4 === '') {
      $('#updatestatus').text('Chemical Description required');
      $('#updatestatus').fadeOut(9999);
      $('#description_4').focus();
    } else if (enable_4 === 1 && type_4 === '3' && days_4 === '') {
      $('#updatestatus').text('How often required');
      $('#updatestatus').fadeOut(9999);
      $('#days_4').focus();
    } else if (enable_4 === 1 && type_4 === '3' && amount_4 === '') {
      $('#updatestatus').text('Amount of Checimcal required');
      $('#updatestatus').fadeOut(9999);
      $('#amount_4').focus();
    } else if (enable_4 === 1 && type_4 === '3' && start_4 === '') {
      $('#updatestatus').text('Start Date required');
      $('#updatestatus').fadeOut(9999);
      $('#start_4').focus();
    } else {
      //Put all data in an array
      var array_pump = [];
      array_pump["1"] = [type = [type_1], ph = [ph_1], description = [description_1], days = [days_1], amount = [amount_1], start = [start_1], end = [end_1], enable = [enable_1]];
      array_pump["2"] = [type = [type_2], ph = [ph_2], description = [description_2], days = [days_2], amount = [amount_2], start = [start_2], end = [end_2], enable = [enable_2]];
      array_pump["3"] = [type = [type_3], ph = [ph_3], description = [description_3], days = [days_3], amount = [amount_3], start = [start_3], end = [end_3], enable = [enable_3]];
      array_pump["4"] = [type = [type_4], ph = [ph_4], description = [description_4], days = [days_4], amount = [amount_4], start = [start_4], end = [end_4], enable = [enable_4]];

      site.ajax({
        param: {
          format: 'SetPumps',
          pumps: array_pump
        },
        success: function(data) {
          console.log('success');
          $("#updatestatus").show()
          $("#updatestatus").text("Pumps updated")
          $("#updatestatus").fadeOut(1500)
        }
      });
    }
  });
});

function handle1Click(cb) {
	check1 = cb.checked;
}
function handle2Click(cb) {
	check2 = cb.checked;
}
function handle3Click(cb) {
	check3 = cb.checked;
}
function handle4Click(cb) {
	check4 = cb.checked;
}

function pump1() {
  var type = $('#type_1').find('option:selected').val();
  if (type === '0') {
    var html = '';
  } else if (type === '1' || type === '2') {
    var html = "<div><label class=\"fixedwidth\">PH Levels:</label></br><label class=\"fixedwidth\">Level:</label><input id=\"ph_1\" type=\"text\"></br></div>";
  } else if (type === '3') {
    var html = "<div><label>Other Chemicals:</label></br><label class=\"fixedwidth\">Description:</label><input id=\"description_1\" type=\"text\"></br><label class=\"fixedwidth\">How Often:</label><input id=\"days_1\" type=\"text\" placeholder=\"days\"></br><label class=\"fixedwidth\">Amount:</label><input id=\"amount_1\" type=\"text\" placeholder=\"oz\"></br><label class=\"fixedwidth\">Start Date:</label><input id=\"start_1\" type=\"text\"></br><label class=\"fixedwidth\">End Date:</label><input id=\"end_1\" type=\"text\"></br></div>";
  }
  $("#div_p_1").html(html);
  $('#start_1').datetimepicker({
    format:'Y-m-d',
    timepicker:false
  });
  $('#end_1').datetimepicker({
    format:'Y-m-d',
    timepicker:false
  });
}

function pump2() {
  var type = $('#type_2').find('option:selected').val();
  if (type === '0') {
    var html = '';
  } else if (type === '1' || type === '2') {
    var html = "<div><label class=\"fixedwidth\">PH Levels:</label></br><label class=\"fixedwidth\">Level:</label><input id=\"ph_2\" type=\"text\"></br></div>";
  } else if (type === '3') {
    var html = "<div><label>Other Chemicals:</label></br><label class=\"fixedwidth\">Description:</label><input id=\"description_2\" type=\"text\"></br><label class=\"fixedwidth\">How Often:</label><input id=\"days_2\" type=\"text\" placeholder=\"days\"></br><label class=\"fixedwidth\">Amount:</label><input id=\"amount_2\" type=\"text\" placeholder=\"oz\"></br><label class=\"fixedwidth\">Start Date:</label><input id=\"start_2\" type=\"text\"></br><label class=\"fixedwidth\">End Date:</label><input id=\"end_2\" type=\"text\"></br></div>";
  }
  $("#div_p_2").html(html);
  $('#start_2').datetimepicker({
    format:'Y-m-d',
    timepicker:false
  });
  $('#end_2').datetimepicker({
    format:'Y-m-d',
    timepicker:false
  });
}

function pump3() {
  var type = $('#type_3').find('option:selected').val();
  if (type === '0') {
    var html = '';
  } else if (type === '1' || type === '2') {
    var html = "<div><label class=\"fixedwidth\">PH Levels:</label></br><label class=\"fixedwidth\">Level:</label><input id=\"ph_3\" type=\"text\"></br></div>";
  } else if (type === '3') {
    var html = "<div><label>Other Chemicals:</label></br><label class=\"fixedwidth\">Description:</label><input id=\"description_3\" type=\"text\"></br><label class=\"fixedwidth\">How Often:</label><input id=\"days_3\" type=\"text\" placeholder=\"days\"></br><label class=\"fixedwidth\">Amount:</label><input id=\"amount_3\" type=\"text\" placeholder=\"oz\"></br><label class=\"fixedwidth\">Start Date:</label><input id=\"start_3\" type=\"text\"></br><label class=\"fixedwidth\">End Date:</label><input id=\"end_3\" type=\"text\"></br></div>";
  }
  $("#div_p_3").html(html);
  $('#start_3').datetimepicker({
    format:'Y-m-d',
    timepicker:false
  });
  $('#end_3').datetimepicker({
    format:'Y-m-d',
    timepicker:false
  });
}

function pump4() {
  var type = $('#type_4').find('option:selected').val();
  if (type === '0') {
    var html = '';
  } else if (type === '1' || type === '2') {
    var html = "<div><label class=\"fixedwidth\">PH Levels:</label></br><label class=\"fixedwidth\">Level:</label><input id=\"ph_4\" type=\"text\"></br></div>";
  } else if (type === '3') {
    var html = "<div><label>Other Chemicals:</label></br><label class=\"fixedwidth\">Description:</label><input id=\"description_4\" type=\"text\"></br><label class=\"fixedwidth\">How Often:</label><input id=\"days_4\" type=\"text\" placeholder=\"days\"></br><label class=\"fixedwidth\">Amount:</label><input id=\"amount_4\" type=\"text\" placeholder=\"oz\"></br><label class=\"fixedwidth\">Start Date:</label><input id=\"start_4\" type=\"text\"></br><label class=\"fixedwidth\">End Date:</label><input id=\"end_4\" type=\"text\"></br></div>";
  }
  $("#div_p_4").html(html);
  $('#start_4').datetimepicker({
    format:'Y-m-d',
    timepicker:false
  });
  $('#end_4').datetimepicker({
    format:'Y-m-d',
    timepicker:false
  });
}
