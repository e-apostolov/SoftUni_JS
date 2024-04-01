function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      
      const inputElement = document.querySelector('#inputs textarea');

      const restaurantsList = JSON.parse(inputElement.value);
      const restaurants = []

      for (const el of restaurantsList) {
         let [restaurantName, workersString] = el.split(' - ');
         let workersCollection = [];
         const workersList = workersString.split(', ');
         for (const worker of workersList) {
            let [workerName, workerSalary] = worker.split(' ');
            workersCollection.push({'name': workerName, 'salary': Number(workerSalary)})
         }
         if (restaurants.some(restaurant => restaurant.name === restaurantName)) {
            let currentRestaurant = restaurants.find(restaurant => restaurant.name === restaurantName);
            for (const worker of workersCollection) {
               currentRestaurant.workers.push(worker)
            }
         } else {
            restaurants.push({'name': restaurantName, 'workers': workersCollection})
         }
      }

      let bestRestaurantName = '';
      let bestAverageSalary = Number.MIN_SAFE_INTEGER;
      let bestWorkerSalary = 0;
      let bestWorkerList = [];

      for (const restaurant of restaurants) {

         let currentSalarySum = 0;
         let currentBestSalary = Number.MIN_SAFE_INTEGER;

         for (const worker of restaurant.workers) {
            currentSalarySum += worker.salary;
            if (worker.salary >= currentBestSalary) {
               currentBestSalary = worker.salary;
            }
         }

         let currentAverageSalary = currentSalarySum / restaurant.workers.length;
         if (currentAverageSalary >= bestAverageSalary) {
            bestRestaurantName = restaurant.name;
            bestAverageSalary = currentAverageSalary;
            bestWorkerSalary = currentBestSalary;
            bestWorkerList = restaurant.workers.sort((a, b) => b.salary - a.salary)
         }
         
      }
      let bestWorkersOutput = []
      for (const worker of bestWorkerList) {
         bestWorkersOutput.push(`Name: ${worker.name} With Salary: ${worker.salary}`)
      }
      document.querySelector('#bestRestaurant p').textContent = `Name: ${bestRestaurantName} Average Salary: ${bestAverageSalary.toFixed(2)} Best Salary: ${bestWorkerSalary.toFixed(2)}`
      document.querySelector('#workers p').textContent = bestWorkersOutput.join(' ')
      }
}
