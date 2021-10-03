const activeMenuTab = (() => {
    const tabs = document.querySelectorAll('a.menu-tab');
    tabs.forEach(link => {
        link.addEventListener('click', e => {
            tabs.forEach(tab => tab.classList.remove('active'));
            e.target.classList.add('active');
        })
    })
})();