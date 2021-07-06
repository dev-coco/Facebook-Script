if (enabled == '1') {
    var enabled = 0;
    clearInterval(show_members);
} else {
    var enabled = 1;
    var show_members = setInterval(function() {
        var inputs = document.getElementsByClassName('pam uiBoxLightblue uiMorePagerPrimary')[0].click();
    }, 2000);
}
