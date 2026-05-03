export function move (coord: number) {
    if (coord === 0) {
        return 'You stand in front of a forest';
    }
    else if (coord === 1 ) {
        return 'You are walking through the forest edge';
    }
    else if (coord === 2 ) {
        return 'You stand before a small lake';
    }
    else {
        return 'you zabludilsya';
    }
}