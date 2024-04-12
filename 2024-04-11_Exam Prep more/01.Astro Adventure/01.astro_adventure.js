function solve(input) {
    const countAstronauts = Number(input.shift());
    const astronautsList = {};

    for (let i = 0; i < countAstronauts; i++) {
        currentLine = input.shift();
        const [name, oxygen, energy] = currentLine.split(' '); 

        astronautsList[name] = { 
            oxygen: Number(oxygen), 
            energy: Number(energy), }
    }

    let line = input.shift();

    while(line !== 'End') {
        let [command, astronautName, detail] = line.split(' - ')

        switch (command) {
            case 'Explore':
                if (astronautsList[astronautName].energy < Number(detail)) {
                    console.log(`${astronautName} does not have enough energy to explore!`)
                } else {
                    astronautsList[astronautName].energy -= Number(detail);
                    console.log(`${astronautName} has successfully explored a new area and now has ${astronautsList[astronautName].energy} energy!`)
                }
                break;
            case 'Refuel':
                let energyRecovered;
                if (astronautsList[astronautName].energy + Number(detail) > 200) {
                    energyRecovered = (200 - astronautsList[astronautName].energy)
                    astronautsList[astronautName].energy = 200;
                } else {
                    astronautsList[astronautName].energy += Number(detail);
                    energyRecovered = detail;
                }
                console.log(`${astronautName} refueled their energy by ${energyRecovered}!`)
                break;
            case 'Breathe':
                let oxigenRecovered;
                if (astronautsList[astronautName].oxygen + Number(detail) > 100) {
                    oxigenRecovered = (100 - astronautsList[astronautName].oxygen)
                    astronautsList[astronautName].oxygen = 100;
                } else {
                    astronautsList[astronautName].oxygen += Number(detail);
                    oxigenRecovered = detail;
                }
                console.log(`${astronautName} took a breath and recovered ${oxigenRecovered} oxygen!`)
                break;
        }
        line = input.shift()
    }
    for (const astronaut in astronautsList) {
        console.log(`Astronaut: ${astronaut}, Oxygen: ${astronautsList[astronaut].oxygen}, Energy: ${astronautsList[astronaut].energy}`)            
        }
}


solve([  '3',
  'John 50 120',
  'Kate 80 180',
  'Rob 70 150',
  'Explore - John - 50',
  'Refuel - Kate - 30',
  'Breathe - Rob - 20',
  'End'])