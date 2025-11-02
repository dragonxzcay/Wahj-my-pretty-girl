let teksSekarang = 1;
let audio;
let swiper;
let jumlahKlik = 0;
let jumlahSkala = 1;
let sudahKlik = true;
let fungsiBerfungsi = false;

const loveEmojis = ['💖', '💕', '💗', '💓', '💞'];

const subteks2a = document.getElementById('subteks2a');
const subteks2b = document.getElementById('subteks2b');
const teks3 = document.getElementById('teks3');
const teksTerakhir = document.getElementById('teksTerakhir');
const teksLove = document.getElementById('teksLove');
const stikerAkhir1 = document.getElementById('stikerAkhir1');
const stikerAkhir2 = document.getElementById('stikerAkhir2');
const stikerAkhir3 = document.getElementById('stikerAkhir3');
const stikerDuaDef = document.getElementById('stikerDuaDef');
const teks2 = document.getElementById('teks2');

const varsubteks2a = subteks2a.innerHTML;
const varsubteks2b = subteks2b.innerHTML;
const initeks = teks3.innerHTML;
const initeksTerakhir = teksTerakhir.innerHTML;
const defTeksLove = teksLove.innerHTML;
const ambilRandomEmoji = loveEmojis[Math.floor(Math.random() * loveEmojis.length)];
const teksDefault = teks2.innerHTML;
const stikerDefault = stikerDuaDef.src;

let loveAudio;
let mwaahAudio;

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    audio = new Audio(document.getElementById('linkmp3').src);
    audio.loop = true;
    
    loveAudio = new Audio('assets/i-love-you.mp3');
    mwaahAudio = new Audio('assets/mwaah.mp3');
    mwaahAudio.loop = true;
    loveAudio.addEventListener('ended', showFinalGrandMessage);
    
    swiper = new Swiper(".mySwiper", {
        allowTouchMove: false,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: false
        },
        on: {
            slideChange: function() {
                teksSekarang++;
                const teksScale = document.querySelector('#teks' + teksSekarang);
                const stikerScale = document.querySelector('#stiker' + teksSekarang);
                const Tombol = document.querySelector('#Tombol');
                
                setTimeout(function() {
                    teksScale.classList.add("scale1");
                    stikerScale.classList.add("scale1");
                    
                    if (teksSekarang == 2) {
                        Tombol.style = "opacity:1;transform: scale(1);";
                    } else if (teksSekarang == 3) {
                        setTimeout(katanimasi, 300);
                    }
                }, 50);
            },
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
    });

    teks3.innerHTML = "";
    teksTerakhir.innerHTML = "";
    teksLove.innerHTML += " 1% " + ambilRandomEmoji;

    document.getElementById('loveIn').innerHTML = `
        <style>
            .lovein svg{animation:none;stroke:#ff69b4;stroke-width:1.3;fill:none;width:35px;height:35px}
        </style>
        <label class="lovein">
            <svg class="line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g transform="translate(2.550170, 3.550158)">
                    <path d="M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z"></path>
                    <path d="M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842"></path>
                </g>
            </svg>
        </label>
        <p id="ket">انتِ وهـج؟</p>
    `;

    document.getElementById("loveIn").onclick = function() {
        if (sudahKlik) {
            audio.play();
            document.querySelector(".overlay").style.display = "none";
            document.querySelector("#stiker1").classList.add("scale1");
            document.querySelector("#teks1").classList.add("scale1");
            document.querySelector("#wallpaper").style = "transform:scale(1)";
            
            setTimeout(function() {
                fungsiBerfungsi = true;
            }, 300);
        } else {
            sudahKlik = true;
            document.getElementById('loveIn').innerHTML = `
                <style>
                    .lovein svg{animation:none;stroke:#ff69b4;stroke-width:1.3;fill:none;width:35px;height:35px}
                </style>
                <label class="lovein">
                    <svg class="line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g transform="translate(2.550170, 3.550158)">
                            <path d="M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z"></path>
                            <path d="M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842"></path>
                        </g>
                    </svg>
                </label>
                <p id="ket">انتِ وهـج؟</p>
            `;
        }
    };

    const overlayMsg = document.querySelector(".loading-message");
    overlayMsg.style.display = "none";
    const loveBlock = document.querySelector(".blocklove");
    loveBlock.style.display = "flex";

    const scrollContainer = document.getElementById("scroll-container");
    const scrollInterval = setInterval(() => {
        scrollContainer.scrollTop += 10;
    }, 50);

    setupEventListeners();
}

function typeArabicHTML(container, html, speed = 50, callback) {
    container.innerHTML = "";
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    const nodes = [];
    
    function traverse(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            nodes.push({ type: "text", text: node.textContent });
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            const clone = node.cloneNode(false);
            nodes.push({ type: "element", element: clone, children: Array.from(node.childNodes) });
        }
    }
    tempDiv.childNodes.forEach(traverse);

    function typeNode(idx = 0) {
        if (idx >= nodes.length) {
            if (callback) callback();
            return;
        }
        const node = nodes[idx];
        if (node.type === "text") {
            const span = document.createElement("span");
            container.appendChild(span);
            let charIdx = 0;
            function typeChar() {
                if (charIdx < node.text.length) {
                    span.textContent += node.text[charIdx];
                    charIdx++;
                    setTimeout(typeChar, speed);
                } else {
                    typeNode(idx + 1);
                }
            }
            typeChar();
        } else if (node.type === "element") {
            container.appendChild(node.element);
            if (node.children.length > 0) {
                const childHtml = node.children.map(c => c.outerHTML || c.textContent).join('');
                typeArabicHTML(node.element, childHtml, speed, () => typeNode(idx + 1));
            } else {
                typeNode(idx + 1);
            }
        }
    }
    typeNode();
}

function katanimasi() {
    const combinedText = varsubteks2a + "\n\n" + varsubteks2b;
    typeArabicHTML(teks3, combinedText, 45, () => {
        setTimeout(function() {
            const teksScale = document.querySelector('#teks3');
            const stikerScale = document.querySelector('#stiker3');
            
            teksScale.classList.remove("scale1");
            stikerScale.classList.remove("scale1");
            teksScale.classList.add("scale0");
            stikerScale.classList.add("scale0");
            
            setTimeout(function() {
                stikerAkhir1.src = stikerAkhir2.src;
                teks3.innerHTML = "";
            }, 450);
            
            setTimeout(function() {
                setTimeout(katanimasi2, 200);
                teksScale.classList.remove("scale0");
                stikerScale.classList.remove("scale0");
                teksScale.classList.add("scale1");
                stikerScale.classList.add("scale1");
            }, 550);
        }, 1400);
    });
}

function katanimasi2() {
    typeArabicHTML(teks3, initeksTerakhir, 45, () => {
        setTimeout(function() {
            teks3.innerHTML += `<br><br><br><span id="teksLove">${defTeksLove} 1% ${ambilRandomEmoji}</span>`;
            animateteksnim();
        }, 300);
    });
}

function animateteksnim() {
    let percent = 1000;
    setTimeout(function() {
        const intervalId = setInterval(() => {
            if (percent < 1000000) {
                percent += Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;
                const randomEmoji = loveEmojis[Math.floor(Math.random() * loveEmojis.length)];
                document.getElementById('teksLove').innerHTML = `<b>${defTeksLove} ${percent}% ${randomEmoji}</b>`;
            } else {
                clearInterval(intervalId);
                setInterval(falling, 200);
                percent = 1000000;
                const randomEmoji = loveEmojis[Math.floor(Math.random() * loveEmojis.length)];
                document.getElementById('teksLove').innerHTML = `<b>${defTeksLove} <span style='color:#ffb6c1'>${percent}%</span> ${randomEmoji}</b>`;
                document.getElementById('teksLove').style = "font-size:20px;transition:all .8s ease";
                
                const stiker3 = document.querySelector('#stiker3');
                stiker3.classList.remove("scale1");
                stiker3.classList.add("scale0");
                
                setTimeout(function() {
                    stikerAkhir1.src = stikerAkhir3.src;
                    stiker3.classList.remove("scale0");
                    stiker3.classList.add("scale1");
                    setTimeout(startCountdown, 2000);
                }, 400);
            }
        }, 20);
    }, 10);
}

function startCountdown() {
    audio.pause();
    audio.currentTime = 0;
    
    const countdownOverlay = document.createElement('div');
    countdownOverlay.className = 'countdown-overlay';
    countdownOverlay.id = 'countdownOverlay';
    document.body.appendChild(countdownOverlay);
    
    const countdownNumber = document.createElement('div');
    countdownNumber.className = 'countdown-number';
    countdownOverlay.appendChild(countdownNumber);
    countdownOverlay.style.display = 'flex';
    
    let count = 3;
    function updateCountdown() {
        if (count >= 0) {
            countdownNumber.textContent = count;
            const darkness = (3 - count) * 0.33;
            countdownOverlay.style.background = `rgba(0, 0, 0, ${darkness})`;
            
            if (count > 0) {
                setTimeout(updateCountdown, 1000);
            } else {
                setTimeout(startLoveConfession, 1000);
            }
            count--;
        }
    }
    updateCountdown();
}

function startLoveConfession() {
    const countdownOverlay = document.getElementById('countdownOverlay');
    if (countdownOverlay) countdownOverlay.remove();
    
    const loveConfession = document.createElement('div');
    loveConfession.className = 'love-confession';
    loveConfession.id = 'loveConfession';
    document.body.appendChild(loveConfession);
    
    const confessionContainer = document.createElement('div');
    confessionContainer.className = 'confession-container';
    loveConfession.appendChild(confessionContainer);
    loveConfession.style.display = 'flex';
    
    const confessionLines = [
        "فتركت حب الفاتنات لأنني",
        "رجل تقي زاهد قوام",
        "فعندما رأيت رمش عينيها",
        "سقطت ارضاً",
        "أردت النهوض و لكن سيف عيناها بتر",
        "رفعت رأسي",
        "و رأيتها مندهشا",
        "هل هيا انس او ملاك منزل جبار"
    ];
    
    const lineTimings = [
        { start: 0, end: 2 },
        { start: 2, end: 4 },
        { start: 4, end: 5.3},
        { start: 5.5, end: 6.1 },
        { start: 6.1, end: 9 },
        { start: 9, end: 10 },
        { start: 11, end: 12 },
        { start: 13, end: 19 }
    ];
    
    loveAudio.play();
    let currentLineIndex = 0;
    
    function displayLine() {
        if (currentLineIndex < confessionLines.length) {
            const lineElement = document.createElement('div');
            lineElement.className = 'confession-line';
            lineElement.textContent = confessionLines[currentLineIndex];
            confessionContainer.innerHTML = '';
            confessionContainer.appendChild(lineElement);
            
            setTimeout(() => {
                lineElement.classList.add('show');
            }, 100);
            
            const timing = lineTimings[currentLineIndex];
            const displayDuration = (timing.end - timing.start) * 1000;
            
            setTimeout(() => {
                lineElement.classList.add('fade-out');
                setTimeout(() => {
                    currentLineIndex++;
                    if (currentLineIndex < confessionLines.length) {
                        displayLine();
                    }
                }, 1000);
            }, displayDuration);
        }
    }
    
    displayLine();
}

function showFinalGrandMessage() {
    
    const loveConfession = document.getElementById('loveConfession');
    if (loveConfession) {
        loveConfession.style.opacity = '0';
        loveConfession.style.transition = 'opacity 2s ease';
        setTimeout(() => {
            loveConfession.remove();
        }, 2000);
    }
    
    const finalGrandMessage = document.createElement('div');
    finalGrandMessage.className = 'final-grand-message';
    finalGrandMessage.innerHTML = `
        أعشقك  يا وهجي الحبيب 😭😭😭🩷🥺<br><br>
        لقد رأيت جمالا بات يأسرني فختارك القلب يا احلى الجميلات 💘💝
    `;
    document.body.appendChild(finalGrandMessage);
    
    setTimeout(() => {
        finalGrandMessage.style.display = 'flex';
        
        setTimeout(() => {
            finalGrandMessage.classList.add('show');
            
            mwaahAudio.volume = 0;
            mwaahAudio.play();
            
            let volume = 0;
            const volumeInterval = setInterval(() => {
                volume += 0.02;
                mwaahAudio.volume = Math.min(volume, 1);
                
                if (volume >= 1) {
                    clearInterval(volumeInterval);
                    setTimeout(() => {
                        finalGrandMessage.classList.add('freeze');
                        createFinalHearts();
                    }, 500);
                }
            }, 80);
        }, 100);
    }, 500);
}

function createFinalHearts() {
    const finalHearts = document.createElement('div');
    finalHearts.className = 'final-hearts';
    document.body.appendChild(finalHearts);
    
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'final-heart';
            heart.innerHTML = '💖';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = (Math.random() * 5 + 3) + 's';
            heart.style.animationDelay = (Math.random() * 2) + 's';
            finalHearts.appendChild(heart);
            
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, 8000);
        }, i * 200);
    }
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'final-heart';
        heart.innerHTML = '💖';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 5 + 3) + 's';
        finalHearts.appendChild(heart);
        
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 8000);
    }, 500);
}

function falling() {
    const heart = document.createElement("div");
    heart.innerHTML = `<svg class='line spin' style='opacity:.5;z-index:100;stroke:#ff69b4' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <g transform='translate(2.550170, 3.550158)'>
            <path d='M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z'></path>
            <path d='M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842'></path>
        </g>
    </svg>`;
    heart.className = "heart-icon";
    heart.style.left = (Math.random() * 95) + "vw";
    heart.style.animationDuration = (Math.random() * 3) + 2 + "s";
    document.body.appendChild(heart);
}

setInterval(function() {
    const heartArr = document.querySelectorAll(".heart-icon");
    if (heartArr.length > 100) heartArr[0].remove();
}, 100);

function fungsibaru(btn) {
    const tombol = document.getElementById(btn);
    const tombolParent = tombol.parentNode;
    const tombolPosisiX = Math.floor(Math.random() * 50) + 1;
    const tombolPosisiY = Math.floor(Math.random() * 75) + 1;
    const rotasiAcak = Math.floor(Math.random() * 360);

    tombol.style.position = "relative";
    tombol.style.left = tombolPosisiX + "px";
    tombol.style.top = tombolPosisiY + "px";
    tombol.style.transform = "rotate(" + rotasiAcak + "deg)";
    tombolParent.appendChild(tombol);

    const teksScale = document.querySelector('#teks2');
    const stikerScale = document.querySelector('#stiker2');
    const stikerArray = Array.from(document.querySelectorAll('img[id^="stikerDua"]'));
    const pesanAlert = [
        document.getElementById('teksTolak').innerHTML,
        document.getElementById('teksTolak2').innerHTML,
        document.getElementById('teksTolak3').innerHTML
    ];

    if (jumlahKlik < pesanAlert.length) {
        teksScale.classList.remove("scale1");
        teksScale.classList.add("scale0");
        stikerScale.classList.remove("scale1");
        stikerScale.classList.add("scale0");
        
        setTimeout(function() {
            if (jumlahKlik === 0) {
                stikerDuaDef.src = stikerDefault;
                teks2.innerHTML = teksDefault;
            } else {
                stikerDuaDef.src = stikerArray[jumlahKlik].src;
                teks2.innerHTML = pesanAlert[jumlahKlik - 1];
            }
            stikerScale.classList.remove("scale0");
            stikerScale.classList.add("scale1");
            teksScale.classList.remove("scale0");
            teksScale.classList.add("scale1");
        }, 270);
    }

    const tombolBy = document.getElementById("By");
    tombolBy.style.transform = `scale(${1 + jumlahSkala * 0.2})`;
    jumlahKlik++;
    jumlahSkala++;

    if (jumlahKlik == 4) {
        swiper.slideNext();
        jumlahKlik = 0;
        teksScale.classList.remove("scale1");
        teksScale.classList.add("scale0");
        stikerScale.classList.remove("scale1");
        stikerScale.classList.add("scale0");
        
        setTimeout(function() {
            stikerDuaDef.src = stikerDefault;
            teks2.innerHTML = teksDefault;
            stikerScale.classList.remove("scale0");
            stikerScale.classList.add("scale1");
            teksScale.classList.remove("scale0");
            teksScale.classList.add("scale1");
        }, 400);
    }
}

function setupEventListeners() {
    document.addEventListener('keydown', function(event) {
        if (event.code === 'Space' || event.code === 'ArrowRight') swiper.slideNext();
    });
    document.addEventListener('click', function() {
        if (teksSekarang !== 2 && fungsiBerfungsi === true) swiper.slideNext();
    });
}