// Generated by CoffeeScript 1.6.3

"use strict";
$( document ).ready(function() {

  hideInfo = function(){
    // alert("Hi");
    $('#info').toggleClass('unhide');
  };


  $(".create_team").click(function() {
     $(".team_form").css("display", "inline");
     $(".hide_team").css("display", "inline");
     $(".create_team").css("display", "none");
    }
  );

  $(".hide_team").click(function() {
    $(".team_form").css("display", "none");
    $(".hide_team").css("display", "none");
    $(".create_team").css("display", "inline");
  });

    $(".create_game").click(function() {
     $(".game_form").css("display", "inline");
     $(".hide_game").css("display", "inline");
     $(".new_game").css("display", "none");
     $(".info").css("display", "none");
    }
  );

  $(".hide_game").click(function() {
    $(".game_form").css("display", "none");
    $(".hide_game").css("display", "none");
    $(".new_game").css("display", "inline");
    $(".info").css("display", "inline");
  });

});
