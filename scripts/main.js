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

    setTimeout(function() {
        $('#loading-screen').hide();
        $('nav').show();
    }, 4000);

});
