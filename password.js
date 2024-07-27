let symbols = "!@#$%^&*()_+-=?/>.<,\"':;][}{\\|~`";
let actualPassword = prompt("Enter password");
let candidatePassword = ["0", "0", "0"];
let count = 0;

for (let i = 0; i < symbols.length; i++) {
    for (let j = 0; j < actualPassword.length; j++) {
        if (symbols[i] === actualPassword[j]) {
            candidatePassword[j] = symbols[i]
    }
}
    count ++
    if(!candidatePassword.includes("0")){
        break
    }
}
candidatePassword = candidatePassword.join()
console.log(`Password found: ${candidatePassword}`)
console.log(`Attempts: ${count}`)

