function randomRockScissorsPaper() {
    let value = Math.floor(Math.random() * 3);

    if (value == 0) {
        return "Rock";
    } else 
    if (value == 1) {
        return "Scissors";
    } else {
        return "Paper";
    }
}

function computerPlay() {
    return randomRockScissorsPaper();
}

