<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ギャル系ニックネームジェネレーター</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/lucide/0.263.1/umd/lucide.min.js"></script>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #f9a8d4 0%, #f472b6 50%, #c084fc 100%);
      min-height: 100vh;
      padding: 1rem;
    }
    
    .container {
      max-width: 42rem;
      margin: 0 auto;
    }
    
    .card {
      background: white;
      border-radius: 1.5rem;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
      padding: 2rem;
      border: 4px solid #fbcfe8;
    }
    
    .header {
      text-center;
      margin-bottom: 1.5rem;
    }
    
    .icons {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 0.75rem;
    }
    
    .heart-icon {
      color: #ec4899;
      animation: pulse 2s infinite;
    }
    
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
    
    .title {
      font-size: 2.5rem;
      font-weight: 900;
      background: linear-gradient(to right, #ec4899, #a855f7);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 0.5rem;
    }
    
    .subtitle {
      font-size: 1.5rem;
      font-weight: bold;
      color: #db2777;
      margin-bottom: 0.5rem;
    }
    
    .description {
      color: #4b5563;
      font-weight: 500;
    }
    
    .input-group {
      margin-bottom: 1.5rem;
    }
    
    label {
      display: block;
      font-size: 1.125rem;
      font-weight: bold;
      color: #db2777;
      margin-bottom: 0.75rem;
    }
    
    input {
      width: 100%;
      padding: 1rem 1.25rem;
      border: 4px solid #fbcfe8;
      border-radius: 1rem;
      font-size: 1.125rem;
      font-weight: 500;
      outline: none;
    }
    
    input:focus {
      border-color: #ec4899;
    }
    
    .btn-primary {
      width: 100%;
      background: linear-gradient(to right, #f472b6, #ec4899, #a855f7);
      color: white;
      padding: 1.25rem;
      border-radius: 1rem;
      font-weight: 900;
      font-size: 1.25rem;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
      transition: all 0.3s;
    }
    
    .btn-primary:hover:not(:disabled) {
      transform: scale(1.05);
    }
    
    .btn-primary:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    
    .section {
      margin-top: 2rem;
    }
    
    .section-title {
      font-size: 1.875rem;
      font-weight: 900;
      text-align: center;
      margin-bottom: 0.75rem;
    }
    
    .grid-2 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.75rem;
    }
    
    .grid-1 {
      display: grid;
      grid-template-columns: 1fr;
      gap: 0.75rem;
    }
    
    .nickname-btn {
      background: linear-gradient(135deg, #fce7f3, #f3e8ff);
      padding: 1rem;
      border-radius: 1rem;
      text-align: center;
      font-weight: bold;
      font-size: 1.125rem;
      border: 3px solid #fbcfe8;
      cursor: pointer;
      transition: all 0.3s;
    }
    
    .nickname-btn:hover {
      transform: scale(1.05);
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    }
    
    .nickname-btn.selected {
      background: linear-gradient(135deg, #f472b6, #c084fc);
      color: white;
      border-color: #ec4899;
      transform: scale(1.05);
    }
    
    .step-box {
      padding: 1.5rem;
      border-radius: 1.5rem;
      border: 4px solid;
      margin-top: 2rem;
    }
    
    .step-box.purple {
      background: linear-gradient(135deg, #f3e8ff, #fce7f3);
      border-color: #c084fc;
    }
    
    .step-box.orange {
      background: linear-gradient(135deg, #fef3c7, #fed7aa);
      border-color: #fb923c;
    }
    
    .step-box.teal {
      background: linear-gradient(135deg, #ccfbf1, #99f6e4);
      border-color: #14b8a6;
    }
    
    .step-box.cyan {
      background: linear-gradient(135deg, #cffafe, #a5f3fc);
      border-color: #06b6d4;
    }
    
    .type-btn {
      padding: 1.5rem;
      border-radius: 1rem;
      font-weight: 900;
      font-size: 1.25rem;
      color: white;
      border: none;
      cursor: pointer;
      transition: all 0.3s;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    }
    
    .type-btn:hover {
      transform: scale(1.05);
    }
    
    .type-btn.blue {
      background: linear-gradient(to right, #60a5fa, #3b82f6);
    }
    
    .type-btn.pink {
      background: linear-gradient(to right, #f472b6, #a855f7);
    }
    
    .type-btn.teal {
      background: linear-gradient(to right, #2dd4bf, #22c55e);
    }
    
    .type-btn.gray {
      background: linear-gradient(to right, #9ca3af, #6b7280);
    }
    
    .type-btn.orange {
      background: linear-gradient(to right, #fb923c, #fbbf24);
    }
    
    .type-btn.cyan {
      background: linear-gradient(to right, #22d3ee, #14b8a6);
    }
    
    .btn-subtitle {
      font-size: 0.875rem;
      font-weight: 500;
      margin-top: 0.5rem;
    }
    
    .name-btn {
      padding: 1rem;
      border-radius: 1rem;
      font-weight: bold;
      font-size: 1.25rem;
      border: 3px solid;
      cursor: pointer;
      transition: all 0.3s;
      background: white;
      color: #1f2937;
    }
    
    .name-btn:hover {
      transform: scale(1.05);
    }
    
    .name-btn.selected {
      background: linear-gradient(to right, #fb923c, #f472b6);
      color: white;
      border: 4px solid #ea580c;
      transform: scale(1.05);
    }
    
    .refresh-btn {
      width: 100%;
      margin-top: 1rem;
      padding: 0.75rem;
      border-radius: 0.75rem;
      font-weight: bold;
      color: white;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      transition: all 0.3s;
    }
    
    .refresh-btn:hover {
      transform: scale(1.05);
    }
    
    .final-box {
      margin-top: 2rem;
      background: linear-gradient(135deg, #fbcfe8, #e9d5ff);
      padding: 2rem;
      border-radius: 1.5rem;
      border: 4px solid #f472b6;
      text-align: center;
    }
    
    .final-title {
      font-size: 1.5rem;
      font-weight: 900;
      color: #a855f7;
      margin-bottom: 1rem;
    }
    
    .final-name-box {
      background: white;
      padding: 1.5rem;
      border-radius: 1rem;
      border: 4px solid #a855f7;
      margin-bottom: 1rem;
    }
    
    .final-name {
      font-size: 3rem;
      font-weight: 900;
      background: linear-gradient(to right, #ec4899, #a855f7);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .emojis {
      display: flex;
      justify-content: center;
      gap: 0.5rem;
      font-size: 2rem;
    }
    
    .hidden {
      display: none;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="card">
      <div class="header">
        <div class="icons">
          <svg class="heart-icon" width="40" height="40" fill="currentColor" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          <svg width="48" height="48" fill="none" stroke="#ec4899" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
          <svg class="heart-icon" width="40" height="40" fill="currentColor" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        </div>
        <h1 class="title">ギャル系ニックネーム</h1>
        <h2 class="subtitle">♡ジェネレーター♡</h2>
        <p class="description">名前を入れて超カワなニックネーム作っちゃお〜💕</p>
      </div>

      <div class="input-group">
        <label>✨ 名前を入れてね ✨</label>
        <input type="text" id="nameInput" placeholder="例: はるか、みく、あいり">
      </div>

      <button class="btn-primary" id="generateBtn">
        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path></svg>
        ギャル系ニックネーム作る♡
        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
      </button>

      <div id="nicknameSection" class="section hidden">
        <h2 class="section-title" style="color: #db2777;">STEP 1️⃣ ニックネームを選んでね💕</h2>
        <div id="nicknameGrid" class="grid-2"></div>
      </div>

      <div id="lastNameTypeSection" class="step-box purple hidden">
        <h2 class="section-title" style="color: #a855f7;">STEP 2️⃣ どんな苗字がいい？✨</h2>
        <div class="grid-2">
          <button class="type-btn blue" onclick="generateLastNames('normal')">
            🏯 普通の苗字
            <div class="btn-subtitle">佐藤、田中など</div>
          </button>
          <button class="type-btn pink" onclick="generateLastNames('gyaru')">
            ✨ ギャル系苗字
            <div class="btn-subtitle">姫川、星野など</div>
          </button>
        </div>
      </div>

      <div id="lastNameSection" class="step-box orange hidden">
        <h2 class="section-title" style="color: #ea580c;">STEP 3️⃣ 苗字を選んでね💫</h2>
        <div id="lastNameGrid" class="grid-1"></div>
        <button class="refresh-btn type-btn orange" onclick="refreshLastNames()">
          <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path></svg>
          他の苗字を見る
        </button>
      </div>

      <div id="middleNameTypeSection" class="step-box teal hidden">
        <h2 class="section-title" style="color: #14b8a6;">STEP 4️⃣ ミドルネームつける？🌟</h2>
        <div class="grid-2">
          <button class="type-btn teal" onclick="generateMiddleNames()">✨ つける！</button>
          <button class="type-btn gray" onclick="skipMiddleName()">💭 いらない</button>
        </div>
      </div>

      <div id="middleNameSection" class="step-box cyan hidden">
        <h2 class="section-title" style="color: #0891b2;">ミドルネームを選んでね🌈</h2>
        <div id="middleNameGrid" class="grid-1"></div>
        <button class="refresh-btn type-btn cyan" onclick="generateMiddleNames()">
          <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path></svg>
          他のミドルネームを見る
        </button>
      </div>

      <div id="finalSection" class="final-box hidden">
        <h2 class="final-title">🎉 完成！あなたの新しい名前 🎉</h2>
        <div class="final-name-box">
          <div id="finalName" class="final-name"></div>
        </div>
        <div class="emojis">💕 ✨ 🌸 💖 ⭐ 💕</div>
      </div>

      <div style="margin-top: 1.5rem;" class="emojis">💕 ✨ 🌸 💖 ⭐ 💕</div>
    </div>
  </div>

  <script>
    const state = {
      name: '',
      nicknames: [],
      selectedNickname: '',
      lastNameType: '',
      lastNames: [],
      selectedLastName: '',
      wantsMiddleName: false,
      middleNames: [],
      selectedMiddleName: ''
    };

    const nameInput = document.getElementById('nameInput');
    const generateBtn = document.getElementById('generateBtn');

    nameInput.addEventListener('input', (e) => {
      state.name = e.target.value;
      generateBtn.disabled = !state.name.trim();
    });

    nameInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') generateGyaruNicknames();
    });

    generateBtn.addEventListener('click', generateGyaruNicknames);

    function generateGyaruNicknames() {
      if (!state.name.trim()) return;

      const nameChars = state.name.trim();
      const generated = [];

      const smallChars = {
        'あ': 'ぁ', 'い': 'ぃ', 'う': 'ぅ', 'え': 'ぇ', 'お': 'ぉ',
        'や': 'ゃ', 'ゆ': 'ゅ', 'よ': 'ょ', 'つ': 'っ',
        'ア': 'ァ', 'イ': 'ィ', 'ウ': 'ゥ', 'エ': 'ェ', 'オ': 'ォ',
        'ヤ': 'ャ', 'ユ': 'ュ', 'ヨ': 'ョ', 'ツ': 'ッ'
      };

      const katakanaMap = {
        'あ': 'ア', 'い': 'イ', 'う': 'ウ', 'え': 'エ', 'お': 'オ',
        'か': 'カ', 'き': 'キ', 'く': 'ク', 'け': 'ケ', 'こ': 'コ',
        'が': 'ガ', 'ぎ': 'ギ', 'ぐ': 'グ', 'げ': 'ゲ', 'ご': 'ゴ',
        'さ': 'サ', 'し': 'シ', 'す': 'ス', 'せ': 'セ', 'そ': 'ソ',
        'ざ': 'ザ', 'じ': 'ジ', 'ず': 'ズ', 'ぜ': 'ゼ', 'ぞ': 'ゾ',
        'た': 'タ', 'ち': 'チ', 'つ': 'ツ', 'て': 'テ', 'と': 'ト',
        'だ': 'ダ', 'ぢ': 'ヂ', 'づ': 'ヅ', 'で': 'デ', 'ど': 'ド',
        'な': 'ナ', 'に': 'ニ', 'ぬ': 'ヌ', 'ね': 'ネ', 'の': 'ノ',
        'は': 'ハ', 'ひ': 'ヒ', 'ふ': 'フ', 'へ': 'ヘ', 'ほ': 'ホ',
        'ば': 'バ', 'び': 'ビ', 'ぶ': 'ブ', 'べ': 'ベ', 'ぼ': 'ボ',
        'ぱ': 'パ', 'ぴ': 'ピ', 'ぷ': 'プ', 'ぺ': 'ペ', 'ぽ': 'ポ',
        'ま': 'マ', 'み': 'ミ', 'む': 'ム', 'め': 'メ', 'も': 'モ',
        'や': 'ヤ', 'ゆ': 'ユ', 'よ': 'ヨ',
        'ら': 'ラ', 'り': 'リ', 'る': 'ル', 'れ': 'レ', 'ろ': 'ロ',
        'わ': 'ワ', 'を': 'ヲ', 'ん': 'ン'
      };

      let katakana = '';
      for (let char of nameChars) {
        katakana += katakanaMap[char] || char;
      }

      if (nameChars.length >= 2) {
        const first2 = nameChars.substring(0, 2);
        const first2Kata = katakana.substring(0, 2);
        
        let small = '';
        for (let char of first2) {
          small += smallChars[char] || char;
        }
        
        generated.push(first2Kata + 'ぴ', first2Kata + 'ぴょん', first2Kata + 'たん', 
                      first2Kata + 'ティん', first2Kata + 'りん', first2Kata + 'ちょ',
                      first2Kata + 'ぽよ', first2Kata + 'みん', first2Kata + 'にゃん',
                      first2Kata + 'ぴぴ', small + 'ぴ', small + 'たん', small + 'ちょ',
                      first2 + 'ぴ', first2 + 'ティん', first2 + 'ぽよ');
        
        const lastChar = first2Kata[first2Kata.length - 1];
        generated.push(first2Kata + lastChar);
      }

      if (nameChars.length > 0) {
        const first1Kata = katakana[0];
        generated.push(first1Kata + 'ぴ', first1Kata + 'たん', first1Kata + 'ティん',
                      first1Kata + 'ちゃん', first1Kata + 'ぽよ', first1Kata + 'ちょ');
      }

      if (katakana.length >= 3) {
        const lastChar = katakana[katakana.length - 1];
        generated.push(katakana + lastChar);
      }
      
      if (katakana.length === 2) {
        const lastChar = katakana[1];
        generated.push(katakana + lastChar);
      }

      if (katakana.length >= 2) {
        generated.push(katakana.substring(0, 2) + 'ー', katakana.substring(0, 2) + 'ーティん');
      }

      if (katakana !== nameChars && katakana.length <= 4) {
        generated.push(katakana, katakana + 'ぴ', katakana + 'たん');
      }

      let allSmall = '';
      for (let char of nameChars) {
        allSmall += smallChars[char] || char;
      }
      if (allSmall !== nameChars && allSmall.length <= 4) {
        generated.push(allSmall);
      }

      if (katakana.length >= 2) {
        const base = katakana.substring(0, 2);
        generated.push(base + '♡', base + 'ぴ♡', base + 'ティん♡');
      }

      const romajiMap = {
        'あ': 'a', 'い': 'i', 'う': 'u', 'え': 'e', 'お': 'o',
        'か': 'ka', 'き': 'ki', 'く': 'ku', 'け': 'ke', 'こ': 'ko',
        'さ': 'sa', 'し': 'shi', 'す': 'su', 'せ': 'se', 'そ': 'so',
        'た': 'ta', 'ち': 'chi', 'つ': 'tsu', 'て': 'te', 'と': 'to',
        'な': 'na', 'に': 'ni', 'ぬ': 'nu', 'ね': 'ne', 'の': 'no',
        'は': 'ha', 'ひ': 'hi', 'ふ': 'fu', 'へ': 'he', 'ほ': 'ho',
        'ま': 'ma', 'み': 'mi', 'む': 'mu', 'め': 'me', 'も': 'mo',
        'や': 'ya', 'ゆ': 'yu', 'よ': 'yo',
        'ら': 'ra', 'り': 'ri', 'る': 'ru', 'れ': 're', 'ろ': 'ro',
        'わ': 'wa', 'を': 'wo', 'ん': 'n',
        'ア': 'a', 'イ': 'i', 'ウ': 'u', 'エ': 'e', 'オ': 'o',
        'カ': 'ka', 'キ': 'ki', 'ク': 'ku', 'ケ': 'ke', 'コ': 'ko',
        'サ': 'sa', 'シ': 'shi', 'ス': 'su', 'セ': 'se', 'ソ': 'so',
        'タ': 'ta', 'チ': 'chi', 'ツ': 'tsu', 'テ': 'te', 'ト': 'to',
        'ナ': 'na', 'ニ': 'ni', 'ヌ': 'nu', 'ネ': 'ne', 'ノ': 'no',
        'ハ': 'ha', 'ヒ': 'hi', 'フ': 'fu', 'ヘ': 'he', 'ホ': 'ho',
        'マ': 'ma', 'ミ': 'mi', 'ム': 'mu', 'メ': 'me', 'モ': 'mo',
        'ヤ': 'ya', 'ユ': 'yu', 'ヨ': 'yo',
        'ラ': 'ra', 'リ': 'ri', 'ル': 'ru', 'レ': 're', 'ロ': 'ro',
        'ワ': 'wa', 'ヲ': 'wo', 'ン': 'n'
      };
      
      let romaji = '';
      for (let char of nameChars) {
        romaji += romajiMap[char] || char;
      }
      if (romaji && romaji !== nameChars && romaji.length <= 6) {
        generated.push(romaji + 'pi', romaji + 'tan');
        if (romaji.length >= 2) {
          generated.push(romaji.substring(0, 2) + 'pi');
        }
      }

      const normalizeForComparison = (str) => {
        let normalized = '';
        for (let char of str) {
          normalized += katakanaMap[char] || char;
        }
        return normalize