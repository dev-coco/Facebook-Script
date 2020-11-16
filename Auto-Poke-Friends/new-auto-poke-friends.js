var inputs = document.getElementsByClassName('d2edcug0 hpfvmrgz qv66sw1b c1et5uql oi732d6d ik7dh3pa fgxwclzu a8c37x1j keod5gw0 nxhoafnm aigsh9s9 d9wwppkn fe6kdd0r mau55g9w c8b282yb iv3no6db jq4qci2q a3bd9o3v lrazzd5p bwm1u5wc');
    function getRandom (n, m) {
    var num = Math.floor(Math.random() * (m - n + 1) + n)
    return num
}
var ramdom_number = getRandom(1000, 5000)
for (var i=0;i<inputs.length;i++){
        (function(i) {
        setTimeout(function() {
        inputs[i].click();
        }, ramdom_number * i);
    })(i);
}
