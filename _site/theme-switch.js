document.addEventListener('DOMContentLoaded', () => {
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const html = document.documentElement;
  const apply = dark => {
    html.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  };
  apply(stored ? stored === 'dark' : prefersDark);
  document.getElementById('theme-toggle').addEventListener('click', () => apply(!html.classList.contains('dark')));
  document.getElementById('sidebar-open').addEventListener('click', () => document.getElementById('sidebar').classList.remove('translate-x-full'));
  document.getElementById('sidebar-close').addEventListener('click', () => document.getElementById('sidebar').classList.add('translate-x-full'));
});
