const eveList = document.querySelector('#eve-list');

function renderEve(doc) {
    let li = document.createElement('li');
    li.className = "container"
    let sname = document.createElement('span');
    sname.className = "tushar";

    let venue = document.createElement('span');
    venue.className = "tushar";

    let date = document.createElement('span');
    date.className = "tushar";
    let num = document.createElement('span');
    num.className = "tushar";





    li.setAttribute('data-id', doc.id);
    sname.textContent = "INTERNSHIP NAME : " + doc.data().ename;
    venue.textContent = "CITY : " + doc.data().vname;

    date.textContent = "STARTING DATE : " + doc.data().date;
    num.textContent = "STIPEND: " + doc.data().num;



    li.appendChild(sname);
    li.appendChild(venue);

    li.appendChild(date);
    li.appendChild(num);

    // document.getElementById("but"),setAttribute()




    eveList.appendChild(li);
}

// getting data
db.collection('InternData').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderEve(doc);
    });
});







/* Start client-defined Callback Handler Functions */
function onOpenHandler() {
    alert('Payments Modal is Opened');
}

function onCloseHandler() {
    alert('Payments Modal is Closed');
}

function onPaymentSuccessHandler(response) {
    alert('Payment Success');
    console.log('Payment Success Response', response);
}

function onPaymentFailureHandler(response) {
    alert('Payment Failure');
    console.log('Payment Failure Response', response);
}
/* End client-defined Callback Handler Functions */

/* Configuring Handlers */
Instamojo.configure({
    handlers: {
        onOpen: onOpenHandler,
        onClose: onCloseHandler,
        onSuccess: onPaymentSuccessHandler,
        onFailure: onPaymentFailureHandler
    }
});

function onButtonClick() {
    Instamojo.open('https://test.instamojo.com/@vikasvsingh2001/');
}
let b = document.querySelector(".paybtn");
b.setAttribute('onclick', 'onButtonClick');