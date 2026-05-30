/*******************************************************
         * 1. PLAYLIST MÚSICA (12 Canciones)
         *******************************************************/
const PLAYLIST = [
    { title: "Body Paint", artist: "Arctic Monkeys", file: "audio/Body Paint.mp3" },
    { title: "Brillas", artist: "León Larregui", file: "audio/cancion_1.mp3" },
    { title: "Locos", artist: "León Larregui", file: "audio/Locos.mp3" },
    { title: "Lovers", artist: "Anna of the North", file: "audio/Lovers.mp3" },
    { title: "Lovers Rock", artist: "TV Girl", file: "audio/Lovers Rock.mp3" },
    { title: "Lover Is a Day", artist: "Cuco", file: "audio/Lover Is a Day.mp3" },
    { title: "Arrullo de Estrellas", artist: "Zoé", file: "audio/Arrullo de Estrellas.mp3" },
    { title: "Química Mayor", artist: "Mon Laferte", file: "audio/Quimica Mayor.mp3" },
    { title: "Cariño", artist: "The Marías", file: "audio/Carino.mp3" },
    { title: "Si Supieras", artist: "Kevin Kaarl/Ed Maverick", file: "audio/Si Supieras.mp3" },
    { title: "Te Quiero Tanto", artist: "Kevin Kaarl", file: "audio/Te Quiero Tanto.mp3" },
    { title: "Do I Wanna Know?", artist: "Arctic Monkeys", file: "audio/Do I Wanna Know.mp3" },
    { title: "Stop The World I Wanna Get Off With You", artist: "Arctic Monkeys", file: "audio/Stop The World.mp3" },
    { title: "Es que yo te quiero a ti", artist: "Kevin Kaarl", file: "audio/Es que yo te quiero a ti.mp3" },
    { title: "505", artist: "Arctic Monkeys", file: "audio/505.mp3" },
    { title: "I Wanna Be Yours", artist: "Arctic Monkeys", file: "audio/I Wanna Be Yours.mp3" },
    { title: "All I Need", artist: "Radiohead/Air", file: "audio/All I Need.mp3" },
    { title: "And I Love Her", artist: "The Beatles", file: "audio/And I Love Her.mp3" },
    { title: "Baby I'm Yours", artist: "Arctic Monkeys", file: "audio/Baby Im Yours.mp3" },
    { title: "No. 1 Party Anthem", artist: "Arctic Monkeys", file: "audio/No 1 Party Anthem.mp3" },
    { title: "Can't Help Falling in Love", artist: "Elvis Presley", file: "audio/Cant Help Falling in Love.mp3" },
    { title: "I Could Die For You", artist: "Red Hot Chili Peppers", file: "audio/I Could Die For You.mp3" },
    { title: "Hasta la Raíz", artist: "Natalia Lafourcade", file: "audio/cancion_3.mp3" },
    { title: "Eres", artist: "Café Tacvba", file: "audio/cancion_4.mp3" },
    { title: "Disfruto", artist: "Carla Morrison", file: "audio/cancion_5.mp3" },
    { title: "Tus Ojos", artist: "Los Cafres", file: "audio/cancion_6.mp3" },
    { title: "Yellow", artist: "Coldplay", file: "audio/cancion_7.mp3" },
    { title: "Perfect", artist: "Ed Sheeran", file: "audio/cancion_8.mp3" },
    { title: "Ojos Color Sol", artist: "Calle 13", file: "audio/cancion_9.mp3" },
    { title: "Todo Cambió", artist: "Camila", file: "audio/cancion_10.mp3" },
    { title: "Nothing", artist: "Bruno Major", file: "audio/cancion_11.mp3" },
    { title: "Amor de Mis Amores", artist: "Natalia Lafourcade", file: "audio/cancion_12.mp3" }
];

/*******************************************************
 * 2. AUDIOS "EXTRAÑAME" (12 Audios)
 *******************************************************/
const AUDIOS_EXTRANAME = [
    { text: "Un mensajito lleno de amor directo a tu corazón para alegrar tu día... 💜", file: "audio/extraname_1.m4a" },
    { text: "Recuerda siempre lo muchísimo que vales para mí y que eres mi niña preciosa. 💜", file: "audio/extraname_2.m4a" },
    { text: "Aquí estoy contigo, cerquita de ti, abrazándote en la distancia pase lo que pase. ✨", file: "audio/extraname_3.m4a" },
    { text: "Eres mi pensamiento favorito de cada día. ¡Te amo con todo mi ser! 😘", file: "audio/extraname_4.m4a" },
    { text: "Sonríe, mi bebecita bonita, tu sonrisa es la que ilumina todo mi mundo. 🌟", file: "audio/extraname_5.m4a" },
    { text: "Nunca olvides que eres mi constante, mi norte y mi absoluta calma. ¡Te extraño! 💜", file: "audio/extraname_6.m4a" },
    { text: "Cada segundito sin ti se siente largo, pero saber que existes lo compensa todo. 🧸", file: "audio/extraname_7.m4a" },
    { text: "Daría lo que fuera por darte un abracito justo ahora mi niña hermosa. 🫂", file: "audio/extraname_8.m4a" },
    { text: "Gracias por existir, gracias por cruzarte en mi camino y hacer mi vida tan feliz. 💜", file: "audio/extraname_9.m4a" },
    { text: "Cierra los ojitos un segundo, respira profundo y recuerda lo mucho que te amo. 🧘‍♀️💜", file: "audio/extraname_10.m4a" },
    { text: "Eres mi sueño hecho realidad y mi futuro favorito. ¡Te quiero muchísimo! 🔮✨", file: "audio/extraname_11.m4a" },
    { text: "Solo pasaba a recordarte que eres la mujer más perfecta y preciosa del universo entero. 🌺", file: "audio/extraname_12.m4a" }
];

/*******************************************************
 * 3. CONTADOR DE TIEMPO
 *******************************************************/
const fechaInicio = new Date('2025-09-29T00:00:00');
function actualizarContador() {
    const ahora = new Date();
    let mesesTotales = (ahora.getFullYear() - fechaInicio.getFullYear()) * 12 + (ahora.getMonth() - fechaInicio.getMonth());
    let fechaMesReferencia = new Date(fechaInicio);
    fechaMesReferencia.setMonth(fechaMesReferencia.getMonth() + mesesTotales);
    if (fechaMesReferencia > ahora) {
        mesesTotales--;
        fechaMesReferencia = new Date(fechaInicio);
        fechaMesReferencia.setMonth(fechaMesReferencia.getMonth() + mesesTotales);
    }
    const msRestantes = ahora - fechaMesReferencia;
    const dias = Math.floor(msRestantes / (1000 * 60 * 60 * 24));
    const horas = Math.floor((msRestantes % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((msRestantes % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((msRestantes % (1000 * 60)) / 1000);

    document.getElementById('c-meses').innerText = String(mesesTotales).padStart(2, '0');
    document.getElementById('c-dias').innerText = String(dias).padStart(2, '0');
    document.getElementById('c-horas').innerText = String(horas).padStart(2, '0');
    document.getElementById('c-min').innerText = String(minutos).padStart(2, '0');
    document.getElementById('c-seg').innerText = String(segundos).padStart(2, '0');
}
setInterval(actualizarContador, 1000);
actualizarContador();

/*******************************************************
 * 4. LIGHTBOX PREVISUALIZADOR
 *******************************************************/
let imagenesGaleria = [];
let indiceImagenActual = 0;

document.addEventListener("DOMContentLoaded", () => {
    imagenesGaleria = Array.from(document.querySelectorAll('.foto-card-wrapper'));
});

function verImagen(elemento, rutaSrc, titulo) {
    indiceImagenActual = imagenesGaleria.indexOf(elemento);

    const lightbox = document.getElementById('global-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');

    const imgInterior = elemento.querySelector('img');
    if (imgInterior && imgInterior.naturalWidth > 0) {
        lightboxImg.src = imgInterior.src;
    } else {
        lightboxImg.src = "https://via.placeholder.com/800x800/100b1e/9d4edd?text=" + encodeURIComponent("Foto: " + titulo);
    }

    lightboxCaption.innerText = titulo + " (Guarda como: " + rutaSrc + ")";
    lightbox.classList.add('active');
}

function cambiarImagen(event, direccion) {
    // Evita el cierre del lightbox al hacer clic en los botones
    if (event) event.stopPropagation();
    if (imagenesGaleria.length === 0) return;

    indiceImagenActual += direccion;
    if (indiceImagenActual >= imagenesGaleria.length) {
        indiceImagenActual = 0;
    } else if (indiceImagenActual < 0) {
        indiceImagenActual = imagenesGaleria.length - 1;
    }

    const siguienteElemento = imagenesGaleria[indiceImagenActual];
    // Para obtener los parámetros originales usamos el atributo onclick
    // o simulamos un click (simular click es más sencillo si solo queremos usar la misma función)
    siguienteElemento.click();
}

function cerrarLightbox() { document.getElementById('global-lightbox').classList.remove('active'); }

/*******************************************************
 * 5. CUPONES DE AMOR
 *******************************************************/
function canjearCupon(elemento, regalo) {
    if (!elemento.classList.contains('canjeado')) {
        elemento.classList.add('canjeado');
        elemento.querySelector('.cupon-btn').innerText = "¡Canjeado! 💜";
        alert("¡Felicidades mi vida! Has canjeado este vale por: " + regalo + ". ¡Pídemelo cuando gustes! Te amo.");
    }
}

/*******************************************************
 * 6. LÓGICA DEL REPRODUCTOR FLOTANTE
 *******************************************************/
let currentTrackIndex = 0;
const audioPlayer = document.getElementById('global-audio-player');
const btnPlayPause = document.getElementById('btn-play-pause');
const disco = document.getElementById('reproductor-disco');
const trackTitulo = document.getElementById('track-titulo');
const trackArtista = document.getElementById('track-artista');
const progresoBarra = document.getElementById('progreso-barra');
const progresoContenedor = document.getElementById('progreso-contenedor');

function cargarCancion(index) {
    const track = PLAYLIST[index];
    audioPlayer.src = track.file;
    trackTitulo.innerText = track.title;
    trackArtista.innerText = track.artist;
    progresoBarra.style.width = '0%';
}
function togglePlayPause() {
    if (audioPlayer.paused) {
        audioPlayer.play().catch(e => console.log("Se requiere interacción inicial"));
        btnPlayPause.innerText = '⏸️';
        disco.style.animationPlayState = 'running';
    } else {
        audioPlayer.pause();
        btnPlayPause.innerText = '▶️';
        disco.style.animationPlayState = 'paused';
    }
}
function siguienteCancion() {
    currentTrackIndex = (currentTrackIndex + 1) % PLAYLIST.length;
    cargarCancion(currentTrackIndex);
    audioPlayer.play().catch(() => { });
    btnPlayPause.innerText = '⏸️';
    disco.style.animationPlayState = 'running';
}
function cancionAnterior() {
    currentTrackIndex = (currentTrackIndex - 1 + PLAYLIST.length) % PLAYLIST.length;
    cargarCancion(currentTrackIndex);
    audioPlayer.play().catch(() => { });
    btnPlayPause.innerText = '⏸️';
    disco.style.animationPlayState = 'running';
}
audioPlayer.addEventListener('timeupdate', () => {
    const porcentaje = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progresoBarra.style.width = (porcentaje || 0) + '%';
});
audioPlayer.addEventListener('ended', siguienteCancion);
function adelantarCancion(e) {
    const clickX = e.offsetX;
    const anchoTotal = progresoContenedor.clientWidth;
    audioPlayer.currentTime = (clickX / anchoTotal) * audioPlayer.duration;
}
cargarCancion(currentTrackIndex);

/*******************************************************
 * 7. LÓGICA MODAL "EXTRAÑAME"
 *******************************************************/
const modal = document.getElementById('modal-extraname');
const modalTexto = document.getElementById('modal-mensaje-texto');
const modalAudioPlayer = document.getElementById('modal-audio-player');

function abrirModalExtrañame() {
    if (!audioPlayer.paused) {
        audioPlayer.pause();
        btnPlayPause.innerText = '▶️';
        disco.style.animationPlayState = 'paused';
    }
    modal.classList.add('active');
    reproducirAudioAleatorio();
}
function reproducirAudioAleatorio() {
    const indice = Math.floor(Math.random() * AUDIOS_EXTRANAME.length);
    modalTexto.innerText = AUDIOS_EXTRANAME[indice].text;
    modalAudioPlayer.src = AUDIOS_EXTRANAME[indice].file;
    modalTexto.style.opacity = 0;
    setTimeout(() => { modalTexto.style.opacity = 1; }, 200);
    modalAudioPlayer.play().catch(() => { });
}
function cerrarModalExtrañame() {
    modalAudioPlayer.pause();
    modalAudioPlayer.src = "";
    modal.classList.remove('active');
}

/*******************************************************
 * 8. LLUVIA DE FLORES ANIMADA (emojis + SVG)
 *******************************************************/
const emojisFlores = ["🌷", "🌼", "🏵️", "🌸", "🌹", "🌺", "💮", "🌻"];
const contenedorFlores = document.getElementById('flower-container');

/* --- Generadores SVG de flores --- */
function svgTulipan(color) {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 60" width="48" height="60">
              <defs>
                <radialGradient id="tg${color.replace('#', '')}" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stop-color="${color}" stop-opacity="1"/>
                  <stop offset="100%" stop-color="${shadeColor(color, -40)}" stop-opacity="1"/>
                </radialGradient>
              </defs>
              <path d="M24 58 Q22 45 24 35" stroke="#4a7c40" stroke-width="2.5" fill="none" stroke-linecap="round"/>
              <path d="M24 48 Q14 43 13 36 Q20 38 24 45" fill="#5a9a50" opacity="0.85"/>
              <ellipse cx="18" cy="24" rx="7" ry="13" fill="url(#tg${color.replace('#', '')})" transform="rotate(-18,18,24)" opacity="0.92"/>
              <ellipse cx="30" cy="24" rx="7" ry="13" fill="url(#tg${color.replace('#', '')})" transform="rotate(18,30,24)" opacity="0.92"/>
              <ellipse cx="24" cy="21" rx="6" ry="14" fill="url(#tg${color.replace('#', '')})" opacity="0.97"/>
              <ellipse cx="21" cy="16" rx="2" ry="5" fill="rgba(255,255,255,0.28)" transform="rotate(-10,21,16)"/>
            </svg>`;
}

function svgGerbera(color) {
    const petalos = [];
    for (let i = 0; i < 14; i++) {
        const ang = (i * 360 / 14);
        petalos.push(`<ellipse cx="24" cy="10" rx="3.5" ry="10" fill="${color}" opacity="0.9" transform="rotate(${ang},24,24)"/>`);
    }
    const petalosInt = [];
    for (let i = 0; i < 10; i++) {
        const ang = (i * 360 / 10) + 13;
        petalosInt.push(`<ellipse cx="24" cy="14" rx="2.2" ry="7" fill="${shadeColor(color, 20)}" opacity="0.85" transform="rotate(${ang},24,24)"/>`);
    }
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 60" width="48" height="60">
              <path d="M24 58 Q23 46 24 36" stroke="#4a7c40" stroke-width="2.5" fill="none" stroke-linecap="round"/>
              <path d="M24 50 Q34 46 36 38 Q28 40 24 48" fill="#5a9a50" opacity="0.85"/>
              ${petalos.join('')}
              ${petalosInt.join('')}
              <circle cx="24" cy="24" r="6.5" fill="#2a1a0a"/>
              <circle cx="24" cy="24" r="4.5" fill="#3d2510"/>
              <circle cx="24" cy="24" r="2.5" fill="#5c3a1e"/>
              <circle cx="22" cy="22" r="1" fill="rgba(255,255,255,0.3)"/>
            </svg>`;
}

function svgLirio(color) {
    const id = color.replace('#', '');
    const darker = shadeColor(color, -40);
    const lighter = shadeColor(color, 30);
    /* 6 pétalos de lirio: 3 exteriores + 3 interiores alternados */
    const petalosExt = [];
    const petalosInt = [];
    const venas = [];
    const pecas = [];
    /* Pétalos exteriores (más grandes, recurvados) */
    for (let i = 0; i < 3; i++) {
        const ang = i * 120;
        petalosExt.push(
            `<path d="M0,-3 C-5,-10 -7,-20 -4,-28 C-2,-32 2,-32 4,-28 C7,-20 5,-10 0,-3Z" fill="url(#lg${id})" opacity="0.92" transform="translate(24,28) rotate(${ang})"/>` +
            `<path d="M0,-5 C-1,-14 -1,-22 0,-28" stroke="rgba(255,255,255,0.18)" stroke-width="0.6" fill="none" transform="translate(24,28) rotate(${ang})"/>`
        );
    }
    /* Pétalos interiores (ligeramente más pequeños, alternados 60°) */
    for (let i = 0; i < 3; i++) {
        const ang = i * 120 + 60;
        petalosInt.push(
            `<path d="M0,-3 C-4.5,-9 -6,-18 -3.5,-25 C-1.5,-29 1.5,-29 3.5,-25 C6,-18 4.5,-9 0,-3Z" fill="url(#lgIn${id})" opacity="0.88" transform="translate(24,28) rotate(${ang})"/>` +
            `<path d="M0,-5 C-0.8,-12 -0.8,-19 0,-25" stroke="rgba(255,255,255,0.15)" stroke-width="0.5" fill="none" transform="translate(24,28) rotate(${ang})"/>`
        );
        /* Pecas/manchitas típicas de los lirios */
        for (let s = 0; s < 3; s++) {
            const sy = -(8 + s * 5);
            const sx = (Math.random() - 0.5) * 3;
            pecas.push(`<circle cx="${sx}" cy="${sy}" r="0.6" fill="${darker}" opacity="0.45" transform="translate(24,28) rotate(${ang})"/>`);
        }
    }
    /* Estambres prominentes con anteras (6 estambres) */
    const estambres = [];
    for (let i = 0; i < 6; i++) {
        const ang = i * 60 + 15;
        estambres.push(
            `<line x1="0" y1="0" x2="0" y2="-11" stroke="#7a9a40" stroke-width="0.8" stroke-linecap="round" transform="translate(24,28) rotate(${ang})"/>` +
            `<ellipse cx="0" cy="-12" rx="1.3" ry="2" fill="#c8841a" transform="translate(24,28) rotate(${ang})"/>`
        );
    }
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 62" width="48" height="62">
              <defs>
                <radialGradient id="lg${id}" cx="50%" cy="30%" r="70%">
                  <stop offset="0%" stop-color="${lighter}" stop-opacity="0.95"/>
                  <stop offset="60%" stop-color="${color}" stop-opacity="0.95"/>
                  <stop offset="100%" stop-color="${darker}" stop-opacity="1"/>
                </radialGradient>
                <radialGradient id="lgIn${id}" cx="50%" cy="35%" r="65%">
                  <stop offset="0%" stop-color="${color}" stop-opacity="0.95"/>
                  <stop offset="100%" stop-color="${darker}" stop-opacity="1"/>
                </radialGradient>
              </defs>
              <path d="M24 60 Q22 48 24 40" stroke="#4a7c40" stroke-width="2.5" fill="none" stroke-linecap="round"/>
              <path d="M24 52 Q14 46 12 36 Q20 39 24 50" fill="#5a9a50" opacity="0.85"/>
              <path d="M24 48 Q32 43 35 34 Q28 38 24 46" fill="#4d8844" opacity="0.7"/>
              ${petalosExt.join('')}
              ${petalosInt.join('')}
              ${pecas.join('')}
              ${estambres.join('')}
              <circle cx="24" cy="28" r="2.2" fill="#5a8a3a" opacity="0.6"/>
            </svg>`;
}

function shadeColor(hex, pct) {
    let [r, g, b] = [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16));
    r = Math.min(255, Math.max(0, r + pct));
    g = Math.min(255, Math.max(0, g + pct));
    b = Math.min(255, Math.max(0, b + pct));
    return '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('');
}

const COLORES_FLORES = ['#ffffff', '#f5e642', '#9d4edd'];
const TIPOS_SVG = [svgTulipan, svgGerbera, svgLirio];
const NOMBRES_SVG = ['Tulipán', 'Gerbera', 'Lirio'];

function crearFlorSVG() {
    const tipo = Math.floor(Math.random() * TIPOS_SVG.length);
    const color = COLORES_FLORES[Math.floor(Math.random() * COLORES_FLORES.length)];
    const wrap = document.createElement('div');
    wrap.classList.add('flower-drop', 'es-svg');
    wrap.innerHTML = TIPOS_SVG[tipo](color);
    return wrap;
}

function hacerLloverFlores() {
    for (let i = 0; i < 55; i++) {
        setTimeout(() => {
            const usarSVG = Math.random() < 0.55;
            let flor;
            if (usarSVG) {
                flor = crearFlorSVG();
            } else {
                flor = document.createElement('div');
                flor.classList.add('flower-drop', 'es-emoji');
                flor.innerText = emojisFlores[Math.floor(Math.random() * emojisFlores.length)];
            }
            flor.style.left = (Math.random() * 102) + "vw";
            const duracion = 3.5 + Math.random() * 4.5;
            flor.style.animationDuration = duracion + "s";
            contenedorFlores.appendChild(flor);
            setTimeout(() => { flor.remove(); }, duracion * 1000 + 200);
        }, i * 120);
    }
}

/*******************************************************
 * 9. FONDO DE ESTRELLAS Y ANIMACIÓN DE CLICS
 *******************************************************/
const canvas = document.getElementById('star-canvas');
const ctx = canvas.getContext('2d');
let estrellas = [];
function redimensionarCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', redimensionarCanvas);
redimensionarCanvas();

class Estrella {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5;
        this.alpha = Math.random();
        this.velocidadBrillo = 0.005 + Math.random() * 0.015;
    }
    dibujar() {
        ctx.fillStyle = `rgba(157, 78, 221, ${this.alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
    actualizar() {
        this.alpha += this.velocidadBrillo;
        if (this.alpha > 1 || this.alpha < 0) this.velocidadBrillo = -this.velocidadBrillo;
    }
}
for (let i = 0; i < 120; i++) estrellas.push(new Estrella());
function animarEstrellas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    estrellas.forEach(e => { e.actualizar(); e.dibujar(); });
    requestAnimationFrame(animarEstrellas);
}
animarEstrellas();

let ultimoClickTime = 0;
document.addEventListener('click', function (e) {
    const target = e.target;
    const esInteractivo = target.closest('button') || target.closest('.foto-card-wrapper') ||
        target.closest('.cupon') || target.closest('.reproductor-flotante') ||
        target.closest('.modal-content') || target.tagName.toLowerCase() === 'audio';

    if (esInteractivo) return;

    const ahora = Date.now();
    if (ahora - ultimoClickTime < 3000) return;
    ultimoClickTime = ahora;

    const icono = document.createElement('div');
    const iconos = ['💜', '⭐', '✨'];
    icono.className = 'click-anim-icon';
    icono.innerText = iconos[Math.floor(Math.random() * iconos.length)];

    icono.style.left = e.pageX + 'px';
    icono.style.top = e.pageY + 'px';

    document.body.appendChild(icono);

    setTimeout(() => {
        icono.remove();
    }, 1000);
});
/*******************************************************
 * 10. OBSERVER: fade-in al hacer scroll
 *******************************************************/
const observerOpts = { threshold: 0.12 };
const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
        }
    });
}, observerOpts);
document.querySelectorAll('.fade-in-section').forEach(el => io.observe(el));

/*******************************************************
 * 11. RAZONES POR LAS QUE TE AMO
 *******************************************************/
const razonesPoeticas = [
    "Por tus lindos ojitos, que brillan como dos luceros y me guían incluso en mis noches más oscuras.",
    "Por tu sonrisita cambiante, a veces al revés y a veces de gatito, que tiene el poder de iluminar mi mundo entero.",
    "Por la inmensa paz que me das, siendo mi refugio seguro cuando todo lo demás es tormenta.",
    "Por esa conexión especial e invisible que nos une, como si nuestras almas se conocieran desde siempre.",
    "Porque me entiendes sin necesidad de palabras, y en tu comprensión encuentro el verdadero significado del amor.",
    "Porque compartimos la misma locura encantadora, y ser 'raritos' juntos es mi estado favorito del ser.",
    "Por la dulce melodía de tu voz, que es la única canción que mi corazón desea escuchar.",
    "Por cada curva y detalle de tu cuerpo perfecto: tu cinturita, tu colita, tu pancita, tus tititas, tus piernitas... que son el lienzo más hermoso que la vida ha creado.",
    "Por lo que me haces sentir cada vez que me miras, una emoción tan profunda que las palabras no alcanzan a describir.",
    "Porque a tu lado he descubierto qué significa realmente ser inmensamente feliz."
];

function mostrarRazon() {
    const textoElemento = document.getElementById('razon-texto');
    const razonAleatoria = razonesPoeticas[Math.floor(Math.random() * razonesPoeticas.length)];
    textoElemento.style.opacity = 0;
    setTimeout(() => {
        textoElemento.innerText = razonAleatoria;
        textoElemento.style.opacity = 1;
        textoElemento.style.transition = "opacity 0.5s ease-in-out";
    }, 200);
}

/*******************************************************
 * 12. EASTER EGG: SECRETO DEL FUTURO
 *******************************************************/
function abrirModalPassword() {
    document.getElementById('error-password').style.display = 'none';
    document.getElementById('input-secreto').value = '';
    document.getElementById('modal-password').classList.add('active');
    setTimeout(() => { document.getElementById('input-secreto').focus(); }, 100);
}

function cerrarModalPassword() {
    document.getElementById('modal-password').classList.remove('active');
}

function verificarPassword() {
    const respuesta = document.getElementById('input-secreto').value.trim().toLowerCase();
    
    // Aceptamos variaciones sutiles como con tilde o sin tilde
    if (respuesta === "bebé grande" || respuesta === "bebe grande") {
        cerrarModalPassword();
        document.getElementById('modal-secreto').classList.add('active');
    } else {
        document.getElementById('error-password').style.display = 'block';
        // Animación de error (vibración)
        const input = document.getElementById('input-secreto');
        input.style.transform = "translateX(-10px)";
        setTimeout(() => input.style.transform = "translateX(10px)", 50);
        setTimeout(() => input.style.transform = "translateX(-10px)", 100);
        setTimeout(() => input.style.transform = "translateX(10px)", 150);
        setTimeout(() => input.style.transform = "translateX(0)", 200);
    }
}

// Permitir presionar Enter en el input
document.getElementById('input-secreto').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        verificarPassword();
    }
});

function cerrarSecreto() {
    document.getElementById('modal-secreto').classList.remove('active');
}

/*******************************************************
 * 13. PLAYLIST MODAL
 *******************************************************/
function renderizarPlaylist() {
    const contenedor = document.getElementById('playlist-lista');
    contenedor.innerHTML = '';
    PLAYLIST.forEach((cancion, index) => {
        const item = document.createElement('div');
        item.className = `playlist-item ${index === currentTrackIndex ? 'active' : ''}`;
        
        const info = document.createElement('div');
        info.className = 'playlist-info';
        
        const titleContainer = document.createElement('div');
        titleContainer.style.display = 'flex';
        titleContainer.style.alignItems = 'center';
        
        const num = document.createElement('span');
        num.style.fontSize = '0.8rem';
        num.style.color = 'var(--accent-purple)';
        num.style.marginRight = '10px';
        num.style.fontWeight = 'bold';
        num.innerText = `${index + 1}.`;
        
        titleContainer.appendChild(num);
        
        const textContainer = document.createElement('div');
        const title = document.createElement('div');
        title.className = 'playlist-title';
        title.innerText = cancion.title;
        const artist = document.createElement('div');
        artist.className = 'playlist-artist';
        artist.innerText = cancion.artist;
        textContainer.appendChild(title);
        textContainer.appendChild(artist);
        titleContainer.appendChild(textContainer);
        
        info.appendChild(titleContainer);
        
        const btn = document.createElement('button');
        btn.className = 'playlist-btn-play';
        btn.innerHTML = (index === currentTrackIndex && !audioPlayer.paused) ? '⏸️' : '▶️';
        btn.onclick = () => reproducirDesdePlaylist(index);
        
        item.appendChild(info);
        item.appendChild(btn);
        contenedor.appendChild(item);
    });
}

function abrirModalPlaylist() {
    renderizarPlaylist();
    document.getElementById('modal-playlist').classList.add('active');
}

function cerrarModalPlaylist() {
    document.getElementById('modal-playlist').classList.remove('active');
}

function reproducirDesdePlaylist(index) {
    if (currentTrackIndex === index) {
        togglePlayPause();
    } else {
        currentTrackIndex = index;
        cargarCancion(currentTrackIndex);
        audioPlayer.play().then(() => {
            document.getElementById('btn-play-pause').innerText = "⏸️";
            disco.style.animationPlayState = 'running';
        }).catch(err => console.log("Auto-play prevenido", err));
    }
    renderizarPlaylist();
}

// Escuchar eventos de audio para actualizar la playlist si está abierta
audioPlayer.addEventListener('play', () => {
    if (document.getElementById('modal-playlist').classList.contains('active')) {
        renderizarPlaylist();
    }
});
audioPlayer.addEventListener('pause', () => {
    if (document.getElementById('modal-playlist').classList.contains('active')) {
        renderizarPlaylist();
    }
});