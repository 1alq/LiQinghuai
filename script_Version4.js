// 小学英语学习游戏（适合中国三年级）
// 注意：下面的 words 数组已按你提供的词汇完整替换；其中已将 "brower" 修正为 "brown"。
// 如果还需要其他拼写或释义修改，告诉我我会继续调整。

// ========== 声效配置接口 ==========
// 在这里配置自定义声效文件路径（支持 mp3, wav, ogg 等格式）
// 如果路径为空字符串，则使用默认的 Web Audio API 生成的声效
const soundConfig = {
  correct: '',      // 答对声效路径，例如: './sounds/correct.mp3'
  wrong: '',        // 答错声效路径，例如: './sounds/wrong.mp3'
  victory: '祝贺音效.mp3'       // 游戏完成胜利声效路径，例如: './sounds/victory.mp3'
};
// ====================================

const words = [
  {word: "name", zh: "名字", emoji: "📝"},
  {word: "nice", zh: "好；友好的", emoji: "😊"},
  {word: "ear", zh: "耳朵", emoji: "👂"},
  {word: "hand", zh: "手", emoji: "✋"},
  {word: "eye", zh: "眼睛", emoji: "👁️"},
  {word: "mouth", zh: "嘴巴", emoji: "👄"},
  {word: "arm", zh: "胳膊", emoji: "💪"},
  {word: "can", zh: "能；会", emoji: "✅"},
  {word: "share", zh: "分享", emoji: "🤝"},
  {word: "smile", zh: "微笑", emoji: "🙂"},
  {word: "listen", zh: "听", emoji: "🎧"},
  {word: "help", zh: "帮助", emoji: "🆘"},
  {word: "say", zh: "说", emoji: "🗣️"},
  {word: "friend", zh: "朋友", emoji: "🤝"},
  {word: "good", zh: "好", emoji: "👍"},
  {word: "mum", zh: "妈妈", emoji: "👩"},
  {word: "dad", zh: "爸爸", emoji: "👨‍👧"},
  {word: "grandma", zh: "奶奶/外婆", emoji: "👵"},
  {word: "grandpa", zh: "爷爷/外公", emoji: "👴"},
  {word: "grandfather", zh: "祖父", emoji: "👴"},
  {word: "grandmother", zh: "祖母", emoji: "👵"},
  {word: "mother", zh: "妈妈", emoji: "👩‍👧"},
  {word: "father", zh: "父亲", emoji: "👨‍👧"},
  {word: "me", zh: "我", emoji: "🙋"},
  {word: "sister", zh: "姐姐/妹妹", emoji: "👭"},
  {word: "family", zh: "家庭", emoji: "👪"},
  {word: "have", zh: "有", emoji: "🔵"},
  {word: "big", zh: "大", emoji: "🟦"},
  {word: "cousin", zh: "表/堂兄弟姐妹", emoji: "👫"},
  {word: "brother", zh: "哥哥/弟弟", emoji: "👬"},
  {word: "baby", zh: "婴儿", emoji: "👶"},
  {word: "uncle", zh: "叔叔/舅舅/伯伯", emoji: "🧑‍🦳"},
  {word: "aunt", zh: "阿姨/姑妈/婶婶", emoji: "👩‍🦳"},
  {word: "small", zh: "小", emoji: "🔹"},
  {word: "like", zh: "喜欢", emoji: "❤️"},
  {word: "dog", zh: "狗", emoji: "🐶"},
  {word: "pet", zh: "宠物", emoji: "🐾"},
  {word: "cat", zh: "猫", emoji: "🐱"},
  {word: "fish", zh: "鱼", emoji: "🐟"},
  {word: "rabbit", zh: "兔子", emoji: "🐰"},
  {word: "go", zh: "去", emoji: "🏃"},
  {word: "zoo", zh: "动物园", emoji: "🦁"},
  {word: "fox", zh: "狐狸", emoji: "🦊"},
  {word: "Miss", zh: "小姐（称呼）", emoji: "👩‍🏫"},
  {word: "panda", zh: "熊猫", emoji: "🐼"},
  {word: "red panda", zh: "小熊猫/红熊猫", emoji: "🧸"},
  {word: "cute", zh: "可爱", emoji: "🥰"},
  {word: "monkey", zh: "猴子", emoji: "🐒"},
  {word: "tiger", zh: "老虎", emoji: "🐯"},
  {word: "elephant", zh: "大象", emoji: "🐘"},
  {word: "lion", zh: "狮子", emoji: "🦁"},
  {word: "animal", zh: "动物", emoji: "🐾"},
  {word: "giraffe", zh: "长颈鹿", emoji: "🦒"},
  {word: "tall", zh: "高的", emoji: "📏"},
  {word: "fast", zh: "快的", emoji: "🏎️"},
  {word: "apple", zh: "苹果", emoji: "🍎"},
  {word: "banana", zh: "香蕉", emoji: "🍌"},
  {word: "farm", zh: "农场", emoji: "🏡"},
  {word: "air", zh: "空气", emoji: "💨"},
  {word: "orange", zh: "橙子；橙色", emoji: "🍊"},
  {word: "grape", zh: "葡萄", emoji: "🍇"},
  {word: "school", zh: "学校", emoji: "🏫"},
  {word: "garden", zh: "花园", emoji: "🌳"},
  {word: "need", zh: "需要", emoji: "🔎"},
  {word: "water", zh: "水", emoji: "💧"},
  {word: "flower", zh: "花", emoji: "🌸"},
  {word: "grass", zh: "草", emoji: "🌿"},
  {word: "plant", zh: "植物；种植", emoji: "🌱"},
  {word: "new", zh: "新的", emoji: "🆕"},
  {word: "tree", zh: "树", emoji: "🌳"},
  {word: "sun", zh: "太阳", emoji: "☀️"},
  {word: "give", zh: "给", emoji: "🎁"},
  {word: "them", zh: "他们/它们", emoji: "🧑‍🤝‍🧑"},
  {word: "colour", zh: "颜色（英式拼写）", emoji: "🎨"},
  {word: "green", zh: "绿色", emoji: "💚"},
  {word: "red", zh: "红色", emoji: "❤️"},
  {word: "blue", zh: "蓝色", emoji: "💙"},
  {word: "make", zh: "制作；使得", emoji: "🛠️"},
  {word: "purple", zh: "紫色", emoji: "🟣"},
  {word: "brown", zh: "棕色", emoji: "🟤"},
  {word: "bear", zh: "熊", emoji: "🐻"},
  {word: "yellow", zh: "黄色", emoji: "💛"},
  {word: "duck", zh: "鸭子", emoji: "🦆"},
  {word: "sea", zh: "海洋", emoji: "🌊"},
  {word: "some", zh: "一些", emoji: "➕"},
  {word: "pink", zh: "粉色", emoji: "🌸"},
  {word: "draw", zh: "画；画画", emoji: "✏️"},
  {word: "white", zh: "白色", emoji: "⚪"},
  {word: "black", zh: "黑色", emoji: "⚫"},
  {word: "old", zh: "旧的；年纪大的", emoji: "🧓"},
  {word: "five", zh: "五", emoji: "5️⃣"},
  {word: "year", zh: "年；岁", emoji: "📅"},
  {word: "one", zh: "一", emoji: "1️⃣"},
  {word: "two", zh: "二", emoji: "2️⃣"},
  {word: "three", zh: "三", emoji: "3️⃣"},
  {word: "four", zh: "四", emoji: "4️⃣"},
  {word: "ten", zh: "十", emoji: "🔟"},
  {word: "six", zh: "六", emoji: "6️⃣"},
  {word: "seven", zh: "七", emoji: "7️⃣"},
  {word: "eight", zh: "八", emoji: "8️⃣"},
  {word: "nine", zh: "九", emoji: "9️⃣"},
  {word: "o'clock", zh: "点钟（例如 three o'clock）", emoji: "🕒"},
  {word: "cut", zh: "切；剪", emoji: "✂️"},
  {word: "eat", zh: "吃", emoji: "🍽️"},
  {word: "cake", zh: "蛋糕", emoji: "🍰"}
];

// ---------- 以下为游戏逻辑（保持不变） ----------
const modeSelect = document.getElementById('modeSelect');
const countSelect = document.getElementById('countSelect');
const startBtn = document.getElementById('startBtn');
const hintBtn = document.getElementById('hintBtn');
const board = document.getElementById('board');
const message = document.getElementById('message');
const scoreEl = document.getElementById('score');
const bestEl = document.getElementById('best');
const nextBtn = document.getElementById('nextBtn');
const restartBtn = document.getElementById('restartBtn');
const confettiEl = document.getElementById('confetti');

let state = {
  mode: 'match',
  total: 8,
  list: [],
  questionIndex: 0,
  score: 0,
  best: 0,
  selectedWord: null,
  currentAnswer: null
};

loadBest();

startBtn.addEventListener('click', startGame);
hintBtn.addEventListener('click', playHint);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', startGame);

function loadBest(){
  const b = localStorage.getItem('engl_game_best');
  if(b) state.best = parseInt(b,10);
  bestEl.textContent = state.best;
}

function saveBest(){
  if(state.score > state.best){
    state.best = state.score;
    localStorage.setItem('engl_game_best', state.best);
    bestEl.textContent = state.best;
  }
}

function startGame(){
  state.mode = modeSelect.value;
  state.total = parseInt(countSelect.value,10);
  state.score = 0;
  state.questionIndex = 0;
  state.selectedWord = null;
  scoreEl.textContent = state.score;
  nextBtn.style.display = 'none';
  restartBtn.style.display = 'none';
  message.textContent = '准备中...';

  // 随机抽取题目
  const pool = shuffle([...words]);
  state.list = pool.slice(0, state.total);
  // 开始第一题
  renderQuestion();
}

function renderQuestion(){
  clearBoard();
  const idx = state.questionIndex;
  const item = state.list[idx];
  message.textContent = `题目 ${idx+1} / ${state.total}`;
  if(state.mode === 'match'){
    board.className = 'board match';
    renderMatch(item);
  } else {
    board.className = 'board listen';
    renderListen(item);
  }
}

function renderMatch(item){
  // 左侧单词（包含干扰项）
  const leftCol = document.createElement('div');
  leftCol.className = 'left-col';
  const rightCol = document.createElement('div');
  rightCol.className = 'right-col';

  // 准备单词选项：保证有正确的，以及若干干扰
  const options = shuffle([item, ...pickRandom(words.filter(w=>w.word!==item.word), 5)]);
  const wordList = document.createElement('div');
  wordList.className = 'word-list';
  options.forEach(o=>{
    const card = document.createElement('div');
    card.className = 'word-card';
    card.textContent = o.word;
    card.dataset.word = o.word;
    card.title = o.zh;
    card.addEventListener('click', ()=>{
      selectWord(card);
    });
    wordList.appendChild(card);
  });

  // 右侧图片（emoji）
  const pics = document.createElement('div');
  pics.className = 'picture-grid';
  // 图片区域包含正确 emoji + 干扰
  const picOptions = shuffle([item, ...pickRandom(words.filter(w=>w.word!==item.word), 5)]);
  picOptions.slice(0,6).forEach(p=>{
    const pcard = document.createElement('div');
    pcard.className = 'pic-card';
    pcard.textContent = p.emoji || '❓';
    pcard.dataset.word = p.word;
    pcard.title = p.zh;
    pcard.addEventListener('click', ()=>{
      clickPic(pcard);
    });
    pics.appendChild(pcard);
  });

  leftCol.appendChild(wordList);
  rightCol.appendChild(pics);
  board.appendChild(leftCol);
  board.appendChild(rightCol);

  // 播放本题单词发音（帮助孩子识别）
  speak(item.word);
  state.currentAnswer = item.word;
}

function selectWord(card){
  // 先取消之前选择
  const prev = board.querySelector('.word-card.selected');
  if(prev) prev.classList.remove('selected');
  card.classList.add('selected');
  state.selectedWord = card.dataset.word;
}

function clickPic(piccard){
  if(!state.selectedWord){
    // 如果没有选词，提示先选择单词
    flashMessage('先点击你认为正确的单词，然后再点图片。');
    return;
  }
  const chosen = state.selectedWord;
  const target = piccard.dataset.word;
  const wordCards = board.querySelectorAll('.word-card');
  // 找到对应的 word-card 元素
  let selectedCard = null;
  wordCards.forEach(c=>{
    if(c.dataset.word === chosen) selectedCard = c;
  });

  if(chosen === state.currentAnswer && target === state.currentAnswer){
    // 正确
    selectedCard.classList.add('correct');
    piccard.classList.add('correct');
    onCorrect();
  } else {
    // 错误
    selectedCard.classList.add('wrong');
    piccard.classList.add('wrong');
    onWrong();
  }
}

function renderListen(item){
  // 中央大的播放按钮和四个选项
  const listenArea = document.createElement('div');
  listenArea.className = 'listen-area';

  const playBtn = document.createElement('button');
  playBtn.className = 'listen-btn';
  playBtn.textContent = '🔊 播放发音';
  playBtn.addEventListener('click', ()=>speak(item.word));
  listenArea.appendChild(playBtn);

  const hintText = document.createElement('div');
  hintText.style.marginBottom = '8px';
  hintText.textContent = `中文提示：${item.zh}`;
  listenArea.appendChild(hintText);

  // 四个选项
  const options = shuffle([item, ...pickRandom(words.filter(w=>w.word!==item.word), 3)]);
  const optGrid = document.createElement('div');
  optGrid.className = 'options';
  options.forEach(o=>{
    const opt = document.createElement('div');
    opt.className = 'option';
    opt.textContent = o.word;
    opt.dataset.word = o.word;
    opt.addEventListener('click', ()=>{
      if(o.word === item.word){
        opt.classList.add('correct');
        onCorrect();
      } else {
        opt.classList.add('wrong');
        onWrong();
      }
    });
    optGrid.appendChild(opt);
  });

  board.appendChild(listenArea);
  board.appendChild(optGrid);

  // 题目发音自动播放一次
  setTimeout(()=>speak(item.word), 400);
  state.currentAnswer = item.word;
}

function onCorrect(){
  addScore(10);
  message.textContent = '答对啦！加 10 分 🎉';
  playSound('correct');
  showConfetti();
  disableBoard();
  state.questionIndex++;
  if(state.questionIndex < state.total){
    nextBtn.style.display = '';
  } else {
    finishGame();
  }
}

function onWrong(){
  addScore(-5);
  message.textContent = '答错了，再试试~ (-5 分)';
  playSound('wrong');
  // 自动读出正确答案
  setTimeout(()=> speak(state.currentAnswer), 700);
}

function addScore(n){
  state.score = Math.max(0, state.score + n);
  scoreEl.textContent = state.score;
}

function nextQuestion(){
  nextBtn.style.display = 'none';
  state.selectedWord = null;
  renderQuestion();
}

function finishGame(){
  message.textContent = `本次完成！得分 ${state.score} 分。`;
  saveBest();
  restartBtn.style.display = '';
  // 游戏完成庆祝效果
  playVictorySound();
  showVictoryConfetti();
}

function disableBoard(){
  // 禁用当前题目的交互（让孩子看到结果）
  const controls = board.querySelectorAll('button, .word-card, .pic-card, .option, .listen-btn');
  controls.forEach(c=>{
    c.style.pointerEvents = 'none';
  });
}

// 工具函数

function clearBoard(){
  board.innerHTML = '';
  // 恢复一些样式
  message.textContent = '';
  confettiEl.innerHTML = '';
}

function pickRandom(arr, n){
  const copy = [...arr];
  return shuffle(copy).slice(0, n);
}

function shuffle(arr){
  for(let i = arr.length -1; i>0; i--){
    const j = Math.floor(Math.random()*(i+1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function flashMessage(text, time=1400){
  const prev = message.textContent;
  message.textContent = text;
  setTimeout(()=> message.textContent = prev, time);
}

function speak(text){
  if('speechSynthesis' in window){
    const ut = new SpeechSynthesisUtterance(text);
    // 使用较慢语速
    ut.rate = 0.9;
    ut.lang = 'en-US';
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(ut);
  } else {
    alert(`发音：${text}`);
  }
}

// 播放声效（支持自定义音频文件）
function playSound(type){
  const soundPath = soundConfig[type];
  
  if(soundPath && soundPath.trim() !== ''){
    // 使用自定义音频文件
    try{
      const audio = new Audio(soundPath);
      audio.play().catch(e => console.log('音频播放失败:', e));
    }catch(e){
      console.log('音频加载失败:', e);
    }
  }else{
    // 使用默认的 Web Audio API 生成声效
    try{
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.connect(g); g.connect(ctx.destination);
      if(type === 'correct'){
        o.type='sine'; o.frequency.value = 880;
        g.gain.value = 0.08;
      } else {
        o.type='sawtooth'; o.frequency.value = 220;
        g.gain.value = 0.05;
      }
      o.start();
      setTimeout(()=>{ o.stop(); ctx.close(); }, 200);
    }catch(e){
      // ignore
    }
  }
}

// 提示（播放当前题目发音）
function playHint(){
  if(state.currentAnswer) {
    speak(state.currentAnswer);
  } else {
    flashMessage('请先开始题目，点击“开始游戏”。');
  }
}

// 彩带庆祝（简单实现）
function showConfetti(){
  confettiEl.innerHTML = '';
  const colors = ['#FF6B6B','#FFD93D','#6BCB77','#4D96FF','#B388EB'];
  for(let i=0;i<18;i++){
    const p = document.createElement('div');
    p.className = 'piece';
    p.style.left = Math.random()*100 + '%';
    p.style.background = colors[i % colors.length];
    p.style.transform = `translateY(-10vh) rotate(${Math.random()*360}deg)`;
    p.style.animationDuration = (900 + Math.random()*800) + 'ms';
    confettiEl.appendChild(p);
  }
  // 清除一会儿
  setTimeout(()=>{ confettiEl.innerHTML=''; }, 1800);
}

// 页面初始化提示
message.textContent = '选择模式与题数，点击"开始游戏"。';

// 自动保存 best 每次关闭
window.addEventListener('beforeunload', ()=> saveBest());

// 游戏完成胜利声效（支持自定义音频文件）
function playVictorySound(){
  const soundPath = soundConfig.victory;
  
  if(soundPath && soundPath.trim() !== ''){
    // 使用自定义音频文件
    try{
      const audio = new Audio(soundPath);
      audio.play().catch(e => console.log('胜利音频播放失败:', e));
    }catch(e){
      console.log('胜利音频加载失败:', e);
    }
  }else{
    // 使用默认的 Web Audio API 生成胜利声效
    try{
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const notes = [523.25, 659.25, 783.99, 1046.50, 783.99, 1046.50];
      const durations = [200, 200, 200, 400, 200, 400];
      let startTime = ctx.currentTime;
      notes.forEach((freq, i)=>{
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.connect(g); g.connect(ctx.destination);
        o.type = 'sine';
        o.frequency.value = freq;
        g.gain.setValueAtTime(0.1, startTime);
        g.gain.exponentialRampToValueAtTime(0.01, startTime + durations[i]/1000);
        o.start(startTime);
        o.stop(startTime + durations[i]/1000);
        startTime += durations[i]/1000;
      });
    }catch(e){
      // ignore
    }
  }
}

// 游戏完成多彩庆祝效果
function showVictoryConfetti(){
  confettiEl.innerHTML = '';
  const colors = ['#FF6B6B','#FFD93D','#6BCB77','#4D96FF','#B388EB','#FF9F43','#EE5A24','#00D2D3','#5F27CD','#FF6B6B'];
  const shapes = ['circle', 'square', 'triangle'];
  
  // 创建大量彩带
  for(let i=0;i<80;i++){
    const p = document.createElement('div');
    p.className = 'piece';
    p.style.left = Math.random()*100 + '%';
    p.style.background = colors[i % colors.length];
    p.style.width = (8 + Math.random()*12) + 'px';
    p.style.height = (8 + Math.random()*12) + 'px';
    p.style.borderRadius = shapes[i % 3] === 'circle' ? '50%' : (shapes[i % 3] === 'triangle' ? '0' : '2px');
    p.style.transform = `translateY(-10vh) rotate(${Math.random()*360}deg)`;
    p.style.animationDuration = (1200 + Math.random()*1200) + 'ms';
    p.style.animationDelay = (Math.random()*500) + 'ms';
    confettiEl.appendChild(p);
  }
  
  // 持续一段时间后清除
  setTimeout(()=>{ confettiEl.innerHTML=''; }, 3000);
}