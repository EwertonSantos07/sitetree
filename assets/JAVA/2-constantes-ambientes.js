//Declarando Constantes de Ambiente
export async function constAmbient() {
    return new Promise((resolve) => {

        //Declarando constantes de ambiente!!!
        let constArray = [];
        let ocultArray = [];

        //Capturando obj navbar!!
        let navBar = document.querySelector(".navbar");

        //Capturando links menu navbar
        let navHome = document.querySelector("#navbar-home");
        let navHistorico = document.querySelector("#navbar-historico");
        let navBlog = document.querySelector("#navbar-blog");
        let navContato = document.querySelector("#navbar-contato");

        //Capturando obj Menu Oculto!!
        let menuOculto = document.querySelector(".menu-oculto");

        //Capturando btn open & close Menu Oculto!!
        let openMenu = document.querySelector(".open-menu");
        let closeMenu = document.querySelector(".close-menu");

        //Capturando links Menu Oculto!!
        let ocultoHome = document.querySelector("#menu-oculto-home");
        let ocultoHistorico = document.querySelector("#menu-oculto-historico");
        let ocultoBlog = document.querySelector("#menu-oculto-blog");
        let ocultoContato = document.querySelector("#menu-oculto-contato");
        let ocultoLoading = document.querySelector("#loading-text")

        //Capturando obj Footer Menu
        let footerMenu = document.querySelector("#ft-menu");

        //Capturando links Footer Menu!!
        let footerHome = document.querySelector("#ft-home");
        let footerHistorico = document.querySelector("#ft-historico");
        let footerBlog = document.querySelector("#ft-blog");
        let footerContato = document.querySelector("#ft-contato");

        //Capturando obj Footer Política & link Política-e-privacidade
        let footerPol = document.querySelector("#ft-h1-politica");
        let footerPolitica = document.querySelector("#ft-política");

        //Capturando obj tópicos e itens relacionados
        let footerTop = document.querySelector("#ft-topicos");
        let footerSite = document.querySelector("#ft-sites");
        let footerClientes = document.querySelector("#ft-clientes");
        let footerHospedagem = document.querySelector("#ft-hospedagem");
        let footerSobre = document.querySelector("#ft-sobre");

        //Inserindo constantes de ambiente do sistema no array!
        constArray.push(navBar, navHome, navHistorico, navBlog, navContato, menuOculto, openMenu, closeMenu, ocultoHome, ocultoHistorico, ocultoBlog, ocultoContato, ocultoLoading, footerMenu, footerHome, footerHistorico, footerBlog, footerContato, footerPol, footerPolitica, footerTop, footerSite, footerClientes, footerHospedagem, footerSobre);
        resolve(constArray);
    });
};