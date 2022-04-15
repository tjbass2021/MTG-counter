$(document).ready(function(){
    
    //CONTADORES DE VIDA
    let cont = 0
    let danoCommander = 0;
    $("#padrao").on("click", function(){
        $(".command").fadeOut();
        $(".comand").addClass("d-none");
        $(".telaCommander").fadeOut();
        $(".telaCommander").addClass("d-none");
        $(".comand").removeClass("d-block");
        $(".telaCommander").removeClass("d-block");
        cont = 20;
        $("#tela").text(cont);

        // RESET

        $("#reset1").on("click", function(){
            cont = 20;
            $("#tela").text(cont);
                
        })

        
    })

    $("#commander").on("click", function(){
        $(".comand").fadeIn();
        $(".comand").addClass("d-block");
        $(".telaCommander").fadeIn();
        $(".telaCommander").addClass("d-block");
        $(".comand").removeClass("d-none");
        $(".telaCommander").removeClass("d-none");
        cont = 40;
        $("#tela").text(cont);

        // RESET

        $("#reset1").on("click", function(){
            cont = 40;
            danoCommander = 0;
            $("#tela").text(cont);
            $("#telaCommander").text(danoCommander);
        
        })
    
    })

    // CONTADOR

    $(".add").on("click", function(){
        cont++
        $("#tela").text(cont);
        
    })
    $(".addPlus").on("click", function(){
        cont = cont + 5;
        $("#tela").text(cont);
    })
    $(".sub").on("click", function(){
        cont--;
        $("#tela").text(cont);
        if(cont <=0){
            cont = 0;
            $("#tela").text(cont);
            
        }
    })
    $(".subPlus").on("click", function(){
        cont = cont - 5;
        $("#tela").text(cont);
        if(cont <=0){
            cont = 0;
            $("#tela").text(cont);
            
        }
    })

    $("#reset1").on("click", function(){
        cont = 20;
        $("#tela").text(cont);
    
    })

    $(".comand").on("click", function(){
        cont--;
        danoCommander++
        $("#tela").text(cont);
        $("#telaCommander").text(danoCommander);
        if(danoCommander >= 21){
            danoCommander = 21;
            cont = 0
            $("#tela").text(0);
            $("#telaCommander").text(21);
        }
    })




})