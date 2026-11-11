const subtotal = item.preco * item.qtd;
linhas.push(`${item.qtd}x ${item.nome} — ${formatarMoeda(subtotal)}`);
if (item.obs.trim()) {
  linhas.push(`   Obs: ${item.obs.trim()}`);
}