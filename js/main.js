document.getElementById('searchbox').addEventListener('keyup', myFunction);

function myFunction () {
    var input, filter, ul, li, a, i, caption;
    input = document.getElementById('searchbox');
    filter= input.value.toLowerCase();
    ul = document.getElementById('lesPhotos');
    li = document.getElementsByTagName('li');

    for (let i = 0; i < li.length; i ++) {
        a = li[i].getElementsByTagName('a')[0];
        caption = a.getAttribute('data-title') || a.innerText;
        if (caption.toLowerCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}