document.addEventListener('DOMContentLoaded', () => {
    const openButton = document.getElementById('open-letter-btn');
    const welcomeScreen = document.getElementById('welcome-screen');
    const mainContent = document.getElementById('main-content');
    const birthdaySong = document.getElementById('birthday-song');

    openButton.addEventListener('click', () => {
        // 1. Mulai putar musik
        birthdaySong.play();

        // 2. Buat layar pembuka menghilang (fade out)
        welcomeScreen.style.opacity = '0';
        
        // 3. Setelah animasi fade out selesai, sembunyikan total dan tampilkan konten utama
        setTimeout(() => {
            welcomeScreen.style.display = 'none';
            mainContent.classList.remove('hidden');
        }, 1000); // Waktu harus cocok dengan transisi di CSS (1s)
    });
});