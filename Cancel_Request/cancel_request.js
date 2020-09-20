var inputs = document.getElementsByClassName('_54k8 _52jg _56bs _26vk _2b4n _8yzq _3cqr _8yo0 _56bt');
for (var i = inputs.length - 1; i >= inputs.length - 10; i--) {
    inputs[i].click();
    setTimeout(function() {
        location.reload();
    }, 2700);
}
