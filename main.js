var list = document.getElementById('list');
var lastid = 0;

function Add() {
    var todo = document.getElementById('todo');
    if (todo.value != "") {
        document.getElementById('todoVal').style.color = "black";
        document.getElementById('todoVal').innerHTML = todo.value;

        var d = document.getElementById('date');
        d.innerHTML = Date().slice(0, 21);

        //adding list item into unorder-list
        var entry = document.createElement('li');

        //adding checkbox near the list item
        var check = document.createElement('input');
        check.setAttribute("type", "checkbox");
        check.setAttribute('id', 'item' + lastid);
        check.setAttribute("onClick", 'checkedGreen("' + 'item' + lastid + '")');
        entry.appendChild(check);

        // adding remove button near the list item
        var remove = document.createElement('button');
        remove.appendChild(document.createTextNode("remove"));
        remove.setAttribute('onClick', 'removeName("' + 'item' + lastid + '")');
        entry.appendChild(remove);

        entry.appendChild(document.createTextNode(" Created on: " + Date().slice(0, 21) + "  "));
        entry.appendChild(document.createTextNode("ToDo: " + todo.value));
        entry.setAttribute('id', 'item' + lastid);

        // button of removing all the checked items
        var all = document.getElementById('all');
        all.setAttribute('onClick', 'removeAllDone()');

        lastid += 1;
        list.appendChild(entry);

        // $('li').css('color', 'blue');

    }
    else {
        var text = document.getElementById('todoVal');
        text.style.color = "red";
        document.getElementById('todoVal').innerHTML = "Please enter what you need to do.";
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

    if (doneList.length > 0) {
        var returnVal = confirm("Are you sure?");
        if (returnVal)
            // remove all the checked items
            for (var i in doneList)
                removeName(doneList[i]);
    }
    else
        alert("There is nothing to remove.\nYou didn't select any line from the list.");

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


function checkedGreen(itemId) {

    if ($('#' + itemId).prop('checked')) {
        $('#' + itemId).css('color', 'black');
        $('#' + itemId).prop('checked', false);
    }
    else {
        $('#' + itemId).css('color', 'green');
        $('#' + itemId).prop('checked', true);
    }

}
