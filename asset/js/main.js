// =========================================
// 1. FUNGSI SIDEBAR MENU (Dipakai di Semua Halaman)
// =========================================
function toggleMenu() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  // Cek apakah elemen ada (untuk menghindari error di halaman yang mungkin beda struktur)
  if (!sidebar || !overlay) return;

  const isHidden = sidebar.classList.contains("-translate-x-full");
  if (isHidden) {
    // Buka Menu
    sidebar.classList.remove("-translate-x-full");
    overlay.classList.remove("hidden");
    // Animasi fade in overlay (sedikit delay agar transisi CSS jalan)
    setTimeout(() => {
      overlay.classList.remove("opacity-0");
    }, 10);
  } else {
    // Tutup Menu
    sidebar.classList.add("-translate-x-full");
    overlay.classList.add("opacity-0");
    // Tunggu animasi selesai baru hidden
    setTimeout(() => {
      overlay.classList.add("hidden");
    }, 300);
  }
}

// Event Listener: Tutup menu jika Overlay diklik (area gelap di luar menu)
document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("overlay");
  if (overlay) {
    overlay.addEventListener("click", toggleMenu);
  }
});

// =========================================
// 2. FUNGSI FORMAT RUPIAH (Utility)
// =========================================
// Mengubah angka biasa (misal 150000) menjadi format harga (Rp 150.000)
function formatRupiah(amount) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

// =========================================
// 3. FUNGSI LOGIN MANAGEMENT
// =========================================
// Get relative path to login.html from current page
function getLoginPath() {
  const currentPath = window.location.pathname;

  // Jika sudah di halaman profile
  if (currentPath.includes("/pages/profile/")) {
    return "login.html";
  }
  // Jika di halaman menu
  else if (currentPath.includes("/pages/menu/")) {
    return "../profile/login.html";
  }
  // Jika di halaman payment
  else if (currentPath.includes("/pages/payment/")) {
    return "../profile/login.html";
  }
  // Jika di halaman policy
  else if (currentPath.includes("/pages/Policy/")) {
    return "../profile/login.html";
  }
  // Default (homepage atau tidak diketahui)
  else {
    return "pages/profile/login.html";
  }
}

// Check & Update UI berdasarkan status login
function updateUserButton() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const userButton = document.querySelector("[data-user-button]");
  const userDropdownContent = document.getElementById("userDropdownContent");

  if (userButton) {
    if (currentUser) {
      // User sudah login - ubah button menjadi profile menu
      userButton.style.color = "#b6a176"; // Gold
      userButton.title = "Profile: " + currentUser.nama;

      // Isi dropdown dengan profile info dan logout
      if (userDropdownContent) {
        userDropdownContent.innerHTML = `
          <div class="border-b pb-3 mb-3">
            <p class="text-sm font-semibold text-gray-900">${currentUser.nama}</p>
          </div>
          <button
            onclick="handleLogout()"
            class="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded transition"
          >
            <i class="fas fa-sign-out-alt mr-2"></i> Logout
          </button>
        `;
      }
    } else {
      // User belum login - link ke halaman login
      userButton.style.color = "#b6a176"; // Gold
      userButton.title = "Masuk";
      const loginPath = getLoginPath();
      userButton.onclick = function () {
        window.location.href = loginPath;
      };

      // Kosongkan dropdown
      if (userDropdownContent) {
        userDropdownContent.innerHTML = "";
      }
    }
  }
}

// Logout function
function handleLogout() {
  if (confirm("Yakin ingin logout?")) {
    localStorage.removeItem("currentUser");
    alert("Anda telah logout");
    window.location.href = window.location.href; // Reload halaman
  }
}

// Close dropdown saat klik di luar
document.addEventListener("click", function (event) {
  const userButton = document.querySelector("[data-user-button]");
  const userDropdown = document.getElementById("userDropdown");

  if (userButton && userDropdown) {
    if (
      !userButton.contains(event.target) &&
      !userDropdown.contains(event.target)
    ) {
      userDropdown.classList.add("hidden");
    }
  }
});

// Jalankan saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  updateUserButton();
});

// =========================================
// 4. FUNGSI NAVIGASI AMAN (Optional Helper)
// =========================================
// Membantu navigasi antar folder jika struktur berubah
function navigateTo(path) {
  window.location.href = path;
}
