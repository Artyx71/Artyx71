document.querySelectorAll('a[href^="#"]').forEach((link) => link.addEventListener('click', () => document.activeElement?.blur()));
