$(document).ready(function () {
    $('header button').click(function () {
        let form = $('form');
        if (form.is(':visible')) {
            form.slideUp();
        } else {
            form.slideDown();
        }
    });
    $('#fechar').click(function () {
        $('form').slideUp();
    }
    );
    $('form').on('submit', function (e) {
        e.preventDefault();
        const nomeNovaTarefa = $('#nome-tarefa').val();
        const novoItem = $(`<li style="display:none">${nomeNovaTarefa}</li>`);
        $(`
        <button class='excluir'></button>
    `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn();
        $('#nome-tarefa').val('');
        $('li').click(function () {
            $(this).toggleClass('checked');
        })
        $('li button').click(function () {
            const item = $(this).parent('li');
            console.log(item);
            item.fadeOut();
            
            setTimeout(function () {
                item.remove();
            }, 1000);
        });
    })
})