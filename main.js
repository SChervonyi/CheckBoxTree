$(document).ready(function () {
    $.getJSON("mock.json", function(mockArr) {

        (function build(array, selector){
            $(selector).append('<ul></ul>');
            for (let i = 0; i < array.length; i++) {
                if(!array[i]) { continue; }
        
                $(selector+'>ul').append('<li><input type="checkbox"><span>' + array[i].name + '</span></li>');
        
                if(array[i].children && array[i].children.length > 0) {
                    build(array[i].children, selector+'>ul>li:nth-child('+(i+1)+')');
                }
            }
        })(mockArr, "#root");

    });
});