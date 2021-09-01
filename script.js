let prato, sobremesa, bebida;
          

          //Escolher Lanche
          function escolherBurguer(){
              document.getElementById("burguer").style.borderColor = "green";
              document.getElementById("hotdog").style.borderColor = "white";
              prato = "Burguer";
          }
          function escolherHotdog(){
              document.getElementById("hotdog").style.borderColor = "green";
              document.getElementById("burguer").style.borderColor = "white";
              prato = "HotDog";
          }

          //Escolher Bebida
          function escolherRefri(){
              document.getElementById("refri").style.borderColor = "green";
              document.getElementById("suco").style.borderColor = "white";
              bebida = "Refri";
          }
              
          function escolherSuco(){
              document.getElementById("suco").style.borderColor = "green";
              document.getElementById("refri").style.borderColor = "white";
              bebida = "Suco";
          }
          
          //Escolher Sobremesa
          function escolherPave(){
              document.getElementById("pave").style.borderColor = "green";
              document.getElementById("mousse").style.borderColor = "white";
              sobremesa = "Pave";
          }

          function escolherMousse(){
              document.getElementById("mousse").style.borderColor = "green";
              document.getElementById("pave").style.borderColor = "white";
              sobremesa = "Mousse";
          }

          function finalizarPedido(){
            let mensagem = 
              "Olá, eu gostaria de pedir um combo: "
               + prato + " , " + bebida + " e " + sobremesa;

               window.open("https://wa.me/+5521999999999?text="+mensagem);            
          }