## Ejemplo: Consumo de carne mundial

En este artículo de la [BBC](https://www.bbc.com/newsadfgafgfg) de 2021, se menciona el impacto del consumo de carnes rojas en las emisiones de gases de efecto invernadero. Los cuales contribuyen en gran medida al calentamiento global. El mismo reporte menciona que el consumo promedio diario para 2019 bajó a 85.0486 gramos por persona en el Reino Unido.

## Ejemplo: Consumo de carne mundial

-   La Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO) tiene, entre otros, datos disponibles sobre el consumo per cápita de carne.

-   Los datos se encuentran en el archivo [meat_consumption.csv](https://es.wikipedia.org/wiki/Trainspotting) en Canvas y están en kilogramos por año.

✏️ Prueba la hipótesis de que el consumo promedio diario mundial per cápita de carne de res es igual al que artículo de la BBC para los datos del 2019. Supón que el consumo de carne sigue una distribución normal con $\sigma = 24.07$ gramos y el error tipo I se establece en 0.05.

## Solución: Consumo de carne mundial

- Definimos la prueba de hipótesis:

$$H_{0}: \mu = 85.0486 \quad \quad \quad H_{a}: \mu \neq 85.0486$$

- Calculamos la estadística de prueba:

$$Z = \frac{\bar{x} - \mu_{0}}{\sigma/\sqrt{n}} = \frac{27.95 - 85.0486}{24.07/\sqrt{185}} = -32.27$$

- **El valor crítico** es $z_{1 - 0.05/2} = 1.96$

## Solución: Consumo de carne mundial

-   Región de rechazo: $Z \leq -1.96$ o $Z \geq 1.96$

-   Como $Z = -32.27 < -1.96$, rechazamos $H_{0}$

-   No existe evidencia para decir que el consumo mundial de carne de res es de 85.0486 gramos por persona al día.


## Actividad: Muertes por sobredosis {.scrollable}

-   Un caso interesante sobre el abuso de drogas se ha dado en Escocia, donde desde la década de los 90 se ha convertido en un problema grave de salud.

-   Tanto así, que en 2022 el gobierno de Escocia lanzó un nuevo plan nacional para reducir las muertes por el uso de drogas y para mejorar las vidas de quienes han sufrido por su uso. Pueden revisarlo [aquí](https://www.gov.scot/publications/national-drugs-mission-plan-2022-2026/pages/3/).

::: callout-tip
## ¡Super recomendación!
📺 Si aún no la han visto, una excelente película que trata sobre esta problemática social es [**Trainspotting**](https://es.wikipedia.org/wiki/Trainspotting).
:::
