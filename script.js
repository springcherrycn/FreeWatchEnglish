// ✅ 16种语言配置（默认 English）
const texts = {
    'en': { langLabel: 'Language Settings', panelTitle: 'Watch Settings', region: 'Timezone Settings', dial: 'Dial Color', bg: 'Background Image', about: 'About', aboutText: 'A minimalist watch face designed by SpringCherry, a music merchandise brand from Mainland China. All intellectual property rights are reserved. The default timezone is set based on your internet IP address.', random: 'Random Color', uploadBtn: 'click upload', uploadSuccess: 'Image uploaded successfully!', uploadInvalid: 'Please select a valid image file.', dialOptions: [{v:'#000000',l:'Black'},{v:'#FFFFFF',l:'White'},{v:'random',l:'Random Color'}], langName: 'English' },
    'zh-CN': { langLabel: '语言设置', panelTitle: '表盘设置', region: '时区设置', dial: '表盘颜色', bg: '背景图片', about: '关于我们', aboutText: '一款极简风格的创意表盘，由中国大陆音乐周边品牌SpringCherry设计，依法享有全部知识产权。默认时区将根据您的上网IP地址自动设定。', random: '随机颜色', uploadBtn: 'click upload', uploadSuccess: '图片上传成功！', uploadInvalid: '请选择有效的图片文件。', dialOptions: [{v:'#000000',l:'黑色'},{v:'#FFFFFF',l:'白色'},{v:'random',l:'随机颜色'}], langName: '中文简体' },
    'zh-TW': { langLabel: '語言設定', panelTitle: '錶盤設置', region: '時區設置', dial: '錶盤顏色', bg: '背景圖片', about: '關於我們', aboutText: '一款極簡風格的創意錶盤，由中國大陸音樂周邊品牌SpringCherry設計，依法享有全部知識產權。預設時區將根據您的上網IP地址自動設定。', random: '隨機顏色', uploadBtn: 'click upload', uploadSuccess: '圖片上傳成功！', uploadInvalid: '請選擇有效的圖片檔案。', dialOptions: [{v:'#000000',l:'黑色'},{v:'#FFFFFF',l:'白色'},{v:'random',l:'隨機顏色'}], langName: '中文繁體' },
    'es': { langLabel: 'Configuración de idioma', panelTitle: 'Configuración', region: 'Configuración de Zona Horaria', dial: 'Color del Dial', bg: 'Imagen de Fondo', about: 'Acerca de', aboutText: 'Esfera minimalista diseñada por SpringCherry, una marca de merchandising musical de China continental. Todos los derechos reservados. La zona horaria predeterminada se establece según la dirección IP de su conexión.', random: 'Color Aleatorio', uploadBtn: 'click upload', uploadSuccess: '¡Imagen cargada!', uploadInvalid: 'Seleccione un archivo de imagen válido.', dialOptions: [{v:'#000000',l:'Negro'},{v:'#FFFFFF',l:'Blanco'},{v:'random',l:'Aleatorio'}], langName: 'Español' },
    'pt': { langLabel: 'Configurações de idioma', panelTitle: 'Configurações', region: 'Configurações de Fuso Horário', dial: 'Cor do Mostrador', bg: 'Imagem de Fundo', about: 'Sobre', aboutText: 'Mostrador minimalista por SpringCherry, uma marca de merchandising musical da China Continental. Todos os direitos reservados. O fuso horário padrão é definido com base no seu endereço IP de internet.', random: 'Cor Aleatória', uploadBtn: 'click upload', uploadSuccess: 'Imagem carregada!', uploadInvalid: 'Selecione um arquivo de imagem válido.', dialOptions: [{v:'#000000',l:'Preto'},{v:'#FFFFFF',l:'Branco'},{v:'random',l:'Aleatório'}], langName: 'Português' },
    'fr': { langLabel: 'Paramètres de langue', panelTitle: 'Paramètres', region: 'Paramètres de Fuseau Horaire', dial: 'Couleur du Cadran', bg: 'Image de Fond', about: 'À propos', aboutText: 'Cadran minimaliste conçu par SpringCherry, une marque de merchandising musical de Chine continentale. Tous droits réservés. Le fuseau horaire par défaut est défini en fonction de votre adresse IP Internet.', random: 'Couleur Aléatoire', uploadBtn: 'click upload', uploadSuccess: 'Image chargée!', uploadInvalid: 'Veuillez sélectionner un fichier image valide.', dialOptions: [{v:'#000000',l:'Noir'},{v:'#FFFFFF',l:'Blanc'},{v:'random',l:'Aléatoire'}], langName: 'Français' },
    'ar': { langLabel: 'إعدادات اللغة', panelTitle: 'الإعدادات', region: 'إعدادات المنطقة الزمنية', dial: 'لون القرص', bg: 'صورة الخلفية', about: 'حول', aboutText: 'وجه ساعة بسيط صممته شركة SpringCherry، وهي علامة تجارية للمنتجات الموسيقية من البر الرئيسي للصين. جميع الحقوق محفوظة. يتم ضبط المنطقة الزمنية الافتراضية بناءً على عنوان IP للإنترنت الخاص بك.', random: 'لون عشوائي', uploadBtn: 'click upload', uploadSuccess: 'تم التحميل!', uploadInvalid: 'الرجاء تحديد ملف صورة صالح.', dialOptions: [{v:'#000000',l:'أسود'},{v:'#FFFFFF',l:'أبيض'},{v:'random',l:'عشوائي'}], langName: 'العربية' },
    'ja': { langLabel: '言語設定', panelTitle: '設定', region: 'タイムゾーン設定', dial: '文字盤の色', bg: '背景画像', about: '概要', aboutText: '中国大陸の音楽グッズブランド「SpringCherry」によるミニマリストな文字盤です。全権利保有。デフォルトのタイムゾーンはお使いのインターネットIPアドレスに基づいて設定されます。', random: 'ランダム色', uploadBtn: 'click upload', uploadSuccess: '読み込み完了！', uploadInvalid: '有効な画像ファイルを選択してください。', dialOptions: [{v:'#000000',l:'黒'},{v:'#FFFFFF',l:'白'},{v:'random',l:'ランダム'}], langName: '日本語' },
    'ko': { langLabel: '언어 설정', panelTitle: '설정', region: '시간대 설정', dial: '다이얼 색상', bg: '배경 이미지', about: '정보', aboutText: '중국 본토의 음악 굿즈 브랜드 SpringCherry에서 디자인한 미니멀 시계 페이스입니다. 모든 권리 보유. 기본 시간대는 인터넷 IP 주소를 기반으로 설정됩니다.', random: '무작위 색상', uploadBtn: 'click upload', uploadSuccess: '이미지 로드 완료!', uploadInvalid: '유효한 이미지 파일을 선택하세요.', dialOptions: [{v:'#000000',l:'검정'},{v:'#FFFFFF',l:'흰색'},{v:'random',l:'무작위'}], langName: '한국어' },
    'ru': { langLabel: 'Настройки языка', panelTitle: 'Настройки', region: 'Настройки часового пояса', dial: 'Цвет циферблата', bg: 'Фоновое изображение', about: 'О нас', aboutText: 'Минималистичный циферблат от SpringCherry, бренда музыкальной продукции из материкового Китая. Все права защищены. Часовой пояс по умолчанию определяется по вашему IP-адресу.', random: 'Случайный цвет', uploadBtn: 'click upload', uploadSuccess: 'Загружено!', uploadInvalid: 'Пожалуйста, выберите действительный файл изображения.', dialOptions: [{v:'#000000',l:'Чёрный'},{v:'#FFFFFF',l:'Белый'},{v:'random',l:'Случайный'}], langName: 'Русский' },
    'hi': { langLabel: 'भाषा सेटिंग्स', panelTitle: 'सेटिंग्स', region: 'समय क्षेत्र सेटिंग', dial: 'डायल रंग', bg: 'पृष्ठभूमि चित्र', about: 'परिचय', aboutText: 'स्प्रिंगचेरी द्वारा एक मिनिमलिस्ट वॉच फेस, मुख्य भूमि चीन से एक संगीत व्यापार ब्रांड। सर्वाधिकार सुरक्षित। डिफ़ॉल्ट टाइमज़ोन आपके इंटरनेट आईपी पते पर आधारित है।', random: 'रैंडम रंग', uploadBtn: 'click upload', uploadSuccess: 'छवि लोड हुई!', uploadInvalid: 'कृपया एक वैध छवि फ़ाइल चुनें।', dialOptions: [{v:'#000000',l:'काला'},{v:'#FFFFFF',l:'सफेद'},{v:'random',l:'रैंडम'}], langName: 'हिन्दी' },
    'id': { langLabel: 'Pengaturan Bahasa', panelTitle: 'Pengaturan', region: 'Pengaturan Zona Waktu', dial: 'Warna Dial', bg: 'Gambar Latar', about: 'Tentang', aboutText: 'Wajah jam minimalis oleh SpringCherry, merek merchandise musik dari Tiongkok Daratan. Hak cipta dilindungi. Zona waktu default ditetapkan berdasarkan alamat IP internet Anda.', random: 'Warna Acak', uploadBtn: 'click upload', uploadSuccess: 'Gambar dimuat!', uploadInvalid: 'Silakan pilih file gambar yang valid.', dialOptions: [{v:'#000000',l:'Hitam'},{v:'#FFFFFF',l:'Putih'},{v:'random',l:'Acak'}], langName: 'Bahasa Indonesia' },
    'ms': { langLabel: 'Tetapan Bahasa', panelTitle: 'Tetapan', region: 'Tetapan Zon Masa', dial: 'Warna Dial', bg: 'Imej Latar', about: 'Perihal', aboutText: 'Muka jam minimalis oleh SpringCherry, jenama barangan muzik dari Tanah Besar China. Hak cipta terpelihara. Zon masa lalai ditetapkan berdasarkan alamat IP internet anda.', random: 'Warna Rawak', uploadBtn: 'click upload', uploadSuccess: 'Imej dimuat!', uploadInvalid: 'Sila pilih fail imej yang sah.', dialOptions: [{v:'#000000',l:'Hitam'},{v:'#FFFFFF',l:'Putih'},{v:'random',l:'Rawak'}], langName: 'Bahasa Melayu' },
    'th': { langLabel: 'การตั้งค่าภาษา', panelTitle: 'การตั้งค่า', region: 'การตั้งค่าเขตเวลา', dial: 'สีหน้าปัด', bg: 'ภาพพื้นหลัง', about: 'เกี่ยวกับ', aboutText: 'หน้าปัดนาฬิกาสไตล์มินิมอลโดย SpringCherry แบรนด์สินค้าดนตรีจากจีนแผ่นดินใหญ่ สงวนลิขสิทธิ์ทั้งหมด เขตเวลาเริ่มต้นจะถูกกำหนดตามที่อยู่ IP อินเทอร์เน็ตของคุณ', random: 'สีสุ่ม', uploadBtn: 'click upload', uploadSuccess: 'โหลดภาพสำเร็จ!', uploadInvalid: 'กรุณาเลือกไฟล์รูปภาพที่ถูกต้อง', dialOptions: [{v:'#000000',l:'ดำ'},{v:'#FFFFFF',l:'ขาว'},{v:'random',l:'สุ่ม'}], langName: 'ไทย' },
    'vi': { langLabel: 'Cài đặt ngôn ngữ', panelTitle: 'Cài đặt', region: 'Cài đặt Múi giờ', dial: 'Màu mặt số', bg: 'Hình nền', about: 'Giới thiệu', aboutText: 'Mặt đồng hồ tối giản bởi SpringCherry, thương hiệu hàng hóa âm nhạc từ Trung Quốc đại lục. Bảo lưu mọi quyền. Múi giờ mặc định được thiết lập dựa trên địa chỉ IP internet của bạn.', random: 'Màu Ngẫu nhiên', uploadBtn: 'click upload', uploadSuccess: 'Tải ảnh thành công!', uploadInvalid: 'Vui lòng chọn tệp hình ảnh hợp lệ.', dialOptions: [{v:'#000000',l:'Đen'},{v:'#FFFFFF',l:'Trắng'},{v:'random',l:'Ngẫu nhiên'}], langName: 'Tiếng Việt' },
    'tl': { langLabel: 'Mga Setting ng Wika', panelTitle: 'Mga Setting', region: 'Mga Setting ng Timezone', dial: 'Kulay ng Dial', bg: 'Larawan sa Likod', about: 'Tungkol', aboutText: 'Isang minimalist watch face mula sa SpringCherry, isang music merchandise brand mula sa Mainland China. Lahat ng karapatan ay nakalaan. Ang default na timezone ay nakabase sa iyong internet IP address.', random: 'Random na Kulay', uploadBtn: 'click upload', uploadSuccess: 'Na-load ang imahe!', uploadInvalid: 'Mangyaring pumili ng wastong image file.', dialOptions: [{v:'#000000',l:'Itim'},{v:'#FFFFFF',l:'Puti'},{v:'random',l:'Random'}], langName: 'Filipino' }
};

// ✅ 语言顺序（按你指定的顺序）
const langOrder = ['en', 'zh-CN', 'zh-TW', 'es', 'pt', 'fr', 'ar', 'ja', 'ko', 'ru', 'hi', 'id', 'ms', 'th', 'vi', 'tl'];

// 全时区列表
const timezones = [
    { v: -12, n: 'Baker Island' }, { v: -11, n: 'Pago Pago' }, { v: -10, n: 'Honolulu' },
    { v: -9, n: 'Anchorage' }, { v: -8, n: 'Los Angeles' }, { v: -7, n: 'Denver' },
    { v: -6, n: 'Chicago' }, { v: -5, n: 'New York' }, { v: -4, n: 'Santiago' },
    { v: -3, n: 'Sao Paulo' }, { v: -2, n: 'Atlantic Ocean' }, { v: -1, n: 'Azores' },
    { v: 0, n: 'London' }, { v: 1, n: 'Paris' }, { v: 2, n: 'Cairo' },
    { v: 3, n: 'Moscow' }, { v: 4, n: 'Dubai' }, { v: 5, n: 'Karachi' },
    { v: 6, n: 'Dhaka' }, { v: 7, n: 'Bangkok' }, { v: 8, n: 'Beijing' },
    { v: 9, n: 'Tokyo' }, { v: 10, n: 'Sydney' }, { v: 11, n: 'Noumea' },
    { v: 12, n: 'Auckland' }, { v: 13, n: 'Phoenix Islands' }, { v: 14, n: 'Kiritimati' }
];

// ✅ 默认英文
let currentLang = 'en';
let currentRegionOffset = 8; // 备用默认值

// DOM
const settingsPanel = document.getElementById('settingsPanel');
const openSettingsBtn = document.getElementById('openSettings');
const langSelect = document.getElementById('langSelect');
const regionSelect = document.getElementById('regionSelect');
const dialStyleSelect = document.getElementById('dialStyleSelect');
const uploadBtn = document.getElementById('uploadBtn');
const bgImageInput = document.getElementById('bgImageInput');
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

    document.getElementById('labelLang').textContent = t.langLabel;
    document.getElementById('panelTitle').textContent = t.panelTitle;
    document.getElementById('labelRegion').textContent = t.region;
    document.getElementById('labelDial').textContent = t.dial;
    document.getElementById('labelBg').textContent = t.bg;
    document.getElementById('labelAbout').textContent = t.about;
    document.getElementById('aboutText').textContent = t.aboutText;
    uploadBtn.textContent = t.uploadBtn;
    openSettingsBtn.title = t.panelTitle;

    // ✅ 按指定顺序填充语言下拉框
    langSelect.innerHTML = '';
    langOrder.forEach(key => {
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

// ✅ 上传图片
uploadBtn.addEventListener('click', () => { bgImageInput.click(); });

bgImageInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (ev) => {
            bgImage.style.backgroundImage = `url(${ev.target.result})`;
            bgImage.style.opacity = '1';
            bgImage.style.backgroundPosition = '50% 50%';
            alert(texts[currentLang].uploadSuccess);
        };
        reader.readAsDataURL(file);
    } else {
        alert(texts[currentLang].uploadInvalid);
    }
    e.target.value = '';
});

// ✅ 拖拽移动背景图片
let isDragging = false, startX, startY, startBgX = 50, startBgY = 50;

bgImage.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX; startY = e.clientY;
    const pos = window.getComputedStyle(bgImage).backgroundPosition.split(' ');
    startBgX = parseFloat(pos[0]); startBgY = parseFloat(pos[1]);
    e.preventDefault();
});
document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const dx = e.clientX - startX, dy = e.clientY - startY;
    bgImage.style.backgroundPosition = `${startBgX - (dx/3)}% ${startBgY - (dy/3)}%`;
});
document.addEventListener('mouseup', () => { isDragging = false; });

bgImage.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].clientX; startY = e.touches[0].clientY;
    const pos = window.getComputedStyle(bgImage).backgroundPosition.split(' ');
    startBgX = parseFloat(pos[0]); startBgY = parseFloat(pos[1]);
    e.preventDefault();
});
document.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const dx = e.touches[0].clientX - startX, dy = e.touches[0].clientY - startY;
    bgImage.style.backgroundPosition = `${startBgX - (dx/3)}% ${startBgY - (dy/3)}%`;
});
document.addEventListener('touchend', () => { isDragging = false; });

// ✅ 时钟 + IP定位
function updateClock() {
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const localTime = new Date(utc + (3600000 * currentRegionOffset));
    const hour = localTime.getHours() % 12, minute = localTime.getMinutes(), second = localTime.getSeconds();
    hourHand.style.transform = `translate(-50%, -100%) rotate(${(hour * 30) + (minute * 0.5)}deg)`;
    minuteHand.style.transform = `translate(-50%, -100%) rotate(${(minute * 6) + (second * 0.1)}deg)`;
    secondHand.style.transform = `translate(-50%, -100%) rotate(${second * 6}deg)`;
}

// 初始化
createTicks();
setHandsColor('#ffffff', '#ff4d6d');
applyLanguage();
bgImage.style.backgroundPosition = '50% 50%';

// ✅ IP定位决定默认时区
fetch('http://ip-api.com/json/?fields=status,offset')
    .then(r => r.json())
    .then(data => {
        if (data.status === 'success' && typeof data.offset === 'number') {
            currentRegionOffset = data.offset / 3600;
            regionSelect.value = currentRegionOffset;
        }
    })
    .catch(() => {})
    .finally(() => {
        setInterval(updateClock, 1000);
        updateClock();
    });