$(document).ready(function () {
    const localStorageKey = "listaTarefas";

    function salvarTarefas() {
        let tarefas = [];
        $("ul li").each(function () {
            let texto = $(this).text();
            let concluida = $(this).hasClass("checked");
            tarefas.push({ texto, concluida });
        });
        localStorage.setItem(localStorageKey, JSON.stringify(tarefas));
    }
    function carregarTarefas() {
        let tarefasSalvas = localStorage.getItem(localStorageKey);
        if (tarefasSalvas) {
            tarefasSalvas = JSON.parse(tarefasSalvas);
            tarefasSalvas.forEach(tarefa => {
                adicionarTarefaNaLista(tarefa.texto, tarefa.concluida);
            });
        }
    }
    function adicionarTarefaNaLista(nome, concluida = false) {
        const novoItem = $(`<li style="display:none">${nome}</li>`);
        $('<button class="excluir"></button>').appendTo(novoItem);
        if (concluida) novoItem.addClass("checked");
        novoItem.appendTo("ul").fadeIn();
    }
    $("header button").click(function () {
        let form = $("form");
        form.is(":visible") ? form.slideUp() : form.slideDown();
    });
    $("form").on("submit", function (e) {
        e.preventDefault();
        const nomeNovaTarefa = $("#nome-tarefa").val().trim();
        if (nomeNovaTarefa !== "") {
            adicionarTarefaNaLista(nomeNovaTarefa);
            salvarTarefas();
        }
        $("#nome-tarefa").val("");
    });
    $("ul").on("click", "li", function () {
        $(this).toggleClass("checked");
        salvarTarefas();
    });
    $("ul").on("click", "li button", function (e) {
        e.stopPropagation();
        const item = $(this).parent("li");
        item.fadeOut(() => {
            item.remove();
            salvarTarefas();
        });
    });
    carregarTarefas();
});
