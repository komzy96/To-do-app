(function(){
    let input = document.getElementById('input');
    let btn = document.getElementById('btn');
    let lists = {
       todo: document.getElementById('todo'),
       done: document.getElementById('done') 
    };
    //
    ///param{string} str
    ////param $function onCheck
    ///Returns {htmlElement}
    let makeTaskHtml = function(str, onCheck) {
        let el = document.createElement('li');
        let checkbox = document.createElement('input');
        let label = document.createElement('span');

        checkbox.type ='checkbox';
        checkbox.addEventListener('click', onCheck);
        label.textContent = str;

        el.appendChild(checkbox);
        el.appendChild(label);

        return el;
    };
    let addTask = function(task) {
        lists.todo.appendChild(task);
    };
    let onCheck = function(event) {
        let task = event.target.parentElement;
        let list = task.parentElement.id;
        

       lists[list === 'done' ? 'todo' : 'done'].appendChild(task);
       this.checked = false;
       input.focus();

    };
    let onInput = function(){
        let str = input.value.trim();

        if(str.length > 0) {
            addTask(makeTaskHtml(str, onCheck));
            input.value ='';
            input.focus();

            
        }
    };

    btn.addEventListener('click', onInput);
    input.addEventListener('keyup', function(event){
        var code = event.keyCode;
        if(code ===13){
            onInput();
        }
    });
    input.focus();
}());