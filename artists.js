(() => {
  const CATALOG = {
    'marta-alvi': [
      {
        title: 'Untitled Study',
        year: '2025',
        src: 'https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
        alt: 'Oil on canvas, abstract study'
      },
      {
        title: 'Archive Fragment IV',
        year: '2026',
        src: 'https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
        alt: 'Archival study II'
      }
    ],
    'elena-fournier': [
      {
        title: 'Quiet Hours',
        year: '2025',
        src: 'https://images.unsplash.com/photo-1765814142702-52474219184e?q=80&w=760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
        alt: 'Mixed media portrait'
      },
      {
        title: 'After Noon',
        year: '2026',
        src: 'https://images.unsplash.com/photo-1765814142702-52474219184e?q=80&w=760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
        alt: 'Monochrome portrait study'
      }
    ],
    'kofi-mensah': [
      {
        title: 'Warm Interval',
        year: '2025',
        src: 'https://images.unsplash.com/photo-1578926375605-eaf7559b1458?q=80&w=1063&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
        alt: 'Abstract composition in warm tones'
      },
      {
        title: 'Ochre Study',
        year: '2026',
        src: 'https://images.unsplash.com/photo-1578926375605-eaf7559b1458?q=80&w=1063&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
        alt: 'Ochre horizon study'
      }
    ],
    'ines-rovira': [
      {
        title: 'Second Light',
        year: '2025',
        src: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=1019&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
        alt: 'Textured brushwork on canvas'
      }
    ],
    'dario-lang': [
      {
        title: 'Stillness No. 3',
        year: '2026',
        src: 'https://images.unsplash.com/photo-1688588426729-dc4f7bdb8fbe?q=80&w=1109&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
        alt: 'Featured gallery artwork'
      }
    ],
    'amara-okafor': [
      {
        title: 'Low Horizon',
        year: '2025',
        src: 'https://images.unsplash.com/photo-1765813911862-deaa350a57c3?q=80&w=1056&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
        alt: 'Colour field painting'
      }
    ]
  };

  const buttons = Array.from(document.querySelectorAll('.artist-name-btn'));
  const worksContainer = document.getElementById('artistWorks');

  function renderPaintings(slug) {
    const items = CATALOG[slug] || [];
    const wrapper = document.createElement('div');
    wrapper.className = 'artist-paintings';

    items.forEach((item) => {
      const card = document.createElement('article');
      card.className = 'artist-card';

      const figure = document.createElement('figure');
      figure.className = 'artist-card-figure';

      const img = document.createElement('img');
      img.src = item.src;
      img.alt = item.alt;
      img.loading = 'lazy';

      const title = document.createElement('h3');
      title.className = 'artist-card-title';
      title.textContent = item.title;

      const year = document.createElement('p');
      year.className = 'artist-card-year';
      year.textContent = item.year;

      figure.appendChild(img);
      card.appendChild(figure);
      card.appendChild(title);
      card.appendChild(year);
      wrapper.appendChild(card);
    });

    worksContainer.replaceChildren(wrapper);
  }

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const slug = btn.dataset.artist;
      buttons.forEach((b) => b.classList.toggle('is-active', b === btn));
      renderPaintings(slug);
    });
  });
})();