    $(document).ready(function(){
        $('#content').load('home.html');

        $('nav a').click(function(e){
            e.preventDefault();
            var pageUrl = $(this).attr('href');
            $('#content').fadeOut('fast', function(){
                $('#content').load(pageUrl, function(){
                    $('#content').fadeIn('fast');
                });
            });
        });
    });

