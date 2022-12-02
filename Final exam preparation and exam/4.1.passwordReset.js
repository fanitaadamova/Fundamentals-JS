function passwordReset(input) {

    let array = input.slice();
    let password = array.shift();

    let lineWithCommands = array.shift();

    while (lineWithCommands !== 'Done') {

        let commandArr = lineWithCommands.split(' ');
        let command = commandArr.shift();

        switch (command) {
            case 'TakeOdd':
                let initialPassword = password.split('');
                let currentPassword = '';

                for (let i = 0; i < initialPassword.length; i++) {

                    if (i % 2 !== 0) {
                        currentPassword += initialPassword[i];
                    }
                }
                password = currentPassword;
                console.log(password);
                break;

            case 'Cut':
                let startIndex = Number(commandArr.shift());
                let length = Number(commandArr.shift());
                let endIndex = startIndex + length;

                let cut = password.substring(startIndex, endIndex);
                let passwordCuted = password.replace(cut, '');
                password = passwordCuted;

                console.log(password);
                break;

            case 'Substitute':
                let substring = commandArr.shift();
                let substitute = commandArr.shift();

                if (password.includes(substring)) {

                    while (password.includes(substring)) {
                        let passwordReplaceted = password.replace(substring, substitute);
                        password = passwordReplaceted;
                    }
                    console.log(password);
                } else {
                    console.log(`Nothing to replace!`);
                }
                break;
        }
        lineWithCommands = array.shift();
    }

    console.log(`Your password is: ${password}`);

}
passwordReset((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])
)