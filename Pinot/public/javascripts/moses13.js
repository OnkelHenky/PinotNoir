/**
 * Created by Alexander Henka on 16.09.14.
 * Copyright by Alexander Henka
 */

$( document ).ready(function() {

        $('a#schalter1').click(function(){
           console.log($(this).text());
            var mode = $(this).text();
            if(mode === 'OFF'){
                $.get( "/switch/11", function( data ) {});
                $(this).text('ON')
            }else{
                $.get( "/switch/10", function( data ) {});
                $(this).text('OFF')
            }
            $(this).toggleClass("down");

        });
        $('a#schalter2').click(function(){
            var mode = $(this).text();
            if(mode === 'OFF'){
                $.get( "/switch/21", function( data ) {});
                $(this).text('ON')
            }else{
                $.get( "/switch/20", function( data ) {});
                $(this).text('OFF')
            }
            $(this).toggleClass("down");
        });
        $('a#schalter3').click(function(){
            var mode = $(this).text();
            if(mode === 'OFF'){
                $.get( "/switch/31", function( data ) {});
                $(this).text('ON')
            }else{
                $.get( "/switch/30", function( data ) {});
                $(this).text('OFF')
            }
            $(this).toggleClass("down");
        });
});


    /*
    $.get( "http://192.168.0.102/cgi-bin/aktuelle_temperatur", function( data ) {
        $("#curTemp").html( data )

    });
  */



