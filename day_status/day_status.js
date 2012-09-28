// Generated by CoffeeScript 1.3.3
(function() {
  var is_night, next_day_status_time, today_passed_sec;

  is_night = function(date) {
    return Math.floor(((date.getTime() / 60000) % (24 * 60) + 9 * 60 - 54) / 36) % 2 === 1;
  };

  today_passed_sec = function(date) {
    return (date.getTime() / 1000) % (24 * 60 * 60) + 9 * 60 * 60;
  };

  next_day_status_time = function(date) {
    return Math.floor(36 * 60 - (today_passed_sec(date) - 54 * 60) % (36 * 60));
  };

  setInterval(function() {
    var date, n, _ref, _ref1, _ref2, _ref3, _ref4, _ref5;
    date = new Date;
    if (is_night(date)) {
      if ((_ref = document.getElementById("day_status")) != null) {
        _ref.innerHTML = "夜";
      }
      if ((_ref1 = document.getElementById("next_day_status")) != null) {
        _ref1.innerHTML = "昼";
      }
    } else {
      if ((_ref2 = document.getElementById("day_status")) != null) {
        _ref2.innerHTML = "昼";
      }
      if ((_ref3 = document.getElementById("next_day_status")) != null) {
        _ref3.innerHTML = "夜";
      }
    }
    n = next_day_status_time(date);
    if (n > 60) {
      return (_ref4 = document.getElementById("next_day_status_time")) != null ? _ref4.innerHTML = "約" + (Math.round(n / 60)) + "分" : void 0;
    } else {
      return (_ref5 = document.getElementById("next_day_status_time")) != null ? _ref5.innerHTML = "" + n + "秒" : void 0;
    }
  }, 1000);

}).call(this);