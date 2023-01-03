let items = document.getElementsByClassName('items');
function change() {
    items.style.backgroundColor = 'blue';
}
items.onmouseover = change;