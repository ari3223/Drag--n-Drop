class Text {
    //this method adds new user_text to the list
    addTx_list(e){
        e.preventDefault();
        //make new list and make it draggable also add usertext in the list
        let new_li = document.createElement('li');
        let usertext = e.target.parentElement.nextElementSibling;
        new_li.draggable = true;
        new_li.classList.add('li')
        new_li.setAttribute('ondragstart','drag_start(event)');
        new_li.setAttribute('ondragend','drag_end(event)');
        new_li.innerHTML = usertext.value;
        //make textarea empty for next text
        usertext.value = '';
        //add, made up list to the ul(list holder)
        e.target.parentElement.parentElement.previousElementSibling.appendChild(new_li);
        //make ready the shape of the form for new add(so that user can add again)
        text.text_area_off();  
    }
    //make ready the shape of the form for new add(so that user can add again)
    text_area_off() {
        //make disapear X, save and textarea  
        determin_adbtn.previousElementSibling.style.display = 'none';
        determin_adbtn.hidden = false;
        //appear and able All the add buttons
        add_btn.forEach(el => {
                el.disabled = false;
        })
    }
    //make appear area that user can write new Text
    text_area_on(e, index){
        //save the clicked(selected) add btn
        determin_adbtn = e.target
        //appear area and disppear selected add btn
        e.target.previousElementSibling.style.display = 'flex';
        e.target.hidden = true;
        //disable other add btns for prevent other writing befor this one finished
        add_btn.forEach((ele, indx) => {
            if (indx !== index) {
                ele.disabled = true;
            }
        })
    }
    //add draged List(make list like draged list) to its new containar(where user wonna droped)
    insert_dragTx(e){
        //create a list and make it draggable
        let li = document.createElement('li');
        li.draggable = true;
        //set drag eventListeners that li need
        li.setAttribute('ondragstart','drag_start(event)');
        li.setAttribute('ondragend','drag_end(event)');
        //add the value of draged list to the new maked List and give it style
        li.textContent = dragged.target.textContent;
        li.classList.add('li');
        //add craeted list to the ul that user droped list in it
        e.target.appendChild(li);
        //delete previous draged list 
        dragged.target.remove();
    } 
}