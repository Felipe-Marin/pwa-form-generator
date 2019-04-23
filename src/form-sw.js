self.importScripts('./ngsw-worker.js');

console.log('Service worker console is working');

self.addEventListener('sync', function(event) {
    console.log('sync event');
    if(event.tag == 'syncForm') {
        console.log('correct tag');
        event.waitUntil(getFormsFromDB());
    }
});

function getFormsFromDB(){
    return new Promise(function(resolve, reject) {
        let idb = indexedDB.open('FormGenerator');
        idb.onsuccess = function(event) {
            this.result.transaction("ng_forage").objectStore("ng_forage").getAll().onsuccess = function(event) {
                console.log('Dados da indexedDB');
                console.log(event.target.result);
                resolve(event.target.result);
            }
        }
        idb.onerror = function(event) {
            console.log('Erro acesso indexedDB');
            reject('Erro indexedDB');
        }
    });
}

function sendForms(){

}