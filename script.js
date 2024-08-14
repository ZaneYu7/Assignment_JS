document.getElementById('vegetables-tab').addEventListener('click', function() {
  setActiveTab('vegetables-list');
});

document.getElementById('spices-tab').addEventListener('click', function() {
  setActiveTab('spices-list');
});

document.getElementById('fruits-tab').addEventListener('click', function() {
  setActiveTab('fruits-list');
});

function setActiveTab(tabId) {
  document.querySelectorAll('.list-container').forEach(container => {
      container.classList.remove('active');
  });
  document.getElementById(tabId).classList.add('active');

  document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
  });
  document.getElementById(`${tabId.split('-')[0]}-tab`).classList.add('active');
}

// Item selection logic
document.querySelectorAll('.list-item').forEach(item => {
  item.addEventListener('click', function() {
      item.classList.toggle('selected');
  });
});
