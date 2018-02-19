var DatabaseClient;
(function (DatabaseClient) {
    window.addEventListener("load", init);
    var array;
    function init(_event) {
        var insertButton = document.getElementById("insert");
        var refreshButton = document.getElementById("refresh");
        var searchButton = document.getElementById("search");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        searchButton.addEventListener("click", search);
    }
    function insert(_event) {
        var inputs = document.getElementsByTagName("input");
        var query = "command=insert";
        query += "&name=" + inputs[0].value;
        query += "&firstname=" + inputs[1].value;
        query += "&matrikel=" + inputs[2].value;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }
    function refresh(_event) {
        var query = "command=find";
        sendRequest(query, handleFindResponse);
    }
    function sendRequest(_query, _callback) {
        var xhr = new XMLHttpRequest();
        //xhr.open("GET", "http://localhost:8100?" + _query, true);
        xhr.open("GET", "https://eia2-db.herokuapp.com/?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    function handleInsertResponse(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    function handleFindResponse(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            var output = document.getElementsByTagName("textarea")[0];
            output.value = xhr.response;
            var responseAsJson = JSON.parse(xhr.response);
        }
    }
    function search(_event) {
        sendRequest("command=find", handleSearchResponse);
    }
    function handleSearchResponse(_event) {
        var xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            var responseAsJson = JSON.parse(xhr.response);
            array = JSON.parse(xhr.response);
            console.log(responseAsJson);
        }
        var matInput = document.getElementById("matrikelsearch");
        var mat = matInput.value;
        for (var i = 0; i < array.length; i++) {
            console.log("Stelle " + i + array[i]);
            // if(mat = array[i].object.matrikel) {
            //   console.log("success");
            // }
        }
    }
})(DatabaseClient || (DatabaseClient = {}));
//# sourceMappingURL=DatabaseClient.js.map