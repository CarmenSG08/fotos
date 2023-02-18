const form = document.getElementById("form");
const userName = document.getElementById("nombre");
const userEmail = document.getElementById("email");
const userPassword = document.getElementById("password");
const userPassword2 = document.getElementById("password2");




//método si los campos no son rellenados o constan de errores
function setErrorFor(input, message) {
	const formControl = input.parentElement;
	formControl.className = 'form__control error';
	const small = formControl.querySelector('small');
	small.innerText = message;
}

//método si los campos son rellenados correctamente
function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form__control success';
}

//función para la validación del email
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


form.addEventListener("submit", (e) => {
	e.preventDefault();

	validaCampos();

	function validaCampos() {
		
		const nombreValue = nombre.value.trim();
		const emailValue = email.value.trim();
		const passwordValue = password.value.trim();
		const password2Value = password2.value.trim();
		

		//validación nombre
		if(nombreValue === '') {
			setErrorFor(nombre, 'Rellenar este campo');
		} else {
			setSuccessFor(nombre);
		}
	
		//validación email
		if(emailValue === '') {
			setErrorFor(email, 'Rellenar este campo');
		} else if (!isEmail(emailValue)) {
			setErrorFor(email, 'Email inválido');
		} else {
			setSuccessFor(email);
		}
	
		//validación clave
		if(passwordValue === '') {
			setErrorFor(password, 'Rellenar este campo');
		} else if(passwordValue.length < 8){
			setErrorFor(password, 'No debe tener más de 8 caracteres');
		}else {
			setSuccessFor(password);
		}
	
		//validación clave2
		if(password2Value === '') {
			setErrorFor(password2, 'Rellenar este campo');
		} else if(passwordValue !== password2Value) {
			setErrorFor(password2, 'Las contraseñas no coinciden');
		} else{
			setSuccessFor(password2);
		}

		document.getElementById("form_btn").onclick = mensajeExito();
		function mensajeExito() {
			if(nombreValue === '' || emailValue === '' || passwordValue === '' || password2Value === '' || form <= 0 || !isEmail(emailValue) || passwordValue.length < 8 || passwordValue !== password2Value){
				setErrorFor(nombre & email, password, password2);
			}else{
				setSuccessFor(nombre && email && password && password2);
				alert('Formulario enviado con éxito');
			}
		}
	}
	

})