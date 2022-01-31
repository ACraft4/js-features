// Надоедалка 
import BSN from 'bootstrap.native';
const modal = new BSN.Modal('#subscription-modal'); 

const refs = {
    modal: document.querySelector('#subscription-modal'),
    subscribeBtn: document.querySelector('button[data-subscribe]'),
};

const promt_delay = 1000; 
const max_promt_attemts = 3; 
let promtCounter = 0;
let hasSubscribed = false; 

openModal();

refs.modal.addEventListener('hide.bs.modal', openModal); 
refs.subscribeBtn.addEventListener('click', onSubBtnClick);

function openModal() {
    if (promtCounter === max_promt_attemts || hasSubscribed) {
        return;
    }
    setTimeout(() => {
        modal.show();
        promtCounter += 1; 
    }, promt_delay);
}

function onSubBtnClick() {
    hasSubscribed = true; 
    modal.hide();
}


// const intervalId = setInterval(() => {
//     if (promtCounter === max_promt_attemts) {
//         console.log('stop!');
//         clearInterval(intervalId);
//         return;
//     }

//     console.log('Subscribe - ' + Date.now());
//     promtCounter += 1;
// }, promt_delay); 

