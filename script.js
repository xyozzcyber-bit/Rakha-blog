const blog = document.getElementById("blog-btn");
const flw = document.getElementById("flw-btn");
const swr = document.getElementById("swr-btn");
const tt = document.getElementById("tt-btn");
const email = document.getElementById("gemail-btn");

blog.addEventListener("click", function() {
    window.location.reload();
});

flw.addEventListener("click", function() {
    alert('Follow akun tiktok Rakha dengan klik tombol Tiktok di Contact Me');
});

swr.addEventListener("click", function() {
    window.location.href = 'https://myweb0rakha.netlify.app';
});

tt.addEventListener("click", function() {
    window.open('https://www.tiktok.com/@rakha_mellow', '_self');
});

email.addEventListener('click', function() {
    window.location.href = 'mailto:xyozzcyber@gmail.com?subject=feedback';
});
