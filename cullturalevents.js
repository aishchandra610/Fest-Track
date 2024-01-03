const eveList = document.querySelector('#eve-list');

function renderEve(doc) {
    let li = document.createElement('li');
    li.className = "container"
    let ename = document.createElement('span');
    ename.className = "tushar";
    let venue = document.createElement('a');
    venue.className = "tushar";
    let orgname = document.createElement('span');
    orgname.className = "tushar";
    let date = document.createElement('span');
    date.className = "tushar";
    let num = document.createElement('span');
    num.className = "tushar";
    let info = document.createElement('span');
    info.className = "tushar";
    let eimg = document.createElement('img');
    eimg.className = "tushar";
    let button = document.createElement('a');
    button.id = "but";
    button.className = "paybtn";
    button.href = "https://test.instamojo.com/@vikasvsingh2001/";
    button.textContent = "Book tickets";



    li.setAttribute('data-id', doc.id);
    ename.textContent = "EVENT NAME : " + doc.data().ename;
    venue.textContent = "VENUE : " + doc.data().vname;
    orgname.textContent = "CLUB NAME : " + doc.data().orgname;
    date.textContent = "EVENT DATE : " + doc.data().date;
    num.textContent = "TICKET PRICE : " + doc.data().num;
    info.textContent = "EXTRA INFORMATION : " + doc.data().info;



    li.appendChild(ename);
    li.appendChild(venue);
    li.appendChild(orgname);
    li.appendChild(date);
    li.appendChild(num);
    li.appendChild(info);
    li.appendChild(button);
    // document.getElementById("but"),setAttribute()




    eveList.appendChild(li);
}

// getting data
db.collection('formData').get().then(snapshot => {
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