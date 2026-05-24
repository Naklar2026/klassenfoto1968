// Koordinaten in Prozent: x = von links, y = von oben.
// Diese Version nutzt eindeutige IDs nach Reihen: O, M, U, V.
// Die sichtbare Nummer ist fortlaufend, damit es keine dreimalige „1“ gibt.

const people = [
  // Obere Reihe
  {id:'O1', nr:1, name:'Helga Ehses', x:17, y:22},
  {id:'O2', nr:2, name:'Menta Terwey', x:22, y:21},
  {id:'O3', nr:3, name:'unbekannt', x:31, y:20},
  {id:'O4', nr:4, name:'Manfred Blessinger', x:37, y:19.5},
  {id:'O5', nr:5, name:'Tröschel', x:43, y:19},
  {id:'O6', nr:6, name:'Arno Wendenius', x:50.0, y:17.5},
  {id:'O7', nr:7, name:'Bernhard Riemann', x:56, y:18},
  {id:'O8', nr:8, name:'Karl-Josef Hamman', x:63, y:20},
  {id:'O9', nr:9, name:'Guido Görgen', x:70, y:19},
  {id:'O10', nr:10, name:'unbekannt', x:77, y:21.0},
  {id:'O11', nr:11, name:'? Gimmler', x:84, y:22},

  // Mittlere Reihe
  {id:'M1', nr:12, name:'Ursula Dillinger', x:11, y:39.5},
  {id:'M2', nr:13, name:'Manfred Buhl', x:21, y:38.5},
  {id:'M3', nr:14, name:'Lothar Schweigerer', x:29, y:37},
  {id:'M4', nr:15, name:'Hansi Senftinger', x:36.7, y:38.4},
  {id:'M5', nr:16, name:'unbekannt', x:43.7, y:37.7},
  {id:'M6', nr:17, name:'Pia ?', x:50.3, y:39.5},
  {id:'M7', nr:18, name:'unbekannt', x:56.1, y:39.5},
  {id:'M8', nr:19, name:'Schreiner?', x:62.2, y:38.2},
  {id:'M9', nr:20, name:'Josef Mittmann', x:69, y:38.4},
  {id:'M10', nr:21, name:'unbekannt', x:76.1, y:39.8},
  {id:'M11', nr:22, name:'Dorothee Richter', x:82.8, y:40.7},
  {id:'M12', nr:23, name:'Bibeth Hees', x:91, y:39.1},

  // Untere Reihe sitzend
  {id:'U1', nr:24, name:'Waltraut Schreiber', x:6.5, y:52.0},
  {id:'U2', nr:25, name:'? Staudt', x:13, y:53},
  {id:'U3', nr:26, name:'Gaby ?', x:20.5, y:52},
  {id:'U4', nr:27, name:'Ruth Schröder', x:25.8, y:49.7},
  {id:'U5', nr:28, name:'Barzen ?', x:32, y:51},
  {id:'U6', nr:29, name:'Iris Krawarz', x:39.5, y:51},
  {id:'U7', nr:30, name:'? Ritter?', x:47, y:50},
  {id:'U8', nr:31, name:'unbekannt', x:53.1, y:50.8},
  {id:'U9', nr:32, name:'Jutta Mühlenbrock', x:60, y:50},
  {id:'U10', nr:33, name:'unbekannt', x:66, y:50},
  {id:'U11', nr:34, name:'unbekannt', x:74, y:51},
  {id:'U12', nr:35, name:'unbekannt', x:81, y:51},
  {id:'U13', nr:36, name:'unbekannt', x:87, y:50},
  {id:'U14', nr:37, name:'Dorothee Wagner', x:95.0, y:51.0},

  // Vordere Reihe kniend
  {id:'V1', nr:38, name:'Manfred Hansen', x:26, y:61.9},
  {id:'V2', nr:39, name:'Rainer Mohrs', x:36.0, y:61},
  {id:'V3', nr:40, name:'Horst Hundemer', x:48, y:62.5},
  {id:'V4', nr:41, name:'Hans-Georg Rendenbach', x:57.2, y:61.2},
  {id:'V5', nr:42, name:'unbekannt', x:67.9, y:62.2},
  {id:'V6', nr:43, name:'Willi Fundermann', x:80.3, y:66},
  {id:'V7', nr:44, name:'Manfred Pazen', x:90.1, y:61.0}
];

const markerLayer = document.getElementById('markers');
const rows = document.getElementById('peopleTable');

people.forEach(p => {
  const a = document.createElement('a');
  a.className = 'marker';
  a.href = 'javascript:void(0)';
a.addEventListener('click', function () {
  const row = document.getElementById('person-' + p.id);

  if (row) {
    row.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });

document.querySelectorAll('tr').forEach(function (r) {
  r.querySelectorAll('td').forEach(function (cell) {
    cell.style.background = '';
    cell.style.outline = '';
  });
});

row.querySelectorAll('td').forEach(function (cell) {
cell.style.background = '#efe2cc';
cell.style.transition = 'background 0.4s ease';
});
  }
});
  a.style.setProperty('--x', p.x + '%');
  a.style.setProperty('--y', p.y + '%');
  a.dataset.name = `${p.id} · ${p.name}`;
  a.title = `${p.id} · ${p.name}`;
  a.textContent = p.nr;
  markerLayer.appendChild(a);

  const tr = document.createElement('tr');
  tr.id = 'person-' + p.id;
  tr.innerHTML = `<td><strong>${p.id}</strong><br><span class="small">Nr. ${p.nr}</span></td><td>${p.name}</td><td></td><td></td><td></td><td></td>`;
  rows.appendChild(tr);
});


