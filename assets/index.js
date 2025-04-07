//Function IIFE DOM Document
(function(win, doc){
    'use strict';

    console.log("Iniciando JavaScript")

    //Função para fechar MENU OCULTO
    async function closeHideMenu(listConst) {
        return new Promise((resolve) => {
            listConst[0].style.opacity = '0';
            listConst[0].style.right = (listConst[0].offsetWidth * -1) + "px";

            setTimeout(()=> {
                listConst[2].style.display = "block";
            }, 100)
            let statusMenuOculto = "Menu Oculto foi fechado!";
            resolve(statusMenuOculto);
        });
    }

    async function alteraAlturaIframe() {
        return new Promise((resolve) => {
            let iframe = document.querySelector(".iframe");
            let iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
            console.log(iframeDocument, "ajustando altura")
            try {
                if (iframe && iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.body) {
                    iframe.style.height = iframe.contentWindow.document.body.clientHeight + "px";

                    console.log(iframe, "ajustando altura");
                    console.count("Altura do iFrame ajustada: ");
                    console.log("\n");
                    window.scrollTo(0, 0);
                    resolve(iframeDocument);
                }
            } catch (error) {
                console.log("Erro ao acessar conteúdo do iframe!", error);
            }
            
        })
        
    }

    async function atualizaIframe(path) {
        return new Promise((resolve) => {
            let iframe = document.querySelector(".iframe");
            iframe.src = path;
            console.log(iframe.src);
            if (iframe) {
                iframe.onload = function(){
                    console.count("iFrame foi atualizado: ");
                    resolve();
                }
            }
        })
    }

    //Script para aba HOME!
    async function abaHome(listConst) {
        return new Promise((resolve) => {

            //CSS Changes menu oculto
            listConst[4].style.color = "#d2aa70"; //Link Home
            listConst[5].style.color = "white"; //Link Transfer
            listConst[6].style.color = "white"; //Link Viagem
            listConst[7].style.color = "white"; //Link Pacotes
            listConst[8].style.color = "white"; //Link Passagens
            listConst[9].style.color = "white"; //Link Sobre
            listConst[10].style.color = "white"; //Link Agendamento

            //CSS Changes nav bar
            listConst[11].style.color = "#d2aa70"; //Home
            listConst[12].style.color = "white"; //Sobre
            listConst[13].style.color = "white"; //Agendamento

            //CSS Changes drop down menu
            listConst[14].style.background = "white"; //Transfer Aeroporto
            listConst[14].style.color = "#05243a"; //Transfer Aeroporto
            listConst[15].style.background = "white"; //Viagem Executiva
            listConst[15].style.color = "#05243a"; //Viagem Executiva
            listConst[16].style.background = "white"; //Pacotes Turísticos
            listConst[16].style.color = "#05243a"; //Pacotes Turísticos
            listConst[17].style.background = "white"; //Passagens Aéreas
            listConst[17].style.color = "#05243a"; //Passagens Aéreas

            //CSS changes footer menu
            listConst[19].style.color = "#d2aa70"; //Home
            listConst[20].style.color = "white"; //Sobre
            listConst[21].style.color = "white"; //Agendamento

            //CSS Changes footer serviços
            listConst[22].style.color = "white"; //Transfer
            listConst[23].style.color = "white"; //Viagens
            listConst[24].style.color = "white"; //Pacotes
            listConst[25].style.color = "white"; //Passagens

            //CSS Changes footer política
            listConst[26].style.color = "white";

            let statusText = "Propriedades HOME atualizadas!"
            resolve(statusText);
        })
    }

    //Script para aba SOBRE!
    async function abaSobre(listConst) {
        return new Promise((resolve) => {

            //CSS Changes menu oculto
            listConst[4].style.color = "white"; //Link Home
            listConst[5].style.color = "white"; //Link Transfer
            listConst[6].style.color = "white"; //Link Viagem
            listConst[7].style.color = "white"; //Link Pacotes
            listConst[8].style.color = "white"; //Link Passagens
            listConst[9].style.color = "#d2aa70"; //Link Sobre
            listConst[10].style.color = "white"; //Link Agendamento

            //CSS Changes nav bar
            listConst[11].style.color = "white"; //Link Home
            listConst[12].style.color = "#d2aa70"; //Link Sobre
            listConst[13].style.color = "white"; //Link Agendamento

            //CSS Changes drop down menu
            listConst[14].style.background = "white"; //Transfer Aeroporto
            listConst[14].style.color = "#05243a"; //Transfer Aeroporto
            listConst[15].style.background = "white"; //Viagem Executiva
            listConst[15].style.color = "#05243a"; //Viagem Executiva
            listConst[16].style.background = "white"; //Pacotes Turísticos
            listConst[16].style.color = "#05243a"; //Pacotes Turísticos
            listConst[17].style.background = "white"; //Passagens Aéreas
            listConst[17].style.color = "#05243a"; //Passagens Aéreas

            //CSS changes footer menu
            listConst[19].style.color = "white"; //Home
            listConst[20].style.color = "#d2aa70"; //Sobre
            listConst[21].style.color = "white"; //Agendamento

            //CSS Changes footer serviços
            listConst[22].style.color = "white"; //Transfer
            listConst[23].style.color = "white"; //Viagens
            listConst[24].style.color = "white"; //Pacotes
            listConst[25].style.color = "white"; //Passagens

            //CSS Changes footer política
            listConst[26].style.color = "white";
            let statusText = "Propriedades SOBRE atualizadas!"
            resolve(statusText);
        })
    }

    //Script para aba AGENDAMENTO!
    async function abaAgen(listConst) {
        return new Promise((resolve) => {

            //CSS Changes menu oculto
            listConst[4].style.color = "white"; //Link Home
            listConst[5].style.color = "white"; //Link Transfer
            listConst[6].style.color = "white"; //Link Viagem
            listConst[7].style.color = "white"; //Link Pacotes
            listConst[8].style.color = "white"; //Link Passagens
            listConst[9].style.color = "white"; //Link Sobre
            listConst[10].style.color = "#d2aa70"; //Link Agendamento

            //CSS Changes nav bar
            listConst[11].style.color = "white"; //Link Home
            listConst[12].style.color = "white"; //Link Sobre
            listConst[13].style.color = "#d2aa70"; //Link Agendamento

            //CSS Changes drop down menu
            listConst[14].style.background = "white"; //Transfer Aeroporto
            listConst[14].style.color = "#05243a"; //Transfer Aeroporto
            listConst[15].style.background = "white"; //Viagem Executiva
            listConst[15].style.color = "#05243a"; //Viagem Executiva
            listConst[16].style.background = "white"; //Pacotes Turísticos
            listConst[16].style.color = "#05243a"; //Pacotes Turísticos
            listConst[17].style.background = "white"; //Passagens Aéreas
            listConst[17].style.color = "#05243a"; //Passagens Aéreas

            //CSS changes footer menu
            listConst[19].style.color = "white"; //Home
            listConst[20].style.color = "white"; //Sobre
            listConst[21].style.color = "#d2aa70"; //Agendamento

            //CSS Changes footer serviços
            listConst[22].style.color = "white"; //Transfer
            listConst[23].style.color = "white"; //Viagens
            listConst[24].style.color = "white"; //Pacotes
            listConst[25].style.color = "white"; //Passagens

            //CSS Changes footer política
            listConst[26].style.color = "white";
            let statusText = "Propriedades AGENDAMENTO atualizadas!"
            resolve(statusText);
        })
    }

    //Script para aba TRANSFER AEROPORTO!
    async function abaTrans(listConst) {
        return new Promise((resolve) => {

            //CSS Changes menu oculto
            listConst[4].style.color = "white"; //Link Home
            listConst[5].style.color = "#d2aa70"; //Link Transfer
            listConst[6].style.color = "white"; //Link Viagem
            listConst[7].style.color = "white"; //Link Pacotes
            listConst[8].style.color = "white"; //Link Passagens
            listConst[9].style.color = "white"; //Link Sobre
            listConst[10].style.color = "white"; //Link Agendamento

            //CSS Changes nav bar
            listConst[11].style.color = "white"; //Link Home
            listConst[12].style.color = "white"; //Link Sobre
            listConst[13].style.color = "white"; //Link Agendamento

            //CSS Changes drop down menu
            listConst[14].style.background = "#05243a"; //Transfer Aeroporto
            listConst[14].style.color = "#d2aa70"; //Transfer Aeroporto
            listConst[15].style.background = "white"; //Viagem Executiva
            listConst[15].style.color = "#05243a"; //Viagem Executiva
            listConst[16].style.background = "white"; //Pacotes Turísticos
            listConst[16].style.color = "#05243a"; //Pacotes Turísticos
            listConst[17].style.background = "white"; //Passagens Aéreas
            listConst[17].style.color = "#05243a"; //Passagens Aéreas

            //CSS changes footer menu
            listConst[19].style.color = "white"; //Home
            listConst[20].style.color = "white"; //Sobre
            listConst[21].style.color = "white"; //Agendamento

            //CSS Changes footer serviços
            listConst[22].style.color = "#d2aa70"; //Transfer
            listConst[23].style.color = "white"; //Viagens
            listConst[24].style.color = "white"; //Pacotes
            listConst[25].style.color = "white"; //Passagens

            //CSS Changes footer política
            listConst[26].style.color = "white";

            let statusText = "Propriedades TRANSFER atualizadas!"
            resolve(statusText);
        })

    }

    //Script para aba VIAGENS EXECUTIVAS!
    async function abaViag(listConst) {
        return new Promise((resolve) => {

            //CSS Changes menu oculto
            listConst[4].style.color = "white"; //Link Home
            listConst[5].style.color = "white"; //Link Transfer
            listConst[6].style.color = "#d2aa70"; //Link Viagem
            listConst[7].style.color = "white"; //Link Pacotes
            listConst[8].style.color = "white"; //Link Passagens
            listConst[9].style.color = "white"; //Link Sobre
            listConst[10].style.color = "white"; //Link Agendamento

            //CSS Changes nav bar
            listConst[11].style.color = "white"; //Link Home
            listConst[12].style.color = "white"; //Link Sobre
            listConst[13].style.color = "white"; //Link Agendamento

            //CSS Changes drop down menu
            listConst[14].style.background = "white"; //Transfer Aeroporto
            listConst[14].style.color = "#05243a"; //Transfer Aeroporto
            listConst[15].style.background = "#05243a"; //Viagem Executiva
            listConst[15].style.color = "#d2aa70"; //Viagem Executiva
            listConst[16].style.background = "white"; //Pacotes Turísticos
            listConst[16].style.color = "#05243a"; //Pacotes Turísticos
            listConst[17].style.background = "white"; //Passagens Aéreas
            listConst[17].style.color = "#05243a"; //Passagens Aéreas

            //CSS changes footer menu
            listConst[19].style.color = "white"; //Home
            listConst[20].style.color = "white"; //Sobre
            listConst[21].style.color = "white"; //Agendamento

            //CSS Changes footer serviços
            listConst[22].style.color = "white"; //Transfer
            listConst[23].style.color = "#d2aa70"; //Viagens
            listConst[24].style.color = "white"; //Pacotes
            listConst[25].style.color = "white"; //Passagens

            //CSS Changes footer política
            listConst[26].style.color = "white";

            let statusText = "Propriedades VIAGENS atualizadas!"
            resolve(statusText);
        })

    }

    //Script para aba PACOTES TURÍSTICOS!
    async function abaPaco(listConst) {
        return new Promise((resolve) => {

            //CSS Changes menu oculto
            listConst[4].style.color = "white"; //Link Home
            listConst[5].style.color = "white"; //Link Transfer
            listConst[6].style.color = "white"; //Link Viagem
            listConst[7].style.color = "#d2aa70"; //Link Pacotes
            listConst[8].style.color = "white"; //Link Passagens
            listConst[9].style.color = "white"; //Link Sobre
            listConst[10].style.color = "white"; //Link Agendamento

            //CSS Changes nav bar
            listConst[11].style.color = "white"; //Link Home
            listConst[12].style.color = "white"; //Link Sobre
            listConst[13].style.color = "white"; //Link Agendamento

            //CSS Changes drop down menu
            listConst[14].style.background = "white"; //Transfer Aeroporto
            listConst[14].style.color = "#05243a"; //Transfer Aeroporto
            listConst[15].style.background = "white"; //Viagem Executiva
            listConst[15].style.color = "#05243a"; //Viagem Executiva
            listConst[16].style.background = "#05243a"; //Pacotes Turísticos
            listConst[16].style.color = "#d2aa70"; //Pacotes Turísticos
            listConst[17].style.background = "white"; //Passagens Aéreas
            listConst[17].style.color = "#05243a"; //Passagens Aéreas

            //CSS changes footer menu
            listConst[19].style.color = "white"; //Home
            listConst[20].style.color = "white"; //Sobre
            listConst[21].style.color = "white"; //Agendamento

            //CSS Changes footer serviços
            listConst[22].style.color = "white"; //Transfer
            listConst[23].style.color = "white"; //Viagens
            listConst[24].style.color = "#d2aa70"; //Pacotes
            listConst[25].style.color = "white"; //Passagens

            //CSS Changes footer política
            listConst[26].style.color = "white";

            let statusText = "Propriedades PACOTES atualizadas!"
            resolve(statusText);
        })

    }

    //Script para aba PASSAGENS AÉREAS!
    async function abaPass(listConst) {
        return new Promise((resolve) => {

            //CSS Changes menu oculto
            listConst[4].style.color = "white"; //Link Home
            listConst[5].style.color = "white"; //Link Transfer
            listConst[6].style.color = "white"; //Link Viagem
            listConst[7].style.color = "white"; //Link Pacotes
            listConst[8].style.color = "#d2aa70"; //Link Passagens
            listConst[9].style.color = "white"; //Link Sobre
            listConst[10].style.color = "white"; //Link Agendamento

            //CSS Changes nav bar
            listConst[11].style.color = "white"; //Link Home
            listConst[12].style.color = "white"; //Link Sobre
            listConst[13].style.color = "white"; //Link Agendamento

            //CSS Changes drop down menu
            listConst[14].style.background = "white"; //Transfer Aeroporto
            listConst[14].style.color = "#05243a"; //Transfer Aeroporto
            listConst[15].style.background = "white"; //Viagem Executiva
            listConst[15].style.color = "#05243a"; //Viagem Executiva
            listConst[16].style.background = "white"; //Pacotes Turísticos
            listConst[16].style.color = "#05243a"; //Pacotes Turísticos
            listConst[17].style.background = "#05243a"; //Passagens Aéreas
            listConst[17].style.color = "#d2aa70"; //Passagens Aéreas

            //CSS changes footer menu
            listConst[19].style.color = "white"; //Home
            listConst[20].style.color = "white"; //Sobre
            listConst[21].style.color = "white"; //Agendamento

            //CSS Changes footer serviços
            listConst[22].style.color = "white"; //Transfer
            listConst[23].style.color = "white"; //Viagens
            listConst[24].style.color = "white"; //Pacotes
            listConst[25].style.color = "#d2aa70"; //Passagens

            //CSS Changes footer política
            listConst[26].style.color = "white";

            let statusText = "Propriedades PASSAGENS atualizadas!"
            resolve(statusText);
        })

    }

    //Script para aba POLÍTICA!
    async function abaPol(listConst) {
        return new Promise((resolve) => {

            //CSS Changes menu oculto
            listConst[4].style.color = "white"; //Link Home
            listConst[5].style.color = "white"; //Link Transfer
            listConst[6].style.color = "white"; //Link Viagem
            listConst[7].style.color = "white"; //Link Pacotes
            listConst[8].style.color = "white"; //Link Passagens
            listConst[9].style.color = "white"; //Link Sobre
            listConst[10].style.color = "white"; //Link Agendamento

            //CSS Changes nav bar
            listConst[11].style.color = "white"; //Link Home
            listConst[12].style.color = "white"; //Link Sobre
            listConst[13].style.color = "white"; //Link Agendamento

            //CSS Changes drop down menu
            listConst[14].style.background = "white"; //Transfer Aeroporto
            listConst[14].style.color = "#05243a"; //Transfer Aeroporto
            listConst[15].style.background = "white"; //Viagem Executiva
            listConst[15].style.color = "#05243a"; //Viagem Executiva
            listConst[16].style.background = "white"; //Pacotes Turísticos
            listConst[16].style.color = "#05243a"; //Pacotes Turísticos
            listConst[17].style.background = "white"; //Passagens Aéreas
            listConst[17].style.color = "#05243a"; //Passagens Aéreas

            //CSS changes footer menu
            listConst[19].style.color = "white"; //Home
            listConst[20].style.color = "white"; //Sobre
            listConst[21].style.color = "white"; //Agendamento

            //CSS Changes footer serviços
            listConst[22].style.color = "white"; //Transfer
            listConst[23].style.color = "white"; //Viagens
            listConst[24].style.color = "white"; //Pacotes
            listConst[25].style.color = "white"; //Passagens

            //CSS Changes footer política
            listConst[26].style.color = "#d2aa70";

            let statusText = "Propriedades POLÍTICA atualizadas!"
            resolve(statusText);
        })

    }
    
    window.addEventListener("load", function() {

        //Capturando largura da tela!!!
        const larguraScreen = screen.width;
        console.log("Width Screen Start:", larguraScreen, "px");
        //console.clear();
        alteraAlturaIframe().then((x) => {

            //Declarando constantes de ambiente!!!
            let constArray = [];

            //Capturando obj navbar & menu oculto!!
            let navMenuOculto = document.querySelector(".menu-oculto");
            let navbarMenus = document.querySelector(".navbar");

            //Capturando obj btn open & close menu
            let btnOpenMenu = document.querySelector(".open-menu");
            let btnCloseMenu = document.querySelector(".close-menu");

            //Capturando links menu oculto
            let linkHomeOculto = document.querySelector("#menu-oculto-home");
            let linkTransOculto = document.querySelector("#menu-oculto-trans");
            let linkViagOculto = document.querySelector("#menu-oculto-viagens");
            let linkPacoOculto = document.querySelector("#menu-oculto-pacotes");
            let linkPassOculto = document.querySelector("#menu-oculto-passagens");
            let linkSobreOculto = document.querySelector("#menu-oculto-sobre");
            let linkAgenOculto = document.querySelector("#menu-oculto-agen");

            //Capturando links menu navbar
            let nav_home = document.querySelector("#navbar-home");
            let nav_sobre = document.querySelector("#navbar-sobre");
            let nav_agen = document.querySelector("#navbar-agen");

            //Capturando links menu flutuante navbar
            let ser_trans = document.querySelector("#dropdown-transfer");
            let ser_viag = document.querySelector("#dropdown-viagem");
            let ser_paco = document.querySelector("#dropdown-pacotes");
            let ser_pass = document.querySelector("#dropdown-passagens");     

            //Capturando link botão ação header
            let btnHeaderAction = document.querySelector(".header-btn-ação");

            //Capturando LINKS footer!!!
            let fotHome = document.querySelector("#ft-home");
            let fotSobre = document.querySelector("#ft-sobre");
            let fotAgen = document.querySelector("#ft-agen");
            let fotTrans = document.querySelector("#ft-trans");
            let fotViagem = document.querySelector("#ft-viag");
            let fotPaco = document.querySelector("#ft-pacotes");
            let fotPass = document.querySelector("#ft-passagens");
            let fotPol = document.querySelector("#ft-política");

            //Definindo varArray e inserindo variáveis de ambiente!
            constArray.push(navMenuOculto, navbarMenus, btnOpenMenu, btnCloseMenu,linkHomeOculto, linkTransOculto, linkViagOculto, linkPacoOculto, linkPassOculto, linkSobreOculto, linkAgenOculto, nav_home, nav_sobre, nav_agen, ser_trans, ser_viag, ser_paco, ser_pass, btnHeaderAction, fotHome, fotSobre, fotAgen, fotTrans, fotViagem, fotPaco, fotPass, fotPol);

            //Processando Array Vars e exibindo lista
            //for(let i = 0; i < varArray.length; i++) {
                //console.log(i, varArray[i]);
            //}

            console.log("A página foi completamente carregada."); 

            //Capturando click BTN OPEN MENU - MENU OCULTO
            if (btnOpenMenu) {
                btnOpenMenu.addEventListener('click', ()=> {
                    navMenuOculto.style.display = "flex";
                    navMenuOculto.style.right = (navMenuOculto.offsetWidth * -1) + "px";

                    setTimeout(()=> {
                        navMenuOculto.style.opacity = '1';
                        navMenuOculto.style.right = '0';
                    }, 100)
                    console.log("Menu Oculto foi acionado!")
                })
            }

            //Capturando click BTN CLOSE MENU - MENU OCULTO
            if (btnCloseMenu) {
                btnCloseMenu.addEventListener('click', ()=> {
                    closeHideMenu(constArray).then((statusResult) => {
                        console.log(statusResult, "Botão Close Menu");
                    })
                })
            }



            //Capturando click botão HOME menu oculto - OK
            if (linkHomeOculto) {
                linkHomeOculto.addEventListener("click", function() {
                    console.clear();
                    let SRCiframe = "../assets/home.html";

                    //Atualizando Documentação iframe
                    atualizaIframe(SRCiframe).then(()=> {
                        console.log("Continuando processo HOME menu oculto!")

                        //Atualizando estilos CSS
                        abaHome(constArray).then((statusResult) => {
                            console.log(statusResult)

                            //Atualizando altura iframe
                            alteraAlturaIframe().then((x) => {

                                //Evento click botão AÇÃO MAIN home.html
                                let btnMainAction = x.querySelector(".main-btn");
                                if (btnMainAction) {
                                    btnMainAction.addEventListener("click", function() {
                                        //window.alert("Botão AÇÃO MAIN foi acionado!")
                                        window.open("https://wa.me/5541991495750", "_blank");
                                    })
                                }

                                //Evento click link Transfer Principais Serviços home.html
                                let linkTransFrame = x.querySelector(".ps-container-frame-link-01");
                                if (linkTransFrame) {
                                    linkTransFrame.addEventListener("click", function() {
                                        console.clear();
                                        let SRCiframe = "../assets/transfer-aeroporto.html";

                                        //Atualizando Documentação iFrame
                                        atualizaIframe(SRCiframe).then(()=> {
                                        console.log("Continuando processo Transfer Frame!")

                                            //Atualizando stilos CSS
                                            abaTrans(constArray).then((statusResult)=> {
                                                console.log(statusResult);

                                                //Atualizando altura do iFrame
                                                alteraAlturaIframe().then((x) => {
                                
                                                    //Capturando objetos específicos
                                                    let btnTransAction = x.querySelector(".ta-btn");
                                                    if (btnTransAction) {
                                                        btnTransAction.addEventListener("click", function() {
                                                            //window.alert("Botão AÇÃO TRANSFER foi acionado!")
                                                            window.open("https://tinyurl.com/5bctdz3d", "_blank");
                                                        })
                                                    }
                                                    console.log("Configs TRANSFER por Frame tudo pronto!");
                                                })
                                            })  
                                        })
                                    })
                                }  

                                //Evento click link VIAGENS Principais Serviços home.html
                                let linkViagFrame = x.querySelector(".ps-container-frame-link-02");
                                if (linkViagFrame) {
                                    linkViagFrame.addEventListener("click", function() {
                                        console.clear();
                                        let SRCiframe = "../assets/viagens-executivas.html";

                                        //Atualizando Documentação iFrame
                                        atualizaIframe(SRCiframe).then(()=> {
                                        console.log("Continuando processo Viagens Frame!")

                                            //Atualizando stilos CSS
                                            abaViag(constArray).then((statusResult)=> {
                                                console.log(statusResult);

                                                //Atualizando altura do iFrame
                                                alteraAlturaIframe().then((x) => {
                                
                                                    //Capturando objetos específicos
                                                    let btnViagAction = x.querySelector(".ve-btn");
                                                    if (btnViagAction) {
                                                        btnViagAction.addEventListener("click", function() {
                                                            //window.alert("Botão AÇÃO VIAGENS foi acionado!")
                                                            window.open("https://tinyurl.com/ycxys5h9", "_blank");
                                                        })
                                                    }
                                                    console.log("Configs VIAGENS por Frame tudo pronto!");
                                                })
                                            })  
                                        })
                                    })
                                } 

                                //Evento click link PACOTES Principais Serviços home.html
                                let linkPacoFrame = x.querySelector(".ps-container-frame-link-03");
                                if (linkPacoFrame) {
                                    linkPacoFrame.addEventListener("click", function() {
                                        console.clear();
                                        let SRCiframe = "../assets/pacotes-turisticos.html";

                                        //Atualizando Documentação iFrame
                                        atualizaIframe(SRCiframe).then(()=> {
                                            console.log("Continuando processo PACOTES Frame!")

                                            //Atualizando stilos CSS
                                            abaPaco(constArray).then((statusResult)=> {
                                                console.log(statusResult);

                                                //Atualizando altura do iFrame
                                                alteraAlturaIframe().then((x) => {
                        
                                                    //Capturando objetos específicos
                                                    let btnPaco01Action = x.querySelector(".pt-btn-01");
                                                    if (btnPaco01Action) {
                                                        btnPaco01Action.addEventListener("click", function() {
                                                            //window.alert("Botão AÇÃO PACOTES 01 foi acionado!")
                                                            window.open("https://tinyurl.com/2w93hprv", "_blank");
                                                        })
                                                    }

                                                    let btnPaco02Action = x.querySelector(".pt-btn-02");
                                                    if (btnPaco02Action) {
                                                        btnPaco02Action.addEventListener("click", function() {
                                                            //window.alert("Botão AÇÃO PACOTES 02 foi acionado!")
                                                            window.open("https://tinyurl.com/yz29jc83", "_blank");
                                                        })
                                                    }

                                                    let btnPaco03Action = x.querySelector(".pt-btn-03");
                                                    if (btnPaco03Action) {
                                                        btnPaco03Action.addEventListener("click", function() {
                                                            //window.alert("Botão AÇÃO PACOTES 03 foi acionado!")
                                                            window.open("https://tinyurl.com/szd84cmt", "_blank");
                                                        })
                                                    }
                                                    console.log("Configs PACOTES por Frame tudo pronto!");
                                                })
                                            })  
                                        })
                                    })
                                } 

                                //Evento click link PASSAGENS Principais Serviços home.html
                                let linkPassFrame = x.querySelector(".ps-container-frame-link-04");
                                if (linkPassFrame) {
                                    linkPassFrame.addEventListener("click", function() {
                                        console.clear();
                                        let SRCiframe = "../assets/passagens-aereas.html";

                                        //Atualizando Documentação iFrame
                                        atualizaIframe(SRCiframe).then(()=> {
                                            console.log("Continuando processo PASSAGENS Frame!")

                                            //Atualizando stilos CSS
                                            abaPass(constArray).then((statusResult)=> {
                                                console.log(statusResult);

                                                //Atualizando altura do iFrame
                                                alteraAlturaIframe().then((x) => {
                        
                                                    //Capturando objetos específicos
                                                    let btnPassAction = x.querySelector(".pa-btn");
                                                    if (btnPassAction) {
                                                        btnPassAction.addEventListener("click", function() {
                                                            //window.alert("Botão AÇÃO PASSAGENS foi acionado!")
                                                            window.open("https://tinyurl.com/4f446v7n", "_blank");
                                                        })
                                                    }
                                                    console.log("Configs PASSAGENS por Frame tudo pronto!");
                                                })
                                            })  
                                        })
                                    })
                                } 

                                //Evento click botão AÇÃO AGENDAMENTO home.html
                                let btnAgenAction = x.querySelector(".sa-btn");
                                if (btnAgenAction) {
                                    btnAgenAction.addEventListener("click", function() {
                                        //window.alert("Botão AÇÃO AGENDAMENTO foi acionado!")
                                        window.open("https://wa.me/5541991495750", "_blank");
                                    })
                                }

                                closeHideMenu(constArray).then((statusResult) => {
                                    console.log(statusResult, "Home");
                                    console.log("Configs HOME menu oculto pronto!")
                                })
                            })
                        })
                    })
                })
            }   
            
            //Capturando click botão SOBRE menu oculto - OK
            if (linkSobreOculto) {
                linkSobreOculto.addEventListener("click", function() {
                    console.clear();
                    let SRCiframe = "../assets/sobre.html";

                    //Atualizando Documentação iframe
                    atualizaIframe(SRCiframe).then(()=> {
                        console.log("Continuando processo SOBRE menu oculto!")

                        //Atualizando estilos CSS
                        abaSobre(constArray).then((statusResult) => {
                            console.log(statusResult)

                            //Atualizando altura iframe
                            alteraAlturaIframe().then((x) => {

                                //Evento click botão AÇÃO MAIN sobre.html
                                let btnSobreAction = x.querySelector(".am-btn");
                                if (btnSobreAction) {
                                    btnSobreAction.addEventListener("click", function() {
                                        //window.alert("Botão AÇÃO SOBRE foi acionado!")
                                        window.open("https://wa.me/5541991495750", "_blank");
                                    })
                                }

                                closeHideMenu(constArray).then((statusResult) => {
                                    console.log(statusResult, "Sobre");
                                    console.log("Configs SOBRE menu oculto pronto!")
                                })
                            })
                        })
                    })
                })
            } 

            //Capturando click botão AGENDAMENTO menu oculto - OK
            if (linkAgenOculto) {
                linkAgenOculto.addEventListener("click", function() {
                    console.clear();
                    let SRCiframe = "../assets/agendamento.html";

                    //Atualizando Documentação iframe
                    atualizaIframe(SRCiframe).then(()=> {
                        console.log("Continuando processo AGENDAMENTO menu oculto!")

                        //Atualizando estilos CSS
                        abaAgen(constArray).then((statusResult) => {
                            console.log(statusResult)

                            //Atualizando altura iframe
                            alteraAlturaIframe().then((x) => {

                                //Evento click botão AÇÃO MAIN agendamento.html
                                let btnAgenAction = x.querySelector(".sa-btn");
                                if (btnAgenAction) {
                                    btnAgenAction.addEventListener("click", function() {
                                        //window.alert("Botão AÇÃO AGENDAMENTO foi acionado!")
                                        window.open("https://wa.me/5541991495750", "_blank");
                                    })
                                }

                                closeHideMenu(constArray).then((statusResult) => {
                                    console.log(statusResult, "Agendamento");
                                    console.log("Configs AGENDAMENTO menu oculto pronto!")
                                })
                            })
                        })
                    })
                })
            } 

            //Capturando click botão TRANSFER menu oculto - OK
            if (linkTransOculto) {
                linkTransOculto.addEventListener("click", function() {
                    console.clear();
                    let SRCiframe = "../assets/transfer-aeroporto.html";

                    //Atualizando Documentação iframe
                    atualizaIframe(SRCiframe).then(()=> {
                        console.log("Continuando processo TRANSFER menu oculto!")

                        //Atualizando estilos CSS
                        abaTrans(constArray).then((statusResult) => {
                            console.log(statusResult)

                            //Atualizando altura iframe
                            alteraAlturaIframe().then((x) => {

                                //Evento click botão AÇÃO MAIN transfer-aeroporto.html
                                let btnTransAction = x.querySelector(".ta-btn");
                                if (btnTransAction) {
                                    btnTransAction.addEventListener("click", function() {
                                        //window.alert("Botão AÇÃO Transfer foi acionado!")
                                        window.open("https://tinyurl.com/5bctdz3d", "_blank");
                                    })
                                }

                                closeHideMenu(constArray).then((statusResult) => {
                                    console.log(statusResult, "Transfer");
                                    console.log("Configs TRANSFER menu oculto pronto!")
                                })
                            })
                        })
                    })
                })
            }  
            
            //Capturando click botão VIAGENS menu oculto - OK
            if (linkViagOculto) {
                linkViagOculto.addEventListener("click", function() {
                    console.clear();
                    let SRCiframe = "../assets/viagens-executivas.html";

                    //Atualizando Documentação iframe
                    atualizaIframe(SRCiframe).then(()=> {
                        console.log("Continuando processo VIAGENS menu oculto!")

                        //Atualizando estilos CSS
                        abaViag(constArray).then((statusResult) => {
                            console.log(statusResult)

                            //Atualizando altura iframe
                            alteraAlturaIframe().then((x) => {

                                //Evento click botão AÇÃO MAIN viagens-executivas.html
                                let btnViagAction = x.querySelector(".ve-btn");
                                if (btnViagAction) {
                                    btnViagAction.addEventListener("click", function() {
                                        //window.alert("Botão AÇÃO Viagens foi acionado!")
                                        window.open("https://tinyurl.com/ycxys5h9", "_blank");
                                    })
                                }

                                closeHideMenu(constArray).then((statusResult) => {
                                    console.log(statusResult, "Viagens");
                                    console.log("Configs VIAGENS menu oculto pronto!")
                                })
                            })
                        })
                    })
                })
            } 

            //Capturando click botão PACOTES menu oculto - OK
            if (linkPacoOculto) {
                linkPacoOculto.addEventListener("click", function() {
                    console.clear();
                    let SRCiframe = "../assets/pacotes-turisticos.html";

                    //Atualizando Documentação iframe
                    atualizaIframe(SRCiframe).then(()=> {
                        console.log("Continuando processo PACOTES menu oculto!")

                        //Atualizando estilos CSS
                        abaPaco(constArray).then((statusResult) => {
                            console.log(statusResult)

                            //Atualizando altura iframe
                            alteraAlturaIframe().then((x) => {

                                //Evento click botão AÇÃO MAIN pacotes-turísticos.html
                                let btnPaco01Action = x.querySelector(".pt-btn-01");
                                if (btnPaco01Action) {
                                    btnPaco01Action.addEventListener("click", function() {
                                        //window.alert("Botão AÇÃO PACOTES 01 foi acionado!")
                                        window.open("https://tinyurl.com/2w93hprv", "_blank");
                                    })
                                }

                                let btnPaco02Action = x.querySelector(".pt-btn-02");
                                if (btnPaco02Action) {
                                    btnPaco02Action.addEventListener("click", function() {
                                        //window.alert("Botão AÇÃO PACOTES 02 foi acionado!")
                                        window.open("https://tinyurl.com/yz29jc83", "_blank");
                                    })
                                }

                                let btnPaco03Action = x.querySelector(".pt-btn-03");
                                if (btnPaco03Action) {
                                    btnPaco03Action.addEventListener("click", function() {
                                        //window.alert("Botão AÇÃO PACOTES 03 foi acionado!")
                                        window.open("https://tinyurl.com/szd84cmt", "_blank");
                                    })
                                }

                                closeHideMenu(constArray).then((statusResult) => {
                                    console.log(statusResult, "Pacotes");
                                    console.log("Configs PACOTES menu oculto pronto!")
                                })
                            })
                        })
                    })
                })
            } 

            //Capturando click botão PASSAGENS menu oculto - OK
            if (linkPassOculto) {
                linkPassOculto.addEventListener("click", function() {
                    console.clear();
                    let SRCiframe = "../assets/passagens-aereas.html";

                    //Atualizando Documentação iframe
                    atualizaIframe(SRCiframe).then(()=> {
                        console.log("Continuando processo PASSAGENS menu oculto!")

                        //Atualizando estilos CSS
                        abaPass(constArray).then((statusResult) => {
                            console.log(statusResult)

                            //Atualizando altura iframe
                            alteraAlturaIframe().then((x) => {

                                //Evento click botão AÇÃO MAIN passagens-aereas.html
                                let btnPassAction = x.querySelector(".pa-btn");
                                if (btnPassAction) {
                                    btnPassAction.addEventListener("click", function() {
                                        //window.alert("Botão AÇÃO PASSAGENS foi acionado!")
                                        window.open("https://tinyurl.com/4f446v7n", "_blank");
                                    })
                                }

                                closeHideMenu(constArray).then((statusResult) => {
                                    console.log(statusResult, "Passagens");
                                    console.log("Configs PASSAGENS menu oculto pronto!")
                                })
                            })
                        })
                    })
                })
            } 



            //Evento click botão HOME nav bar - OK
            if (nav_home) {
                nav_home.addEventListener("click", function() {
                    console.clear();
                    let SRCiframe = "../assets/home.html";

                    //Atualizando Documentação iframe
                    atualizaIframe(SRCiframe).then(()=> {
                        console.log("Continuando processo HOME nav bar!")

                        //Atualizando estilos CSS
                        abaHome(constArray).then((statusResult) => {
                            console.log(statusResult);

                            //Atualizando altura iframe
                            alteraAlturaIframe().then((x) => {

                                //Evento click botão AÇÃO MAIN home.html
                                let btnMainAction = x.querySelector(".main-btn");
                                if (btnMainAction) {
                                    btnMainAction.addEventListener("click", function() {
                                        //window.alert("Botão AÇÃO MAIN foi acionado!")
                                        window.open("https://wa.me/5541991495750", "_blank");
                                    })
                                }

                                //Evento click link Transfer Principais Serviços home.html
                                let linkTransFrame = x.querySelector(".ps-container-frame-link-01");
                                if (linkTransFrame) {
                                    linkTransFrame.addEventListener("click", function() {
                                        console.clear();
                                        let SRCiframe = "../assets/transfer-aeroporto.html";

                                        //Atualizando Documentação iFrame
                                        atualizaIframe(SRCiframe).then(()=> {
                                        console.log("Continuando processo Transfer Frame!")

                                            //Atualizando stilos CSS
                                            abaTrans(constArray).then((statusResult)=> {
                                                console.log(statusResult);

                                                //Atualizando altura do iFrame
                                                alteraAlturaIframe().then((x) => {
                                
                                                    //Capturando objetos específicos
                                                    let btnTransAction = x.querySelector(".ta-btn");
                                                    if (btnTransAction) {
                                                        btnTransAction.addEventListener("click", function() {
                                                            //window.alert("Botão AÇÃO TRANSFER foi acionado!")
                                                            window.open("https://tinyurl.com/5bctdz3d", "_blank");
                                                        })
                                                    }
                                                    console.log("Configs TRANSFER por Frame tudo pronto!");
                                                })
                                            })  
                                        })
                                    })
                                }  

                                //Evento click link VIAGENS Principais Serviços home.html
                                let linkViagFrame = x.querySelector(".ps-container-frame-link-02");
                                if (linkViagFrame) {
                                    linkViagFrame.addEventListener("click", function() {
                                        console.clear();
                                        let SRCiframe = "../assets/viagens-executivas.html";

                                        //Atualizando Documentação iFrame
                                        atualizaIframe(SRCiframe).then(()=> {
                                        console.log("Continuando processo Transfer Frame!")

                                            //Atualizando stilos CSS
                                            abaViag(constArray).then((statusResult)=> {
                                                console.log(statusResult);

                                                //Atualizando altura do iFrame
                                                alteraAlturaIframe().then((x) => {
                                
                                                    //Capturando objetos específicos
                                                    let btnViagAction = x.querySelector(".ve-btn");
                                                    if (btnViagAction) {
                                                        btnViagAction.addEventListener("click", function() {
                                                            //window.alert("Botão AÇÃO VIAGENS foi acionado!")
                                                            window.open("https://tinyurl.com/ycxys5h9", "_blank");
                                                        })
                                                    }
                                                    console.log("Configs VIAGENS por Frame tudo pronto!");
                                                })
                                            })  
                                        })
                                    })
                                } 

                                //Evento click link PACOTES Principais Serviços home.html
                                let linkPacoFrame = x.querySelector(".ps-container-frame-link-03");
                                if (linkPacoFrame) {
                                    linkPacoFrame.addEventListener("click", function() {
                                        console.clear();
                                        let SRCiframe = "../assets/pacotes-turisticos.html";

                                        //Atualizando Documentação iFrame
                                        atualizaIframe(SRCiframe).then(()=> {
                                            console.log("Continuando processo PACOTES Frame!")

                                            //Atualizando stilos CSS
                                            abaPaco(constArray).then((statusResult)=> {
                                                console.log(statusResult);

                                                //Atualizando altura do iFrame
                                                alteraAlturaIframe().then((x) => {
                        
                                                    //Capturando objetos específicos
                                                    let btnPaco01Action = x.querySelector(".pt-btn-01");
                                                    if (btnPaco01Action) {
                                                        btnPaco01Action.addEventListener("click", function() {
                                                            //window.alert("Botão AÇÃO PACOTES 01 foi acionado!")
                                                            window.open("https://tinyurl.com/2w93hprv", "_blank");
                                                        })
                                                    }

                                                    let btnPaco02Action = x.querySelector(".pt-btn-02");
                                                    if (btnPaco02Action) {
                                                        btnPaco02Action.addEventListener("click", function() {
                                                            //window.alert("Botão AÇÃO PACOTES 02 foi acionado!")
                                                            window.open("https://tinyurl.com/yz29jc83", "_blank");
                                                        })
                                                    }

                                                    let btnPaco03Action = x.querySelector(".pt-btn-03");
                                                    if (btnPaco03Action) {
                                                        btnPaco03Action.addEventListener("click", function() {
                                                            //window.alert("Botão AÇÃO PACOTES 03 foi acionado!")
                                                            window.open("https://tinyurl.com/szd84cmt", "_blank");
                                                        })
                                                    }
                                                    console.log("Configs PACOTES por Frame tudo pronto!");
                                                })
                                            })  
                                        })
                                    })
                                } 

                                //Evento click link PASSAGENS Principais Serviços home.html
                                let linkPassFrame = x.querySelector(".ps-container-frame-link-04");
                                if (linkPassFrame) {
                                    linkPassFrame.addEventListener("click", function() {
                                        console.clear();
                                        let SRCiframe = "../assets/passagens-aereas.html";

                                        //Atualizando Documentação iFrame
                                        atualizaIframe(SRCiframe).then(()=> {
                                            console.log("Continuando processo PASSAGENS Frame!")

                                            //Atualizando stilos CSS
                                            abaPass(constArray).then((statusResult)=> {
                                                console.log(statusResult);

                                                //Atualizando altura do iFrame
                                                alteraAlturaIframe().then((x) => {
                        
                                                    //Capturando objetos específicos
                                                    let btnPassAction = x.querySelector(".pa-btn");
                                                    if (btnPassAction) {
                                                        btnPassAction.addEventListener("click", function() {
                                                            //window.alert("Botão AÇÃO PASSAGENS foi acionado!")
                                                            window.open("https://tinyurl.com/4f446v7n", "_blank");
                                                        })
                                                    }
                                                    console.log("Configs PASSAGENS por Frame tudo pronto!");
                                                })
                                            })  
                                        })
                                    })
                                } 

                                //Evento click botão AÇÃO AGENDAMENTO home.html
                                let btnAgenAction = x.querySelector(".sa-btn");
                                if (btnAgenAction) {
                                    btnAgenAction.addEventListener("click", function() {
                                        //window.alert("Botão AÇÃO AGENDAMENTO foi acionado!")
                                        window.open("https://wa.me/5541991495750", "_blank");
                                    })
                                }
                                console.log("Configs HOME nav bar pronto!")
                            })
                        })
                    })
                })
            }

            //Evento click botão SOBRE nav bar - OK
            if (nav_sobre) {
                nav_sobre.addEventListener("click", function() {
                    console.clear();
                    let SRCiframe = "../assets/sobre.html";

                    //Atualizando Documentação iFrame
                    atualizaIframe(SRCiframe).then(()=> {
                        console.log("Continuando processo SOBRE!")

                        //Atualizando stilos CSS
                        abaSobre(constArray).then((statusResult)=> {
                            console.log(statusResult);

                            //Atualizando altura do iFrame
                            alteraAlturaIframe().then((x) => {

                                //Capturando objetos específicos
                                let btnSobreAction = x.querySelector(".am-btn");
                                console.log("Botão SOBRE nav bar pronto!");
                                if (btnSobreAction) {
                                    btnSobreAction.addEventListener("click", function() {
                                        //window.alert("Botão AÇÃO SOBRE foi acionado!")
                                        window.open("https://wa.me/5541991495750", "_blank");
                                    })
                                }
                            })
                        })    
                    })
                })
            }

            //Evento click botão AGENDAMENTO nav bar - OK
            if (nav_agen) {
                nav_agen.addEventListener("click", function() {
                    console.clear();
                    let SRCiframe = "../assets/agendamento.html";

                    //Atualizando Documentação iFrame
                    atualizaIframe(SRCiframe).then(()=> {
                        console.log("Continuando processo AGENDAMENTO!")

                        //Atualizando stilos CSS
                        abaAgen(constArray).then((statusResult)=> {
                            console.log(statusResult);

                            //Atualizando altura do iFrame
                            alteraAlturaIframe().then((x) => {

                                //Capturando objetos específicos
                                let btnAgenAction = x.querySelector(".sa-btn");
                                if (btnAgenAction) {
                                    btnAgenAction.addEventListener("click", function() {
                                        //window.alert("Botão AÇÃO AGENDAMENTO foi acionado!")
                                        window.open("https://wa.me/5541991495750", "_blank");
                                    })
                                }
                                console.log("Configs AGENDAMENTO nav bar pronto!");
                            })
                        })    
                    })
                })
            }    
            
            //Evento click botão TRANSFER nav bar dropdown - OK
            if (ser_trans) {
                ser_trans.addEventListener("click", function() {
                    console.clear();
                    let SRCiframe = "../assets/transfer-aeroporto.html";

                    //Atualizando Documentação iFrame
                    atualizaIframe(SRCiframe).then(()=> {
                        console.log("Continuando processo TRANSFER drop down!")

                        //Atualizando stilos CSS
                        abaTrans(constArray).then((statusResult)=> {
                            console.log(statusResult);

                            //Atualizando altura do iFrame
                            alteraAlturaIframe().then((x) => {

                                //Capturando objetos específicos
                                let btnTransAction = x.querySelector(".ta-btn");
                                if (btnTransAction) {
                                    btnTransAction.addEventListener("click", function() {
                                        //window.alert("Botão AÇÃO TRANSFER foi acionado!")
                                        //window.open("https://tinyurl.com/5bctdz3d", "_blank");
                                        window.open("https://tinyurl.com/5bctdz3d", "_blank");
                                    })
                                }
                                console.log("Configs TRANSFER nav bar pronto!");
                            })
                        })    
                    })
                })
            } 

            //Evento click botão VIAGEM nav bar dropdown - OK
            if (ser_viag) {
                ser_viag.addEventListener("click", function() {
                    console.clear();
                    let SRCiframe = "../assets/viagens-executivas.html";

                    //Atualizando Documentação iFrame
                    atualizaIframe(SRCiframe).then(()=> {
                        console.log("Continuando processo VIAGENS drop down!")

                        //Atualizando stilos CSS
                        abaViag(constArray).then((statusResult)=> {
                            console.log(statusResult);

                            //Atualizando altura do iFrame
                            alteraAlturaIframe().then((x) => {

                                //Capturando objetos específicos
                                let btnViagAction = x.querySelector(".ve-btn");
                                if (btnViagAction) {
                                    btnViagAction.addEventListener("click", function() {
                                        //window.alert("Botão AÇÃO VIAGENS foi acionado!")
                                        window.open("https://tinyurl.com/ycxys5h9", "_blank");
                                    })
                                }
                                console.log("Configs VIAGENS nav bar pronto!");
                            })
                        })    
                    })
                })
            } 

            //Evento click botão PACOTES nav bar dropdown - OK
            if (ser_paco) {
                ser_paco.addEventListener("click", function() {
                    console.clear();
                    let SRCiframe = "../assets/pacotes-turisticos.html";

                    //Atualizando Documentação iFrame
                    atualizaIframe(SRCiframe).then(()=> {
                        console.log("Continuando processo PACOTES drop down!")

                        //Atualizando stilos CSS
                        abaPaco(constArray).then((statusResult)=> {
                            console.log(statusResult);

                            //Atualizando altura do iFrame
                            alteraAlturaIframe().then((x) => {

                                //Capturando objetos específicos
                                let btnPaco01Action = x.querySelector(".pt-btn-01");
                                if (btnPaco01Action) {
                                    btnPaco01Action.addEventListener("click", function() {
                                        //window.alert("Botão AÇÃO PACOTES 01 foi acionado!")
                                        window.open("https://tinyurl.com/2w93hprv", "_blank");
                                    })
                                }

                                let btnPaco02Action = x.querySelector(".pt-btn-02");
                                if (btnPaco02Action) {
                                    btnPaco02Action.addEventListener("click", function() {
                                        //window.alert("Botão AÇÃO PACOTES 02 foi acionado!")
                                        window.open("https://tinyurl.com/yz29jc83", "_blank");
                                    })
                                }

                                let btnPaco03Action = x.querySelector(".pt-btn-03");
                                if (btnPaco03Action) {
                                    btnPaco03Action.addEventListener("click", function() {
                                        //window.alert("Botão AÇÃO PACOTES 03 foi acionado!")
                                        window.open("https://tinyurl.com/szd84cmt", "_blank");
                                    })
                                }
                                console.log("Configs PACOTES nav bar pronto!");
                            })
                        })    
                    })
                })
            } 

            //Evento click botão PASSAGENS nav bar dropdown - OK
            if (ser_pass) {
                ser_pass.addEventListener("click", function() {
                    console.clear();
                    let SRCiframe = "../assets/passagens-aereas.html";

                    //Atualizando Documentação iFrame
                    atualizaIframe(SRCiframe).then(()=> {
                        console.log("Continuando processo PASSAGENS drop down!")

                        //Atualizando stilos CSS
                        abaPass(constArray).then((statusResult)=> {
                            console.log(statusResult);

                            //Atualizando altura do iFrame
                            alteraAlturaIframe().then((x) => {

                                //Capturando objetos específicos
                                let btnPassAction = x.querySelector(".pa-btn");
                                if (btnPassAction) {
                                    btnPassAction.addEventListener("click", function() {
                                        //window.alert("Botão AÇÃO PASSAGENS foi acionado!")
                                        window.open("https://tinyurl.com/4f446v7n", "_blank");
                                    })
                                }
                                console.log("Configs PASSAGENS nav bar pronto!");
                            })
                        })    
                    })
                })
            } 

            //Evento click botão AÇÃO nav bar - OK
            if (btnHeaderAction) {
                btnHeaderAction.addEventListener("click", function() {
                    //window.alert("Botão AÇÃO PRINCIPAL foi acionado!")
                    window.open("https://wa.me/5541991495750", "_blank");
                })
            }



            //Evento click botão AÇÃO MAIN home.html - DEFAULT INICIAL! - OK
            let btnMainAction = x.querySelector(".main-btn");
            if (btnMainAction) {
                btnMainAction.addEventListener("click", function() {
                    //window.alert("Botão AÇÃO MAIN DEFAULT foi acionado!")
                    window.open("https://wa.me/5541991495750", "_blank");
                })
            }

            //Evento click link Transfer Principais Serviços home.html - DEFAULT INICIAL! - OK
            let linkTransFrame = x.querySelector(".ps-container-frame-link-01");
            if (linkTransFrame) {
                linkTransFrame.addEventListener("click", function() {
                    console.clear();
                    let SRCiframe = "../assets/transfer-aeroporto.html";

                    //Atualizando Documentação iFrame
                    atualizaIframe(SRCiframe).then(()=> {
                        console.log("Continuando processo Transfer Frame DEFAULT!")

                        //Atualizando stilos CSS
                        abaTrans(constArray).then((statusResult)=> {
                            console.log(statusResult);

                            //Atualizando altura do iFrame
                            alteraAlturaIframe().then((x) => {
                                
                                //Capturando objetos específicos
                                let btnTransAction = x.querySelector(".ta-btn");
                                if (btnTransAction) {
                                    btnTransAction.addEventListener("click", function() {
                                        //window.alert("Botão AÇÃO TRANSFER foi acionado!")
                                        window.open("https://tinyurl.com/5bctdz3d", "_blank");
                                    })
                                }
                                console.log("Configs TRANSFER por Frame tudo pronto!");
                            })
                        })  
                    })
                })
            }

            //Evento click link Viagens Principais Serviços home.html - DEFAULT INICIAL! - OK
            let linkViagFrame = x.querySelector(".ps-container-frame-link-02");
            if (linkViagFrame) {
                linkViagFrame.addEventListener("click", function() {
                    console.clear();
                    let SRCiframe = "../assets/viagens-executivas.html";

                    //Atualizando Documentação iFrame
                    atualizaIframe(SRCiframe).then(()=> {
                        console.log("Continuando processo Viagens Frame DEFAULT!")

                        //Atualizando stilos CSS
                        abaViag(constArray).then((statusResult)=> {
                            console.log(statusResult);

                            //Atualizando altura do iFrame
                            alteraAlturaIframe().then((x) => {
                                
                                //Capturando objetos específicos
                                let btnViagAction = x.querySelector(".ve-btn");
                                if (btnViagAction) {
                                    btnViagAction.addEventListener("click", function() {
                                        //window.alert("Botão AÇÃO VIAGENS foi acionado!")
                                        window.open("https://tinyurl.com/ycxys5h9", "_blank");
                                    })
                                }
                                console.log("Configs VIAGENS por Frame tudo pronto!");
                            })
                        })  
                    })
                })
            }

            //Evento click link PACOTES Principais Serviços home.html - DEFAULT INICIAL! - OK
            let linkPacoFrame = x.querySelector(".ps-container-frame-link-03");
            if (linkPacoFrame) {
                linkPacoFrame.addEventListener("click", function() {
                    console.clear();
                    let SRCiframe = "../assets/pacotes-turisticos.html";

                    //Atualizando Documentação iFrame
                    atualizaIframe(SRCiframe).then(()=> {
                        console.log("Continuando processo PACOTES Frame DEFAULT!")

                        //Atualizando stilos CSS
                        abaPaco(constArray).then((statusResult)=> {
                            console.log(statusResult);

                            //Atualizando altura do iFrame
                            alteraAlturaIframe().then((x) => {
                                
                                //Capturando objetos específicos
                                let btnPaco01Action = x.querySelector(".pt-btn-01");
                                if (btnPaco01Action) {
                                    btnPaco01Action.addEventListener("click", function() {
                                        //window.alert("Botão AÇÃO PACOTES 01 foi acionado!")
                                        window.open("https://tinyurl.com/2w93hprv", "_blank");
                                    })
                                }

                                let btnPaco02Action = x.querySelector(".pt-btn-02");
                                if (btnPaco02Action) {
                                    btnPaco02Action.addEventListener("click", function() {
                                        //window.alert("Botão AÇÃO PACOTES 02 foi acionado!")
                                        window.open("https://tinyurl.com/yz29jc83", "_blank");
                                    })
                                }

                                let btnPaco03Action = x.querySelector(".pt-btn-03");
                                if (btnPaco03Action) {
                                    btnPaco03Action.addEventListener("click", function() {
                                        //window.alert("Botão AÇÃO PACOTES 03 foi acionado!")
                                        window.open("https://tinyurl.com/szd84cmt", "_blank");
                                    })
                                }
                                console.log("Configs PACOTES por Frame tudo pronto!");
                            })
                        })  
                    })
                })
            }

            //Evento click link PASSAGENS Principais Serviços home.html - DEFAULT INICIAL! - OK
            let linkPassFrame = x.querySelector(".ps-container-frame-link-04");
            if (linkPassFrame) {
                linkPassFrame.addEventListener("click", function() {
                    console.clear();
                    let SRCiframe = "../assets/passagens-aereas.html";

                    //Atualizando Documentação iFrame
                    atualizaIframe(SRCiframe).then(()=> {
                        console.log("Continuando processo PASSAGENS Frame DEFAULT!")

                        //Atualizando stilos CSS
                        abaPass(constArray).then((statusResult)=> {
                            console.log(statusResult);

                            //Atualizando altura do iFrame
                            alteraAlturaIframe().then((x) => {
                                
                                //Capturando objetos específicos
                                let btnPassAction = x.querySelector(".pa-btn");
                                if (btnPassAction) {
                                    btnPassAction.addEventListener("click", function() {
                                        //window.alert("Botão AÇÃO PASSAGENS foi acionado!")
                                        window.open("https://tinyurl.com/4f446v7n", "_blank");
                                    })
                                }
                                console.log("Configs PASSAGENS por Frame tudo pronto!");
                            })
                        })  
                    })
                })
            }

            //Evento click botão AÇÃO AGENDAMENTO home.html - DEFAULT INICIAL! - OK
            let btnAgenAction = x.querySelector(".sa-btn");
            if (btnAgenAction) {
                btnAgenAction.addEventListener("click", function() {
                    //window.alert("Botão AÇÃO AGENDAMENTO DEFAULT foi acionado!")
                    window.open("https://wa.me/5541991495750", "_blank");
                })
            }



            //Evento click botão HOME footer - OK
            if (fotHome) {
                fotHome.addEventListener("click", function() {
                    console.clear();
                    let SRCiframe = "../assets/home.html";

                    //Atualizando Documentação iframe
                    atualizaIframe(SRCiframe).then(()=> {
                        console.log("Continuando processo HOME footer!")

                        //Atualizando estilos CSS
                        abaHome(constArray).then((statusResult) => {
                            console.log(statusResult);

                            //Atualizando altura iframe
                            alteraAlturaIframe().then((x) => {

                                //Evento click botão AÇÃO MAIN home.html
                                let btnMainAction = x.querySelector(".main-btn");
                                if (btnMainAction) {
                                    btnMainAction.addEventListener("click", function() {
                                        //window.alert("Botão AÇÃO MAIN foi acionado!")
                                        window.open("https://wa.me/5541991495750", "_blank");
                                    })
                                }

                                //Evento click link Transfer Principais Serviços home.html
                                let linkTransFrame = x.querySelector(".ps-container-frame-link-01");
                                if (linkTransFrame) {
                                    linkTransFrame.addEventListener("click", function() {
                                        console.clear();
                                        let SRCiframe = "../assets/transfer-aeroporto.html";

                                        //Atualizando Documentação iFrame
                                        atualizaIframe(SRCiframe).then(()=> {
                                        console.log("Continuando processo Transfer Frame!")

                                            //Atualizando stilos CSS
                                            abaTrans(constArray).then((statusResult)=> {
                                                console.log(statusResult);

                                                //Atualizando altura do iFrame
                                                alteraAlturaIframe().then((x) => {
                                
                                                    //Capturando objetos específicos
                                                    let btnTransAction = x.querySelector(".ta-btn");
                                                    if (btnTransAction) {
                                                        btnTransAction.addEventListener("click", function() {
                                                            //window.alert("Botão AÇÃO TRANSFER foi acionado!")
                                                            window.open("https://tinyurl.com/5bctdz3d", "_blank");
                                                        })
                                                    }
                                                    console.log("Configs TRANSFER por Frame tudo pronto!");
                                                })
                                            })  
                                        })
                                    })
                                }  

                                //Evento click link VIAGENS Principais Serviços home.html
                                let linkViagFrame = x.querySelector(".ps-container-frame-link-02");
                                if (linkViagFrame) {
                                    linkViagFrame.addEventListener("click", function() {
                                        console.clear();
                                        let SRCiframe = "../assets/viagens-executivas.html";

                                        //Atualizando Documentação iFrame
                                        atualizaIframe(SRCiframe).then(()=> {
                                        console.log("Continuando processo Transfer Frame!")

                                            //Atualizando stilos CSS
                                            abaViag(constArray).then((statusResult)=> {
                                                console.log(statusResult);

                                                //Atualizando altura do iFrame
                                                alteraAlturaIframe().then((x) => {
                                
                                                    //Capturando objetos específicos
                                                    let btnViagAction = x.querySelector(".ve-btn");
                                                    if (btnViagAction) {
                                                        btnViagAction.addEventListener("click", function() {
                                                            //window.alert("Botão AÇÃO VIAGENS foi acionado!")
                                                            window.open("https://tinyurl.com/ycxys5h9", "_blank");
                                                        })
                                                    }
                                                    console.log("Configs VIAGENS por Frame tudo pronto!");
                                                })
                                            })  
                                        })
                                    })
                                } 

                                //Evento click link PACOTES Principais Serviços home.html
                                let linkPacoFrame = x.querySelector(".ps-container-frame-link-03");
                                if (linkPacoFrame) {
                                    linkPacoFrame.addEventListener("click", function() {
                                        console.clear();
                                        let SRCiframe = "../assets/pacotes-turisticos.html";

                                        //Atualizando Documentação iFrame
                                        atualizaIframe(SRCiframe).then(()=> {
                                            console.log("Continuando processo PACOTES Frame!")

                                            //Atualizando stilos CSS
                                            abaPaco(constArray).then((statusResult)=> {
                                                console.log(statusResult);

                                                //Atualizando altura do iFrame
                                                alteraAlturaIframe().then((x) => {
                        
                                                    //Capturando objetos específicos
                                                    let btnPaco01Action = x.querySelector(".pt-btn-01");
                                                    if (btnPaco01Action) {
                                                        btnPaco01Action.addEventListener("click", function() {
                                                            //window.alert("Botão AÇÃO PACOTES 01 foi acionado!")
                                                            window.open("https://tinyurl.com/2w93hprv", "_blank");
                                                        })
                                                    }

                                                    let btnPaco02Action = x.querySelector(".pt-btn-02");
                                                    if (btnPaco02Action) {
                                                        btnPaco02Action.addEventListener("click", function() {
                                                            //window.alert("Botão AÇÃO PACOTES 02 foi acionado!")
                                                            window.open("https://tinyurl.com/yz29jc83", "_blank");
                                                        })
                                                    }

                                                    let btnPaco03Action = x.querySelector(".pt-btn-03");
                                                    if (btnPaco03Action) {
                                                        btnPaco03Action.addEventListener("click", function() {
                                                            //window.alert("Botão AÇÃO PACOTES 03 foi acionado!")
                                                            window.open("https://tinyurl.com/szd84cmt", "_blank");
                                                        })
                                                    }
                                                    console.log("Configs PACOTES por Frame tudo pronto!");
                                                })
                                            })  
                                        })
                                    })
                                } 

                                //Evento click link PASSAGENS Principais Serviços home.html
                                let linkPassFrame = x.querySelector(".ps-container-frame-link-04");
                                if (linkPassFrame) {
                                    linkPassFrame.addEventListener("click", function() {
                                        console.clear();
                                        let SRCiframe = "../assets/passagens-aereas.html";

                                        //Atualizando Documentação iFrame
                                        atualizaIframe(SRCiframe).then(()=> {
                                            console.log("Continuando processo PASSAGENS Frame!")

                                            //Atualizando stilos CSS
                                            abaPass(constArray).then((statusResult)=> {
                                                console.log(statusResult);

                                                //Atualizando altura do iFrame
                                                alteraAlturaIframe().then((x) => {
                        
                                                    //Capturando objetos específicos
                                                    let btnPassAction = x.querySelector(".pa-btn");
                                                    if (btnPassAction) {
                                                        btnPassAction.addEventListener("click", function() {
                                                            //window.alert("Botão AÇÃO PASSAGENS foi acionado!")
                                                            window.open("https://tinyurl.com/4f446v7n", "_blank");
                                                        })
                                                    }
                                                    console.log("Configs PASSAGENS por Frame tudo pronto!");
                                                })
                                            })  
                                        })
                                    })
                                } 

                                //Evento click botão AÇÃO AGENDAMENTO home.html
                                let btnAgenAction = x.querySelector(".sa-btn");
                                if (btnAgenAction) {
                                    btnAgenAction.addEventListener("click", function() {
                                        //window.alert("Botão AÇÃO AGENDAMENTO foi acionado!")
                                        window.open("https://wa.me/5541991495750", "_blank");
                                    })
                                }
                                console.log("Configs HOME footer pronto!")
                            })
                        })
                    })
                })
            }

            //Evento click botão SOBRE footer - OK
            if (fotSobre) {
                fotSobre.addEventListener("click", function() {
                    console.clear();
                    let SRCiframe = "../assets/sobre.html";

                    //Atualizando Documentação iframe
                    atualizaIframe(SRCiframe).then(()=> {
                        console.log("Continuando processo SOBRE footer!")

                        //Atualizando estilos CSS
                        abaSobre(constArray).then((statusResult) => {
                            console.log(statusResult);

                            //Atualizando altura iframe
                            alteraAlturaIframe().then((x) => {

                                //Evento click botão AÇÃO SOBRE
                                let btnSobreAction = x.querySelector(".am-btn");
                                if (btnSobreAction) {
                                    btnSobreAction.addEventListener("click", function() {
                                        //window.alert("Botão AÇÃO SOBRE foi acionado!")
                                        window.open("https://wa.me/5541991495750", "_blank");
                                    })
                                }
                                console.log("Configs SOBRE footer pronto!")
                            })
                        })
                    })
                })
            }

            //Evento click botão AGENDAMENTO footer - OK
            if (fotAgen) {
                fotAgen.addEventListener("click", function() {
                    console.clear();
                    let SRCiframe = "../assets/agendamento.html";

                    //Atualizando Documentação iframe
                    atualizaIframe(SRCiframe).then(()=> {
                        console.log("Continuando processo AGENDAMENTO footer!")

                        //Atualizando estilos CSS
                        abaAgen(constArray).then((statusResult) => {
                            console.log(statusResult);

                            //Atualizando altura iframe
                            alteraAlturaIframe().then((x) => {

                                //Evento click botão AÇÃO AGENDAMENTO
                                let btnAgenAction = x.querySelector(".sa-btn");
                                if (btnAgenAction) {
                                    btnAgenAction.addEventListener("click", function() {
                                        //window.alert("Botão AÇÃO AGENDAMENTO foi acionado!")
                                        window.open("https://wa.me/5541991495750", "_blank");
                                    })
                                }
                                console.log("Configs AGENDAMENTO footer pronto!")
                            })
                        })
                    })
                })
            }

            //Evento click botão TRANSFER footer - OK
            if (fotTrans) {
                fotTrans.addEventListener("click", function() {
                    console.clear();
                    let SRCiframe = "../assets/transfer-aeroporto.html";

                    //Atualizando Documentação iframe
                    atualizaIframe(SRCiframe).then(()=> {
                        console.log("Continuando processo TRANSFER footer!")

                        //Atualizando estilos CSS
                        abaTrans(constArray).then((statusResult) => {
                            console.log(statusResult);

                            //Atualizando altura iframe
                            alteraAlturaIframe().then((x) => {

                                //Evento click botão AÇÃO TRANSFER
                                let btnTransAction = x.querySelector(".ta-btn");
                                if (btnTransAction) {
                                    btnTransAction.addEventListener("click", function() {
                                        //window.alert("Botão AÇÃO TRANSFER foi acionado!")
                                        window.open("https://tinyurl.com/5bctdz3d", "_blank");
                                    })
                                }
                                console.log("Configs TRANSFER footer pronto!")
                            })
                        })
                    })
                })
            }

            //Evento click botão VIAGENS footer - OK
            if (fotViagem) {
                fotViagem.addEventListener("click", function() {
                    console.clear();
                    let SRCiframe = "../assets/viagens-executivas.html";

                    //Atualizando Documentação iframe
                    atualizaIframe(SRCiframe).then(()=> {
                        console.log("Continuando processo VIAGENS footer!")

                        //Atualizando estilos CSS
                        abaViag(constArray).then((statusResult) => {
                            console.log(statusResult);

                            //Atualizando altura iframe
                            alteraAlturaIframe().then((x) => {

                                //Evento click botão AÇÃO VIAGENS
                                let btnViagAction = x.querySelector(".ve-btn");
                                if (btnViagAction) {
                                    btnViagAction.addEventListener("click", function() {
                                        //window.alert("Botão AÇÃO VIAGENS foi acionado!")
                                        window.open("https://tinyurl.com/ycxys5h9", "_blank");
                                    })
                                }
                                console.log("Configs VIAGENS footer pronto!")
                            })
                        })
                    })
                })
            }

            //Evento click botão PACOTES footer - OK
            if (fotPaco) {
                fotPaco.addEventListener("click", function() {
                    console.clear();
                    let SRCiframe = "../assets/pacotes-turisticos.html";

                    //Atualizando Documentação iframe
                    atualizaIframe(SRCiframe).then(()=> {
                        console.log("Continuando processo PACOTES footer!")

                        //Atualizando estilos CSS
                        abaPaco(constArray).then((statusResult) => {
                            console.log(statusResult);

                            //Atualizando altura iframe
                            alteraAlturaIframe().then((x) => {

                                //Evento click botão AÇÃO VIAGENS
                                let btnPaco01Action = x.querySelector(".pt-btn-01");
                                if (btnPaco01Action) {
                                    btnPaco01Action.addEventListener("click", function() {
                                        //window.alert("Botão AÇÃO PACOTES 01 foi acionado!")
                                        window.open("https://tinyurl.com/2w93hprv", "_blank");
                                    })
                                }

                                let btnPaco02Action = x.querySelector(".pt-btn-02");
                                if (btnPaco02Action) {
                                    btnPaco02Action.addEventListener("click", function() {
                                        //window.alert("Botão AÇÃO PACOTES 02 foi acionado!")
                                        window.open("https://tinyurl.com/yz29jc83", "_blank");
                                    })
                                }

                                let btnPaco03Action = x.querySelector(".pt-btn-03");
                                if (btnPaco03Action) {
                                    btnPaco03Action.addEventListener("click", function() {
                                        //window.alert("Botão AÇÃO PACOTES 03 foi acionado!")
                                        window.open("https://tinyurl.com/szd84cmt", "_blank");
                                    })
                                }
                                console.log("Configs PACOTES footer pronto!")
                            })
                        })
                    })
                })
            }

            //Evento click botão PASSAGENS footer - OK
            if (fotPass) {
                fotPass.addEventListener("click", function() {
                    console.clear();
                    let SRCiframe = "../assets/passagens-aereas.html";

                    //Atualizando Documentação iframe
                    atualizaIframe(SRCiframe).then(()=> {
                        console.log("Continuando processo PASSAGENS footer!")

                        //Atualizando estilos CSS
                        abaPass(constArray).then((statusResult) => {
                            console.log(statusResult);

                            //Atualizando altura iframe
                            alteraAlturaIframe().then((x) => {

                                //Evento click botão AÇÃO PASSAGENS
                                let btnPassAction = x.querySelector(".pa-btn");
                                if (btnPassAction) {
                                    btnPassAction.addEventListener("click", function() {
                                        //window.alert("Botão AÇÃO PASSAGENS foi acionado!")
                                        window.open("https://tinyurl.com/4f446v7n", "_blank");
                                    })
                                }
                                console.log("Configs PASSAGENS footer pronto!")
                            })
                        })
                    })
                })
            }

            //Evento click botão POLÍTICA footer
            if (fotPol) {
                fotPol.addEventListener("click", function() {
                    console.clear();
                    let SRCiframe = "../assets/politica.html";

                    //Atualizando Documentação iframe
                    atualizaIframe(SRCiframe).then(()=> {
                        console.log("Continuando processo POLÍTICA footer!")

                        //Atualizando estilos CSS
                        abaPol(constArray).then((statusResult) => {
                            console.log(statusResult);

                            //Atualizando altura iframe
                            alteraAlturaIframe().then((x) => {
                                console.log("Configs POLÍTICA footer pronto!")
                            })
                        })
                    })
                })
            }

        })
    });
})()

//window.addEventListener("resize", function() {
    //     alteraAlturaIframe();
    //     console.log("Altura iframe redefinida sem carregamento!"); 
    // });

//location.reload(true); Força o load da página

// if (iframe) {
        //     console.log("iframe reconhecido!")

        //     iframe.onload = function() {
        //         console.log("iframe recarregado!")
        //         iframe.contentWindow.onload = function() {
        //             console.log("Conteúdo do iframe carregado!")
        //             
        //             //iframe.style.height = iframe.contentWindow.document.body.clientHeight + "px";
        //             //console.log(iframe.contentWindow.document.body.clientHeight + "px");
        //         }
                
        //     }

        //     // Força a recarga do iframe (opcional)
        //     iframe.src = iframe.src + "?reload=" + Date.now();
        // }
        //console.log(iframe)
        //minhaFuncao(); // Chama a função que você deseja executar
    
    

    //Script para aba HOME!
    // async function abaHome(listVars) {
    //     return new Promise((resolve) => {

    //         //CSS Changes menu oculto
    //         listVars[4].style.color = "#d2aa70"; //Link Home
    //         listVars[5].style.color = "white"; //Link Transfer
    //         listVars[6].style.color = "white"; //Link Viagem
    //         listVars[7].style.color = "white"; //Link Pacotes
    //         listVars[8].style.color = "white"; //Link Passagens
    //         listVars[9].style.color = "white"; //Link Sobre
    //         listVars[10].style.color = "white"; //Link Agendamento

    //         //CSS Changes nav bar
    //         listVars[11].style.color = "#d2aa70"; //Link Home
    //         listVars[12].style.color = "white"; //Link Sobre
    //         listVars[13].style.color = "white"; //Link Agendamento

    //         //CSS Changes drop down menu
    //         listVars[14].style.background = "white"; //Transfer Aeroporto
    //         listVars[14].style.color = "#05243a"; //Transfer Aeroporto
    //         listVars[15].style.background = "white"; //Viagem Executiva
    //         listVars[15].style.color = "#05243a"; //Viagem Executiva
    //         listVars[16].style.background = "white"; //Pacotes Turísticos
    //         listVars[16].style.color = "#05243a"; //Pacotes Turísticos
    //         listVars[17].style.background = "white"; //Passagens Aéreas
    //         listVars[17].style.color = "#05243a"; //Passagens Aéreas

    //         //CSS changes footer menu
    //         listVars[19].style.color = "#d2aa70";
    //         listVars[20].style.color = "white";
    //         listVars[21].style.color = "white";

    //         //CSS Changes footer serviços
    //         listVars[22].style.color = "white";
    //         listVars[23].style.color = "white";
    //         listVars[24].style.color = "white";
    //         listVars[25].style.color = "white";

    //         //CSS Changes footer política
    //         listVars[26].style.color = "white";
    //         console.log("Propriedades HOME atualizadas!")
    //         resolve();
    //     })
    // }

    

    //Script para aba AGENDAMENTO!
    // async function abaAgen(listVars) {
    //     return new Promise((resolve) => {

    //         //CSS Changes menu oculto
    //         listVars[4].style.color = "white"; //Link Home
    //         listVars[5].style.color = "white"; //Link Transfer
    //         listVars[6].style.color = "white"; //Link Viagem
    //         listVars[7].style.color = "white"; //Link Pacotes
    //         listVars[8].style.color = "white"; //Link Passagens
    //         listVars[9].style.color = "white"; //Link Sobre
    //         listVars[10].style.color = "#d2aa70"; //Link Agendamento

    //         //CSS Changes nav bar
    //         listVars[11].style.color = "white"; //Link Home
    //         listVars[12].style.color = "white"; //Link Sobre
    //         listVars[13].style.color = "#d2aa70"; //Link Agendamento

    //         //CSS Changes drop down menu
    //         listVars[14].style.background = "white"; //Transfer Aeroporto
    //         listVars[14].style.color = "#05243a"; //Transfer Aeroporto
    //         listVars[15].style.background = "white"; //Viagem Executiva
    //         listVars[15].style.color = "#05243a"; //Viagem Executiva
    //         listVars[16].style.background = "white"; //Pacotes Turísticos
    //         listVars[16].style.color = "#05243a"; //Pacotes Turísticos
    //         listVars[17].style.background = "white"; //Passagens Aéreas
    //         listVars[17].style.color = "#05243a"; //Passagens Aéreas

    //         //CSS changes footer menu
    //         listVars[19].style.color = "white"; //Home
    //         listVars[20].style.color = "white"; //Sobre
    //         listVars[21].style.color = "#d2aa70"; //Agendamento

    //         //CSS Changes footer serviços
    //         listVars[22].style.color = "white"; //Transfer Aeroporto
    //         listVars[23].style.color = "white"; //Viagens
    //         listVars[24].style.color = "white"; //Pacotes
    //         listVars[25].style.color = "white"; //Passagens

    //         //CSS Changes footer política
    //         listVars[26].style.color = "white"; //Política
    //         console.log("Propriedades AGENDAMENTO atualizadas!")
    //         resolve();
    //     })
    // }

    //Script para aba TRANSFER AEROPORTO!
    // async function abaTrans(listVars) {
    //     return new Promise((resolve) => {

    //         //CSS Changes menu oculto
    //         listVars[4].style.color = "white"; //Link Home
    //         listVars[5].style.color = "#d2aa70"; //Link Transfer
    //         listVars[6].style.color = "white"; //Link Viagem
    //         listVars[7].style.color = "white"; //Link Pacotes
    //         listVars[8].style.color = "white"; //Link Passagens
    //         listVars[9].style.color = "white"; //Link Sobre
    //         listVars[10].style.color = "white"; //Link Agendamento

    //         //CSS Changes nav bar
    //         listVars[11].style.color = "white"; //Link Home
    //         listVars[12].style.color = "white"; //Link Sobre
    //         listVars[13].style.color = "white"; //Link Agendamento

    //         //CSS Changes drop down menu
    //         listVars[14].style.background = "#05243a"; //Transfer Aeroporto
    //         listVars[14].style.color = "#d2aa70"; //Transfer Aeroporto
    //         listVars[15].style.background = "white"; //Viagem Executiva
    //         listVars[15].style.color = "#05243a"; //Viagem Executiva
    //         listVars[16].style.background = "white"; //Pacotes Turísticos
    //         listVars[16].style.color = "#05243a"; //Pacotes Turísticos
    //         listVars[17].style.background = "white"; //Passagens Aéreas
    //         listVars[17].style.color = "#05243a"; //Passagens Aéreas

    //         //CSS changes footer menu
    //         listVars[19].style.color = "white"; //Home
    //         listVars[20].style.color = "white"; //Sobre
    //         listVars[21].style.color = "white"; //Agendamento

    //         //CSS Changes footer serviços
    //         listVars[22].style.color = "#d2aa70"; //Transfer Aeroporto
    //         listVars[23].style.color = "white"; //Viagens
    //         listVars[24].style.color = "white"; //Pacotes
    //         listVars[25].style.color = "white"; //Passagens

    //         //CSS Changes footer política
    //         listVars[26].style.color = "white"; //Política
    //         console.log("Propriedades Transfer atualizadas!")
    //         resolve();
    //     })
    // }

    //Script para aba VIAGENS EXECUTIVAS!
    // async function abaViag(listVars) {
    //     return new Promise((resolve) => {

    //         //CSS Changes menu oculto
    //         listVars[4].style.color = "white"; //Link Home
    //         listVars[5].style.color = "white"; //Link Transfer
    //         listVars[6].style.color = "#d2aa70"; //Link Viagem
    //         listVars[7].style.color = "white"; //Link Pacotes
    //         listVars[8].style.color = "white"; //Link Passagens
    //         listVars[9].style.color = "white"; //Link Sobre
    //         listVars[10].style.color = "white"; //Link Agendamento

    //         //CSS Changes nav bar
    //         listVars[11].style.color = "white"; //Link Home
    //         listVars[12].style.color = "white"; //Link Sobre
    //         listVars[13].style.color = "white"; //Link Agendamento

    //         //CSS Changes drop down menu
    //         listVars[14].style.background = "white"; //Transfer Aeroporto
    //         listVars[14].style.color = "#05243a"; //Transfer Aeroporto
    //         listVars[15].style.background = "#05243a"; //Viagem Executiva
    //         listVars[15].style.color = "#d2aa70"; //Viagem Executiva
    //         listVars[16].style.background = "white"; //Pacotes Turísticos
    //         listVars[16].style.color = "#05243a"; //Pacotes Turísticos
    //         listVars[17].style.background = "white"; //Passagens Aéreas
    //         listVars[17].style.color = "#05243a"; //Passagens Aéreas

    //         //CSS changes footer menu
    //         listVars[19].style.color = "white"; //Home
    //         listVars[20].style.color = "white"; //Sobre
    //         listVars[21].style.color = "white"; //Agendamento

    //         //CSS Changes footer serviços
    //         listVars[22].style.color = "white"; //Transfer Aeroporto
    //         listVars[23].style.color = "#d2aa70"; //Viagens
    //         listVars[24].style.color = "white"; //Pacotes
    //         listVars[25].style.color = "white"; //Passagens

    //         //CSS Changes footer política
    //         listVars[26].style.color = "white"; //Política
    //         console.log("Propriedades Viagem atualizadas!")
    //         resolve();
    //     })
    // }

    //Script para aba PACOTES TURÍSTICOS!
    // async function abaPaco(listVars) {
    //     return new Promise((resolve) => {

    //         //CSS Changes menu oculto
    //         listVars[4].style.color = "white"; //Link Home
    //         listVars[5].style.color = "white"; //Link Transfer
    //         listVars[6].style.color = "white"; //Link Viagem
    //         listVars[7].style.color = "#d2aa70"; //Link Pacotes
    //         listVars[8].style.color = "white"; //Link Passagens
    //         listVars[9].style.color = "white"; //Link Sobre
    //         listVars[10].style.color = "white"; //Link Agendamento

    //         //CSS Changes nav bar
    //         listVars[11].style.color = "white"; //Link Home
    //         listVars[12].style.color = "white"; //Link Sobre
    //         listVars[13].style.color = "white"; //Link Agendamento

    //         //CSS Changes drop down menu
    //         listVars[14].style.background = "white"; //Transfer Aeroporto
    //         listVars[14].style.color = "#05243a"; //Transfer Aeroporto
    //         listVars[15].style.background = "white"; //Viagem Executiva
    //         listVars[15].style.color = "#05243a"; //Viagem Executiva
    //         listVars[16].style.background = "#05243a"; //Pacotes Turísticos
    //         listVars[16].style.color = "#d2aa70"; //Pacotes Turísticos
    //         listVars[17].style.background = "white"; //Passagens Aéreas
    //         listVars[17].style.color = "#05243a"; //Passagens Aéreas

    //         //CSS changes footer menu
    //         listVars[19].style.color = "white"; //Home
    //         listVars[20].style.color = "white"; //Sobre
    //         listVars[21].style.color = "white"; //Agendamento

    //         //CSS Changes footer serviços
    //         listVars[22].style.color = "white"; //Transfer Aeroporto
    //         listVars[23].style.color = "white"; //Viagens
    //         listVars[24].style.color = "#d2aa70"; //Pacotes
    //         listVars[25].style.color = "white"; //Passagens

    //         //CSS Changes footer política
    //         listVars[26].style.color = "white"; //Política
    //         console.log("Propriedades Pacotes atualizadas!")
    //         resolve();
    //     })
    // }

    //Script para aba PASSAGENS AÉREAS!
    // async function abaPass(listVars) {
    //     return new Promise((resolve) => {

    //         //CSS Changes menu oculto
    //         listVars[4].style.color = "white"; //Link Home
    //         listVars[5].style.color = "white"; //Link Transfer
    //         listVars[6].style.color = "white"; //Link Viagem
    //         listVars[7].style.color = "white"; //Link Pacotes
    //         listVars[8].style.color = "#d2aa70"; //Link Passagens
    //         listVars[9].style.color = "white"; //Link Sobre
    //         listVars[10].style.color = "white"; //Link Agendamento

    //         //CSS Changes nav bar
    //         listVars[11].style.color = "white"; //Link Home
    //         listVars[12].style.color = "white"; //Link Sobre
    //         listVars[13].style.color = "white"; //Link Agendamento

    //         //CSS Changes drop down menu
    //         listVars[14].style.background = "white"; //Transfer Aeroporto
    //         listVars[14].style.color = "#05243a"; //Transfer Aeroporto
    //         listVars[15].style.background = "white"; //Viagem Executiva
    //         listVars[15].style.color = "#05243a"; //Viagem Executiva
    //         listVars[16].style.background = "white"; //Pacotes Turísticos
    //         listVars[16].style.color = "#05243a"; //Pacotes Turísticos
    //         listVars[17].style.background = "#05243a"; //Passagens Aéreas
    //         listVars[17].style.color = "#d2aa70"; //Passagens Aéreas

    //         //CSS changes footer menu
    //         listVars[19].style.color = "white"; //Home
    //         listVars[20].style.color = "white"; //Sobre
    //         listVars[21].style.color = "white"; //Agendamento

    //         //CSS Changes footer serviços
    //         listVars[22].style.color = "white"; //Transfer Aeroporto
    //         listVars[23].style.color = "white"; //Viagens
    //         listVars[24].style.color = "white"; //Pacotes
    //         listVars[25].style.color = "#d2aa70"; //Passagens

    //         //CSS Changes footer política
    //         listVars[26].style.color = "white"; //Política
    //         console.log("Propriedades Passagens atualizadas!")
    //         resolve();
    //     })
    // }

    //Script para aba POLÍTICA!
    // async function abaPol(listVars) {
    //     return new Promise((resolve) => {

    //         //CSS Changes menu oculto
    //         listVars[4].style.color = "white"; //Link Home
    //         listVars[5].style.color = "white"; //Link Transfer
    //         listVars[6].style.color = "white"; //Link Viagem
    //         listVars[7].style.color = "white"; //Link Pacotes
    //         listVars[8].style.color = "white"; //Link Passagens
    //         listVars[9].style.color = "white"; //Link Sobre
    //         listVars[10].style.color = "white"; //Link Agendamento

    //         //CSS Changes nav bar
    //         listVars[11].style.color = "white"; //Link Home
    //         listVars[12].style.color = "white"; //Link Sobre
    //         listVars[13].style.color = "white"; //Link Agendamento

    //         //CSS Changes drop down menu
    //         listVars[14].style.background = "white"; //Transfer Aeroporto
    //         listVars[14].style.color = "#05243a"; //Transfer Aeroporto
    //         listVars[15].style.background = "white"; //Viagem Executiva
    //         listVars[15].style.color = "#05243a"; //Viagem Executiva
    //         listVars[16].style.background = "white"; //Pacotes Turísticos
    //         listVars[16].style.color = "#05243a"; //Pacotes Turísticos
    //         listVars[17].style.background = "white"; //Passagens Aéreas
    //         listVars[17].style.color = "#05243a"; //Passagens Aéreas

    //         //CSS changes footer menu
    //         listVars[19].style.color = "white"; //Home
    //         listVars[20].style.color = "white"; //Sobre
    //         listVars[21].style.color = "white"; //Agendamento

    //         //CSS Changes footer serviços
    //         listVars[22].style.color = "white"; //Transfer Aeroporto
    //         listVars[23].style.color = "white"; //Viagens
    //         listVars[24].style.color = "white"; //Pacotes
    //         listVars[25].style.color = "white"; //Passagens

    //         //CSS Changes footer política
    //         listVars[26].style.color = "#d2aa70"; //Política
    //         console.log("Propriedades POLÍTICA atualizadas!")
    //         resolve();
    //     })
    // }

    // doc.addEventListener('DOMContentLoaded', function() {

    //     console.log("Tag 01 de atualização!!!")

    //     //Array para armazenar variáveis de ambiente!!!
    //     let varArray = [];
    //     let varAbas = [];

    //     
    //     }    

    //     //************AÇÕES ABRIR E FECHAR MENU OCULTO********************
    //     //*****************************
    //     //*****************************

    //     

    //     



    //     //************AÇÕES MENU OCULTO********************
    //     //*****************************
    //     //*****************************

    //     //Capturando click HOME MENU OCULTO
    //     if (varArray[4]) {
    //         varArray[4].addEventListener('click', ()=> {
    //             varArray[27].src = "../assets/home.html"
    //             varArray[27].addEventListener('load', function() {

    //                 //Acessando conteúdo do iframe!
    //                 let iframeDocument = varArray[27].contentDocument || iframe.contentWindow.document;
    //                 abaHome(varArray).then(() => {
                        
    //                     //Fechando Menu Oculto
    //                     closeHideMenu(varArray).then(() => {
    //                         win.scrollTo(0, 0);
    //                         console.log("Botão Home foi acionado pelo menu oculto");
    //                     })
    //                 })
    //             })
                
    //         })
    //     }

    //     //Capturando click SOBRE MENU OCULTO
    //     if (varArray[9]) {
    //         varArray[9].addEventListener('click', ()=> {
    //             varArray[27].src = "../assets/sobre.html"
    //             varArray[27].addEventListener('load', function() {

    //                 //Acessando conteúdo do iframe!
    //                 let iframeDocument = varArray[27].contentDocument || iframe.contentWindow.document;
    //                 abaSobre(varArray).then(() => {
                        
    //                     //Fechando Menu Oculto
    //                     closeHideMenu(varArray).then(() => {
    //                         win.scrollTo(0, 0);
    //                         console.log("Botão Sobre foi acionado pelo menu oculto");
    //                     })
    //                 })
    //             })
                
    //         })
    //     }

    //     //Capturando click AGENDAMENTO MENU OCULTO
    //     if (varArray[10]) {
    //         varArray[10].addEventListener('click', ()=> {
    //             varArray[27].src = "../assets/agendamento.html"
    //             varArray[27].addEventListener('load', function() {

    //                 //Acessando conteúdo do iframe!
    //                 let iframeDocument = varArray[27].contentDocument || iframe.contentWindow.document;
    //                 abaAgen(varArray).then(() => {
                        
    //                     //Fechando Menu Oculto
    //                     closeHideMenu(varArray).then(() => {
    //                         win.scrollTo(0, 0);
    //                         console.log("Botão Agendamento foi acionado pelo menu oculto");
    //                     })
    //                 })
    //             })
    //         })
    //     }

    //     //Capturando click TRANSFER MENU OCULTO
    //     if (varArray[5]) {
    //         varArray[5].addEventListener('click', ()=> {
    //             varArray[27].src = "../assets/transfer-aeroporto.html"
    //             varArray[27].addEventListener('load', function() {

    //                 //Acessando conteúdo do iframe!
    //                 let iframeDocument = varArray[27].contentDocument || iframe.contentWindow.document;
    //                 abaTrans(varArray).then(() => {

    //                     //Fechando Menu Oculto
    //                     closeHideMenu(varArray).then(() => {
    //                         win.scrollTo(0, 0);
    //                         console.log("Botão Transfer foi acionado pelo menu oculto");
    //                     })
    //                 })
    //             })
    //         })
    //     }

    //     //Capturando click VIAGENS MENU OCULTO
    //     if (varArray[6]) {
    //         varArray[6].addEventListener('click', ()=> {
    //             varArray[27].src = "../assets/viagens-executivas.html"
    //             varArray[27].addEventListener('load', function() {

    //                 //Acessando conteúdo do iframe!
    //                 let iframeDocument = varArray[27].contentDocument || iframe.contentWindow.document;
    //                 abaViag(varArray).then(() => {
                        
    //                     //Fechando Menu Oculto
    //                     closeHideMenu(varArray).then(() => {
    //                         win.scrollTo(0, 0);
    //                         console.log("Botão Viagens foi acionado pelo menu oculto");
    //                     })
    //                 })
    //             })
    //         })
    //     }

    //     //Capturando click PACOTES MENU OCULTO
    //     if (varArray[7]) {
    //         varArray[7].addEventListener('click', ()=> {
    //             varArray[27].src = "../assets/pacotes-turísticos.html"
    //             varArray[27].addEventListener('load', function() {

    //                 //Acessando conteúdo do iframe!
    //                 let iframeDocument = varArray[27].contentDocument || iframe.contentWindow.document;
    //                 abaPaco(varArray).then(() => {
                        
    //                     //Fechando Menu Oculto
    //                     closeHideMenu(varArray).then(() => {
    //                         win.scrollTo(0, 0);
    //                         console.log("Botão Pacotes foi acionado pelo menu oculto");
    //                     })
    //                 })
    //             })
    //         })
    //     }

    //     //Capturando click PASSAGENS MENU OCULTO
    //     if (varArray[8]) {
    //         varArray[8].addEventListener('click', ()=> {
    //             varArray[27].src = "../assets/passagens-aéreas.html"
    //             varArray[27].addEventListener('load', function() {

    //                 //Acessando conteúdo do iframe!
    //                 let iframeDocument = varArray[27].contentDocument || iframe.contentWindow.document;
    //                 abaPass(varArray).then(() => {
                        
    //                     //Fechando Menu Oculto
    //                     closeHideMenu(varArray).then(() => {
    //                         win.scrollTo(0, 0);
    //                         console.log("Botão Passagens foi acionado pelo menu oculto");
    //                     })
    //                 })
    //             })
    //         })
    //     }

        
    //     //************AÇÕES NAV BAR********************
    //     //*****************************
    //     //*****************************

    //     //Capturando click HOME NAV BAR
    //     if (varArray[11]) {
    //         varArray[11].addEventListener('click', ()=> {
    //             varArray[27].src = "../assets/home.html"
    //             varArray[27].addEventListener('load', function() {

    //                 //Acessando conteúdo do iframe!
    //                 let iframeDocument = varArray[27].contentDocument || iframe.contentWindow.document;
    //                 abaHome(varArray).then(() => {
    //                     win.scrollTo(0, 0)
    //                     console.log("Botão Home foi acionado pela navbar");
    //                 })
    //             })
    //         })
    //     }

    //     //Capturando click SOBRE NAV BAR
    //     if (varArray[12]) {
    //         varArray[12].addEventListener('click', ()=> {
    //             console.clear();
    //             console.log(varArray[12]);
    //             varArray[27].src = "../assets/sobre.html"
    //             varArray[27].addEventListener('load', function() {

    //                 //Acessando conteúdo do iframe!
    //                 let iframeDocument = varArray[27].contentDocument || varArray[27].contentWindow.document;
    //                 abaSobre(varArray).then(() => {
    //                     win.scrollTo(0, 0);
                        
    //                     
    //                     btnMainAction.addEventListener('click', ()=> {
    //                         alert("Botão ação SOBRE foi acionado!")
    //                     })
    //                 })
    //             })
    //         })
    //     }

    //     //Capturando click AGENDAMENTO NAV BAR
    //     if (varArray[13]) {
    //         varArray[13].addEventListener('click', ()=> {
    //             console.clear();
    //             console.log(varArray[13]);
    //             varArray[27].src = "../assets/agendamento.html"
    //             varArray[27].addEventListener('load', function() {

    //                 //Acessando conteúdo do iframe!
    //                 let iframeDocument = varArray[27].contentDocument || varArray[27].contentWindow.document;
    //                 abaAgen(varArray).then(() => {
    //                     win.scrollTo(0, 0);
                        
    //                     //Capturando objetos específicos
    //                     let btnMainAction = iframeDocument.querySelector(".sa-btn");
    //                     btnMainAction.addEventListener('click', ()=> {
    //                         alert("Botão ação AGENDAMENTO foi acionado!")
    //                     })
    //                 })
    //             })
    //         })
    //     }

    //     //Capturando click TRANSFER NAV BAR
    //     if (varArray[14]) {
    //         varArray[14].addEventListener('click', ()=> {
    //             varArray[27].src = "../assets/transfer-aeroporto.html"
    //             varArray[27].addEventListener('load', function() {

    //                 //Acessando conteúdo do iframe!
    //                 let iframeDocument = varArray[27].contentDocument || iframe.contentWindow.document;
    //                 abaTrans(varArray).then(() => {
    //                     win.scrollTo(0, 0);
    //                     console.log("Botão Transfer foi acionado pela navbar");
    //                 })
    //             })
    //         })
    //     }

    //     //Capturando click VIAGENS NAV BAR
    //     if (varArray[15]) {
    //         varArray[15].addEventListener('click', ()=> {
    //             varArray[27].src = "../assets/viagens-executivas.html"
    //             varArray[27].addEventListener('load', function() {

    //                 //Acessando conteúdo do iframe!
    //                 let iframeDocument = varArray[27].contentDocument || iframe.contentWindow.document;
    //                 abaViag(varArray).then(() => {
    //                     win.scrollTo(0, 0);
    //                     console.log("Botão Viagens foi acionado pela navbar");
    //                 })
    //             })
    //         })
    //     }

    //     //Capturando click PACOTES NAV BAR
    //     if (varArray[16]) {
    //         varArray[16].addEventListener('click', ()=> {
    //             varArray[27].src = "../assets/pacotes-turísticos.html"
    //             varArray[27].addEventListener('load', function() {

    //                 //Acessando conteúdo do iframe!
    //                 let iframeDocument = varArray[27].contentDocument || iframe.contentWindow.document;
    //                 abaPaco(varArray).then(() => {
    //                     win.scrollTo(0, 0);
    //                     console.log("Botão Pacotes foi acionado pela navbar");
    //                 })
    //             })
    //         })
    //     }

    //     //Capturando click PASSAGENS NAV BAR
    //     if (varArray[17]) {
    //         varArray[17].addEventListener('click', ()=> {
    //             varArray[27].src = "../assets/passagens-aéreas.html"
    //             varArray[27].addEventListener('load', function() {

    //                 //Acessando conteúdo do iframe!
    //                 let iframeDocument = varArray[27].contentDocument || iframe.contentWindow.document;
    //                 abaPass(varArray).then(() => {
    //                     win.scrollTo(0, 0);
    //                     console.log("Botão Passagens foi acionado pela navbar");
    //                 })
    //             })
    //         })
    //     }

    //     //Capturando click BTN AÇÃO NAV BAR
    //     if (varArray[18]) {
    //         varArray[18].addEventListener('click', ()=> {
    //             alert("BTN AÇÃO NAV BAR");
    //         })
    //     }


    //     //************AÇÕES FOOTER********************
    //     //*****************************
    //     //*****************************

    //     //Capturando click HOME FOOTER LINK
    //     if (varArray[19]) {
    //         varArray[19].addEventListener('click', ()=> {
    //             varArray[27].src = "../assets/home.html"
    //             varArray[27].addEventListener('load', function() {

    //                 //Acessando conteúdo do iframe!
    //                 let iframeDocument = varArray[27].contentDocument || iframe.contentWindow.document;
    //                 abaHome(varArray).then(() => {
    //                     win.scrollTo(0, 0);
    //                     console.log("Botão Home foi acionado pelo footer");
    //                 })
    //             })
    //         })
    //     }

    //     //Capturando click SOBRE FOOTER LINK
    //     if (varArray[20]) {
    //         varArray[20].addEventListener('click', ()=> {
    //             varArray[27].src = "../assets/sobre.html"
    //             varArray[27].addEventListener('load', function() {

    //                 //Acessando conteúdo do iframe!
    //                 let iframeDocument = varArray[27].contentDocument || iframe.contentWindow.document;
    //                 abaSobre(varArray).then(() => {
    //                     win.scrollTo(0, 0);
    //                     console.log("Botão Sobre foi acionado pelo footer");
    //                 })
    //             })
    //         })
    //     }

    //     //Capturando click AGENDAMENTO FOOTER LINK
    //     if (varArray[21]) {
    //         varArray[21].addEventListener('click', ()=> {
    //             varArray[27].src = "../assets/agendamento.html"
    //             varArray[27].addEventListener('load', function() {

    //                 //Acessando conteúdo do iframe!
    //                 let iframeDocument = varArray[27].contentDocument || iframe.contentWindow.document;
    //                 abaAgen(varArray).then(() => {
    //                     win.scrollTo(0, 0);
    //                     console.log("Botão Agendamento foi acionado pelo footer");
    //                 })
    //             })
    //         })
    //     }

    //     //Capturando click TRANSFER FOOTER LINK
    //     if (varArray[22]) {
    //         varArray[22].addEventListener('click', ()=> {
    //             varArray[27].src = "../assets/transfer-aeroporto.html"
    //             varArray[27].addEventListener('load', function() {

    //                 //Acessando conteúdo do iframe!
    //                 let iframeDocument = varArray[27].contentDocument || iframe.contentWindow.document;
    //                 abaTrans(varArray).then(() => {
    //                     win.scrollTo(0, 0);
    //                     console.log("Botão Transfer foi acionado pelo footer");
    //                 })
    //             })
    //         })
    //     }

    //     //Capturando click VIAGENS FOOTER LINK
    //     if (varArray[23]) {
    //         varArray[23].addEventListener('click', ()=> {
    //             varArray[27].src = "../assets/viagens-executivas.html"
    //             varArray[27].addEventListener('load', function() {

    //                 //Acessando conteúdo do iframe!
    //                 let iframeDocument = varArray[27].contentDocument || iframe.contentWindow.document;
    //                 abaViag(varArray).then(() => {
    //                     win.scrollTo(0, 0);
    //                     console.log("Botão Viagens foi acionado pelo footer");
    //                 })
    //             })
    //         })
    //     }

    //     //Capturando click PACOTES FOOTER LINK
    //     if (varArray[24]) {
    //         varArray[24].addEventListener('click', ()=> {
    //             varArray[27].src = "../assets/pacotes-turísticos.html"
    //             varArray[27].addEventListener('load', function() {

    //                 //Acessando conteúdo do iframe!
    //                 let iframeDocument = varArray[27].contentDocument || iframe.contentWindow.document;
    //                 abaPaco(varArray).then(() => {
    //                     win.scrollTo(0, 0);
    //                     console.log("Botão Pacotes foi acionado pelo footer");
    //                 })
    //             })
    //         })
    //     }

    //     //Capturando click PASSAGENS FOOTER LINK
    //     if (varArray[25]) {
    //         varArray[25].addEventListener('click', ()=> {
    //             varArray[27].src = "../assets/passagens-aéreas.html"
    //             varArray[27].addEventListener('load', function() {

    //                 //Acessando conteúdo do iframe!
    //                 let iframeDocument = varArray[27].contentDocument || iframe.contentWindow.document;
    //                 abaPass(varArray).then(() => {
    //                     win.scrollTo(0, 0);
    //                     console.log("Botão Passagens foi acionado pelo footer");
    //                 })
    //             })
    //         })
    //     }

    //     //Capturando click POLÍTICA FOOTER LINK
    //     if (varArray[26]) {
    //         varArray[26].addEventListener('click', ()=> {
    //             varArray[27].src = "../assets/política.html"
    //             varArray[27].addEventListener('load', function() {

    //                 //Acessando conteúdo do iframe!
    //                 let iframeDocument = varArray[27].contentDocument || iframe.contentWindow.document;
    //                 abaPol(varArray).then(() => {
    //                     win.scrollTo(0, 0);
    //                     console.log("Botão Política foi acionado pelo footer");
    //                 })
    //             })
    //         })
    //     }

    //     //************AÇÕES ESPECÍFICAS********************
    //     //*****************************
    //     //*****************************

    //     //Eventos específicos HOME
    //     // if(varArray[27].src.endsWith("home.html")) {
    //     //     console.log("Habilitar eventos específicos HOME");
    //     //     // varAbas[0].addEventListener('click', () => {
    //     //     //     alert("Home, botão ação main foi acionado!");
    //     //     // })
    //     // } else if(varArray[27].src.endsWith("sobre.html")) {
    //     //     console.log("Habilitar eventos específicos SOBRE");
    //     // }
        

    // })

    //console.time("Tempo: ")
    


// varArray[27].addEventListener('load', function() {

//     console.log("Tag 02 de atualização!!!")

//     //Acessando conteúdo do iframe carregado com nova aba!
//     let iframeDocument = varArray[27].contentDocument || varArray[27].contentWindow.document;
//     console.log(iframeDocument);

//     //Eventos específicos HOME
//     if(varArray[27].src.endsWith("home.html")) {

//         //Capturando objetos específicos
//         let btnMainAction = iframeDocument.querySelector(".main-btn");
//         let targetClassta = iframeDocument.querySelector(".ps-container-frame-link-01");
//         let targetClassve = iframeDocument.querySelector(".ps-container-frame-link-02");
//         let targetClasspt = iframeDocument.querySelector(".ps-container-frame-link-03");
//         let targetClasspa = iframeDocument.querySelector(".ps-container-frame-link-04");
//         let btnAgenAction = iframeDocument.querySelector(".sa-btn");

//         //Armazenando objetos varAbas array
//         varAbas.push(btnMainAction, targetClassta, targetClassve, targetClasspt, targetClasspa, btnAgenAction)

//         console.log("Variáveis específicas HOME foram armazenadas!");

//         //Verificando se btnMainAction foi reconhecido
//         // if (btnMainAction) {
//         //     btnMainAction.addEventListener('click', () => {
//         //         alert("HOME, main btn ação!")
//         //     })
//         // }

//         //Verificando se target Class Transfer foi reconhecido
//         // if (targetClassta) {
//         //      targetClassta.addEventListener('click', () => {
//         //         //alert("Transfer Link")
//         //         abaTrans(varArray).then(() => {
//         //             win.scrollTo(0, 0);
//         //         })
//         //     })
//         // }

//         //Verificando se target Class Viagem foi reconhecido
//         // if (targetClassve) {
//         //     targetClassve.addEventListener('click', () => {
//         //         alert("Viagem Link")
//         //         // abaViag(varArray).then(() => {
//         //         //     win.scrollTo(0, 0);
//         //         // })
//         //     })
//         // }

//         //Verificando se target Class Pacotes foi reconhecido
//         // if (targetClasspt) {
//         //     targetClasspt.addEventListener('click', () => {
//         //         alert("Pacotes Link")
//         //         // abaPaco(varArray).then(() => {
//         //         //     win.scrollTo(0, 0);
//         //         // })
//         //     })
//         // }

//         //Verificando se target Class Passagens foi reconhecido
//         // if (targetClasspa) {
//         //     targetClasspa.addEventListener('click', () => {
//         //         alert("Passagens Link")
//         //         // abaPass(varArray).then(() => {
//         //         //     win.scrollTo(0, 0);
//         //         // })
//         //     })
//         // }

//         //Verificando se btn home agendamento foi reconhecido
//         // if (btnAgenAction) {
//         //     btnAgenAction.addEventListener('click', () => {
//         //         alert("HOME, btn agendamento acionado!")
//         //     })
//         // }

//     }

//     //Eventos específicos SOBRE
//     if(varArray[27].src.endsWith("sobre.html")) {
        
//         console.log("Acessando sobre.html eventos específicos!");

//         
//     }

//     //Eventos específicos AGENDAMENTO
//     if(varArray[27].src.endsWith("agendamento.html")) {
        
//         console.log("Acessando agendamento.html eventos específicos!");

//         
//     }

//     //Eventos específicos TRANSFER
//     if(varArray[27].src.endsWith("transfer-aeroporto.html")) {

//         console.log("Acessando transfer-aeroporto.html eventos específicos!");

//         //Capturando objetos específicos
//         // let btnMainAction = iframeDocument.querySelector(".ta-btn");

//         // console.log(btnMainAction);
//     }

//     //Eventos específicos VIAGEM
//     if(varArray[27].src.endsWith("viagens-executivas.html")) {

//         console.log("Acessando viagens-executivas.html eventos específicos!");

//         //Capturando objetos específicos
//         // let btnMainAction = iframeDocument.querySelector(".ve-btn");

//         // console.log(btnMainAction);
//     }

//     //Eventos específicos PACOTES
//     if(varArray[27].src.endsWith("pacotes-tur%C3%ADsticos.html")) {

//         console.log("Acessando pacotes-turísticos.html eventos específicos!");

//         //Capturando objetos específicos
//         // let btnMain01Action = iframeDocument.querySelector(".pt-btn-01");
//         // let btnMain02Action = iframeDocument.querySelector(".pt-btn-02");
//         // let btnMain03Action = iframeDocument.querySelector(".pt-btn-03");

//         // console.log(btnMain01Action);
//         // console.log(btnMain02Action);
//         // console.log(btnMain03Action);
//     }

//     //Eventos específicos PASSAGENS
//     if(varArray[27].src.endsWith("passagens-a%C3%A9reas.html")) {

//         console.log("Acessando passagens-aéreas.html eventos específicos!");

//         //Capturando objetos específicos
//         // let btnMainAction = iframeDocument.querySelector(".pa-btn");

//         // console.log(btnMainAction);
//     }
// })