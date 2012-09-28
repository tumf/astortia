# day_status.js.coffee
# coffeescript version
is_night = (date) ->
    (Math.floor(((date.getTime()/60000)%(24*60)+9*60-54)/36)%2 == 1)

today_passed_sec = (date) -> ((date.getTime()/1000)%(24*60*60)+9*60*60)

next_day_status_time = (date) ->
    (Math.floor(36*60-(today_passed_sec(date) - 54*60)%(36*60)))

setInterval ->
    date = new Date
    if is_night date
        document.getElementById("day_status")?.innerHTML = "夜"
        document.getElementById("next_day_status")?.innerHTML = "昼"
    else
        document.getElementById("day_status")?.innerHTML = "昼"
        document.getElementById("next_day_status")?.innerHTML = "夜"

    n = next_day_status_time date
    if n > 60
        document.getElementById("next_day_status_time")?.innerHTML = "約#{Math.round(n/60)}分"
    else
        document.getElementById("next_day_status_time")?.innerHTML = "#{n}秒"
, 1000
