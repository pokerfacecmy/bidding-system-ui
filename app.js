/**
 * 招投标全流程 AI 辅助系统 — 原型交互脚本
 */

const PANEL_NAMES = {
  overview: '首页概览看板',
  collect: '② 数据收集',
  download: '③ 招标信息下载与存储',
  extract: '④ 整理提取',
  match: '⑤ 数据匹配比对分析',
  push: '⑥ 消息推送',
  project: '⑦ 投标项目管理',
  parse: '⑧ 招标文件智能解析',
  generate: '⑨ 标书内容智能生成与辅助编写',
  review: '⑩ 智能审查与废标审查',
  score: '⑪ 评分标准智能评分测算',
  docgen: '⑫ 投标文件生成',
  audit: '⑬ 投标文件审核',
  library: '⑭ 数据资料库',
  admin: '⑮ 系统管理运维',
  security: '⑯ 系统安全与合规',
};

function formatDate() {
  const now = new Date();
  const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${y}年${m}月${d}日 ${weekdays[now.getDay()]}`;
}

function showPanel(panelId) {
  const overviewPanel = document.getElementById('panel-overview');
  const placeholderPanel = document.getElementById('panel-placeholder');
  const pageTitle = document.getElementById('pageTitle');
  const pageBadge = document.querySelector('.page-badge');
  const placeholderTitle = document.getElementById('placeholderTitle');
  const placeholderDesc = document.getElementById('placeholderDesc');

  document.querySelectorAll('.nav-item[data-panel], .nav-sub-item').forEach((el) => {
    el.classList.remove('active');
  });

  if (panelId === 'overview') {
    overviewPanel.classList.add('active');
    placeholderPanel.classList.remove('active');
    pageTitle.textContent = '首页概览看板';
    pageBadge.textContent = '模块① · P0';
    pageBadge.style.display = '';
    document.querySelector('[data-panel="overview"]')?.classList.add('active');
  } else {
    overviewPanel.classList.remove('active');
    placeholderPanel.classList.add('active');
    const name = PANEL_NAMES[panelId] || '未知模块';
    pageTitle.textContent = name;
    pageBadge.style.display = 'none';
    placeholderTitle.textContent = name;
    placeholderDesc.textContent = `「${name}」模块功能将在后续迭代中实现。当前原型完整实现了模块①「首页概览看板」的全部 P0 功能点。`;
    document.querySelector(`[data-panel="${panelId}"]`)?.classList.add('active');
  }
}

function initNavGroups() {
  document.querySelectorAll('.nav-group-toggle').forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const group = toggle.dataset.group;
      const sub = document.querySelector(`[data-sub="${group}"]`);
      if (!sub) return;
      const collapsed = sub.classList.toggle('collapsed');
      toggle.classList.toggle('expanded', !collapsed);
    });
  });
}

function initNavigation() {
  document.querySelectorAll('[data-panel]').forEach((btn) => {
    btn.addEventListener('click', () => {
      showPanel(btn.dataset.panel);
    });
  });

  document.querySelector('[data-back="overview"]')?.addEventListener('click', () => {
    showPanel('overview');
  });
}

function init() {
  document.getElementById('currentDate').textContent = formatDate();
  initNavGroups();
  initNavigation();
}

document.addEventListener('DOMContentLoaded', init);
