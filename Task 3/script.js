/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

fetch("https://api.github.com/users")
  .then((Response) => Response.json())
  .then((data) => {
    //console.log(data)
    showData(data);
  });



  const showData = (data) =>{

    document.getElementById("btn").addEventListener("click", (event) => {

    event.preventDefault();

     const divOutput = document.getElementById("output");
     divOutput.innerHTML = " ";
      data.forEach((element) => {
      const card = document.createElement("div");
      const divLogin = document.createElement("div");
      const divAvatar = document.createElement("div");
      const loginTxt = document.createElement("p");
      const avatarImg = document.createElement("img");
      divLogin.append(loginTxt);
      divAvatar.append(avatarImg);
      card.append(divAvatar, divLogin);
      divOutput.append(card)

      card.className = "card";
      divAvatar.className = "Avatar";
      divLogin.className = "Login";
      loginTxt.textContent = element.login;
      avatarImg.src = element.avatar_url;
    });
  });
};

