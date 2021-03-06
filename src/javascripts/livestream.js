/**
 * livestream.js - LiveStream javascript file for Stud.IP
 * @author    Farbod Zamani Boroujeni <zamani@elan-ev.de>
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License as
 * published by the Free Software Foundation; either version 2 of
 * the License, or (at your option) any later version.
 */

$(function(){
    if ($('h5.livestream-countdown').is(':visible')) {
        var livestream_countdown = setInterval(function() {
            var end_timestamp = $('h5.livestream-countdown').data('end') * 1000;
            $('h5.livestream-countdown').text(getCountdown(end_timestamp));
        }, 1000);
    }

    if ($('.upcoming-countdown').is(':visible')) {
        var upcomming_countdown = setInterval(function() {
            var start_timestamp = $('.upcoming-countdown').data('start') * 1000;
            $('.upcoming-countdown').text(getCountdown(start_timestamp));
        }, 1000);
    }

    if ($('.live-countdown').is(':visible')) {
        var live_countdown = setInterval(function() {
            var end_timestamp = $('.live-countdown').data('end') * 1000;
            $('.live-countdown').text(getCountdown(end_timestamp));
        }, 1000);
    }

    if ($('.livestream-mode-selection .selectable').is(':visible')) {
        $('.livestream-mode-selection .selectable').on('click', function(e) {
            e.preventDefault();
            var mode = $(this).data('mode');
            var input = $('input[type="hidden"][name="livestream-mode"]');
            if (input && mode) {
                input.val(mode);
                input.parent().submit();
            }
        });
    }
});

function getCountdown(end_timestamp) {
    var now = new Date().getTime();
    var distance = end_timestamp - now;
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    days = (days <= 0) ? 0 : days;
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    hours = (hours <= 0) ? 0 : hours;
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    minutes = (minutes <= 0) ? 0 : minutes;
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    seconds = (seconds <= 0) ? 0 : seconds;

    var countdown = [];
    if (days > 0) {
        days = (days < 10) ? '0' + days : days;
        countdown.push(days);
    }
    hours = (hours < 10) ? '0' + hours : hours;
    countdown.push(hours);
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    countdown.push(minutes);
    seconds = (seconds < 10) ? '0' + seconds : seconds;
    countdown.push(seconds);

    return countdown.join(':');
}

