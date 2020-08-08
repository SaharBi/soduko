var matArr = [
    [
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [4, 5, 6, 7, 8, 9, 1, 2, 3],
        [7, 8, 9, 1, 2, 3, 4, 5, 6],
        [2, 3, 1, 6, 7, 4, 8, 9, 5],
        [8, 7, 5, 9, 1, 2, 3, 6, 4],
        [6, 9, 4, 5, 3, 8, 2, 1, 7],
        [3, 6, 7, 2, 9, 1, 5, 4, 8],
        [5, 4, 2, 8, 6, 7, 9, 3, 1],
        [9, 1, 8, 3, 4, 5, 6, 7, 2]

    ],
    [
        [9, 1, 3, 4, 5, 2, 6, 7, 8],
        [2, 4, 5, 6, 7, 8, 1, 3, 9],
        [6, 7, 8, 1, 3, 9, 2, 4, 5],
        [1, 6, 2, 7, 4, 5, 9, 8, 3],
        [3, 8, 4, 2, 9, 1, 5, 6, 7],
        [5, 9, 7, 3, 8, 6, 4, 1, 2],
        [4, 2, 9, 8, 1, 3, 7, 5, 6],
        [7, 3, 6, 5, 2, 4, 8, 9, 1],
        [8, 5, 1, 9, 6, 7, 3, 2, 4]
    ],
    [
        [5, 4, 2, 9, 8, 7, 6, 1, 3],
        [8, 9, 6, 4, 3, 1, 5, 2, 7],
        [7, 3, 1, 6, 5, 2, 9, 8, 4],
        [4, 2, 5, 3, 1, 9, 7, 6, 8],
        [1, 8, 3, 2, 7, 6, 4, 5, 9],
        [6, 7, 9, 5, 4, 8, 2, 3, 1],
        [3, 1, 4, 7, 2, 5, 8, 9, 6],
        [2, 6, 7, 8, 9, 3, 1, 4, 5],
        [9, 5, 8, 1, 6, 4, 3, 7, 2]
    ]
]

validFunc = () => { //Validation Function (username: abcd, password: 1234)
    let userName = document.getElementById("userName").value;
    let password = document.getElementById("password").value;
    if (userName != "abcd" || password != "1234") {
        alert("The Username Or Password is Wrong.")
    } else {
        window.location.href = "sudoku.html"; // move to the game page
    }
}

var winSudoku = '';
function createSudoku(lv) {
    let chooseTable = Math.floor(Math.random() * 3);
    let randMatrix = matArr[chooseTable];
    winSudoku = randMatrix;
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            document.getElementById(`t${row}${col}`).value = randMatrix[row][col]; // set numbers at the "td"s
            document.getElementById(`t${row}${col}`).disabled = true;

        }
    }
    var elapsedTime = 0;
    var timerRunning = true;
    startTimer(0);

    function startTimer(initialTime) {
        elapsedTime = initialTime - 1;
        advanceTimer();
    };

    function advanceTimer() {
        if (timerRunning == true) {
            elapsedTime++;
        };
        document.getElementById("timer").innerHTML = formatTime(elapsedTime);
        setTimeout(advanceTimer, 1000);
    };

    function formatTime(seconds) {
        var hours = "00" + Math.floor(seconds / 3600)
        hours = hours.substr(hours.length - 2, 2);
        var remaining = seconds - (hours * 3600);
        var minutes = "00" + Math.floor(remaining / 60);
        minutes = minutes.substr(minutes.length - 2, 2);
        var seconds = "00" + (remaining - (minutes * 60));
        seconds = seconds.substr(seconds.length - 2, 2);
        var formattedTime = hours + ":" + minutes + ":" + seconds;
        return formattedTime;
    };


    lv *= 2;
    for (let i = 0; i < lv; i++) {
        let randRow = Math.floor(Math.random() * 9);
        let randCol = Math.floor(Math.random() * 9);

        if (document.getElementById(`t${randRow}${randCol}`).value != '') {
            document.getElementById(`t${randRow}${randCol}`).value = ''; // remove numbers at random places
            document.getElementById(`t${randRow}${randCol}`).disabled = false;

        }
        else {
            i--;
        }
    }
}
function check() {
    let answer = true;

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (document.getElementById(`t${row}${col}`).value != winSudoku[row][col]) { // compare the answer to the original mat
                answer = false;
            }
        }
    }
    if (answer == true) {
        alert('Good Job!');
    }
    else {
        alert('Try Again!');
    }
}
