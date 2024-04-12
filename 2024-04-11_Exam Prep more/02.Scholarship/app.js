window.addEventListener("load", solve);

function solve() {

    const previewListElement = document.getElementById('preview-list');
    const candidatesListElement = document.getElementById('candidates-list');
    const nextButtonElement = document.getElementById('next-btn')
    const studentNameInputElement = document.getElementById('student');
    const universityInputElement = document.getElementById('university');
    const scoreInputElement = document.getElementById('score');
  

    nextButtonElement.addEventListener('click', () => {

      const studentName = studentNameInputElement.value;
      const university = universityInputElement.value;
      const score = scoreInputElement.value;

      if(studentName == '' || university == '' || score == '') {
        return
      }

      const liElement = document.createElement('li');
      liElement.classList.add('application');

      const articleElement = document.createElement('article');
      
      const nameH4Element = document.createElement('h4')
      nameH4Element.textContent = studentName;

      const universityPElement = document.createElement('p');
      universityPElement.textContent = `University: ${university}`;

      const scorePElement = document.createElement('p');
      scorePElement.textContent = `Score: ${score}`;

      const editButtonElement = document.createElement('button');
      editButtonElement.classList.add('action-btn', 'edit')
      editButtonElement.textContent = 'edit';

      editButtonElement.addEventListener('click', () => {
        studentNameInputElement.value = studentName;
        universityInputElement.value = university;
        scoreInputElement.value = score;

        liElement.remove();

        nextButtonElement.removeAttribute('disabled');
      })

      const applyButtonElement = document.createElement('button');
      applyButtonElement.classList.add('action-btn', 'apply');
      applyButtonElement.textContent = 'apply';


      applyButtonElement.addEventListener('click', () => {
        editButtonElement.remove();
        applyButtonElement.remove();

        candidatesListElement.appendChild(liElement);
        nextButtonElement.removeAttribute('disabled');
      })

      articleElement.appendChild(nameH4Element);
      articleElement.appendChild(universityPElement);
      articleElement.appendChild(scorePElement);

      liElement.appendChild(articleElement);
      liElement.appendChild(editButtonElement);
      liElement.appendChild(applyButtonElement);

      previewListElement.appendChild(liElement);

      clearInput();


    })
  
  function clearInput() {
    studentNameInputElement.value = '';
    universityInputElement.value = '';
    scoreInputElement.value = '';
  }
    
}
  