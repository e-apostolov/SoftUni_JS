window.addEventListener("load", solve);

function solve() {
    const addButtonElement = document.getElementById('add-btn');
    const playerNameInputElement = document.getElementById('player');
    const scoreInputElement = document.getElementById('score');
    const roundInputElement = document.getElementById('round');

    const sureListElement = document.getElementById('sure-list');
    const scoreboardListElement = document.getElementById('scoreboard-list');
    const clearButtonElement = document.querySelector('.btn.clear')


    addButtonElement.addEventListener('click', () => {
      const playerName = playerNameInputElement.value;
      const score = scoreInputElement.value;
      const round = roundInputElement.value;

      const liElement = document.createElement('li');
      liElement.classList.add('dart-item');

      const articleElement = document.createElement('article');
      const namePElement = document.createElement('p')
      namePElement.textContent = playerName;
      const scorePElement = document.createElement('p')
      scorePElement.textContent = score;
      const roundPElement = document.createElement('p')
      roundPElement.textContent = round;

      const editButtonElement = document.createElement('button');
      editButtonElement.classList.add('btn', 'edit');
      editButtonElement.textContent = 'edit'

      const okButtonElement = document.createElement('button');
      okButtonElement.classList.add('btn', 'ok')
      okButtonElement.textContent = 'ok';

      articleElement.appendChild(namePElement);
      articleElement.appendChild(scorePElement);
      articleElement.appendChild(roundPElement);

      liElement.appendChild(articleElement);
      liElement.appendChild(editButtonElement);
      liElement.appendChild(okButtonElement);

      sureListElement.appendChild(liElement);

      addButtonElement.setAttribute('disabled', 'disabled');
      clearInput();

      editButtonElement.addEventListener('click', () => {
        playerNameInputElement.value = playerName;
        scoreInputElement.value = score;
        roundInputElement.value = round;

        liElement.remove();
        addButtonElement.removeAttribute('disabled');
      });

      okButtonElement.addEventListener('click', () => {
        editButtonElement.remove();
        okButtonElement.remove();
        scoreboardListElement.appendChild(liElement);
        addButtonElement.removeAttribute('disabled');
      })

      clearButtonElement.addEventListener('click', () => {
        location.reload();
      })

    })

    function clearInput() {
      playerNameInputElement.value = '';
      scoreInputElement.value = '';
      roundInputElement.value = '';
    }
  }
  