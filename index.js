"use strict"

document.addEventListener("DOMContentLoaded", function () {
    var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
    console.log(scrollbar);
    document.querySelector('[href="#openModal"]').addEventListener('click', function () {
        document.body.style.overflow = 'hidden';
        document.querySelector('#openModal').style.marginLeft = scrollbar;
    });
    document.querySelector('[href="#close"]').addEventListener('click', function () {
        document.body.style.overflow = 'visible';
        document.querySelector('#openModal').style.marginLeft = '0px';
    });


    const form = this.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        /*let formData = new FormData(form);

        if (error === 0){
            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData
            });
            if(response.ok){
                let result = await pespons.json();
                alert(result.massage);
                formPreview.innerHTML = '';
                form.requestFullscreen();
            }else{
                alert("Ошибка")
            }
        }else{
            alert('Заполните обязательные поля')
        }*/


    }

    function formValidate(form){
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('_email')){
                if(emailTest(input)){
                    formAddError(input);
                    error++;
                }
        } else if(input.getAttribute("type") == "checkbox" && input.checked == false){
            formAddError(input);
            error++;
        } else{
            if (input.value === ''){
                formAddError(input);
                error++;
            }
        }
        /*return error;*/
    }
    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
}

    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input. value);
        }
});

