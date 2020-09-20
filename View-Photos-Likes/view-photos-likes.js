var x = location.href;
var a = x.match(/profile/g);
var b = x.match(/photos/g);
if (b == "photos") {
    if (a == "profile") {
        location.href = x.replace(/&sk=photos_all/g, "") + "&sk=likes_all";
    } else {
        location.href = x.replace(/\/photos_all/g, "") + "/likes_all";
    }
} else {
    if (a == "profile") {
        location.href = x.replace(/&sk=likes_all/g, "") + "&sk=photos_all";
    } else {
        location.href = x.replace(/\/likes_all/g, "") + "/photos_all";
    }
}
