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
    const formUrl = 'https://script.google.com/macros/s/AKfycbysv01XRVanoBgKaGvoNyTApdSkA1P7LW_vdQr6SvkCf9rE4zyw9d8Th9ECwLgw_PxN3A/exec';
    let formBody = []
    formBody.push(encodeURIComponent('sheetName') + '=' + encodeURIComponent(formId));
    for(let k in form){
        var encodedKey = encodeURIComponent(k);
        var encodedValue = encodeURIComponent(form[k]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join('&');
    fetch(formUrl + '?' + formBody, {
        method: 'get',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': '*/*'
        },
        }
    ).then(function (response) {
        console.log(response);
        if(Notification.permission === 'granted'){
            var options = {body: 'Resposta enviada com sucesso para o servidor'};
            self.registration.showNotification('Resposta enviada!', options);
        }        
    });
}
