const fout = document.getElementById('filot');

function submitToCv(){
    const fname = document.getElementById('fname').value;
    const mname = document.getElementById('mname').value;
    const lname = document.getElementById('lname').value;
    const number = document.getElementById('number').value;
    const mail = document.getElementById('mail').value;
    const PO = document.getElementById('PO').value;


    localStorage.setItem("NAME",fname);
    localStorage.setItem("MNAME", mname);
    localStorage.setItem("LNAME", lname);
    localStorage.setItem("NUMBER", number);
    localStorage.setItem("MAIL", mail);
    localStorage.setItem("PO", PO);

    return;
}

window.addEventListener('load' ,() => {

    const fname = localStorage.getItem('NAME');
    const mname = localStorage.getItem('MNAME');
    const lname = localStorage.getItem('LNAME');
    const PO = localStorage.getItem('PO');
    const number = localStorage.getItem('NUMBER');
    const mail = localStorage.getItem('MAIL');

    document.getElementById('cv-name').innerHTML = fname +" " + mname +" " + lname;
    document.getElementById('cv-address').innerHTML = PO;
    document.getElementById('cv-number').innerHTML = number;
    document.getElementById('cv-mail').innerHTML = mail;
})

function formValidate(){
    const fname = document.getElementById('fname').value;
    const mname = document.getElementById('mname').value;
    const lname = document.getElementById('lname').value;
    const number = document.getElementById('number').value;
    const mail = document.getElementById('mail').value;
    const PO = document.getElementById('PO').value;

      

}

