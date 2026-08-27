<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Técnicas de evaluación

    p Bernal (2003) describe las siguientes técnicas de evaluación de la información que pueden efectuarse:

    AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-2")
      .row.justify-content-center(titulo="Análisis de Pareto")
        .col-md-12.mb-4.mb-md-0.p-4.col-sm-12.col-lg-7
          p Es una técnica que permite identificar y priorizar los problemas o las causas más significativas mediante la representación gráfica de su frecuencia, con el fin de orientar las acciones de mejora hacia los aspectos de mayor impacto. 
          ul.lista-ul
            li.d-flex.mb-2
              i.fas.fa-check-circle
              |Identificar el problema que se desea analizar, es prioritario identificar el problema que está afectando el hecho, evento, situación a investigar.
            li.d-flex.mb-2
              i.fas.fa-check-circle
              |Agrupar los datos que ayudan a evaluar el problema, identificando en las categorías o problemas (eje de las y) y la frecuencia de ocurrencia de esos problemas (eje de las x).

            li.d-flex.mb-2
              i.fas.fa-check-circle
              |Ordenar los datos en una tabla de forma decreciente de la frecuencia (de mayor a menor), luego calcular sus porcentajes y acumulados.

            li.d-flex.mb-2
              i.fas.fa-check-circle
              | Construir una gráfica de barras con estos datos.

        .col-md-9.blanco.p-4.col-sm-6.col-lg-4
          .titulo-sexto.color-secundario
              h5 Figura 7. 
              | Análisis de Pareto
          figure
            img(src='@/assets/curso/temas/tema5/img01.svg', alt='La figura presenta una gráfica con varias barras azules, y una línea roja que uno puntos rojos')
            figcaption Nota. Adaptada de Título de la obra, por José Marcondes, 2020.

      .row.justify-content-center.p-4(titulo="Diagrama de causa efecto")
        .col-md-12.mb-4.mb-md-0
          p Bernal (2003, p. 180) señala que el diagrama de causa y efecto (espina de pescado) es una gráfica mediante la cual los miembros de un equipo representan, categorizan y evalúan todos los posibles motivos de un resultado o reacción; por lo general, se expresa como un problema para resolver. También se le conoce como diagrama de Ishikawa. 
        .col-md-10.blanco.p-4
          .titulo-sexto.color-secundario
              h5 Figura 8. 
              | Diagrama de causa y efecto
          figure
            img(src='@/assets/curso/temas/tema5/img02.svg', alt='La figura presenta un gráfico tipo espina de pescado.')
            figcaption Nota. Adaptada de IBM (2007)
      
      .row.justify-content-center(titulo="Gráficas de control")
        .col-lg-6.mb-4.mb-md-0.col-md-12
          p Según Levin y Rubin (1996), "estas gráficas reciben el nombre de diagramas de control y son de varios tipos" (p. 528): 
          ul.lista-ul
            li
              i.fas.fa-check-circle
              | Diagramas de control para medias de procesos.
            li
              i.fas.fa-check-circle
              | Diagramas R de control para variabilidad en los procesos.
            li
              i.fas.fa-check-circle
              | Diagramas de control para atributos.(p 528).


        .col-lg-5.blanco.p-4.col-md-9
          .titulo-sexto.color-secundario
              h5 Figura 9. 
              | Gráfico de control X-R.
          figure
            img(src='@/assets/curso/temas/tema5/figura9.svg', alt='La grafica presenta  puntos situados en un zigzag irregural unidos por una línea azul.')
            figcaption Nota. Adaptada de Grupo 10 (2015)
       
      .row.justify-content-center.p-4(titulo="Distribución de frecuencias y representaciones gráficas")
        .col-md-12.mb-4.mb-md-0
          p De acuerdo con Mason y Lind (1994), es el conjunto de datos en categorías que muestran el número de observaciones de cada categoría; en otras palabras, una distribución de frecuencias indica el número de veces que ocurre cada valor o dato en una tabla de resultados (p. 24).
        .col-lg-5.blanco.p-4.mx-4.col-md-9.mb-2
          p Histogramas son medios gráficos para la representación de la distribución de frecuencias.
          .titulo-sexto.color-secundario
              h5 Figura 10. 
              | Histograma
          figure
            img(src='@/assets/curso/temas/tema5/figura10.svg', alt='La grafica presenta varias barras de color azul.')
            figcaption Nota. Adaptada de Marta (2019)

        .col-lg-5.blanco.p-4.col-md-9
          p Polígonos de frecuencia son representaciones gráficas que reflejan una imagen veloz de los más importantes rasgos de los datos de una distribución de frecuencias.
          .titulo-sexto.color-secundario
              h5 Figura 11. 
              | Polígonos de frecuencia
          figure
            img(src='@/assets/curso/temas/tema5/figura11.png', alt='La gráfica presenta puntos unidos por una línea roja que forma una especie de montaña con su trazo.')
            figcaption Nota. Adaptada de Khan Academy (2018)
       
      .row.justify-content-center(titulo="Medidas de tendencia central").p-4
        .col-lg-7.mb-4.mb-md-0.col-md-12
          p Son medidas estadísticas que pretenden resumir en un solo valor a un conjunto de valores. Se reconocen de manera universal las siguientes:
          ul.lista-ul
            li.d-flex.mb-2
              i.fas.fa-check-circle
              | La media o promedio aritmético es la sumatoria de un conjunto de frecuencias divididos por la cantidad total de los mismos.

            li.d-flex.mb-2
              i.fas.fa-check-circle
              | La moda se  identifica con el valor con la frecuencia que más se repite en una tabla de distribución de datos.
              
            li.d-flex.mb-2
              i.fas.fa-check-circle
              | La mediana es el valor que ocupa la posición central de un conjunto de datos ordenados de manera ascendente o descendente. 
          p La simetría representa la relación entre la media, la mediana y la moda dentro de una distribución. Cuando estas medidas tienden a coincidir, la distribución es aproximadamente simétrica; cuando difieren, la distribución presenta asimetría hacia la izquierda o hacia la derecha. 
        
        .col-lg-5.blanco.p-4.col-md-9
          .titulo-sexto.color-secundario
              h5 Figura 12. 
              | Tendencia central 
          figure
            img(src='@/assets/curso/temas/tema5/figura12.svg', alt='La figura presenta tres gráficas tipo montaña: asimétrica hacia la izquierda, simétrica y asimétrica hacia la derecha; en las tres se señala la media, la mediana y la moda.')
            figcaption Nota. Adaptada de estudiar física.wordpress (2009)

      .row.justify-content-center(titulo="Medidas de dispersión").p-4
        .col-lg-7.mb-4.mb-md-0.col-md-12
          p Hablan cómo se dividen los datos en torno a una de las medidas de tendencia central conceptuadas anteriormente, y son un valor añadido a estas últimas para representar más fidedignamente un conjunto de datos. Dentro de las medidas de dispersión más reconocidas están:
          ul.lista-ul
            li.d-flex.mb-2
              i.fas.fa-check-circle
              | La varianza  es la suma de las desviaciones de la media elevada al cuadrado, dividida  entre el número de observaciones menos uno, en otras palabras, es una medida de dispersión que significa la movilidad de una serie de datos en relación a su promedio o media aritmética.

            li.d-flex.mb-2
              i.fas.fa-check-circle
              | La desviación estándar es la cuantía media en que cada una de las frecuencias individuales varía respecto a la media aritmética del conjunto de datos; dicho de otras maneras, cuanto mayor sea la dispersión mayor es la desviación estándar.
        
        .col-lg-5.blanco.p-4.col-md-9
          .titulo-sexto.color-secundario
              h5 Figura 13. 
              | Medidas de dispersión
          figure
            img(src='@/assets/curso/temas/tema5/figura13.png', alt='La figura presenta una grafica tipo montaña donde se señala la le media - 1, la media y la media + 1.')
            figcaption Nota. Adaptada de matemáticas con tecnología                  
      
      .row.justify-content-center(titulo="Pruebas estadísticas").p-4
        .col-md-12.mb-4.mb-md-0.col-12
          p Son diversas las pruebas estadísticas  que pueden aplicarse al conjunto de datos, a continuación se relacionan algunas de las más utilizadas.
          ul.lista-ul
            li.d-flex.mb-2
              i.fas.fa-check-circle
              p.mb-0 #[b Prueba t de #[em student]] es un medidor estadístico para poblaciones menores o iguales a 30.
            li.d-flex.mb-2
              i.fas.fa-check-circle
              p.mb-0 #[b La prueba z] se utiliza para realizar inferencias sobre poblaciones con distribución normal cuando se conoce la desviación estándar poblacional o el tamaño de la muestra es suficientemente grande. 
            li.d-flex.mb-2
              i.fas.fa-check-circle
              p.mb-0 #[b Análisis de varianza] es una test estadístico para examinar si dos o más grupos de datos se diferencian entre sí, analizando  sus medidas de tendencia central y  sus varianzas.

            li.d-flex.mb-2
              i.fas.fa-check-circle
              p.mb-0 #[b Análisis de covarianza] según Bernal (2006, p. 181), el análisis de covarianza es una prueba que se utiliza para analizar y determinar la relación entre una variable dependiente y dos o más variables independientes. 

            li.d-flex.mb-2
              i.fas.fa-check-circle
              p.mb-0 #[b Chi cuadrado] es una prueba estadística que permite demostrar si dos fracciones de población pueden considerarse iguales, es decir, si no presentan diferencias significativas.
          p En la actualidad todos los ordenadores facilitan la verificación de todas estas pruebas estadísticas de la información, a través de Excel o de programas especializados como #[b Statgraphics] o #[b SPSS], entre otros, validados por la comunidad científica.
        
</template>
