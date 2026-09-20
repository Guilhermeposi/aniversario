/* =================================================
   TELA INICIAL
   ================================================= */


const botaoAbrir =
    document.querySelector("#botao-abrir");


if (botaoAbrir) {


    /* =============================================
       PASSAR O MOUSE NO TEXTO
       ============================================= */

    botaoAbrir.addEventListener(
        "mouseenter",
        function() {


            // 10% de chance de jumpscare

            const vaiDarJumpscare =
                Math.random() < 0.05;


            if (vaiDarJumpscare) {


                const gato =
                    document.createElement("img");


                gato.src =
                    "gatoJumpscare.jpg";


                gato.classList.add(
                    "jumpscare"
                );


                document.body.appendChild(
                    gato
                );


                setTimeout(function() {

                    gato.remove();

                }, 1000);


                return;
            }


            // 90% de chance de gato normal

            const fotos = [

                "gato1.jpg",
                "gato2.jpg",
                "gato3.jpg",
                "gato4.jpg",
                "gato5.jpg"

            ];


            const gato =
                document.createElement("img");


            gato.src =
                fotos[
                    Math.floor(
                        Math.random() *
                        fotos.length
                    )
                ];


            gato.classList.add(
                "gato"
            );


            gato.style.left =
                Math.random() * 80 + "%";


            gato.style.top =
                Math.random() * 80 + "%";


            document.body.appendChild(
                gato
            );


            setTimeout(function() {

                gato.remove();

            }, 1000);

        }
    );


    /* =============================================
       CLICAR PARA ABRIR
       ============================================= */

    botaoAbrir.addEventListener(
        "click",
        function(event) {


            event.preventDefault();


            /* =====================================
               ÁUDIOS
               ===================================== */

            const comemoracao =
                document.querySelector(
                    "#som-comemoracao"
                );


            const musica =
                document.querySelector(
                    "#musica"
                );


            // Toca o som de comemoração
                comemoracao.play();

            // Começa a música depois de 1 segundo
                setTimeout(function() {
                    musica.play();
                    }, 500);


            /* =====================================
               REMOVE A TELA INICIAL
               ===================================== */

            const tela =
                document.querySelector(
                    "#tela-inicial"
                );


            tela.style.display =
                "none";


            /* =====================================
               CONFETES
               ===================================== */

            function criarConfete() {


                const confete =
                    document.createElement("div");


                confete.classList.add(
                    "confete"
                );


                confete.style.left =
                    Math.random() * 100 + "vw";


                confete.style.animationDuration =
                    (2 + Math.random() * 2) + "s";


                confete.style.backgroundColor = [

                    "#ff4f81",
                    "#ffd166",
                    "#06d6a0",
                    "#118ab2",
                    "#9b5de5"

                ][
                    Math.floor(
                        Math.random() * 5
                    )
                ];


                document.body.appendChild(
                    confete
                );


                setTimeout(function() {

                    confete.remove();

                }, 4000);

            }


            // Cria os primeiros confetes

            for (
                let i = 0;
                i < 80;
                i++
            ) {

                setTimeout(function() {

                    criarConfete();

                }, i * 30);

            }


            /* =====================================
               FLORES DE SAKURA
               ===================================== */

            let sakuraAtiva = true;


            function criarSakura() {


                if (!sakuraAtiva) {
                    return;
                }


                const sakura =
                    document.createElement("div");


                sakura.classList.add(
                    "sakura"
                );


                sakura.textContent =
                    "🌸";


                sakura.style.left =
                    Math.random() * 100 + "vw";


                sakura.style.fontSize =
                    (15 + Math.random() * 25) + "px";


                sakura.style.animationDuration =
                    (5 + Math.random() * 5) + "s";


                document.body.appendChild(
                    sakura
                );


                setTimeout(function() {

                    sakura.remove();

                }, 10000);

            }


            // Cria flores continuamente

            const intervaloSakura =
                setInterval(function() {

                    criarSakura();

                }, 500);


            /* =====================================
               PARAR SAKURA AO ROLAR A PÁGINA
               ===================================== */

            window.addEventListener(
                "scroll",
                function() {

                    if (window.scrollY > 0) {

                        sakuraAtiva = false;

                        clearInterval(
                            intervaloSakura
                        );

                    }

                },
                { once: true }
            );

        }
    );

}

/* =====================================
   PARAR MÚSICA AO ROLAR
   ===================================== */

window.addEventListener(
    "scroll",
    function() {

        if (window.scrollY > 100) {

            musica.pause();

            musica.currentTime = 0;

        }

    },
    { once: true }
);