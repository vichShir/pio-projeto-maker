var div = document.createElement("div");
//document.body.appendChild(organizador_noticias);


div.id = 'noticia_headerEnviadas';
div.innerHTML = "<a href='jornal/pags_noticias/noticia.html'><img src='/jornal/pags_noticias/imagens/NoticiaTorneioDasCoresTESTE.jpg' class='noticia_imagem'></a><a href='jornal/pags_noticias/noticia.html'><h1 class='titulo_noticia'>Abertura do Torneio das Cores</h1></a> <center><p align='justify' class='paragraph_noticia'>Segunda-feira no dia 24 de Outubro, ocorreu a abertura do[...]</p></center>";

//document.getElementById("noticia_headerEventos").className += " test";
div.className = "test";
document.getElementById("organizador_noticias").appendChild(div);