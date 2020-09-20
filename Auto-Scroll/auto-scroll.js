if (enbledscroll == '1') {
    var enbledscroll = '0';
    clearInterval(autoscroll);
} else {
    var enbledscroll = '1';
    var autoscroll = setInterval(function() {
        window.scrollTo(0, document.body.scrollHeight)
    }, 1500);
}
