//Função para alterar propriedades CSS Menu Oculto em Loading...
export async function changeCSSOculto(listOculto) {
    return new Promise((resolve) => {
        listOculto[5].style.cursor = "wait";
        listOculto[8].style.display = "none";
        listOculto[9].style.display = "none";
        listOculto[10].style.display = "none";
        listOculto[11].style.display = "none";
        listOculto[12].style.display = "flex";
        listOculto[12].style.cursor = "wait";

        let statusCSSOculto = "Propriedades Menu Oculto Loading alteradas";
        resolve(statusCSSOculto);
    })
}

//Função para retornar propriedades CSS Menu Oculto após Loading...
export async function retornaCSSOculto(listOculto) {
    return new Promise((resolve) => {
        listOculto[5].style.cursor = "default";
        listOculto[8].style.display = "";
        listOculto[9].style.display = "";
        listOculto[10].style.display = "";
        listOculto[11].style.display = "";
        listOculto[12].style.display = "none";
        listOculto[12].style.cursor = "";

        let statusCSSOculto = "Propriedades Menu Oculto Loading Default";
        resolve(statusCSSOculto);
    })
}

//Função para fechar MENU OCULTO
export async function closeHideMenu(listConst, x) {
    return new Promise((resolve) => {
        setTimeout(()=> {
            listConst[5].style.opacity = '0';
            listConst[5].style.left = '100vw';    
            setTimeout(() => {
                listConst[5].style.display = 'none';
                let statusOff = "Menu Oculto Encerrado";
                resolve(statusOff);
            }, x)
        }, x)
    });
}