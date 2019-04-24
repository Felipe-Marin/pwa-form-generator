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
                        //enviar form para o servidor (value.form)
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
