function reverseString() {
    const input = document.getElementById('userInput').value;
    let reversed = '';

    
    for (let i = input.length - 1; i >= 0; i--) {
        reversed += input[i];
    }

    document.getElementById('result').textContent = `Reversed String: ${reversed}`;
}


  