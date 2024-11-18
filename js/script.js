// Dichiarazioni
const emailListElem = document.getElementById("email-list");


// logica
let rndEmails = "";

for (let i = 0; i < 10; i++) {
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp) => {
        console.log(resp);

        const email = resp.data.response;
        console.log(email);
        
        rndEmails += email + " ";
        console.log(rndEmails);
        
        const listItem = document.createElement("li");
        listItem.textContent = email;
        emailListElem.append(listItem);
    });
};



