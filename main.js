$(document).ready(function () {
    $('header button').click(function () {
        let form = $('form');
        if (form.is(':visible')) {
            form.slideUp();
        } else {
            form.slideDown();
        }
    });
    $('form').on('submit', function (e) {
        e.preventDefault();
        const nomeNovaTarefa = $('#nome-tarefa').val();
        const novoItem = $(`<li style="display:none">${nomeNovaTarefa}</li>`);
        $('<button class="excluir"></button>').appendTo(novoItem);
        novoItem.appendTo('ul');
        novoItem.fadeIn();
        $('#nome-tarefa').val('');
    });
    $('ul').on('click', 'li', function () {
        $(this).toggleClass('checked');
    });
    $('ul').on('click', 'li button', function (e) {
        e.stopPropagation();
        const item = $(this).parent('li');
        item.fadeOut();
        setTimeout(function () {
            item.remove();
        }, 1000);
    });
});
