const menu = new ContextMenu(
    {
        'theme': 'default',
        'items': [
            {'icon': 'envelope', 'name': 'Enviar',  action: function() { console.log('clicou enviar'); } },
            {'icon': 'download', 'name': 'Baixar',  action: function() { console.log('clicou baixar'); } },
            {'icon': 'trash',    'name': 'Remover', action: function() { console.log('clicou remover'); } },
        ]
    }
);

document.addEventListener('contextmenu', openContextMenu, false);

function openContextMenu(evt){
    evt.preventDefault();
    const time = menu.isOpen() ? 100 : 0;

    menu.hide();
    setTimeout(() => { menu.show(evt.pageX, evt.pageY) }, time);
    document.addEventListener('click', hideContextMenu, false);
}

function hideContextMenu(evt){
    menu.hide();
    document.removeEventListener('click', hideContextMenu);
}

