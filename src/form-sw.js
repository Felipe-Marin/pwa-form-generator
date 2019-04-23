importScripts('./ngsw-worker.js')

self.addEventListener('sync', function(event) {
    if(event.tag == 'syncForm') {
        event.waitUntil(sendForms());
    }
});

function getFormsFromDB(){
    return new Promise(function(resolve, reject) {
        let idb = indexedDB.open('FormGenerator');
        idb.onsuccess = function(event) {
            this.result.transaction("Forms").objectStore("Forms").getAll().onsuccess = function(event) {
                resolve(event.target.result);
            }
        }
    });
}

function sendForms(){

}