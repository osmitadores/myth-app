function insertVersion(data){
    document.getElementById('version').innerHTML = (data);
    lastVersion = document.getElementById('version').innerHTML;
    if(lastVersion == ''){
        noConnect();
    }else{
        checkUpdate();
    }
}

$.ajaxSetup({ cache: false });
var lastVersion = '';
var atualVersion = [0,2,1];
var update = true;
var updatePATH = "https://raw.githubusercontent.com/osmitadores/myth-app/master/version.myth";


function noConnect(){
    alert("Sem conexão!")
    window.location.replace("noconnect.html");
}

function checkUpdate(){

    lastVersion = lastVersion.split(".");

    for(var i in lastVersion){
        lastVersion[i] = parseInt(lastVersion[i]);
    }
    if(atualVersion[0] < lastVersion[0]){
        update = confirm('Nova versão maior disponível.\nDeseja atualizar?');
        downloadUpdate(lastVersion);
    }else if (atualVersion[1] < lastVersion[1]){
        update = confirm('Nova versão menor disponível.\nDeseja atualizar?');
        downloadUpdate(lastVersion);
    }else if (atualVersion[2] < lastVersion[2]){
        update = confirm('Nova versão de ajuste disponível.\nDeseja atualizar?');
        downloadUpdate(lastVersion);
    }else {
        indexMyth(Myth);
    }
}

function downloadUpdate(version){
    if (update) {
        var downloadPATH = 'https://github.com/osmitadores/myth-app/releases/download/v';
        version = version[0] +'.'+ version[1] +'.'+ version[2];
        window.location.href = downloadPATH + version + '/OsMitadores.apk';
    }else {
        indexMyth(Myth);
    }
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
