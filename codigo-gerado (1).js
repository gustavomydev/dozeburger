containerCardapio.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-acao]');
  if (!btn) return;
  // btn.dataset.acao === 'adicionar' | 'somar' | 'subtrair'
});