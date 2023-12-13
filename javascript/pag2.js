function obterparametros(){
    // FUNÇÃO PARA OBTER PARAMETROS DA URL
    const urlParam = new URLSearchParams(window.location.search) ;
    const param1 = urlParam.get("param1");
    const param2 = urlParam.get("param2");

    return {param1, param2};
};

function exibirPag(){
    const {param1, param2} = obterparametros();
    document.getElementById('main').innerHTML = 'Param1: ${param1}'
};

window.onload = exibirPag;