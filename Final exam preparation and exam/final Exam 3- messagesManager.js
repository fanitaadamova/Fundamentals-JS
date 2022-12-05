function messagesManager(input) {

    let array = input.slice()
    let capasitySendAndRecive = Number(array.shift())

    let messageMan = {};
    let commands = array.shift();

    while (commands !== 'Statistics') {

        let commandArr = commands.split('=');
        let command = commandArr.shift();

        switch (command) {
            case 'Add':
                let username = commandArr[0];
                let sent = Number(commandArr[1]);
                let recived = Number(commandArr[2]);

                if (!messageMan.hasOwnProperty(username)) {
                    messageMan[username] = [sent, recived];
                }
                break;

            case 'Message':
                let sender = commandArr[0];
                let reciver = commandArr[1];

                if (messageMan.hasOwnProperty(sender) && messageMan.hasOwnProperty(reciver)) {

                    let [senderSent, senderRecived] = messageMan[sender];
                    senderSent = Number(senderSent);
                    senderRecived = Number(senderRecived);
                    senderSent++;
                    let allmessageSender = senderSent + senderRecived;

                    if (allmessageSender >= capasitySendAndRecive) {
                        console.log(`${sender} reached the capacity!`);

                        delete messageMan[sender];

                    } else {
                        messageMan[sender] = [senderSent, senderRecived]
                    }

                    let [reciverSent, reciverRecived] = messageMan[reciver];
                    reciverSent = Number(reciverSent);
                    reciverRecived = Number(reciverRecived)
                    reciverRecived++;
                    let allmessageReciver = reciverRecived + reciverSent;

                    if (allmessageReciver >= capasitySendAndRecive) {
                        console.log(`${reciver} reached the capacity!`);
                        delete messageMan[reciver];
                    } else {
                        messageMan[reciver] = [reciverSent, reciverRecived]
                    }

                }
                break;

            case 'Empty':
                let userName = commandArr[0];

                if (userName === 'All') {
                    messageMan = {};
                }

                if (messageMan.hasOwnProperty(userName)) {
                    messageMan[userName] = [0, 0]
                }
                break;
        }
        commands = array.shift();
    }

    let countOfUser = 0;
    for (const key in messageMan) {
        countOfUser++;
    }
    console.log(`Users count: ${countOfUser}`);

    for (const username in messageMan) {
        let [sent, recived] = messageMan[username]
        sent = Number(sent)
        recived = Number(recived)
        let allMessage = sent + recived

        console.log(`${username} - ${allMessage}`);
    }

}
messagesManager(["10",
    "Add=Berg=9=0",
    "Add=Kevin=0=0",
    "Message=Berg=Kevin",
    "Add=Mark=5=4",
    "Statistics"])
