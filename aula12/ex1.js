//  return

let change = true;
const RED = 'red';
const WHITE = 'white';

const select = (color) => document
    .body
    .style
    .backgroundColor = color;

function color() {
    if (change) {
        select(RED);
        change = false;
    } else {
        select(WHITE);
        change = true;
    }
}

document.addEventListener('click', () => color());