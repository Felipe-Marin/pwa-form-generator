self.importScripts('./ngsw-worker.js');

console.log('Service worker console is working');

self.addEventListener('sync', function(event) {
    console.log('sync event');
    if(event.tag == 'syncForm') {
        console.log('correct tag');
        event.waitUntil(submitForms());
    }
});

function submitForms(){
    return new Promise(function(resolve, reject) {
        let idb = indexedDB.open('FormGenerator');
        idb.onsuccess = function(event) {
            let transaction = event.target.result.transaction("ng_forage", "readwrite");
            let objectStore = transaction.objectStore("ng_forage");
            objectStore.openCursor().onsuccess = function(event){
                let cursor = event.target.result;
                if(cursor){
                    let value = cursor.value;
                    if(value.status == 0){
                        postGoogleForms(value.formId, value.form);
                        value.status = 1;
                        cursor.update(value);
                    }
                    cursor.continue();
                }
            }
            resolve("Success");
        }
        idb.onerror = function(event) {
            console.log('Erro acesso indexedDB');
            reject('Erro indexedDB');
        }
    });
}


function postGoogleForms(formId, form){
    const formUrl = 'https://script.google.com/macros/s/AKfycbzISEMzIqfggbOgAixcpdff_J4ksbxwSPGMAxqJe1Zhc0WMR3Dfpdogyvw6Ur7kv7or/exec';
    let formBody = new URLSearchParams();
    formBody.append('sheetName', formId);
    for(let k in form){
        formBody.append(k, form[k]);
    }
    fetch(formUrl, {
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: formBody
        }
    ).then(function (response) {
        console.log(response);
        if(Notification.permission === 'granted'){
            var options = {body: 'Resposta enviada com sucesso para o servidor'};
            self.registration.showNotification('Resposta enviada!', options);
        }        
    });
}