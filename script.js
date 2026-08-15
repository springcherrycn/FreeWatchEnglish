// 多语言配置（顺序固定：简体→繁體→English）
const texts = {
    'zh-CN': {
        panelTitle: '表盘设置', region: '时区设置', dial: '表盘颜色',
        bg: '背景图片', bgHint: '点击上传按钮选择手机图片，可在表盘上拖动调整位置',
        about: '关于我们',
        aboutText: '一款极简风格创意表盘，由音乐周边品牌「春天樱桃」设计，依法享有全部知识产权。默认时区为北京时间，支持手动切换全球时区。',
        random: '随机颜色', uploadBtn: '上传',
        uploadSuccess: '图片上传成功！', uploadInvalid: '请选择有效的图片文件。',
        dialOptions: [{v:'#000000',l:'黑色'},{v:'#FFFFFF',l:'白色'},{v:'random',l:'随机颜色'}],
        langName: '中文简体'
    },
    'zh-TW': {
        panelTitle: '錶盤設置', region: '時區設置', dial: '錶盤顏色',
        bg: '背景圖片', bgHint: '點擊上傳按鈕選擇手機圖片，可在錶盤上拖動調整位置',
        about: '關於我們',
        aboutText: '一款極簡風格創意錶盤，由音樂周邊品牌「春天櫻桃」設計，依法享有全部知識產權。預設時區為北京時間，支持手動切換全球時區。',
        random: '隨機顏色', uploadBtn: '上傳',
        uploadSuccess: '圖片上傳成功！', uploadInvalid: '請選擇有效的圖片檔案。',
        dialOptions: [{v:'#000000',l:'黑色'},{v:'#FFFFFF',l:'白色'},{v:'random',l:'隨機顏色'}],
        langName: '中文繁體'
    },
    'en': {
        panelTitle: 'Watch Settings', region: 'Timezone Settings', dial: 'Dial Color',
        bg: 'Background Image', bgHint: 'Click Upload to select a photo, drag on the watch face to reposition.',
        about: 'About',
        aboutText: 'A minimalist creative watch face designed by music merchandise brand "Spring Cherry". All intellectual property rights are reserved. Default timezone is Beijing Time, global timezone switching supported.',
        random: 'Random Color', uploadBtn: 'Upload',
        uploadSuccess: 'Image uploaded successfully!', uploadInvalid: 'Please select a valid image file.',
        dialOptions: [{v:'#000000',l:'Black'},{v:'#FFFFFF',l:'White'},{v:'random',l:'Random Color'}],
        langName: 'English'
    }
};

// 全时区列表（默认北京UTC+8）
const timezones = [
    { v: -12, n: '贝克岛' }, { v: -11, n: '帕果帕果' }, { v: -10, n: '檀香山' },
    { v: -9, n: '安克雷奇' }, { v: -8, n: '洛杉矶' }, { v: -7, n: '丹佛' },
    { v: -6, n: '芝加哥' }, { v: -5, n: '纽约' }, { v: -4, n: '圣地亚哥' },
    { v: -3, n: '圣保罗' }, { v: -2, n: '大西洋中部' }, { v: -1, n: '亚速尔群岛' },
    { v: 0, n: '伦敦' }, { v: 1, n: '巴黎' }, { v: 2, n: '开罗' },
    { v: 3, n: '莫斯科' }, { v: 4, n: '迪拜' }, { v: 5, n: '卡拉奇' },
    { v: 6, n: '达卡' }, { v: 7, n: '曼谷' }, { v: 8, n: '北京' },
    { v: 9, n: '东京' }, { v: 10, n: '悉尼' }, { v: 11, n: '努美阿' },
    { v: 12, n: '奥克兰' }, { v: 13, n: '菲尼克斯群岛' }, { v: 14, n: '圣诞岛' }
];

let currentLang = 'zh-CN';
let currentRegionOffset = 8;

// DOM
const settingsPanel = document.getElementById('settingsPanel');
const openSettingsBtn = document.getElementById('openSettings');
const langSelect = document.getElementById('langSelect');
const regionSelect = document.getElementById('regionSelect');
const dialStyleSelect = document.getElementById('dialStyleSelect');
const uploadBtn = document.getElementById('uploadBtn');           // ✅ 上传按钮
const bgImageInput = document.getElementById('bgImageInput');     // ✅ 隐藏的文件选择器
const watchFace = document.getElementById('watchFace');
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');
const bgImage = document.getElementById('bgImage');

// 生成刻度
function createTicks() {
    const ticksContainer = document.getElementById('ticks');
    ticksContainer.innerHTML = '';
    for (let i = 0; i < 12; i++) {
        const tick = document.createElement('div');
        tick.className = 'tick';
        tick.style.transform = `rotate(${i * 30}deg)`;
        ticksContainer.appendChild(tick);
    }
}

// 齿轮开关
openSettingsBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    settingsPanel.classList.toggle('show');
});
document.addEventListener('click', (e) => {
    if (!settingsPanel.contains(e.target) && !openSettingsBtn.contains(e.target)) {
        settingsPanel.classList.remove('show');
    }
});

// 语言切换
function applyLanguage() {
    const t = texts[currentLang];
    const currentDial = dialStyleSelect.value;

    document.getElementById('panelTitle').textContent = t.panelTitle;
    document.getElementById('labelRegion').textContent = t.region;
    document.getElementById('labelDial').textContent = t.dial;
    document.getElementById('labelBg').textContent = t.bg;
    document.getElementById('bgHint').textContent = t.bgHint;
    document.getElementById('labelAbout').textContent = t.about;
    document.getElementById('aboutText').textContent = t.aboutText;
    uploadBtn.textContent = t.uploadBtn;
    openSettingsBtn.title = t.panelTitle;

    // 语言下拉框
    langSelect.innerHTML = '';
    ['zh-CN', 'zh-TW', 'en'].forEach(key => {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = texts[key].langName;
        if (key === currentLang) option.selected = true;
        langSelect.appendChild(option);
    });

    // 时区下拉框
    regionSelect.innerHTML = '';
    timezones.forEach(tz => {
        const option = document.createElement('option');
        option.value = tz.v;
        option.textContent = `UTC${tz.v >= 0 ? '+' : ''}${tz.v}:00 (${tz.n})`;
        if (tz.v === currentRegionOffset) option.selected = true;
        regionSelect.appendChild(option);
    });

    // 颜色选项
    dialStyleSelect.innerHTML = '';
    t.dialOptions.forEach(opt => {
        const option = document.createElement('option');
        option.value = opt.v;
        option.textContent = opt.l;
        if (opt.v === currentDial) option.selected = true;
        dialStyleSelect.appendChild(option);
    });

    document.documentElement.lang = currentLang;
}

langSelect.addEventListener('change', (e) => { currentLang = e.target.value; applyLanguage(); });
regionSelect.addEventListener('change', (e) => currentRegionOffset = parseInt(e.target.value));

// 表盘颜色
dialStyleSelect.addEventListener('change', (e) => {
    const value = e.target.value;
    watchFace.className = 'watch-face';
    if (value === '#000000') {
        watchFace.classList.add('theme-dark');
        watchFace.style.backgroundColor = '#000000';
        setHandsColor('#ffffff', '#ff4d6d');
    } else if (value === '#FFFFFF') {
        watchFace.classList.add('theme-light');
        watchFace.style.backgroundColor = '#FFFFFF';
        setHandsColor('#000000', '#333333');
    } else if (value === 'random') {
        watchFace.classList.add('theme-random');
        const hue = Math.floor(Math.random() * 360);
        const saturation = 70 + Math.floor(Math.random() * 30);
        const lightness = 45 + Math.floor(Math.random() * 15);
        const contrastColor = `hsl(${(hue + 180) % 360}, ${saturation}%, ${lightness > 50 ? 20 : 80}%)`;
        watchFace.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
        watchFace.style.setProperty('--contrast-color', contrastColor);
        setHandsColor(contrastColor, '#ff4d6d');
    }
    createTicks();
});

function setHandsColor(mainColor, secColor) {
    hourHand.style.background = mainColor;
    minuteHand.style.background = mainColor;
    secondHand.style.background = secColor;
}

// ✅ 上传图片逻辑（替代原来的粘贴逻辑）
uploadBtn.addEventListener('click', () => {
    bgImageInput.click();
});

bgImageInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (ev) => {
            bgImage.style.backgroundImage = `url(${ev.target.result})`;
            bgImage.style.opacity = '1';
            bgImage.style.backgroundPosition = '50% 50%'; // 默认居中
            alert(texts[currentLang].uploadSuccess);
        };
        reader.readAsDataURL(file);
    } else {
        alert(texts[currentLang].uploadInvalid);
    }
    // 清空value，允许重复选同一张
    e.target.value = '';
});

// ✅ 拖拽移动背景图片（鼠标 + 触摸）
let isDragging = false;
let startX, startY, startBgX = 50, startBgY = 50;

bgImage.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    const pos = window.getComputedStyle(bgImage).backgroundPosition.split(' ');
    startBgX = parseFloat(pos[0]);
    startBgY = parseFloat(pos[1]);
    e.preventDefault();
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    const newX = startBgX - (dx / 3);
    const newY = startBgY - (dy / 3);
    bgImage.style.backgroundPosition = `${newX}% ${newY}%`;
});

document.addEventListener('mouseup', () => { isDragging = false; });

// 触摸拖拽（手机端）
bgImage.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    const pos = window.getComputedStyle(bgImage).backgroundPosition.split(' ');
    startBgX = parseFloat(pos[0]);
    startBgY = parseFloat(pos[1]);
    e.preventDefault();
});

document.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const dx = e.touches[0].clientX - startX;
    const dy = e.touches[0].clientY - startY;
    const newX = startBgX - (dx / 3);
    const newY = startBgY - (dy / 3);
    bgImage.style.backgroundPosition = `${newX}% ${newY}%`;
});

document.addEventListener('touchend', () => { isDragging = false; });

// 时钟
function updateClock() {
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const localTime = new Date(utc + (3600000 * currentRegionOffset));
    const hour = localTime.getHours() % 12;
    const minute = localTime.getMinutes();
    const second = localTime.getSeconds();
    const hourDeg = (hour * 30) + (minute * 0.5);
    const minuteDeg = (minute * 6) + (second * 0.1);
    const secondDeg = second * 6;
    hourHand.style.transform = `translate(-50%, -100%) rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `translate(-50%, -100%) rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `translate(-50%, -100%) rotate(${secondDeg}deg)`;
}

// 初始化
createTicks();
setHandsColor('#ffffff', '#ff4d6d');
applyLanguage();
bgImage.style.backgroundPosition = '50% 50%'; // ✅ 默认居中
setInterval(updateClock, 1000);
updateClock();