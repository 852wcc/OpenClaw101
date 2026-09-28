// script.js — 頁面互動邏輯
const btn = document.getElementById('btn');
const message = document.getElementById('message');

const messages = [
  '你撳咗我！👆',
  '純 JavaScript 互動例子。',
  'GitHub Pages 上到線！🚀',
];

let index = 0;

btn.addEventListener('click', () => {
  message.textContent = messages[index % messages.length];
  index += 1;
});