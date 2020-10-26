var inputs = document.querySelectorAll('[class*="_71u9"][class*="_4jy0"][class*="_4jy3"][class*="_517h"][class*="_51sy"][class*="_42ft"]');
    function getRandom (n, m) {
    var num = Math.floor(Math.random() * (m - n + 1) + n)
    return num
}
var ramdom_number = getRandom(10000, 20000)
for (var i=0;i<inputs.length;i++){
        (function(i) {
        setTimeout(function() {
        inputs[i].click();
        }, ramdom_number * i);
    })(i);
}
