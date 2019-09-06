$('.textbox').click(function () {
const $search = $('input[name=search]');
$search.focus();
console.log($search.val().toLowerCase());
});