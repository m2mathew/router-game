'use strict';

$(document).ready(function(){

    var Router = Backbone.Router.extend({
        routes: {
            'play': 'goPlay',
            'leaders': 'getLeaders',
            'settings': 'goToSettings'
        },
        goPlay: function() {
            $('section').hide();
            $('nav').show();
            $('#game-screen').show();
        },
        getLeaders: function() {
            $('section').hide();
            $('nav').show();
            $('#leaderboard-screen').show();
        },
        goToSettings: function() {
            $('section').hide();
            $('nav').show();
            $('#settings-screen').show();
        },
    });

    var r = new Router();
    Backbone.history.start();

    $('section').hide();
    $('nav').hide();
    $('#loading-screen').show();

    $('#loading-box').animate(
        { width: '100%', opacity: '0.5' },
        4000, 'linear', function() {
            console.log('Hello, brother.');
        });

    showLoadingDots();

    setTimeout(function() {
        $('#loading-screen').hide();
        $('nav').show();
    }, 4000);

});

var showLoadingDots = function() {
    var showDots = setInterval(function(){
        if ($('#loading-text').length > 0) {
            var dots = '...', i=1;
        if ($('#loading-text').html().length === 0 || ($('#loading-text').html().length === dots.length)){
            $('#loading-text').html('');
            var i = 1;
        }
        else {
            i++;
        }
        $('#loading-text').html($('#loading-text').html() + '.');
        }
        else {
           clearInterval(showDots);
        }
    }, 400);
}

