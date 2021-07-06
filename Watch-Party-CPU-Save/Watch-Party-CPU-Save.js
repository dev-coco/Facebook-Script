var iframeDocument = document.getElementsByTagName("iframe")[0].contentDocument;
var video_iframe = iframeDocument.getElementsByClassName("_1gm- _114e")[0];
try {
    var status = video_iframe.style.display;
} catch {
    video_iframe.style.display = "none";
}
if (status == "none") {
    video_iframe.style.display = "block";
} else {
    video_iframe.style.display = "none";
}
