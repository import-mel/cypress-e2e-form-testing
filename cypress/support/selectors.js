export const SELECTORS = {
    form_CAC_TAT: {
        form_fields: {
            name: '#firstName',                      // obrigatório
            lastname: '#lastName',                   // obrigatório
            email: '#email',                         // obrigatório
            phone: '#phone',
            text_area: '#open-text-area',
            upload_file: '#file-upload'
        },
        selects: {
            product: '#product',
            service_type: 'input[type="radio"]', // seleciona todos os elementos que possuem o atributo type=radio
            contact_options: 'input[type="checkbox"]'        // seleciona todos os elementos que possuem o atributo type=checkbox
        },
        buttons: {
            submit: 'button[type="submit"]'
        },
        links: {
            privacy_and_policy: '#privacy a'         // direciona para a tela de politica e privacidade
        },
        messages: {
            sucess: '.success',
            error: '.error'
        }
    },

    privacy_and_policy: {
        title: '#title'
    },

    mistery_cat: '#cat'
};