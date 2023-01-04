let item = document.getElementById('work');
function change() {
    item.style.opacity = '0.3';
}
function normal() {
    item.style.opacity = '';
}

item.onmouseover = change;
item.onmouseleave = normal;