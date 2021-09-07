// console.log('I am here');
// alert('Ma is coming!!');

const maComing = () => {
    alert('Ammu is coming...! Open the book');
}

const askPicnic = () => {
    const response = confirm('Are you going to picnic?');
    if (response === true) {
        alert('amake fee ta bkash kore de');
    }
    else {
        console.log('DGM !! Doore giya mor!!!')
    }
    console.log(response);
}

const askName = () => {
    const name = prompt('What is your name?');
    if (name) {
        console.log(name);
    }
}