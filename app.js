const travelData = {
    adventure: {
        title: "ヒマラヤの頂へ",
        stories: [
            "朝靄の中、エベレストベースキャンプから見上げる8,848メートルの頂。薄い空気が肺を刺激し、氷河の軋む音が静寂を破る。シェルパの祈りの声が風に乗って響き、五色のタルチョが激しくはためく。",
            "標高5,000メートル。酸素が薄くなり、一歩一歩が重い。しかし振り返れば、雲海の上に浮かぶ無数の峰々。オレンジ色の朝日が氷壁を黄金に染め、世界の屋根にいることを実感する。",
            "頂上への最後のアタック。満天の星空の下、ヘッドランプの光だけが頼り。凍てつく風が頬を刺すが、心は熱い。一歩、また一歩。ついに辿り着いた世界の頂点で、地球の曲線を目の当たりにする。"
        ],
        images: ["mountain-sunrise", "himalaya-peaks", "everest-summit"],
        bgm: "epic-adventure"
    },
    relaxation: {
        title: "モルディブの楽園",
        stories: [
            "エメラルドグリーンの海に浮かぶ水上コテージ。床のガラス窓から熱帯魚が泳ぐ姿が見える。潮風が頬を撫で、ヤシの葉がささやく。時間がゆっくりと流れていく。",
            "白い砂浜に寝転がり、空を見上げる。どこまでも続く青い空に、時折カモメが横切る。波の音がリズムを刻み、心が解き放たれていく。ココナッツウォーターの甘さが喉を潤す。",
            "サンセットタイム。水平線に沈む太陽が、空と海をオレンジとピンクのグラデーションに染める。イルカの群れが夕日に向かってジャンプする。この瞬間、世界中でここが一番美しい場所だと確信する。"
        ],
        images: ["maldives-beach", "underwater-villa", "sunset-dolphins"],
        bgm: "ocean-waves"
    },
    culture: {
        title: "京都、千年の都",
        stories: [
            "早朝の清水寺。朝霧に包まれた境内を、下駄の音を響かせながら歩く。お香の香りが漂い、僧侶の読経が静かに響く。舞台から見下ろす京都の街は、まだ眠りから覚めたばかり。",
            "嵐山の竹林。青々とした竹が天を覆い、木漏れ日が緑のトンネルを作る。風が吹くたび、竹がさらさらと音を立てる。着物姿の女性が人力車で通り過ぎ、時代を超えた美しさを感じる。",
            "夜の祇園。石畳の路地に灯る提灯の明かり。三味線の音色が料亭から漏れ聞こえ、芸妓さんの白い襟足が闇に浮かぶ。千年続く都の夜は、今も昔も変わらない魅力を放っている。"
        ],
        images: ["kyoto-temple", "bamboo-forest", "gion-night"],
        bgm: "japanese-traditional"
    },
    nature: {
        title: "アマゾンの鼓動",
        stories: [
            "密林の朝。霧が立ち込める中、無数の鳥たちの鳴き声が森を目覚めさせる。巨大な木々が天蓋を作り、緑のフィルターを通した光が幻想的な世界を作り出す。湿った土の匂いが生命力を感じさせる。",
            "川をカヌーで進む。茶色く濁った水面に、ピンクイルカが姿を現す。岸辺ではナマケモノがゆっくりと枝を移動し、色鮮やかなオウムが頭上を飛び交う。自然の交響曲に包まれる。",
            "夜のジャングル。月明かりも届かない暗闇の中、無数の目が光る。ジャガーの低い唸り声、サルの叫び声、虫たちの大合唱。アマゾンの夜は、昼とは全く違う顔を見せる。生命の神秘を全身で感じる瞬間。"
        ],
        images: ["amazon-canopy", "river-dolphin", "jungle-night"],
        bgm: "rainforest-sounds"
    },
    urban: {
        title: "東京、不夜城",
        stories: [
            "渋谷スクランブル交差点。信号が青に変わると、数千人が一斉に動き出す。ネオンサインが街を彩り、巨大スクリーンから流れる音楽が都市のリズムを刻む。この混沌こそが東京の魅力。",
            "六本木ヒルズの展望台。地上250メートルから見下ろす東京は、光の海。東京タワー、スカイツリー、そして無数のビルが宝石のように輝く。この街には800万の物語が同時進行している。",
            "深夜の新宿ゴールデン街。狭い路地に並ぶ小さなバー。それぞれの店から漏れる笑い声と音楽。サラリーマン、アーティスト、外国人観光客が肩を並べて語り合う。東京の夜は眠らない。"
        ],
        images: ["shibuya-crossing", "tokyo-skyline", "shinjuku-night"],
        bgm: "urban-beats"
    },
    mystery: {
        title: "オーロラの舞",
        stories: [
            "アイスランドの荒野。極寒の夜、息が白く凍る。突然、空が動き始める。緑の光のカーテンが天空を横切り、紫やピンクの光が踊る。自然が織りなす最高のショーが始まった。",
            "氷河の上に立つ。足元で氷が軋む音。オーロラが氷に反射し、世界全体が光に包まれる。まるで別の惑星にいるような感覚。この瞬間、地球の美しさと宇宙の神秘を同時に感じる。",
            "オーロラが最高潮に達する。空全体が生きているかのように脈動し、光の波が押し寄せる。アイスランドの伝説では、これは天国への橋。今なら、その意味がわかる気がする。言葉では表現できない感動が胸を満たす。"
        ],
        images: ["aurora-iceland", "glacier-lights", "aurora-peak"],
        bgm: "ethereal-ambient"
    }
};

const imageUrls = {
    "mountain-sunrise": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
    "himalaya-peaks": "https://images.unsplash.com/photo-1515611969280-7b0e3e1e4eec",
    "everest-summit": "https://images.unsplash.com/photo-1519904981063-b0cf448d479e",
    "maldives-beach": "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",
    "underwater-villa": "https://images.unsplash.com/photo-1540202404-1b927e27fa8b",
    "sunset-dolphins": "https://images.unsplash.com/photo-1518837695005-2083093ee35b",
    "kyoto-temple": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
    "bamboo-forest": "https://images.unsplash.com/photo-1528164344705-47542687000d",
    "gion-night": "https://images.unsplash.com/photo-1522623349500-de37a56ea2a5",
    "amazon-canopy": "https://images.unsplash.com/photo-1511884642898-4c92249e20b6",
    "river-dolphin": "https://images.unsplash.com/photo-1568430462989-44163eb1752f",
    "jungle-night": "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5",
    "shibuya-crossing": "https://images.unsplash.com/photo-1532236204992-f5e85c024202",
    "tokyo-skyline": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
    "shinjuku-night": "https://images.unsplash.com/photo-1555086156-e6c7353d283f",
    "aurora-iceland": "https://images.unsplash.com/photo-1504214208698-ea1916a2195a",
    "glacier-lights": "https://images.unsplash.com/photo-1531366936337-7c912a4589a7",
    "aurora-peak": "https://images.unsplash.com/photo-1483347756197-71ef80e95f73"
};

const bgmUrls = {
    "epic-adventure": "https://www.youtube.com/watch?v=3Xjir9KNBZ0",
    "ocean-waves": "https://www.youtube.com/watch?v=V-_O7nl0Ii0",
    "japanese-traditional": "https://www.youtube.com/watch?v=GqK_ednR7R0",
    "rainforest-sounds": "https://www.youtube.com/watch?v=8myYyMg1fFE",
    "urban-beats": "https://www.youtube.com/watch?v=videoseries?list=PLw-VjHDlEOgvtnnnqWlTqByAtC7tXBg6D",
    "ethereal-ambient": "https://www.youtube.com/watch?v=aKw5mbcE7VY"
};

let currentTheme = null;
let currentStoryIndex = 0;
let timer = null;
let timeLeft = 60;
let isPaused = false;
let storyInterval = null;

function showThemes() {
    document.querySelector('header').style.display = 'none';
    document.getElementById('themeSelector').classList.add('active');
}

function startJourney(theme) {
    currentTheme = theme;
    currentStoryIndex = 0;
    timeLeft = 60;
    isPaused = false;
    
    document.getElementById('themeSelector').classList.remove('active');
    document.getElementById('travelExperience').classList.add('active');
    document.getElementById('timer').classList.add('active');
    document.getElementById('audioControls').classList.add('active');
    
    updateStory();
    updateBackground();
    startTimer();
    startStoryRotation();
    
    showBgmLink();
}

function updateStory() {
    const journey = travelData[currentTheme];
    document.getElementById('storyTitle').textContent = journey.title;
    document.getElementById('storyContent').textContent = journey.stories[currentStoryIndex];
    
    document.querySelector('.story-container').classList.remove('scene-transition');
    void document.querySelector('.story-container').offsetWidth;
    document.querySelector('.story-container').classList.add('scene-transition');
}

function updateBackground() {
    const journey = travelData[currentTheme];
    const imageKey = journey.images[currentStoryIndex];
    const imageUrl = imageUrls[imageKey];
    
    document.getElementById('bgImage').src = imageUrl;
    document.getElementById('bgOverlay').classList.add('active');
}

function startTimer() {
    timer = setInterval(() => {
        if (!isPaused) {
            timeLeft--;
            document.getElementById('timeLeft').textContent = timeLeft;
            
            if (timeLeft <= 0) {
                endJourney();
            }
        }
    }, 1000);
}

function startStoryRotation() {
    storyInterval = setInterval(() => {
        if (!isPaused) {
            currentStoryIndex++;
            if (currentStoryIndex >= travelData[currentTheme].stories.length) {
                currentStoryIndex = 0;
            }
            updateStory();
            updateBackground();
        }
    }, 20000);
}

function pauseJourney() {
    isPaused = !isPaused;
    document.getElementById('pauseBtn').textContent = isPaused ? '再開' : '一時停止';
}

function resetJourney() {
    clearInterval(timer);
    clearInterval(storyInterval);
    
    document.getElementById('travelExperience').classList.remove('active');
    document.getElementById('timer').classList.remove('active');
    document.getElementById('audioControls').classList.remove('active');
    document.getElementById('bgOverlay').classList.remove('active');
    document.getElementById('themeSelector').classList.remove('active');
    document.querySelector('header').style.display = 'block';
    
    currentTheme = null;
    currentStoryIndex = 0;
    timeLeft = 60;
    isPaused = false;
}

function endJourney() {
    clearInterval(timer);
    clearInterval(storyInterval);
    
    alert('1分間の旅が終了しました。素晴らしい体験をありがとうございました！');
    resetJourney();
}

function showBgmLink() {
    const bgmKey = travelData[currentTheme].bgm;
    const bgmUrl = bgmUrls[bgmKey];
    
    console.log(`BGM推奨: ${bgmUrl}`);
}

function toggleMusic() {
    const btn = document.getElementById('musicBtn');
    btn.textContent = btn.textContent === '🔊' ? '🔇' : '🔊';
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && currentTheme) {
        resetJourney();
    }
    if (e.key === ' ' && currentTheme) {
        e.preventDefault();
        pauseJourney();
    }
});