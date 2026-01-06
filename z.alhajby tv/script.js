// ===== نظام المباريات الجديد =====
const MATCHES_CONFIG = {
    PROXY_SERVERS: [
        'https://corsproxy.io/?',
        'https://api.allorigins.win/raw?url='
    ],
    REFRESH_INTERVAL: 60000,
    currentProxyIndex: 0000
};

const MATCHES_STREAM_LINKS = {
'beIN SPORTS HD 1': 'https://fg.kora-live-live.com/albaplayer/sports-1/',
    'Bein Sports HD2': 'https://new.kora-live-live.com/albaplayer/sports-2/',
    'beIN SPORTS HD 3': 'https://new.kora-live-live.com/albaplayer/sports-3/',
    'beIN SPORTS MAX 1': 'https://b.yallashoooootlive.com/albaplayer/sports-m1/',
    'beIN SPORTS HD 4': 'https://new.kora-live-live.com/albaplayer/sports-4/',
    'beIN Sports 5 HD': 'https://daa.yallashoooootlive.com/albaplayer/sports-5/',
    'beIN SPORTS HD 6': 'https://aa.yallashoooootlive.com/albaplayer/sports-6/',
    'شاهد - Shahid VIP': 'https://daa.yallashoooootlive.com/albaplayer/sports-b1/',
    'أون سبورت 1': 'https://nnss.kora-live-live.com/albaplayer/sports-7/',
    'ON TIME SPORTS 1': 'https://aa.yallashoooootlive.com/albaplayer/sports-8/',
    'Starzplay': 'https://nss.kora-live-live.com/albaplayer/sports-d1/',
    'MBC Action': 'https://aa.yallashoooootlive.com/albaplayer/sports-9/',
    'ثمانية 1 ': 'https://ccbbbb.yallashoooootlive.com/albaplayer/ports-6/',
    'Arryadia S/D': 'https://demphil.github.io/aryadialive/',
    'SSC 1 HD': 'https://foot966.blogspot.com/p/ssc1.html',
    'أبو ظبي الرياضية 1':
'https://algg.kora-live-live.com/albaplayer/sports-c4/',
    'beIN Sports Max 2 HD':
'https://algg.kora-live-live.com/albaplayer/sports-m1/'
};

// جميع البيانات والمتغيرات من الكود الأول
const countries = {
    "اليمن":"https://iptv-org.github.io/iptv/countries/ye.m3u",
    "السعودية":"https://iptv-org.github.io/iptv/countries/sa.m3u",
    "قطر":"https://iptv-org.github.io/iptv/countries/qa.m3u",
    "الإمارات":"https://iptv-org.github.io/iptv/countries/ae.m3u",
    "مصر":"https://iptv-org.github.io/iptv/countries/eg.m3u",
    "العراق":"https://iptv-org.github.io/iptv/countries/iq.m3u",
    "الجزائر":"https://iptv-org.github.io/iptv/countries/dz.m3u",
    "تونس":"https://iptv-org.github.io/iptv/countries/tn.m3u",
    "المغرب":"https://iptv-org.github.io/iptv/countries/ma.m3u",
    "لبنان":"https://iptv-org.github.io/iptv/countries/lb.m3u",
    "سوريا":"https://iptv-org.github.io/iptv/countries/sy.m3u",
    "ليبيا":"https://iptv-org.github.io/iptv/countries/ly.m3u",
    "الأردن":"https://iptv-org.github.io/iptv/countries/jo.m3u",
    "فلسطين":"https://iptv-org.github.io/iptv/countries/ps.m3u",
    "الكويت":"https://iptv-org.github.io/iptv/countries/kw.m3u",
    "البحرين":"https://iptv-org.github.io/iptv/countries/bh.m3u",
    "سلطنة عمان":"https://iptv-org.github.io/iptv/countries/om.m3u",
    "جزر القمر":"https://iptv-org.github.io/iptv/countries/km.m3u",
    "موريتانيا":"https://iptv-org.github.io/iptv/countries/mr.m3u",
    "السودان":"https://iptv-org.github.io/iptv/countries/sd.m3u",
    "جيبوتي":"https://iptv-org.github.io/iptv/countries/dj.m3u",
    "الصومال":"https://iptv-org.github.io/iptv/countries/so.m3u"
};

const countryFlags = {
    'اليمن':'ye','السعودية':'sa','قطر':'qa','الإمارات':'ae','مصر':'eg','العراق':'iq','الجزائر':'dz','تونس':'tn','المغرب':'ma','لبنان':'lb','سوريا':'sy','ليبيا':'ly','الأردن':'jo','فلسطين':'ps','الكويت':'kw','البحرين':'bh','سلطنة عمان':'om','جزر القمر':'km','موريتانيا':'mr','السودان':'sd','جيبوتي':'dj','الصومال':'so'
};

// قنوات بي إن سبورت الجديدة من الكود الأول
const beinSportsChannels = [
  {
    id: 'bein1',
    name: 'بي إن سبورت HD 1',
    description: 'القناة الرئيسية - الدوري القطري والإنجليزي',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/1-HD.png',
    type: 'iframe',
    url: 'https://fg.kora-live-live.com/albaplayer/sports-1/',
    embedCode: '<iframe allowfullscreen="true" frameborder="0" height="500" scrolling="no" src="https://new.kora-live-live.com/albaplayer/sports-1/" width="100%"></iframe>',
    quality: 'HD',
    lastUpdated: '2024-03-20',
    settings: {
        autoPlay: true,
        showControls: true,
        allowFullscreen: true,
        aspectRatio: '16:9'
    }
  },
  {
    id: 'bein2', 
    name: 'بي إن سبورت HD 2',
    description: 'الدوري الإسباني والإيطالي',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/2-HD.png',
    url: 'https://new.kora-live-live.com/albaplayer/sports-2/',
    isIframe: true,
    playerConfig: {
        adProtection: true,
        blockSelectors: [
            'iframe[src*="ads"]',
            'div[class*="ad"]',
            'ins.adsbygoogle',
            'div[id*="ad"]',
            '[class*="banner"]',
            '[id*="banner"]'
        ],
        sandbox: 'allow-same-origin allow-scripts'
    },
    embedCode: `
    <iframe 
        src="https://new.kora-live-live.com/albaplayer/sports-2/"
        style="width:100%; height:500px; border:none;"
        allowfullscreen
        onload="
            setInterval(() => {
                ['iframe[src*=\\'ad\\']', 'div[class*=\\'ad\\']', 'ins.adsbygoogle'].forEach(selector => {
                    document.querySelectorAll(selector).forEach(el => el.remove());
                });
                window.open = () => null;
            }, 2000);
        "
    ></iframe>
    `
  },
  {
    id: 'bein3',
    name: 'بي إن سبورت HD 3',
    description: 'الدوري الفرنسي والأوروبي',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Bein_sport_logo.png',
    url: 'https://new.kora-live-live.com/albaplayer/sports-3/',
    isIframe: true,
    playerConfig: {
        adProtection: true,
        blockSelectors: [
            'iframe[src*="ads"]',
            'div[class*="ad"]',
            'ins.adsbygoogle',
            'div[id*="ad"]',
            '[class*="banner"]',
            '[id*="banner"]'
        ],
        sandbox: 'allow-same-origin allow-scripts'
    },
    embedCode: `
    <iframe 
        src="https://new.kora-live-live.com/albaplayer/sports-3/"
        style="width:100%; height:500px; border:none;"
        allowfullscreen
        onload="
            setInterval(() => {
                ['iframe[src*=\\'ad\\']', 'div[class*=\\'ad\\']', 'ins.adsbygoogle'].forEach(selector => {
                    document.querySelectorAll(selector).forEach(el => el.remove());
                });
                window.open = () => null;
            }, 2000);
        "
    ></iframe>
    `
  },
  {
    id: 'bein4',
    name: 'ثمانيه 1',
    description: 'الدوري الألماني والأوروبي',
    logo: 'ا',
    url: 'https://ccbbbb.yallashoooootlive.com/albaplayer/sports-6/',
    isIframe: true,
    playerConfig: {
        adProtection: true,
        blockSelectors: [
            'iframe[src*="ads"]',
            'div[class*="ad"]',
            'ins.adsbygoogle',
            'div[id*="ad"]',
            '[class*="banner"]',
            '[id*="banner"]'
        ],
        sandbox: 'allow-same-origin allow-scripts'
    },
    embedCode: `
    <iframe 
        src="https://new.kora-live-live.com/albaplayer/sports-4/"
        style="width:100%; height:500px; border:none;"
        allowfullscreen
        onload="
            setInterval(() => {
                ['iframe[src*=\\'ad\\']', 'div[class*=\\'ad\\']', 'ins.adsbygoogle'].forEach(selector => {
                    document.querySelectorAll(selector).forEach(el => el.remove());
                });
                window.open = () => null;
            }, 2000);
        "
    ></iframe>
    `
  }
];

// مصادر القنوات الرياضية
const sportsSources = [
    "https://iptv-org.github.io/iptv/categories/sports.m3u",
    "https://raw.githubusercontent.com/Free-IPTV/Countries/master/SA/sport.m3u",
    "https://raw.githubusercontent.com/iloveiptv/iptv/main/sports.m3u"
];

// المتغيرات العامة من الكود الأول
let hlsInstance = null;
let currentUser = null;
let isDarkMode = true;
let currentView = 'leagues';

// بيانات المستخدمين من الكود الأول
const users = JSON.parse(localStorage.getItem('alhagby_users')) || [];
let currentUserData = JSON.parse(localStorage.getItem('alhagby_current_user')) || null;
const isGuest = localStorage.getItem('alhagby_guest') === 'true';

// المتغيرات للمشغل الجديد من الكود الأول
let currentChannel = null;
const videoPlayer = document.getElementById('videoPlayer');
const loadingElement = document.getElementById('loading');
const currentChannelName = document.getElementById('currentChannelName');
const currentChannelLogo = document.getElementById('currentChannelLogo');
const playerContainer = document.getElementById('playerContainer');

// ===== متغيرات نظام المباريات الجديد =====
let currentMatches = [];
let selectedMatch = null;
let matchesLastUpdateTime = null;
let matchesRefreshTimer = null;
let isMatchesRefreshing = false;
let currentFilter = 'all'; // 'all', 'live', 'upcoming', 'finished'

// ===== دوال نظام المباريات الجديد =====
function convert24to12(time24) {
    if (!time24 || time24 === '--:--' || time24 === '') return time24;
    
    try {
        const [hours, minutes] = time24.split(':').map(Number);
        if (isNaN(hours) || isNaN(minutes)) return time24;
        
        let adjustedHour = hours - 11;
        if (adjustedHour < 0) adjustedHour += 24;
        
        let hours12 = adjustedHour % 12;
        hours12 = hours12 === 0 ? 12 : hours12;
        
        const minutesStr = minutes < 10 ? `0${minutes}` : minutes.toString();
        return `${hours12}:${minutesStr}`;
    } catch (error) {
        console.error('❌ خطأ في تحويل الوقت:', error);
        return time24;
    }
}

function getMatchStatus(match) {
    try {
        const now = new Date();
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();
        
        if (!match.originalTime24 || match.originalTime24 === '--:--' || match.originalTime24 === '') {
            return match.score && match.score !== 'VS' ? 'finished' : 'upcoming';
        }
        
        const [matchHour, matchMinute] = match.originalTime24.split(':').map(Number);
        if (isNaN(matchHour) || isNaN(matchMinute)) return 'upcoming';
        
        const currentTotalMinutes = (currentHour * 60) + currentMinute;
        const matchTotalMinutes = (matchHour * 60) + matchMinute;
        let diffMinutes = matchTotalMinutes - currentTotalMinutes;
        
        if (diffMinutes < -720) diffMinutes += 1440;
        else if (diffMinutes > 720) diffMinutes -= 1440;
        
        const hasScore = match.score && match.score !== 'VS' && !match.score.includes('VS');
        const scoreParts = hasScore ? match.score.split(' - ').map(s => s.trim()) : null;
        
        if (hasScore && scoreParts && scoreParts.length === 2) {
            const [score1, score2] = scoreParts.map(Number);
            if (!isNaN(score1) && !isNaN(score2) && diffMinutes < 0) {
                if (diffMinutes < -150) return 'finished';
                else if (diffMinutes >= -150) return 'live';
            }
        } else {
            if (diffMinutes > 0) {
                if (diffMinutes <= 45) return 'soon';
                else return 'upcoming';
            }
            else if (diffMinutes < 0 && diffMinutes >= -150) return 'live';
            else if (diffMinutes < -150) return 'finished';
        }
        
        return 'upcoming';
    } catch (error) {
        console.error('❌ خطأ في تحديد حالة المباراة:', error);
        return 'upcoming';
    }
}

async function fetchWithNoCache(url) {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(7);
    const cacheBusterUrl = `${url}?_t=${timestamp}&_r=${random}`;
    
    const proxyUrl = MATCHES_CONFIG.PROXY_SERVERS[MATCHES_CONFIG.currentProxyIndex] + encodeURIComponent(cacheBusterUrl);
    MATCHES_CONFIG.currentProxyIndex = (MATCHES_CONFIG.currentProxyIndex + 1) % MATCHES_CONFIG.PROXY_SERVERS.length;
    
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 4000);
        
        const response = await fetch(proxyUrl, {
            headers: {
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                'Pragma': 'no-cache',
                'Expires': '0'
            },
            signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        return response;
    } catch (error) {
        console.error('❌ فشل الاتصال بالبروكسي:', error);
        throw error;
    }
}

async function fetchMatches() {
    try {
        const response = await fetchWithNoCache('https://www.yalashots.com/');
        if (!response.ok) throw new Error('فشل الاتصال بالمصدر');
        
        const html = await response.text();
        const matches = parseMatches(html);
        
        matchesLastUpdateTime = new Date();
        updateMatchesTimeDisplay();
        
        return matches;
    } catch (error) {
        console.error('❌ خطأ في جلب المباريات:', error);
        return currentMatches.length > 0 ? currentMatches : [];
    }
}

function parseMatches(html) {
    const matches = [];
    try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        
        doc.querySelectorAll('.AY_Match').forEach(el => {
            try {
                const homeTeam = el.querySelector('.MT_Team.TM1 .TM_Name')?.textContent?.trim();
                const awayTeam = el.querySelector('.MT_Team.TM2 .TM_Name')?.textContent?.trim();
                
                if (!homeTeam || !awayTeam) return;
                
                const homeLogoEl = el.querySelector('.MT_Team.TM1 .TM_Logo img');
                const awayLogoEl = el.querySelector('.MT_Team.TM2 .TM_Logo img');
                
                const scoreEls = el.querySelectorAll('.MT_Result .RS-goals');
                let score = 'VS';
                if (scoreEls.length === 2) {
                    const score1 = scoreEls[0].textContent.trim();
                    const score2 = scoreEls[1].textContent.trim();
                    if (score1 && score2 && score1 !== '' && score2 !== '') {
                        score = `${score1} - ${score2}`;
                    }
                }
                
                const time24 = el.querySelector('.MT_Time')?.textContent?.trim() || '--:--';
                const time12 = convert24to12(time24);
                const channel = el.querySelector('.MT_Info ul li')?.textContent?.trim() || '';
                const league = Array.from(el.querySelectorAll('.MT_Info ul li')).pop()?.textContent?.trim() || 'دوري';
                
                const matchData = {
                    homeTeam: {
                        name: homeTeam,
                        logo: extractLogoUrl(homeLogoEl)
                    },
                    awayTeam: {
                        name: awayTeam,
                        logo: extractLogoUrl(awayLogoEl)
                    },
                    score: score,
                    time: time12,
                    originalTime24: time24,
                    league: league,
                    channel: channel,
                    streamUrl: MATCHES_STREAM_LINKS[channel] || ''
                };
                
                matches.push(matchData);
            } catch (e) {
                console.warn('❌ خطأ في تحليل المباراة:', e);
            }
        });
    } catch (error) {
        console.error('❌ خطأ في تحليل HTML:', error);
    }
    return matches;
}

function extractLogoUrl(imgEl) {
    if (!imgEl) return '';
    const src = imgEl.dataset.src || imgEl.src || '';
    if (!src) return '';
    return src.startsWith('http') ? src : `https://www.kora-vip.com${src.startsWith('/') ? src : '/' + src}`;
}

function renderMatchCard(match) {
    const status = getMatchStatus(match);
    const isLive = status === 'live';
    const isSoon = status === 'soon';
    const isFinished = status === 'finished';
    const hasStream = !!match.streamUrl;
    
    let badgeText = '';
    let badgeClass = '';
    
    switch(status) {
        case 'live':
            badgeText = 'مباشر';
            badgeClass = 'live';
            break;
        case 'soon':
            badgeText = 'قريباً';
            badgeClass = 'soon';
            break;
        case 'finished':
            badgeText = 'منتهي';
            badgeClass = 'finished';
            break;
        default:
            badgeText = 'قادم';
            badgeClass = 'upcoming';
    }
    
    return `
        <div class="match-card ${isLive ? 'live' : ''}" 
             data-match='${JSON.stringify(match).replace(/'/g, "\\'")}'
             onclick="selectMatchForPlay(this)">
            ${badgeText ? `<div class="match-badge ${badgeClass}">${badgeText}</div>` : ''}
            
            <div class="league-info">
                <span class="league-name">${match.league}</span>
            </div>
            
            <div class="teams-container">
                <div class="team">
                    <img src="${match.homeTeam.logo || 'https://via.placeholder.com/50/1a73e8/ffffff?text=H'}" 
                         alt="${match.homeTeam.name}" 
                         class="team-logo"
                         onerror="this.src='https://via.placeholder.com/50/1a73e8/ffffff?text=H'">
                    <div class="team-name">${match.homeTeam.name}</div>
                </div>
                
                <div class="match-center">
                    <div class="match-score">${match.score}</div>
                    <div class="match-time ${isSoon ? 'soon' : ''}">${match.time}</div>
                </div>
                
                <div class="team">
                    <img src="${match.awayTeam.logo || 'https://via.placeholder.com/50/1a73e8/ffffff?text=A'}" 
                         alt="${match.awayTeam.name}" 
                         class="team-logo"
                         onerror="this.src='https://via.placeholder.com/50/1a73e8/ffffff?text=A'">
                    <div class="team-name">${match.awayTeam.name}</div>
                </div>
            </div>
            
            <div class="match-details">
                ${match.channel ? `
                <div class="detail-item">
                    <i class="fas fa-tv"></i>
                    <span>${match.channel}</span>
                </div>` : ''}
                
                <div class="detail-item">
                    <i class="fas fa-satellite"></i>
                    <span>${status === 'live' && hasStream ? 'بث مباشر' : 
                          status === 'soon' ? 'سيبدأ قريباً' : 
                          status === 'finished' ? 'انتهت المباراة' : 'قادمة'}</span>
                </div>
            </div>
        </div>
    `;
}

// دالة جديدة: تصفية المباريات حسب النوع
function filterMatches(filterType) {
    currentFilter = filterType;
    
    // تحديث أزرار التنقل
    document.querySelectorAll('.matches-filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === filterType) {
            btn.classList.add('active');
        }
    });
    
    renderFilteredMatches();
}

// دالة جديدة: عرض المباريات المصفاة
function renderFilteredMatches() {
    let filteredMatches = [];
    
    switch(currentFilter) {
        case 'live':
            filteredMatches = currentMatches.filter(m => getMatchStatus(m) === 'live');
            break;
        case 'upcoming':
            filteredMatches = currentMatches.filter(m => 
                getMatchStatus(m) === 'upcoming' || 
                getMatchStatus(m) === 'soon'
            );
            break;
        case 'finished':
            filteredMatches = currentMatches.filter(m => getMatchStatus(m) === 'finished');
            break;
        case 'all':
        default:
            filteredMatches = currentMatches;
            break;
    }
    
    renderMatchesContent(filteredMatches);
}

// دالة جديدة: عرض محتوى المباريات مع التصفية
function renderMatchesContent(filteredMatches) {
    const mainContent = document.getElementById('mainContent');
    if (!mainContent) return;
    
    if (filteredMatches.length === 0) {
        mainContent.innerHTML = `
            <div class="panel">
                <div class="matches-section-title">
                    <h3><i class="fas fa-futbol"></i>المباريات الحية</h3>
                    <div class="matches-section-subtitle">شاهد أهم المباريات المباشرة من مختلف البطولات</div>
                </div>
                
                <!-- أزرار التنقل الجديدة -->
                <div class="matches-filter-nav">
                    <button class="matches-filter-btn active" data-filter="all" onclick="filterMatches('all')">
                        <i class="fas fa-list"></i>
                        الكل
                        <span class="badge">${currentMatches.length}</span>
                    </button>
                    <button class="matches-filter-btn" data-filter="live" onclick="filterMatches('live')">
                        <i class="fas fa-circle" style="color: #ff4444;"></i>
                        المباشرة
                        <span class="badge">${currentMatches.filter(m => getMatchStatus(m) === 'live').length}</span>
                    </button>
                    <button class="matches-filter-btn" data-filter="upcoming" onclick="filterMatches('upcoming')">
                        <i class="fas fa-clock"></i>
                        القادمة
                        <span class="badge">${currentMatches.filter(m => getMatchStatus(m) === 'upcoming' || getMatchStatus(m) === 'soon').length}</span>
                    </button>
                    <button class="matches-filter-btn" data-filter="finished" onclick="filterMatches('finished')">
                        <i class="fas fa-flag-checkered"></i>
                        المنتهية
                        <span class="badge">${currentMatches.filter(m => getMatchStatus(m) === 'finished').length}</span>
                    </button>
                </div>
                
                <div class="matches-status-bar">
                    <div class="matches-live-count">
                        <i class="fas fa-circle" style="color: #ff4444; font-size: 0.7rem;"></i>
                        <span id="matchesLiveCount">0</span> مباراة مباشرة
                    </div>
                    <div class="matches-last-update">
                        آخر تحديث: <span id="matchesUpdateTime">--:--</span>
                    </div>
                </div>
                
                <div class="matches-error-message">
                    <i class="fas fa-exclamation-circle"></i>
                    <p>لا توجد مباريات في هذه الفئة حالياً</p>
                    <p style="font-size: 0.9rem; margin-top: 10px;">جرب اختيار فئة أخرى من أزرار التنقل أعلاه</p>
                </div>
            </div>
        `;
        return;
    }
    
    const liveMatchesCount = currentMatches.filter(m => getMatchStatus(m) === 'live').length;
    let html = `
        <div class="panel">
            <div class="matches-section-title">
                <h3><i class="fas fa-futbol"></i>المباريات الحية</h3>
                <div class="matches-section-subtitle">شاهد أهم المباريات المباشرة من مختلف البطولات</div>
            </div>
            
            <!-- أزرار التنقل الجديدة -->
            <div class="matches-filter-nav">
                <button class="matches-filter-btn ${currentFilter === 'all' ? 'active' : ''}" data-filter="all" onclick="filterMatches('all')">
                    <i class="fas fa-list"></i>
                    الكل
                    <span class="badge">${currentMatches.length}</span>
                </button>
                <button class="matches-filter-btn ${currentFilter === 'live' ? 'active' : ''}" data-filter="live" onclick="filterMatches('live')">
                    <i class="fas fa-circle" style="color: #ff4444;"></i>
                    المباشرة
                    <span class="badge">${currentMatches.filter(m => getMatchStatus(m) === 'live').length}</span>
                </button>
                <button class="matches-filter-btn ${currentFilter === 'upcoming' ? 'active' : ''}" data-filter="upcoming" onclick="filterMatches('upcoming')">
                    <i class="fas fa-clock"></i>
                    القادمة
                    <span class="badge">${currentMatches.filter(m => getMatchStatus(m) === 'upcoming' || getMatchStatus(m) === 'soon').length}</span>
                </button>
                <button class="matches-filter-btn ${currentFilter === 'finished' ? 'active' : ''}" data-filter="finished" onclick="filterMatches('finished')">
                    <i class="fas fa-flag-checkered"></i>
                    المنتهية
                    <span class="badge">${currentMatches.filter(m => getMatchStatus(m) === 'finished').length}</span>
                </button>
            </div>
            
            <div class="matches-status-bar">
                <div class="matches-live-count">
                    <i class="fas fa-circle" style="color: #ff4444; font-size: 0.7rem;"></i>
                    <span id="matchesLiveCount">${liveMatchesCount}</span> مباراة مباشرة
                </div>
                <div class="matches-last-update">
                    آخر تحديث: <span id="matchesUpdateTime">--:--</span>
                </div>
            </div>
    `;
    
    if (currentFilter === 'live' && filteredMatches.length > 0) {
        html += `
            <div class="matches-section-title">
                <h3><i class="fas fa-fire"></i> المباريات الجارية الآن</h3>
                <div class="matches-section-subtitle">${filteredMatches.length} مباراة مباشرة قيد اللعب</div>
            </div>
            <div class="matches-grid">
                ${filteredMatches.map(renderMatchCard).join('')}
            </div>
        `;
    } else if (currentFilter === 'upcoming' && filteredMatches.length > 0) {
        html += `
            <div class="matches-section-title">
                <h3><i class="fas fa-clock"></i> المباريات القادمة</h3>
                <div class="matches-section-subtitle">${filteredMatches.length} مباراة ستبدأ قريباً</div>
            </div>
            <div class="matches-grid">
                ${filteredMatches.map(renderMatchCard).join('')}
            </div>
        `;
    } else if (currentFilter === 'finished' && filteredMatches.length > 0) {
        html += `
            <div class="matches-section-title">
                <h3><i class="fas fa-flag-checkered"></i> المباريات المنتهية</h3>
                <div class="matches-section-subtitle">${filteredMatches.length} مباراة انتهت</div>
            </div>
            <div class="matches-grid">
                ${filteredMatches.map(renderMatchCard).join('')}
            </div>
        `;
    } else if (currentFilter === 'all') {
        const liveMatches = filteredMatches.filter(m => getMatchStatus(m) === 'live');
        const upcomingMatches = filteredMatches.filter(m => 
            getMatchStatus(m) === 'upcoming' || 
            getMatchStatus(m) === 'soon' ||
            getMatchStatus(m) === 'finished'
        );
        
        if (liveMatches.length > 0) {
            html += `
                <div class="matches-section-title">
                    <h3><i class="fas fa-fire"></i> المباريات الجارية الآن</h3>
                    <div class="matches-section-subtitle">${liveMatches.length} مباراة مباشرة</div>
                </div>
                <div class="matches-grid">
                    ${liveMatches.map(renderMatchCard).join('')}
                </div>
            `;
        }
        
        if (upcomingMatches.length > 0) {
            html += `
                <div class="matches-section-title">
                    <h3><i class="fas fa-calendar-alt"></i> المباريات القادمة والمنتهية</h3>
                    <div class="matches-section-subtitle">${upcomingMatches.length} مباراة قادمة ومنتهية</div>
                </div>
                <div class="matches-grid">
                    ${upcomingMatches.map(renderMatchCard).join('')}
                </div>
            `;
        }
    }
    
    html += '</div>';
    mainContent.innerHTML = html;
    updateMatchesTimeDisplay();
}

// تعديل دالة renderMatches القديمة لاستخدام النظام الجديد
function renderMatches() {
    renderFilteredMatches();
}

function selectMatchForPlay(cardElement) {
    try {
        const matchJson = cardElement.getAttribute('data-match').replace(/\\'/g, "'");
        selectedMatch = JSON.parse(matchJson);
        const status = getMatchStatus(selectedMatch);
        
        if (!selectedMatch.streamUrl) {
            showMatchesModal('matchesNoStreamModal');
            return;
        }
        
        if (status !== 'live') {
            showMatchesModal('matchesWaitModal');
            return;
        }
        
        playMatchStream(selectedMatch);
    } catch (error) {
        showMatchesModal('matchesNoStreamModal');
    }
}

function playMatchStream(match) {
    // استخدام مشغل المباريات الجديد
    let playerHTML = `
        <div class="matches-player-container">
            <div class="matches-player-header">
                <button class="matches-back-btn" onclick="backToMatches()">
                    <i class="fas fa-arrow-right"></i>
                    العودة للمباريات
                </button>
                <div class="matches-player-title">${match.homeTeam.name} 🆚 ${match.awayTeam.name}</div>
                <div></div>
            </div>

            <div class="matches-player-wrapper">
                <div id="matchesPlayerLoading" class="matches-player-loading">
                    <i class="fas fa-satellite"></i>
                    <div>جاري الاتصال بالبث المباشر...</div>
                </div>
                <iframe id="matchesPlayerFrame" class="matches-player-frame" 
                    src="${match.streamUrl}" 
                    allowfullscreen></iframe>
            </div>

            <div class="matches-info-sidebar">
                <div class="matches-info-item">
                    <span class="matches-info-label">
                        <i class="fas fa-trophy"></i>
                        البطولة:
                    </span>
                    <span class="matches-info-value">${match.league}</span>
                </div>
                <div class="matches-info-item">
                    <span class="matches-info-label">
                        <i class="fas fa-clock"></i>
                        التوقيت:
                    </span>
                    <span class="matches-info-value">${match.time}</span>
                </div>
                <div class="matches-info-item">
                    <span class="matches-info-label">
                        <i class="fas fa-tv"></i>
                        القناة:
                    </span>
                    <span class="matches-info-value">${match.channel}</span>
                </div>
                <div class="matches-info-item">
                    <span class="matches-info-label">
                        <i class="fas fa-broadcast-tower"></i>
                        حالة البث:
                    </span>
                    <span class="matches-info-value">${getMatchStatus(match) === 'live' ? 'مباشر' : 'قادم'}</span>
                </div>
                <div class="matches-info-item">
                    <span class="matches-info-label">
                        <i class="fas fa-futbol"></i>
                        النتيجة:
                    </span>
                    <span class="matches-info-value">${match.score}</span>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('mainContent').innerHTML = playerHTML;
    
    // إضافة event listeners للمشغل
    const playerFrame = document.getElementById('matchesPlayerFrame');
    const playerLoading = document.getElementById('matchesPlayerLoading');
    
    if (playerFrame && playerLoading) {
        playerFrame.onload = () => {
            setTimeout(() => {
                playerLoading.style.display = 'none';
            }, 800);
        };
        
        playerFrame.onerror = () => {
            playerLoading.innerHTML = `
                <i class="fas fa-exclamation-triangle"></i>
                <div>تعذر تحميل البث</div>
                <button onclick="playMatchStream(${JSON.stringify(match).replace(/"/g, '"')})" 
                    style="margin-top: 15px; padding: 10px 20px; background: linear-gradient(135deg, var(--accent) 0%, var(--accent-dark) 100%); color: white; border: none; border-radius: 10px; cursor: pointer; font-weight: 600;">
                    <i class="fas fa-redo"></i> إعادة المحاولة
                </button>
            `;
        };
    }
}

function backToMatches() {
    loadMatchesContent();
}

async function refreshMatchesData() {
    if (isMatchesRefreshing) return;
    
    isMatchesRefreshing = true;
    
    try {
        const newMatches = await fetchMatches();
        
        if (JSON.stringify(currentMatches) !== JSON.stringify(newMatches)) {
            currentMatches = newMatches;
            if (document.getElementById('mainContent').innerHTML.includes('match-card')) {
                renderMatches();
            }
        }
    } catch (error) {
        console.error('❌ فشل تحديث المباريات:', error);
    } finally {
        isMatchesRefreshing = false;
    }
}

function updateMatchesTimeDisplay() {
    if (matchesLastUpdateTime) {
        const timeString = matchesLastUpdateTime.toLocaleTimeString('ar-EG', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        const updateElement = document.getElementById('matchesUpdateTime');
        if (updateElement) {
            updateElement.textContent = timeString;
        }
    }
}

function startMatchesAutoRefresh() {
    if (matchesRefreshTimer) {
        clearInterval(matchesRefreshTimer);
    }
    
    matchesRefreshTimer = setInterval(() => {
        refreshMatchesData();
    }, MATCHES_CONFIG.REFRESH_INTERVAL);
}

function showMatchesModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function closeMatchesModal() {
    document.querySelectorAll('.matches-modal').forEach(modal => {
        modal.classList.remove('active');
    });
}

async function loadMatchesContent() {
    try {
        currentMatches = await fetchMatches();
        currentFilter = 'all'; // عرض الكل افتراضياً
        renderMatches();
        startMatchesAutoRefresh();
    } catch (error) {
        console.error('❌ فشل تحميل المباريات:', error);
        renderMatches(); // سيظهر رسالة الخطأ
    }
}

// ===== دوال نظام التسجيل من الكود الأول =====
function showLoginForm() {
    document.getElementById('welcomeScreen').style.display = 'none';
    document.getElementById('loginModal').style.display = 'grid';
}

function showRegisterForm() {
    document.getElementById('welcomeScreen').style.display = 'none';
    document.getElementById('registerModal').style.display = 'grid';
}

function closeRegister() {
    document.getElementById('registerModal').style.display = 'none';
    document.getElementById('welcomeScreen').style.display = 'flex';
}

function closeLogin() {
    document.getElementById('loginModal').style.display = 'none';
    if (!currentUserData && !isGuest) {
        document.getElementById('welcomeScreen').style.display = 'flex';
    }
}

function skipLogin() {
    localStorage.setItem('alhagby_guest', 'true');
    showMainApp();
    showNotification('مرحباً بك كزائر! يمكنك التسجيل لاحقاً من الإعدادات');
}

function showMainApp() {
    document.getElementById('welcomeScreen').style.display = 'none';
    document.getElementById('mainHeader').style.display = 'flex';
    document.getElementById('mainContent').style.display = 'grid';
    document.getElementById('bottomNav').style.display = 'flex';
    updateUserInterface();
    loadDefaultContent();
}

function register() {
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;
    const agreement = document.getElementById('registerAgreement').checked;

    if (!name || !email || !password || !confirmPassword) {
        showNotification('يرجى ملء جميع الحقول', 'error');
        return;
    }

    if (password !== confirmPassword) {
        showNotification('كلمات المرور غير متطابقة', 'error');
        return;
    }

    if (password.length < 6) {
        showNotification('كلمة المرور يجب أن تكون 6 أحرف على الأقل', 'error');
        return;
    }

    if (!agreement) {
        showNotification('يرجى الموافقة على الشروط والأحكام', 'error');
        return;
    }

    if (users.find(user => user.email === email)) {
        showNotification('هذا البريد الإلكتروني مسجل بالفعل', 'error');
        return;
    }

    const newUser = {
        id: Date.now().toString(),
        name: name,
        email: email,
        password: password,
        createdAt: new Date().toISOString(),
        favorites: [],
        preferences: {
            darkMode: true,
            videoQuality: 'auto',
            notifications: true
        }
    };

    users.push(newUser);
    localStorage.setItem('alhagby_users', JSON.stringify(users));
    loginUser(newUser);
    showNotification('تم إنشاء الحساب بنجاح!', 'success');
}

function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const rememberMe = document.getElementById('rememberMe')?.checked || false;

    if (!email || !password) {
        showNotification('يرجى إدخال البريد الإلكتروني وكلمة المرور', 'error');
        return;
    }

    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        loginUser(user, rememberMe);
        showNotification('تم تسجيل الدخول بنجاح!', 'success');
    } else {
        showNotification('البريد الإلكتروني أو كلمة المرور غير صحيحة', 'error');
    }
}

function loginUser(user, rememberMe = true) {
    currentUserData = {
        id: user.id,
        name: user.name,
        email: user.email,
        preferences: user.preferences
    };

    if (rememberMe) {
        localStorage.setItem('alhagby_current_user', JSON.stringify(currentUserData));
    } else {
        sessionStorage.setItem('alhagby_current_user', JSON.stringify(currentUserData));
    }

    closeLogin();
    closeRegister();
    showMainApp();
    
    if (user.preferences) {
        applyUserPreferences(user.preferences);
    }
}

function applyUserPreferences(preferences) {
    if (preferences.darkMode !== undefined) {
        isDarkMode = preferences.darkMode;
        document.body.classList.toggle('light-mode', !isDarkMode);
        const themeIcon = document.querySelector('#themeToggle i');
        if (themeIcon) {
            themeIcon.className = isDarkMode ? 'fas fa-moon' : 'fas fa-sun';
        }
    }
    
    if (preferences.videoQuality) {
        document.getElementById('qualitySelector').value = preferences.videoQuality;
    }
}

function logout() {
    currentUserData = null;
    localStorage.removeItem('alhagby_current_user');
    sessionStorage.removeItem('alhagby_current_user');
    localStorage.removeItem('alhagby_guest');
    
    document.getElementById('mainHeader').style.display = 'none';
    document.getElementById('mainContent').style.display = 'none';
    document.getElementById('bottomNav').style.display = 'none';
    document.getElementById('welcomeScreen').style.display = 'flex';
    
    showNotification('تم تسجيل الخروج بنجاح');
}

function loginWithGoogle() {
    const googleUser = {
        id: 'google_' + Date.now(),
        name: "مستخدم Google",
        email: "user@gmail.com",
        provider: 'google',
        createdAt: new Date().toISOString(),
        preferences: {
            darkMode: true,
            videoQuality: 'auto',
            notifications: true
        }
    };
    
    if (!users.find(u => u.email === googleUser.email)) {
        users.push(googleUser);
        localStorage.setItem('alhagby_users', JSON.stringify(users));
    }
    
    loginUser(googleUser);
    showNotification('تم التسجيل بحساب Google بنجاح!', 'success');
}

function loginWithFacebook() {
    const facebookUser = {
        id: 'facebook_' + Date.now(),
        name: "مستخدم Facebook",
        email: "user@facebook.com",
        provider: 'facebook',
        createdAt: new Date().toISOString(),
        preferences: {
            darkMode: true,
            videoQuality: 'auto',
            notifications: true
        }
    };
    
    if (!users.find(u => u.email === facebookUser.email)) {
        users.push(facebookUser);
        localStorage.setItem('alhagby_users', JSON.stringify(users));
    }
    
    loginUser(facebookUser);
    showNotification('تم التسجيل بحساب Facebook بنجاح!', 'success');
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: ${type === 'error' ? '#f44336' : type === 'success' ? '#4CAF50' : '#2196F3'};
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 10001;
        font-weight: 600;
        animation: slideDown 0.3s ease;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideUp 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

function updateUserInterface() {
    const loginBtn = document.getElementById('loginBtn');
    if (currentUserData) {
        loginBtn.innerHTML = '<i class="fas fa-user"></i> ' + currentUserData.name;
    } else if (isGuest) {
        loginBtn.innerHTML = '<i class="fas fa-user"></i> زائر';
    } else {
        loginBtn.innerHTML = '<i class="fas fa-user"></i> تسجيل الدخول';
    }
}

function showLoginFromApp() {
    if (currentUserData || isGuest) {
        if (confirm('هل تريد تسجيل الخروج؟')) {
            logout();
        }
    } else {
        showLoginForm();
    }
}

// ===== دوال المشغل القديم =====
function loadStreamOld(url) {
    if (hlsInstance) {
        try {
            hlsInstance.destroy();
        } catch (e) {}
        hlsInstance = null;
    }
    
    const player = document.getElementById('player');
    player.pause();
    player.removeAttribute('src');
    player.load();
    
    document.getElementById('nowLabel').textContent = 'جارٍ التحميل…';
    document.getElementById('playerStatus').textContent = 'جاري الاتصال';

    if (player.canPlayType('application/vnd.apple.mpegurl')) {
        player.src = url;
        player.play().then(() => {
            document.getElementById('playerStatus').textContent = 'يعمل الآن';
        }).catch(e => {
            document.getElementById('playerStatus').textContent = 'خطأ في التشغيل';
            console.warn(e);
        });
    } else if (Hls.isSupported()) {
        hlsInstance = new Hls();
        hlsInstance.loadSource(url);
        hlsInstance.attachMedia(player);
        hlsInstance.on(Hls.Events.MANIFEST_PARSED, function() {
            player.play().then(() => {
                document.getElementById('playerStatus').textContent = 'يعمل الآن';
            }).catch(() => {
                document.getElementById('playerStatus').textContent = 'خطأ في التشغيل';
            });
        });
        hlsInstance.on(Hls.Events.ERROR, function(event, data) {
            console.warn('hls error', data);
            document.getElementById('playerStatus').textContent = 'خطأ في البث: ' + data.type;
        });
    } else {
        player.src = url;
        player.play().catch(e => {
            document.getElementById('playerStatus').textContent = 'التشغيل غير مدعوم';
        });
    }
}

function openChannel(name, url, isExternal = false) {
    if (isExternal) {
        window.open('https://www.goalyallashoot.com/', '_blank');
        showNotification('جاري التوجيه إلى قنوات بي إن سبورت...');
    } else {
        document.getElementById('channelName').textContent = name;
        document.getElementById('channelModal').style.display = 'grid';
        loadStreamOld(url);
    }
}

function closeModal() {
    document.getElementById('channelModal').style.display = 'none';
    if (hlsInstance) {
        try {
            hlsInstance.destroy();
        } catch (e) {}
        hlsInstance = null;
    }
    const player = document.getElementById('player');
    player.pause();
    player.removeAttribute('src');
    player.load();
}

// ===== دوال تحميل القنوات =====
function parseM3U(text) {
    const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    const items = [];
    for (let i = 0; i < lines.length; i++) {
        const l = lines[i];
        if (l.startsWith('#EXTINF:')) {
            const info = l;
            const name = info.split(',').slice(1).join(',').trim();
            let logo = null, group = null;
            const tvgMatch = info.match(/tvg-logo="([^"]+)"/i);
            if (tvgMatch) logo = tvgMatch[1];
            const grpMatch = info.match(/group-title="([^"]+)"/i);
            if (grpMatch) group = grpMatch[1];
            const urlLine = lines[i + 1] || '';
            items.push({ title: name, logo, group, url: urlLine });
    }
    }
    return items;
}

function loadCountryChannels(country) {
    const main = document.getElementById('mainContent');
    main.innerHTML = '<div class="panel loading"><i class="fas fa-spinner"></i> جاري تحميل قنوات ' + country + '…</div>';
    
    fetch(countries[country])
        .then(r => r.text())
        .then(text => {
            const items = parseM3U(text);
            let html = '<div class="panel"><h3><i class="fas fa-flag"></i>قنوات ' + country + '</h3>';
            html += '<div class="channels-list">';
            items.forEach(it => {
                html += '<div class="channel" onclick="openChannel(\'' + it.title.replace(/'/g, "\\'") + '\',\'' + it.url + '\')">';
                html += '<img src="' + (it.logo || '') + '" onerror="this.src=\'https://via.placeholder.com/60x40/333/white?text=TV\'" class="channel-logo">';
                html += '<div><strong>' + it.title + '</strong><span class="small">' + (it.group || '') + '</span></div>';
                html += '</div>';
            });
            html += '</div></div>';
            main.innerHTML = html;
        })
        .catch(e => {
            main.innerHTML = '<div class="panel">فشل تحميل القنوات: ' + e.message + '</div>';
            console.warn(e);
        });
}

function loadAllSportsChannels() {
    const main = document.getElementById('mainContent');
    main.innerHTML = '<div class="panel loading"><i class="fas fa-spinner"></i> جاري تحميل جميع القنوات الرياضية…</div>';
    
    let allSportsChannels = [];
    let loadedSources = 0;
    
    sportsSources.forEach(source => {
        fetch(source)
            .then(r => r.text())
            .then(text => {
                const items = parseM3U(text);
                allSportsChannels = allSportsChannels.concat(items);
                loadedSources++;
                
                if (loadedSources === sportsSources.length) {
                    displaySportsChannels(allSportsChannels);
                }
            })
            .catch(e => {
                console.warn('Failed to load sports source:', source, e);
                loadedSources++;
                if (loadedSources === sportsSources.length) {
                    displaySportsChannels(allSportsChannels);
                }
            });
    });
}

function displaySportsChannels(channels) {
    let html = '<div class="panel"><h3><i class="fas fa-tv"></i>القنوات الرياضية العالمية</h3>';
    html += '<div class="channels-list">';
    
    const uniqueChannels = channels.filter((channel, index, self) =>
        index === self.findIndex(c => c.title === channel.title && c.url === channel.url)
    );
    
    uniqueChannels.forEach(it => {
        html += '<div class="channel" onclick="openChannel(\'' + it.title.replace(/'/g, "\\'") + '\',\'' + it.url + '\')">';
        html += '<img src="' + (it.logo || '') + '" onerror="this.src=\'https://via.placeholder.com/60x40/333/white?text=SPORT\'" class="channel-logo">';
        html += '<div><strong>' + it.title + '</strong><span class="small">' + (it.group || '') + '</span></div>';
        html += '</div>';
    });
    
    html += '</div></div>';
    document.getElementById('mainContent').innerHTML = html;
}

// ===== تحميل قنوات بي إن سبورت الجديدة =====
function loadBeinSports() {
    let html = '<div class="panel bein-section">';
    html += '<h3><i class="fas fa-satellite-dish"></i>قنوات بي إن سبورت</h3>';
    html += '<p class="note" style="margin-bottom:20px;color:#9fcff8">شاهد قنوات beIN Sports بأعلى جودة</p>';
    html += '<div class="channels-grid">';
    
    beinSportsChannels.forEach(channel => {
        html += '<div class="channel-card" onclick="playChannel(\'' + channel.id + '\')">';
        html += '<div class="channel-header">';
        html += '<img class="channel-logo-img" src="' + channel.logo + '" alt="' + channel.name + '" onerror="this.src=\'' + (channel.backupLogo || 'https://via.placeholder.com/60/333/white?text=BEIN') + '\'">';
        html += '<div class="channel-name">' + channel.name + '</div>';
        html += '</div>';
        html += '<div class="channel-description">' + channel.description + '</div>';
        html += '<button class="play-btn">▶ تشغيل القناة</button>';
        html += '</div>';
    });
    
    html += '</div></div>';
    document.getElementById('mainContent').innerHTML = html;
}

// ===== دوال المشغل الجديد =====
function playChannel(channelId) {
    const channel = beinSportsChannels.find(c => c.id === channelId);
    if (!channel) return;

    currentChannel = channel;
    currentChannelName.textContent = channel.name;
    currentChannelLogo.src = channel.logo;
    currentChannelLogo.onerror = function() {
        this.src = 'https://via.placeholder.com/40/333/white?text=BEIN';
    };

    showPlayer();
    loadStream(channel.url);
}

function loadStream(url) {
    loadingElement.style.display = 'flex';
    videoPlayer.style.display = 'none';

    setTimeout(() => {
        videoPlayer.src = url;
        videoPlayer.style.display = 'block';
        loadingElement.style.display = 'none';
    }, 1500);
}

function showPlayer() {
    playerContainer.style.display = 'block';
    playerContainer.scrollIntoView({ behavior: 'smooth' });
}

function hidePlayer() {
    playerContainer.style.display = 'none';
    videoPlayer.src = '';
    currentChannel = null;
}

videoPlayer.onerror = function() {
    loadingElement.style.display = 'none';
    showNotification('❌ خطأ في تحميل البث - حاول قناة أخرى', 'error');
}

// ===== إعدادات =====
function loadSettings() {
    let html = '<div class="panel"><h3><i class="fas fa-cog"></i>الإعدادات</h3>';
    
    if (currentUserData) {
        html += '<div class="settings-option">';
        html += '<span><i class="fas fa-user"></i> المستخدم: ' + currentUserData.name + '</span>';
        html += '<span class="small">' + currentUserData.email + '</span>';
        html += '</div>';
        html += '<button class="login-btn" onclick="logout()" style="width:100%;margin:10px 0">';
        html += '<i class="fas fa-sign-out-alt"></i> تسجيل الخروج';
        html += '</button>';
    } else if (isGuest) {
        html += '<div class="settings-option">';
        html += '<span><i class="fas fa-user"></i> الحالة: زائر</span>';
        html += '<span class="small">يمكنك التسجيل لحفظ التفضيلات</span>';
        html += '</div>';
        html += '<button class="login-btn" onclick="showLoginForm()" style="width:100%;margin:10px 0">';
        html += '<i class="fas fa-sign-in-alt"></i> تسجيل الدخول / إنشاء حساب';
        html += '</button>';
    } else {
        html += '<div class="settings-option">';
        html += '<span><i class="fas fa-user"></i> الحالة: غير مسجل</span>';
        html += '<span class="small">سجل الدخول للاستفادة من جميع الميزات</span>';
        html += '</div>';
        html += '<button class="login-btn" onclick="showLoginForm()" style="width:100%;margin:10px 0">';
        html += '<i class="fas fa-sign-in-alt"></i> تسجيل الدخول / إنشاء حساب';
        html += '</button>';
    }
    
    html += '<div class="settings-option">';
    html += '<span><i class="fas fa-moon"></i> الوضع المظلم</span>';
    html += '<label class="toggle-switch">';
    html += '<input type="checkbox" ' + (isDarkMode ? 'checked' : '') + ' onchange="toggleDarkMode()">';
    html += '<span class="slider"></span>';
    html += '</label>';
    html += '</div>';
    
    html += '<div class="settings-option">';
    html += '<span><i class="fas fa-bell"></i> الإشعارات</span>';
    html += '<label class="toggle-switch">';
    html += '<input type="checkbox" checked>';
    html += '<span class="slider"></span>';
    html += '</label>';
    html += '</div>';
    
    html += '<div class="settings-option">';
    html += '<span><i class="fas fa-video"></i> جودة الفيديو الافتراضية</span>';
    html += '<select class="quality-selector" onchange="setDefaultQuality(this.value)">';
    html += '<option value="auto">تلقائي</option>';
    html += '<option value="360">360p</option>';
    html += '<option value="480">480p</option>';
    html += '<option value="720">720p</option>';
    html += '<option value="1080">1080p</option>';
    html += '</select>';
    html += '</div>';
    
    html += '<div style="text-align:center;margin-top:20px">';
    html += '<button class="contact-btn" onclick="contactUs()" style="margin:5px">';
    html += '<i class="fas fa-envelope"></i> تواصل معنا';
    html += '</button>';
    html += '</div>';
    
    html += '<div class="note" style="text-align:center;margin-top:20px">';
    html += 'تطبيق Z.alhajby tv - جميع الحقوق محفوظة 2025';
    html += '</div>';
    
    html += '</div>';
    document.getElementById('mainContent').innerHTML = html;
}

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('light-mode', !isDarkMode);
    const themeIcon = document.querySelector('#themeToggle i');
    if (themeIcon) {
        themeIcon.className = isDarkMode ? 'fas fa-moon' : 'fas fa-sun';
    }
    localStorage.setItem('darkMode', isDarkMode);
    
    if (currentUserData) {
        const userIndex = users.findIndex(u => u.id === currentUserData.id);
        if (userIndex !== -1) {
            users[userIndex].preferences.darkMode = isDarkMode;
            localStorage.setItem('alhagby_users', JSON.stringify(users));
        }
    }
}

function setDefaultQuality(quality) {
    localStorage.setItem('defaultQuality', quality);
    showNotification('تم حفظ إعدادات الجودة: ' + quality);
    
    if (currentUserData) {
        const userIndex = users.findIndex(u => u.id === currentUserData.id);
        if (userIndex !== -1) {
            users[userIndex].preferences.videoQuality = quality;
            localStorage.setItem('alhagby_users', JSON.stringify(users));
        }
    }
}

function contactUs() {
    window.location.href = 'mailto:zidanalhagby@gmail.com?subject=تواصل مع Z.alhajby tv';
}

// ===== التنقل بين الأقسام =====
const btnCountries = document.getElementById('btnCountries');
const btnSports = document.getElementById('btnSports');
const btnBein = document.getElementById('btnBein');
const btnMatches = document.getElementById('btnMatches');
const btnSettings = document.getElementById('btnSettings');

function clearActive() {
    [btnCountries, btnSports, btnBein, btnMatches, btnSettings].forEach(b => b.classList.remove('active'));
}

btnCountries.onclick = function() {
    clearActive();
    this.classList.add('active');
    let html = '<div class="panel"><h3><i class="fas fa-globe-asia"></i>الدول العربية</h3><div class="countries-grid">';
    for (const c in countries) {
        html += '<div class="country" onclick="loadCountryChannels(\'' + c + '\')">';
        html += '<img src="https://flagcdn.com/w80/' + countryFlags[c] + '.png" onerror="this.style.display=\'none\'">';
        html += '<span>' + c + '</span>';
        html += '</div>';
    }
    html += '</div></div>';
    document.getElementById('mainContent').innerHTML = html;
};

btnSports.onclick = function() {
    clearActive();
    this.classList.add('active');
    loadAllSportsChannels();
};

btnBein.onclick = function() {
    clearActive();
    this.classList.add('active');
    loadBeinSports();
};

btnMatches.onclick = function() {
    clearActive();
    this.classList.add('active');
    loadMatchesContent();
};

btnSettings.onclick = function() {
    clearActive();
    this.classList.add('active');
    loadSettings();
};

function loadDefaultContent() {
    let html = '<div class="panel"><h3><i class="fas fa-globe-asia"></i>الدول العربية</h3><div class="countries-grid">';
    for (const c in countries) {
        html += '<div class="country" onclick="loadCountryChannels(\'' + c + '\')">';
        html += '<img src="https://flagcdn.com/w80/' + countryFlags[c] + '.png" onerror="this.style.display=\'none\'">';
        html += '<span>' + c + '</span>';
        html += '</div>';
    }
    html += '</div></div>';
    document.getElementById('mainContent').innerHTML = html;
}

// ===== تهيئة التطبيق =====
function initApp() {
    const savedUser = localStorage.getItem('alhagby_current_user') || sessionStorage.getItem('alhagby_current_user');
    const guestStatus = localStorage.getItem('alhagby_guest') === 'true';
    
    if (savedUser) {
        currentUserData = JSON.parse(savedUser);
        showMainApp();
        applyUserPreferences(currentUserData.preferences || {});
    } else if (guestStatus) {
        showMainApp();
    } else {
        document.getElementById('welcomeScreen').style.display = 'flex';
    }
    
    isDarkMode = localStorage.getItem('darkMode') !== 'false';
    document.body.classList.toggle('light-mode', !isDarkMode);
    
    const themeIcon = document.querySelector('#themeToggle i');
    if (themeIcon) {
        themeIcon.className = isDarkMode ? 'fas fa-moon' : 'fas fa-sun';
    }
    
    const defaultQuality = localStorage.getItem('defaultQuality') || 'auto';
    const qualitySelector = document.getElementById('qualitySelector');
    if (qualitySelector) {
        qualitySelector.value = defaultQuality;
    }
    
    console.log('🚀 Z.alhajby tv - النسخة المحسنة جاهزة');
}

document.addEventListener('DOMContentLoaded', initApp);