
var database = firebase.database();
$("#save").on("click", function (e) {
    e.preventDefault();
    var trainName = $("#trainName").val();
    var trainDest = $("#trainDest").val();
    var firstTime = $("#firstTime").val();
    var frequency = $("#frequency").val();
    database.ref().push({
        trainName: trainName,
        trainDest: trainDest,
        frequency: frequency
    })
});
database.ref().on("child_added", function (snapshot) {
    var data = snapshot.val();
    var minutesAway = 99;
    var html = `
    <tr>
    <th${data.trainName}</th>
    <td>${data.trainDest}</td>
    <td>${data.frequency}</td>
    <td>${nextArrival}</td>
    <td></td>
</tr>
    `;
    $("#trainSection").append(html);
});

