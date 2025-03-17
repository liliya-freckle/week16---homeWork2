function submitRegistrationForm(event) {
    console.log('Help!!')
    event.preventDefault();
    // const form = document.forms.registrationForm;
    const form = document.forms.namedItem("registrationForm");

    const name = form.elements.namedItem("userName");
    const errorName = document.querySelector("#errorName")
    const email = form.elements.namedItem("userEmail");
    const errorEmail = document.querySelector("#errorEmail")
    const age = form.elements.namedItem("userAge")
    const gender = form.elements.namedItem("userGender")
    const job = form.elements.namedItem("userJob")
    const password = form.elements.namedItem("userPassword")
    const errorPassword = document.querySelector("#errorPassword")
    const agree = form.elements.namedItem("userAgree")
    const errorUserAgree = document.querySelector("#errorUserAgree")


    console.log(name)
    if (name.value === "") {
        errorName.textContent = "Введите ваше имя";
    } else { errorName.textContent = "" };
    if (!(name.value.length >= 2 && name.value.length <= 20)) {
        errorName.textContent = "Ваше имя должно иметь не менее 2 и не более 20 символов";
    } else { errorName.textContent = "" };
    const nameRegEx = /^[A-Za-z0-9]+\s$/;

    if (!nameRegEx.test(name.value)) {
        if (!errorName.textContent) {
            errorName.textContent = "Ваше имя должно иметь латинские буквы и пробелы";
        }
    } else { errorName.textContent = "" };

    console.log(email)
    if (email.value === "") {
        errorEmail.textContent = "Введите ваш электронный адрес";
    } else { errorEmail.textContent = "" };
    const emailRegEx = /^@$/;

    if (!emailRegEx.test(email.value)) {
        if (!errorEmail.textContent) {
            errorEmail.textContent = "Ваш электронный адрес должен иметь знак @ и доменное имя";
        }
    } else { errorEmail.textContent = "" };


    console.log(password)
    if (password.value === "") {
        errorPassword.textContent = "Введите ваш пароль";
    } else { errorPassword.textContent = "" };
    const passwordRegEx = /^[a-zA-Z0-9]+$/;

    if (!passwordRegEx.test(password.value)) {
        if (!errorPassword.textContent) {
            errorPassword.textContent = "Ваш пароль должен иметь как минимум одну заглавную, одну строчную букву, одну цифру и содержать минимум 8 знаков";
        }
    } else { errorPassword.textContent = "" };


    if (!agree.checked) {
        errorUserAgree.textContent = "Необходимо согласие на обработку персональных данных"
    } else { errorUserAgree.textContent = "" };

    const button = document.querySelector('#buttonSubmit')
    if ((errorName.textContent = "") && (errorEmail.textContent = "") && (errorPassword.textContent = "") && (errorUserAgree.textContent = "")) {
        button.classList.add('active')
    } else {
        button.classList.remove('active')
    }

    console.log(name.value)
    console.log(email.value)
    console.log(age.value)
    console.log(gender.value)
    console.log(job.value)
    console.log(password.value)

}




















// Поле ввода имени: обязательное поле, должно содержать только буквы и пробелы. Длина имени должна быть от 2 до 20 символов. Должно иметь атрибуты placeholder и required.
// Поле ввода электронной почты: обязательное поле, должно быть в формате email (содержать символ '@' и доменное имя). Должно иметь атрибуты placeholder и required.
// Поле ввода возраста: обязательное поле. Должно иметь атрибуты placeholder и required.
// Поле выбора пола: представленное в виде radio buttons для выбора между мужчиной и женщиной
// Поле выбора профессии: обязательное поле, представленное в виде выпадающего списка (select). Должно иметь атрибуты required и placeholder для выбора профессии. Варианты профессий:
// Поле ввода пароля: обязательное поле, должно быть не менее 8 символов длиной и содержать как минимум одну заглавную букву, одну строчную букву и одну цифру. Должно иметь атрибуты placeholder, required, minlength и pattern.
// Поле checkbox, показывающее согласие пользователя с обработкой данных. Должно иметь атрибут required.
// Кнопка отправки формы

// 3. Используя JavaScript, добавьте обработчик события отправки формы (submit), который будет выполнять следующие действия:

// Отменять действие по умолчанию для события submit
// Отображать сообщение об ошибке рядом с каждым полем при обнаружении ошибки валидации
// Кнопка отправки должна быть неактивна (disabled), пока все поля формы не будут правильно заполнены и не будет отмечен чекбокс согласия с условиями
// Если форма проходит проверку валидности, выводите в консоль значения полей формы и очищайте форму
// 4. Бонусное задание: реализуйте дополнительные обработчики событий focus и blur для каждого поля