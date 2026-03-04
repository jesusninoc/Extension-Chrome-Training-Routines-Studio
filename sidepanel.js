const JSON_URL_DEFAULT = 'https://www.jesusninoc.com/rutinas2.json';
const STORAGE_KEY = 'training-routines-studio-state';

const weekdays = [
  { id: 1, short: 'Lun', full: 'Lunes' },
  { id: 2, short: 'Mar', full: 'Martes' },
  { id: 3, short: 'Mié', full: 'Miércoles' },
  { id: 4, short: 'Jue', full: 'Jueves' },
  { id: 5, short: 'Vie', full: 'Viernes' },
  { id: 6, short: 'Sáb', full: 'Sábado' },
  { id: 7, short: 'Dom', full: 'Domingo' }
];

const muscleGroups = {
  1: { name: 'Full body', icon: '🏋️' },
  2: { name: 'Pierna', icon: '🦵' },
  3: { name: 'Pecho', icon: '🫀' },
  4: { name: 'Hombro', icon: '💪' },
  5: { name: 'Espalda', icon: '🦍' },
  6: { name: 'Bíceps', icon: '🔥' },
  7: { name: 'Tríceps', icon: '⚡' },
  8: { name: 'Antebrazo', icon: '✋' },
  9: { name: 'Abdominales', icon: '🌀' }
};

const fallbackData = [
  { dia: '1', tipo: '1', rutina: 'Levantamiento pendular' },
  { dia: '1', tipo: '1', rutina: 'Peso muerto' },
  { dia: '1', tipo: '1', rutina: 'Hombro arrancada' },
  { dia: '1', tipo: '2', rutina: 'Goma en rodilla cuádriceps' },
  { dia: '1', tipo: '2', rutina: 'Sentadilla' },
  { dia: '1', tipo: '2', rutina: 'Zancada' },
  { dia: '2', tipo: '2', rutina: 'Empujar pared' },
  { dia: '2', tipo: '2', rutina: 'Movimientos laterales' },
  { dia: '2', tipo: '2', rutina: 'Isométrico sentado' },
  { dia: '2', tipo: '2', rutina: 'Estirar goma rodilla' },
  { dia: '2', tipo: '2', rutina: 'Estirar goma tumbado' },
  { dia: '2', tipo: '2', rutina: 'Femoral tumbado' },
  { dia: '2', tipo: '2', rutina: 'Gemelo subir' },
  { dia: '3', tipo: '2', rutina: 'Levantar goma con coz' },
  { dia: '3', tipo: '2', rutina: 'Tijeras' },
  { dia: '3', tipo: '2', rutina: 'Extensión rodilla' },
  { dia: '3', tipo: '3', rutina: 'Aperturas' },
  { dia: '3', tipo: '3', rutina: 'Contractora' },
  { dia: '3', tipo: '3', rutina: 'Cruce polea' },
  { dia: '3', tipo: '3', rutina: 'Goma pecho superior' },
  { dia: '3', tipo: '3', rutina: 'Goma pecho medio' },
  { dia: '3', tipo: '3', rutina: 'Goma pecho bajo' },
  { dia: '4', tipo: '3', rutina: 'Fondos' },
  { dia: '4', tipo: '4', rutina: 'Elevación lateral' },
  { dia: '4', tipo: '4', rutina: 'Elevación frontal' },
  { dia: '4', tipo: '4', rutina: 'Estirar goma desde abajo' },
  { dia: '4', tipo: '4', rutina: 'Encogimiento' },
  { dia: '4', tipo: '4', rutina: 'Pájaro' },
  { dia: '4', tipo: '5', rutina: 'Estirar goma retroversión' },
  { dia: '5', tipo: '5', rutina: 'Dominadas lastre' },
  { dia: '5', tipo: '5', rutina: 'Remo' },
  { dia: '5', tipo: '5', rutina: 'Muscle Ups' },
  { dia: '5', tipo: '5', rutina: 'Jalón' },
  { dia: '5', tipo: '5', rutina: 'Jalón invertido' },
  { dia: '5', tipo: '5', rutina: 'Remo mayor estiramiento' },
  { dia: '5', tipo: '5', rutina: 'Remo desde abajo' },
  { dia: '5', tipo: '6', rutina: 'Goma a la cabeza' },
  { dia: '5', tipo: '6', rutina: 'Goma desde abajo sentado' },
  { dia: '5', tipo: '6', rutina: 'Goma atada en silla' },
  { dia: '6', tipo: '7', rutina: 'Goma estirada' },
  { dia: '6', tipo: '7', rutina: 'Fondos' },
  { dia: '6', tipo: '7', rutina: 'Tumbarse y traer cuerda' },
  { dia: '6', tipo: '7', rutina: 'Goma estirada desde parte inferior' },
  { dia: '6', tipo: '7', rutina: 'Estirar tipo coz' },
  { dia: '7', tipo: '8', rutina: 'Acercar goma movimiento muñeca' },
  { dia: '7', tipo: '9', rutina: 'Rueda' },
  { dia: '7', tipo: '9', rutina: 'Girar para abdominal' },
  { dia: '7', tipo: '9', rutina: 'Rueda parada final' },
  { dia: '7', tipo: '9', rutina: 'Rueda de pie' },
  { dia: '7', tipo: '9', rutina: 'Goma abdominales laterales' }
];

const els = {
  sourceInput: document.getElementById('sourceInput'),
  reloadBtn: document.getElementById('reloadBtn'),
  exportBtn: document.getElementById('exportBtn'),
  totalExercises: document.getElementById('totalExercises'),
  todayCount: document.getElementById('todayCount'),
  todayLabel: document.getElementById('todayLabel'),
  loadInfo: document.getElementById('loadInfo'),
  progressRing: document.getElementById('progressRing'),
  progressPercent: document.getElementById('progressPercent'),
  searchInput: document.getElementById('searchInput'),
  groupFilter: document.getElementById('groupFilter'),
  favoriteOnly: document.getElementById('favoriteOnly'),
  resetDayBtn: document.getElementById('resetDayBtn'),
  status: document.getElementById('status'),
  dayTabs: document.getElementById('dayTabs'),
  daySummary: document.getElementById('daySummary'),
  randomBtn: document.getElementById('randomBtn'),
  challengeCard: document.getElementById('challengeCard'),
  completionText: document.getElementById('completionText'),
  routineList: document.getElementById('routineList'),
  historyList: document.getElementById('historyList'),
  clearHistoryBtn: document.getElementById('clearHistoryBtn')
};

const state = {
  routines: [],
  selectedDay: getTodayId(),
  search: '',
  group: 'all',
  favoriteOnly: false,
  favorites: {},
  completed: {},
  history: [],
  lastLoadedAt: null,
  lastSource: JSON_URL_DEFAULT,
  lastChallengeId: null
};

function getTodayId() {
  const nativeDay = new Date().getDay();
  return nativeDay === 0 ? 7 : nativeDay;
}

function setStatus(text, mode = 'idle') {
  els.status.textContent = text;
  els.status.className = `status ${mode}`;
}

function normalizeItem(item, index) {
  const day = Number.parseInt(String(item.dia).trim(), 10);
  const group = Number.parseInt(String(item.tipo).trim(), 10);
  const name = String(item.rutina || '').trim();
  return {
    id: `${day}-${group}-${name}-${index}`,
    day,
    group,
    name,
    groupName: muscleGroups[group]?.name || 'Sin clasificar',
    icon: muscleGroups[group]?.icon || '🏃'
  };
}

async function readStorage() {
  const saved = await chrome.storage.local.get(STORAGE_KEY);
  if (saved[STORAGE_KEY]) {
    Object.assign(state, saved[STORAGE_KEY]);
  }
}

async function writeStorage() {
  await chrome.storage.local.set({ [STORAGE_KEY]: {
    selectedDay: state.selectedDay,
    search: state.search,
    group: state.group,
    favoriteOnly: state.favoriteOnly,
    favorites: state.favorites,
    completed: state.completed,
    history: state.history.slice(0, 20),
    lastLoadedAt: state.lastLoadedAt,
    lastSource: state.lastSource,
    lastChallengeId: state.lastChallengeId
  } });
}

async function fetchRoutines(sourceUrl) {
  const response = await fetch(sourceUrl, { cache: 'no-store' });
  if (!response.ok) {
    throw new Error(`Respuesta ${response.status}`);
  }
  const raw = await response.json();
  if (!Array.isArray(raw)) {
    throw new Error('El JSON no contiene una lista.');
  }
  return raw.map(normalizeItem).filter(item => item.day >= 1 && item.day <= 7 && item.name);
}

function loadFallbackRoutines() {
  return fallbackData.map(normalizeItem).filter(item => item.day >= 1 && item.day <= 7 && item.name);
}

function currentDayItems() {
  return state.routines.filter(item => item.day === state.selectedDay);
}

function filteredItems() {
  return currentDayItems().filter(item => {
    if (state.group !== 'all' && String(item.group) !== state.group) return false;
    if (state.favoriteOnly && !state.favorites[item.id]) return false;
    if (state.search) {
      const hay = `${item.name} ${item.groupName}`.toLowerCase();
      if (!hay.includes(state.search.toLowerCase())) return false;
    }
    return true;
  });
}

function completedCountForDay(dayId) {
  return currentListByDay(dayId).filter(item => state.completed[item.id]).length;
}

function currentListByDay(dayId) {
  return state.routines.filter(item => item.day === dayId);
}

function progressForDay(dayId) {
  const items = currentListByDay(dayId);
  if (!items.length) return 0;
  return Math.round((completedCountForDay(dayId) / items.length) * 100);
}

function updateRing(percent) {
  const circumference = 289;
  const offset = circumference - (circumference * percent / 100);
  els.progressRing.style.strokeDashoffset = `${offset}`;
  els.progressPercent.textContent = `${percent}%`;
}

function renderStats() {
  const todayDay = getTodayId();
  const todayItems = currentListByDay(todayDay);
  const selectedItems = currentListByDay(state.selectedDay);
  const progress = progressForDay(state.selectedDay);
  const loadedText = state.lastLoadedAt
    ? `Última carga: ${new Date(state.lastLoadedAt).toLocaleString('es-ES')}`
    : 'Sin cargas registradas';

  els.totalExercises.textContent = String(state.routines.length);
  els.todayCount.textContent = String(todayItems.length);
  els.todayLabel.textContent = `Hoy: ${weekdays.find(d => d.id === todayDay)?.full || '—'}`;
  els.loadInfo.textContent = loadedText;
  els.daySummary.textContent = `${selectedItems.length} ejercicios`;
  els.completionText.textContent = `${completedCountForDay(state.selectedDay)} completados`;
  updateRing(progress);
}

function renderGroupFilter() {
  const selected = state.group;
  els.groupFilter.innerHTML = '<option value="all">Todos los grupos</option>';
  Object.entries(muscleGroups).forEach(([id, info]) => {
    const option = document.createElement('option');
    option.value = id;
    option.textContent = `${info.icon} ${info.name}`;
    if (selected === id) option.selected = true;
    els.groupFilter.appendChild(option);
  });
}

function renderDayTabs() {
  els.dayTabs.innerHTML = '';
  weekdays.forEach(day => {
    const count = currentListByDay(day.id).length;
    const btn = document.createElement('button');
    btn.className = `day-tab${state.selectedDay === day.id ? ' active' : ''}`;
    btn.innerHTML = `<strong>${day.short}</strong><span>${count} ejercicios</span>`;
    btn.addEventListener('click', async () => {
      state.selectedDay = day.id;
      await writeStorage();
      renderAll();
    });
    els.dayTabs.appendChild(btn);
  });
}

function renderChallenge() {
  const baseList = filteredItems().length ? filteredItems() : currentDayItems();
  if (!baseList.length) {
    els.challengeCard.innerHTML = '<div class="empty">No hay ejercicios disponibles para el filtro actual.</div>';
    return;
  }

  let chosen = baseList.find(item => item.id === state.lastChallengeId);
  if (!chosen) {
    chosen = baseList[Math.floor(Math.random() * baseList.length)];
    state.lastChallengeId = chosen.id;
    writeStorage();
  }

  const reps = 8 + (chosen.group * 2);
  const rounds = Math.max(2, Math.min(5, Math.ceil(chosen.name.length / 8)));
  els.challengeCard.innerHTML = `
    <h3>${chosen.icon} ${chosen.name}</h3>
    <p>Convierte este ejercicio en un mini reto rápido: mantén buena técnica y úsalo como bloque exprés para clase, demostración o rutina personal.</p>
    <div class="challenge-meta">
      <span>${chosen.groupName}</span>
      <span>${rounds} rondas</span>
      <span>${reps} repeticiones objetivo</span>
    </div>
  `;
}

function renderRoutineList() {
  const items = filteredItems();
  els.routineList.innerHTML = '';

  if (!items.length) {
    els.routineList.innerHTML = '<div class="empty">No hay ejercicios para ese filtro. Prueba otro día, otro grupo o quita “solo favoritos”.</div>';
    return;
  }

  items.forEach(item => {
    const card = document.createElement('div');
    const isFavorite = !!state.favorites[item.id];
    const isCompleted = !!state.completed[item.id];
    card.className = `exercise-card${isCompleted ? ' completed' : ''}`;
    card.innerHTML = `
      <div class="exercise-top">
        <div class="exercise-left">
          <div class="icon-badge">${item.icon}</div>
          <div>
            <h3>${item.name}</h3>
            <p>${item.groupName} · Día ${item.day} · ${weekdays.find(d => d.id === item.day)?.full || ''}</p>
          </div>
        </div>
        <div class="exercise-actions">
          <button class="ghost icon-btn fav${isFavorite ? ' active' : ''}" title="Favorito">★</button>
          <button class="ghost icon-btn toggle-btn done${isCompleted ? ' active' : ''}" title="Completar">✓</button>
        </div>
      </div>
      <div class="exercise-bottom">
        <span class="micro-pill">ID: ${item.id.split('-').slice(0, 3).join('-')}</span>
        <span class="micro-pill">${isCompleted ? 'Marcado como hecho' : 'Pendiente'}</span>
      </div>
    `;

    card.querySelector('.fav').addEventListener('click', async () => {
      if (state.favorites[item.id]) {
        delete state.favorites[item.id];
      } else {
        state.favorites[item.id] = true;
      }
      await writeStorage();
      renderAll();
    });

    card.querySelector('.done').addEventListener('click', async () => {
      if (state.completed[item.id]) {
        delete state.completed[item.id];
      } else {
        state.completed[item.id] = new Date().toISOString();
      }
      await pushHistory(item);
      await writeStorage();
      renderAll();
    });

    els.routineList.appendChild(card);
  });
}

async function pushHistory(item) {
  state.history.unshift({
    id: `${item.id}-${Date.now()}`,
    title: item.name,
    groupName: item.groupName,
    day: item.day,
    source: state.lastSource,
    at: new Date().toISOString()
  });
  state.history = state.history.slice(0, 20);
}

function renderHistory() {
  els.historyList.innerHTML = '';
  if (!state.history.length) {
    els.historyList.innerHTML = '<div class="empty">Aún no hay actividad. Marca ejercicios como completados y aquí quedará el registro.</div>';
    return;
  }

  state.history.forEach(entry => {
    const dayName = weekdays.find(day => day.id === entry.day)?.full || `Día ${entry.day}`;
    const div = document.createElement('div');
    div.className = 'history-item';
    div.innerHTML = `
      <div class="history-top">
        <strong>${entry.title}</strong>
        <span class="micro-pill">${new Date(entry.at).toLocaleString('es-ES')}</span>
      </div>
      <p>${entry.groupName} · ${dayName}</p>
      <span class="history-url">Fuente: ${entry.source}</span>
    `;
    els.historyList.appendChild(div);
  });
}

function renderAll() {
  renderStats();
  renderGroupFilter();
  renderDayTabs();
  renderChallenge();
  renderRoutineList();
  renderHistory();
}

async function loadData(forceUrl) {
  const sourceUrl = (forceUrl || els.sourceInput.value || JSON_URL_DEFAULT).trim() || JSON_URL_DEFAULT;
  state.lastSource = sourceUrl;
  setStatus('Cargando rutinas desde el JSON…', 'work');

  try {
    state.routines = await fetchRoutines(sourceUrl);
    state.lastLoadedAt = new Date().toISOString();
    await writeStorage();
    setStatus(`Rutinas cargadas correctamente desde ${new URL(sourceUrl).hostname}.`, 'good');
  } catch (error) {
    state.routines = loadFallbackRoutines();
    state.lastLoadedAt = new Date().toISOString();
    await writeStorage();
    setStatus(`No se pudo leer el JSON remoto (${error.message}). Se ha cargado una copia local de respaldo.`, 'bad');
  }

  renderAll();
}

function sanitizeFilename(value) {
  return value.replace(/[^a-z0-9_-]+/gi, '-').replace(/-+/g, '-').replace(/^-|-$/g, '').toLowerCase();
}

function exportCurrentDay() {
  const day = weekdays.find(item => item.id === state.selectedDay);
  const items = filteredItems();
  if (!items.length) {
    setStatus('No hay ejercicios para exportar con el filtro actual.', 'bad');
    return;
  }

  const lines = [
    `Training Routines Studio`,
    `Día: ${day?.full || state.selectedDay}`,
    `Fuente: ${state.lastSource}`,
    `Generado: ${new Date().toLocaleString('es-ES')}`,
    ''
  ];

  items.forEach((item, index) => {
    lines.push(`${index + 1}. ${item.name} [${item.groupName}]${state.completed[item.id] ? ' ✓' : ''}${state.favorites[item.id] ? ' ★' : ''}`);
  });

  const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `rutina-${sanitizeFilename(day?.full || `dia-${state.selectedDay}`)}.txt`;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  setStatus('Rutina exportada en TXT.', 'good');
}

async function resetCurrentDayProgress() {
  currentListByDay(state.selectedDay).forEach(item => {
    delete state.completed[item.id];
  });
  await writeStorage();
  renderAll();
  setStatus('Se ha reiniciado el progreso del día seleccionado.', 'good');
}

async function clearHistory() {
  state.history = [];
  await writeStorage();
  renderHistory();
  setStatus('Historial borrado.', 'good');
}

function bindEvents() {
  els.reloadBtn.addEventListener('click', () => loadData());
  els.exportBtn.addEventListener('click', exportCurrentDay);
  els.randomBtn.addEventListener('click', async () => {
    state.lastChallengeId = null;
    await writeStorage();
    renderChallenge();
  });
  els.resetDayBtn.addEventListener('click', resetCurrentDayProgress);
  els.clearHistoryBtn.addEventListener('click', clearHistory);

  els.searchInput.addEventListener('input', async (event) => {
    state.search = event.target.value.trim();
    await writeStorage();
    renderAll();
  });

  els.groupFilter.addEventListener('change', async (event) => {
    state.group = event.target.value;
    await writeStorage();
    renderAll();
  });

  els.favoriteOnly.addEventListener('change', async (event) => {
    state.favoriteOnly = event.target.checked;
    await writeStorage();
    renderAll();
  });
}

async function init() {
  await readStorage();
  els.sourceInput.value = state.lastSource || JSON_URL_DEFAULT;
  els.searchInput.value = state.search || '';
  els.favoriteOnly.checked = !!state.favoriteOnly;
  renderGroupFilter();
  bindEvents();
  await loadData(state.lastSource || JSON_URL_DEFAULT);
}

init();
