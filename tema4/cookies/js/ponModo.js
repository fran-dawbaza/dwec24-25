// Aplicar modo claro u oscuro

function getCookie(name) {
    const cookie = document.cookie
                    .split('; ')
                    .find(row => row.startsWith(name + '='))
                    ?.split('=')[1];
    return cookie ? decodeURIComponent(cookie):null;
}

document.documentElement.className = getCookie('modo') ?? 'claro';