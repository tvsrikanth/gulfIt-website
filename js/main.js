$(function() {
    $.get('pages/header-nav.html', function(data) {
        console.log('data'+data);
        $('#navigation').html(data);
    }); 
});

