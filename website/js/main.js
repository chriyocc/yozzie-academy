import { programs, team } from './mock-data.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('Yozzie Academy Website Loaded. Stay Rad.');
  
  // Highlight active nav link
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    if (currentPath.endsWith(link.getAttribute('href').replace('./', '')) || (currentPath.endsWith('/') && link.getAttribute('href') === './index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Example: Populate programs if we are on services page
  const programsList = document.getElementById('programs-list');
  if (programsList) {
    programsList.innerHTML = programs.map(p => `
      <div class="card neo-shadow-black">
        <div class="card-header">
          <h3 class="text-primary">${p.title}</h3>
          <div class="label-caps bg-surface-variant">${p.level}</div>
        </div>
        <p>${p.description}</p>
      </div>
    `).join('');
  }

  // Example: Populate team if we are on team page
  const teamGrid = document.getElementById('team-grid');
  if (teamGrid) {
    teamGrid.innerHTML = team.map(t => `
      <div class="card neo-shadow-gold p-0" style="overflow: hidden;">
        <img src="${t.image}" alt="${t.name}" style="width: 100%; height: 250px; object-fit: cover; filter: grayscale(100%); border-bottom: var(--border-thick) solid var(--primary);">
        <div class="p-md">
          <h3 class="text-primary" style="margin-bottom: 4px;">${t.name}</h3>
          <div class="label-caps bg-tertiary-dim text-primary mb-sm">${t.role}</div>
          <p style="font-size: 16px;">${t.bio}</p>
        </div>
      </div>
    `).join('');
  }
});
