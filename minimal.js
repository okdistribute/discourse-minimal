<script type="text/javascript">
    $(function () {
        if (window.location.pathname == '/') {
            $("a[href='/categories']").click();    
        }
        $('.notifications i').removeClass('fa-comment');
        $('.notifications i').addClass('fa-bell-o');
        $('.fa-group').addClass('fa-lock').removeClass('fa-group')
    });
    
</script>
