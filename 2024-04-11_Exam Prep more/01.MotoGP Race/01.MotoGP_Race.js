function solve(input) {
    const countRiders = Number(input.shift());

    const ridersList = {};

    for (let i = 0; i < countRiders; i++) {
        const [rider, fuel, position] = input.shift().split('|');

        ridersList[rider] = { fuel: Number(fuel), position: Number(position) }
    }

    let line = input.shift();

    while (line !== 'Finish') {
        
        const [command, currentRider, detail1, detail2] = line.split(' - ');

        switch (command) {
            case 'StopForFuel':
                let minimumFuel = Number(detail1);
                let changedPosition = Number(detail2);

                if (ridersList[currentRider].fuel < minimumFuel) {
                    ridersList[currentRider].position = changedPosition;
                    console.log(`${currentRider} stopped to refuel but lost his position, now he is ${changedPosition}.`)
                } else {
                    console.log(`${currentRider} does not need to stop for fuel!`)
                }
                break

            case 'Overtaking':
                let rider1 = currentRider;
                let rider2 = detail1;
                if (ridersList[rider1].position < ridersList[rider2].position) {
                    [ridersList[rider1].position, ridersList[rider2].position] = [ridersList[rider2].position, ridersList[rider1].position]
                    console.log(`${rider1} overtook ${rider2}!`)
                }
                break

            case 'EngineFail':
                let lapsLeft = Number(detail1);
                console.log(`${currentRider} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`)
                delete ridersList[currentRider];
                break
        }

        line = input.shift();
    }

    for (const [rider, details] of Object.entries(ridersList)) {
        console.log(`${rider}\n Final position: ${details.position}`)
    }
}


solve(["3",
"Valentino Rossi|100|1",
"Marc Marquez|90|2",
"Jorge Lorenzo|80|3",
"StopForFuel - Valentino Rossi - 50 - 1",
"Overtaking - Marc Marquez - Jorge Lorenzo",
"EngineFail - Marc Marquez - 10",
"Finish"])

solve(["4",
"Valentino Rossi|100|1",
"Marc Marquez|90|3",
"Jorge Lorenzo|80|4",
"Johann Zarco|80|2",
"StopForFuel - Johann Zarco - 90 - 5",
"Overtaking - Marc Marquez - Jorge Lorenzo",
"EngineFail - Marc Marquez - 10",
"Finish"])