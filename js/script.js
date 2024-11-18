// Dichiarazioni
const emailListElem = document.getElementById("email-list");


// logica
for (let i = 0; i < 10; i++) {
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp) => {
        console.log(resp);

        const email = resp.data.response;
        console.log(email);
    
    });
};



