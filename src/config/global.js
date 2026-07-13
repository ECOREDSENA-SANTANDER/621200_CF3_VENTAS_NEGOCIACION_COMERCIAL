export default {
  global: {
    Name: 'Manejo de la información',
    Description:
      'En este documento se comprenderá el manejo de la información y sus tipos de análisis, los cuales son necesarios para la toma de decisiones, dirigidos a minimizar la incertidumbre y el riesgo en el mercado. Igualmente, se abordarán las variedades de presentación de la información de mercados, su procesamiento, desde su recolección, depuración, análisis y construcción de conocimiento de mercados.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'La información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Datos, información y conocimiento',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Importancia de la información',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Fuentes de información',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Técnicas de recolección de información',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Análisis de la información',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Variables de  información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos de variables',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Clasificación de las variables',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Procesamiento de la información',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Análisis de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Antecedentes',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Tipos de análisis',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Técnicas de análisis de datos',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Técnicas de evaluación',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Informes y documentos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Informes',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Tipos de informes',
            hash: 't_6_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF3_631101_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Bernal T cesar Augusto. (2003) Metodología de la investigación aplicada para administración y economía. Editorial Prentice Hill.',
      link: '',
    },
    {
      referencia:
        'Big Data Internacional Campus (2020). Data mining vs Big data. ',
      link:
        'https://www.campusbigdata.com/big-data-blog/item/82-data-mining-vs-big-data',
    },
    {
      referencia: 'Conceptos. (2018). Minería de datos. ',
      link: 'https://mineriadedatos1.blogspot.com/2018/10/conceptos.html ',
    },
    {
      referencia:
        'Conesa Caralt Jordi, Curto Diaz Josep. (2010). Introducción al Bussines Intelligence. Editorial UOC.',
      link: '',
    },
    {
      referencia:
        'Dertiano Victor. (2014). ¿Qué es Business Intelligence? Beneficios del BI.',
      link:
        'https://bigeek.medium.com/qu%C3%A9-es-business-intelligence-509d6a12fdf3',
    },
    {
      referencia:
        'Espinoza Freire, Eudaldo. (2018). Las variables y su operacionalización en la investigación educativa. Scielo. ',
    },
    {
      referencia:
        'Fernández Jorge. (2016). Investigación Cualitativa Vs Investigación Cuantitativa. Investigación y docencia ',
    },
    {
      referencia: 'Florencia. (2013). Importancia de la información. ',
      link: 'https://www.importancia.org/informacion.php  ',
    },
    {
      referencia: 'Grupo 10. (2015). Tipos de gráficas de control.',
      link:
        'http://grupo10direccion.blogspot.com/2015/06/tipos-de-graficas-de-control-1.html',
    },
    {
      referencia:
        'Hernández Macario. (2008). El control estadístico del proceso. ',
      link:
        'https://optyestadistica.wordpress.com/2008/06/11/el-control-estadistico-de-proceso-3-de-3/  ',
    },
    {
      referencia:
        'Hernández Noelia. (2019). Esto es lo que puede hacer la Inteligencia Artificial por la educación. Educación 3.0 ',
      link:
        'https://www.educaciontrespuntocero.com/tecnologia/poencial-ia-en-educacion/',
    },
    {
      referencia:
        'Hidalgo Nuchera Antonio, León Serrano Gonzalo, Pavon Morote Julián. (2013). la gestión de la innovación y la tecnología en las organizaciones. Editorial Pirámide.',
      link: '',
    },
    {
      referencia: 'Khan academy. (2018) Polígonos de frecuencia. ',
    },
    {
      referencia:
        'Higuita David. (2016). Analítica y productividad aplicada al ruteo de vehículos. ',
      link:
        'https://www.bancolombia.com/empresas/capital-inteligente/tendencias/innovacion/analitica-y-productividad',
    },
    {
      referencia:
        'IBM. (2007). Análisis de causa raíz: el diagrama de espina de pescado. ',
      link:
        'https://managing-ils-reporting.itcilo.org/es/herramientas/root-cause-analysis-the-fishbone-diagramme/',
    },
    {
      referencia:
        'Lam Diaz Rosa. (2016).  La redacción de un artículo científico. ',
    },
    {
      referencia:
        'Biblioguias: Gestión del Conocimiento (GDC): 1.3 Datos, Información y Conocimiento. (2017).  ',
      link: 'https://biblioguias.cepal.org/c.php?g=738015&p=5789030',
    },
    {
      referencia: 'Marta. (2019). ¿Qué es un Histograma?  Super prof ',
      link:
        'https://www.superprof.es/apuntes/escolar/matematicas/estadistica/descriptiva/histograma.html    ',
    },
    {
      referencia:
        'Lind Douglas A, Marchal William E, Wathen Samuel A. (2008). Estadística aplicada a los negocios y la economía. MC Graw Hill Interamericana.',
      link: '',
    },
    {
      referencia: 'Marcondes José. (2020). Diagrama ou grafico de Pareto. ',
      link:
        'https://gestaodesegurancaprivada.com.br/diagrama-ou-grafico-de-pareto-conceito/    ',
    },
    {
      referencia:
        'Análisis de big data—ArcGIS Velocity | Documentación. (s. f.).',
      link:
        'https://doc.arcgis.com/es/velocity/analyze/perform-big-data-analysis.htm',
    },
    {
      referencia:
        'Quality Leadership University. (2020). Ejemplos de antecedentes de un anteproyecto ',
      link: 'https://qlu.ac.pa/ejemplos-antecedentes-anteproyecto/  ',
    },
    {
      referencia: 'Questionpro. (2021). ¿Qué es el análisis descriptivo? ',
      link: ' https://www.questionpro.com/blog/es/analisis-descriptivo/   ',
    },
    {
      referencia:
        'Rodal Montero Enrique. (2020). Industrias 4.0. Editorial Pirámide.',
      link: '',
    },
    {
      referencia:
        'SAS. (2021). minería de datos, ¿Qué es y porqué es importante?  ',
      link: 'https://www.sas.com/es_co/insights/analytics/data-mining.html  ',
    },
    {
      referencia:
        'Temas de enfermería. (2012). La media aritmética en medidas de tendencia central. ',
    },
    {
      referencia:
        'Samperi Hernández Roberto. (2006). Metodología de la investigación. Editorial Mc Graw Hill',
      link: '',
    },
    {
      referencia:
        'Suarez R. Pedro Alejandro. (2001). Metodología de la investigación diseños y técnicas. Orión editores.',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Análisis de datos',
      significado:
        'Proceso mediante el cual se organizan, transforman e interpretan los datos recolectados con el propósito de obtener información útil para responder a los objetivos de una investigación y apoyar la toma de decisiones.',
    },
    {
      termino: 'Base de datos',
      significado:
        'Conjunto organizado de datos almacenados de manera estructurada que permite su consulta, actualización y análisis para generar información pertinente en diferentes contextos.',
    },
    {
      termino: 'Conocimiento',
      significado:
        'Comprensión e interpretación de la información obtenida mediante procesos cognitivos como comparar, analizar, relacionar y experimentar, permitiendo su aplicación para resolver problemas o tomar decisiones.',
    },
    {
      termino: 'Datos',
      significado:
        'Representaciones simbólicas de hechos, características o variables que constituyen la materia prima para generar información y conocimiento.',
    },
    {
      termino: 'Encuesta',
      significado:
        'Técnica de investigación que recopila información mediante un conjunto de preguntas aplicadas a una muestra de personas para conocer opiniones, características o comportamientos.',
    },
    {
      termino: 'Entrevista',
      significado:
        'Técnica de recolección de información basada en una conversación planificada entre un entrevistador y un entrevistado con el fin de obtener información sobre un tema específico.',
    },
    {
      termino: 'Fuente de información',
      significado:
        'Recurso, persona, documento o medio del cual se obtiene información necesaria para desarrollar una investigación o responder una necesidad de conocimiento.',
    },
    {
      termino: 'Hipótesis',
      significado:
        'Proposición o explicación provisional sobre la relación entre dos o más variables, que debe ser comprobada mediante el proceso de investigación.',
    },
    {
      termino: 'Información',
      significado:
        'Conjunto organizado y procesado de datos que adquiere significado y facilita la comprensión de hechos, fenómenos o situaciones para apoyar la toma de decisiones.',
    },
    {
      termino: 'Información cualitativa',
      significado:
        'Información descriptiva que permite comprender características, percepciones, opiniones o comportamientos, obtenida mediante técnicas como entrevistas, observaciones o grupos focales.',
    },
    {
      termino: 'Información cuantitativa',
      significado:
        'Información expresada en valores numéricos que puede analizarse mediante procedimientos estadísticos para medir, comparar e interpretar fenómenos.',
    },
    {
      termino: 'Muestra',
      significado:
        'Subconjunto representativo de una población seleccionado para recopilar información y obtener conclusiones que puedan generalizarse al conjunto de estudio.',
    },
    {
      termino: 'Observación',
      significado:
        'Técnica de recolección de información que consiste en examinar de forma sistemática un fenómeno, hecho o situación para registrar datos que posteriormente serán analizados.',
    },
    {
      termino: 'Población',
      significado:
        'Conjunto total de personas, objetos, organizaciones o elementos que comparten características comunes y constituyen el objeto de estudio de una investigación.',
    },
    {
      termino: 'Variable',
      significado:
        'Característica, propiedad o atributo de una persona, objeto o fenómeno que puede adoptar diferentes valores o categorías y ser objeto de medición o análisis dentro de una investigación.',
    },
  ],
  complementario: [
    {
      tema: '1.1 La información',
      referencia:
        'Pérez, J. (2008) concepto de información. https://definicion.de/informacion/',
      tipo: 'Página web',
      link: 'https://definicion.de/informacion/ ',
    },
    {
      tema: '3.	Variables de la información',
      referencia:
        'Parra, A. (2023, 7 agosto). Cuáles son los tipos de variables en una investigación. QuestionPro. https://www.questionpro.com/blog/es/tipos-de-variables-en-una-investigacion/',
      tipo: 'Página web',
      link:
        'https://www.questionpro.com/blog/es/tipos-de-variables-en-una-investigacion/',
    },
    {
      tema: '4.	Procesamiento de la información',
      referencia:
        'Espinoza Freire, E. E. (2018). Las variables y su operacionalización en la investigación educativa. Parte I.',
      tipo: 'Página web',
      link:
        'http://scielo.sld.cu/scielo.php?pid=S1990-86442018000500039&script=sci_arttext&tlng=en',
    },
    {
      tema: '5.	Análisis de datos',
      referencia: 'Universidad del sur 2018), Análisis de datos',
      tipo: 'Página web',
      link: 'https://www.mundoposgrado.com/que-es-el-analisis-de-datos/',
    },
    {
      tema: '6. Informes ',
      referencia: 'Equipo editorial etece. (2021) Concepto, informes',
      tipo: 'Página web',
      link: 'https://concepto.de/informe/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Laureano E. Ruidiaz Polo',
          cargo: 'Instructor grado 16',
          centro: 'Centro de Comercio y Servicios - Regional Bolívar',
        },
        {
          nombre: 'Zenith Chinchilla Ruedas',
          cargo: 'Diseñadora instruccional',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Revisora metodológica y pedagógica ',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Revisión y corrección de estilo',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital ',
        },
        {
          nombre: 'Carolina Jiménez Suescún',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñadora de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'María Alejandra Vera Briceño',
          cargo: 'Animadora y productor multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
