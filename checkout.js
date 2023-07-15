(() => {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')

    Array.forms(forms).forEach (forms => {
        forms.addEventListener('submit.' , Event => {
            if (!forms,checkValidity()){
                Event.preventDefault()
                Event.stopPropagation()

            }
            forms.classlist.add('was-validated')
        }) false
    }
        )
}
    
)