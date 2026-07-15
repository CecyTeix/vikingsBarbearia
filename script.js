const formulario = document.querySelector("#formularioA")


formulario.addEventListener("submit", function(e){
    e.preventDefault();

    const nome = document.querySelector("#nome").value;
    const tel = document.querySelector("#tel").value;
    const service = document.querySelector("#service").value;
    const data = document.querySelector("#data").value;
    const dataBR = new Date(data).toLocaleDateString("pt-BR")
    const horario = document.querySelector("#horario").value;

    const texto = `*Novo agendamento!*
    Nome: ${nome}
    Telefone: ${tel}
    Serviço: ${service}
    Data: ${dataBR}
    Horário: ${horario}`;

    const numero = "5585987362181";

    window.open(
        `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`,
        "_blank"
    );
});