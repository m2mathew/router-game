(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {

    var Router = Backbone.Router.extend({
        routes: {
            'play': 'goPlay',
            'leaders': 'getLeaders',
            'settings': 'goToSettings'
        },
        goPlay: function goPlay() {
            $('section').hide();
            $('nav').show();
            $('#game-screen').show();
        },
        getLeaders: function getLeaders() {
            $('section').hide();
            $('nav').show();
            $('#leaderboard-screen').show();
        },
        goToSettings: function goToSettings() {
            $('section').hide();
            $('nav').show();
            $('#settings-screen').show();
        }
    });

    var r = new Router();
    Backbone.history.start();

    $('section').hide();
    $('nav').hide();
    $('#loading-screen').show();

    $('#loading-box').animate({ width: '100%', opacity: '0.5' }, 4000, 'linear', function () {
        console.log('Hello, brother.');
    });

    showLoadingDots();

    setTimeout(function () {
        $('#loading-screen').hide();
        $('nav').show();
    }, 4000);
});

var showLoadingDots = function showLoadingDots() {
    var showDots = setInterval(function () {
        if ($('#loading-text').length > 0) {
            var dots = '...',
                i = 1;
            if ($('#loading-text').html().length === 0 || $('#loading-text').html().length === dots.length) {
                $('#loading-text').html('');
                var i = 1;
            } else {
                i++;
            }
            $('#loading-text').html($('#loading-text').html() + '.');
        } else {
            clearInterval(showDots);
        }
    }, 400);
};

},{}]},{},[1])

//# sourceMappingURL=bundle.js.map
