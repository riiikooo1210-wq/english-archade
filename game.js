const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const resizeCanvas = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; if (state.mode==='shoot') { player.y = canvas.height/2; } };
window.addEventListener('resize', resizeCanvas);
// Hungry Mouse: 固定論理座標(960x600)で描画し、画面にフィットさせる（縦長・横長でもずれない）
const LOGICAL_CHEESE_W = 960;
const LOGICAL_CHEESE_H = 600;
const CHEESE_LANE_LEFT = 120;
const CHEESE_LANE_CENTER = 480;
const CHEESE_LANE_RIGHT = 840;
const scoreEl = document.getElementById('score');
const healthGaugeFillEl = document.getElementById('healthGaugeFill');
const wordBookNameEl = document.getElementById('wordBookName');
const questionsShownEl = document.getElementById('questionsShown');
const correctCountEl = document.getElementById('correctCount');
const wrongCountEl = document.getElementById('wrongCount');
const hudShootStatsEl = document.getElementById('hudShootStats');
const hudScoreEl = document.querySelector('.hud-score');
const cheeseQuestionsShownEl = document.getElementById('cheeseQuestionsShown');
const cheeseCorrectCountEl = document.getElementById('cheeseCorrectCount');
const cheeseWrongCountEl = document.getElementById('cheeseWrongCount');
const hudCheeseStatsEl = document.getElementById('hudCheeseStats');
const hudHealthEl = document.querySelector('.hud-health');
const hudWordbookEl = document.querySelector('.hud-wordbook');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const voiceBtn = document.getElementById('voiceBtn');
const summaryToggleBtn = document.getElementById('summaryToggleBtn');
const flashBtn = document.getElementById('flashBtn');
const homeBtn = document.getElementById('homeBtn');
const answerInput = document.getElementById('answerInput');
const summary = document.getElementById('summary');
const summaryBody = document.getElementById('summaryBody');
const flashcards = document.getElementById('flashcards');
const flashBody = document.getElementById('flashBody');
const restartBtn = document.getElementById('restartBtn');
const summaryBackToTitleBtn = document.getElementById('summaryBackToTitleBtn');
const closeSummaryBtn = document.getElementById('closeSummaryBtn');
const closeFlashcardsBtn = document.getElementById('closeFlashcardsBtn');
const helpBtn = document.getElementById('helpBtn');
const help = document.getElementById('help');
const helpShoot = document.getElementById('helpShoot');
const helpVeg = document.getElementById('helpVeg');
const helpCheese = document.getElementById('helpCheese');
const closeHelpBtn = document.getElementById('closeHelpBtn');
const cheeseHowToPlay = document.getElementById('cheeseHowToPlay');
const cheeseHowToPlayStartBtn = document.getElementById('cheeseHowToPlayStartBtn');
const cheeseHowToPlayBackBtn = document.getElementById('cheeseHowToPlayBackBtn');
const shootHowToPlay = document.getElementById('shootHowToPlay');
const shootHowToPlayStartBtn = document.getElementById('shootHowToPlayStartBtn');
const shootHowToPlayBackBtn = document.getElementById('shootHowToPlayBackBtn');
const vegHowToPlay = document.getElementById('vegHowToPlay');
const vegHowToPlayStartBtn = document.getElementById('vegHowToPlayStartBtn');
const vegHowToPlayBackBtn = document.getElementById('vegHowToPlayBackBtn');
const wordBookSelectWrap = document.getElementById('wordBookSelectWrap');
const openWordBookBtn = document.getElementById('openWordBookBtn');
const wordBookModal = document.getElementById('wordBookModal');
const closeWordBookBtn = document.getElementById('closeWordBookBtn');
const wordBookNativeInput = document.getElementById('wordBookNativeInput');
const wordBookTargetInput = document.getElementById('wordBookTargetInput');
const wordBookModalTargetSelect = document.getElementById('wordBookModalTargetSelect');
const wordBookAddBtn = document.getElementById('wordBookAddBtn');
const wordBookList = document.getElementById('wordBookList');
const wordBookEmpty = document.getElementById('wordBookEmpty');
const wordBookSourceSelect = document.getElementById('wordBookSourceSelect');
const wordBookSourceList = document.getElementById('wordBookSourceList');
const wordBookSelectToggle = document.getElementById('wordBookSelectToggle');
const wordBookSelectDropdown = document.getElementById('wordBookSelectDropdown');
const wordBookSourceRows = document.getElementById('wordBookSourceRows');
const wordBookCreateNewBtn = document.getElementById('wordBookCreateNewBtn');
const wordBookCreateModal = document.getElementById('wordBookCreateModal');
const closeWordBookCreateBtn = document.getElementById('closeWordBookCreateBtn');
const wordBookCreateNameInput = document.getElementById('wordBookCreateNameInput');
const wordBookCreateCancelBtn = document.getElementById('wordBookCreateCancelBtn');
const wordBookCreateConfirmBtn = document.getElementById('wordBookCreateConfirmBtn');
const wordBookContentModal = document.getElementById('wordBookContentModal');
const closeWordBookContentBtn = document.getElementById('closeWordBookContentBtn');
const wordBookContentTitle = document.getElementById('wordBookContentTitle');
const wordBookContentList = document.getElementById('wordBookContentList');
const wordBookContentDeleteArea = document.getElementById('wordBookContentDeleteArea');
const wordBookContentDeleteBtn = document.getElementById('wordBookContentDeleteBtn');
const wordBookContentRenameArea = document.getElementById('wordBookContentRenameArea');
const wordBookContentRenameBtn = document.getElementById('wordBookContentRenameBtn');
const wordBookContentAddWordBtn = document.getElementById('wordBookContentAddWordBtn');
const wordBookContentRenameForm = document.getElementById('wordBookContentRenameForm');
const wordBookContentRenameInput = document.getElementById('wordBookContentRenameInput');
const wordBookContentRenameCancel = document.getElementById('wordBookContentRenameCancel');
const wordBookContentRenameSave = document.getElementById('wordBookContentRenameSave');
const wordBookContentConfirm = document.getElementById('wordBookContentConfirm');
const wordBookContentConfirmCancel = document.getElementById('wordBookContentConfirmCancel');
const wordBookContentConfirmDelete = document.getElementById('wordBookContentConfirmDelete');
const pauseMenu = document.getElementById('pauseMenu');
const uiEl = document.getElementById('ui');
const toggleInputModeBtn = document.getElementById('toggleInputModeBtn');
const resumeBtn = document.getElementById('resumeBtn');
const debugKillEnemyBtn = document.getElementById('debugKillEnemyBtn');
const debugSpawnEnemyBtn = document.getElementById('debugSpawnEnemyBtn');
const chooseCheese = document.getElementById('chooseCheese');
const home = document.getElementById('home');
const chooseShooting = document.getElementById('chooseShooting');
const chooseVegetable = document.getElementById('chooseVegetable');
const chooseMinecart = document.getElementById('chooseMinecart');
const veg = document.getElementById('veg');
const vegBoard = document.getElementById('vegBoard');
const vegCarrot = document.getElementById('vegCarrot');
const vegOverlay = document.getElementById('vegOverlay');
const vegOverlayTitle = document.getElementById('vegOverlayTitle');
const vegOverlayPenalty = document.getElementById('vegOverlayPenalty');
const vegCountdown = document.getElementById('vegCountdown');
const vegCountdownNumber = document.getElementById('vegCountdownNumber');
const vegPause = document.getElementById('vegPause');
const vegPassOverlay = document.getElementById('vegPassOverlay');
const vegPassAnswer = document.getElementById('vegPassAnswer');
const vegPassBtn = document.getElementById('vegPass');
const vegBackBtn = document.getElementById('vegBack');
const vegResult = document.getElementById('vegResult');
const vegResultBody = document.getElementById('vegResultBody');
const vegNextSetBtn = document.getElementById('vegNextSetBtn');
const vegRetryBtn = document.getElementById('vegRetryBtn');
const closeVegResultBtn = document.getElementById('closeVegResultBtn');
const vegNameEl = document.getElementById('vegName');
const vegRoundEl = document.getElementById('vegRound');
const vegDiffEl = document.getElementById('vegDiff');
const vegTimerEl = document.getElementById('vegTimer');
const dangerGaugeFill = document.getElementById('dangerGaugeFill');
const dangerGaugeBar = document.getElementById('dangerGaugeBar');
const dangerGaugePct = document.getElementById('dangerGaugePct');
const minecartEl = document.getElementById('minecart');
const minecartQuestionText = document.getElementById('minecartQuestionText');
const minecartQuestionNum = document.getElementById('minecartQuestionNum');
const minecartChoices = document.getElementById('minecartChoices');
const minecartGameOver = document.getElementById('minecartGameOver');
const minecartGameOverScore = document.getElementById('minecartGameOverScore');
const minecartGameOverBackBtn = document.getElementById('minecartGameOverBackBtn');
const minecartPause = document.getElementById('minecartPause');
const minecartCart = document.querySelector('#minecart .minecart-cart');
const minecartResult = document.getElementById('minecartResult');
const minecartResultMessage = document.getElementById('minecartResultMessage');
const minecartResultNextBtn = document.getElementById('minecartResultNextBtn');

const RNG = (seed = Date.now()) => {
  let s = seed % 2147483647;
  return () => (s = s * 48271 % 2147483647) / 2147483647;
};
const rand = RNG();

const themes = [
  { name: '果物', bg: '#102a43' },
  { name: '旅行', bg: '#0b3d3c' },
  { name: '動物', bg: '#2b1948' },
  { name: '学校', bg: '#1e2a3a' }
];

const levels = [
  {
    id: 'fruits',
    words: [
      { id: 'apple', native: 'りんご', target: 'apple' },
      { id: 'banana', native: 'バナナ', target: 'banana' },
      { id: 'grape', native: 'ぶどう', target: 'grape' },
      { id: 'orange', native: 'オレンジ', target: 'orange' },
      { id: 'pear', native: '梨', target: 'pear' },
      { id: 'peach', native: '桃', target: 'peach' }
    ]
  },
  {
    id: 'travel',
    words: [
      { id: 'train', native: '電車', target: 'train' },
      { id: 'ticket', native: '切符', target: 'ticket' },
      { id: 'airport', native: '空港', target: 'airport' },
      { id: 'hotel', native: 'ホテル', target: 'hotel' },
      { id: 'map', native: '地図', target: 'map' },
      { id: 'luggage', native: '荷物', target: 'luggage' }
    ]
  },
  {
    id: 'animals',
    words: [
      { id: 'dog', native: '犬', target: 'dog' },
      { id: 'cat', native: '猫', target: 'cat' },
      { id: 'bird', native: '鳥', target: 'bird' },
      { id: 'fish', native: '魚', target: 'fish' },
      { id: 'horse', native: '馬', target: 'horse' },
      { id: 'bear', native: '熊', target: 'bear' }
    ]
  },
  {
    id: 'school',
    words: [
      { id: 'book', native: '本', target: 'book' },
      { id: 'pen', native: 'ペン', target: 'pen' },
      { id: 'desk', native: '机', target: 'desk' },
      { id: 'chair', native: '椅子', target: 'chair' },
      { id: 'teacher', native: '先生', target: 'teacher' },
      { id: 'student', native: '学生', target: 'student' }
    ]
  }
];

const STORAGE_KEY = 'spellBlasterProgress_v1';
const MISS_KEY = 'spellBlasterMiss_v1';
const loadProgress = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch { return {}; }
};
const loadMisses = () => {
  try {
    const raw = localStorage.getItem(MISS_KEY);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch { return {}; }
};
// ============================================================
// 新単語状態モデル (v2) — 連続正解数 + 最終正解日で4状態を導出
// ============================================================
const WORD_STATE_KEY = 'spellBlasterWordState_v2';
const WORD_STATE_MIGRATION_KEY = 'spellBlasterMigrated_v2';

const loadWordState = () => {
  try {
    const raw = localStorage.getItem(WORD_STATE_KEY);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch { return {}; }
};
const saveWordState = (ws) => localStorage.setItem(WORD_STATE_KEY, JSON.stringify(ws));

const getWordState = (id) => {
  const ws = loadWordState();
  return ws[id] || { consecutiveCorrect: 0, lastCorrectDate: null, totalCorrect: 0, totalWrong: 0, consecutiveWrong: 0 };
};
const setWordState = (id, newState) => {
  const ws = loadWordState();
  ws[id] = newState;
  saveWordState(ws);
};

/**
 * 4状態を導出:
 * 'needs-study'  (要予習)   — 未学習 or 3回連続ミス
 * 'almost-there' (もう一歩) — 間違えたことがあり、連続ミス<3 かつ 連続正解<2
 * 'mastered'     (習得済み) — 一発正解(間違えたことなし) or 連続正解>=2 かつ10日以内
 * 'review'       (振り返り) — 習得済み条件を満たすが10日超
 */
const getWordCategory = (wordState) => {
  const { consecutiveCorrect, lastCorrectDate, totalCorrect, totalWrong, consecutiveWrong } = wordState;
  const hasWrong = (totalWrong || 0) > 0;

  // 未学習 (一度も回答していない)
  if (totalCorrect === 0 && !hasWrong) return 'needs-study';

  // 一度も間違えずに正解 → 習得済み (10日ルール適用)
  if (!hasWrong && totalCorrect >= 1) {
    if (lastCorrectDate) {
      const daysSince = (Date.now() - new Date(lastCorrectDate).getTime()) / (1000 * 60 * 60 * 24);
      if (daysSince <= 10) return 'mastered';
      return 'review';
    }
    return 'mastered';
  }

  // 3回連続ミス → 要予習に降格
  if ((consecutiveWrong || 0) >= 3) return 'needs-study';

  // 2回連続正解 → 習得済み (10日ルール適用)
  if (consecutiveCorrect >= 2) {
    if (lastCorrectDate) {
      const daysSince = (Date.now() - new Date(lastCorrectDate).getTime()) / (1000 * 60 * 60 * 24);
      if (daysSince <= 10) return 'mastered';
      return 'review';
    }
    return 'mastered';
  }

  // それ以外 → もう一歩
  return 'almost-there';
};

const getCategoryLabel = (cat) => {
  switch (cat) {
    case 'needs-study': return '要予習';
    case 'almost-there': return 'もう一歩';
    case 'mastered': return '習得済み';
    case 'review': return '振り返り';
    default: return '';
  }
};

const getCategoryColor = (cat) => {
  switch (cat) {
    case 'needs-study': return '#ef4444';
    case 'almost-there': return '#f59e0b';
    case 'mastered': return '#22c55e';
    case 'review': return '#8b5cf6';
    default: return '#64748b';
  }
};

/** 回答時の状態更新 */
const updateWordStateOnAnswer = (wordId, isCorrect) => {
  const st = getWordState(wordId);
  if (isCorrect) {
    st.consecutiveCorrect += 1;
    st.consecutiveWrong = 0;
    st.lastCorrectDate = new Date().toISOString();
    st.totalCorrect += 1;
  } else {
    st.consecutiveCorrect = 0;
    st.consecutiveWrong = (st.consecutiveWrong || 0) + 1;
    st.totalWrong = (st.totalWrong || 0) + 1;
  }
  setWordState(wordId, st);
};

const STORAGE_KEY_CUSTOM_WORDS = 'spellBlasterCustomWords_v1';
const STORAGE_KEY_CUSTOM_WORD_BOOKS = 'spellBlasterCustomWordBooks_v1';
const loadCustomWordBooks = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_CUSTOM_WORD_BOOKS);
    if (raw) {
      const data = JSON.parse(raw);
      if (data && Array.isArray(data.books) && data.books.length > 0) return data;
    }
    const oldRaw = localStorage.getItem(STORAGE_KEY_CUSTOM_WORDS);
    const oldWords = oldRaw ? (() => { try { const a = JSON.parse(oldRaw); return Array.isArray(a) ? a : []; } catch { return []; } })() : [];
    const oldSource = localStorage.getItem(STORAGE_KEY_WORD_BOOK_SOURCE);
    const selectedId = (oldSource === 'custom' && oldWords.length > 0) ? 'custom-main' : 'default';
    return { books: [{ id: 'custom-main', name: '自作の単語帳', words: oldWords }], selectedId };
  } catch { return { books: [{ id: 'custom-main', name: '自作の単語帳', words: [] }], selectedId: 'default' }; }
};
const saveCustomWordBooks = (data) => localStorage.setItem(STORAGE_KEY_CUSTOM_WORD_BOOKS, JSON.stringify(data));
const loadCustomWords = () => {
  const data = loadCustomWordBooks();
  const book = data.books.find((b) => b.id === data.selectedId);
  return book ? book.words : [];
};
const saveCustomWords = (words) => {
  const data = loadCustomWordBooks();
  const idx = data.books.findIndex((b) => b.id === data.selectedId);
  if (idx >= 0) { data.books[idx].words = words; saveCustomWordBooks(data); }
};
const getWordsForBook = (bookId) => {
  const data = loadCustomWordBooks();
  const book = data.books.find((b) => b.id === bookId);
  return book ? book.words : [];
};
const saveWordsForBook = (bookId, words) => {
  const data = loadCustomWordBooks();
  const idx = data.books.findIndex((b) => b.id === bookId);
  if (idx >= 0) { data.books[idx].words = words; saveCustomWordBooks(data); }
};

const STORAGE_KEY_WORD_BOOK_SOURCE = 'spellBlasterWordBookSource_v1';
const getWordBookSource = () => {
  const data = loadCustomWordBooks();
  return data.selectedId === 'default' ? 'default' : 'custom';
};
const getSelectedWordBookId = () => loadCustomWordBooks().selectedId || 'default';
const setWordBookSource = (v) => {
  const data = loadCustomWordBooks();
  if (v === 'default') data.selectedId = 'default';
  else if (data.books.length > 0) data.selectedId = data.books[0].id;
  saveCustomWordBooks(data);
};
const setSelectedWordBookId = (id) => {
  const data = loadCustomWordBooks();
  if (id === 'default' || data.books.some((b) => b.id === id)) { data.selectedId = id; saveCustomWordBooks(data); }
};
const getWordsForGame = () => {
  const id = getSelectedWordBookId();
  if (id === 'default') return levels.flatMap((l) => l.words);
  return getWordsForBook(id);
};
const MIN_WORDS_SHOOT = 3;
const MIN_WORDS_VEG = 5;
const MIN_WORDS_CHEESE = 2;
const addNewWordBook = (nameGiven) => {
  const data = loadCustomWordBooks();
  const id = 'custom-' + Date.now();
  const names = data.books.map((b) => b.name);
  let name = (nameGiven || '').trim() || '新しい単語帳';
  const base = name;
  for (let n = 1; names.includes(name); n++) name = base + n;
  data.books.push({ id, name, words: [] });
  data.selectedId = id;
  saveCustomWordBooks(data);
  return id;
};

const DEBUG_WORD_BOOK_ID = 'custom-debug';
const DEBUG_WORD_BOOK_WORDS = [
  { id: 'apple', native: 'りんご', target: 'apple' },
  { id: 'book', native: '本', target: 'book' },
  { id: 'cat', native: '猫', target: 'cat' },
  { id: 'dog', native: '犬', target: 'dog' },
  { id: 'water', native: '水', target: 'water' },
  { id: 'fire', native: '火', target: 'fire' },
  { id: 'sun', native: '太陽', target: 'sun' },
  { id: 'moon', native: '月', target: 'moon' },
  { id: 'star', native: '星', target: 'star' },
  { id: 'tree', native: '木', target: 'tree' },
  { id: 'flower', native: '花', target: 'flower' },
  { id: 'house', native: '家', target: 'house' },
  { id: 'car', native: '車', target: 'car' },
  { id: 'school', native: '学校', target: 'school' },
  { id: 'friend', native: '友達', target: 'friend' },
  { id: 'family', native: '家族', target: 'family' },
  { id: 'time', native: '時間', target: 'time' },
  { id: 'day', native: '日', target: 'day' },
  { id: 'night', native: '夜', target: 'night' },
  { id: 'food', native: '食べ物', target: 'food' },
  { id: 'music', native: '音楽', target: 'music' },
  { id: 'computer', native: 'パソコン', target: 'computer' },
  { id: 'phone', native: '電話', target: 'phone' },
  { id: 'door', native: 'ドア', target: 'door' },
  { id: 'window', native: '窓', target: 'window' },
  { id: 'table', native: 'テーブル', target: 'table' },
  { id: 'chair', native: '椅子', target: 'chair' },
  { id: 'pen', native: 'ペン', target: 'pen' },
  { id: 'paper', native: '紙', target: 'paper' },
  { id: 'key', native: '鍵', target: 'key' }
];
const ensureDebugWordBook = () => {
  const data = loadCustomWordBooks();
  if (data.books.some((b) => b.id === DEBUG_WORD_BOOK_ID)) return;
  data.books.push({ id: DEBUG_WORD_BOOK_ID, name: 'デバッグ用単語帳', words: DEBUG_WORD_BOOK_WORDS.slice() });
  saveCustomWordBooks(data);
};

// ============================================================
// 旧データ → 新単語状態モデルへの移行
// ============================================================
const migrateToNewWordState = () => {
  if (localStorage.getItem(WORD_STATE_MIGRATION_KEY)) return;
  const oldProgress = loadProgress();
  const oldMisses = loadMisses();
  const allWordIds = new Set();
  levels.forEach(lv => lv.words.forEach(w => allWordIds.add(w.id)));
  try {
    const customBooks = loadCustomWordBooks();
    customBooks.books.forEach(book => book.words.forEach(w => allWordIds.add(w.id)));
  } catch {}
  // 旧データに記録されているIDも含める
  Object.keys(oldProgress).forEach(id => allWordIds.add(id));
  Object.keys(oldMisses).forEach(id => allWordIds.add(id));
  if (allWordIds.size === 0) { localStorage.setItem(WORD_STATE_MIGRATION_KEY, 'true'); return; }
  const newWordState = {};
  allWordIds.forEach(id => {
    const fam = oldProgress[id] ?? 20;
    const missCount = oldMisses[id] ?? 0;
    let consecutiveCorrect = 0, totalCorrect = 0, lastCorrectDate = null;
    if (fam >= 60 && missCount < 2) {
      consecutiveCorrect = 2;
      totalCorrect = Math.floor(fam / 10);
      lastCorrectDate = new Date().toISOString();
    } else if (fam >= 30 || (missCount > 0 && missCount < 3)) {
      consecutiveCorrect = missCount === 0 ? 1 : 0;
      totalCorrect = Math.max(1, Math.floor(fam / 20));
      lastCorrectDate = totalCorrect > 0 ? new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString() : null;
    }
    newWordState[id] = { consecutiveCorrect, lastCorrectDate, totalCorrect };
  });
  saveWordState(newWordState);
  localStorage.setItem(WORD_STATE_MIGRATION_KEY, 'true');
};
migrateToNewWordState();

const state = {
  running: false,
  paused: false,
  score: 0,
  health: 100,
  questionsShown: 0, // シューティング: 出題数
  correctCount: 0,   // シューティング: 正解数
  wrongCount: 0,     // シューティング: 不正解数
  streak: 0,
  multiplier: 1,
  superModeUntil: 0,
  enemies: [],
  bullets: [],
  stats: {},
  currentWord: null,
  spawnTimer: 0,
  lastSpawnedWordId: null,
  enemiesKilled: 0,
  spawnInterval: 4000, // 出現間隔（ミリ秒）、初期値は4秒
  usingVoice: false,
  missFeedbackUntil: 0,
  shakeUntil: 0,
  missFeedbackReason: 'hit', // 'hit' = 敵に当たった / 'wrong' = 誤答
  effects: [],
  summaryReady: false,
  showAnswerUntil: 0, // 解答表示の終了時刻
  answerToShow: null, // 表示する解答
  gamePausedForAnswer: false, // 解答表示のためにゲームが一時停止しているか
  flash: { view: 'categories', category: null, items: [], idx: 0, flipped: false, choices: [], correctIndex: -1, selectedBookId: null, selectedCats: [] },
  choices: [], // 四択の選択肢 [{ text: 'apple', isCorrect: true }, ...]
  selectedChoiceIndex: 0, // 現在選択されている選択肢のインデックス（0-3）
  highlightedChoiceIndex: -1, // 光っている選択肢のインデックス（-1は光っていない）
  highlightUntil: 0, // ハイライトの終了時刻
  highlightIsCorrect: true, // ハイライトが正解（true）か不正解（false）か
  pressedKeys: new Set(), // 現在押されているキーのセット
  inputMode: 'input', // 'choice' (選択式) または 'input' (入力式) — デフォルトは入力式
  laser: null, // レーザー情報 { start: 時刻, fromX, fromY, toX, toY, duration, usedVoice }
  mode: 'home',
  bg: { shooting: null, cheese: null },
  veg: {
    sets: [],
    setIndex: 0,
    round: 1,
    difficulty: 'easy',
    activeWords: [],
    currentIndex: 0,
    startTime: 0,
    reviewIndex: 0,
    missDifficulty: {},
    easySetCounter: 0,
    started: false,
    usedWordIds: {},
    currentSetWords: [],
    gauge: 0,
    gaugeRate: 4.0,
    gaugeRunning: false,
    gaugePaused: false,
    gaugeLastTick: 0,
    gaugeTimerId: null,
    totalCleared: 0,
    totalAttempted: 0,
    gameOver: false,
  },
  cheese: {
    running: false,
    startTime: 0,
    pausedTime: 0, // ポーズ開始時刻
    questionsShown: 0,
    correctCount: 0,
    wrongCount: 0,
    item: null,
    leftWord: null,
    centerWord: null,
    rightWord: null,
    playerSide: 'center',
    feedbackUntil: 0,
    shakeUntil: 0,
    feedbackTitle: '',
    feedbackPenalty: 0,
    successUntil: 0,
    successTitle: '',
    successBonus: 0,
    lastItemType: null, // 前回のアイテムタイプ（カビ連続防止用）
    lastCheeseSide: null,
    missedAnswers: null, // ミスした時の3つの単語の答え（再抽選前に表示用）
    pausedForMiss: false, // ミス画面で一時停止中かどうか
    lastResumeAt: 0, // 失敗画面からスペースで再開した時刻（再開直後のスペースで即落下しないようにする）
  },
  minecart: {
    questionIndex: 0,
    correctCount: 0,
    paused: false,
  },
};

const isJapanese = (s) => /[\u3040-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF]/.test(String(s));
const fontFamilyJP = '"DotGothic16", "Hiragino Kaku Gothic ProN", "Yu Gothic", "Meiryo", system-ui, sans-serif';
const fontFamilyEN = '"DotGothic16", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif';
const setCtxFont = (size, bold, text) => { const ff = isJapanese(text) ? fontFamilyJP : fontFamilyEN; ctx.font = `${bold? 'bold ' : ''}${size}px ${ff}`; };
const measureTextSmart = (txt, size=16, bold=false) => { setCtxFont(size, bold, txt); return ctx.measureText(txt).width; };
const initLangObserver = () => {
  const applyNode = (node) => {
    if (node.nodeType === 1) {
      const t = node.textContent || '';
      if (isJapanese(t)) node.setAttribute('lang','ja');
      node.childNodes.forEach(applyNode);
    } else if (node.nodeType === 3) {
      const p = node.parentNode; if (!p) return; const t = p.textContent || ''; if (isJapanese(t)) p.setAttribute('lang','ja');
    }
  };
  const obs = new MutationObserver((muts) => {
    muts.forEach((m) => {
      if (m.type === 'childList') { m.addedNodes.forEach(applyNode); }
      if (m.type === 'characterData') { applyNode(m.target); }
    });
  });
  obs.observe(document.body, { subtree: true, childList: true, characterData: true });
};
initLangObserver();

const preloadFonts = () => {
  try {
    const jpSample = '日本語かな漢字電車空港学校りんご桃梨犬猫鳥魚馬熊地図荷物切符ホテル';
    const enSample = 'Paused Missed Resume';
    Promise.all([
      document.fonts.load('16px "DotGothic16"', jpSample),
      document.fonts.load('16px "Jersey 15"', enSample)
    ]).then(() => { state.fontsReady = true; });
  } catch {}
};
preloadFonts();
state.bg.shooting = new Image(); state.bg.shooting.src = 'public/shootingbackground.jpg';
state.bg.cheese = new Image(); state.bg.cheese.src = 'public/pizzabackground.jpg';
state.imgMouse = new Image(); state.imgMouse.src = 'public/mouse.png';
state.imgCheese = new Image(); state.imgCheese.src = 'public/cheese.png';
state.imgPoison = new Image(); state.imgPoison.src = 'public/poison.png';
state.imgShuttle = new Image(); state.imgShuttle.src = 'public/shuttle.PNG';
state.imgRock = new Image(); state.imgRock.src = 'public/rock.PNG';
state.imgArrowLeft = new Image();
state.imgArrowLeft.src = 'public/left.PNG';
state.imgArrowRight = new Image();
state.imgArrowRight.src = 'public/right.PNG';
window.state = state;

const now = () => performance.now();

const normalize = (s) => s.toLowerCase().trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

// 選択肢を生成する関数（正解1つ + 不正解3つ）
const generateChoices = (correctWord) => {
  if (!correctWord) return [];
  
  const allWords = (QuizEngine.session && QuizEngine.session.allWords.length > 1)
    ? QuizEngine.session.allWords
    : getWordsForGame();
  const correctAnswer = correctWord.target;
  
  // 不正解候補を取得（正解以外の単語から）
  const wrongCandidates = allWords
    .filter(w => w.target !== correctAnswer)
    .map(w => w.target);
  
  // 不正解を3つランダムに選択
  const wrongAnswers = [];
  const used = new Set();
  while (wrongAnswers.length < 3 && wrongCandidates.length > 0) {
    const randomIndex = Math.floor(rand() * wrongCandidates.length);
    const candidate = wrongCandidates[randomIndex];
    if (!used.has(candidate)) {
      wrongAnswers.push(candidate);
      used.add(candidate);
    }
  }
  
  // 正解と不正解を合わせてシャッフル
  const allChoices = [
    { text: correctAnswer, isCorrect: true },
    ...wrongAnswers.map(text => ({ text, isCorrect: false }))
  ];
  
  // シャッフル
  for (let i = allChoices.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [allChoices[i], allChoices[j]] = [allChoices[j], allChoices[i]];
  }
  
  return allChoices;
};


const pickChallenge = (w) => {
  return { display: `${w.native}`, expect: w.target, mask: null, mode: 'nativeOnly' };
};

const addScore = (base, answerTime, usedVoice) => {
  const mult = Math.min(5, Math.max(1, state.multiplier));
  let add = base * mult;
  if (answerTime <= 2000) add += 50;
  if (usedVoice) add += 200;
  state.score += add;
};

const updateStreak = (ok) => {
  if (ok) {
    state.streak += 1;
    state.multiplier = Math.min(5, 1 + Math.floor(state.streak/1));
    if (state.streak >= 5) state.superModeUntil = now() + 5000;
  } else {
    state.streak = 0;
    state.multiplier = 1;
  }
};

const SFX = (() => {
  const ctxA = new (window.AudioContext || window.webkitAudioContext)();
  const beep = (freq, time=0.08) => {
    const o = ctxA.createOscillator();
    const g = ctxA.createGain();
    o.frequency.value = freq;
    o.connect(g); g.connect(ctxA.destination);
    g.gain.setValueAtTime(0.0, ctxA.currentTime);
    g.gain.linearRampToValueAtTime(0.2, ctxA.currentTime+0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, ctxA.currentTime+time);
    o.start(); o.stop(ctxA.currentTime+time);
  };
  return { hit: ()=>beep(660), miss: ()=>beep(160), explode: ()=>beep(120), type: ()=>beep(440,0.03) };
})();

const player = { x: 250, y: canvas.height/2 };

const shuffleArray = (arr) => {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

// ============================================================
// QuizEngine — 全ゲーム共通の出題エンジン
// 20語固定 + Phase1(網羅) → Phase2(反復) モデル
// ============================================================
const QuizEngine = {
  session: null,

  /** セッション開始 */
  startSession(selectionMode, words, manualWordIds = []) {
    const maxWords = 20;
    let selectedWords = [];
    switch (selectionMode) {
      case 'random-all':
        selectedWords = this._selectRandom(words, maxWords);
        break;
      case 'random-review': {
        const pool = words.filter(w => getWordCategory(getWordState(w.id)) !== 'mastered');
        selectedWords = this._selectRandom(pool, maxWords);
        break;
      }
      case 'random-weak': {
        const pool = words.filter(w => getWordCategory(getWordState(w.id)) === 'needs-study');
        selectedWords = this._selectRandom(pool, maxWords);
        break;
      }
      case 'manual': {
        const idSet = new Set(manualWordIds.slice(0, maxWords));
        selectedWords = words.filter(w => idSet.has(w.id));
        break;
      }
      default: return false;
    }
    if (selectedWords.length === 0) return false;

    // Phase1キュー: random-all/manual は全単語、それ以外は mastered除外
    const includeAll = selectionMode === 'random-all' || selectionMode === 'manual';
    const phase1Words = includeAll
      ? selectedWords
      : selectedWords.filter(w => getWordCategory(getWordState(w.id)) !== 'mastered');
    const phase1Queue = shuffleArray(phase1Words);

    this.session = {
      mode: selectionMode,
      allWords: selectedWords.slice(),
      phase: 1,
      phase1Queue,
      phase2Queue: [],
      currentWordIndex: 0,
      questionsAnswered: 0,
      correctCount: 0,
      wrongCount: 0,
    };
    return true;
  },

  /** 次の単語を取得 (null = セッション終了) */
  getNextWord() {
    if (!this.session) return null;
    if (this.session.phase === 1) {
      if (this.session.currentWordIndex < this.session.phase1Queue.length) {
        return this.session.phase1Queue[this.session.currentWordIndex];
      }
      // Phase1完了 → Phase2へ
      this._transitionToPhase2();
      if (this.session.phase2Queue.length === 0) return null;
      // Fall through to Phase2 logic below
    }
    // Phase2: 途中でmasteredになった単語はスキップ
    while (this.session.currentWordIndex < this.session.phase2Queue.length) {
      const w = this.session.phase2Queue[this.session.currentWordIndex];
      if (getWordCategory(getWordState(w.id)) === 'mastered') {
        this.session.currentWordIndex++;
        continue;
      }
      return w;
    }
    return null;
  },

  /** n語まとめて取得 (Cheese用) */
  getNextWords(n) {
    const result = [];
    for (let i = 0; i < n; i++) {
      const w = this.getNextWord();
      if (!w) break;
      result.push(w);
      // getNextWordは currentWordIndex を進めないので手動で進める
      this.session.currentWordIndex++;
    }
    return result.length > 0 ? result : null;
  },

  /** 回答報告 */
  reportAnswer(wordId, isCorrect) {
    if (!this.session) return;
    updateWordStateOnAnswer(wordId, isCorrect);
    this.session.questionsAnswered++;
    if (isCorrect) this.session.correctCount++;
    else this.session.wrongCount++;
    // getNextWords経由の場合はすでにindexが進んでいるのでここでは進めない
  },

  /** 1問進める (通常のgetNextWord + reportAnswerフロー用) */
  advance() {
    if (this.session) this.session.currentWordIndex++;
  },

  /** 進捗情報 */
  getProgress() {
    if (!this.session) return null;
    const queue = this.session.phase === 1 ? this.session.phase1Queue : this.session.phase2Queue;
    return {
      phase: this.session.phase,
      current: this.session.currentWordIndex,
      total: this.session.phase === 1
        ? this.session.phase1Queue.length + this._estimatePhase2Count()
        : this.session.phase1Queue.length + this.session.phase2Queue.length,
      phaseTotal: queue.length,
      questionsAnswered: this.session.questionsAnswered,
      correctCount: this.session.correctCount,
      wrongCount: this.session.wrongCount,
    };
  },

  /** セッション完了判定 */
  isSessionComplete() {
    if (!this.session) return true;
    if (this.session.phase === 1) return false;
    return this.session.currentWordIndex >= this.session.phase2Queue.length;
  },

  /** 残り出題数 */
  peekRemainingCount() {
    if (!this.session) return 0;
    if (this.session.phase === 1) {
      const phase1Remaining = this.session.phase1Queue.length - this.session.currentWordIndex;
      return phase1Remaining + this._estimatePhase2Count();
    }
    return this.session.phase2Queue.length - this.session.currentWordIndex;
  },

  /** セッション終了 */
  endSession() { this.session = null; },

  // --- 内部ヘルパー ---

  _selectRandom(pool, max) {
    const shuffled = shuffleArray(pool);
    return shuffled.slice(0, Math.min(max, shuffled.length));
  },

  _estimatePhase2Count() {
    // Phase1中はまだPhase2キューが無いので、現時点の状態から推定
    let count = 0;
    if (!this.session) return 0;
    this.session.allWords.forEach(w => {
      const cat = getWordCategory(getWordState(w.id));
      if (cat === 'needs-study') count += 3;
      else if (cat === 'almost-there') count += 1;
      else if (cat === 'review') count += 1;
    });
    return count;
  },

  _transitionToPhase2() {
    const needsStudy = [], almostThere = [], review = [];
    // Phase1で出題された単語のみを対象にPhase1終了時点の最新状態で分類
    this.session.phase1Queue.forEach(w => {
      const cat = getWordCategory(getWordState(w.id));
      if (cat === 'needs-study') needsStudy.push(w);
      else if (cat === 'almost-there') almostThere.push(w);
      else if (cat === 'review') review.push(w);
      // mastered → 除外
    });

    // 各グループをシャッフル
    const nsShuffled = shuffleArray(needsStudy);
    const atShuffled = shuffleArray(almostThere);
    const rvShuffled = shuffleArray(review);

    // リピート展開: needs-study x3, almost-there x1, review x1
    const queue = [];
    nsShuffled.forEach(w => { for (let i = 0; i < 3; i++) queue.push(w); });
    atShuffled.forEach(w => { queue.push(w); });
    rvShuffled.forEach(w => { queue.push(w); });

    // 同一単語が連続しないよう並び替え
    this.session.phase2Queue = this._deduplicateConsecutive(queue);
    this.session.phase = 2;
    this.session.currentWordIndex = 0;
  },

  _deduplicateConsecutive(queue) {
    if (queue.length <= 1) return queue;
    const result = queue.slice();
    for (let i = 1; i < result.length; i++) {
      if (result[i].id === result[i - 1].id) {
        // 後方から異なる単語を探してスワップ
        let swapped = false;
        for (let j = i + 1; j < result.length; j++) {
          if (result[j].id !== result[i - 1].id) {
            [result[i], result[j]] = [result[j], result[i]];
            swapped = true;
            break;
          }
        }
        if (!swapped) {
          // 前方から探す
          for (let j = 0; j < i - 1; j++) {
            if (result[j].id !== result[i].id && result[j + 1].id !== result[i].id) {
              // j+1の位置に挿入
              const [item] = result.splice(i, 1);
              result.splice(j + 1, 0, item);
              break;
            }
          }
        }
      }
    }
    return result;
  },
};


const spawnEnemy = () => {
  // QuizEngineから次の単語を取得
  const w = QuizEngine.getNextWord();
  if (!w) {
    // セッション終了: 画面に敵が残っていなければ終了処理
    if (state.enemies.length === 0) {
      endShootingSession();
    }
    return;
  }
  // 同じ単語が既に画面上にいる場合はスキップして次へ
  if (state.enemies.some(e => !e.dead && e.id === w.id)) {
    QuizEngine.advance();
    return;
  }
  QuizEngine.advance(); // インデックスを進める

  state.lastSpawnedWordId = w.id;
  const ch = pickChallenge(w);
  const baseSpeed = state.superModeUntil > now() ? 0.6 : 1.2;
  const len = (w.target || '').length;
  const speedFactor = 1 + Math.max(0, len - 4) * 0.1;
  const speed = Math.max(0.35, baseSpeed / speedFactor);
  const e = {
    id: w.id,
    native: w.native,
    target: w.target,
    display: ch.display,
    expect: ch.expect,
    mode: ch.mode,
    x: canvas.width - 40,
    y: 80 + rand()*(canvas.height-160),
    speed,
    born: now(),
    dead: false,
  };
  state.enemies.push(e);
  state.questionsShown++;
  updateCurrentWord();
  debug('SPAWN id=', e.id, 'display=', e.display, 'expect=', e.expect, 'mode=', e.mode);
};

const updateCurrentWord = () => {
  // 最も近い敵（x座標が最も小さい、つまり最も左にいる敵）を currentWord に設定
  const aliveEnemies = state.enemies.filter(e => !e.dead);
  if (aliveEnemies.length > 0) {
    const newCurrentWord = aliveEnemies.reduce((closest, e) => 
      e.x < closest.x ? e : closest
    );
    // 現在の単語が変わった場合、選択肢を再生成
    if (!state.currentWord || state.currentWord.id !== newCurrentWord.id) {
      state.currentWord = newCurrentWord;
      state.choices = generateChoices(newCurrentWord);
      // ハイライトをリセット
      state.highlightedChoiceIndex = -1;
      state.highlightUntil = 0;
    }
  } else {
    state.currentWord = null;
    state.choices = [];
    state.highlightedChoiceIndex = -1;
    state.highlightUntil = 0;
  }
};

const updateSpawnRate = () => {
  // 出現間隔 = 4秒 - (倒した数 * 0.1秒)、最小値は0.5秒
  const baseInterval = 4000; // 4秒
  const reduction = state.enemiesKilled * 100; // 0.1秒 = 100ミリ秒
  state.spawnInterval = Math.max(500, baseInterval - reduction);
};

const fireBullet = (ch) => {
  const b = { x: player.x+30, y: player.y, vx: state.superModeUntil>now()? 8 : 5, char: ch, targetId: state.currentWord?.id };
  state.bullets.push(b);
  SFX.type();
  debug('TYPE char=', ch);
};
const fireBulletToEnemy = (e, usedVoice) => {
  const b = { x: player.x+30, y: player.y, speed: state.superModeUntil>now()? 18 : 12, targetId: e.id, usedVoice };
  state.bullets.push(b);
  SFX.type();
  debug('SHOT target=', e.id);
};

const measureText = (txt, size=16) => { return measureTextSmart(txt, size, false); };

const drawEnemy = (e) => {
  const sizeImg = 80; const sizeText = 18;
  const img = state.imgRock;
  if (img && img.complete) {
    ctx.drawImage(img, e.x - sizeImg/2, e.y - sizeImg/2, sizeImg, sizeImg);
  }
  let ts = 30;
  setCtxFont(ts, true, e.display);
  while (ctx.measureText(e.display).width > sizeImg * 0.85 && ts > 12) { ts -= 2; setCtxFont(ts, true, e.display); }
  ctx.save();
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.lineWidth = 4;
  ctx.strokeStyle = 'rgba(0,0,0,0.5)';
  ctx.strokeText(e.display, e.x, e.y + sizeImg/2 + 24);
  ctx.fillStyle = '#e6edf3';
  ctx.fillText(e.display, e.x, e.y + sizeImg/2 + 24);
  ctx.restore();
  const ws = getWordState(e.id);
  const cat = getWordCategory(ws);
  const catColor = getCategoryColor(cat);
  const barH = sizeImg + 24; const barX = e.x + sizeImg/2 + 6; const barY = e.y - sizeImg/2;
  ctx.fillStyle = catColor; ctx.fillRect(barX, barY, 8, barH);
};


const drawPlayer = () => {
  const size = 128;
  const x = player.x;
  const y = player.y;
  const img = state.imgShuttle;
  if (img && img.complete) {
    ctx.drawImage(img, x - size/2, y - size/2, size, size);
  }
  // 体力バーは選択肢の下に描画するため、ここでは描画しない
};

const drawBullets = () => {
  // 背景が暗いので、明るい黄色で見やすくする
  ctx.fillStyle = '#fbbf24'; // 明るい黄色
  ctx.strokeStyle = '#fcd34d'; // さらに明るい黄色（枠線）
  ctx.lineWidth = 1;
  for (const b of state.bullets) {
    ctx.beginPath();
    ctx.arc(b.x, b.y, 5, 0, Math.PI*2);
    ctx.fill();
    ctx.stroke(); // 枠線を追加してより見やすく
  }
};

// レーザーを描画
const drawLaser = () => {
  if (!state.laser) return;
  const t = now();
  const elapsed = t - state.laser.start;
  if (elapsed > state.laser.duration) {
    state.laser = null;
    return;
  }
  
  // レーザーを緑色で描画
  ctx.save();
  ctx.strokeStyle = '#22c55e'; // 緑色
  ctx.lineWidth = 4;
  ctx.shadowBlur = 10;
  ctx.shadowColor = '#22c55e';
  ctx.beginPath();
  ctx.moveTo(state.laser.fromX, state.laser.fromY);
  ctx.lineTo(state.laser.toX, state.laser.toY);
  ctx.stroke();
  
  // レーザーの先端に光る点を追加
  ctx.fillStyle = '#10b981';
  ctx.beginPath();
  ctx.arc(state.laser.toX, state.laser.toY, 6, 0, Math.PI * 2);
  ctx.fill();
  
  ctx.restore();
};

// 選択肢を描画する関数
const drawChoices = () => {
  // 入力式モードの時は選択肢を描画しない
  if (state.inputMode === 'input') return;
  if (!state.choices || state.choices.length === 0 || !state.running || state.paused || state.gamePausedForAnswer) return;
  if (!state.currentWord) return;
  
  // 自機の位置を取得
  const playerX = player.x;
  const playerY = player.y;
  
  const choiceWidth = 120; // 各選択肢の幅
  const choiceHeight = 40; // 各選択肢の高さ
  const spacing = 10; // 選択肢間の間隔
  const offset = 60; // 自機からの距離
  
  // 4つの選択肢を自機の上下左右に配置（キーの方向に対応）
  // 上キー: 0, 下キー: 1, 左キー: 2, 右キー: 3
  const positions = [
    { x: playerX - choiceWidth / 2, y: playerY - choiceHeight - spacing - offset, key: '↑' }, // 上（自機の上）
    { x: playerX - choiceWidth / 2, y: playerY + spacing + offset, key: '↓' }, // 下（自機の下）
    { x: playerX - choiceWidth - spacing - offset, y: playerY - choiceHeight / 2, key: '←' }, // 左（自機の左）
    { x: playerX + spacing + offset, y: playerY - choiceHeight / 2, key: '→' } // 右（自機の右）
  ];
  
  const t = now();
  const isHighlighted = t < state.highlightUntil;
  
  for (let i = 0; i < Math.min(4, state.choices.length); i++) {
    const choice = state.choices[i];
    const pos = positions[i];
    const isThisHighlighted = isHighlighted && state.highlightedChoiceIndex === i;
    
    // 背景（ハイライト時は正解なら緑色、不正解なら赤色）
    if (isThisHighlighted) {
      ctx.fillStyle = state.highlightIsCorrect ? '#22c55e' : '#ef4444';
    } else {
      ctx.fillStyle = '#1e293b';
    }
    ctx.fillRect(pos.x, pos.y, choiceWidth, choiceHeight);
    
    // 枠線（ハイライト時は正解なら明るい緑色、不正解なら明るい赤色）
    if (isThisHighlighted) {
      ctx.strokeStyle = state.highlightIsCorrect ? '#10b981' : '#dc2626';
      ctx.lineWidth = 3;
    } else {
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 2;
    }
    ctx.strokeRect(pos.x, pos.y, choiceWidth, choiceHeight);
    
    // キー表示（左上）
    ctx.fillStyle = '#3b82f6';
    setCtxFont(16, true, pos.key);
    ctx.fillText(pos.key, pos.x + 8, pos.y + 18);
    
    // テキスト（中央）
    ctx.fillStyle = '#e6edf3';
    setCtxFont(14, true, choice.text);
    const textWidth = ctx.measureText(choice.text).width;
    ctx.fillText(choice.text, pos.x + (choiceWidth - textWidth) / 2, pos.y + choiceHeight / 2 + 5);
  }
};

const updateBullets = () => {
  for (const b of state.bullets) {
    if (b.speed) {
      const t = state.enemies.find(e=>e.id===b.targetId && !e.dead);
      if (!t) { b.done = true; continue; }
      const dx = t.x - b.x;
      const dy = t.y - b.y;
      const d = Math.hypot(dx, dy);
      if (d <= 18) { succeedEnemy(t, !!b.usedVoice); b.done = true; continue; }
      const step = Math.min(b.speed, d);
      b.x += dx / d * step;
      b.y += dy / d * step;
    } else {
      b.x += b.vx;
      if (b.x >= canvas.width+20) b.done = true;
    }
  }
  state.bullets = state.bullets.filter(b=>!b.done);
};

const updateEnemies = () => {
  // 解答表示中は敵の移動を停止
  if (state.gamePausedForAnswer) {
    return;
  }
  for (const e of state.enemies) e.x -= e.speed;
  const survive = [];
  for (const e of state.enemies) {
    if (e.x < 60) {
      if (!e.dead) failEnemy(e);
    } else survive.push(e);
  }
  state.enemies = survive;
};

const explodeAt = (x,y) => {
  SFX.explode();
  state.effects.push({ x, y, start: now(), duration: 400 });
};

const succeedEnemy = (e, usedVoice=false) => {
  e.dead = true; explodeAt(e.x, e.y);
  const t = now()-e.born;
  addScore(100, t, usedVoice);
  updateStreak(true);
  QuizEngine.reportAnswer(e.id, true);
  const s = state.stats[e.id] || { ok:0, fail:0, times:[] };
  s.ok++; s.times.push(t); state.stats[e.id]=s;
  state.correctCount++;
  state.enemies = state.enemies.filter(x=>x!==e);
  state.enemiesKilled++;
  updateSpawnRate();
  updateCurrentWord();
  if (now() + state.spawnInterval > state.spawnTimer) {
    state.spawnTimer = now() + state.spawnInterval;
  }
  debug('SUCCESS id=', e.id, 'time=', t, 'score=', state.score, 'streak=', state.streak, 'mult=', state.multiplier);
};

const failEnemy = (e) => {
  e.dead = true; SFX.miss();
  state.wrongCount++;
  updateStreak(false);
  QuizEngine.reportAnswer(e.id, false);
  const s = state.stats[e.id] || { ok:0, fail:0, times:[] };
  s.fail++; state.stats[e.id]=s;
  state.enemies = state.enemies.filter(x=>x!==e);
  updateCurrentWord();
  if (now() + state.spawnInterval > state.spawnTimer) {
    state.spawnTimer = now() + state.spawnInterval;
  }
  state.missFeedbackUntil = now() + 800;
  state.shakeUntil = now() + 700;
  state.missFeedbackReason = 'hit';
  const answerStartTime = now() + 800;
  setTimeout(() => {
    state.gamePausedForAnswer = true;
    state.answerToShow = e.target;
    state.showAnswerUntil = answerStartTime + 3000;
    setTimeout(() => {
      state.gamePausedForAnswer = false;
      state.answerToShow = null;
    }, 3000);
  }, 800);
  debug('FAIL id=', e.id, 'wrongCount=', state.wrongCount);
};

/** スペースキー用: 分からない単語 → 不正解として解答表示して次の問題へ */
const triggerShowAnswerShoot = () => {
  if (state.mode !== 'shoot' || !state.running || state.paused || state.gamePausedForAnswer || !state.currentWord) return;
  const enemy = state.enemies.find(ev => !ev.dead && ev.id === state.currentWord.id);
  if (enemy) failEnemy(enemy);
};

const draw = () => {
  const theme = themes[0];
  ctx.clearRect(0,0,canvas.width,canvas.height);
  const grd = ctx.createLinearGradient(0,0,0,canvas.height);
  grd.addColorStop(0, theme.bg);
  grd.addColorStop(1, '#0b1225');
  ctx.fillStyle = grd; ctx.fillRect(0,0,canvas.width,canvas.height);
  if (state.bg.shooting && state.bg.shooting.complete) {
    const iw = state.bg.shooting.naturalWidth;
    const ih = state.bg.shooting.naturalHeight;
    const scale = Math.max(canvas.width/iw, canvas.height/ih);
    const w = iw * scale;
    const h = ih * scale;
    ctx.drawImage(state.bg.shooting, (canvas.width - w)/2, (canvas.height - h)/2, w, h);
  }
  const t = now();
  const ox = t < state.shakeUntil ? (rand()*2-1)*12 : 0;
  const oy = t < state.shakeUntil ? (rand()*2-1)*12 : 0;
  ctx.save();
  ctx.translate(ox, oy);
  drawPlayer();
  for (const e of state.enemies) drawEnemy(e);
  drawBullets();
  drawLaser();
  const tNow = now();
  const remain = [];
  for (const fx of state.effects) {
    const dt = tNow - fx.start;
    if (dt > fx.duration) continue;
    const k = 1 - dt / fx.duration;
    ctx.fillStyle = `rgba(255,200,50,${Math.max(0, k)})`;
    ctx.beginPath(); ctx.arc(fx.x, fx.y, 24 + 22*(1-k), 0, Math.PI*2); ctx.fill();
    remain.push(fx);
  }
  state.effects = remain;
  ctx.restore();
  // 選択肢を描画
  drawChoices();
  if (t < state.missFeedbackUntil) {
    ctx.save();
    const isWrong = state.missFeedbackReason === 'wrong';
    // 誤答時はオレンジ系、敵に当たった時は赤系で区別
    ctx.fillStyle = isWrong ? 'rgba(245,158,11,0.28)' : 'rgba(255,0,0,0.22)';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = isWrong ? '#f59e0b' : '#ef4444';
    const text = isWrong ? 'WRONG!' : 'Missed';
    setCtxFont(64, true, text);
    const tw = ctx.measureText(text).width;
    ctx.fillText(text, (canvas.width - tw)/2, canvas.height/2);
    ctx.restore();
  }
  // ポーズ画面はHTMLで表示するため、canvas上には描画しない
  // if (state.paused) {
  //   ctx.save();
  //   ctx.fillStyle = 'rgba(0,0,0,0.5)';
  //   ctx.fillRect(0,0,canvas.width,canvas.height);
  //   ctx.fillStyle = '#e6edf3';
  //   ctx.font = 'bold 96px system-ui';
  //   const text = 'PAUSED';
  //   const tw = ctx.measureText(text).width;
  //   ctx.fillText(text, (canvas.width - tw)/2, canvas.height/2);
  //   ctx.restore();
  // }
  if (state.answerToShow && t < state.showAnswerUntil) {
    ctx.save();
    ctx.fillStyle = 'rgba(0,0,0,0.6)';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = '#e6edf3';
    const answerText = state.answerToShow;
    setCtxFont(72, true, answerText);
    const aw = ctx.measureText(answerText).width;
    ctx.fillText(answerText, (canvas.width - aw)/2, canvas.height/2);
    ctx.restore();
  }
};

const tick = () => {
  if (!state.running) return;
  if (!state.paused && !state.gamePausedForAnswer) {
    updateEnemies();
    updateBullets();
    updateCurrentWord();
    // 敵が最大数未満で、一定時間経過したらスポーン
    const maxEnemies = state.inputMode === 'choice' ? 1 : 3;
    if (state.enemies.length < maxEnemies && now() > state.spawnTimer) {
      spawnEnemy();
      state.spawnTimer = now() + state.spawnInterval;
    }
    // 敵が全て消えた場合の処理
    if (state.enemies.length === 0) {
      spawnEnemy();
      state.spawnTimer = now() + state.spawnInterval;
    }
  }
  draw();
  if (questionsShownEl) questionsShownEl.textContent = state.questionsShown;
  if (correctCountEl) correctCountEl.textContent = state.correctCount;
  if (wrongCountEl) wrongCountEl.textContent = state.wrongCount;
  if (state.mode === 'cheese' && scoreEl) scoreEl.textContent = Math.floor(state.score);
  if (state.mode !== 'shoot' && healthGaugeFillEl) {
    const pct = Math.max(0, Math.min(100, state.health));
    healthGaugeFillEl.style.width = pct + '%';
    healthGaugeFillEl.setAttribute('aria-valuenow', Math.floor(pct));
    healthGaugeFillEl.removeAttribute('data-low');
    healthGaugeFillEl.removeAttribute('data-danger');
    if (pct <= 30) healthGaugeFillEl.setAttribute('data-danger', 'true');
    else if (pct <= 60) healthGaugeFillEl.setAttribute('data-low', 'true');
  }
  requestAnimationFrame(tick);
};

const endShootingSession = () => {
  state.running = false;
  state.paused = false;
  state.enemies = [];
  state.bullets = [];
  state.currentWord = null;

  renderSummary();
  state.summaryReady = true;
  summary.classList.remove('hidden');
  summaryToggleBtn.textContent = 'Summary (ready)';
  QuizEngine.endSession();
};

const startLevel = () => {
  state.running = true; state.paused = false; state.health = 100; state.streak = 0; state.multiplier = 1; state.superModeUntil = 0; state.enemies = []; state.stats = {};
  state.questionsShown = 0;
  state.correctCount = 0;
  state.wrongCount = 0;
  state.lastSpawnedWordId = null;
  state.enemiesKilled = 0;
  state.spawnInterval = 4000;
  state.choices = [];
  updateSpawnRate();
  if (wordBookNameEl) {
    const data = loadCustomWordBooks();
    const book = data.books.find((b) => b.id === data.selectedId);
    wordBookNameEl.textContent = book ? book.name : 'デフォルト';
  }
  answerInput.value = '';
  player.y = canvas.height / 2;
  spawnEnemy();
  state.spawnTimer = now() + state.spawnInterval;
  updatePauseButtons();
  updateInputMode();
  requestAnimationFrame(tick);
};

const endLevel = () => {
  state.running = false;
  renderSummary();
  state.summaryReady = true;
  summary.classList.add('hidden');
  summaryToggleBtn.textContent = 'Summary (ready)';
};

const avg = (arr) => arr.length? arr.reduce((a,b)=>a+b,0)/arr.length : 0;

const renderSummary = () => {
  const sessionWords = QuizEngine.session ? QuizEngine.session.allWords : getWordsForGame();
  summaryBody.innerHTML = '';
  const header = document.createElement('div');
  header.className = 'summary-row';
  header.innerHTML = `<strong>Word</strong><strong>Accuracy</strong><strong>Avg Time</strong><strong>Status</strong>`;
  summaryBody.appendChild(header);
  for (const w of sessionWords) {
    const s = state.stats[w.id] || { ok:0, fail:0, times:[] };
    const acc = (s.ok + s.fail) > 0 ? Math.round(s.ok / (s.ok + s.fail) * 100) : 0;
    const row = document.createElement('div');
    row.className = 'summary-row';
    const ws = getWordState(w.id);
    const cat = getWordCategory(ws);
    const tAvg = Math.round(avg(s.times));
    row.innerHTML = `
      <div>${w.native} → ${w.target}</div>
      <div>${acc}%</div>
      <div>${tAvg} ms</div>
      <div><span style="background:${getCategoryColor(cat)};color:white;padding:2px 8px;border-radius:4px;font-size:12px;">${getCategoryLabel(cat)}</span></div>
    `;
    summaryBody.appendChild(row);
  }
  summaryToggleBtn.textContent = state.summaryReady ? 'Summary (ready)' : 'Summary';
};
const renderFlashcardBookSelect = () => {
  const data = loadCustomWordBooks();
  const defaultWords = levels.flatMap(l => l.words);
  const books = [{ id: 'default', name: 'デフォルト', words: defaultWords }, ...data.books];
  const html = `
    <div class="fc-container fc-view show">
      <h3 lang="ja" style="margin:0 0 12px 0;">単語帳を選択</h3>
      <div class="fc-categories">
        ${books.map(b => `
          <div class="fc-book-item" data-book-id="${b.id}" style="border-left:4px solid #3b82f6; padding:12px; cursor:pointer; background:#0b1225; border-radius:8px; margin-bottom:6px;">
            <h3 style="margin:0;">${b.name}</h3>
            <div class="fc-count" style="color:#94a3b8; font-size:13px;">${b.words.length} words</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  flashBody.innerHTML = html;
  state.flash.view = 'book-select';
};

const getWordsForBookId = (bookId) => {
  if (bookId === 'default') return levels.flatMap(l => l.words);
  return getWordsForBook(bookId);
};

const renderFlashcardSortSelect = (bookId) => {
  state.flash.selectedBookId = bookId;
  const words = getWordsForBookId(bookId);
  const grouped = { 'needs-study': [], 'almost-there': [], 'mastered': [], 'review': [] };
  for (const w of words) {
    const ws = getWordState(w.id);
    const cat = getWordCategory(ws);
    grouped[cat].push(w);
  }
  const cats = ['needs-study', 'almost-there', 'mastered', 'review'];
  const html = `
    <div class="fc-container fc-view show">
      <div class="fc-header"><h3 lang="ja" style="margin:0;">カテゴリを選択</h3><button class="back" data-action="fc-back-to-books">戻る</button></div>
      <p lang="ja" style="color:#94a3b8; font-size:13px; margin:8px 0 16px 0;">複数選択できます</p>
      <div class="fc-sort-options" style="display:flex; flex-direction:column; gap:8px;">
        ${cats.map(cat => `
          <label class="fc-sort-option" style="display:flex; align-items:center; gap:12px; padding:12px; background:#0b1225; border:1px solid #1e293b; border-radius:8px; cursor:pointer; border-left:4px solid ${getCategoryColor(cat)};">
            <input type="checkbox" value="${cat}" checked style="width:18px; height:18px; cursor:pointer;" />
            <div style="flex:1;">
              <div style="font-weight:bold;">${getCategoryLabel(cat)}</div>
              <div style="color:#94a3b8; font-size:13px;">${grouped[cat].length} words</div>
            </div>
          </label>
        `).join('')}
      </div>
      <button data-action="fc-start-with-sorts" lang="ja" style="margin-top:16px; width:100%; background:#22c55e; color:white; border:none; padding:12px; border-radius:8px; cursor:pointer; font-size:15px;">フラッシュカードを開始</button>
    </div>
  `;
  flashBody.innerHTML = html;
  state.flash.view = 'sort-select';
};

const renderFlashcards = (bookId, selectedCats) => {
  const words = getWordsForBookId(bookId);
  const grouped = { 'needs-study': [], 'almost-there': [], 'mastered': [], 'review': [] };
  for (const w of words) {
    const ws = getWordState(w.id);
    const cat = getWordCategory(ws);
    if (selectedCats.includes(cat)) grouped[cat].push(w);
  }
  const visibleCats = selectedCats.filter(c => grouped[c].length > 0);
  const html = `
    <div class="fc-container fc-view show">
      <div class="fc-header"><h3 lang="ja" style="margin:0;">フラッシュカード</h3><button class="back" data-action="fc-back-to-sorts">戻る</button></div>
      <div class="fc-categories">
        ${visibleCats.map(cat => `
          <div class="fc-category" data-cat="${cat}" style="border-left:4px solid ${getCategoryColor(cat)}">
            <h3>${getCategoryLabel(cat)}</h3><div class="fc-count">${grouped[cat].length} words</div></div>
        `).join('')}
        ${visibleCats.length === 0 ? '<p lang="ja" style="color:#94a3b8;">該当する単語がありません</p>' : ''}
      </div>
    </div>
  `;
  flashBody.innerHTML = html;
  state.flash.view = 'categories';
  state.flash.selectedCats = selectedCats;
};

const groupWords = (bookId) => {
  const allWords = bookId ? getWordsForBookId(bookId) : getWordsForGame();
  const groups = { 'needs-study': [], 'almost-there': [], 'mastered': [], 'review': [] };
  for (const w of allWords) {
    const ws = getWordState(w.id);
    const cat = getWordCategory(ws);
    groups[cat].push({ w, consecutiveCorrect: ws.consecutiveCorrect });
  }
  for (const key of Object.keys(groups)) {
    groups[key].sort((a, b) => a.w.native.localeCompare(b.w.native));
  }
  return groups;
};

const renderWordList = (cat) => {
  const g = groupWords(state.flash.selectedBookId);
  const items = g[cat] || [];
  state.flash.view = 'list';
  state.flash.category = cat;
  state.flash.items = items.map(x=>x.w);
  const title = getCategoryLabel(cat);
  const color = getCategoryColor(cat);
  const html = `
    <div class="fc-container fc-view show">
      <div class="fc-header"><h3 style="border-left:4px solid ${color};padding-left:8px;">${title}</h3><div class="fc-actions"><button class="fc-btn" data-action="fc-quiz-all">Quiz Mode</button><button class="fc-btn alt" data-action="fc-card-all">Flashcard Mode</button><button class="back" data-action="fc-back">Back</button></div></div>
      <div class="fc-list">
        ${items.map(x=>`
          <div class="fc-item" data-word="${x.w.id}"><div>${x.w.native} → ${x.w.target}</div></div>
        `).join('')}
      </div>
    </div>
  `;
  flashBody.innerHTML = html;
};

const shuffle = (arr) => { for (let i=arr.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [arr[i],arr[j]]=[arr[j],arr[i]]; } return arr; };

const startQuiz = (cat, wordId) => {
  const items = state.flash.items.length? state.flash.items : groupWords(state.flash.selectedBookId)[cat].map(x=>x.w);
  let idx = items.findIndex(w=>w.id===wordId);
  if (idx<0) idx = 0;
  state.flash.view='quiz';
  state.flash.category=cat;
  state.flash.items=items;
  state.flash.idx=idx;
  const w = items[idx];
  const allTargets = getWordsForBookId(state.flash.selectedBookId || getSelectedWordBookId()).map(z=>z.target);
  const decoys = shuffle(allTargets.filter(t=>t!==w.target)).slice(0,3);
  const choices = shuffle([w.target, ...decoys]);
  state.flash.choices = choices;
  state.flash.correctIndex = choices.indexOf(w.target);
  renderQuizView();
};

const renderQuizView = () => {
  const w = state.flash.items[state.flash.idx];
  const backAction = state.flash.category ? 'fc-list' : 'fc-back-to-sorts';
  const html = `
    <div class="fc-container fc-view show">
      <div class="fc-header"><h3>Quiz Mode</h3><button class="back" data-action="${backAction}">Back</button></div>
      <div class="fc-quiz">
        <div><strong>${w.native}</strong></div>
        <div class="fc-choices">
          ${state.flash.choices.map((c,i)=>`<div class="fc-choice" data-choice="${i}">${c}</div>`).join('')}
        </div>
        <div class="fc-actions">
          <button class="fc-btn" data-action="fc-next">Next</button>
        </div>
      </div>
    </div>
  `;
  flashBody.innerHTML = html;
};

const startCardMode = (cat, wordId) => {
  const items = state.flash.items.length? state.flash.items : groupWords(state.flash.selectedBookId)[cat].map(x=>x.w);
  let idx = items.findIndex(w=>w.id===wordId);
  if (idx<0) idx = 0;
  state.flash.view='cards';
  state.flash.category=cat;
  state.flash.items=items;
  state.flash.idx=idx;
  state.flash.flipped=false;
  renderCardView();
};

const renderCardView = () => {
  const w = state.flash.items[state.flash.idx];
  const backAction = state.flash.category ? 'fc-list' : 'fc-back-to-sorts';
  const html = `
    <div class="fc-container fc-view show">
      <div class="fc-header"><h3>Flashcard Mode</h3><button class="back" data-action="${backAction}">Back</button></div>
      <div class="fc-card" data-action="fc-flip" style="cursor:pointer;">
        <div class="fc-card-inner ${state.flash.flipped?'flip':''}">
          <div class="fc-card-face front"><div><strong>${w.native}</strong></div></div>
          <div class="fc-card-face back"><div>${w.target}</div></div>
        </div>
      </div>
      <div class="fc-card-controls">
        <button class="fc-btn" data-action="fc-prev">&#8592;</button>
        <span style="color:#94a3b8;font-size:13px;">${state.flash.idx+1} / ${state.flash.items.length}</span>
        <button class="fc-btn" data-action="fc-next">&#8594;</button>
      </div>
    </div>
  `;
  flashBody.innerHTML = html;
};

startBtn.onclick = () => { home.classList.add('hidden'); if (state.mode==='shoot') { summary.classList.add('hidden'); startLevel(); } else if (state.mode==='veg') { startVegRound(); } };
pauseBtn.onclick = () => {
  if (state.mode==='shoot') {
    state.paused = !state.paused;
    updatePauseButtons();
    updatePauseMenu();
    updateInputMode();
  } else if (state.mode==='veg' && state.veg.started) {
    state.paused = !state.paused;
    updateVegPause();
  } else if (state.mode==='cheese' && state.cheese.running) {
    state.paused = !state.paused;
    if (state.paused) {
      // ポーズ開始時：経過時間を記録
      state.cheese.pausedTime = now();
    } else {
      // ポーズ解除時：startTimeを調整してタイマーを再開
      const pausedDuration = now() - state.cheese.pausedTime;
      state.cheese.startTime += pausedDuration;
    }
  }
};
restartBtn.onclick = () => { home.classList.add('hidden'); summary.classList.add('hidden'); showWordSetSelection(state.mode); };
if (summaryBackToTitleBtn) summaryBackToTitleBtn.onclick = () => { initHome(); };
summaryToggleBtn.onclick = () => { home.classList.add('hidden'); if (summary.classList.contains('hidden')) { summary.classList.remove('hidden'); state.summaryReady=false; summaryToggleBtn.textContent='Summary'; } else { summary.classList.add('hidden'); } };
const openFlashcards = () => { if (flashcards.classList.contains('hidden')) { renderFlashcardBookSelect(); flashcards.classList.remove('hidden'); } else { flashcards.classList.add('hidden'); } };
window._openFlashcards = openFlashcards;
if (flashBtn) flashBtn.onclick = openFlashcards;
homeBtn.onclick = () => { initHome(); };
if (closeSummaryBtn) closeSummaryBtn.onclick = () => { summary.classList.add('hidden'); };
closeFlashcardsBtn.onclick = () => { flashcards.classList.add('hidden'); };
helpBtn.onclick = () => {
  // 現在のゲームの遊び方だけ表示（ホームのときは Shooting を表示）
  const mode = state.mode || 'home';
  if (helpShoot) helpShoot.style.display = mode === 'shoot' || mode === 'home' ? '' : 'none';
  if (helpVeg) helpVeg.style.display = mode === 'veg' ? '' : 'none';
  if (helpCheese) helpCheese.style.display = mode === 'cheese' ? '' : 'none';
  // ガイドを開く前のポーズ状態を記録（閉じたときに元に戻すため）
  state.pausedBeforeHelp = state.mode === 'shoot' && state.running ? state.paused : undefined;
  state.pausedBeforeHelpVeg = state.mode === 'veg' && state.veg.started ? state.paused : undefined;
  state.pausedBeforeHelpCheese = state.mode === 'cheese' && state.cheese.running ? !!state.cheese.pausedTime : undefined;
  help.classList.remove('hidden');
  // 遊び方ウィンドウを開いている時はゲームを一時停止
  if (state.mode === 'shoot' && state.running) {
    state.paused = true;
    updatePauseButtons();
  } else if (state.mode === 'veg' && state.veg.started) {
    state.paused = true;
    updateVegPause();
  } else if (state.mode === 'cheese' && state.cheese.running) {
    state.paused = true;
    if (!state.cheese.pausedTime) {
      state.cheese.pausedTime = now();
    }
  }
};
closeHelpBtn.onclick = () => {
  help.classList.add('hidden');
  // ガイドを開くためにポーズした場合だけ再開（もともとポーズ中だった場合はそのまま）
  if (state.mode === 'shoot' && state.running) {
    if (!state.pausedBeforeHelp) {
      state.paused = false;
      updatePauseButtons();
    }
    state.pausedBeforeHelp = undefined;
  } else if (state.mode === 'veg' && state.veg.started) {
    if (!state.pausedBeforeHelpVeg) {
      state.paused = false;
      updateVegPause();
    }
    state.pausedBeforeHelpVeg = undefined;
  } else if (state.mode === 'cheese' && state.cheese.running) {
    if (!state.pausedBeforeHelpCheese) {
      state.paused = false;
      if (state.cheese.pausedTime) {
        const pausedDuration = now() - state.cheese.pausedTime;
        state.cheese.startTime += pausedDuration;
        state.cheese.pausedTime = null;
      }
    }
    state.pausedBeforeHelpCheese = undefined;
  }
};
// ============================================================
// 単語セット選択UI
// ============================================================
const wordSetSelectionModal = document.getElementById('wordSetSelectionModal');
const closeWordSetSelectionBtn = document.getElementById('closeWordSetSelectionBtn');
const manualWordSelectionModal = document.getElementById('manualWordSelectionModal');
const closeManualWordSelectionBtn = document.getElementById('closeManualWordSelectionBtn');
const manualWordListEl = document.getElementById('manualWordList');
const manualSelectionCount = document.getElementById('manualSelectionCount');
const startWithManualSelection = document.getElementById('startWithManualSelection');

let pendingGameMode = null;
let selectedManualWordIds = [];

const showWordSetSelection = (gameMode) => {
  pendingGameMode = gameMode;
  if (wordSetSelectionModal) wordSetSelectionModal.classList.remove('hidden');
};

if (closeWordSetSelectionBtn) {
  closeWordSetSelectionBtn.onclick = () => {
    if (wordSetSelectionModal) wordSetSelectionModal.classList.add('hidden');
    pendingGameMode = null;
  };
}

const showManualWordSelection = () => {
  if (wordSetSelectionModal) wordSetSelectionModal.classList.add('hidden');
  selectedManualWordIds = [];
  updateManualWordList();
  if (manualWordSelectionModal) manualWordSelectionModal.classList.remove('hidden');
};

if (closeManualWordSelectionBtn) {
  closeManualWordSelectionBtn.onclick = () => {
    if (manualWordSelectionModal) manualWordSelectionModal.classList.add('hidden');
    if (wordSetSelectionModal) wordSetSelectionModal.classList.remove('hidden');
  };
}

const updateManualWordList = () => {
  const words = getWordsForGame();
  if (!manualWordListEl) return;
  manualWordListEl.innerHTML = words.map(w => {
    const ws = getWordState(w.id);
    const cat = getWordCategory(ws);
    const isSelected = selectedManualWordIds.includes(w.id);
    return `
      <label style="display: flex; align-items: center; gap: 12px; padding: 10px; background: ${isSelected ? '#1e3a5f' : '#0b1225'}; border: 1px solid ${isSelected ? '#3b82f6' : '#1e293b'}; border-radius: 6px; cursor: pointer;">
        <input type="checkbox" value="${w.id}" ${isSelected ? 'checked' : ''} ${selectedManualWordIds.length >= 20 && !isSelected ? 'disabled' : ''} style="width: 18px; height: 18px; cursor: pointer;" />
        <div style="flex: 1;"><div style="font-weight: bold;">${w.native} → ${w.target}</div></div>
        <div style="background: ${getCategoryColor(cat)}; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px;">${getCategoryLabel(cat)}</div>
      </label>`;
  }).join('');
  if (manualSelectionCount) manualSelectionCount.textContent = selectedManualWordIds.length;
  manualWordListEl.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    cb.onchange = () => {
      if (cb.checked) { if (selectedManualWordIds.length < 20) selectedManualWordIds.push(cb.value); }
      else { selectedManualWordIds = selectedManualWordIds.filter(id => id !== cb.value); }
      updateManualWordList();
    };
  });
};

if (startWithManualSelection) {
  startWithManualSelection.onclick = () => {
    if (selectedManualWordIds.length === 0) { alert('少なくとも1つの単語を選択してください。'); return; }
    startGameWithWordSet('manual', selectedManualWordIds);
  };
}

document.querySelectorAll('.word-set-mode-btn').forEach(btn => {
  btn.onclick = () => {
    const mode = btn.dataset.mode;
    if (mode === 'manual') { showManualWordSelection(); return; }
    startGameWithWordSet(mode, []);
  };
});

const startGameWithWordSet = (selMode, manualIds) => {
  const words = getWordsForGame();
  const success = QuizEngine.startSession(selMode, words, manualIds);
  if (!success) { alert('出題対象の単語がありません。単語帳や選択モードを確認してください。'); return; }
  if (wordSetSelectionModal) wordSetSelectionModal.classList.add('hidden');
  if (manualWordSelectionModal) manualWordSelectionModal.classList.add('hidden');
  switch (pendingGameMode) {
    case 'shoot':
      showShooting();
      summary.classList.add('hidden');
      startLevel();
      break;
    case 'veg':
      showVegetable();
      setupVegSets();
      if (!resetVegRound()) { alert('出題対象の単語がありません。'); initHome(); break; }
      startVegCountdown();
      break;
    case 'cheese':
      showCheese();
      break;
    default: break;
  }
  pendingGameMode = null;
};

// How-to-Play → 単語セット選択モーダルを経由
if (shootHowToPlayStartBtn) {
  shootHowToPlayStartBtn.onclick = () => {
    const words = getWordsForGame();
    if (words.length < MIN_WORDS_SHOOT) {
      alert(`シューティングゲームには、選択中の単語帳に${MIN_WORDS_SHOOT}語以上の単語が必要です。\n現在${words.length}語です。`);
      return;
    }
    if (shootHowToPlay) shootHowToPlay.classList.add('hidden');
    showWordSetSelection('shoot');
  };
}
if (shootHowToPlayBackBtn) {
  shootHowToPlayBackBtn.onclick = () => {
    if (shootHowToPlay) shootHowToPlay.classList.add('hidden');
  };
}
if (vegHowToPlayStartBtn) {
  vegHowToPlayStartBtn.onclick = () => {
    const words = getWordsForGame();
    if (words.length < MIN_WORDS_VEG) {
      alert(`Vegetable Cutting Raceには、選択中の単語帳に${MIN_WORDS_VEG}語以上の単語が必要です。\n現在${words.length}語です。`);
      return;
    }
    if (vegHowToPlay) vegHowToPlay.classList.add('hidden');
    showWordSetSelection('veg');
  };
}
if (vegHowToPlayBackBtn) {
  vegHowToPlayBackBtn.onclick = () => {
    if (vegHowToPlay) vegHowToPlay.classList.add('hidden');
  };
}
if (cheeseHowToPlayStartBtn) {
  cheeseHowToPlayStartBtn.onclick = () => {
    const words = getWordsForGame();
    if (words.length < MIN_WORDS_CHEESE) {
      alert(`Hungry Mouseには、選択中の単語帳に${MIN_WORDS_CHEESE}語以上の単語が必要です。\n現在${words.length}語です。`);
      return;
    }
    if (cheeseHowToPlay) cheeseHowToPlay.classList.add('hidden');
    showWordSetSelection('cheese');
  };
}
if (cheeseHowToPlayBackBtn) {
  cheeseHowToPlayBackBtn.onclick = () => {
    if (cheeseHowToPlay) cheeseHowToPlay.classList.add('hidden');
  };
}

// マイ単語帳（単語追加画面）
const renderWordBookModalTargetSelect = () => {
  if (!wordBookModalTargetSelect) return;
  const data = loadCustomWordBooks();
  wordBookModalTargetSelect.innerHTML = '';
  data.books.forEach((b) => {
    const opt = document.createElement('option');
    opt.value = b.id;
    opt.textContent = b.name;
    wordBookModalTargetSelect.appendChild(opt);
  });
  const selectedId = getSelectedWordBookId();
  if (data.books.some((b) => b.id === selectedId)) wordBookModalTargetSelect.value = selectedId;
  else if (data.books.length > 0) wordBookModalTargetSelect.value = data.books[0].id;
};
const renderWordBookList = () => {
  const bookId = wordBookModalTargetSelect ? wordBookModalTargetSelect.value : getSelectedWordBookId();
  const words = bookId && bookId !== 'default' ? getWordsForBook(bookId) : [];
  if (!wordBookList) return;
  wordBookList.innerHTML = '';
  words.forEach((w) => {
    const li = document.createElement('li');
    li.style.cssText = 'display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 8px 10px; background: #0b1225; border: 1px solid #1e293b; border-radius: 8px;';
    li.innerHTML = `<span>${escapeHtml(w.native)} ↔ ${escapeHtml(w.target)}</span><button type="button" class="wordBookDeleteBtn" data-word-id="${escapeHtml(w.id)}" style="background: #ef4444; color: white; border: none; padding: 4px 10px; border-radius: 6px; cursor: pointer; font-size: 12px;">削除</button>`;
    wordBookList.appendChild(li);
  });
  if (wordBookEmpty) wordBookEmpty.style.display = words.length === 0 ? '' : 'none';
};
const escapeHtml = (s) => {
  const div = document.createElement('div');
  div.textContent = s;
  return div.innerHTML;
};
if (openWordBookBtn) {
  openWordBookBtn.onclick = () => {
    if (wordBookModal) wordBookModal.classList.remove('hidden');
    renderWordBookModalTargetSelect();
    renderWordBookList();
  };
}
if (wordBookModalTargetSelect) {
  wordBookModalTargetSelect.addEventListener('change', () => renderWordBookList());
}
if (closeWordBookBtn) {
  closeWordBookBtn.onclick = () => {
    if (wordBookModal) wordBookModal.classList.add('hidden');
  };
}
if (wordBookAddBtn && wordBookNativeInput && wordBookTargetInput) {
  wordBookAddBtn.onclick = () => {
    const native = (wordBookNativeInput.value || '').trim();
    const target = (wordBookTargetInput.value || '').trim();
    if (!native || !target) return;
    const bookId = wordBookModalTargetSelect ? wordBookModalTargetSelect.value : getSelectedWordBookId();
    if (!bookId || bookId === 'default') return;
    const words = getWordsForBook(bookId);
    const id = 'custom-' + Date.now() + '-' + Math.random().toString(36).slice(2);
    words.push({ id, native, target });
    saveWordsForBook(bookId, words);
    renderWordBookList();
    wordBookNativeInput.value = '';
    wordBookTargetInput.value = '';
    wordBookNativeInput.focus();
  };
}
if (wordBookList) {
  wordBookList.addEventListener('click', (e) => {
    const btn = e.target.closest('.wordBookDeleteBtn');
    if (!btn) return;
    const id = btn.dataset.wordId;
    if (!id) return;
    const bookId = wordBookModalTargetSelect ? wordBookModalTargetSelect.value : getSelectedWordBookId();
    if (!bookId || bookId === 'default') return;
    const words = getWordsForBook(bookId).filter((w) => w.id !== id);
    saveWordsForBook(bookId, words);
    renderWordBookList();
  });
}
const rowStyle = 'display: flex; align-items: center; justify-content: space-between; padding: 6px 8px; cursor: pointer; border-bottom: 1px solid #334155;';
const defaultWordCount = () => levels.flatMap((l) => l.words).length;
const renderWordBookSourceRows = () => {
  if (!wordBookSourceRows) return;
  const data = loadCustomWordBooks();
  const selectedId = data.selectedId || 'default';
  wordBookSourceRows.innerHTML = '';
  const defaultCount = defaultWordCount();
  const defaultRow = document.createElement('div');
  defaultRow.className = 'wordBookSourceRow';
  defaultRow.dataset.source = 'default';
  defaultRow.style.cssText = rowStyle;
  const defaultSelected = selectedId === 'default';
  defaultRow.innerHTML = `<span style="display: flex; align-items: center; flex-wrap: wrap; gap: 4px; font-size: 13px; color: #e6edf3;">${defaultSelected ? '<span class="wordBookSourceSelectedBadge">選択中</span>' : ''}デフォルトの単語帳<span style="font-size: 11px; color: #94a3b8;">(${defaultCount}語)</span></span><button type="button" class="wordBookSourceMenuBtn" data-source="default" style="background: none; border: none; color: #94a3b8; cursor: pointer; padding: 2px 4px; font-size: 16px; line-height: 1;" title="中身を見る">⋮</button>`;
  defaultRow.classList.toggle('selected', defaultSelected);
  wordBookSourceRows.appendChild(defaultRow);
  data.books.forEach((book) => {
    const row = document.createElement('div');
    row.className = 'wordBookSourceRow';
    row.dataset.source = book.id;
    row.style.cssText = rowStyle;
    const isSelected = selectedId === book.id;
    const count = (book.words || []).length;
    row.innerHTML = `<span style="display: flex; align-items: center; flex-wrap: wrap; gap: 4px; font-size: 13px; color: #e6edf3;">${isSelected ? '<span class="wordBookSourceSelectedBadge">選択中</span>' : ''}${escapeHtml(book.name)}<span style="font-size: 11px; color: #94a3b8;">(${count}語)</span></span><button type="button" class="wordBookSourceMenuBtn" data-source="${escapeHtml(book.id)}" style="background: none; border: none; color: #94a3b8; cursor: pointer; padding: 2px 4px; font-size: 16px; line-height: 1;" title="中身を見る">⋮</button>`;
    row.classList.toggle('selected', isSelected);
    wordBookSourceRows.appendChild(row);
  });
};
const renderWordBookContentList = (bookId, words) => {
  if (!wordBookContentList) return;
  wordBookContentList.innerHTML = '';
  const isCustom = bookId !== 'default';
  words.forEach((w) => {
    const li = document.createElement('li');
    li.dataset.wordId = w.id;
    li.style.cssText = 'display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 8px 10px; background: #0b1225; border: 1px solid #1e293b; border-radius: 8px;';
    const ws = getWordState(w.id);
    const cat = getWordCategory(ws);
    const badge = `<span style="background:${getCategoryColor(cat)};color:white;padding:2px 8px;border-radius:4px;font-size:11px;white-space:nowrap;">${getCategoryLabel(cat)}</span>`;
    if (isCustom) {
      li.innerHTML = `<span style="display:flex;align-items:center;gap:8px;flex:1;min-width:0;">${escapeHtml(w.native)} ↔ ${escapeHtml(w.target)} ${badge}</span><button type="button" class="wordBookContentWordMenuBtn" data-word-id="${escapeHtml(w.id)}" style="background: none; border: none; color: #94a3b8; cursor: pointer; padding: 2px 4px; font-size: 16px; line-height: 1;" title="編集・削除">⋮</button>`;
    } else {
      li.innerHTML = `<span style="display:flex;align-items:center;gap:8px;">${escapeHtml(w.native)} ↔ ${escapeHtml(w.target)} ${badge}</span>`;
    }
    wordBookContentList.appendChild(li);
  });
};
const openWordContentEditForm = (li, bookId, wordId) => {
  const words = getWordsForBook(bookId);
  const word = words.find((w) => w.id === wordId);
  if (!word) return;
  li.innerHTML = `<div style="display: flex; flex-direction: column; gap: 6px; width: 100%;"><input type="text" class="wordBookContentEditNative" value="${escapeHtml(word.native)}" style="padding: 6px 8px; border-radius: 6px; border: 1px solid #1e293b; background: #1e293b; color: #e6edf3;" placeholder="日本語" /><input type="text" class="wordBookContentEditTarget" value="${escapeHtml(word.target)}" style="padding: 6px 8px; border-radius: 6px; border: 1px solid #1e293b; background: #1e293b; color: #e6edf3;" placeholder="英語" /><div style="display: flex; gap: 6px; flex-wrap: wrap;"><button type="button" class="wordBookContentEditSave" style="background: #22c55e; color: white; border: none; padding: 4px 10px; border-radius: 6px; cursor: pointer; font-size: 11px;">保存</button><button type="button" class="wordBookContentEditCancel" style="background: #64748b; color: white; border: none; padding: 4px 10px; border-radius: 6px; cursor: pointer; font-size: 11px;">キャンセル</button><button type="button" class="wordBookContentEditDelete" style="background: #ef4444; color: white; border: none; padding: 4px 10px; border-radius: 6px; cursor: pointer; font-size: 11px;">削除</button></div></div>`;
  li.dataset.wordId = wordId;
};
if (wordBookContentList) {
  wordBookContentList.addEventListener('click', (e) => {
    const bookId = wordBookContentModal && wordBookContentModal.dataset.currentBookId;
    if (!bookId || bookId === 'default') return;
    const menuBtn = e.target.closest('.wordBookContentWordMenuBtn');
    if (menuBtn) {
      e.preventDefault();
      const wordId = menuBtn.dataset.wordId;
      const li = menuBtn.closest('li');
      openWordContentEditForm(li, bookId, wordId);
      return;
    }
    const saveBtn = e.target.closest('.wordBookContentEditSave');
    if (saveBtn) {
      e.preventDefault();
      const li = saveBtn.closest('li');
      const wordId = li.dataset.wordId;
      const nativeInput = li.querySelector('.wordBookContentEditNative');
      const targetInput = li.querySelector('.wordBookContentEditTarget');
      const native = (nativeInput && nativeInput.value || '').trim();
      const target = (targetInput && targetInput.value || '').trim();
      if (!native || !target) return;
      const words = getWordsForBook(bookId);
      const word = words.find((w) => w.id === wordId);
      if (word) {
        word.native = native;
        word.target = target;
        saveWordsForBook(bookId, words);
      }
      renderWordBookContentList(bookId, getWordsForBook(bookId));
      if (wordBookSourceRows) renderWordBookSourceRows();
      return;
    }
    const cancelBtn = e.target.closest('.wordBookContentEditCancel');
    if (cancelBtn) {
      e.preventDefault();
      renderWordBookContentList(bookId, getWordsForBook(bookId));
      return;
    }
    const editDeleteBtn = e.target.closest('.wordBookContentEditDelete');
    if (editDeleteBtn) {
      e.preventDefault();
      const li = editDeleteBtn.closest('li');
      const wordId = li.dataset.wordId;
      const words = getWordsForBook(bookId).filter((w) => w.id !== wordId);
      saveWordsForBook(bookId, words);
      renderWordBookContentList(bookId, words);
      if (wordBookSourceRows) renderWordBookSourceRows();
      return;
    }
  });
}
if (wordBookSourceRows) {
  wordBookSourceRows.addEventListener('click', (e) => {
    const btn = e.target.closest('.wordBookSourceMenuBtn');
    if (btn) {
      e.preventDefault();
      e.stopPropagation();
      const source = btn.dataset.source;
      if (!wordBookContentModal || !wordBookContentTitle || !wordBookContentList) return;
      if (wordBookContentModal) wordBookContentModal.dataset.currentBookId = source;
      const data = loadCustomWordBooks();
      const words = source === 'default' ? levels.flatMap((l) => l.words) : (data.books.find((b) => b.id === source) || { words: [] }).words;
      const title = source === 'default' ? 'デフォルトの単語帳の内容' : (data.books.find((b) => b.id === source) || {}).name + 'の内容';
      wordBookContentTitle.textContent = title;
      renderWordBookContentList(source, words);
      if (wordBookContentDeleteArea) wordBookContentDeleteArea.style.display = source === 'default' ? 'none' : '';
      if (wordBookContentRenameArea) wordBookContentRenameArea.style.display = source === 'default' ? 'none' : 'flex';
      if (wordBookContentRenameForm) wordBookContentRenameForm.classList.add('hidden');
      if (wordBookContentConfirm) wordBookContentConfirm.classList.add('hidden');
      wordBookContentModal.classList.remove('hidden');
      return;
    }
    const row = e.target.closest('.wordBookSourceRow');
    if (row && row.dataset.source) {
      setSelectedWordBookId(row.dataset.source);
      renderWordBookSourceRows();
      if (typeof closeWordBookSelectDropdown === 'function') closeWordBookSelectDropdown();
    }
  });
}
if (wordBookCreateNewBtn) {
  wordBookCreateNewBtn.addEventListener('click', () => {
    if (typeof closeWordBookSelectDropdown === 'function') closeWordBookSelectDropdown();
    if (wordBookCreateModal) wordBookCreateModal.classList.remove('hidden');
    if (wordBookCreateNameInput) { wordBookCreateNameInput.value = ''; wordBookCreateNameInput.focus(); }
  });
}
if (closeWordBookCreateBtn && wordBookCreateModal) {
  closeWordBookCreateBtn.onclick = () => wordBookCreateModal.classList.add('hidden');
}
if (wordBookCreateCancelBtn && wordBookCreateModal) {
  wordBookCreateCancelBtn.onclick = () => wordBookCreateModal.classList.add('hidden');
}
if (wordBookCreateConfirmBtn && wordBookCreateNameInput && wordBookCreateModal) {
  wordBookCreateConfirmBtn.onclick = () => {
    const name = wordBookCreateNameInput.value.trim() || '新しい単語帳';
    addNewWordBook(name);
    wordBookCreateModal.classList.add('hidden');
    wordBookCreateNameInput.value = '';
    renderWordBookSourceRows();
  };
}
ensureDebugWordBook();
renderWordBookSourceRows();

// 単語帳セレクト：ドロップダウンをクリックで開閉
if (wordBookSelectToggle && wordBookSourceList) {
  wordBookSelectToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    wordBookSourceList.classList.toggle('word-book-list-hidden');
    const chevron = document.getElementById('wordBookSelectChevron');
    if (chevron) chevron.style.transform = wordBookSourceList.classList.contains('word-book-list-hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
  });
}
if (wordBookSelectDropdown && wordBookSourceList) {
  document.addEventListener('click', (e) => {
    if (!wordBookSelectDropdown.contains(e.target)) {
      wordBookSourceList.classList.add('word-book-list-hidden');
      const chevron = document.getElementById('wordBookSelectChevron');
      if (chevron) chevron.style.transform = 'rotate(0deg)';
    }
  });
}
// 単語帳を選択したらドロップダウンを閉じる（wordBookSourceRows の click 内で閉じる）
const closeWordBookSelectDropdown = () => {
  if (wordBookSourceList) wordBookSourceList.classList.add('word-book-list-hidden');
  const chevron = document.getElementById('wordBookSelectChevron');
  if (chevron) chevron.style.transform = 'rotate(0deg)';
};

if (closeWordBookContentBtn && wordBookContentModal) {
  closeWordBookContentBtn.onclick = () => {
    wordBookContentModal.classList.add('hidden');
    if (wordBookContentConfirm) wordBookContentConfirm.classList.add('hidden');
    if (wordBookContentRenameForm) wordBookContentRenameForm.classList.add('hidden');
  };
}
if (wordBookContentRenameBtn && wordBookContentRenameForm && wordBookContentRenameInput) {
  wordBookContentRenameBtn.onclick = () => {
    const bookId = wordBookContentModal.dataset.currentBookId;
    if (!bookId || bookId === 'default') return;
    const data = loadCustomWordBooks();
    const book = data.books.find((b) => b.id === bookId);
    if (book) {
      wordBookContentRenameInput.value = book.name;
      wordBookContentRenameForm.classList.remove('hidden');
      wordBookContentRenameInput.focus();
    }
  };
}
if (wordBookContentAddWordBtn && wordBookContentModal && wordBookModal) {
  wordBookContentAddWordBtn.onclick = () => {
    const bookId = wordBookContentModal.dataset.currentBookId;
    if (!bookId || bookId === 'default') return;
    setSelectedWordBookId(bookId);
    wordBookContentModal.classList.add('hidden');
    wordBookModal.classList.remove('hidden');
    renderWordBookModalTargetSelect();
    renderWordBookList();
  };
}
if (wordBookContentRenameCancel && wordBookContentRenameForm) {
  wordBookContentRenameCancel.onclick = () => wordBookContentRenameForm.classList.add('hidden');
}
if (wordBookContentRenameSave && wordBookContentRenameInput && wordBookContentModal) {
  wordBookContentRenameSave.onclick = () => {
    const bookId = wordBookContentModal.dataset.currentBookId;
    if (!bookId || bookId === 'default') return;
    const newName = (wordBookContentRenameInput.value || '').trim();
    if (!newName) return;
    const data = loadCustomWordBooks();
    const book = data.books.find((b) => b.id === bookId);
    if (book) {
      book.name = newName;
      saveCustomWordBooks(data);
      renderWordBookSourceRows();
      if (wordBookContentTitle) wordBookContentTitle.textContent = newName + 'の内容';
      wordBookContentRenameForm.classList.add('hidden');
    }
  };
}
if (wordBookContentDeleteBtn && wordBookContentConfirm) {
  wordBookContentDeleteBtn.onclick = () => wordBookContentConfirm.classList.remove('hidden');
}
if (wordBookContentConfirmCancel && wordBookContentConfirm) {
  wordBookContentConfirmCancel.onclick = () => wordBookContentConfirm.classList.add('hidden');
}
if (wordBookContentConfirmDelete && wordBookContentModal) {
  wordBookContentConfirmDelete.onclick = () => {
    const bookId = wordBookContentModal.dataset.currentBookId;
    if (!bookId || bookId === 'default') return;
    const data = loadCustomWordBooks();
    data.books = data.books.filter((b) => b.id !== bookId);
    if (data.selectedId === bookId) data.selectedId = data.books.length > 0 ? data.books[0].id : 'default';
    saveCustomWordBooks(data);
    wordBookContentConfirm.classList.add('hidden');
    wordBookContentModal.classList.add('hidden');
    renderWordBookSourceRows();
  };
}

debugKillEnemyBtn.onclick = () => {
  if (state.mode === 'shoot' && state.running && !state.paused && state.currentWord) {
    const enemy = state.enemies.find(e => e.id === state.currentWord.id && !e.dead);
    if (enemy) {
      succeedEnemy(enemy, false);
    }
  }
};
debugSpawnEnemyBtn.onclick = () => {
  if (state.mode === 'shoot' && state.running && !state.paused) {
    const maxEnemies = state.inputMode === 'choice' ? 1 : 3;
    if (state.enemies.length < maxEnemies) {
      spawnEnemy();
      state.spawnTimer = now() + state.spawnInterval;
    }
  }
};

const initHome = () => {
  home.classList.remove('hidden');
  if (wordBookSelectWrap) wordBookSelectWrap.classList.remove('hidden');
  if (startBtn) startBtn.style.display = '';
  if (pauseBtn) pauseBtn.style.display = '';
  document.getElementById('ui').classList.add('hidden');
  document.getElementById('game').classList.add('hidden');
  veg.classList.add('hidden');
  if (minecartEl) minecartEl.classList.add('hidden');
  if (minecartGameOver) minecartGameOver.classList.add('hidden');
  if (minecartPause) minecartPause.classList.add('hidden');
  if (state.minecart) state.minecart.paused = false;
  summary.classList.add('hidden');
  flashcards.classList.add('hidden');
  stopDangerGauge();
  state.running = false;
  state.paused = false;
  state.cheese.running = false;
  state.cheese.pausedTime = null;
  state.cheese.pausedForMiss = false;
  state.cheese.missedAnswers = null;
  state.cheese.feedbackUntil = 0;
  state.cheese.lastResumeAt = 0;
  state.mode='home';
  if (pauseMenu) pauseMenu.classList.add('hidden');
  if (uiEl) uiEl.style.zIndex = '';
  if (vegPause) vegPause.classList.add('hidden');
  answerInput.classList.remove('bottom-input');
  // ホーム画面ではテキスト入力フィールドを非表示
  answerInput.style.display = 'none';
  document.body.classList.remove('veg-mode');
  // デバッグボタンを非表示
  if (debugKillEnemyBtn) debugKillEnemyBtn.style.display = 'none';
  if (debugSpawnEnemyBtn) debugSpawnEnemyBtn.style.display = 'none';
  updatePauseButtons(); // ボタンの表示を更新
};
const showShooting = () => {
  home.classList.add('hidden');
  if (wordBookSelectWrap) wordBookSelectWrap.classList.add('hidden');
  veg.classList.add('hidden');
  document.getElementById('ui').classList.remove('hidden');
  document.getElementById('game').classList.remove('hidden');
  const hud = document.querySelector('.hud'); if (hud) hud.classList.remove('hidden');
  const ctr = document.querySelector('.controls'); if (ctr) ctr.classList.remove('hidden');
  if (hudShootStatsEl) hudShootStatsEl.classList.remove('hidden');
  if (hudHealthEl) hudHealthEl.style.display = 'none';
  if (hudScoreEl) hudScoreEl.style.display = 'none';
  if (hudWordbookEl) hudWordbookEl.style.display = '';
  if (hudCheeseStatsEl) hudCheeseStatsEl.classList.add('hidden');
  state.mode='shoot';
  state.paused = false;
  if (pauseMenu) pauseMenu.classList.add('hidden');
  // シューティングゲームでは Start / Pause ボタンは非表示（ESC でポーズ）
  if (startBtn) startBtn.style.display = 'none';
  if (pauseBtn) pauseBtn.style.display = 'none';
  answerInput.classList.remove('bottom-input');
  // Shooting Gameではテキスト入力フィールドを非表示
  answerInput.style.display = 'none';
  document.body.classList.remove('veg-mode');
  // デバッグボタンを表示（Shooting Game専用）
  if (debugKillEnemyBtn) debugKillEnemyBtn.style.display = '';
  if (debugSpawnEnemyBtn) debugSpawnEnemyBtn.style.display = '';
  resizeCanvas();
};
const showVegetable = () => {
  home.classList.add('hidden');
  if (wordBookSelectWrap) wordBookSelectWrap.classList.add('hidden');
  document.getElementById('ui').classList.remove('hidden');
  const hud = document.querySelector('.hud'); if (hud) hud.classList.add('hidden');
  const ctr = document.querySelector('.controls'); if (ctr) ctr.classList.remove('hidden');
  state.paused = false;
  if (pauseMenu) pauseMenu.classList.add('hidden');
  if (startBtn) startBtn.style.display = '';
  if (pauseBtn) pauseBtn.style.display = '';
  document.getElementById('game').classList.add('hidden');
  veg.classList.remove('hidden');
  state.mode='veg';
  answerInput.classList.add('bottom-input');
  // Vegetable Cutting Raceではテキスト入力フィールドを表示
  answerInput.style.display = '';
  document.body.classList.add('veg-mode');
  // デバッグボタンを非表示（Vegetable Cutting Raceでは不要）
  if (debugKillEnemyBtn) debugKillEnemyBtn.style.display = 'none';
  if (debugSpawnEnemyBtn) debugSpawnEnemyBtn.style.display = 'none';
};
const showCheese = () => {
  home.classList.add('hidden');
  if (wordBookSelectWrap) wordBookSelectWrap.classList.add('hidden');
  document.getElementById('ui').classList.remove('hidden');
  document.getElementById('game').classList.remove('hidden');
  const hud = document.querySelector('.hud'); if (hud) hud.classList.remove('hidden');
  const ctr = document.querySelector('.controls'); if (ctr) ctr.classList.remove('hidden');
  if (hudShootStatsEl) hudShootStatsEl.classList.add('hidden');
  if (hudHealthEl) hudHealthEl.style.display = 'none';
  if (hudWordbookEl) hudWordbookEl.style.display = 'none';
  if (hudScoreEl) hudScoreEl.style.display = '';
  if (hudCheeseStatsEl) hudCheeseStatsEl.classList.remove('hidden');
  state.paused = false;
  state.cheese.pausedTime = null;
  if (pauseMenu) pauseMenu.classList.add('hidden');
  if (startBtn) startBtn.style.display = '';
  if (pauseBtn) pauseBtn.style.display = '';
  state.mode='cheese';
  answerInput.classList.add('bottom-input');
  // Cheese Gameではテキスト入力フィールドを表示
  answerInput.style.display = '';
  // デバッグボタンを非表示（Cheese Gameでは不要）
  if (debugKillEnemyBtn) debugKillEnemyBtn.style.display = 'none';
  if (debugSpawnEnemyBtn) debugSpawnEnemyBtn.style.display = 'none';
  resizeCanvas();
  canvas.style.border = 'none';
  startCheese();
  answerInput.value='';
  answerInput.focus();
};

const showMinecart = () => {
  home.classList.add('hidden');
  if (wordBookSelectWrap) wordBookSelectWrap.classList.add('hidden');
  document.getElementById('ui').classList.add('hidden');
  document.getElementById('game').classList.add('hidden');
  veg.classList.add('hidden');
  state.mode = 'minecart';
  state.minecart.questionIndex = 0;
  state.minecart.correctCount = 0;
  state.minecart.paused = false;
  if (minecartGameOver) minecartGameOver.classList.add('hidden');
  if (minecartPause) minecartPause.classList.add('hidden');
   if (minecartResult) minecartResult.classList.add('hidden');
  if (minecartEl) minecartEl.classList.remove('hidden');
  renderMinecartQuestion();
};

const renderMinecartQuestion = () => {
  const n = state.minecart.questionIndex + 1;
  if (minecartQuestionText) minecartQuestionText.textContent = 'テスト問題';
  if (minecartQuestionNum) minecartQuestionNum.textContent = `第 ${n} 問`;
  const choices = minecartChoices ? minecartChoices.querySelectorAll('.minecart-choice') : [];
  choices.forEach((btn) => {
    btn.disabled = false;
    btn.classList.remove('minecart-correct', 'minecart-wrong');
  });
};

/** 台形上辺の左右端（scene幅の%） */
const MINECART_TOP_EDGE_LEFT = 49.5;
const MINECART_TOP_EDGE_RIGHT = 50.5;
/** 選択肢に応じた発車位置（scene幅の%） */
const getMinecartStartLeftPercent = (choice) => {
  if (choice === 'A') {
    // 一番左の選択肢 → 画面左端から少し余裕を持たせた位置
    return 10;
  } else if (choice === 'B') {
    // 左から2番目 → 左から1/3
    return 33.33;
  } else if (choice === 'C') {
    // 左から3番目 → 左から2/3
    return 66.67;
  } else if (choice === 'D') {
    // 一番右の選択肢 → 画面右端から少し余裕を持たせた位置
    return 90;
  }
  // フォールバック（中央）
  return 50;
};
/** 選択肢に応じた目標位置（台形上辺の位置、scene幅の%） */
const getMinecartTargetLeftPercent = (choice) => {
  const center = (MINECART_TOP_EDGE_LEFT + MINECART_TOP_EDGE_RIGHT) / 2;
  if (choice === 'A') {
    // A → 右寄り
    return MINECART_TOP_EDGE_LEFT + 8.1;
  } else if (choice === 'D') {
    // D → 左寄り
    return MINECART_TOP_EDGE_RIGHT - 8.1;
  } else {
    // B, C → 中心
    return center;
  }
};

const resetMinecartCartPosition = () => {
  if (!minecartCart) return;
  minecartCart.classList.remove('minecart-cart-rolling');
  minecartCart.style.left = '';
  minecartCart.style.bottom = '';
  minecartCart.style.transform = '';
  minecartCart.style.transition = '';
};

const onMinecartChoice = (choice) => {
  if (state.minecart.paused) return;
  const correctChoice = 'A';
  const isCorrect = choice === correctChoice;
  const choices = minecartChoices ? minecartChoices.querySelectorAll('.minecart-choice') : [];
  choices.forEach((btn) => { btn.disabled = true; });
  choices.forEach((btn) => {
    btn.classList.remove('minecart-correct', 'minecart-wrong');
    if (btn.dataset.choice === choice) btn.classList.add(isCorrect ? 'minecart-correct' : 'minecart-wrong');
  });

  const doneAfterRoll = () => {
    resetMinecartCartPosition();
    // 正解数・問題番号の更新
    if (isCorrect) {
      state.minecart.correctCount++;
    }
    state.minecart.questionIndex++;

    // 正誤判定ページの表示
    if (minecartResult && minecartResultMessage) {
      minecartResultMessage.textContent = isCorrect ? '正解です！' : '不正解です。';
      minecartResult.classList.remove('hidden');
    } else {
      // フォールバック（結果画面がない場合はそのまま次の問題へ）
      renderMinecartQuestion();
    }
  };

  if (!minecartCart) {
    doneAfterRoll();
    return;
  }
  // まず発車位置に即座に移動（transitionなし）
  const startLeft = getMinecartStartLeftPercent(choice);
  minecartCart.style.transition = 'none';
  minecartCart.style.left = `${startLeft}%`;
  minecartCart.style.bottom = '70px';
  minecartCart.style.transform = 'translateX(-50%) scale(1)';
  
  // 次のフレームでアニメーション開始
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const targetLeft = getMinecartTargetLeftPercent(choice);
      minecartCart.classList.add('minecart-cart-rolling');
      minecartCart.style.transition = '';
      minecartCart.style.left = `${targetLeft}%`;
      minecartCart.style.bottom = '360px';
      minecartCart.style.transform = 'translateX(-50%) scale(0.2)';

      const onEnd = () => {
        minecartCart.removeEventListener('transitionend', onEnd);
        doneAfterRoll();
      };
      minecartCart.addEventListener('transitionend', onEnd);
    });
  });
};

if (minecartChoices) {
  minecartChoices.addEventListener('click', (ev) => {
    const btn = ev.target.closest('.minecart-choice');
    if (!btn || state.mode !== 'minecart') return;
    const choice = btn.dataset.choice;
    if (!choice) return;
    onMinecartChoice(choice);
  });
}
if (minecartGameOverBackBtn) {
  minecartGameOverBackBtn.onclick = () => { initHome(); };
}

// Minecart 判定ページの「次へ」ボタン
if (minecartResultNextBtn) {
  minecartResultNextBtn.onclick = () => {
    if (minecartResult) minecartResult.classList.add('hidden');
    // 次の問題を表示
    renderMinecartQuestion();
  };
}

const allWordsFlat = () => getWordsForGame();
const setupVegSets = () => {
  state.veg.currentSetWords = [];
  state.veg.setIndex = 0;
  state.veg.round = 1;
  state.veg.difficulty = 'easy';
  state.veg.sessionComplete = false;
  state.veg.gauge = 0;
  state.veg.gaugeRunning = false;
  state.veg.gaugePaused = false;
  state.veg.gaugeTimerId = null;
  state.veg.totalCleared = 0;
  state.veg.totalAttempted = 0;
  state.veg.gameOver = false;
  state.veg.allSessionWords = []; // 全セットの単語を蓄積（最終結果用）
};
const pickPaddingWords = (needed, excludeIds) => {
  const all = state.veg.allSessionWords;
  if (all.length === 0) return [];
  // 単語IDごとのミス回数をカウント
  const missCount = {};
  const wordData = {};
  for (const w of all) {
    if (!missCount[w.id]) missCount[w.id] = 0;
    if (!w.cut) missCount[w.id]++;
    wordData[w.id] = { id: w.id, native: w.native, target: w.target };
  }
  // ミス回数降順でソート（同数なら順序不問）
  const sorted = Object.keys(wordData)
    .filter(id => !excludeIds.has(id))
    .sort((a, b) => (missCount[b] || 0) - (missCount[a] || 0));
  // 重複なし候補から取る。足りなければ除外IDも含めて取る
  const result = [];
  for (let i = 0; result.length < needed && i < sorted.length; i++) {
    result.push(wordData[sorted[i]]);
  }
  if (result.length < needed) {
    const allSorted = Object.keys(wordData)
      .sort((a, b) => (missCount[b] || 0) - (missCount[a] || 0));
    for (let i = 0; result.length < needed && i < allSorted.length; i++) {
      result.push(wordData[allSorted[i]]);
    }
  }
  return result;
};
const buildNewSet = () => {
  const pick = [];
  for (let i = 0; i < 5; i++) {
    const w = QuizEngine.getNextWord();
    if (!w) break;
    pick.push(w);
    QuizEngine.advance();
  }
  // 1〜4語の場合、セッション中に間違えた単語でパディングして5語に揃える
  if (pick.length > 0 && pick.length < 5) {
    const existingIds = new Set(pick.map(w => w.id));
    const padding = pickPaddingWords(5 - pick.length, existingIds);
    for (const pw of padding) pick.push(pw);
  }
  return pick;
};
const maskWord = (t, hard=false) => {
  const holes = hard ? Math.max(3, Math.floor(t.length/2)) : Math.max(2, Math.floor(t.length/3));
  let mask = t.split('');
  for (let i=0;i<holes;i++) { const idx = Math.floor(rand()*t.length); mask[idx] = '_'; }
  return mask.join('');
};
const resetVegRound = () => {
  state.veg.activeWords = [];
  state.veg.currentIndex = 0;
  state.veg.started = false;
  state.veg.currentSetWords = buildNewSet();
  // セッション完了チェック（単語が取得できなかった場合）
  if (state.veg.currentSetWords.length === 0) {
    state.veg.sessionComplete = true;
    return false;
  }
  state.veg.sessionComplete = false;
  const names = ['Carrot','Tomato','Potato','Cabbage','Onion','Pepper','Radish','Broccoli'];
  vegNameEl.textContent = names[state.veg.setIndex % names.length];
  vegRoundEl.textContent = state.veg.round;
  vegDiffEl.textContent = '—';
  vegBoard.innerHTML = '';
  for (const w of state.veg.currentSetWords) {
    const entry = { id: w.id, native: w.native, target: w.target, cut: false };
    state.veg.activeWords.push(entry);
    state.veg.allSessionWords.push(entry);
  }
  state.veg.easySetCounter++;
  vegCarrot.classList.add('hidden');
  return true;
};
const renderCurrentVegCard = () => {
  const idx = state.veg.currentIndex;
  const w = state.veg.activeWords[idx];
  vegBoard.innerHTML = '';
  if (!w) return;
  const display = `${w.native}`;
  const div = document.createElement('div');
  div.className = 'veg-card';
  div.dataset.wordId = w.id;
  div.innerHTML = `<div>${display}</div>`;
  vegBoard.appendChild(div);
  const done = state.veg.activeWords.filter(x=>x.cut).length;
  const base = (state.veg.round % 2 === 1) ? 'carrot' : 'eggplant';
  const map = [`${base}noword`,`${base}oneword`,`${base}twowords`,`${base}threewords`,`${base}fourwords`,`${base}fivewords`];
  const imgName = map[Math.min(done, 5)] + '.PNG';
  vegCarrot.src = `public/${imgName}`;
  vegCarrot.style.opacity = '1';
  const isEggplant = base === 'eggplant';
  const widthPx = isEggplant ? 448 : 560;
  vegCarrot.style.width = `${widthPx}px`;
  vegCarrot.style.maxWidth = isEggplant ? '64vw' : '80vw';
  vegCarrot.classList.remove('hidden');
};
const updateVegPause = () => {
  if (state.paused && state.mode === 'veg' && state.veg.started) {
    vegPause.classList.remove('hidden');
    pauseDangerGauge();
  } else {
    vegPause.classList.add('hidden');
    if (state.mode === 'veg' && state.veg.started && state.veg.gaugeRunning) {
      resumeDangerGauge();
    }
  }
};

// ===== Danger Gauge functions =====
const updateDangerGaugeUI = () => {
  if (!dangerGaugeFill) return;
  const pct = state.veg.gauge;
  dangerGaugeFill.style.width = pct + '%';
  if (pct < 40) {
    dangerGaugeFill.style.background = '#22c55e';
  } else if (pct < 60) {
    dangerGaugeFill.style.background = '#eab308';
  } else if (pct < 85) {
    dangerGaugeFill.style.background = '#f97316';
  } else {
    dangerGaugeFill.style.background = '#ef4444';
  }
  if (dangerGaugeBar) {
    dangerGaugeBar.classList.toggle('danger-pulse', pct >= 85);
  }
  if (dangerGaugePct) {
    dangerGaugePct.textContent = Math.floor(pct) + '%';
  }
};

const triggerGaugeReliefAnimation = () => {
  if (!dangerGaugeBar) return;
  dangerGaugeBar.classList.remove('gauge-relief');
  void dangerGaugeBar.offsetWidth; // force reflow to restart animation
  dangerGaugeBar.classList.add('gauge-relief');
  setTimeout(() => dangerGaugeBar.classList.remove('gauge-relief'), 600);
};

const triggerGaugeGameOver = () => {
  if (state.veg.gameOver) return;
  state.veg.gameOver = true;
  stopDangerGauge();
  vegOverlayTitle.textContent = 'GAME OVER';
  vegOverlayPenalty.textContent = `Cleared: ${state.veg.totalCleared} / 20`;
  vegOverlay.classList.remove('hidden');
  veg.classList.add('veg-shake');
  setTimeout(() => {
    vegOverlay.classList.add('hidden');
    veg.classList.remove('veg-shake');
    showVegGameOverResult();
  }, 1500);
};

const showVegGameOverResult = () => {
  for (const w of state.veg.activeWords) {
    if (!w.cut && !w.reported) {
      QuizEngine.reportAnswer(w.id, false);
    }
  }
  renderVegGameOverResult();
  vegResult.classList.remove('hidden');
  if (answerInput) answerInput.style.zIndex = '10';
  QuizEngine.endSession();
};

const renderVegGameOverResult = () => {
  vegResultBody.innerHTML = '';
  const allWords = state.veg.allSessionWords;
  const done = allWords.filter(x=>x.cut).length;
  const total = allWords.length;
  const accuracy = total > 0 ? Math.round((done / total) * 100) : 0;

  const statsDiv = document.createElement('div');
  statsDiv.style.marginBottom = '20px';
  statsDiv.innerHTML = `
    <div style="font-size: 32px; color: #ef4444; margin-bottom: 10px;"><strong>GAME OVER</strong></div>
    <div style="font-size: 24px; margin-bottom: 10px;"><strong>Score: ${state.score}</strong></div>
    <div style="font-size: 18px; margin-bottom: 5px;">Correct: ${done} / ${total}</div>
    <div style="font-size: 18px; margin-bottom: 5px;">Accuracy: ${accuracy}%</div>
  `;
  vegResultBody.appendChild(statsDiv);

  // 単語ごとの結果を表示
  const header = document.createElement('div');
  header.className = 'summary-row';
  header.innerHTML = `<strong>Word</strong><strong>Status</strong><strong>Category</strong>`;
  vegResultBody.appendChild(header);

  for (const w of allWords) {
    const row = document.createElement('div');
    row.className = 'summary-row';
    const ws = getWordState(w.id);
    const cat = getWordCategory(ws);
    const status = w.cut ? '✓ Correct' : '✗ Missed';
    const statusColor = w.cut ? '#10b981' : '#ef4444';
    row.innerHTML = `
      <div>${w.native} → ${w.target}</div>
      <div style="color: ${statusColor};">${status}</div>
      <div><span style="background:${getCategoryColor(cat)};color:white;padding:2px 8px;border-radius:4px;font-size:12px;">${getCategoryLabel(cat)}</span></div>
    `;
    vegResultBody.appendChild(row);
  }
  vegNextSetBtn.style.display = 'none';
  vegRetryBtn.style.display = '';
};

const adjustGauge = (amount) => {
  state.veg.gauge = Math.max(0, Math.min(100, state.veg.gauge + amount));
  updateDangerGaugeUI();
  if (amount < 0) {
    triggerGaugeReliefAnimation();
  }
  if (state.veg.gauge >= 100) {
    triggerGaugeGameOver();
  }
};

const startDangerGauge = () => {
  state.veg.gaugeRunning = true;
  state.veg.gaugePaused = false;
  state.veg.gaugeLastTick = now();
  if (state.veg.gaugeTimerId) clearInterval(state.veg.gaugeTimerId);
  state.veg.gaugeTimerId = setInterval(() => {
    if (state.veg.gaugePaused || state.paused || !state.veg.gaugeRunning) return;
    const currentTime = now();
    const deltaMs = currentTime - state.veg.gaugeLastTick;
    state.veg.gaugeLastTick = currentTime;
    const deltaPercent = (deltaMs / 1000) * state.veg.gaugeRate;
    state.veg.gauge = Math.min(100, state.veg.gauge + deltaPercent);
    updateDangerGaugeUI();
    if (state.veg.gauge >= 100) {
      triggerGaugeGameOver();
    }
  }, 50);
};

const stopDangerGauge = () => {
  state.veg.gaugeRunning = false;
  if (state.veg.gaugeTimerId) {
    clearInterval(state.veg.gaugeTimerId);
    state.veg.gaugeTimerId = null;
  }
};

const pauseDangerGauge = () => {
  state.veg.gaugePaused = true;
};

const resumeDangerGauge = () => {
  state.veg.gaugePaused = false;
  state.veg.gaugeLastTick = now();
};
// ===== End Danger Gauge functions =====

const startVegRound = () => {
  state.veg.started = true;
  state.paused = false; // ラウンド開始時にポーズを解除
  updateVegPause();
  renderCurrentVegCard();
  if (!state.veg.gaugeRunning) {
    startDangerGauge();
  } else {
    resumeDangerGauge();
  }
  updateDangerGaugeUI();
  answerInput.value = '';
  answerInput.focus();
};

const startVegCountdown = () => {
  home.classList.add('hidden');
  vegCountdown.classList.remove('hidden');
  // カウントダウン中はボタンを非表示
  const controls = document.querySelector('.controls');
  const vegControls = document.querySelector('.veg-controls');
  if (controls) controls.style.display = 'none';
  if (vegControls) vegControls.style.display = 'none';
  
  let count = 3;
  vegCountdownNumber.textContent = count;
  
  const countdownInterval = setInterval(() => {
    count--;
    if (count > 0) {
      vegCountdownNumber.textContent = count;
    } else if (count === 0) {
      vegCountdownNumber.textContent = 'GO!';
    } else {
      clearInterval(countdownInterval);
      vegCountdown.classList.add('hidden');
      // カウントダウン終了後、ボタンを再表示
      if (controls) controls.style.display = '';
      if (vegControls) vegControls.style.display = '';
      startVegRound();
    }
  }, 1000);
};

if (vegBackBtn) vegBackBtn.onclick = () => initHome();
vegNextSetBtn.onclick = () => proceedToNextSet();
vegRetryBtn.onclick = () => retryVegRound();
closeVegResultBtn.onclick = () => { 
  vegResult.classList.add('hidden');
  // テキストボックスのz-indexを元に戻す
  if (answerInput && answerInput.classList.contains('bottom-input')) {
    answerInput.style.zIndex = '';
  }
};
vegPassBtn.onclick = () => {
  if (!state.veg.started || state.paused || state.veg.gameOver) return;
  const i = state.veg.currentIndex;
  const w = state.veg.activeWords[i];
  if (!w) return;

  state.veg.totalAttempted++;
  adjustGauge(+10);
  if (state.veg.gameOver) return;

  pauseDangerGauge();
  // 答えを表示
  vegPassAnswer.textContent = w.target;
  vegPassOverlay.classList.remove('hidden');
  veg.classList.add('pass-mode');

  // 3秒後に非表示に戻す
  setTimeout(() => {
    if (state.veg.gameOver) return;
    vegPassOverlay.classList.add('hidden');
    veg.classList.remove('pass-mode');
    resumeDangerGauge();

    // 次の単語に進む（パスした単語はスキップ）
    let next = i + 1;
    while (next < state.veg.activeWords.length && state.veg.activeWords[next].cut) next++;
    state.veg.currentIndex = next;
    if (state.veg.currentIndex >= state.veg.activeWords.length) {
      finishVegRound();
    } else {
      renderCurrentVegCard();
    }
  }, 3000);
};
if (chooseShooting) chooseShooting.onclick = () => { if (shootHowToPlay) shootHowToPlay.classList.remove('hidden'); };
if (chooseVegetable) chooseVegetable.onclick = () => { if (vegHowToPlay) vegHowToPlay.classList.remove('hidden'); };
if (chooseCheese) chooseCheese.onclick = () => { if (cheeseHowToPlay) cheeseHowToPlay.classList.remove('hidden'); };
if (chooseMinecart) chooseMinecart.onclick = () => { showMinecart(); };
const tryCutWord = (val) => {
  const i = state.veg.currentIndex;
  const w = state.veg.activeWords[i];
  if (!w) return false;
  if (normalize(val)===normalize(w.target)) {
    state.score += 100;
    state.veg.totalCleared++;
    state.veg.totalAttempted++;
    adjustGauge(-6);
    w.cut = true;
    const card = vegBoard.querySelector(`[data-word-id="${w.id}"]`);
    if (card) { card.classList.add('cut'); const fx = document.createElement('div'); fx.className='veg-cut'; fx.textContent='💥'; card.appendChild(fx); }
    QuizEngine.reportAnswer(w.id, true);
    let next = i+1;
    while (next < state.veg.activeWords.length && state.veg.activeWords[next].cut) next++;
    state.veg.currentIndex = next;
    if (state.veg.currentIndex >= state.veg.activeWords.length) { finishVegRound(); return true; }
    renderCurrentVegCard();
    return true;
  }
  QuizEngine.reportAnswer(w.id, false);
  w.reported = true;
  state.score = Math.max(0, state.score-50);
  state.veg.totalAttempted++;
  adjustGauge(+20);
  if (state.veg.gameOver) return false;
  vegOverlayTitle.textContent = 'Missed';
  vegOverlayPenalty.textContent = '-50';
  vegOverlay.classList.remove('hidden');
  veg.classList.add('veg-shake');
  setTimeout(() => {
    if (state.veg.gameOver) return;
    vegOverlay.classList.add('hidden');
    veg.classList.remove('veg-shake');
    // MISS画面が閉じた後（800ミリ秒後）に解答を3秒間表示
    vegPassAnswer.textContent = w.target;
    vegPassOverlay.classList.remove('hidden');
    veg.classList.add('pass-mode');
    pauseDangerGauge();
    // 3秒後に正解表示を閉じて、次の問題に進む
    setTimeout(() => {
      if (state.veg.gameOver) return;
      vegPassOverlay.classList.add('hidden');
      veg.classList.remove('pass-mode');
      // 次の問題に進む（現在の単語をスキップ）
      let next = i + 1;
      while (next < state.veg.activeWords.length && state.veg.activeWords[next].cut) next++;
      state.veg.currentIndex = next;
      if (state.veg.currentIndex >= state.veg.activeWords.length) {
        finishVegRound();
      } else {
        renderCurrentVegCard();
        resumeDangerGauge();
      }
    }, 3000);
  }, 800);
  return false;
};
const renderVegFinalResult = () => {
  vegResultBody.innerHTML = '';
  const allWords = state.veg.allSessionWords;
  const done = allWords.filter(x=>x.cut).length;
  const total = allWords.length;
  const accuracy = total > 0 ? Math.round((done / total) * 100) : 0;

  // スコアと統計情報を表示
  const statsDiv = document.createElement('div');
  statsDiv.style.marginBottom = '20px';
  statsDiv.innerHTML = `
    <div style="font-size: 24px; margin-bottom: 10px;"><strong>Score: ${state.score}</strong></div>
    <div style="font-size: 18px; margin-bottom: 5px;">Correct: ${done} / ${total}</div>
    <div style="font-size: 18px; margin-bottom: 5px;">Accuracy: ${accuracy}%</div>
  `;
  vegResultBody.appendChild(statsDiv);

  // 単語ごとの結果を表示
  const header = document.createElement('div');
  header.className = 'summary-row';
  header.innerHTML = `<strong>Word</strong><strong>Status</strong><strong>Category</strong>`;
  vegResultBody.appendChild(header);

  for (const w of allWords) {
    const row = document.createElement('div');
    row.className = 'summary-row';
    const ws = getWordState(w.id);
    const cat = getWordCategory(ws);
    const status = w.cut ? '✓ Correct' : '✗ Missed';
    const statusColor = w.cut ? '#10b981' : '#ef4444';
    row.innerHTML = `
      <div>${w.native} → ${w.target}</div>
      <div style="color: ${statusColor};">${status}</div>
      <div><span style="background:${getCategoryColor(cat)};color:white;padding:2px 8px;border-radius:4px;font-size:12px;">${getCategoryLabel(cat)}</span></div>
    `;
    vegResultBody.appendChild(row);
  }
  // 最終結果なのでNextSetボタンは非表示
  vegNextSetBtn.style.display = 'none';
  vegRetryBtn.style.display = '';
};
const finishVegRound = () => {
  if (state.veg.gameOver) return;
  // ミスした単語の処理 → 未報告のもののみQuizEngineに報告
  for (const w of state.veg.activeWords) {
    if (!w.cut && !w.reported) {
      QuizEngine.reportAnswer(w.id, false);
    }
  }
  // 次のセットがあるかチェック
  const remaining = QuizEngine.peekRemainingCount();
  if (remaining <= 0) {
    // 全セット完了 → 最終結果を表示
    pauseDangerGauge();
    if (state.veg.totalCleared === 20) {
      state.score += 500; // All-clear bonus
    }
    stopDangerGauge();
    showVegFinalResult();
    return;
  }
  // まだ単語が残っている → 次のセットに自動的に進む（結果画面・カウントダウンなし）
  state.veg.setIndex++;
  state.veg.round++;
  state.veg.activeWords = [];
  state.veg.currentIndex = 0;
  state.veg.currentSetWords = buildNewSet();
  if (state.veg.currentSetWords.length === 0) {
    // 単語が取得できなかった → 最終結果を表示
    pauseDangerGauge();
    if (state.veg.totalCleared === 20) {
      state.score += 500;
    }
    stopDangerGauge();
    showVegFinalResult();
    return;
  }
  const names = ['Carrot','Tomato','Potato','Cabbage','Onion','Pepper','Radish','Broccoli'];
  vegNameEl.textContent = names[state.veg.setIndex % names.length];
  vegRoundEl.textContent = state.veg.round;
  vegBoard.innerHTML = '';
  for (const w of state.veg.currentSetWords) {
    const entry = { id: w.id, native: w.native, target: w.target, cut: false };
    state.veg.activeWords.push(entry);
    state.veg.allSessionWords.push(entry);
  }
  state.veg.easySetCounter++;
  // そのまま次の単語を表示（カウントダウンなし）
  renderCurrentVegCard();
  resumeDangerGauge();
  answerInput.value = '';
  answerInput.focus();
};

const showVegFinalResult = () => {
  // リザルト画面を表示
  renderVegFinalResult();
  vegResult.classList.remove('hidden');
  home.classList.add('hidden');
  // テキストボックスのz-indexを下げる
  if (answerInput) {
    answerInput.style.zIndex = '10';
  }
  QuizEngine.endSession();
};

const proceedToNextSet = () => {
  state.veg.setIndex++;
  state.veg.round++;
  const hasWords = resetVegRound();
  vegResult.classList.add('hidden');
  // テキストボックスのz-indexを元に戻す
  if (answerInput && answerInput.classList.contains('bottom-input')) {
    answerInput.style.zIndex = '';
  }
  if (!hasWords) {
    // セッション完了 → サマリー表示
    if (state.veg.totalCleared === 20) {
      state.score += 500; // All-clear bonus
    }
    stopDangerGauge();
    veg.classList.add('hidden');
    renderSummary();
    summary.classList.remove('hidden');
    QuizEngine.endSession();
    return;
  }
  startVegCountdown();
};

const retryVegRound = () => {
  // リトライ：同じ単語セットで再挑戦（QuizEngineからは新規取得しない）
  // ゲージは大幅リセットしない（リトライ悪用防止）がgameOverフラグはクリア
  // ゲームオーバー後のリトライ時は少しだけゲージを下げてプレイ可能にする
  state.veg.gameOver = false;
  if (state.veg.gauge >= 100) {
    state.veg.gauge = 85;
  }
  updateDangerGaugeUI();
  const prevWords = state.veg.currentSetWords;
  state.veg.activeWords = [];
  state.veg.currentIndex = 0;
  state.veg.started = false;
  vegBoard.innerHTML = '';
  for (const w of prevWords) state.veg.activeWords.push({ id: w.id, native: w.native, target: w.target, cut: false });
  vegCarrot.classList.add('hidden');
  vegResult.classList.add('hidden');
  // テキストボックスのz-indexを元に戻す
  if (answerInput && answerInput.classList.contains('bottom-input')) {
    answerInput.style.zIndex = '';
  }
  startVegCountdown();
};

flashBody.addEventListener('click', (ev) => {
  const el = ev.target;
  if (el.closest('.fc-book-item')) { const bookId = el.closest('.fc-book-item').dataset.bookId; renderFlashcardSortSelect(bookId); return; }
  if (el.closest('.fc-category')) { const cat = el.closest('.fc-category').dataset.cat; renderWordList(cat); return; }
  const actionEl = el.closest('[data-action]');
  if (actionEl) {
    const act = actionEl.dataset.action;
    if (act==='fc-back-to-books') { renderFlashcardBookSelect(); return; }
    if (act==='fc-back-to-sorts') { renderFlashcardSortSelect(state.flash.selectedBookId); return; }
    if (act==='fc-start-with-sorts') {
      const checks = flashBody.querySelectorAll('.fc-sort-options input[type="checkbox"]');
      const selected = [];
      checks.forEach(cb => { if (cb.checked) selected.push(cb.value); });
      if (selected.length === 0) return;
      state.flash.selectedCats = selected;
      const words = getWordsForBookId(state.flash.selectedBookId);
      const allItems = [];
      for (const w of words) {
        const ws = getWordState(w.id);
        const cat = getWordCategory(ws);
        if (selected.includes(cat)) allItems.push(w);
      }
      if (allItems.length === 0) { renderFlashcards(state.flash.selectedBookId, selected); return; }
      state.flash.items = shuffle([...allItems]);
      state.flash.idx = 0;
      state.flash.flipped = false;
      state.flash.view = 'cards';
      state.flash.category = null;
      renderCardView();
      return;
    }
    if (act==='fc-back') { renderFlashcards(state.flash.selectedBookId, state.flash.selectedCats); return; }
    if (act==='fc-list') { renderWordList(state.flash.category); return; }
    if (act==='fc-quiz-all') { if (state.flash.items.length) startQuiz(state.flash.category, state.flash.items[0].id); return; }
    if (act==='fc-card-all') { if (state.flash.items.length) startCardMode(state.flash.category, state.flash.items[0].id); return; }
    if (act==='fc-next') {
      if (state.flash.view==='quiz') {
        state.flash.idx = (state.flash.idx+1)%state.flash.items.length;
        startQuiz(state.flash.category, state.flash.items[state.flash.idx].id);
      } else {
        state.flash.idx = (state.flash.idx+1)%state.flash.items.length;
        renderCardView();
      }
      return;
    }
    if (act==='fc-prev') { state.flash.idx = (state.flash.idx-1+state.flash.items.length)%state.flash.items.length; renderCardView(); return; }
    if (act==='fc-flip') { state.flash.flipped = !state.flash.flipped; renderCardView(); return; }
  }
  if (el.classList.contains('fc-choice')) {
    const idx = Number(el.dataset.choice);
    const correct = idx===state.flash.correctIndex;
    el.classList.add(correct? 'correct':'wrong');
    const siblings = el.parentElement.querySelectorAll('.fc-choice');
    siblings.forEach(s=>{ if (Number(s.dataset.choice)===state.flash.correctIndex) s.classList.add('correct'); });
    return;
  }
});

answerInput.addEventListener('keydown', (e) => {
  if (e.key==='Enter') {
    const val = answerInput.value;
    answerInput.value='';
    home.classList.add('hidden');
    if (state.mode==='shoot') {
      // 入力式モードの時はcheckAnswerを呼ぶ
      if (state.inputMode === 'input' && state.running && !state.paused && !state.gamePausedForAnswer) {
        if (val.trim()) {
          checkAnswer(val.trim(), false);
        }
      }
      return;
    } else if (state.mode==='veg') {
      // 正解表示中（vegPassOverlayが表示されている間）は入力を無視
      if (!vegPassOverlay.classList.contains('hidden')) return;
      if (!state.veg.gaugeRunning || !state.veg.started || state.paused || state.veg.gameOver) return;
      tryCutWord(val);
    } else if (state.mode==='cheese') {
      if (state.paused || !state.cheese.running) return;
      const l = state.cheese.leftWord, r = state.cheese.rightWord;
      const lanes = ['left','center','right'];
      const curIdx = lanes.indexOf(state.cheese.playerSide);
      let matchedSide = null;
      let matchedId = null;
      if (normalize(val)===normalize(l.target)) {
        // 左の単語 → 1マス左に移動（左端なら動かない）
        if (curIdx > 0) state.cheese.playerSide = lanes[curIdx - 1];
        matchedSide = 'left';
        matchedId = l.id;
      } else if (normalize(val)===normalize(r.target)) {
        // 右の単語 → 1マス右に移動（右端なら動かない）
        if (curIdx < 2) state.cheese.playerSide = lanes[curIdx + 1];
        matchedSide = 'right';
        matchedId = r.id;
      }
      if (matchedSide) {
        // ターゲット単語なら正解として記録
        if (matchedId === state.cheese.targetWordId) {
          QuizEngine.reportAnswer(matchedId, true);
          state.cheese.correctCount++;
        }
        // 入力された単語を常に新しい単語に入れ替え
        if (!replaceWordSlot(matchedSide)) { endCheeseSession(); return; }
      }
    }
  } else if (e.key === ' ' && state.mode === 'shoot' && state.running && !state.paused && !state.gamePausedForAnswer) {
    e.preventDefault();
    triggerShowAnswerShoot();
  } else if (e.key===' ' && state.mode==='cheese') {
    e.preventDefault();
    e.stopPropagation(); // 同じキー押下が document にバブルし、失敗直後に「再開」と誤解されないようにする
    // 失敗画面ではスペースで再開（入力ボックスにフォーカスがあってもここで再開する）
    if (state.cheese.pausedForMiss) {
      if (state.cheese.targetWordId) QuizEngine.reportAnswer(state.cheese.targetWordId, false);
      state.cheese.wrongCount++;
      const missSlot = state.cheese.leftWord.id === state.cheese.targetWordId ? 'left' : 'right';
      if (!replaceWordSlot(missSlot)) { endCheeseSession(); return; }
      state.cheese.missedAnswers = null;
      state.cheese.pausedForMiss = false;
      state.cheese.feedbackUntil = 0;
      state.cheese.lastResumeAt = now();
      return;
    }
    if (state.paused || !state.cheese.running) return;
    // スペースキーで即座に落下させてから判定（足元で判定するのでアイテム底面を足元に移動・論理座標）
    if (state.cheese.item) {
      const it = state.cheese.item;
      const playerY = LOGICAL_CHEESE_H - 60;
      const ps = 180;
      const is = 120;
      const mouseBottomY = playerY + ps/2;       it.y = mouseBottomY - is/2;
      checkCheeseCollisionImmediate();
    }
  }
});


const checkAnswer = (val, usedVoice) => {
  let selectedChoiceIndex = -1;
  if (state.choices && state.choices.length > 0) {
    selectedChoiceIndex = state.choices.findIndex(c => normalize(c.text) === normalize(val));
  }

  const aliveEnemies = state.enemies.filter(e => !e.dead);
  if (aliveEnemies.length === 0) return;

  const matchingEnemies = aliveEnemies.filter(e => normalize(val) === normalize(e.expect));

  if (matchingEnemies.length > 0) {
    if (selectedChoiceIndex >= 0) {
      state.highlightedChoiceIndex = selectedChoiceIndex;
      state.highlightIsCorrect = true;
      state.highlightUntil = now() + 300;
    }
    const closestEnemy = matchingEnemies.reduce((closest, e) => e.x < closest.x ? e : closest);
    state.laser = {
      start: now(),
      fromX: player.x + 30,
      fromY: player.y,
      toX: closestEnemy.x,
      toY: closestEnemy.y,
      duration: 200,
      usedVoice: usedVoice,
      targetEnemies: matchingEnemies
    };
    setTimeout(() => {
      if (state.laser && state.laser.targetEnemies) {
        state.laser.targetEnemies.forEach(e => { if (!e.dead) succeedEnemy(e, usedVoice); });
      }
      state.laser = null;
    }, 50);
    debug('CHECK val=', val, 'matched enemies=', matchingEnemies.length);
  } else {
    // 不正解
    state.wrongCount++;
    SFX.miss();
    if (selectedChoiceIndex >= 0) {
      state.highlightedChoiceIndex = selectedChoiceIndex;
      state.highlightIsCorrect = false;
      state.highlightUntil = now() + 300;
    }
    debug('CHECK val=', val, 'no match');
    const correctAnswer = state.currentWord ? state.currentWord.target : null;
    if (correctAnswer) {
      state.missFeedbackUntil = now() + 800;
      state.shakeUntil = now() + 700;
      state.missFeedbackReason = 'wrong';
      setTimeout(() => {
        state.gamePausedForAnswer = true;
        state.answerToShow = correctAnswer;
        state.showAnswerUntil = now() + 3000;
        setTimeout(() => {
          state.gamePausedForAnswer = false;
          state.answerToShow = null;
          // 現在の敵を失敗扱いで除去
          const currentEnemy = state.enemies.find(e => !e.dead);
          if (currentEnemy) {
            currentEnemy.dead = true;
            updateStreak(false);
            QuizEngine.reportAnswer(currentEnemy.id, false);
            const s = state.stats[currentEnemy.id] || { ok: 0, fail: 0, times: [] };
            s.fail++;
            state.stats[currentEnemy.id] = s;
            state.enemies = state.enemies.filter(x => x !== currentEnemy);
            updateCurrentWord();
            if (now() + state.spawnInterval > state.spawnTimer) {
              state.spawnTimer = now() + state.spawnInterval;
            }
          }
        }, 3000);
      }, 800);
    }
  }
};

let recognition = null;
if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
  const Ctor = window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new Ctor();
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  recognition.onresult = (ev) => {
    const t = ev.results[0][0].transcript;
    debug('VOICE transcript=', t);
    checkAnswer(t, true);
  };
  recognition.onerror = () => { voiceBtn.textContent = 'Voice: Off'; state.usingVoice=false; };
}

voiceBtn.onclick = () => {
  if (!recognition) return;
  state.usingVoice = !state.usingVoice;
  voiceBtn.textContent = `Voice: ${state.usingVoice? 'On':'Off'}`;
  if (state.usingVoice) recognition.start(); else recognition.stop();
};

const updatePauseButtons = () => {
  // summaryボタンはポーズ中のみ表示
  if (state.mode === 'shoot' && state.running && state.paused) {
    summaryToggleBtn.style.display = '';
  } else {
    summaryToggleBtn.style.display = 'none';
  }
};

const updatePauseMenu = () => {
  // ポーズ画面の表示/非表示を制御
  if (state.mode === 'shoot' && state.running && state.paused) {
    if (pauseMenu) pauseMenu.classList.remove('hidden');
    // ポーズ中も上部のボタン（Voice, Summary, Flashcards, Home など）が押せるように UI を前面に
    if (uiEl) uiEl.style.zIndex = '21';
    // ボタンのテキストを更新
    if (toggleInputModeBtn) {
      toggleInputModeBtn.textContent = state.inputMode === 'choice' ? '入力式に切り替え' : '選択式に切り替え';
    }
  } else {
    if (pauseMenu) pauseMenu.classList.add('hidden');
    if (uiEl) uiEl.style.zIndex = '';
  }
};

const updateInputMode = () => {
  // 入力式モードの時はanswerInputを表示、選択式モードの時は非表示
  if (state.mode === 'shoot' && state.running && !state.paused) {
    if (state.inputMode === 'input') {
      if (answerInput) {
        answerInput.style.display = '';
        answerInput.classList.add('bottom-input');
        answerInput.focus();
      }
    } else {
      if (answerInput) {
        answerInput.style.display = 'none';
      }
    }
  }
};

// キーが離された時に記録を削除
document.addEventListener('keyup', (e) => {
  if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
    state.pressedKeys.delete(e.key);
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (state.mode === 'shoot') {
      state.paused = !state.paused;
      updatePauseButtons();
      updatePauseMenu();
      updateInputMode();
    } else if (state.mode === 'veg' && state.veg.started) {
      state.paused = !state.paused;
      updateVegPause();
    } else if (state.mode === 'cheese' && state.cheese.running) {
      state.paused = !state.paused;
      if (state.paused) {
        // ポーズ開始時：経過時間を記録
        state.cheese.pausedTime = now();
      } else {
        // ポーズ解除時：startTimeを調整してタイマーを再開
        const pausedDuration = now() - state.cheese.pausedTime;
        state.cheese.startTime += pausedDuration;
      }
    } else if (state.mode === 'minecart') {
      state.minecart.paused = !state.minecart.paused;
      if (minecartPause) {
        if (state.minecart.paused) minecartPause.classList.remove('hidden');
        else minecartPause.classList.add('hidden');
      }
    }
  } else if (state.mode === 'shoot' && state.running && !state.paused && !state.gamePausedForAnswer && state.inputMode === 'choice') {
    // 上下左右キーで直接回答（選択式モードのみ）
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      e.preventDefault();
      // 既に押されているキーは無視（長押し防止）
      if (state.pressedKeys.has(e.key)) {
        return;
      }
      // キーを記録
      state.pressedKeys.add(e.key);
      
      if (state.choices && state.choices.length > 0) {
        let choiceIndex = -1;
        if (e.key === 'ArrowUp') {
          choiceIndex = 0; // 上キー = 最初の選択肢
        } else if (e.key === 'ArrowDown') {
          choiceIndex = 1; // 下キー = 2番目の選択肢
        } else if (e.key === 'ArrowLeft') {
          choiceIndex = 2; // 左キー = 3番目の選択肢
        } else if (e.key === 'ArrowRight') {
          choiceIndex = 3; // 右キー = 4番目の選択肢
        }
        
        if (choiceIndex >= 0 && choiceIndex < state.choices.length) {
          const selectedChoice = state.choices[choiceIndex];
          if (selectedChoice) {
            checkAnswer(selectedChoice.text, false);
          }
        }
      }
    }
  } else if (e.key === ' ' && state.mode === 'shoot' && state.running && !state.paused && !state.gamePausedForAnswer) {
    e.preventDefault();
    if (document.activeElement === answerInput) return;
    triggerShowAnswerShoot();
  } else if (e.key === ' ' && state.mode === 'cheese') {
    e.preventDefault();
    // 失敗画面ではスペースで再開（フォーカスが入力欄でないときはここで処理）
    if (state.cheese.pausedForMiss) {
      if (state.cheese.targetWordId) QuizEngine.reportAnswer(state.cheese.targetWordId, false);
      state.cheese.wrongCount++;
      const missSlot = state.cheese.leftWord.id === state.cheese.targetWordId ? 'left' : 'right';
      if (!replaceWordSlot(missSlot)) { endCheeseSession(); return; }
      state.cheese.missedAnswers = null;
      state.cheese.pausedForMiss = false;
      state.cheese.feedbackUntil = 0;
      state.cheese.lastResumeAt = now();
      return;
    }
    if (document.activeElement === answerInput) return;
    if (state.cheese.running && !state.paused && state.cheese.item) {
      if (state.cheese.lastResumeAt && (now() - state.cheese.lastResumeAt) < 400) return;
      const it = state.cheese.item;
      const playerY = LOGICAL_CHEESE_H - 60;
      const ps = 180;
      const is = 120;
      const mouseBottomY = playerY + ps/2;
      it.y = mouseBottomY - is/2;
      checkCheeseCollisionImmediate();
    }
  }
});

initHome();
updatePauseButtons(); // 初期状態でボタンを非表示にする
updatePauseMenu(); // 初期状態でポーズ画面を非表示にする

// 入力モード切り替えボタン
if (toggleInputModeBtn) {
  toggleInputModeBtn.onclick = () => {
    state.inputMode = state.inputMode === 'choice' ? 'input' : 'choice';
    updatePauseMenu();
    updateInputMode();
  };
}

// 再開ボタン
if (resumeBtn) {
  resumeBtn.onclick = () => {
    if (state.mode === 'shoot') {
      state.paused = false;
      updatePauseButtons();
      updatePauseMenu();
      updateInputMode();
    }
  };
}
// 初期状態でデバッグボタンを非表示
if (debugKillEnemyBtn) debugKillEnemyBtn.style.display = 'none';
if (debugSpawnEnemyBtn) debugSpawnEnemyBtn.style.display = 'none';
draw();
const debug = (...a) => { try { console.log('[DEBUG]', ...a); } catch {} };
const pickTwoWords = () => {
  // QuizEngineから次の出題単語を取得（正解対象）
  const target = QuizEngine.getNextWord();
  if (!target) {
    // セッション完了
    return null;
  }
  QuizEngine.advance();
  // 残り1語はディストラクタ（セッション内からランダム）
  const all = (QuizEngine.session) ? QuizEngine.session.allWords : allWordsFlat();
  let b = all[Math.floor(rand()*all.length)];
  while (b.id === target.id && all.length > 1) b = all[Math.floor(rand()*all.length)];
  // 2語をランダムに並べる（左・右）
  const two = [target, b];
  shuffleArray(two);
  // 正解対象のIDを記録
  state.cheese.targetWordId = target.id;
  return two;
};
const replaceWordSlot = (slotSide) => {
  const newWord = QuizEngine.getNextWord();
  if (!newWord) return false;
  QuizEngine.advance();
  const slot = { id: newWord.id, native: newWord.native, target: newWord.target };
  if (slotSide === 'left') state.cheese.leftWord = slot;
  else state.cheese.rightWord = slot;
  state.cheese.targetWordId = newWord.id;
  return true;
};
const startCheese = () => {
  state.cheese.running = true;
  state.paused = false;
  state.cheese.startTime = now();
  state.cheese.item = null;
  state.cheese.lastItemType = null;
  state.cheese.lastCheeseSide = null;
  state.cheese.pausedForMiss = false;
  state.cheese.missedAnswers = null;
  state.cheese.feedbackUntil = 0;
  state.cheese.lastResumeAt = 0;
  state.cheese.questionsShown = 0;
  state.cheese.correctCount = 0;
  state.cheese.wrongCount = 0;
  state.cheese.targetWordId = null;
  const result = pickTwoWords();
  if (!result) { endCheeseSession(); return; }
  const [lw, rw] = result;
  state.cheese.leftWord = { id: lw.id, native: lw.native, target: lw.target };
  state.cheese.rightWord = { id: rw.id, native: rw.native, target: rw.target };
  state.cheese.playerSide = 'center';
  requestAnimationFrame(tickCheese);
};
const endCheeseSession = () => {
  state.cheese.running = false;
  document.getElementById('game').classList.add('hidden');
  document.getElementById('ui').classList.add('hidden');
  renderSummary();
  summary.classList.remove('hidden');
  QuizEngine.endSession();
};
const spawnCheeseItem = () => {
  let type;
  if (state.cheese.lastItemType === 'mold') {
    type = 'cheese';
  } else {
    type = Math.random()<0.75? 'cheese':'mold';
  }
  const sides = ['left','center','right'];
  const curIdx = sides.indexOf(state.cheese.playerSide);
  let side;
  if (type === 'cheese') {
    // チーズはプレイヤーの1マス隣にだけ落とす
    const adjacent = [];
    if (curIdx > 0) adjacent.push(sides[curIdx - 1]);
    if (curIdx < 2) adjacent.push(sides[curIdx + 1]);
    side = adjacent[Math.floor(Math.random()*adjacent.length)];
  } else {
    // 毒はプレイヤーの現在位置に落とす
    side = state.cheese.playerSide;
  }
  const x = side==='left' ? CHEESE_LANE_LEFT : side==='center' ? CHEESE_LANE_CENTER : CHEESE_LANE_RIGHT;
  state.cheese.item = { type, side, x, y: 40, vy: 3.2 / 5 };
  state.cheese.lastItemType = type;
  if (type === 'cheese') state.cheese.lastCheeseSide = side;
  state.cheese.questionsShown++;
};
const drawCheese = () => {
  const W = LOGICAL_CHEESE_W;
  const H = LOGICAL_CHEESE_H;
  const scale = Math.min(canvas.width / W, canvas.height / H);
  const offsetX = (canvas.width - W * scale) / 2;
  const offsetY = (canvas.height - H * scale) / 2;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save();
  ctx.setTransform(scale, 0, 0, scale, offsetX, offsetY);

  const grd = ctx.createLinearGradient(0, 0, 0, H);
  grd.addColorStop(0, '#14203b'); grd.addColorStop(1, '#0b1225');
  ctx.fillStyle = grd; ctx.fillRect(0, 0, W, H);
  if (state.bg.cheese && state.bg.cheese.complete) {
    const iw = state.bg.cheese.naturalWidth;
    const ih = state.bg.cheese.naturalHeight;
    const bgScale = Math.max(W/iw, H/ih);
    const bw = iw * bgScale;
    const bh = ih * bgScale;
    ctx.drawImage(state.bg.cheese, (W - bw)/2, (H - bh)/2, bw, bh);
  }
  const leftCenterX = CHEESE_LANE_LEFT;
  const centerXMid = CHEESE_LANE_CENTER;
  const rightCenterX = CHEESE_LANE_RIGHT;
  const guideXs = [
    (leftCenterX + centerXMid) / 2,
    (centerXMid + rightCenterX) / 2
  ];
  ctx.fillStyle = 'rgba(147,197,253,0.7)';
  for (const gx of guideXs) {
    for (let gy = 40; gy <= H - 40; gy += 16) {
      ctx.beginPath(); ctx.arc(gx, gy, 2.5, 0, Math.PI*2); ctx.fill();
    }
  }
  const yMid = H / 2;
  const centerX = CHEESE_LANE_CENTER;
  const promptOffset = 300;
  const promptLeftX = centerX - promptOffset;
  const promptRightX = centerX + promptOffset;
  const drawImageFit = (img, cx, cy, maxW, maxH) => {
    if (!img || !img.complete) return { w: 0, h: 0 };
    const iw = img.naturalWidth || maxW;
    const ih = img.naturalHeight || maxH;
    const s = Math.min(maxW/iw, maxH/ih);
    const w = iw * s;
    const h = ih * s;
    ctx.drawImage(img, cx - w/2, cy - h/2, w, h);
    return { w, h };
  };
  const leftTxt = state.cheese.leftWord.native;
  const rightTxt = state.cheese.rightWord.native;
  const fitL = drawImageFit(state.imgArrowLeft, promptLeftX, yMid, 540, 216);
  const fitR = drawImageFit(state.imgArrowRight, promptRightX, yMid, 540, 216);
  setCtxFont(22, true, leftTxt);
  ctx.fillStyle = '#ffffff';
  let tLeftW = ctx.measureText(leftTxt).width;
  const leftShift = fitL.w ? fitL.w * 0.18 : 0;
  ctx.fillText(leftTxt, promptLeftX + leftShift - tLeftW/2, yMid + 7);
  setCtxFont(22, true, rightTxt);
  ctx.fillStyle = '#ffffff';
  let tRightW = ctx.measureText(rightTxt).width;
  const rightShift = fitR.w ? fitR.w * 0.18 : 0;
  ctx.fillText(rightTxt, promptRightX - rightShift - tRightW/2, yMid + 7);
  let px = CHEESE_LANE_CENTER;
  if (state.cheese.playerSide==='left') px = CHEESE_LANE_LEFT;
  else if (state.cheese.playerSide==='center') px = CHEESE_LANE_CENTER;
  else if (state.cheese.playerSide==='right') px = CHEESE_LANE_RIGHT;
  if (state.imgMouse && state.imgMouse.complete) {
    const playerY = H - 60;
    const ps = 180;
    const mouseOffsetX = 10;
    const mouseOffsetY = 8;
    ctx.drawImage(state.imgMouse, px - ps/2 - mouseOffsetX, playerY - ps/2 - mouseOffsetY, ps, ps);
  }
  if (!state.cheese.item) spawnCheeseItem();
  const it = state.cheese.item;
  const itemImg = it.type==='cheese'? state.imgCheese : state.imgPoison;
  if (itemImg && itemImg.complete) {
    const is = 120;
    ctx.drawImage(itemImg, it.x - is/2, it.y - is/2, is, is);
  }
  const t = now();
  if (t < state.cheese.successUntil) {
    ctx.fillStyle = 'rgba(34,197,94,0.22)'; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = '#22c55e'; const text = state.cheese.successTitle; setCtxFont(64, true, text); const tw = ctx.measureText(text).width;
    ctx.fillText(text, (W-tw)/2, H/2);
    const bonus = `+${state.cheese.successBonus}`; setCtxFont(40, true, bonus); const bw = ctx.measureText(bonus).width;
    ctx.fillText(bonus, (W-bw)/2, H/2+56);
  } else if (state.cheese.pausedForMiss) {
    ctx.fillStyle = 'rgba(255,0,0,0.22)'; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = '#ef4444'; const text = state.cheese.feedbackTitle; setCtxFont(64, true, text); const tw = ctx.measureText(text).width;
    ctx.fillText(text, (W-tw)/2, H/2 - 120);
    const pen = `-${state.cheese.feedbackPenalty}`; setCtxFont(40, true, pen); const pw = ctx.measureText(pen).width;
    ctx.fillText(pen, (W-pw)/2, H/2 - 60);
    if (state.cheese.missedAnswers) {
      const answerY = yMid + (fitL.h ? fitL.h/2 : 36) + 30;
      const leftAnswer = state.cheese.missedAnswers.left;
      const rightAnswer = state.cheese.missedAnswers.right;
      ctx.font = 'bold 56px system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#ffffff';
      const leftAnswerW = ctx.measureText(leftAnswer).width;
      ctx.fillText(leftAnswer, promptLeftX - leftAnswerW/2, answerY);
      const rightAnswerW = ctx.measureText(rightAnswer).width;
      ctx.fillText(rightAnswer, promptRightX - rightAnswerW/2, answerY);
    }
    ctx.fillStyle = '#94a3b8';
    const resumeText = 'Press SPACE to resume';
    setCtxFont(20, false, resumeText);
    const resumeW = ctx.measureText(resumeText).width;
    ctx.fillText(resumeText, (W-resumeW)/2, H/2 + 100);
  } else if (t < state.cheese.feedbackUntil) {
    ctx.fillStyle = 'rgba(255,0,0,0.22)'; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = '#ef4444'; const text = state.cheese.feedbackTitle; setCtxFont(64, true, text); const tw = ctx.measureText(text).width;
    ctx.fillText(text, (W-tw)/2, H/2);
    const pen = `-${state.cheese.feedbackPenalty}`; setCtxFont(40, true, pen); const pw = ctx.measureText(pen).width;
    ctx.fillText(pen, (W-pw)/2, H/2+56);
  }
  if (state.paused) {
    ctx.fillStyle = 'rgba(0,0,0,0.5)';
    ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = '#e6edf3';
    const text = 'PAUSED';
    setCtxFont(96, true, text);
    const tw = ctx.measureText(text).width;
    ctx.fillText(text, (W - tw)/2, H/2);
  }
  ctx.restore();
};
// アイテムとプレイヤーの衝突判定（スペースキー即落下時に使用・足元で判定）
const checkCheeseCollisionImmediate = () => {
  const it = state.cheese.item;
  if (!it) return;
  const canCheck = it.y < LOGICAL_CHEESE_H + 100;
  if (canCheck) {
    const isAligned = state.cheese.playerSide==='left' && it.side==='left' ||
                      state.cheese.playerSide==='center' && it.side==='center' ||
                      state.cheese.playerSide==='right' && it.side==='right';
    if (isAligned) {
      if (it.type==='cheese') {
        state.score += 100;
        state.cheese.correctCount++;
        state.effects.push({ x: it.x, y: it.y, start: now(), duration: 400 });
        SFX.hit();
        state.cheese.successTitle = 'Yummy!'; state.cheese.successBonus = 100; state.cheese.successUntil = now()+800;
      } else {
        // 毒を拾った場合もチーズを落としたときと同じ：解答表示しスペースまで固まる
        state.score = Math.max(0, state.score-50);
        state.cheese.wrongCount++;
        state.cheese.feedbackTitle = 'Hit Poison'; state.cheese.feedbackPenalty = 50;
        state.cheese.feedbackUntil = now()+999999999; state.cheese.shakeUntil = now()+700;
        const l = state.cheese.leftWord, r = state.cheese.rightWord;
        state.cheese.missedAnswers = { left: l.target, right: r.target };
        state.cheese.pausedForMiss = true;
        if (state.cheese.item) state.cheese.item.y = 40;
      }
      state.cheese.item = null; spawnCheeseItem();
      if (state.cheese.pausedForMiss && state.cheese.item) {
        state.cheese.item.y = 40;
      }
    } else {
      if (it.type==='cheese') {
        state.score = Math.max(0, state.score-50);
        state.cheese.wrongCount++;
        state.cheese.feedbackTitle = 'Missed Cheese'; state.cheese.feedbackPenalty = 50;
        state.cheese.feedbackUntil = now()+800; state.cheese.shakeUntil = now()+700;
        const l = state.cheese.leftWord, r = state.cheese.rightWord;
        state.cheese.missedAnswers = { left: l.target, right: r.target };
        state.cheese.pausedForMiss = true;
        state.cheese.feedbackUntil = now()+999999999;
        if (state.cheese.item) state.cheese.item.y = 40;
      }
      state.cheese.item = null; spawnCheeseItem();
    }
  }
};

const updateCheese = () => {
  // ミス画面で一時停止中は処理をスキップ
  if (state.cheese.pausedForMiss) {
    return;
  }
  const it = state.cheese.item; if (!it) return;
  it.y += it.vy;
  // チーズの底面がネズミの足元に到達したら正誤判定（論理座標）
  const playerY = LOGICAL_CHEESE_H - 60;
  const ps = 180;
  const is = 120;
  const mouseBottomY = playerY + ps/2; // ネズミの足元
  const itemBottomY = it.y + is/2;
  const atFeet = Math.abs(itemBottomY - mouseBottomY) < 30;
  if (atFeet) {
    if (state.cheese.playerSide==='left' && it.side==='left' || 
        state.cheese.playerSide==='center' && it.side==='center' || 
        state.cheese.playerSide==='right' && it.side==='right') {
      if (it.type==='cheese') {
        state.score += 100;
        state.cheese.correctCount++;
        state.effects.push({ x: it.x, y: it.y, start: now(), duration: 400 });
        SFX.hit();
        state.cheese.successTitle = 'Yummy!'; state.cheese.successBonus = 100; state.cheese.successUntil = now()+800;
      } else {
        // 毒を拾った場合もチーズを落としたときと同じ：解答表示しスペースまで固まる
        state.score = Math.max(0, state.score-50);
        state.cheese.wrongCount++;
        state.cheese.feedbackTitle = 'Hit Poison'; state.cheese.feedbackPenalty = 50;
        state.cheese.feedbackUntil = now()+999999999; state.cheese.shakeUntil = now()+700;
        const l = state.cheese.leftWord, r = state.cheese.rightWord;
        state.cheese.missedAnswers = { left: l.target, right: r.target };
        state.cheese.pausedForMiss = true;
      }
      state.cheese.item = null; spawnCheeseItem();
      if (state.cheese.pausedForMiss && state.cheese.item) {
        state.cheese.item.y = 40;
      }
    } else {
      // avoided mold or missed cheese
      if (it.type==='cheese') {
        // チーズを拾えなかった場合もミス扱い
        state.score = Math.max(0, state.score-50);
        state.cheese.wrongCount++;
        state.cheese.feedbackTitle = 'Missed Cheese'; state.cheese.feedbackPenalty = 50;
        state.cheese.feedbackUntil = now()+800; state.cheese.shakeUntil = now()+700;
        const l = state.cheese.leftWord, r = state.cheese.rightWord;
        state.cheese.missedAnswers = { left: l.target, right: r.target };
        // ミス画面で一時停止
        state.cheese.pausedForMiss = true;
        state.cheese.feedbackUntil = now()+999999999; // 非常に長い時間（再開ボタンで解除）
        // 降ってくるオブジェクトを一番上に戻す
        if (state.cheese.item) {
          state.cheese.item.y = 40;
        }
      }
      state.cheese.item = null; spawnCheeseItem();
    }
  } else if (it.y > LOGICAL_CHEESE_H + 20) {
    // fell off screen（論理座標）
    if (it.type==='cheese') {
      // チーズが落ちた場合もミス扱い
      state.score = Math.max(0, state.score-50);
      state.cheese.wrongCount++;
      state.cheese.feedbackTitle = 'Missed Cheese'; state.cheese.feedbackPenalty = 50;
      state.cheese.feedbackUntil = now()+999999999; // 非常に長い時間（再開ボタンで解除）
      state.cheese.shakeUntil = now()+700;
      const l = state.cheese.leftWord, r = state.cheese.rightWord;
      state.cheese.missedAnswers = { left: l.target, right: r.target };
      // ミス画面で一時停止
      state.cheese.pausedForMiss = true;
      // 降ってくるオブジェクトを一番上に戻す（新しいアイテムが生成される前に）
    }
    state.cheese.item = null; spawnCheeseItem();
    // チーズが落ちた場合、新しいアイテムを生成した後、一番上に戻す
    if (state.cheese.pausedForMiss && state.cheese.item) {
      state.cheese.item.y = 40;
    }
  }
};
const tickCheese = () => {
  if (state.mode!=='cheese' || !state.cheese.running) return;
  if (!state.paused && !state.cheese.pausedForMiss) {
    updateCheese();
  }
  drawCheese();
  // update HUD: 出題数・正答数・誤答数・スコア
  if (cheeseQuestionsShownEl) cheeseQuestionsShownEl.textContent = state.cheese.questionsShown;
  if (cheeseCorrectCountEl) cheeseCorrectCountEl.textContent = state.cheese.correctCount;
  if (cheeseWrongCountEl) cheeseWrongCountEl.textContent = state.cheese.wrongCount;
  scoreEl.textContent = Math.floor(state.score);
  requestAnimationFrame(tickCheese);
};
