var requests = prompt("请输入需要发送的数", "");
var inputs = document.getElementsByClassName('_54k8 _52jg _56bs _26vk _40x9 _8yzt _56bu');
function getRandom(n, m) {
    var num = Math.floor(Math.random() * (m - n + 1) + n)
    return num
}
var ramdom_number = getRandom(10000, 15000)
for (var i = 0; i < requests; i++) {
    (function(i) {
        setTimeout(function() {
            inputs[i].click();
        }, ramdom_number * i);
    })(i);
}
