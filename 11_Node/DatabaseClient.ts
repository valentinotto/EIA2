namespace DatabaseClient {
    window.addEventListener("load", init);
    var array: any[];


    function init(_event: Event): void {
        console.log("Init");
        let insertButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("insert");
        let refreshButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("refresh");
        let searchButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("search");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        searchButton.addEventListener("click", search);
    }

    function insert(_event: Event): void {
        let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
        let query: string = "command=insert";
        query += "&name=" + inputs[0].value;
        query += "&firstname=" + inputs[1].value;
        query += "&matrikel=" + inputs[2].value;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }

    function refresh(_event: Event): void {
        let query: string = "command=find";
        sendRequest(query, handleFindResponse);
    }

    function sendRequest(_query: string, _callback: EventListener): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        //xhr.open("GET", "http://localhost:8100?" + _query, true);
        xhr.open("GET", "https://eia2-db.herokuapp.com/?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }

    function handleInsertResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }

    function handleFindResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
            output.value = xhr.response;
            let responseAsJson: JSON = JSON.parse(xhr.response);
        }
    }

 function search (_event : ProgressEvent) {
   let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
   if (xhr.readyState == XMLHttpRequest.DONE) {
       let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
       output.value = xhr.response;
       let responseAsJson: JSON = JSON.parse(xhr.response);
       console.log(responseAsJson);
     }

   let matInput : HTMLInputElement = <HTMLInputElement>document.getElementById("matrikelsearch");
   let mat : String = matInput.value;
   console.log(mat);
   console.log(array);
   for(let i :number = 0; i< array.length;i++){
      console.log("for schleife");
   }
 }
}
