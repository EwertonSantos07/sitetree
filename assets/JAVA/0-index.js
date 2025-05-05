//Importando Funções
import {alteraAlturaIframe} from './1-propriedades-iframe.js';
import {constAmbient} from './2-constantes-ambientes.js';
import {startOperations, scrollScreenTopic, openBlankPage, homeStartActions} from './3-start-operations.js';
import {abaHome} from './4-abas-stilos.js';
import {roteadorURL} from './roteamento-links.js';
import {closeHideMenu} from './6-menu-oculto.js';


//Function IIFE DOM Document
(function(win, doc){
    'use strict';

    console.log("Iniciando Javascript Ewerton Santos Versão 1.0.1")
    console.log("\n");

    //Iniciando DOM
    document.addEventListener('DOMContentLoaded', async () => {

        const loadingScreen = document.querySelector('.loading-screen');
        loadingScreen.style.cursor = 'wait';
        loadingScreen.style.display = 'flex';
        loadingScreen.style.opacity = '1';
        loadingScreen.style.left = '0';
        console.log("Tela de Carregamento ativo...")

        //console.log('DOMContentLoaded');

        //Chamando Função Constantes de Ambientes
        //const constArray = await constAmbient();

        //Atualizando stilos CSS DEFAULT HOME
        //const statusCSS = await abaHome(constArray);
        //console.log(statusCSS, "DEFAULT");

        //const iframeElement = document.querySelector('.iframe');
        //if (iframeElement) {
            //iframeElement.onload = function() {
                //console.log('Iframe carregado inicialmente.');
                //console.log("\n");
            //};
        //}
    })

    //Iniciando carregamento após DOM ser carregado
    window.addEventListener("load", async function() {

        console.log('Carregando...');

        //Capturando largura da tela!!!
        const larguraScreen = screen.width;
        console.log("Width Screen Start:", larguraScreen, "px");

        //Condição para roteamento de links
        if(window.location.origin == "http://127.0.0.1:5500") {
            history.replaceState({ Page: 'home' }, 'Home', '');
            console.log(window.history.state, "First load");
        } else {
            const statusURL = await roteadorURL(0, window.location.pathname);
            console.log(statusURL);
        }

        //const statusURL = await roteadorURL(0, window.location.pathname);
        //console.log(statusURL);

        //Alterando altura iframe
        const statusIframe = await alteraAlturaIframe();
        console.log(statusIframe, "Altura Inicial Iframe Ajustada");

        //Chamando Função Constantes de Ambientes
        const constArray = await constAmbient();

        for (let i = 0; i < constArray.length; i++) {
            console.log(i, constArray[i]);
          }
        

        //Encerrando tela de loading inicial
        const loadingScreen = document.querySelector('.loading-screen');
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            loadingScreen.style.left = '100vw';
            window.scrollTo(0, 0);

            setTimeout(() => {
                loadingScreen.style.display = 'none';
                
            }, 900);
        }, 900);

        //Click botão Main DEFAULT
        let btnMainAction = statusIframe.querySelector(".main-btn");
        if(btnMainAction) {
            btnMainAction.addEventListener("click", async function(event) {
                const statusMain = await homeStartActions("Main");
                console.log(statusMain);
            })
        }

        //Click botão Contato DEFAULT
        let btnContatoAction = statusIframe.querySelector(".ctt-btn");
        if(btnContatoAction) {
            btnContatoAction.addEventListener("click", async function(event) {
                const statusContato = await homeStartActions("Contato");
                console.log(statusContato);
            })
        }


        //Evento click botão HOME nav bar
        if(constArray[1]) {
            constArray[1].addEventListener("click", async function(event) {

                //Capturando data-link
                let nameID = constArray[1].dataset.link;
                const statusOperations = await startOperations(nameID, 0, constArray);
                console.log(statusOperations)
                
            })
        }

        //Evento click botão HISTÓRICO nav bar
        if(constArray[2]) {
            constArray[2].addEventListener("click", async function(event) {
                
                //Capturando data-link
                let nameID = constArray[2].dataset.link;
                const statusOperations = await startOperations(nameID, 0, constArray);
                console.log(statusOperations)

            })
        }

        //Evento click botão BLOG nav bar
        if (constArray[3]) {
            constArray[3].addEventListener("click", async function() {

                //Capturando data-link
                let nameID = constArray[16].dataset.link;
                const statusOperations = await openBlankPage(nameID);
                console.log(statusOperations);
            })
        }

        //Evento click botão CONTATO nav bar
        if(constArray[4]) {
            constArray[4].addEventListener("click", async function(event) {

                //Capturando data-link
                let nameID = constArray[4].dataset.link;
                const statusOperations = await startOperations(nameID, 0, constArray);
                console.log(statusOperations)
                
            })
        }


        //Evento click botão Open Menu Oculto
        if (constArray[6]) {
            constArray[6].addEventListener('click', ()=> {
                constArray[5].style.display = 'flex';

                const handleTransitionEnd = (event) => {
                    if (event.propertyName === 'opacity' || event.propertyName === 'left') {
                        constArray[5].removeEventListener('transitioned', handleTransitionEnd);
                        console.log("Menu Oculto Iniciado e Visível")
                    }
                }

                constArray[5].addEventListener('transitionend', handleTransitionEnd);

                //Inicia a transição para tornar a tela visível
                setTimeout(() => {
                    constArray[5].style.opacity = '1';
                    constArray[5].style.left = '0';
                }, 1);
            })
        }

        //Evento click BTN CLOSE MENU OCULTO
        if (constArray[7]) {
            constArray[7].addEventListener('click', async () => {
                const statusOff = await closeHideMenu(constArray, 300);
                console.log(statusOff, "Botão Close Menu");
            })
        }


        //Capturando click botão HOME menu oculto - OK
        if (constArray[8]) {
            constArray[8].addEventListener("click", async function(event) {

                //Capturando data-link
                let nameID = constArray[8].dataset.link;
                const statusOperations = await startOperations(nameID, 5, constArray);
                console.log(statusOperations)
            })
        } 

        //Capturando click botão HISTORICO menu oculto - OK
        if (constArray[9]) {
            constArray[9].addEventListener("click", async function(event) {

                //Capturando data-link
                let nameID = constArray[9].dataset.link;
                const statusOperations = await startOperations(nameID, 5, constArray);
                console.log(statusOperations)
            })
        } 

        //Evento click botão BLOG menu oculto
        if (constArray[10]) {
            constArray[10].addEventListener("click", async function() {

                //Capturando data-link
                let nameID = constArray[16].dataset.link;
                const statusOperations = await openBlankPage(nameID);
                console.log(statusOperations);
            })
        }

        //Capturando click botão CONTATO menu oculto - OK
        if (constArray[11]) {
            constArray[11].addEventListener("click", async function(event) {

                //Capturando data-link
                let nameID = constArray[11].dataset.link;
                const statusOperations = await startOperations(nameID, 5, constArray);
                console.log(statusOperations)
            })
        }

        //Capturando click botão HOME footer - OK
        if (constArray[14]) {
            constArray[14].addEventListener("click", async function(event) {

                //Capturando data-link
                let nameID = constArray[14].dataset.link;
                const statusOperations = await startOperations(nameID, 13, constArray);
                console.log(statusOperations);
            })
        } 

        //Capturando click botão HISTORICO footer - OK
        if (constArray[15]) {
            constArray[15].addEventListener("click", async function(event) {

                //Capturando data-link
                let nameID = constArray[15].dataset.link;
                const statusOperations = await startOperations(nameID, 13, constArray);
                console.log(statusOperations);
            })
        } 

        //Evento click botão BLOG footer
        if (constArray[16]) {
            constArray[16].addEventListener("click", async function() {

                //Capturando data-link
                let nameID = constArray[16].dataset.link;
                const statusOperations = await openBlankPage(nameID);
                console.log(statusOperations);
            })
        }

        //Capturando click botão CONTATO footer - OK
        if (constArray[17]) {
            constArray[17].addEventListener("click", async function(event) {

                //Capturando data-link
                let nameID = constArray[17].dataset.link;
                const statusOperations = await startOperations(nameID, 13, constArray);
                console.log(statusOperations);
            })
        } 

        //Evento click botão POLÍTICA footer
        if (constArray[19]) {
            constArray[19].addEventListener("click", async function(event) {

                //Capturando data-link
                let nameID = constArray[19].dataset.link;
                const statusOperations = await startOperations(nameID, 13, constArray);
                console.log(statusOperations);
            })
        }


        //Evento ancora link SITES footer
        if(constArray[21]) {
            constArray[21].addEventListener("click", async function(event) {

                const paginaState = window.history.state;
                if(paginaState && paginaState.Page !== "home") {

                    //Capturando data-link HOME
                    let nameID = constArray[1].dataset.link;
                    const statusOperations = await startOperations(nameID, 20, constArray);
                    console.log(statusOperations)
                }

                let topicScroll = constArray[21].dataset.link;
                const statusScroll = await scrollScreenTopic(topicScroll);
                console.log(statusScroll);
                
            })
        }

        //Evento ancora link CLIENTES footer
        if(constArray[22]) {
            constArray[22].addEventListener("click", async function(event) {

                const paginaState = window.history.state;
                if(paginaState && paginaState.Page !== "home") {

                    //Capturando data-link HOME
                    let nameID = constArray[1].dataset.link;
                    const statusOperations = await startOperations(nameID, 20, constArray);
                    console.log(statusOperations)
                }

                let topicScroll = constArray[22].dataset.link;
                const statusScroll = await scrollScreenTopic(topicScroll);
                console.log(statusScroll);
                
            })
        }

        //Evento ancora link CLIENTES footer
        if(constArray[23]) {
            constArray[23].addEventListener("click", async function(event) {

                const paginaState = window.history.state;
                if(paginaState && paginaState.Page !== "home") {

                    //Capturando data-link HOME
                    let nameID = constArray[1].dataset.link;
                    const statusOperations = await startOperations(nameID, 20, constArray);
                    console.log(statusOperations)
                }

                let topicScroll = constArray[23].dataset.link;
                const statusScroll = await scrollScreenTopic(topicScroll);
                console.log(statusScroll);
                
            })
        }

        //Evento ancora link Sobre mim footer
        if(constArray[24]) {
            constArray[24].addEventListener("click", async function(event) {

                const paginaState = window.history.state;
                if(paginaState && paginaState.Page !== "home") {

                    //Capturando data-link HOME
                    let nameID = constArray[1].dataset.link;
                    const statusOperations = await startOperations(nameID, 20, constArray);
                    console.log(statusOperations)
                }

                let topicScroll = constArray[24].dataset.link;
                const statusScroll = await scrollScreenTopic(topicScroll);
                console.log(statusScroll);
                
            })
        }

        window.addEventListener('popstate', (event) => {
            window.location.reload();
            // console.log('Evento popstate disparado:', event);
            // if (event.state && event.state.iframePage) {
            //     const pagina = event.state.iframePage;
            //     console.log('Voltando para o estado:', pagina);
            //     atualizarCSS(pagina);
            //     // O iframe já voltou para o conteúdo anterior automaticamente
            // } else {
            //     atualizarCSS('home');
            // }
            window.location.reload();
        });

    });

})()