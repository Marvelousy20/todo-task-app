function addTask() {
    let input = document.querySelector("input");
    let button = document.createElement('button') ;
    let ul = document.querySelector('ul')
    let li = document.createElement('li') ;
    button.className = "but btn";
    ul.className = 'ul'
    li.id = 'listItem'


    button.innerHTML ;

    if(input.value.length === 0) {
        alert("Oh gosh! Please type something!")
    }

    else {
        button.innerHTML = 'Remove'
        button.style.display = "block"
        li.innerHTML = input.value;  
        ul.appendChild(li) ; 
        li.appendChild(button)  ; 
    
        input.value = "";

        li.addEventListener('click', markDone)
        function markDone() {
            li.style.backgroundColor = '#51DF70'
            li.style.transition = '.5s ease-in'
            li.style.color = '#00891E'
        }

        button.addEventListener('click', removeTask)
        function removeTask() {
            if(confirm('remove task?') === true) {
                li.style.transition = '.5s ease-out'
                li.style.display = 'none'
            }
            else {
                li.classList = 'tired'
            }
        }
    }
}


function enterKey() {
    let x = event.which || event.keyCode;
    if(x === 13) {
        addTask()
    }
 }


// const tl = new TimelineMax() ;

// tl.toFrom()



 