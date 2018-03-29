var list = document.getElementById('demo');
var lastid = 0;

function changeText2() {
    var todo = document.getElementById('todo');
    if (todo.value != "") {
        document.getElementById('boldStuff2').innerHTML = todo.value;

        var d = document.getElementById('date');
        d.innerHTML = Date().slice(0, 21);

        //adding list item into unorder-list
        var entry = document.createElement('li');

        //adding checkbox near the list item
        var check = document.createElement('input');
        check.setAttribute("type", "checkbox");
        check.setAttribute('id', 'item' + lastid);

        // adding remove button near the list item
        var remove = document.createElement('button');
        remove.appendChild(document.createTextNode("remove"));
        remove.setAttribute('onClick', 'removeName("' + 'item' + lastid + '")');


        entry.appendChild(check);
        entry.appendChild(remove);
        entry.appendChild(document.createTextNode(" Created on: " + Date().slice(0, 21) + "  "));


        entry.appendChild(document.createTextNode("ToDo: " + todo.value));
        entry.setAttribute('id', 'item' + lastid);

        $('#item' + lastid + '').css('color', 'red');

        // button of removing all the checked items
        var all = document.getElementById('all');
        all.setAttribute('onClick', 'removeAllDone()');

        lastid += 1;
        list.appendChild(entry);

    }
    else {
        var text = document.getElementById('boldStuff2');
        text.style.color = "red";
        document.getElementById('boldStuff2').innerHTML = "Please enter what you need to do.";
    }


}



function removeName(itemid) {
    var item = document.getElementById(itemid);
    list.removeChild(item);
}


function removeAllDone() {
    //get all the checked items into array
    var doneList = []
    $('input[type=checkbox]:checked').each(function () {
        doneList.push($(this).attr('id'))
    });

    console.log(doneList);

    // remove all the checked items
    for (var i in doneList) {
        // var getID = doneList[i];
        //console.log(getID);
        removeName(doneList[i]);
        // var item = document.getElementById(getID);
        // list.removeChild(item);
    }

}


// var done = [];
    // done = $('#demo').find('input');
    // console.log(done);
    // for (var i in done) {
    //     var getID = done[i].attributes['id'].value;
    //     console.log(getID);
    //     var item = document.getElementById(getID);
    //     var val = done[i].attributes['checked'].value;
    //     if (val)
    //         list.removeChild(item);
    //     // removeName(item);

    // }
