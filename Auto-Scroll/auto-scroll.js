function getRandom(n, m) {
    var num = Math.floor(Math.random() * (m - n + 1) + n)
    return num
}
var ramdom_number = getRandom(5, 15);
if (enbledscroll == '1') {
    var enbledscroll = 0;
    clearInterval(autoscroll);
} else {
    var enbledscroll = 1;
    var position = document.body.scrollHeight;
    var autoscroll = setInterval(function() {
        position += ramdom_number;
        scroll(0, position);
    }, ramdom_number);
}
