(() => {
  const ARTISTS = {
    'marta-alvi': {
      name: 'Marta Alvi',
      born: '1988',
      nationality: 'Italian',
      active: '2011 – Present',
      specialty: 'Abstract Oil Painting & Material Abstraction',
      email: 'studio@martaalvi.example',
      contactLine: '+39 02 5550 1948 · @martaalvi.studio',
      bio: [
        'Marta Alvi (b. 1988, Turin) investigates surface memory, architectural decay, and tactile restraint. Working primarily with hand-ground earth pigments, beeswax, and unprimed Belgian linen, her canvases treat paint as a sculptural sediment rather than an illusionistic window.',
        'Her works have been exhibited across Milan, Zurich, and Nairobi, and sit in private collections throughout Europe and East Africa.'
      ],
      quote: '“I am not trying to paint an image of silence—I want the surface itself to absorb noise the way wet plaster does.”'
    },
    'elena-fournier': {
      name: 'Elena Fournier',
      born: '1991',
      nationality: 'French-Swiss',
      active: '2014 – Present',
      specialty: 'Figurative Mixed Media & Portraiture',
      email: 'contact@elenafournier.example',
      contactLine: '+41 22 555 0142 · @elena.fournier',
      bio: [
        'Elena Fournier explores interiority and arrested motion through layered charcoal, acrylic wash, and oil glaze on panel. Her figures often emerge from muted, atmospheric grounds.',
        'Based between Geneva and Paris, she has held solo exhibitions across Western Europe.'
      ],
      quote: '“A portrait succeeds the moment the sitter stops performing for the room.”'
    },
    'kofi-mensah': {
      name: 'Kofi Mensah',
      born: '1985',
      nationality: 'Ghanaian',
      active: '2009 – Present',
      specialty: 'Chromatic Abstraction & Earth Pigments',
      email: 'studio@kofimensah.example',
      contactLine: '+233 30 555 0199 · @kofimensah.art',
      bio: [
        'Kofi Mensah builds luminous fields of ochre, laterite red, and raw sienna sourced from regional mineral deposits. His paintings examine heat, memory, and architectural rhythm.',
        'His work is held in public and private collections in Accra, London, and Nairobi.'
      ],
      quote: '“Color carries temperature before it ever carries a name.”'
    },
    'ines-rovira': {
      name: 'Ines Rovira',
      born: '1990',
      nationality: 'Spanish',
      active: '2013 – Present',
      specialty: 'Impasto & Gestural Oil Painting',
      email: 'ines@inesrovira.example',
      contactLine: '+34 93 555 0174 · @inesrovira.studio',
      bio: [
        'Ines Rovira works with broad mason trowels and heavy linseed mediums to construct dense, rhythmic surfaces inspired by coastal light in Catalonia.',
        'She divides her practice between Barcelona and residency programs across the Mediterranean.'
      ],
      quote: '“Light is not something you add at the end; it has to be built into the thickness of the ground.”'
    },
    'dario-lang': {
      name: 'Dario Lang',
      born: '1983',
      nationality: 'German',
      active: '2008 – Present',
      specialty: 'Minimalist Tonal Painting',
      email: 'studio@dariolang.example',
      contactLine: '+49 30 5550 1821 · @dariolang.works',
      bio: [
        'Dario Lang reduces pictorial language to subtle shifts in value, edge tension, and matte finish. Each canvas undergoes dozens of thin, sanded glazes.',
        'He lives and works in Berlin.'
      ],
      quote: '“When you remove the gesture, every millimeter of proportion becomes loud.”'
    },
    'amara-okafor': {
      name: 'Amara Okafor',
      born: '1993',
      nationality: 'Nigerian',
      active: '2016 – Present',
      specialty: 'Colour Field & Acrylic on Raw Canvas',
      email: 'hello@amaraokafor.example',
      contactLine: '+234 1 555 0136 · @amaraokafor',
      bio: [
        'Amara Okafor stains unprimed cotton duck with diluted pigments, allowing gravity and capillary absorption to determine horizon lines.',
        'Her works investigate geography, horizon memory, and quiet spatial vastness.'
      ],
      quote: '“The canvas remembers where the pigment pooled first.”'
    }
  };

  const PIECES = {
    'untitled-study': {
      title: 'Untitled Study',
      artistId: 'marta-alvi',
      date: '2025',
      type: 'Oil & Raw Pigment on Linen',
      size: '140 × 175 cm (55.1 × 68.9 in)',
      price: '$6,400',
      image: 'https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?w=1600&auto=format&fit=crop&q=85&ixlib=rb-4.1.0',
      story: [
        'Painted across three consecutive winters in a north-facing studio, Untitled Study explores the quiet friction between heavy mineral impasto and exposed raw linen. Layers of burnt umber and titanium white were scraped back with a steel palette knife before curing, leaving geological ridges that catch directional gallery light differently throughout the day.',
        'Rather than resolving into a fixed focal point, the composition holds its weight along the lower margin, inviting the viewer to step closer and read the physical speed of each brushstroke.'
      ]
    },
    'archive-fragment-iv': {
      title: 'Archive Fragment IV',
      artistId: 'marta-alvi',
      date: '2026',
      type: 'Oil, Beeswax & Charcoal on Linen',
      size: '110 × 135 cm (43.3 × 53.1 in)',
      price: '$4,800',
      image: 'https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?w=1600&auto=format&fit=crop&q=85&ixlib=rb-4.1.0',
      story: [
        'Constructed from studio offcuts and cold-wax emulsions, Archive Fragment IV compresses months of discarded underpaintings into a single dense plane.',
        'Incised charcoal lines score the upper quadrant, recalling architectural elevation drawings weathered by rain.'
      ]
    },
    'quiet-hours': {
      title: 'Quiet Hours',
      artistId: 'elena-fournier',
      date: '2025',
      type: 'Mixed Media & Oil on Wood Panel',
      size: '95 × 125 cm (37.4 × 49.2 in)',
      price: '$5,200',
      image: 'https://images.unsplash.com/photo-1765814142702-52474219184e?q=85&w=1400&auto=format&fit=crop&ixlib=rb-4.1.0',
      story: [
        'Quiet Hours captures the stillness of late afternoon studio sessions when natural light flattens across the room.',
        'Thin washes of raw umber and bone black allow the wood grain to remain legible beneath the portrait.'
      ]
    },
    'after-noon': {
      title: 'After Noon',
      artistId: 'elena-fournier',
      date: '2026',
      type: 'Charcoal & Oil Glaze on Linen',
      size: '100 × 130 cm (39.4 × 51.2 in)',
      price: '$4,900',
      image: 'https://images.unsplash.com/photo-1765814142702-52474219184e?q=85&w=1400&auto=format&fit=crop&ixlib=rb-4.1.0',
      story: [
        'A companion study to Quiet Hours, After Noon strips away chromatic warmth in favor of tonal restraint and negative space.'
      ]
    },
    'warm-interval': {
      title: 'Warm Interval',
      artistId: 'kofi-mensah',
      date: '2025',
      type: 'Earth Pigment & Acrylic on Canvas',
      size: '160 × 130 cm (63.0 × 51.2 in)',
      price: '$7,200',
      image: 'https://images.unsplash.com/photo-1578926375605-eaf7559b1458?q=85&w=1500&auto=format&fit=crop&ixlib=rb-4.1.0',
      story: [
        'Warm Interval juxtaposes raw red laterite with translucent cadmium washes, creating a slow optical vibration across the center seam.',
        'Each band of color was applied with wide cedar brushes in a single uninterrupted pass.'
      ]
    },
    'ochre-study': {
      title: 'Ochre Study',
      artistId: 'kofi-mensah',
      date: '2026',
      type: 'Mineral Pigment on Raw Cotton',
      size: '145 × 100 cm (57.1 × 39.4 in)',
      price: '$5,900',
      image: 'https://images.unsplash.com/photo-1578926375605-eaf7559b1458?q=85&w=1500&auto=format&fit=crop&ixlib=rb-4.1.0',
      story: [
        'Created during field research in northern Ghana, Ochre Study examines how dry mineral dust binds to unprimed weave.'
      ]
    },
    'second-light': {
      title: 'Second Light',
      artistId: 'ines-rovira',
      date: '2025',
      type: 'Heavy Impasto Oil on Canvas',
      size: '120 × 120 cm (47.2 × 47.2 in)',
      price: '$5,500',
      image: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=85&w=1400&auto=format&fit=crop&ixlib=rb-4.1.0',
      story: [
        'Second Light records the reflected glare off whitewashed stone walls just before dusk.',
        'Thick ridges of titanium white and Naples yellow cast real micro-shadows across the canvas surface.'
      ]
    },
    'stillness-no-3': {
      title: 'Stillness No. 3',
      artistId: 'dario-lang',
      date: '2026',
      type: 'Oil & Marble Dust on Panel',
      size: '115 × 150 cm (45.3 × 59.1 in)',
      price: '$6,800',
      image: 'https://images.unsplash.com/photo-1688588426729-dc4f7bdb8fbe?q=85&w=1400&auto=format&fit=crop&ixlib=rb-4.1.0',
      story: [
        'Part of an ongoing series on acoustic quietude, Stillness No. 3 layers chalk and marble dust into oil to achieve a velvety, non-reflective surface.'
      ]
    },
    'low-horizon': {
      title: 'Low Horizon',
      artistId: 'amara-okafor',
      date: '2025',
      type: 'Stained Acrylic & Raw Pigment on Canvas',
      size: '150 × 115 cm (59.1 × 45.3 in)',
      price: '$5,700',
      image: 'https://images.unsplash.com/photo-1765813911862-deaa350a57c3?q=85&w=1400&auto=format&fit=crop&ixlib=rb-4.1.0',
      story: [
        'Low Horizon was painted flat on the studio floor, allowing diluted washes to bleed naturally into a single atmospheric seam.'
      ]
    }
  };

  const params = new URLSearchParams(window.location.search);
  const slug = params.get('piece') || 'untitled-study';
  const piece = PIECES[slug] || PIECES['untitled-study'];
  const artist = ARTISTS[piece.artistId];

  document.title = `${piece.title} — Galerie.`;
  document.getElementById('artImage').src = piece.image;
  document.getElementById('artImage').alt = piece.title;
  document.getElementById('artTitle').textContent = piece.title.toUpperCase();
  document.getElementById('artName').textContent = piece.title;
  document.getElementById('artArtistLink').textContent = artist.name;
  document.getElementById('artDate').textContent = piece.date;
  document.getElementById('artType').textContent = piece.type;
  document.getElementById('artSize').textContent = piece.size;
  document.getElementById('artPrice').textContent = piece.price;

  const storyEl = document.getElementById('artStory');
  storyEl.replaceChildren(
    ...piece.story.map((text) => {
      const p = document.createElement('p');
      p.textContent = text;
      return p;
    })
  );

  document.getElementById('artistHeading').textContent = artist.name.toUpperCase();
  document.getElementById('artistName').textContent = artist.name;
  document.getElementById('artistBorn').textContent = artist.born;
  document.getElementById('artistNationality').textContent = artist.nationality;
  document.getElementById('artistActive').textContent = artist.active;
  document.getElementById('artistSpecialty').textContent = artist.specialty;

  const contactEl = document.getElementById('artistContact');
  const mailLink = document.createElement('a');
  mailLink.href = `mailto:${artist.email}`;
  mailLink.textContent = artist.email;
  const subSpan = document.createElement('span');
  subSpan.textContent = artist.contactLine;
  contactEl.replaceChildren(mailLink, subSpan);

  const bioEl = document.getElementById('artistBio');
  bioEl.replaceChildren(
    ...artist.bio.map((text) => {
      const p = document.createElement('p');
      p.textContent = text;
      return p;
    })
  );

  document.getElementById('artistQuote').textContent = artist.quote;

  // Populate Other Works (same artist first, then other exhibition works)
  const allEntries = Object.entries(PIECES).filter(([key]) => key !== slug);
  const sameArtist = allEntries.filter(([, item]) => item.artistId === piece.artistId);
  const others = allEntries.filter(([, item]) => item.artistId !== piece.artistId);
  const related = [...sameArtist, ...others].slice(0, 3);

  const gridEl = document.getElementById('otherWorksGrid');
  gridEl.replaceChildren(
    ...related.map(([key, item]) => {
      const card = document.createElement('article');
      card.className = 'other-card';

      const link = document.createElement('a');
      link.href = `art.html?piece=${encodeURIComponent(key)}`;

      const fig = document.createElement('figure');
      fig.className = 'other-card-figure';

      const img = document.createElement('img');
      img.src = item.image;
      img.alt = item.title;
      img.loading = 'lazy';

      const meta = document.createElement('div');
      meta.className = 'other-card-meta';

      const title = document.createElement('h3');
      title.className = 'other-card-title';
      title.textContent = item.title;

      const price = document.createElement('p');
      price.className = 'other-card-price';
      price.textContent = item.price;

      fig.appendChild(img);
      meta.appendChild(title);
      meta.appendChild(price);
      link.appendChild(fig);
      link.appendChild(meta);
      card.appendChild(link);
      return card;
    })
  );
})();