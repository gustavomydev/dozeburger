// Sexta: abre 1080min (18h), fecha 1440min (24h = 00h do dia seguinte)
const HORARIOS = {
  3: { abre: 1080, fecha: 1380 }, // Qua 18h-23h
  4: { abre: 1080, fecha: 1380 }, // Qui 18h-23h
  5: { abre: 1080, fecha: 1440 }, // Sex 18h-00h
  6: { abre: 1080, fecha: 1440 }, // Sáb 18h-00h
  0: { abre: 1080, fecha: 1320 }, // Dom 18h-22h
  1: null,                         // Seg fechado
  2: null                          // Ter fechado
};