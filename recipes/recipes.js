// ─── RECIPE FILTER ────────────────────────────────────────────────────────────

const filterTags = document.querySelectorAll('.filter-tag');
const cards = document.querySelectorAll('.recipe-card');
const emptyState = document.getElementById('emptyState');

filterTags.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;

    // Update active button
    filterTags.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Show/hide cards
    let visibleCount = 0;
    cards.forEach(card => {
      const tags = card.dataset.tags || '';
      const matches = filter === 'all' || tags.split(' ').includes(filter);
      card.classList.toggle('hidden', !matches);
      if (matches) visibleCount++;
    });

    // Empty state
    if (emptyState) {
      emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  });
});


 // copyright date function
  document.getElementById("date").innerHTML = new Date().getFullYear();