import {atualizaIframe} from './1-propriedades-iframe.js';
import {alteraAlturaIframe} from './1-propriedades-iframe.js';
import {showLoadingScreen} from './5-screen-loading.js';
import {abaContato, abaHistorico, abaHome, abaPolitica} from './4-abas-stilos.js';
import {offLoadingScreen} from './5-screen-loading.js';
import {changeCSSOculto} from './6-menu-oculto.js';
import {closeHideMenu} from './6-menu-oculto.js';
import {retornaCSSOculto} from './6-menu-oculto.js';
import {roteadorURL} from './roteamento-links.js';

export async function scrollScreenTopic(topicScroll) {
    return new Promise(async (resolve) => {
        console.log(topicScroll);
        //Ajustando Scroll Seção Criação de Sites
        if(topicScroll == "sites") {
            const statusAltura = await alteraAlturaIframe();
            let targetSite = statusAltura.querySelector("#criacao-de-sites");
            if(targetSite) {
                targetSite.scrollIntoView({ behavior: 'smooth', block: 'start' });
                resolve(`${topicScroll} Scroll Ajustado`);
            }
        }

        //Ajustando Scroll Seção Clientes
        if(topicScroll == "clientes") {
            const statusAltura = await alteraAlturaIframe();
            let targetSite = statusAltura.querySelector("#section-dos-clientes");
            if(targetSite) {
                targetSite.scrollIntoView({ behavior: 'smooth', block: 'start' });
                resolve(`${topicScroll} Scroll Ajustado`);
            }
        }

        //Ajustando Scroll Seção hospedagem
        if(topicScroll == "hospedagem") {
            const statusAltura = await alteraAlturaIframe();
            let targetSite = statusAltura.querySelector("#section-das-hospedagens");
            if(targetSite) {
                targetSite.scrollIntoView({ behavior: 'smooth', block: 'start' });
                resolve(`${topicScroll} Scroll Ajustado`);
            }
        }

        //Ajustando Scroll Seção sobre
        if(topicScroll == "sobre-mim") {
            const statusAltura = await alteraAlturaIframe();
            let targetSite = statusAltura.querySelector("#section-sobre-mim");
            if(targetSite) {
                targetSite.scrollIntoView({ behavior: 'smooth', block: 'start' });
                resolve(`${topicScroll} Scroll Ajustado`);
            }
        }
        
    })
}

//Funão para abrir página externa ao site Blog
export async function openBlankPage(nameID) {
    return new Promise(async (resolve) => {
        //window.alert(`Link ${nameID} foi clicado`)
        window.open("https://gestao-e-financas.blogspot.com/", "_blank");
        resolve("New Page has been opened!");
    })
}

//Função para ativar ações página home
export async function homeStartActions(Action) {
    return new Promise(async (resolve) => {
        if(Action == "Main") {
            //window.alert(`Botão AÇÃO Main foi acionado!`)
            window.open("https://tinyurl.com/2sunmwe2", "_blank");
            resolve("OK");
        }

        if(Action == "Contato") {
            //window.alert(`Botão AÇÃO Contato foi acionado!`)
            window.open("https://tinyurl.com/2sunmwe2", "_blank");
            resolve("OK");
        }
    })
}

//Funções
export async function startOperations(nameID, X, constArray) {
    return new Promise(async (resolve) => {
        console.clear();
        console.log(Date());

        if(X == 0 || X == 13 || X == 20) {
            //Iniciando tela de carregamento
            const statusLoading = await showLoadingScreen(nameID);
            console.log(statusLoading, nameID);
        }

        if(X == 5) {
            //Alterando propriedades Menu Oculto
            const statusMOculto = await changeCSSOculto(constArray);
            console.log(statusMOculto, nameID);
        }

        //Condição para roteamento de links - Live Server
        if(window.location.origin == "http://127.0.0.1:5500") {
            history.pushState({ Page: nameID }, nameID, '');
            console.log(window.history.state, "Internal Pages");

        //Condição para roteamento de links - Servidor    
        } else {
            let urlID = `/criacao-de-sites/${nameID}`;
            const statusURL = await roteadorURL(1, urlID);
            console.log(statusURL);
        }
        

        //Caminho para atualização DOM
        let SRCiframe = `assets/HTML/${nameID}.html`;
        console.log(SRCiframe, "Caminho para Atualizar DOM");

        //Atualizando Documentação iFrame
        const statusDOM = await atualizaIframe(SRCiframe, nameID);
        console.log(statusDOM, nameID);

        //Atualizando stilos CSS
        if(nameID == "home") {
            const statusCSS = await abaHome(constArray, nameID);
            console.log(statusCSS);
        }

        if(nameID == "historico") {
            const statusCSS = await abaHistorico(constArray, nameID);
            console.log(statusCSS);
        }

        if(nameID == "contato") {
            const statusCSS = await abaContato(constArray, nameID);
            console.log(statusCSS);
        }

        if(nameID == "politica") {
            const statusCSS = await abaPolitica(constArray, nameID);
            console.log(statusCSS);
        }
        
        //Atualizando altura do iframe
        const statusAltura = await alteraAlturaIframe();
        console.log(statusAltura, nameID);

        //Capturando objetos específicos
        if(nameID == "home") {
            let btnMainAction = statusAltura.querySelector(".main-btn");
            let btnContatoAction = statusAltura.querySelector(".ctt-btn");
            console.log(btnMainAction);
            console.log(btnContatoAction);
    
            //Capturando event click btn Main ação
            if (btnMainAction) {
                btnMainAction.addEventListener("click", async function() {
                const statusMain = await homeStartActions("Main");
                console.log(statusMain);
                })
            }
    
            //Capturando event click btn Contato ação
            if (btnContatoAction) {
                btnContatoAction.addEventListener("click", async function() {
                const statusContato = await homeStartActions("Contato");
                console.log(statusContato);
                })
            }
        }

        //Capturando objetos específicos
        if(nameID == "historico") {
            let btnHistoricoAction = statusAltura.querySelector(".ctt-btn");
            console.log(btnHistoricoAction);

            //Capturando event click btn ação
            if (btnHistoricoAction) {
                btnHistoricoAction.addEventListener("click", function() {
                //window.alert(`Botão AÇÃO ${nameID} foi acionado!`)
                window.open("https://tinyurl.com/2sunmwe2", "_blank");
                })
            }
        }

        //Capturando objetos específicos
        if(nameID == "contato") {
            let btnContatoAction = statusAltura.querySelector(".sa-btn");
            console.log(btnContatoAction);

            //Capturando event click btn ação
            if (btnContatoAction) {
                btnContatoAction.addEventListener("click", function() {
                //window.alert(`Botão AÇÃO ${nameID} foi acionado!`)
                window.open("https://tinyurl.com/2sunmwe2", "_blank");
                })
            }
        }

        //Encerrando Screen Loading...
        if(X == 0 || X == 13 || X == 20) {
            const statusOff = await offLoadingScreen(nameID);
            console.log(statusOff, nameID);
            if(X == 0) {
                console.log(`Botão ${nameID} nav bar pronto!`);
            }

            if(X == 13) {
                console.log(`Botão ${nameID} footer pronto!`)
            }

            if(X == 20) {
                console.log(`Botão ${nameID} footer tópicos pronto!`)
            }
        }

        //Fechando Menu Oculto após carregamento!
        if(X == 5) {
            const statusOff = await closeHideMenu(constArray, 800);
            console.log(statusOff, nameID);

            //Alterando propriedades Menu Oculto
            const statusEndOculto = await retornaCSSOculto(constArray);
            console.log(statusEndOculto, nameID);
            console.log(`Configs ${nameID} menu oculto pronto!`);
        }
        
        resolve("FIM");
        
    });
}    


