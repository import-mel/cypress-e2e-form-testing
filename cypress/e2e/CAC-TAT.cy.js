const { SELECTORS } = require("../support/selectors");

describe('Formulário - Acessar e preencher formulário com sucesso', () => {
    it('CT01: Verifica titulo da página', () => {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    });

     Cypress._.times(5, () => {
        it('CTO2: Preenche campos obrigatórios e envia o formulário', () => {
            cy.clock()
            cy.fill_mandatory_fields();
            cy.get(SELECTORS.form_CAC_TAT.buttons.submit).click()
            cy.get(SELECTORS.form_CAC_TAT.messages.sucess).should('be.visible')

            cy.tick(3000)
            cy.get(SELECTORS.form_CAC_TAT.messages.sucess).should('not.be.visible')
        });

    })

        it('CT03: Preencher campos opcionais e enviar formulário', () => {
            cy.clock()
            cy.fill_mandatory_fields();
            cy.get(SELECTORS.form_CAC_TAT.selects.product).select('Mentoria').should('have.value', 'mentoria')
            cy.get(SELECTORS.form_CAC_TAT.selects.service_type).check('feedback').should('be.checked')
            cy.get(SELECTORS.form_CAC_TAT.selects.contact_options).check('email').should('be.checked')
            
            cy.fixture('example-jpg.jpg').as('sampleFile')
            cy.get(SELECTORS.form_CAC_TAT.form_fields.upload_file).selectFile('@sampleFile', { action: 'drag-drop'}) // simula o arrastar e soltar o arquivo
                .should(input => {
                    console.log(input)
                    expect(input[0].files[0].name).to.equal('example-jpg.jpg')
                })

            cy.get(SELECTORS.form_CAC_TAT.buttons.submit).click()
            cy.get(SELECTORS.form_CAC_TAT.messages.sucess).should('be.visible')

            cy.tick(3000)
            cy.get(SELECTORS.form_CAC_TAT.messages.sucess).should('not.be.visible')
    });
});


describe('Formulário - Validação de campos obrigatórios e opcionais', () => {
    it('CT01: Reset nos campos do formulário após envio', () => {
        cy.fill_mandatory_fields();
        cy.get(SELECTORS.form_CAC_TAT.buttons.submit).click()
        cy.get(SELECTORS.form_CAC_TAT.messages.sucess).should('be.visible')

        cy.get(SELECTORS.form_CAC_TAT.form_fields.name).should('have.value', '')
        cy.get(SELECTORS.form_CAC_TAT.form_fields.lastname).should('have.value', '')
        cy.get(SELECTORS.form_CAC_TAT.form_fields.email).should('have.value', '')
        cy.get(SELECTORS.form_CAC_TAT.form_fields.text_area).should('have.value', '')
    });

    it('CT02: Enviar formulário com nenhum campo preenchido', () => {
        cy.clock()
        cy.get(SELECTORS.form_CAC_TAT.buttons.submit).click()
        cy.get(SELECTORS.form_CAC_TAT.messages.error).should('be.visible')

        cy.tick(3000)
        cy.get(SELECTORS.form_CAC_TAT.messages.error).should('not.be.visible')
    });

    it('CT03: Preencher campo nome com valor inválido', () => {
        cy.get(SELECTORS.form_CAC_TAT.form_fields.name).type("12345*&%%$$% %%").should('have.value', '')
    });

    it('CT04: Preencher campo sobrenome com valor inválido', () => {
        cy.get(SELECTORS.form_CAC_TAT.form_fields.lastname).type("13456*&%%$$% %%").should('have.value', '')
    });

    it('CT05: Exibe mensagem de erro ao preencher campo email com formatação inválida', () => {
        cy.clock()
        cy.get(SELECTORS.form_CAC_TAT.form_fields.name).type("Matilde")
        cy.get(SELECTORS.form_CAC_TAT.form_fields.lastname).type("do Teste")
        cy.get(SELECTORS.form_CAC_TAT.form_fields.email).type("matilde.testes$tuamaeaquelaursa")
        cy.get(SELECTORS.form_CAC_TAT.form_fields.text_area).type("oooooooonepunchmannnnnnnnnnnnnn")

        cy.get(SELECTORS.form_CAC_TAT.buttons.submit).click()
        cy.get(SELECTORS.form_CAC_TAT.messages.error).should('be.visible')

        cy.tick(3000)
        cy.get(SELECTORS.form_CAC_TAT.messages.error).should('not.be.visible')
    });

    it('CT06: Preencher campo telefone com valor inválido', () => {
        cy.get(SELECTORS.form_CAC_TAT.form_fields.phone).type("jfkaokdo*&ˆ%%$$% ˆ%ˆˆ%").should('have.value', '')
    });

    it('CT07: Exibe mensagem de erro quando telefone se torna obrigatório mas não é preenchido', () => {
        cy.clock()
        cy.fill_mandatory_fields();
        cy.get(SELECTORS.form_CAC_TAT.selects.contact_options).check('phone').should('be.checked')
        cy.get(SELECTORS.form_CAC_TAT.buttons.submit).click()
        cy.get(SELECTORS.form_CAC_TAT.messages.error).should('be.visible')

        cy.tick(3000)
        cy.get(SELECTORS.form_CAC_TAT.messages.error).should('not.be.visible')
    });

    it('CT08: Marcar cada tipo de atendimento', () => {
        cy.get(SELECTORS.form_CAC_TAT.selects.service_type).each(typeOfService => {
            cy.wrap(typeOfService).check().should('be.checked')
        })
    });

    it('CT09: Marca ambos os checkboxes de contato preferencial e depois desmarca o último', () => {
        cy.get(SELECTORS.form_CAC_TAT.selects.contact_options).check().should('be.checked')
        cy.get(SELECTORS.form_CAC_TAT.selects.contact_options).last().uncheck().should('not.be.checked')  
    });
});

describe('Formulário - Upload de arquivos válidos', () => {
    // REGRA: o formulário só deve aceitar arquivos do tipo: PDF, png ou jpg

    it('CT01: Permitir upload de arquivo válido', () => {
        cy.fixture('example-jpg.jpg').as('sampleFileJPG')
        cy.get(SELECTORS.form_CAC_TAT.form_fields.upload_file).selectFile('@sampleFileJPG') // simula o arrastar e soltar o arquivo
            .should(input => {
                console.log(input)
                expect(input[0].files[0].name).to.equal('example-jpg.jpg')
            })

        cy.fixture('example-pdf.pdf').as('sampleFilePDF')
        cy.get(SELECTORS.form_CAC_TAT.form_fields.upload_file).selectFile('@sampleFilePDF') // simula o arrastar e soltar o arquivo
            .should(input => {
                console.log(input)
                expect(input[0].files[0].name).to.equal('example-pdf.pdf')
            })
         
        cy.fixture('example-png.png').as('sampleFilePNG')
        cy.get(SELECTORS.form_CAC_TAT.form_fields.upload_file).selectFile('@sampleFilePNG') // simula o arrastar e soltar o arquivo
            .should(input => {
                console.log(input)
                expect(input[0].files[0].name).to.equal('example-png.png')
            })  
    });

    it('CT02: Não permitir upload de arquivo com tipo inválido', () => {
        cy.fixture('example-json.json').as('sampleFileJSON')
        cy.get(SELECTORS.form_CAC_TAT.form_fields.upload_file).selectFile('@sampleFileJSON') // simula o arrastar e soltar o arquivo
            .should(input => {
                console.log(input)
                 expect(input[0].files.length).to.equal(0);
            })  
    });

});

describe('Formulário - Link Política de Privacidade', () => {
    it('CT01: Clica no link que redireciona para a página de politicas e privacidade', () => {
        cy.get(SELECTORS.form_CAC_TAT.links.privacy_and_policy)
            .invoke('removeAttr', 'target')
            .click()
        cy.contains('h1', 'CAC TAT - Política de Privacidade').should('be.visible')

        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT - Política de Privacidade')
    })

    it('CT02: verifica que a política de privacidade abre em outra aba', () => {
        cy.contains('a', 'Política de Privacidade').should('have.attr', 'target', '_blank')
            .and('have.attr', 'href', 'privacy.html')
        
    });
});

describe('DESAFIO FINAL: ENCONTRAR O GATO', () => {
    it('ENCONTRE O GATO 🐈', () => {
        cy.get(SELECTORS.mistery_cat).should('not.be.visible')
            .invoke('show')
            .should('be.visible')
            .and('contain', '🐈')
    });
});

