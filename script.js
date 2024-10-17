document.addEventListener('DOMContentLoaded', () => {
    const uri = new URI(window.location.href);
    const guest = uri.query(true).guest;
  
    const guestName = document.getElementById('guest-name');
    if (guestName) {
      if (guest) {
        guestName.textContent = `${guest}`;
      }
    }
  });

function openInvitation() {
    const cover = document.getElementById('cover');
    const content = document.getElementById('ray');
  
    cover.classList.add('hidden');
  
    setTimeout(() => {
      cover.style.display = 'none';
    }, 500);
  
    content.style.display = 'block';
  }

function playAudio(){
    const musik = document.querySelector('#player');
    const imgmusik = document.querySelector('#imgmusik');
    if(musik.paused) {
        musik.play();
        imgmusik.src = "Assets/image/icon_music.png";
    } else {
        musik.pause();
        imgmusik.src = "Assets/image/icon_music_dis.png";
    }
}

function copyText() {
    navigator.clipboard.writeText
        ("8543920179");

    alert("Nomor Rekening Telah Disalin")
}