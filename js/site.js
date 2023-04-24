// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


$(document).ready(function () {
    $('.menu-hover').hover(function () {
        $('.menu-hover').stop().fadeTo('fast', 0.3);
        $(this).stop().fadeTo('fast', 1);
    }, function () {
        $('.menu-hover').stop().fadeTo('fast', 1);
    });
});