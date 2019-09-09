// $('.textbox').click(function () {
// const $search = $('input[name=search]');
// $search.focus();
// console.log($search.val().toLowerCase());
// });

// for (let i = 0; i <= 11; i += 1) {
//     var caption = document.getElementsByTagName('a')[i].getAttribute('data-title').toLowerCase();
//     console.log(caption);
// }


// var result = caption.includes('hay', [0]);
// console.log(result);


function myFunction () {
    var input, filter, ul, li, a, i, caption;
    input = document.getElementById('searchbox');
    filter= input.value.toLowerCase();
    ul = document.getElementById('lesPhotos');
    li = document.getElementsByTagName('li');

    for (let i = 0; i < li.length; i ++) {
        a = li[i].getElementsByTagName('a')[0];
        caption = a.textContent || a.innerText;
        if (document.getAttribute('data-title').indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}