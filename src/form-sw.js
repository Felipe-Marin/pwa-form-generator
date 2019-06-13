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
                        postGoogleForms(value.id, value.form);
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


function postGoogleForms(id, form){
    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSf7agrqjLhVAUa4IEQfL2wxZVZRtAbcT9hDe3k-eR9Ty6bnfg/formResponse';
    let formBody = new URLSearchParams();
    formBody.append('entry.320130565', id);
    formBody.append('entry.42739538', form['q1']);
    formBody.append('entry.750226015', form['q2']);
    formBody.append('entry.642868757', form['q3']);
    formBody.append('entry.692027152', form['q4']);
    formBody.append('entry.1905710609', form['q5']);
    formBody.append('entry.1495394648', form['q6']);
    formBody.append('entry.391224053', form['q7']);
    fetch(formUrl, {
        mode: 'no-cors',
        method: 'post',
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