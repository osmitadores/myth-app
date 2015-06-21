function insertVersion(data){
    document.getElementById('version').innerHTML = (data);
    lastVersion = document.getElementById('version').innerHTML;
    if(lastVersion == ''){
    noConnect();
}else{
    checkUpdate();
}
}
var lastVersion = '';
var atualVersion = [0,0,0];
var updatePATH = "https://raw.githubusercontent.com/osmitadores/myth-app/master/version.myth";
$.get(updatePATH, insertVersion);




function noConnect(){
    alert("Sem conexão!")
    //window.location.replace("noconnect.html");
}

function checkUpdate(){

    lastVersion = lastVersion.split(".");

    for(var i in lastVersion){
        lastVersion[i] = parseInt(lastVersion[i]);
    }
    if(atualVersion[0] < lastVersion[0]){
        alert('nova versão maior disponivel');
        downloadUpdate(lastVersion);
    }else if (atualVersion[1] < lastVersion[1]){
        alert('nova versão menor disponivel');
        downloadUpdate(lastVersion);
    }else if (atualVersion[2] < lastVersion[2]){
        alert('nova versão ajuste disponivel');
        downloadUpdate(lastVersion);
    }else{
        alert('atualizado');
    }
}

function downloadUpdate(version){
    version = version[0] +'.'+ version[1] +'.'+ version[2];
    window.location.href = 'http://path/v' + lastVersion[0] + '.' + lastVersion[1] + '.' + lastVersion[2] + '.apk'; 
}




////////////////////////////////
function getID(){
var PATH = 'https://graph.facebook.com/';
var faceID = 100000000000000;

    for(var i = 0; i < 10; i++){
        document.getElementById('tabelas').innerHTML += '<img src="'+ PATH + faceID +'/picture">';
        faceID++;
    }
    return true;
}