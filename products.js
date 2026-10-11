// Ubah harga/paket di daftar ini. Harga contoh dalam Rupiah, sesuaikan dengan produk resmi yang kamu jual.\nconst PRODUCTS = [
  {
    "name": "Alight Motion",
    "category": "Editing",
    "icon": "🎬",
    "color": "#e8dcff",
    "desc": "Edit video dan motion graphic",
    "plans": [
      {
        "label": "Harian",
        "price": 5000
      },
      {
        "label": "Bulanan",
        "price": 15000
      },
      {
        "label": "Tahunan",
        "price": 80000
      }
    ]
  },
  {
    "name": "Amazon Prime",
    "category": "Streaming",
    "icon": "▶️",
    "color": "#dceeff",
    "desc": "Film, serial, dan hiburan",
    "plans": [
      {
        "label": "Bulanan",
        "price": 25000
      },
      {
        "label": "Tahunan",
        "price": 200000
      }
    ]
  },
  {
    "name": "BeautyCam",
    "category": "Foto & Kamera",
    "icon": "📸",
    "color": "#ffe1ec",
    "desc": "Kamera selfie dan filter kecantikan",
    "plans": [
      {
        "label": "Bulanan",
        "price": 15000
      },
      {
        "label": "Tahunan",
        "price": 90000
      }
    ]
  },
  {
    "name": "Bstation",
    "category": "Streaming",
    "icon": "▶",
    "color": "#e1e7ff",
    "desc": "Anime dan video pilihan",
    "plans": [
      {
        "label": "Bulanan",
        "price": 20000
      },
      {
        "label": "Tahunan",
        "price": 150000
      }
    ]
  },
  {
    "name": "Canva",
    "category": "Editing",
    "icon": "✿",
    "color": "#e2e5ff",
    "desc": "Desain, presentasi, dan konten",
    "plans": [
      {
        "label": "Bulanan",
        "price": 15000
      },
      {
        "label": "Tahunan",
        "price": 100000
      }
    ]
  },
  {
    "name": "CapCut",
    "category": "Editing",
    "icon": "✂️",
    "color": "#d9f7ed",
    "desc": "Edit video dan template kreatif",
    "plans": [
      {
        "label": "Bulanan",
        "price": 15000
      },
      {
        "label": "Tahunan",
        "price": 100000
      }
    ]
  },
  {
    "name": "Chai AI",
    "category": "AI & Produktivitas",
    "icon": "💬",
    "color": "#ffe2ed",
    "desc": "Chat dengan karakter AI",
    "plans": [
      {
        "label": "Bulanan",
        "price": 20000
      },
      {
        "label": "Tahunan",
        "price": 150000
      }
    ]
  },
  {
    "name": "ChatGPT",
    "category": "AI & Produktivitas",
    "icon": "✳",
    "color": "#e3f3e8",
    "desc": "Asisten AI untuk ide dan kerja",
    "plans": [
      {
        "label": "Bulanan",
        "price": 50000
      },
      {
        "label": "Tahunan",
        "price": 500000
      }
    ]
  },
  {
    "name": "DazzCam",
    "category": "Foto & Kamera",
    "icon": "📷",
    "color": "#ffe7cf",
    "desc": "Efek kamera retro",
    "plans": [
      {
        "label": "Bulanan",
        "price": 12000
      },
      {
        "label": "Tahunan",
        "price": 75000
      }
    ]
  },
  {
    "name": "Disney+",
    "category": "Streaming",
    "icon": "✦",
    "color": "#dce7ff",
    "desc": "Film dan serial hiburan",
    "plans": [
      {
        "label": "Bulanan",
        "price": 30000
      },
      {
        "label": "Tahunan",
        "price": 250000
      }
    ]
  },
  {
    "name": "Duolingo",
    "category": "Lainnya",
    "icon": "🦉",
    "color": "#dcf7c9",
    "desc": "Belajar bahasa",
    "plans": [
      {
        "label": "Bulanan",
        "price": 20000
      },
      {
        "label": "Tahunan",
        "price": 180000
      }
    ]
  },
  {
    "name": "Fizzo",
    "category": "Hiburan",
    "icon": "📖",
    "color": "#ffe2ef",
    "desc": "Baca cerita dan novel",
    "plans": [
      {
        "label": "Bulanan",
        "price": 12000
      },
      {
        "label": "Tahunan",
        "price": 80000
      }
    ]
  },
  {
    "name": "Gemini",
    "category": "AI & Produktivitas",
    "icon": "✧",
    "color": "#e3e5ff",
    "desc": "Asisten AI dari Google",
    "plans": [
      {
        "label": "Bulanan",
        "price": 50000
      },
      {
        "label": "Tahunan",
        "price": 500000
      }
    ]
  },
  {
    "name": "GetContact",
    "category": "Lainnya",
    "icon": "☎️",
    "color": "#d9f7ed",
    "desc": "Identifikasi dan proteksi panggilan",
    "plans": [
      {
        "label": "Bulanan",
        "price": 15000
      },
      {
        "label": "Tahunan",
        "price": 100000
      }
    ]
  },
  {
    "name": "Grok AI",
    "category": "AI & Produktivitas",
    "icon": "𝕏",
    "color": "#e9e3ff",
    "desc": "Asisten AI dan pencarian",
    "plans": [
      {
        "label": "Bulanan",
        "price": 50000
      },
      {
        "label": "Tahunan",
        "price": 500000
      }
    ]
  },
  {
    "name": "HBO Max",
    "category": "Streaming",
    "icon": "H",
    "color": "#dce4ff",
    "desc": "Film dan serial premium",
    "plans": [
      {
        "label": "Bulanan",
        "price": 30000
      },
      {
        "label": "Tahunan",
        "price": 250000
      }
    ]
  },
  {
    "name": "ibisPaint",
    "category": "Editing",
    "icon": "🖌️",
    "color": "#ffe3ee",
    "desc": "Menggambar dan ilustrasi digital",
    "plans": [
      {
        "label": "Bulanan",
        "price": 12000
      },
      {
        "label": "Tahunan",
        "price": 80000
      }
    ]
  },
  {
    "name": "iQIYI",
    "category": "Streaming",
    "icon": "🎞️",
    "color": "#fff0bd",
    "desc": "Drama Asia dan film",
    "plans": [
      {
        "label": "Bulanan",
        "price": 20000
      },
      {
        "label": "Tahunan",
        "price": 160000
      }
    ]
  },
  {
    "name": "Lightroom",
    "category": "Foto & Kamera",
    "icon": "🌅",
    "color": "#dceaff",
    "desc": "Edit foto profesional",
    "plans": [
      {
        "label": "Bulanan",
        "price": 15000
      },
      {
        "label": "Tahunan",
        "price": 100000
      }
    ]
  },
  {
    "name": "Loklok",
    "category": "Streaming",
    "icon": "🎬",
    "color": "#e3e4ff",
    "desc": "Katalog film dan serial",
    "plans": [
      {
        "label": "Bulanan",
        "price": 15000
      },
      {
        "label": "Tahunan",
        "price": 100000
      }
    ]
  },
  {
    "name": "Meitu",
    "category": "Foto & Kamera",
    "icon": "💗",
    "color": "#ffe2ee",
    "desc": "Edit foto dan retouch",
    "plans": [
      {
        "label": "Bulanan",
        "price": 15000
      },
      {
        "label": "Tahunan",
        "price": 90000
      }
    ]
  },
  {
    "name": "Melolo",
    "category": "Hiburan",
    "icon": "▶️",
    "color": "#ffe8d9",
    "desc": "Drama pendek dan hiburan",
    "plans": [
      {
        "label": "Bulanan",
        "price": 12000
      },
      {
        "label": "Tahunan",
        "price": 80000
      }
    ]
  },
  {
    "name": "MovieBox",
    "category": "Streaming",
    "icon": "🍿",
    "color": "#e1e8ff",
    "desc": "Film dan serial",
    "plans": [
      {
        "label": "Bulanan",
        "price": 15000
      },
      {
        "label": "Tahunan",
        "price": 100000
      }
    ]
  },
  {
    "name": "Netflix",
    "category": "Streaming",
    "icon": "N",
    "color": "#ffe1e1",
    "desc": "Film dan serial favorit",
    "plans": [
      {
        "label": "Bulanan",
        "price": 35000
      },
      {
        "label": "Tahunan",
        "price": 300000
      }
    ]
  },
  {
    "name": "Perplexity",
    "category": "AI & Produktivitas",
    "icon": "✦",
    "color": "#e2f4f2",
    "desc": "AI search dan riset",
    "plans": [
      {
        "label": "Bulanan",
        "price": 50000
      },
      {
        "label": "Tahunan",
        "price": 500000
      }
    ]
  },
  {
    "name": "Picsart",
    "category": "Editing",
    "icon": "✿",
    "color": "#f4e1ff",
    "desc": "Edit foto dan desain",
    "plans": [
      {
        "label": "Bulanan",
        "price": 15000
      },
      {
        "label": "Tahunan",
        "price": 100000
      }
    ]
  },
  {
    "name": "Prime Video",
    "category": "Streaming",
    "icon": "▶",
    "color": "#dcecff",
    "desc": "Film dan serial pilihan",
    "plans": [
      {
        "label": "Bulanan",
        "price": 25000
      },
      {
        "label": "Tahunan",
        "price": 200000
      }
    ]
  },
  {
    "name": "Remini",
    "category": "Foto & Kamera",
    "icon": "✨",
    "color": "#ffe4f0",
    "desc": "Tingkatkan kualitas foto",
    "plans": [
      {
        "label": "Bulanan",
        "price": 15000
      },
      {
        "label": "Tahunan",
        "price": 100000
      }
    ]
  },
  {
    "name": "Spotify",
    "category": "Streaming",
    "icon": "♫",
    "color": "#dff7df",
    "desc": "Musik tanpa gangguan",
    "plans": [
      {
        "label": "Bulanan",
        "price": 20000
      },
      {
        "label": "Tahunan",
        "price": 180000
      }
    ]
  },
  {
    "name": "Vidio",
    "category": "Streaming",
    "icon": "▶",
    "color": "#ffe2e8",
    "desc": "Film, olahraga, dan siaran",
    "plans": [
      {
        "label": "Bulanan",
        "price": 25000
      },
      {
        "label": "Tahunan",
        "price": 200000
      }
    ]
  },
  {
    "name": "Vision+",
    "category": "Streaming",
    "icon": "📺",
    "color": "#e5e1ff",
    "desc": "TV dan konten streaming",
    "plans": [
      {
        "label": "Bulanan",
        "price": 20000
      },
      {
        "label": "Tahunan",
        "price": 160000
      }
    ]
  },
  {
    "name": "Viu",
    "category": "Streaming",
    "icon": "▶",
    "color": "#fff0bf",
    "desc": "Drama Asia dan variety show",
    "plans": [
      {
        "label": "Bulanan",
        "price": 20000
      },
      {
        "label": "Tahunan",
        "price": 160000
      }
    ]
  },
  {
    "name": "Wattpad",
    "category": "Hiburan",
    "icon": "📚",
    "color": "#ffe0e8",
    "desc": "Cerita dan novel komunitas",
    "plans": [
      {
        "label": "Bulanan",
        "price": 15000
      },
      {
        "label": "Tahunan",
        "price": 100000
      }
    ]
  },
  {
    "name": "WeTV",
    "category": "Streaming",
    "icon": "🎞️",
    "color": "#ffe4d6",
    "desc": "Drama dan variety show",
    "plans": [
      {
        "label": "Bulanan",
        "price": 20000
      },
      {
        "label": "Tahunan",
        "price": 160000
      }
    ]
  },
  {
    "name": "Wink",
    "category": "Foto & Kamera",
    "icon": "💄",
    "color": "#ffe0ef",
    "desc": "Retouch foto dan video",
    "plans": [
      {
        "label": "Bulanan",
        "price": 15000
      },
      {
        "label": "Tahunan",
        "price": 90000
      }
    ]
  },
  {
    "name": "Winkit",
    "category": "Lainnya",
    "icon": "✨",
    "color": "#e7e4ff",
    "desc": "Tools dan layanan digital",
    "plans": [
      {
        "label": "Bulanan",
        "price": 12000
      },
      {
        "label": "Tahunan",
        "price": 80000
      }
    ]
  }
];