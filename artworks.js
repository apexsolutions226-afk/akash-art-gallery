// Central catalogue for Akash Art Gallery.
// All images are original artworks by the gallery (stored in /public/images).

export const CONTACT = {
  phone1: '9421527620',
  phone2: '8793286816',
  phone1Intl: '+919421527620',
  phone2Intl: '+918793286816',
  email: 'akashkulyeti2000@gmail.com',
  whatsapp: 'https://wa.me/919421527620?text=Hello%20Akash%20Art%20Gallery!%20I%20would%20like%20to%20know%20more%20about%20your%20artwork.',
}

export const CATEGORIES = [
  'All',
  'Portraits',
  'Paintings',
  'Traditional Art',
  'Abstract Art',
  'Handmade Art',
]

/**
 * id, title, category, medium, image, description, tall (for masonry variety)
 */
export const ARTWORKS = [
  {
    id: 'straw-shivaji',
    title: 'Chhatrapati Shivaji Maharaj',
    category: 'Traditional Art',
    medium: 'Hand-laid straw portrait',
    image: '/images/straw-shivaji.jpg',
    description:
      'A majestic straw-work portrait of Chhatrapati Shivaji Maharaj, crafted strand by strand with remarkable patience and devotion.',
  },
  {
    id: 'portrait-shiva',
    title: 'Lord Shiva — Divine Gaze',
    category: 'Portraits',
    medium: 'Charcoal on paper',
    image: '/images/portrait-shiva.jpg',
    description:
      'A powerful charcoal portrait of Lord Shiva capturing serenity, strength and cosmic stillness in deep monochrome tones.',
  },
  {
    id: 'portrait-kalam',
    title: 'Dr. A.P.J. Abdul Kalam',
    category: 'Portraits',
    medium: 'Charcoal on paper',
    image: '/images/portrait-kalam.jpg',
    description:
      'A warm, lifelike charcoal tribute to the Missile Man of India — every smile line drawn with heartfelt admiration.',
  },
  {
    id: 'straw-birsa-munda',
    title: 'Birsa Munda — The Warrior',
    category: 'Traditional Art',
    medium: 'Straw art on board',
    image: '/images/straw-birsa-munda.jpg',
    description:
      'A striking large-format straw composition honouring tribal hero Birsa Munda, blending geometric straw craft with painted detail.',
  },
  {
    id: 'straw-ambedkar-buddha',
    title: 'Dr. Ambedkar with Buddha',
    category: 'Traditional Art',
    medium: 'Straw + charcoal, framed',
    image: '/images/straw-ambedkar-buddha.jpg',
    description:
      'A monumental framed piece uniting straw mosaic and charcoal portraiture — Dr. Babasaheb Ambedkar before a radiant Buddha.',
  },
  {
    id: 'portrait-eye',
    title: 'The Inner Eye',
    category: 'Paintings',
    medium: 'Charcoal hyperrealism',
    image: '/images/portrait-eye.jpg',
    description:
      'A hyper-detailed charcoal study of the human eye — a meditation on vision, depth and emotion.',
  },
  {
    id: 'portrait-shivaji-charcoal',
    title: 'Shivaji — Charcoal Study',
    category: 'Portraits',
    medium: 'Charcoal on paper, framed',
    image: '/images/portrait-shivaji-charcoal.jpg',
    description:
      'An evocative framed charcoal portrait of Chhatrapati Shivaji Maharaj, rich in texture and royal presence.',
  },
  {
    id: 'straw-ganesha',
    title: 'Lord Ganesha — Straw & Mirror',
    category: 'Traditional Art',
    medium: 'Straw mosaic with mirror inlay',
    image: '/images/straw-ganesha.jpg',
    description:
      'A divine fusion of straw marquetry, pencil shading and mirror inlay depicting Lord Ganesha in geometric harmony.',
  },
  {
    id: 'gourd-spoons-styled',
    title: 'Painted Gourd Ladles',
    category: 'Handmade Art',
    medium: 'Hand-painted natural gourds',
    image: '/images/gourd-spoons-styled.jpg',
    description:
      'Traditional long-handle gourd ladles hand-painted with folk motifs — functional art rooted in rural Indian craft.',
  },
  {
    id: 'palm-bouquet-vase',
    title: 'Eternal Palm Bloom',
    category: 'Handmade Art',
    medium: 'Woven palm-leaf bouquet',
    image: '/images/palm-bouquet-vase.jpg',
    description:
      'An everlasting bouquet sculpted from woven palm leaves, arranged in a handcrafted straw vessel.',
  },
  {
    id: 'wall-hanging-diamond',
    title: 'Diamond Mandala Hangings',
    category: 'Handmade Art',
    medium: 'Straw & palm-leaf wall art',
    image: '/images/wall-hanging-diamond.jpg',
    description:
      'A symmetrical diamond wall composition with concentric straw weaving and sculpted palm-leaf rosettes.',
  },
  {
    id: 'madhubani-peacock',
    title: 'Madhubani Peacock',
    category: 'Paintings',
    medium: 'Ink folk art, framed',
    image: '/images/madhubani-peacock.jpg',
    description:
      'A graceful Madhubani-style peacock resting on a branch, drawn with intricate folk linework.',
  },
  {
    id: 'madhubani-fish',
    title: 'Madhubani Matsya',
    category: 'Paintings',
    medium: 'Ink folk art, framed',
    image: '/images/madhubani-fish.jpg',
    description:
      'A paisley fish rendered in classic Madhubani patterns — a symbol of abundance and fluid grace.',
  },
  {
    id: 'madhubani-face-leaf',
    title: 'Nature Within — Leaf Face',
    category: 'Paintings',
    medium: 'Ink folk art, framed',
    image: '/images/madhubani-face-leaf.jpg',
    description:
      'A poetic Madhubani face blooming from leaves and petals, celebrating the oneness of self and nature.',
  },
  {
    id: 'zentangle-leaf',
    title: 'Zentangle Reverie',
    category: 'Abstract Art',
    medium: 'Ink zentangle, framed',
    image: '/images/zentangle-leaf.jpg',
    description:
      'A flowing abstract leaf filled with meditative zentangle patterns and rhythmic line play.',
  },
  {
    id: 'mandala-teardrop',
    title: 'Teardrop Mandala Heart',
    category: 'Abstract Art',
    medium: 'Ink mandala, framed',
    image: '/images/mandala-teardrop.jpg',
    description:
      'A symmetrical teardrop mandala cradling a heart — precision linework in perfect balance.',
  },
  {
    id: 'straw-abstract-sculpture',
    title: 'Flight of Geometry',
    category: 'Abstract Art',
    medium: 'Straw assemblage',
    image: '/images/straw-abstract-sculpture.jpg',
    description:
      'A bold free-form straw sculpture of triangles and open lattice — folk material, contemporary language.',
  },
  {
    id: 'straw-star-panel',
    title: 'Fourfold Star Panel',
    category: 'Abstract Art',
    medium: 'Dyed straw inlay',
    image: '/images/straw-star-panel.jpg',
    description:
      'A graphic four-pointed star in two-tone straw inlay, bordered with fine geometric banding.',
  },
  {
    id: 'straw-nested-squares',
    title: 'Concentric Silence',
    category: 'Abstract Art',
    medium: 'Straw relief construction',
    image: '/images/straw-nested-squares.jpg',
    description:
      'Hypnotic nested squares receding to the centre — a study in rhythm, shadow and repetition.',
  },
  {
    id: 'straw-panel-flower',
    title: 'Golden Lattice Bloom',
    category: 'Abstract Art',
    medium: 'Straw inlay + palm rosette',
    image: '/images/straw-panel-flower.jpg',
    description:
      'A radiant geometric straw lattice crowned with a sculpted palm-leaf bloom.',
  },
  {
    id: 'straw-frame-flower',
    title: 'Sunburst Frame',
    category: 'Handmade Art',
    medium: 'Straw frame + palm flower',
    image: '/images/straw-frame-flower.jpg',
    description:
      'A handcrafted straw-inlay frame centred with a large sunburst palm-leaf flower.',
  },
  {
    id: 'straw-frame-square',
    title: 'Heritage Straw Frame',
    category: 'Handmade Art',
    medium: 'Hand-laid straw frame',
    image: '/images/straw-frame-square.jpg',
    description:
      'A square photo frame wrapped in precision straw marquetry — earthy, elegant, timeless.',
  },
  {
    id: 'gourd-spoons-hanging',
    title: 'Folk Ladle Quartet',
    category: 'Traditional Art',
    medium: 'Hand-painted natural gourds',
    image: '/images/gourd-spoons-hanging.jpg',
    description:
      'Four hand-painted gourd ladles, each carrying its own folk pattern and festive colour story.',
  },
  {
    id: 'straw-box-top',
    title: 'Petal Crown Keepsake Box',
    category: 'Handmade Art',
    medium: 'Straw + palm-leaf box',
    image: '/images/straw-box-top.jpg',
    description:
      'A keepsake box dressed in straw marquetry and crowned with sculpted palm-leaf petals.',
  },
]

export const HERO_SLIDES = [
  {
    image: '/images/gourd-spoons-styled.jpg',
    caption: 'Hand-painted gourd art',
  },
  {
    image: '/images/straw-shivaji.jpg',
    caption: 'Straw portrait of a legend',
  },
  {
    image: '/images/portrait-shiva.jpg',
    caption: 'Charcoal divinity',
  },
]

export const GALLERY_PREVIEW = [
  'straw-shivaji',
  'portrait-shiva',
  'gourd-spoons-styled',
  'straw-ambedkar-buddha',
  'portrait-eye',
  'palm-bouquet-vase',
  'straw-ganesha',
  'madhubani-peacock',
  'straw-panel-flower',
  'portrait-kalam',
  'wall-hanging-diamond',
  'mandala-teardrop',
]

export const PROCESS_IMAGES = [
  {
    image: '/images/straw-frame-flower.jpg',
    title: 'Precision Inlay',
    text: 'Each straw is cut, tinted and laid by hand.',
  },
  {
    image: '/images/palm-bouquet-hand.jpg',
    title: 'Palm Sculpting',
    text: 'Palm leaves are folded into everlasting blooms.',
  },
  {
    image: '/images/gourd-spoons-top.jpg',
    title: 'Folk Painting',
    text: 'Natural gourds become canvases for folk motifs.',
  },
  {
    image: '/images/straw-nested-squares.jpg',
    title: 'Geometric Weaving',
    text: 'Patient geometry builds depth and rhythm.',
  },
  {
    image: '/images/portrait-eye.jpg',
    title: 'Charcoal Detailing',
    text: 'Layered charcoal brings portraits to life.',
  },
]

export const getArtwork = (id) => ARTWORKS.find((a) => a.id === id)
