const fs = require('fs');

const { getHeapStatistics } = require('v8');
if (process.argv[2]) {
    const logFile = process.argv[2];
    readLogFile(logFile);
} else {
    console.log('Укажите имя файла');
}

function readLogFile(logFile) {
    fs.readFile(logFile, 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
        getStatistics(data);
    });
}

function getStatistics(data) {
    const totalGames = data.length;
    const totalWins = (data.match(/1/g) || []).length;
    const totalLoses = (data.match(/0/g) || []).length;
    const totalWinsPcnt = totalWins / (totalGames / 100);
    const totalLosesPcnt = totalLoses / (totalGames / 100);

    const array = data.split("");
    function countMax(arr,el) {
        let totalMax = 0;
        let currentMax = 1;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i + 1] == el && arr[i] == el) {
                currentMax++;
            } else {
                if (totalMax < currentMax && arr[i] == el) {
                    totalMax = currentMax;
                }
                currentMax = 1;
            }
        }
        return totalMax;
    }
    
    console.log(`Всего партий:${totalGames}, побед:${totalWins} (${totalWinsPcnt}%), поражений:${totalLoses} (${totalLosesPcnt}%), максимум побед подряд:${countMax(array, 1)}, максимум поражений подряд:${countMax(array, 0)}`);
}
