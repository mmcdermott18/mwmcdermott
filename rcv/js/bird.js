$(document).ready(function () {
    $('.allShow').click(function () {
        $('.hawk').removeClass('notactive');
        $('.owl').removeClass('notactive');
        $('.falcon').removeClass('notactive');
        $('.hawkadopt').removeClass('notactive');
        $('.falconadopt').removeClass('notactive');
        $('.owladopt').removeClass('notactive');
    });
    $('.hawkShow').click(function () {
        $('.hawk').removeClass('notactive');
        $('.owl').addClass('notactive');
        $('.falcon').addClass('notactive');
        $('.hawkadopt').removeClass('notactive');
        $('.falconadopt').addClass('notactive');
        $('.owladopt').addClass('notactive');
    });
    $('.owlShow').click(function () {
        $('.hawk').addClass('notactive');
        $('.owl').removeClass('notactive');
        $('.falcon').addClass('notactive');
        $('.hawkadopt').addClass('notactive');
        $('.falconadopt').addClass('notactive');
        $('.owladopt').removeClass('notactive');
    });
    $('.falconShow').click(function () {
        $('.hawk').addClass('notactive');
        $('.owl').addClass('notactive');
        $('.falcon').removeClass('notactive');
        $('.hawkadopt').addClass('notactive');
        $('.falconadopt').removeClass('notactive');
        $('.owladopt').addClass('notactive');
    });
    $('.adoptShow').click(function () {
        $('.hawk').addClass('notactive');
        $('.owl').addClass('notactive');
        $('.falcon').addClass('notactive');
        $('.hawkadopt').removeClass('notactive');
        $('.falconadopt').removeClass('notactive');
        $('.owladopt').removeClass('notactive');
    });
});
$(document).ready(function () {
    var parent = $("#birdgrid");
    var divs = parent.children();
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
});
$('#birdnav .randombutton').click(function () {
    var parent = $("#birdgrid");
    var divs = parent.children();
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
});