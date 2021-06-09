const fills = document.querySelectorAll('.fill');
const empties = document.querySelectorAll('.empty');

 let shuffleElement;
 let shuffleParentElement;

    // Fill listeners
    for (const fill of fills) {
        fill.addEventListener('dragstart', dragStart);
        fill.addEventListener('dragend', dragEnd);
    }
    // Loop through empty boxes and add listeners
    for (const empty of empties) {
        empty.addEventListener('dragover', dragOver);
        empty.addEventListener('dragenter', dragEnter);
        empty.addEventListener('dragleave', dragLeave);
        empty.addEventListener('drop', dragDrop);
    }

    // Drag Functions
    function dragStart(e) {
        this.className += ' hold';
        setTimeout(() => (this.className = 'invisible'), 0);
        shuffleElement = e.currentTarget;
        shuffleParentElement = e.currentTarget.parentElement;
    }

    function dragEnd() {
        this.className = 'fill';
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function dragEnter(e) {
        e.preventDefault();
        this.className += ' hovered';
    }

    function dragLeave() {
        this.className = 'empty';
    }

     function dragDrop() {
        this.className = 'empty';
        const shuffleWithElement = this.querySelector('.fill');
    
        this.innerHTML = '';
        this.append(shuffleElement);
    
        if(shuffleWithElement) {
          shuffleParentElement.innerHTML = '';
          shuffleParentElement.append(shuffleWithElement);
        }
    }

    // Counter

    // my Variables 

    
    const possibleValues = [0,1,2,3,4];


    // regex input validation

    function numberIsValid(value) {
        return /^[0-4]$/.test(value);
    }

    // Event write on gameCounter
 const inputA = document.getElementsByClassName("gameCounterA");

  inputA.addEventListener('change',(e)=>{
      console.log(e.target.value)
  })






    