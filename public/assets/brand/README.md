# stacknothing — Brand Kit (4K / high-resolution)

Every raster asset here is rendered **directly from vector geometry at its final
size** — nothing is upscaled from a smaller file, so there's no pixel breakup.
The mark itself also ships as SVG, which scales to any size with zero loss.

Brand blue: `#3139FB` (rgb 49, 57, 251). Wordmark typeface: **Quicksand Bold**
(open source, Google Fonts / OFL).

## About the small sizes
A few files are genuinely small — `favicon-16x16.png`, `apple-touch-icon-180.png`,
`android-chrome-192x192.png` and friends. These are **hard browser and OS specs**,
not a quality shortcut: a browser tab is 16–32 CSS px, and shipping a 4K image
there does nothing but waste bytes. They're rasterized straight from vector at
those exact pixel counts, so they're as sharp as those dimensions physically allow.
For everything that *does* benefit from resolution, you have 2048–4096px masters.

## What's inside

### /logo
| File | Notes |
|---|---|
| `icon-mark-blue.svg` / `icon-mark-white.svg` | vector mark, transparent — **use these wherever you can** |
| `icon-mark-blue-4096.png` / `icon-mark-white-4096.png` | 4096x4096 masters, transparent bg |
| `icon-mark-blue-1024.png` / `icon-mark-white-1024.png` | convenience size for web |
| `logo-horizontal-light-4k.png` / `-dark-4k.png` | icon + wordmark, ~6600px wide, transparent |
| `logo-horizontal-light-web.png` / `-dark-web.png` | same, ~2200px wide for web/docs |
| `logo-stacked-light-4k.png` / `-dark-4k.png` | icon above wordmark, ~3400x2000, for square placements |
| `logo-on-white-4k.png` / `logo-on-blue-4k.png` | pre-composited on a brand canvas, ready for decks |

"light" = for light backgrounds (blue artwork). "dark" = for dark/blue backgrounds (white artwork).

### /favicon
- `favicon.svg` — compact mark, scalable
- `favicon-16x16.png`, `favicon-32x32.png`, `favicon-48x48.png`
- `favicon.ico` — multi-size (16/32/48/64) for `<link rel="icon">`
- `favicon-mark-transparent-2048.png` — bare mark, no background, for custom theming

At tab sizes the full mark's fine dotted ring turns to mush, so favicons and app
icons use a **compact variant**: the ring, the comet line and the centre node
only, with heavier strokes that survive downsampling.

### /app-icons
- `apple-touch-icon.png` + `-180/167/152/120` — solid blue, full-bleed, no
  transparency (iOS applies its own corner mask — never round the corners yourself)
- `android-chrome-192x192.png` / `-512x512.png` — standard PWA manifest icons
- `maskable-icon-192x192.png` / `-512x512.png` — extra safe-zone padding for
  Android's adaptive-icon mask
- `app-icon-{1024,2048,4096}-dark-bg.png` / `-light-bg.png` — store-submission
  and print-safe masters

### /social/profile
- `profile-picture-blue-bg-1024.png` — white mark on blue, **recommended default**
  (holds up best at small feed sizes)
- `profile-picture-white-bg-1024.png` — blue mark on white, alt version
- `...-4096.png` of each — masters
- Built with generous margin, since every platform crops profile photos to a circle.

### /social/headers
Each banner ships **light + dark**, and at the platform spec size **plus a @2x
hi-res version** for retina displays and future spec bumps:

| Platform | Spec size | Also included | Notes |
|---|---|---|---|
| X / Twitter | 1500x500 | 3000x1000 @2x | logo kept clear of the avatar's bottom-left overlap |
| LinkedIn personal | 1584x396 | 3168x792 @2x | same avatar-safe treatment |
| LinkedIn company | 1128x191 | 2256x382 @2x | no avatar overlap on company pages |
| Facebook cover | 820x312 | 1640x624 @2x | avatar-safe |
| YouTube channel art | 2560x1440 | 3840x2160 (4K) | logo inside the ~1546x423 safe area that survives every device crop |
| Open Graph card | 1200x630 | 2400x1260 @2x | link unfurls for the site |

### /wallpapers
`1920x1080` and `4K` are two different resolutions, so **both** are here:

- `wallpaper-{light,dark}-1920x1080-fullhd.png` — Full HD
- `wallpaper-{light,dark}-3840x2160-4k.png` — true 4K UHD
- `wallpaper-mark-only-{light,dark}-*` — same layouts without the wordmark, for a
  cleaner desktop

Layout is the centred lockup over a large, very low-opacity echo of the mark
bleeding off the right edge, so desktop icons on the left stay readable.

### brand-kit-overview.png
3200x3000 visual summary of the whole kit — lockups, marks, colour, type, contents.

## Using it
- Reach for the **SVGs** first for anything vector-capable (web favicons, print,
  further edits).
- Don't recolour the mark outside blue/white without redrawing stroke weights —
  the linework is tuned for those two values.
- Keep clear space around the mark roughly equal to the gap between the ring and
  the wordmark in the primary lockup.
