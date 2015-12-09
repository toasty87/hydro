/****************************************************************************
* functions.js
* v1.1.1
*
*  Controls the javascript to default functions used on most pages.
*
****************************************************************************/

var site = {
  maxpoints: 18000,
  refreshtime: 5 * 60 * 1000, // 5 minutes (in milliseconds)

  ajax: function (options) {
    var defaults = {
      param: false,
      url: '/hydro/libs/ajax.php?',
      type: 'GET',
      dataType: 'json'
    };
    $.extend(defaults, options);
    if (defaults.param) {
      defaults.url += $.param(defaults.param);
    }
    $.ajax(defaults);
  }
};

function Functions () {
  this.setPropAndTriggerChange = setPropAndTriggerChange;
}

function setPropAndTriggerChange (target, property, value) {
  $('#' + target).prop(property, value);
  $('#' + target).trigger('change');
}

Date.prototype.today = function () {
  return ((this.getDate() < 10) ? '0' : '') + this.getDate() + '/' + (((this
      .getMonth() + 1) < 10) ? '0' : '') + (this.getMonth() + 1) + '/' +
    this.getFullYear();
};

Date.prototype.timeNow = function (showSeconds) {
  showSeconds = typeof showSeconds !== 'undefined' ? showSeconds : true;
  return ((this.getHours() < 10) ? '0' : '') + this.getHours() + ':' + ((
    this.getMinutes() < 10) ? '0' : '') + this.getMinutes() + (showSeconds ?
    ':' + ((this.getSeconds() < 10) ? '0' : '') + this.getSeconds() : '');
};
