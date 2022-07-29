let header = document.getElementById('header');

header.innerHTML = `
<div class="header__logo">
    <img src="./assets/imgs/logo/ali_logo.png" alt="">
</div>
<nav class="header__navbar">
    <div class="navbar-top">
        <ul class="list-item text-white-color">
            <li class="list-item__item cur d-flex align-items-center">
                <img class="me-1" src="./assets/imgs/icon-test/download.jfif" alt="">
                Viet Partner&emsp;
                <i class="fas fa-circle-notch"></i>
            </li>
            <li class="list-item__item cur" data-bs-toggle="modal" data-bs-target="#holdingmoney">
                <img class="me-1" src="./assets/imgs/icon-test/download.jfif" width="16px" alt="">
                Holding money: 
                <span class="text-menu-color">10,00 won</span>

            </li>
            <li class="list-item__item cur" data-bs-toggle="modal" data-bs-target="#inbox">
                <img class="me-1" src="./assets/imgs/icon-test/download.jfif" width="16px" alt="">
                Inbox (0)
            </li>
            <li class="list-item__item cur" data-bs-toggle="modal" data-bs-target="#recoveryModal">
                <img class="me-1" src="./assets/imgs/icon-test/download.jfif" width="16px" alt="">
                money recovery
            </li>
            <li class="list-item__item cur">
                Partner
                &emsp;&emsp;
                Log out
            </li>
        </ul>
    </div>
    <div class="navbar-bot">
        <ul class="list-item d-flex flex-wrap justify-content-start">
            <li class="list-item__item mx-2">
                <a href="index.html" class="text-white-color" id="home">HOME</a>
            </li>
            <li class="list-item__item mx-2">
                <a href="./PowerBall.html" class="text-white-color" id="powerBall">power ball</a>
            </li>
            <li class="list-item__item mx-2">
                <a href="./PowerLadder.html" class="text-white-color" id="powerLadder">power ladder</a>
            </li>
            <li class="list-item__item mx-2">
                <a href="./EOSPowerball.html" class="text-white-color" id="EOS">EOS Powerball</a>
            </li>
            <li class="list-item__item mx-2">
                <a href="#" class="text-white-color">evolution</a>
            </li>
            <li class="list-item__item mx-2">
                <a data-bs-toggle="modal" data-bs-target="#exchange" class="text-white-color" >Recharge/Exchange</a>
            </li>
            <li class="list-item__item mx-2">
                <a href="./Notice.html" class="text-white-color" id="notice">Notice</a>
            </li>
            <li class="list-item__item mx-2">
                <a href="./ServiceCenter.html" class="text-white-color" id="service">Service center</a>
            </li>
        </ul>
    </div>
    <div class="header__text">
        <marquee direction="left" height="100%" width="100%" class="text-yellow-lighter-color">
            Account inquiry required before deposit! We are not responsible for failure to confirm after deposit with out account inquiry!!! 
        </marquee>
    </div>
</nav>
`;