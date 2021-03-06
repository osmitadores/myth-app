/*
*   > MITHYBOARD SCRIPT
*   > VERSION: 1.9.0
*   > BUILD: 0616-17
*   > ALTERAÇÕES:
*       > Criação do pseudo-DB.
*       > Função que auto-escreve os badges e a quantidade.
*       > Correção no hover animation das badges.
*       > Mais Badges adicionadas e correção NA IDENTAÇÃO DO FLIKE!
*       > Novo sistema de criação de badges.
*       > Mitadores agora são arrays de um objeto.
*       > Miadores agora são objetos com atributos.
*       > Inserido a escrita do documento inteiro via script.
*       > Arrumando método de escrita no documento.
*       > Limpeza no código e criação de sort alfabético.
*       > Added ordenar por quantidade de badges.
*       > Adicionado tinysort (novo método de sort).
*       > Tentativas com o gayQuery.
*
*   > WARNINGS:
*       > NÃO ALTERAR O MÉTODO "writeBadges(myth)", ELE É O CORE QUE FAZ A PORA TODA.
*       > NÃO ALTERAR A PRIMEIRA POSIÇÃO DOS ARRAYS (0), A MENOS QUE O ID DO MITADOR SEJA ALTERADO.
*       > CLARO, NÃO FUÇE.
*
*   > NOMENCLATURAS:
*       > VARIÁVEIS DE BADGES COMUNS: NOMES SUGESTIVOS COM NO MÁXIMO DUAS PALAVRAS (EX: doisPotes).
*       > VARIÁVEIS DE BADGES TIPO TIER: UMA PALAVRA SEGUIDA DE "myth" (EX: mythLegacy).
*       > VARIÁVEIS DE BADGES TIPO CREST: NOME DO MITADOR SEGUIDO DE "c" (EX: cFlicky).
*       > NOVO SISTEMA DE CRIAÇÃO DE BADGES! CRIAR VAR CHAMANDO A FUNÇÃO createBadge(title,imgName).
*
*   > CRIAÇÃO DE BADGES:
*       > var nomeDaBadge = createBadge('Título da Badge', 'nome do arquivo da imagem sem extensão');
*       > Exemplo: var doisPotes = createBadge('Luana exclusive \'Doooois Pooootes\' Badge', 'pots');
*       > Caso a badge não tenha imagem, é só ignorar o segundo argumento, a imagem será automaticamente adicionada.
*       > Exemplo: var pauHd = createBadge('Aragão exclusive \'Pau em HD\' Badge');
*/


function writeBadges(myth){
/*
*   Descrição: Função que escreve no #document as imagens
*   das badges e e a quantidade delas (a quantidade é cal-
*   culada a partir do array.length e não dos filhos da tag).
*   Args: 1. O array do mitador.
*/
    for (var i in myth.badges) {
        document.getElementById(myth.tagId).innerHTML += ' <img class="badgeicon" title="' + myth.badges[i][0] + '" src="' + PATH + myth.badges[i][1] + '.png"> ';
    }
    document.getElementById(myth.tagId1).innerHTML += myth.badges.length;
}


function indexMyth(osMitos){
/*
*   Descrição: Função que simplifica a escrita das badges
*   no #document.
*   Agora simplifica a escrita do documento todo.
*   Args: 1. Os Mitadores (object). **apesar de não ter um
*   outro argumento válido**
*/

    document.getElementById('version').innerHTML = '';
    for (var i in osMitos){

        document.getElementById('tabelas').innerHTML += createTable(osMitos[i]);
    }

    for (var x in osMitos){
        writeBadges(osMitos[x]);
    }
}

//////////////////////////////
indexMyth(Myth);
document.getElementById('titl').innerHTML = "Mostrando lista na ordem default";
var checkAlfa = true;
var checkBadge = false;
var checkTier = true;
var checkAno = true;

//////////////////////////////////
function toggleSort(type){

    if (!type) {
        tinysort('div#tabelas>table',{order:'rand'});
        document.getElementById('titl').innerHTML = "Mostrando lista em ordem aleatória";
    }

    if (type == 'alfa'){

        if (checkAlfa) {
            tinysort('div#tabelas>table');
            checkAlfa = false;
            document.getElementById('titl').innerHTML = "Mostrando lista em ordem alfabética (A-Z)";
        }else{
            tinysort('div#tabelas>table',{order:'desc'});
            checkAlfa = true;
            document.getElementById('titl').innerHTML = "Mostrando lista em ordem alfabética (Z-A)";
        }
    }

    if (type == 'badge') {

        if (checkBadge) {
            tinysort('div#tabelas>table');
            tinysort('div#tabelas>table',{selector:'td.badges2'});
            checkBadge = false;
            document.getElementById('titl').innerHTML = "Mostrando lista por quantidade de badges (Crescente)";

        }else{
            tinysort('div#tabelas>table',{order:'desc'});
            tinysort('div#tabelas>table',{selector:'td.badges2',order:'desc'});
            checkBadge = true;
            document.getElementById('titl').innerHTML = "Mostrando lista por quantidade de badges (Decrescente)";
        }



    }

    if (type == 'tier') {

        if (checkTier) {
            tinysort('div#tabelas>table');
            tinysort('div#tabelas>table',{selector:'span.tierlevel'});
            checkTier = false;
            document.getElementById('titl').innerHTML = "Mostrando lista por Tier (Decrescente)";
        }else{
            tinysort('div#tabelas>table',{order:'desc'});
            tinysort('div#tabelas>table',{selector:'span.tierlevel',order:'desc'});
            checkTier = true;
            document.getElementById('titl').innerHTML = "Mostrando lista por Tier (Crescente)";
        }

    }

    if (type == 'ano') {

        if (checkAno) {
            tinysort('div#tabelas>table');
            tinysort('div#tabelas>table',{selector:'strong.mythano'});
            checkTier = false;
            document.getElementById('titl').innerHTML = "Mostrando lista por Ano (Decrescente)";
        }else{
            tinysort('div#tabelas>table',{order:'desc'});
            tinysort('div#tabelas>table',{selector:'strong.mythano',order:'desc'});
            checkTier = true;
            document.getElementById('titl').innerHTML = "Mostrando lista por Ano (Crescente)";
        }

    }


}

function clickedButton(type){

    if(type == 'random'){
        var unclick = ['alfa','tier','badge','ano'];
    }else if (type == 'badge'){
        var unclick = ['alfa','tier','random','ano'];
    }else if (type == 'alfa'){
        var unclick = ['badge','tier','random','ano'];
    }else if (type == 'tier'){
        var unclick = ['alfa','badge','random','ano'];
    }else if (type == 'ano'){
        var unclick = ['alfa','badge','random','tier'];
    }
    for (var i in unclick){
        document.getElementById('butt'+unclick[i]).style.backgroundColor = '#224';
    }
    document.getElementById('butt'+type).style.backgroundColor = 'red';
}


///////////////////////////////


$(document).ready(function(){

    // fais slide inicial
    $('#tabelas').hide(0, function(){
        $('#tabelas').delay(1000).toggle('slow','linear');
    });

    // fais slide ao apertar o botão
    $('#buttalfa').click(function(){
        $('#tabelas').toggle(600, function(){
            toggleSort('alfa');
            $('#tabelas').toggle(950);

        });
        clickedButton('alfa');
    });
    $('#buttbadge').click(function(){
        $('#tabelas').toggle(600, function(){
            toggleSort('badge');
            $('#tabelas').toggle(950);
        });
        clickedButton('badge');
    });
    $('#butttier').click(function(){
        $('#tabelas').toggle(600, function(){
            toggleSort('tier');
            $('#tabelas').toggle(950);
        });
        clickedButton('tier');
    });
    $('#buttrandom').click(function(){
        $('#tabelas').toggle(600, function(){
            toggleSort();
            $('#tabelas').toggle(950);
        });
        clickedButton('random');
    });
    $('#buttano').click(function(){
        $('#tabelas').toggle(600, function(){
            toggleSort('ano');
            $('#tabelas').toggle(950);
        });
        clickedButton('ano');
    });

    $('#tabelas').click(function(){

            $('.button').delay(1).hide('slow','linear');
            $('#titl').delay(1).hide('slow','linear');
            $('#hidden').delay(1).show('slow','linear');
        });

    $('#hidden').click(function(){
        $('.button').show('slow','linear');
        $('#titl').show('slow','linear');
        $('#hidden').hide('slow','linear');
        }
    );

});
