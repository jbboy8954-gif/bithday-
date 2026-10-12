# Birthday Surprise Website 💗

A free, responsive long-distance birthday page with a countdown, floating hearts, an interactive cake, confetti, a love letter, photo cards, and optional background music.

## Files
- `index.html` — page content and sections
- `style.css` — colors, layout, responsive design, and animations
- `script.js` — countdown, candle interaction, confetti, secret note, and music controls
- `photos/photo1.jpg`, `photos/photo2.jpg`, `photos/photo3.jpg` — add your own images
- `music/our-song.mp3` — add an audio file you are allowed to use

## 1. Customize the message
Open `index.html` in your code editor. Search for `my love`, `birthday girl`, and the sample letter. Change the wording to suit your relationship. You can add her name in the title and heading.

## 2. Add photos
Copy three photos into the `photos` folder and name them exactly:
- `photo1.jpg`
- `photo2.jpg`
- `photo3.jpg`

JPG files are easiest. If your photos use PNG or WEBP, either convert them to JPG or update the matching `src` paths in `index.html`.

Only upload photos you both are comfortable sharing through a public link.

## 3. Add music
Place a music file named `our-song.mp3` inside the `music` folder. Use a song you own or have permission to share. Browsers normally require the visitor to press Play; autoplay with sound is usually blocked.

## 4. Test on your Mac
1. Keep the folder structure intact.
2. Double-click `index.html` to open it in Safari.
3. Test the countdown, cake button, secret note, photo placeholders, and music button.
4. For best testing, use a local development server (optional): in Terminal, `cd` into this folder and run `python3 -m http.server 8000`; then open `http://localhost:8000`. Stop the server with Control+C.

## 5. Free hosting option A: GitHub Pages
1. Sign in or create a free account at https://github.com.
2. Create a new public repository, e.g. `birthday-surprise`.
3. Upload `index.html`, `style.css`, `script.js`, and the `photos` and `music` folders with their files.
4. In the repository, open **Settings → Pages**.
5. Under build/deployment, select **Deploy from a branch**; choose `main` and `/(root)`, then Save.
6. Wait for GitHub Pages to publish and open the URL shown in the Pages section. It usually looks like `https://YOUR-USERNAME.github.io/birthday-surprise/`.

GitHub Pages is public hosting: anyone with the URL may be able to view the page and its uploaded assets. Avoid private details, and check the repository contents before publishing. Public repositories and Pages usage are subject to GitHub's current plan and policy limits.

## 6. Free hosting option B: Netlify Drop
1. Open https://app.netlify.com/drop.
2. Sign in if prompted.
3. Drag the whole `birthday-surprise` folder (or a ZIP of its contents) into the drop area, following the current instructions on the page.
4. Netlify will provide a public website URL. Keep the folder structure intact so the CSS, JavaScript, photos, and song load.

Hosting providers can change their interfaces or free-plan limits, so follow their current on-screen instructions.

## Notes
- The countdown uses the visitor's local device time and targets the next October 21.
- No external JavaScript libraries are needed.
- Google Fonts loads from the internet; if unavailable, the page falls back to system serif/sans-serif fonts.
- The photo cards show placeholders until you add matching files.
