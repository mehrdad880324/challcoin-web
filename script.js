function rollDice() {
    const dice = Math.floor(Math.random() * 6) + 1;
    document.getElementById("result").innerText = `نتیجه: ${dice}`;
}