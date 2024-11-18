// DICHIARAZIONI
const emailListElem = document.getElementById("email-list");


// LOGICA
// variabile d'appoggio per raggiuppare tutte le mail
let rndEmails = "";

// creo 10 mail random
for (let i = 0; i < 10; i++) {
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp) => {
        console.log(resp);

        // tra tutti i dati forniti, seleziono la mail
        const email = resp.data.response;
        console.log(email);
        
        // le inserisco nella variabile
        rndEmails += email + " ";
        console.log(rndEmails);
        
        // creo il tag dove inserirle
        const listItem = document.createElement("li");
        listItem.textContent = email;

        // OUTPUT
        // stampo in pagina
        emailListElem.append(listItem);
    });
};



