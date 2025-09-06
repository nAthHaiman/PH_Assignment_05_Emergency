// calling alert in window
// cart-01
const nameService = document.getElementById('cart-head1').innerText;
const callService = document.getElementById('num1').innerText;

document.getElementById('call1').addEventListener('click', function (event) {
    const coinTotal = parseInt(document.getElementById('coin-count').innerText);
    if (coinTotal > 0) {
        alert('Calling' + ' ' + nameService + ' ' + callService + '...');
    }
    else {
        alert('You don’t have enough coins to make a call. Minimum 20 coins required.')
        return;
    }
    const coinRemain = coinTotal - 20;
    document.getElementById('coin-count').innerText = coinRemain;
})

//cart-02
const nameService2 = document.getElementById('cart-head2').innerText;
const callService2 = document.getElementById('num2').innerText;

document.getElementById('call2').addEventListener('click', function (event) {
    const coinTotal = parseInt(document.getElementById('coin-count').innerText);
    if (coinTotal > 0) {
        alert('Calling' + ' ' + nameService + ' ' + callService + '...');
    }
    else {
        alert('You don’t have enough coins to make a call. Minimum 20 coins required.')
        return;
    }
    const coinRemain = coinTotal - 20;
    document.getElementById('coin-count').innerText = coinRemain;
})



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
