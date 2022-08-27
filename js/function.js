$(function(){

    $('.mobile').click(function () {
        $('.mobile ul').slideToggle(1000); 

    });


    //pagina de venda: barra de pesquisa

    var currentValue = 0;
    var isDrag = false;
    var preco_maximo = 70000;
    var preco_atual = 0;

    $('.pointer-barra').mousedown(function(){
        isDrag = true;
        
    })

    $(document).mouseup(function(){ 
        isDrag = false;
        enableTextSelection();
    });

    $('.barra-preco').mousemove(function(e){
        if(isDrag){
            disableTextSelection();
            var elbase = $(this);
            var mousex = e.pageX - elbase.offset().left;
                if(mousex < 0){
                    mousex = 0;
                }
                if(mousex > elbase.width()){
                    mousex = elbase.width();
                }


                $('.pointer-barra').css('left', (mousex-13)+'px');

                currentValue = (mousex / elbase.width()) * 100;
                $('.barra-preco-fill').css('width', currentValue+'%');

                preco_atual = (currentValue/100) * preco_maximo;
                $('.preco_pesquisa').html('R$'+preco_atual);
        }
    })


    function disableTextSelection(){
        $("body").css("-webkit-user-select","none");
        $("body").css("-moz-user-select","none");
        $("body").css("-ms-user-select","none");
        $("body").css("-o-user-select","none");
        $("body").css("user-select","none");
    }

    function enableTextSelection(){
        $("body").css("-webkit-user-select","auto");
        $("body").css("-moz-user-select","auto");
        $("body").css("-ms-user-select","auto");
        $("body").css("-o-user-select","auto");
        $("body").css("user-select","auto");
    }



    // pagina de venda-teste: slider dinâmico


    var imgShow = 3;
    var maxIndex = Math.ceil($(".mini-img-wraper").length/3) - 1;
    var curIndex = 0;


    initSlider();
    navigateSlider();
    clickSlider();

    function initSlider(){
        var amt = $('.mini-img-wraper').length * 33.3;
        var elScroll = $('.nav-galeria-wraper');
        var elSingle = $('.mini-img-wraper');
        elScroll.css('width',amt+'%');
        elSingle.css('width',33.3*(100/amt)+'%');
    }

    function navigateSlider(){
        $('.arrow-right-nav').click(function(){
            if(curIndex < maxIndex){
                curIndex++;
                var elOff = $('.mini-img-wraper').eq(curIndex*3).offset().left - $('.nav-galeria-wraper').offset().left;
                $('.nav-galeria').animate({'scrollLeft':elOff+'px'});
            }else{
                //console.log("chegamos ate o final");
            }
        });

        $(".arrow-left-nav").click(function(){
            if(curIndex > 0){
                curIndex--;
                var elOff = $('.mini-img-wraper').eq(curIndex*3).offset().left - $('.nav-galeria-wraper').offset().left;
                $('.nav-galeria').animate({'scrollLeft':elOff+'px'});
            }else{
                //console.log("chegamos ate o final");
            }
        })
    }


    function clickSlider(){
        $('.mini-img-wraper').click(function(){
            $('.mini-img-wraper').css('background-color','transparent');
            $(this).css('background-color','rgb(210,210,210)');
            var img = $(this).children().css('background-image');
            $('.foto-destaque').css('background-image',img);
        })

        $('.mini-img-wraper').eq(0).click();
    }


    //click em contato e redirecionado

    $('[goto=contato]').click(function(){
        $('html, body').animate({'scrollTop':$('#contato').offset().top});
        return false;
    })


})