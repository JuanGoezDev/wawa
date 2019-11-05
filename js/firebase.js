/*Firebase Autenticación */

function registrar() {
    var emailRegistro = document.getElementById('emailRegistro').value;
    var passwordRegistro = document.getElementById('passwordRegistro').value;
    var password2Registro = document.getElementById('password2Registro').value;

    if (passwordRegistro == password2Registro) {
        firebase.auth().createUserWithEmailAndPassword(emailRegistro, passwordRegistro)
            .then(function () {
                verificar();
            })
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
            });
    } else {
        document.getElementById("contrasenasDiferentes").innerHTML = "¡Las contraseñas deben coincidir!";
    }
}

function ingreso() {
    var emailLogin = document.getElementById('emailLogin').value;
    var passwordLogin = document.getElementById('passwordLogin').value;

    firebase.auth().signInWithEmailAndPassword(emailLogin, passwordLogin)
        .then(function () {
            observador();
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });
}

function observador() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;

            if (user.emailVerified) {
                iniciarCerrarSesion('inicioWawa', 'contenidoWawa');
                mostrarBotonLogOut();
            } else {
                alert('Necesitas verificar tu contraseña');
            }
        } else {
            console.log('No existe usuario activo');
            // User is signed out.
            // ...
        }
    });
}

observador();

function mostrarBotonLogOut() {
    document.getElementById('botonLogOut').innerHTML = `
    <div class="mdl-grid">
        <button
            class="mdl-cell mdl-cell--12-col mdl-button mdl-button--raised mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-color-text--white"
            onclick="cerrar();">
            Cerrar sesión
        </button>
    </div>`;
}

function cerrar() {
    firebase.auth().signOut()
        .then(function () {
            iniciarCerrarSesion('contenidoWawa', 'inicioWawa');
        })
        .catch(function (error) {
            console.log(error);
        })
}

function verificar() {
    var user = firebase.auth().currentUser;

    user.sendEmailVerification().then(function () {
        // Email sent.
        alert('Se ha enviado un correo de verificación');
        inicioWawa('recuperarWawa', 'registroWawa', 'loginWawa');
    }).catch(function (error) {
        console.log(error);
    });
}

function recuperarContrasena() {
    var auth = firebase.auth();
    var emailRecuperar = document.getElementById('emailRecuperar').value;

    auth.sendPasswordResetEmail(emailRecuperar).then(function () {
        // Email sent.
        alert('Se ha enviado un correo de verificación');
        inicioWawa('recuperarWawa', 'registroWawa', 'loginWawa');
    }).catch(function (error) {
        // An error happened.
    });
}

/*Firebase Almacenamiento*/
const db = firebase.firestore();

//operaciones con firebasestore

function enviarComentario() {
    db.collection("Foro_Modulo1").add({
        Usuario: document.getElementById("input_nombre").value,
        Fecha: new Date(),
        Curso: document.getElementById("input_curso").value,
        Unidad: document.getElementById("input_unidad").value,
        Comentario: document.getElementById("input_comentario").value
    })
        .then((docRef) => {
            console.log("document written with ID ", docRef.id);
            document.getElementById("input_nombre").value = "";
            document.getElementById("input_curso").value = "";
            document.getElementById("input_unidad").value = "";
            document.getElementById("input_comentario").value = "";      
        })
        .catch((error) => {
            console.log("error adding document ", error);
            alert('Error al publicar comentario, intente de nuevo');
        });
}

//extraccion de documentos
db.collection("Foro_Modulo1").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${new Date(doc.data().Fecha.seconds * 1000)}`);
        let date = new Date(doc.data().Fecha.seconds * 1000);
        document.getElementById('div_foro').innerHTML += `
    <div id="articulo">
        <div class="demo-card-wide mdl-card mdl-shadow--2dp">
            <h5 id="tituloPublicacion">${doc.data().Usuario}, Curso ${doc.data().Curso} - Unidad ${doc.data().Unidad}</h5><br>
            <span id="comentarioPublicacion">${doc.data().Comentario}</span>
            <div class="mdl-card__actions mdl-card--border">
                <span id="fechaPublicacion">${date.toLocaleString()}</span>
            </div>
        </div>
    </div>
    </br>
    `;
    });
});
