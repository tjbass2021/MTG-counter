$(document).ready(function(){

    //CONTADOR

    // let contador = 0;

    //MANA GLOBAL

    let azul = 0;
    let vermelho = 0;
    let verde = 0;
    let branco = 0;
    let preto = 0;
    let incolor = 0;

    //----------

    // CONTADOR DE MANA

    $("#azul").on("click", function(){
        azul++
        $(this).text(azul);
    })

    $("#vermelho").on("click", function(){
        vermelho++
        $(this).text(vermelho);
    })

    $("#verde").on("click", function(){
        verde++
        $(this).text(verde);
    })

    $("#branco").on("click", function(){
        branco++
        $(this).text(branco);
    })

    $("#preto").on("click", function(){
        preto++
        $(this).text(preto);
    })

    $("#incolor").on("click", function(){
        incolor++
        $(this).text(incolor);
    })

    $("#subAzul").on("click", function(){
        azul--
        $("#azul").text(azul);
        if(azul < 0){
            azul = 0;
            $("#azul").text(azul);
        }
    })

    $("#subVermelho").on("click", function(){
        vermelho--
        $("#vermelho").text(vermelho);
        if(vermelho < 0){
            vermelho = 0;
            $("#vermelho").text(vermelho);
        }
    })

    $("#subVerde").on("click", function(){
        verde--
        $("#verde").text(verde);
        if(verde < 0){
            verde = 0;
            $("#verde").text(verde);
        }
    })

    $("#subBranco").on("click", function(){
        branco--
        $("#branco").text(branco);
        if(branco < 0){
            branco = 0;
            $("#branco").text(branco);
        }
    })

    $("#subPreto").on("click", function(){
        preto--
        $("#preto").text(preto);
        if(preto < 0){
            preto = 0;
            $("#preto").text(preto);
        }
    })

    $("#subIncolor").on("click", function(){
        incolor--
        $("#incolor").text(incolor);
        if(incolor < 0){
            incolor = 0;
            $("#incolor").text(incolor);
        }
    })

    $("#reset2").on("click", function(){
        azul = 0;
        vermelho = 0;
        verde = 0;
        branco = 0;
        preto = 0;
        incolor = 0;
        $("#azul").text(azul);
        $("#vermelho").text(vermelho);
        $("#verde").text(verde);
        $("#branco").text(branco);
        $("#preto").text(preto);
        $("#incolor").text(incolor);
    })


    //ALTERAR TEMA

    $(".botao-radiant").on("click", function(){
        //'hasClass' verifica se uma determinada classe existe em um dado elemento
        if($("body").hasClass("bg-nissa") === true){
            $("body").removeClass("bg-nissa");
            $("body").addClass("bg-radiant-serra");
        }else if($("body").hasClass("bg-judith") === true){
            $("body").removeClass("bg-judith");
            $("body").addClass("bg-radiant-serra");

        }else if($("body").hasClass("bg-liliana") === true){
            $("body").removeClass("bg-liliana");
            $("body").addClass("bg-radiant-serra");

        }else if($("body").hasClass("bg-kaya") === true){
            $("body").removeClass("bg-kaya");
            $("body").addClass("bg-radiant-serra");

        }
    })

    $(".botao-judith").on("click", function(){
        //'hasClass' verifica se uma determinada classe existe em um dado elemento
        if($("body").hasClass("bg-nissa") === true){
            $("body").removeClass("bg-nissa");
            $("body").addClass("bg-judith");
        }else if($("body").hasClass("bg-radiant-serra") === true){
            $("body").removeClass("bg-radiant-serra");
            $("body").addClass("bg-judith");

        }else if($("body").hasClass("bg-liliana") === true){
            $("body").removeClass("bg-liliana");
            $("body").addClass("bg-judith");

        }else if($("body").hasClass("bg-kaya") === true){
            $("body").removeClass("bg-kaya");
            $("body").addClass("bg-judith");

        }
    })

    $(".botao-nissa").on("click", function(){
        //'hasClass' verifica se uma determinada classe existe em um dado elemento
        if($("body").hasClass("bg-radiant-serra") === true){
            $("body").removeClass("bg-radiant-serra");
            $("body").addClass("bg-nissa");
        }else if($("body").hasClass("bg-judith") === true){
            $("body").removeClass("bg-judith");
            $("body").addClass("bg-nissa");

        }else if($("body").hasClass("bg-liliana") === true){
            $("body").removeClass("bg-liliana");
            $("body").addClass("bg-nissa");

        }else if($("body").hasClass("bg-kaya") === true){
            $("body").removeClass("bg-kaya");
            $("body").addClass("bg-nissa");

        }
        
    })  

    $(".botao-liliana").on("click", function(){
        //'hasClass' verifica se uma determinada classe existe em um dado elemento
        if($("body").hasClass("bg-radiant-serra") === true){
            $("body").removeClass("bg-radiant-serra");
            $("body").addClass("bg-liliana");
        }else if($("body").hasClass("bg-judith") === true){
            $("body").removeClass("bg-judith");
            $("body").addClass("bg-liliana");

        }else if($("body").hasClass("bg-nissa") === true){
            $("body").removeClass("bg-nissa");
            $("body").addClass("bg-liliana");

        }else if($("body").hasClass("bg-kaya") === true){
            $("body").removeClass("bg-kaya");
            $("body").addClass("bg-liliana");

        }
    })

    $(".botao-kaya").on("click", function(){
        //'hasClass' verifica se uma determinada classe existe em um dado elemento
        if($("body").hasClass("bg-radiant-serra") === true){
            $("body").removeClass("bg-radiant-serra");
            $("body").addClass("bg-kaya");
        }else if($("body").hasClass("bg-judith") === true){
            $("body").removeClass("bg-judith");
            $("body").addClass("bg-kaya");

        }else if($("body").hasClass("bg-nissa") === true){
            $("body").removeClass("bg-nissa");
            $("body").addClass("bg-kaya");

        }else if($("body").hasClass("bg-liliana") === true){
            $("body").removeClass("bg-liliana");
            $("body").addClass("bg-kaya");

        }
    })
    
})