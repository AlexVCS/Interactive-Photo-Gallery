$('.textbox').click(function () {
const $search = $('input[name=search]');
$search.focus();
console.log($search.val().toLowerCase());
});


for (let i = 0; i <= 11; i += 1) {
    var caption = document.getElementsByTagName('a')[i].getAttribute('data-title').toLowerCase();
    console.log(caption);
}

var result = caption.includes('hay', [0]);
console.log(result);