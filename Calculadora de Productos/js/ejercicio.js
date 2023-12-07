(function () {
    document.querySelector("#formulario").addEventListener("submit", calcular);

    function calcular(e) {

        e.preventDefault();

        const igvPlus = 1.18;



        // Obtenemos los elementos del formulario
        var ques1 = document.querySelector("#formulario input[name=num1]").value;
        var can1 = document.querySelector("#formulario input[name=can1]").value;
        var ques2 = document.querySelector("#formulario input[name=num2]").value;
        var can2 = document.querySelector("#formulario input[name=can2]").value;
        var ques3 = document.querySelector("#formulario input[name=num3]").value;
        var can3 = document.querySelector("#formulario input[name=can3]").value;


        var sIgv1 = ques1 * can1;

        var sIgv2 = ques2 * can2;

        var sIgv3 = ques3 * can3;

        var sIgvTotal = sIgv1 + sIgv2 + sIgv3;


        var cIgv1 = sIgv1 * igvPlus;

        var cIgv2 = sIgv2 * igvPlus;

        var cIgv3 = sIgv3 * igvPlus;

        var cIgvTotal = sIgvTotal * igvPlus;

        console.log(sIgvTotal);
        console.log(cIgvTotal);

        document.getElementById("resultado").innerHTML = "El precio sin IGV es: " + sIgvTotal + "<br>" + "El precio final con IGV es: " + cIgvTotal.toFixed(2);

    }


})()


