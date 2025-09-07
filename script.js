// cart calling button clicked and alert service and reducing coin section

const callButtons = document.getElementsByClassName('btn-Call');
for (let callButton of callButtons) {
    callButton.addEventListener('click', function () {





        const callSend = callButton.parentNode.parentNode.childNodes[7].innerText;
        const callSector = callButton.parentNode.parentNode.childNodes[3].innerText;

        const coinTotal = parseInt(document.getElementById('coin-count').innerText);
        if (coinTotal > 0) {
            alert('Calling' + ' ' + callSector + ' ' + callSend + '...');


            const historySection = document.getElementById('history-side');

            const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
            const newDivHistory = document.createElement('div');

            newDivHistory.innerHTML =
                `
                <div class="history-inbox">
                <div>
                    <h2 class="history-inbox-sector inter-font">${callSector}</h2>
                    <p class="history-inbox-num hind-madurai-regular">${callSend}</p>
                </div>
                <p class="hind-madurai-regular">${currentTime}</p>
            </div>
            `;
            historySection.appendChild(newDivHistory);

        }
        else {
            alert('You don’t have enough coins to make a call. Minimum 20 coins required.')
            return;
        }

        const coinRemain = coinTotal - 20;
        document.getElementById('coin-count').innerText = coinRemain;
    })
}


// document.getElementById('call-btn1')
//     .addEventListener('click', function () {
//         console.log('clicked');



//     })


// count copy in window

document.getElementById('Copy-btn1').addEventListener('click', function () {
    const copyClicked = parseInt(document.getElementById('copied-count').innerText)
    const copyResultClicked = copyClicked + 1;
    document.getElementById('copied-count').innerText = copyResultClicked;
})
document.getElementById('Copy-btn2').addEventListener('click', function () {
    const copyClicked = parseInt(document.getElementById('copied-count').innerText)
    const copyResultClicked = copyClicked + 1;
    document.getElementById('copied-count').innerText = copyResultClicked;
})



