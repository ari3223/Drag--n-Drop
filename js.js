/////////////////////////////////// classes & variables ///////////////////////////////////
//text class is about make and form lists and its relatives
const text = new Text();
//api class make contact to server for save, edit, add and delete texts
const api  = new API();

//Access to lis, uls and down botton(register and sign in)   
let dragged,
    ULs     = document.querySelectorAll('.list'),
    lists   = document.querySelectorAll('.li'),
    add_btn = document.querySelectorAll('.add'),
    deleteBtn = document.querySelector('.deleteBtn'),
    registerBtn = document.querySelector('.register'),
    determin_adbtn;

///////////////////////////////////// eventListeners /////////////////////////////////////
evenLisener()
function evenLisener() {
    //make every list dragable
    make_all_dragable();
    //after add btn clicked:
    add_btn.forEach((element, index) => {
        element.addEventListener('click', (e) =>{
            //make appear area that user can write new Text
            text.text_area_on(e, index);
        })
    });
    //after X btn clicked:
    document.querySelectorAll('.cancel').forEach(element => {
        element.addEventListener('click', (e) =>{
            //make ready the shape of the form for new add(so that user can add again)
            text.text_area_off();
        });
    });
    //after save btn clicked:
    document.querySelectorAll('.save').forEach(element => {
        element.addEventListener('click', (e) =>{
            //this method adds new user text to the list
            text.addTx_list(e)
        });
    });  
     
}

//////////////////////////////////////// functions ////////////////////////////////////////
function make_all_dragable() {
    //prevent Unwanted activities the places that draged list is going to them
    ULs.forEach(element => {
        element.addEventListener('dragover', (e) => e.preventDefault())
    });
    //prevent Unwanted activities the places that draged list is going to them
    ULs.forEach(element => {
        element.addEventListener('draginter', (e) => e.preventDefault())
    });
    //add draged List(make list like draged list) to its new containar(where user wonna droped)
    ULs.forEach(element => {
        element.addEventListener('drop', (e) =>{text.insert_dragTx(e)})
    });
    //make delete btn brighter when user do dragover on the btn(make unchange when dragleave)
    deleteBtn.addEventListener('dragover', (e) =>{deleteBtn.classList.add('onDl')});
    deleteBtn.addEventListener('dragleave', (e) =>{deleteBtn.classList.remove('onDl')});
}

/////////////////////////////////// On Clicks functions ///////////////////////////////////
//make sign(in/up) part apear after user click on sign in
function show_sign() {
    document.querySelector('.sign_section').style.display = 'flex';
}
//make sign(in/up) part hide after user click on outside of form our ...
function hide_sign(e) {
    //see if user clicked outside of form or not 
    if(e.target.classList.contains('register_containar') || e.target.classList.contains('sign_section')){
        document.querySelector('.sign_section').style.display = 'none';
    }
}
function signSections(e) {
    //Access to titer and bodys of the sign(in/up) part
    let signIn_titr = document.querySelector('.signin_titr'),
        signUp_titr = document.querySelector('.signup_titr'),
        signIn_body = document.querySelector('.sign_in'),
        signUp_body = document.querySelector('.sign_up');
    //lets see if user wants to Register
    if (e.target.classList.contains('signin_titr')) {
        //apear titer and body of the sign_in part
        signIn_titr.classList.add('click-sign');
        signUp_titr.classList.remove('click-sign');
        signIn_body.style.display = 'flex';
        signUp_body.style.display = 'none';

      //lets see if user wants to Log in
    } else {
        //apear titer and body of the sign_up part
        signIn_titr.classList.remove('click-sign');
        signUp_titr.classList.add('click-sign');
        signIn_body.style.display = 'none';
        signUp_body.style.display = 'flex';
    } 
}
//(set datas + apear dlBtn + hide draged list) after user draged a list
function drag_start(e) {
    dragged = e;
    deleteBtn.classList.add('apeardl');
    registerBtn.style.display = 'none';
    setTimeout(() => {
        e.target.style.display = 'none';
    }, 000001);
}
//(apear draged list + hide delete_Btn) after user undraged the draged list
function drag_end(e) {
    e.target.style.display = 'list-item';
    deleteBtn.classList.remove('apeardl');
}
//(delete draged and droped List + make sign in Btn apear again)
function deletetx() {
    dragged.target.remove();
    registerBtn.style.display = 'flex';
}













































