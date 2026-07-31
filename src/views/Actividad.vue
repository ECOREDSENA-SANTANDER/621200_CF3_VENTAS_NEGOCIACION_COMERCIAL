<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/base-kit/plugin/components/actividad/ActividadController.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Manejo de la información',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> con esta actividad, los aprendices podrán darse cuenta de su conocimiento en cuanto al manejo de la información y sus tipos de análisis con el fin de minimizar la incertidumbre y el riesgo en el mercado.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto: '¿Qué son los datos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Información ya interpretada y analizada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Conjunto de hechos, cifras o registros sin procesar.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Resultados de una investigación finalizada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Conclusiones obtenidas de un estudio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los fundamentos Manejo de la información.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Manejo de la información.',
        },
        {
          id: 2,
          texto: '¿Qué se entiende por información?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Datos almacenados sin organización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Conocimiento adquirido por experiencia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Datos procesados y organizados que tienen significado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Opiniones personales sobre un tema.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los fundamentos Manejo de la información.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Manejo de la información.',
        },
        {
          id: 3,
          texto: '¿Qué es el conocimiento?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Comprensión obtenida a partir del análisis y aplicación de la información.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Un conjunto de datos sin procesar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una técnica de recolección.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Una base de datos digital.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los fundamentos Manejo de la información.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Manejo de la información.',
        },
        {
          id: 4,
          texto: '¿Por qué es importante la información en una organización?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Porque reemplaza los recursos humanos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Porque facilita la toma de decisiones y la solución de problemas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Porque elimina la competencia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Porque reduce automáticamente los costos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los fundamentos Manejo de la información.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Manejo de la información.',
        },
        {
          id: 5,
          texto:
            '¿Cuál de las siguientes es una fuente primaria de información?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Libros especializados.', esCorrecta: false },
            { id: 'b', texto: 'Revistas académicas.', esCorrecta: false },
            { id: 'c', texto: 'Informes publicados.', esCorrecta: false },
            {
              id: 'd',
              texto:
                'Encuestas realizadas directamente a la población objetivo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los fundamentos Manejo de la información.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Manejo de la información.',
        },
        {
          id: 6,
          texto:
            '¿Cuál de las siguientes corresponde a una fuente secundaria de información?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Artículos científicos publicados.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Entrevistas directas.', esCorrecta: false },
            { id: 'c', texto: 'Observación de campo.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Encuestas aplicadas por el investigador.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los fundamentos Manejo de la información.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Manejo de la información.',
        },
        {
          id: 7,
          texto: '¿Cuál es una técnica de recolección de información?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Tabulación.', esCorrecta: false },
            { id: 'b', texto: 'Entrevista.', esCorrecta: true },
            {
              id: 'c',
              texto: 'Clasificación de variables.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Interpretación de resultados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los fundamentos Manejo de la información.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Manejo de la información.',
        },
        {
          id: 8,
          texto: '¿Qué permite el análisis de la información?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar el volumen de datos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar registros históricos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Interpretar datos para obtener conclusiones útiles.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reemplazar la investigación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los fundamentos Manejo de la información.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Manejo de la información.',
        },
        {
          id: 9,
          texto: '¿Qué es una variable de información?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Un documento de consulta.', esCorrecta: false },
            { id: 'b', texto: 'Un informe final.', esCorrecta: false },
            { id: 'c', texto: 'Una base de datos.', esCorrecta: false },
            {
              id: 'd',
              texto:
                'Una característica o atributo que puede tomar diferentes valores.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los fundamentos Manejo de la información.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Manejo de la información.',
        },
        {
          id: 10,
          texto: '¿Cuál es un ejemplo de variable cuantitativa?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Estado civil.', esCorrecta: false },
            { id: 'b', texto: 'Color favorito.', esCorrecta: false },
            { id: 'c', texto: 'Edad de una persona.', esCorrecta: true },
            { id: 'd', texto: 'Nivel de satisfacción.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los fundamentos Manejo de la información.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Manejo de la información.',
        },
        {
          id: 11,
          texto: '¿Cuál es un ejemplo de variable cualitativa?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Género de los participantes.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Ingreso mensual en pesos.', esCorrecta: false },
            { id: 'c', texto: 'Número de hijos.', esCorrecta: false },
            { id: 'd', texto: 'Cantidad de ventas.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los fundamentos Manejo de la información.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Manejo de la información.',
        },
        {
          id: 12,
          texto: '¿Cómo se clasifican generalmente las variables?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Digitales y análogas.', esCorrecta: false },
            { id: 'b', texto: 'Internas y externas.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Cualitativas y cuantitativas.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Primarias y secundarias.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los fundamentos Manejo de la información.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Manejo de la información.',
        },
        {
          id: 13,
          texto: '¿Qué se entiende por procesamiento de la información?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La recolección de datos únicamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La organización, clasificación y transformación de los datos para su análisis.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La publicación de resultados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El almacenamiento físico de documentos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los fundamentos Manejo de la información.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Manejo de la información.',
        },
        {
          id: 14,
          texto: '¿Qué son los antecedentes en un análisis de datos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Los resultados obtenidos.', esCorrecta: false },
            { id: 'b', texto: 'Las conclusiones finales.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Los instrumentos de medición.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La información previa y estudios relacionados con el tema.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los fundamentos Manejo de la información.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Manejo de la información.',
        },
        {
          id: 15,
          texto: '¿Cuál es un tipo de análisis de datos?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Administrativo.', esCorrecta: false },
            { id: 'b', texto: 'Financiero exclusivamente.', esCorrecta: false },
            { id: 'c', texto: 'Descriptivo.', esCorrecta: true },
            { id: 'd', texto: 'Operativo.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los fundamentos Manejo de la información.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Manejo de la información.',
        },
        {
          id: 16,
          texto: '¿Cuál es el objetivo principal del análisis descriptivo?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Predecir resultados futuros.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Identificar causas ocultas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Resumir y describir las características de los datos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Diseñar instrumentos de medición.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los fundamentos Manejo de la información.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Manejo de la información.',
        },
        {
          id: 17,
          texto: '¿Cuál de las siguientes es una técnica de análisis de datos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Tabulación de resultados.', esCorrecta: true },
            { id: 'b', texto: 'Observación participante.', esCorrecta: false },
            { id: 'c', texto: 'Encuesta.', esCorrecta: false },
            { id: 'd', texto: 'Entrevista.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los fundamentos Manejo de la información.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Manejo de la información.',
        },
        {
          id: 18,
          texto:
            '¿Qué herramienta facilita la interpretación visual de los datos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Contrato.', esCorrecta: false },
            { id: 'b', texto: 'Memorando.', esCorrecta: false },
            { id: 'c', texto: 'Inventario.', esCorrecta: false },
            { id: 'd', texto: 'Gráfico estadístico.', esCorrecta: true },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los fundamentos Manejo de la información.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Manejo de la información.',
        },
        {
          id: 19,
          texto: '¿Qué es un informe?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Una encuesta aplicada.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Un instrumento de observación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Un documento que presenta resultados, análisis y conclusiones.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Una base de datos.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los fundamentos Manejo de la información.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Manejo de la información.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es un instrumento utilizado para la recolección de información?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Informe técnico.', esCorrecta: false },
            { id: 'b', texto: 'Cuestionario.', esCorrecta: true },
            { id: 'c', texto: 'Gráfico estadístico.', esCorrecta: false },
            { id: 'd', texto: 'Tabla de resultados.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los fundamentos Manejo de la información.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Manejo de la información.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
