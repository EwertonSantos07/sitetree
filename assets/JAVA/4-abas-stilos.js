//Script para aba HOME!
export async function abaHome(listConst) {
    return new Promise((resolve) => {

        //CSS Changes nav bar
        listConst[1].style.color = "yellowgreen"; //Link Home
        listConst[2].style.color = "white"; //Link Histórico
        listConst[3].style.color = "white"; //Link Blog
        listConst[4].style.color = "white"; //Link Contato

        //CSS Changes Menu Oculto
        listConst[8].style.color = "yellowgreen"; //Link Home
        listConst[9].style.color = "white"; //Link Histórico
        listConst[10].style.color = "white"; //Link Blog
        listConst[11].style.color = "white"; //Link Contato

        //CSS Changes Menu Footer
        listConst[14].style.color = "yellowgreen"; //Link Home
        listConst[15].style.color = "white"; //Link Histórico
        listConst[16].style.color = "white"; //Link Blog
        listConst[17].style.color = "white"; //Link Contato

        //CSS Changes Menu Política
        listConst[19].style.color = "white"; //Link Política

        let statusText = "Propriedades HOME atualizadas!"
        resolve(statusText);
    })
}

//Script para aba HISTÓRICO!
export async function abaHistorico(listConst, pagina) {
    return new Promise((resolve) => {

        // if (pagina === 'historico') {
        //     document.body.classList.add('historico-ativo');
        //     document.body.classList.remove('contato-ativo');
        // } else if (pagina === 'contato') {
        //     document.body.classList.add('contato-ativo');
        //     document.body.classList.remove('historico-ativo');
        // } else {
        //     document.body.classList.remove('historico-ativo');
        //     document.body.classList.remove('contato-ativo');
        //     // Estilos padrão para a página inicial
        // }

        //CSS Changes nav bar
        listConst[1].style.color = "white"; //Link Home
        listConst[2].style.color = "yellowgreen"; //Link Histórico
        listConst[3].style.color = "white"; //Link Blog
        listConst[4].style.color = "white"; //Link Contato

        //CSS Changes Menu Oculto
        listConst[8].style.color = "white"; //Link Home
        listConst[9].style.color = "yellowgreen"; //Link Histórico
        listConst[10].style.color = "white"; //Link Blog
        listConst[11].style.color = "white"; //Link Contato

        //CSS Changes Menu Footer
        listConst[14].style.color = "white"; //Link Home
        listConst[15].style.color = "yellowgreen"; //Link Histórico
        listConst[16].style.color = "white"; //Link Blog
        listConst[17].style.color = "white"; //Link Contato

        //CSS Changes Menu Política
        listConst[19].style.color = "white"; //Link Política

        let statusText = "Propriedades HISTÓRICO atualizadas!"
        resolve(statusText);
    })
}

//Script para aba CONTATO!
export async function abaContato(listConst) {
    return new Promise((resolve) => {

        //CSS Changes nav bar
        listConst[1].style.color = "white"; //Link Home
        listConst[2].style.color = "white"; //Link Histórico
        listConst[3].style.color = "white"; //Link Blog
        listConst[4].style.color = "yellowgreen"; //Link Contato

        //CSS Changes Menu Oculto
        listConst[8].style.color = "white"; //Link Home
        listConst[9].style.color = "white"; //Link Histórico
        listConst[10].style.color = "white"; //Link Blog
        listConst[11].style.color = "yellowgreen"; //Link Contato 
        
        //CSS Changes Menu Footer
        listConst[14].style.color = "white"; //Link Home
        listConst[15].style.color = "white"; //Link Histórico
        listConst[16].style.color = "white"; //Link Blog
        listConst[17].style.color = "yellowgreen"; //Link Contato

        //CSS Changes Menu Política
        listConst[19].style.color = "white"; //Link Política

        let statusText = "Propriedades CONTATO atualizadas!"
        resolve(statusText);
    })
}

//Script para aba POLÍTICA!
export async function abaPolitica(listConst) {
    return new Promise((resolve) => {

        //CSS Changes nav bar
        listConst[1].style.color = "white"; //Link Home
        listConst[2].style.color = "white"; //Link Histórico
        listConst[3].style.color = "white"; //Link Blog
        listConst[4].style.color = "white"; //Link Contato

        //CSS Changes Menu Oculto
        listConst[8].style.color = "white"; //Link Home
        listConst[9].style.color = "white"; //Link Histórico
        listConst[10].style.color = "white"; //Link Blog
        listConst[11].style.color = "white"; //Link Contato

        //CSS Changes Menu Footer
        listConst[14].style.color = "white"; //Link Home
        listConst[15].style.color = "white"; //Link Histórico
        listConst[16].style.color = "white"; //Link Blog
        listConst[17].style.color = "white"; //Link Contato

        //CSS Changes Menu Política
        listConst[19].style.color = "yellowgreen"; //Link Política

        let statusText = "Propriedades HOME atualizadas!"
        resolve(statusText);
    })
}