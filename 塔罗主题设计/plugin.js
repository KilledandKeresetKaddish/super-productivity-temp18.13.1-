/* ============================================================
 * Tarot Gold Theme v1.9 for Super Productivity
 * 注入 <style>（塔罗金主题 / 项目色细条月历 / 星空毛玻璃）
 * + 月视图按时间排序（仅写 style.order，零 DOM 搬动）
 * + 浏览器标签页 favicon 替换（可自定义 FAVICON 常量）
 * 不读取、不修改任何任务数据。
 * ============================================================ */
(function () {
  'use strict';
  var STYLE_ID = 'sup-tarot-gold-theme-style';
  var removed = false;
  var SORT_MONTH_EVENTS = true;
  var FAVICON =
    'data:image/png;base64,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';

  var CSS = `
/* ============================================================
   TAROT GOLD v1.9 — Super Productivity 主题
   分层策略:手机(body.isTouchOnly)只吃零开销静态样式;
   持续动画只在桌面网页(body:not(.isTouchOnly))出现。
   近黑紫底 / 发丝金线 / 星空毛玻璃 / 金箔流光 / 紧凑月历
   载体：SP 插件注入（plugin.js 内嵌本文件）
   建议：深色模式；Theme 下拉保持 Default/Dark（勿叠 Rainbow）
   ============================================================ */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Spline+Sans+Mono:wght@400;500&display=swap');

/* ---------- 0) 塔罗 token（skill 原值，唯一的十六进制来源） ---------- */
body {
  --tarot-bg: #0c0b10;
  --tarot-bg2: #100e16;
  --tarot-gold: #c79a4f;
  --tarot-gold-rgb: 199, 154, 79;
  --tarot-gold-bright: #e8cb8c;
  --tarot-gold-line: #b08d4c;
  --tarot-gold-dim: #7a6334;
  --tarot-ink: #e8cb8c;
  --tarot-muted: #9d8a5e;
  --tarot-h1: #f3e3bd;
  --tarot-danger: #d9776b;
  --tarot-ok: #7fae6f;
  --tarot-serif: 'Cormorant Garamond', 'Noto Serif SC', 'Source Han Serif SC',
    'Songti SC', 'STSong', Georgia, serif;
  --tarot-mono: 'Spline Sans Mono', 'SF Mono', Consolas, monospace;
  /* 毛玻璃强度总开关：想关掉模糊就把下面改成 0px */
  --tarot-blur: 14px;
  /* 月视图细条：条高与字号（嫌小/嫌大就改这两个） */
  --tarot-strip-h: 16px;
  --tarot-strip-font: 10.5px;
}

/* ---------- 1) SP 官方主题变量（半透明化 → 星空壁纸可透出） ---------- */
body,
body.isDarkTheme {
  --bg: rgba(12, 11, 16, 0.58);
  --bg-darker: rgba(8, 7, 12, 0.5);
  --card-bg: rgba(19, 16, 25, 0.5);
  --text-color: var(--tarot-ink);
  --text-color-muted: var(--tarot-muted);
  --divider-color: rgba(var(--tarot-gold-rgb), 0.22);
  --c-primary: var(--tarot-gold);
  --c-accent: var(--tarot-gold-bright);
  --c-warn: var(--tarot-danger);
  --card-border-radius: 10px;
  --card-shadow: 0 0 0 1px rgba(var(--tarot-gold-rgb), 0.26),
    0 2px 10px rgba(0, 0, 0, 0.45);
  --color-success: var(--tarot-ok);
  --color-danger: var(--tarot-danger);
  --color-warning: #d9b06a;
  --select-hover-bg: rgba(var(--tarot-gold-rgb), 0.1);
}

/* ---------- 2) Material 令牌（表层半透明、弹层保持高可读） ---------- */
body {
  --mat-sys-primary: var(--tarot-gold);
  --mat-sys-on-primary: #161006;
  --mat-sys-primary-container: #2a2113;
  --mat-sys-on-primary-container: var(--tarot-gold-bright);
  --mat-sys-secondary: var(--tarot-gold-line);
  --mat-sys-on-secondary: #161006;
  --mat-sys-tertiary: var(--tarot-gold-bright);
  --mat-sys-surface: rgba(15, 13, 21, 0.45);
  --mat-sys-on-surface: var(--tarot-ink);
  --mat-sys-surface-container-lowest: rgba(10, 9, 16, 0.55);
  --mat-sys-surface-container-low: rgba(16, 14, 22, 0.6);
  --mat-sys-surface-container: rgba(19, 16, 25, 0.7);
  --mat-sys-surface-container-high: rgba(23, 19, 32, 0.85);
  --mat-sys-surface-container-highest: rgba(27, 22, 38, 0.92);
  --mat-sys-on-surface-variant: var(--tarot-muted);
  --mat-sys-outline: rgba(var(--tarot-gold-rgb), 0.4);
  --mat-sys-outline-variant: rgba(var(--tarot-gold-rgb), 0.22);
  --mat-sys-error: var(--tarot-danger);
  --mat-sys-on-error: #1a0c0a;
  --mat-sys-inverse-surface: var(--tarot-gold-bright);
  --mat-sys-inverse-on-surface: #161006;
  --mat-sys-surface-tint: var(--tarot-gold);
  --palette-primary-50: #f7efdd;
  --palette-primary-100: #eee0bd;
  --palette-primary-200: #e3cd97;
  --palette-primary-300: #d8ba71;
  --palette-primary-400: #cfaa58;
  --palette-primary-500: #c79a4f;
  --palette-primary-600: #b98b43;
  --palette-primary-700: #a87737;
  --palette-primary-800: #96652c;
  --palette-primary-900: #7a4e1f;
  --palette-accent-500: #d9b06a;
  --palette-warn-500: #d9776b;
  --palette-primary-contrast-500: #161006;
}

/* ---------- 3) 毛玻璃（深紫玻璃，非彩虹；块选稳定的 Material 外壳） ---------- */
.mat-toolbar,
mat-sidenav,
.mat-drawer,
.mat-mdc-card,
.mat-mdc-dialog-surface,
.mat-mdc-menu-panel,
.mat-mdc-select-panel,
.mat-bottom-sheet-container {
  -webkit-backdrop-filter: blur(var(--tarot-blur)) saturate(1.08);
  backdrop-filter: blur(var(--tarot-blur)) saturate(1.08);
}
.mat-toolbar {
  background: rgba(14, 12, 19, 0.55);
  border-bottom: 1px solid rgba(var(--tarot-gold-rgb), 0.22);
}
.mat-mdc-menu-panel,
.mat-mdc-select-panel {
  background: rgba(20, 17, 27, 0.9) !important;
  border: 1px solid rgba(var(--tarot-gold-rgb), 0.3);
}

/* ---------- 4) 排版：衬线标题 + 金箔流光（仅 h1，克制） ---------- */
h1,
h2,
h3,
.mat-mdc-dialog-title,
.mat-toolbar h1 {
  font-family: var(--tarot-serif) !important;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: var(--tarot-h1);
  text-shadow: 0 0 14px rgba(var(--tarot-gold-rgb), 0.18);
}
@media (prefers-reduced-motion: no-preference) {
  h1 {
    background: linear-gradient(
      100deg,
      #e8cb8c 0%,
      #f6ead0 26%,
      #c79a4f 50%,
      #e8cb8c 74%,
      #f3e3bd 100%
    );
    background-size: 220% 100%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: none;
  }
  /* v1.9: 金箔流光动画只在桌面网页跑;手机上是静态金箔渐变(一次绘制,零耗电) */
  body:not(.isTouchOnly) h1 {
    animation: tarotFoil 8s linear infinite;
  }
  @keyframes tarotFoil {
    from { background-position: 0% 0; }
    to { background-position: 220% 0; }
  }
}
a { color: var(--tarot-gold-bright); }
a:hover { color: var(--tarot-h1); }
code {
  color: var(--tarot-gold-bright);
  background: rgba(var(--tarot-gold-rgb), 0.08);
  border: 1px solid rgba(var(--tarot-gold-rgb), 0.2);
  border-radius: 5px;
  padding: 1px 5px;
}

/* ---------- 5) 氛围小件（skill 同款手法） ---------- */
::selection { background: rgba(var(--tarot-gold-rgb), 0.28); color: var(--tarot-h1); }
* { scrollbar-width: thin; scrollbar-color: rgba(var(--tarot-gold-rgb), 0.5) transparent; }
::-webkit-scrollbar { width: 5px; height: 5px; }
::-webkit-scrollbar-thumb { background: rgba(var(--tarot-gold-rgb), 0.45); border-radius: 3px; }
::-webkit-scrollbar-track { background: transparent; }
:focus-visible { outline: 1px solid var(--tarot-gold); outline-offset: 2px; }

/* 对话框：签名式双层描边 */
.mat-mdc-dialog-surface {
  position: relative;
  background-color: rgba(16, 13, 22, 0.82) !important;
  border: 1px solid var(--tarot-gold-line) !important;
  border-radius: 12px !important;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.6) !important;
}
.mat-mdc-dialog-surface::before {
  content: '';
  position: absolute;
  inset: 6px;
  border: 1px solid rgba(var(--tarot-gold-rgb), 0.3);
  border-radius: 8px;
  pointer-events: none;
  z-index: 0;
}

/* ---------- 6) 日历·周/日视图：轻量化（保留高度=时长，项目色描边） ---------- */
schedule-event .ico-wrapper,
schedule-event mat-icon,
schedule-event .time-badge,
schedule-event .day-of-month,
schedule-event .time,
schedule-event time {
  display: none !important;
}
schedule-event {
  font-size: 11px !important;
  line-height: 1.3 !important;
  padding: 1px 5px !important;
  border-radius: 4px !important;
  border: 1px solid color-mix(in srgb, var(--project-color, #c79a4f) 60%, transparent) !important;
  background: color-mix(in srgb, var(--project-color, #c79a4f) 18%, rgba(12, 11, 16, 0.5)) !important;
  box-shadow: none !important;
}
schedule-event:hover {
  border-color: color-mix(in srgb, var(--project-color, #c79a4f) 90%, #ffffff) !important;
  box-shadow: 0 0 0 1px rgba(var(--tarot-gold-rgb), 0.3),
    0 0 14px rgba(var(--tarot-gold-rgb), 0.18) !important;
}

/* ---------- 7) 日历·月视图 v1.4：骑在原生布局上，只做化妆 ----------
   探针实证：原生本就是纵向堆叠（cell=flex column，事件=flex 单行省略），
   inline grid-area 是共享组件的惰性残留；第 4 条起被原生 nth-child 藏起。
   因此：不再覆盖任何 display/position/尺寸结构，只改配色、去图标、
   解除隐藏以启用原生滚动，并用 flex+order 实现按时间排序（JS 只写 order）。 */

/* 7a. 容器转 flex 列（仅为让 style.order 生效；其余尺寸/padding 全留原生） */
.month-day-events {
  display: flex !important;
  flex-direction: column !important;
  overscroll-behavior: contain; /* v1.7: v1.6 文档写了但没落地，本版补齐 */
}
.month-day-events::after {
  display: none !important; /* 隐藏原生 "+N more" 计数（条目已全部显示） */
}

/* 7b. 解除"每格只显示前 3 条"的原生隐藏 → 原生 overflow:auto 自然可滚 */
.month-day-events .month-event {
  display: block !important;
  flex: 0 0 auto !important; /* v1.7: 禁 flex 压缩，容器过矮时条子不许被挤扁/错位 */
  margin: 0 0 1px 0 !important;
  padding: 0 !important; /* v1.7: 中和 wrapper 一切原生占位（实测每条约 6px 幽灵高度，来源待 dump 定位） */
  min-height: 0 !important;
}
.month-day-events .month-event::before,
.month-day-events .month-event::after {
  content: none !important;
  display: none !important;
}

/* 7c. 细条化妆：项目色填充/描边、去悬停缩放（细条上会晃） */
schedule-event.month-schedule-event {
  height: var(--tarot-strip-h) !important;
  min-height: 0 !important;
  padding: 0 4px !important;
  font-size: var(--tarot-strip-font) !important;
  line-height: calc(var(--tarot-strip-h) - 2px) !important;
  border-radius: 2px !important;
  align-items: center !important;
  overflow: hidden !important;
  /* v1.7: 全态中和（v1.6 只在 :hover 关了 transform；margin/位移偏置从未清零） */
  margin: 0 !important;
  top: auto !important;
  bottom: auto !important;
  transform: none !important;
  box-sizing: border-box !important;
  background: color-mix(in srgb, var(--project-color, #c79a4f) 30%, #100e16) !important;
  border: 1px solid color-mix(in srgb, var(--project-color, #c79a4f) 65%, rgba(199, 154, 79, 0.2)) !important;
  color: #f0ead8 !important;
}
schedule-event.month-schedule-event:hover {
  opacity: 1 !important;
  transform: none !important;
  border-color: color-mix(in srgb, var(--project-color, #c79a4f) 90%, #ffffff) !important;
  box-shadow: 0 0 10px rgba(var(--tarot-gold-rgb), 0.22) !important;
}

/* v1.7: 元素检查实证条内存在 ::before；基础组件样式未 dump 前先一律灭掉 */
schedule-event.month-schedule-event::before,
schedule-event.month-schedule-event::after {
  content: none !important;
  display: none !important;
}

/* 7d. 只留标题：隐藏图标/时间徽章/日期小方块所在的 ico-wrapper */
schedule-event.month-schedule-event .ico-wrapper {
  display: none !important;
}
schedule-event.month-schedule-event .title,
schedule-event.month-schedule-event .title-text {
  min-width: 0 !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  white-space: nowrap !important;
  font-size: var(--tarot-strip-font) !important;
  line-height: calc(var(--tarot-strip-h) - 2px) !important;
}

/* 7d'. v1.8 根因修复（削头 BUG）：
   源码实证（schedule-event.component.scss）：.title 原生带
   --title-padding-y: 6px 上下内边距 + max-height: 100% 钳制。
   条子被压到 16px 后，文字行被这 6px 垫片向下推、再被 overflow:hidden
   裁掉（Chromium 裁下缘 / Firefox 视觉上"削头"），very-short-event
   因原生 padding 仅 1px 而幸免——与"部分日期正常"完全吻合。
   修复 = 月视图内清零 .title 的全部纵向占位，让 line-height 独自定高。 */
schedule-event.month-schedule-event .title {
  --title-padding-y: 0px;
  padding: 0 !important;
  margin: 0 !important;
  max-height: none !important;
  position: static !important; /* split-continued 变体原生为 absolute，一并归位 */
  transform: none !important;
  align-self: center !important;
}
schedule-event.month-schedule-event .title .title-text {
  display: block !important; /* 关掉 -webkit-box 行钳制路径，走标准单行省略 */
  max-height: none !important;
  padding: 0 !important;
  margin: 0 !important;
}

/* 7e. 日期数字轻微收敛 */
.month-day-header .month-day-number {
  font-size: 14px;
  opacity: 0.9;
}

/* ---------- 7f.（v1.8 移除）----------
   v1.7 的 translateZ(0) 绘制层隔离试验已删除：根因已定位为 .title
   原生 6px 纵向 padding（见 7d'），与绘制/合成无关（H3 出局）。 */

/* ---------- 8) Activity 热力图 → 菱形（通用选择器，best-effort） ---------- */
[class*='heatmap'] rect,
[class*='heat-map'] rect,
[class*='heatmap'] [class*='cell'],
[class*='heatmap'] [class*='square'],
[class*='heatmap'] [class*='day']:not([class*='label']):not([class*='name']) {
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  border-radius: 0 !important;
  rx: 0;
}

/* ============================================================
   v1.9 美化包 —— 性能纪律照抄官方 rainbow 主题:
   任务行是热路径 → 只用静态 border/box-shadow,零动画、零模糊;
   持续动画全部锁在 body:not(.isTouchOnly)(桌面网页)。
   ============================================================ */

/* ---------- 9) 任务卡片:塔罗发丝金线 + 状态辉光(全平台,全静态) ---------- */
body.isDarkTheme task .box {
  border: 1px solid rgba(var(--tarot-gold-rgb), 0.2);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  transition:
    border-color 0.18s ease,
    box-shadow 0.18s ease;
}
body.isDarkTheme task:hover .box,
body.isDarkTheme task .box:hover {
  border-color: rgba(var(--tarot-gold-rgb), 0.45);
  box-shadow: 0 0 10px rgba(var(--tarot-gold-rgb), 0.14);
}
body.isDarkTheme task.isSelected .box {
  border-color: rgba(var(--tarot-gold-rgb), 0.55);
  box-shadow: 0 0 12px rgba(var(--tarot-gold-rgb), 0.2);
}
/* 进行中任务:烛光描边(静态) */
body.isDarkTheme task.isCurrent .box {
  border-color: var(--tarot-gold);
  box-shadow:
    0 0 0 1px rgba(var(--tarot-gold-rgb), 0.35),
    0 0 14px rgba(var(--tarot-gold-rgb), 0.28);
}
/* 已完成任务:sealed(封印)——降透明 + 虚线发丝框 */
body.isDarkTheme task.isDone .box {
  opacity: 0.55;
  border-style: dashed;
  border-color: rgba(var(--tarot-gold-rgb), 0.16);
}

/* ---------- 10) Finish Day:静态柔光(全平台) + 桌面呼吸(仅网页端) ---------- */
.e2e-finish-day {
  box-shadow:
    0 0 14px rgba(var(--tarot-gold-rgb), 0.35),
    0 0 34px rgba(var(--tarot-gold-rgb), 0.14) !important;
  text-shadow: 0 0 10px rgba(22, 16, 6, 0.4);
}
@media (prefers-reduced-motion: no-preference) {
  body:not(.isTouchOnly) .e2e-finish-day {
    animation: tarotGlowBreathe 7s ease-in-out infinite;
  }
  @keyframes tarotGlowBreathe {
    0%,
    100% {
      box-shadow:
        0 0 12px rgba(var(--tarot-gold-rgb), 0.28),
        0 0 30px rgba(var(--tarot-gold-rgb), 0.1);
    }
    50% {
      box-shadow:
        0 0 20px rgba(var(--tarot-gold-rgb), 0.48),
        0 0 46px rgba(var(--tarot-gold-rgb), 0.2);
    }
  }
}

/* ---------- 11) 手机底栏:中央 + 按钮金辉(纯静态,零耗电) ---------- */
.mobile-bottom-nav {
  border-top: 1px solid rgba(var(--tarot-gold-rgb), 0.22);
}
.mobile-bottom-nav .add-task-button {
  border: 1px solid var(--tarot-gold-line) !important;
  box-shadow:
    0 0 0 1px rgba(var(--tarot-gold-rgb), 0.35),
    0 0 12px rgba(var(--tarot-gold-rgb), 0.4),
    0 0 26px rgba(var(--tarot-gold-rgb), 0.18) !important;
}

/* ---------- 12) iOS 键盘修复(方案 A):第三方输入法虚报高度封顶 ----------
   根因:SP 直接把 Capacitor keyboardWillShow 上报的高度写进
   --keyboard-height,无钳制;讯飞等第三方输入法在 iOS 上会虚报,
   输入条被顶到屏幕顶部。此处给偏移量封顶:最多抬到屏幕 45%。
   嫌还是太高就把两处 45 改小(如 42)。苹果原生键盘不受影响
   (其真实高度 ≈ 屏幕 40% 以内,够不到封顶线)。 */
body.isTouchOnly add-task-bar.global {
  bottom: min(calc(var(--keyboard-height, 0px) + var(--s2)), 45vh) !important;
  bottom: min(calc(var(--keyboard-height, 0px) + var(--s2)), 45dvh) !important;
}
`;

  function inject() {
    if (removed) return;
    try {
      var prev = document.getElementById(STYLE_ID);
      if (prev) prev.remove();
      var el = document.createElement('style');
      el.id = STYLE_ID;
      el.textContent = CSS;
      document.head.appendChild(el);
    } catch (e) {
      console.error('[tarot-gold-theme] inject failed', e);
    }
    setFavicon();
    orderCells();
  }

  function setFavicon() {
    try {
      if (!FAVICON || FAVICON.indexOf('data:image') !== 0) return;
      var links = document.querySelectorAll('link[rel*="icon"]');
      if (!links.length) {
        var l = document.createElement('link');
        l.rel = 'icon';
        document.head.appendChild(l);
        links = [l];
      }
      for (var i = 0; i < links.length; i++) {
        links[i].type = 'image/png';
        links[i].href = FAVICON;
      }
    } catch (e) {
      console.error('[tarot-gold-theme] favicon failed', e);
    }
  }

  function orderCells() {
    if (removed || !SORT_MONTH_EVENTS) return;
    try {
      var cells = document.querySelectorAll('.month-day-events');
      for (var c = 0; c < cells.length; c++) {
        /* 防御：内容并未超高却残留 scrollTop（滚轮误捕/滚动锚定）→ 归零 */
        var el = cells[c];
        if (el.scrollTop && el.scrollHeight - el.clientHeight <= 2) el.scrollTop = 0;
        var ws = cells[c].querySelectorAll(':scope > .month-event');
        for (var i = 0; i < ws.length; i++) {
          var ev = ws[i].querySelector('schedule-event');
          var r = ev ? parseInt(ev.style.gridRowStart, 10) : NaN;
          if (isNaN(r)) r = 9999;
          var o = String(r);
          if (ws[i].style.order !== o) ws[i].style.order = o;
        }
      }
    } catch (e) {
      console.error('[tarot-gold-theme] order failed', e);
    }
  }

  var mo = new MutationObserver(function () {
    clearTimeout(mo._t);
    mo._t = setTimeout(orderCells, 80);
  });
  mo.observe(document.body, { childList: true, subtree: true });

  inject();
  setTimeout(inject, 1500);

  var api =
    typeof PluginAPI !== 'undefined'
      ? PluginAPI
      : typeof plugin !== 'undefined'
        ? plugin
        : null;
  if (api && typeof api.onUnload === 'function') {
    api.onUnload(function () {
      removed = true;
      mo.disconnect();
      var el = document.getElementById(STYLE_ID);
      if (el) el.remove();
    });
  }
})();
