function login(input) {
    let index = 0;
    let username = input[index];
    index++;
    let currentpass = input[index];
    let attemptOfLogin = 0;

    let pass = "";
    for (let i = username.length - 1; i >= 0; i--) {
        pass += username[i];
    }


    while (currentpass != pass) {

        if (attemptOfLogin >= 3) {
            console.log(`User ${username} blocked!`);
            break;
        }
        
        console.log(`Incorrect password. Try again.`);

        index++;
        currentpass = input[index];
        attemptOfLogin++;
    }

    if (currentpass == pass) {
        console.log(`User ${username} logged in.`);
    }

}
login(['momo', 'omom'])