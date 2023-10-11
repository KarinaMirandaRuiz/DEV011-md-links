# Markdown Links

Esta librería analiza los links dentro de archivos Markdown. Está disponible de dos formas: como un módulo publicado en GitHub, que las usuarias pueden instalar e importar en otros proyectos, y como una interfaz de línea de comandos (CLI) que permite utilizar la librería directamente desde el terminal.

## Instalación

Para la instalación es necerario correr el comando 
```
npm i valid-md-links
```

## Forma de uso

En la linea de comando (CLI) es necesario ejecutar `mdlinks` seguido del nombre del archivo Markdown, por ejemplo `ArchivoConLinks.md`. 

### Versión básica

#### Comando:

```
mdlinks ArchivoConLinks.md
```

#### Salida: 

La salida estará conformada por: 
- la ruta del archivo que se está analizando
- seguido por la url que se encontro 
- y el texto que contiene la url (truncado a 50 caracteres)

```
C:\Ruta\al\archivo\ArchivoConLinks.md https://www.una-url-en/archivo-con-links Click aquí
C:\Ruta\al\archivo\ArchivoConLinks.md https://otra-url-en-el/archivo-con-links Otro click aquí
C:\Ruta\al\archivo\ArchivoConLinks.md https://es.la-misma-url-en-el-archivo-con-links Un click
C:\Ruta\al\archivo\ArchivoConLinks.md https://es.la-misma-url-en-el-archivo-con-links Último click
```
Nota que en este caso se encuentra una url repetida.

### Opciones adicionales

#### Opción: --validate
Este comando indica que se van a validar las rutas encontradas.
``` 
mdlinks ArchivoConLinks.md --validate
```
#### Salida: 
La respuesta estará conformada por: 
- la ruta del archivo que se está analizando
- seguido por la url que se encontro
- fail/ok en caso de fallo o éxito
- el código de respuesta HTTP 
- y el texto que contiene la url (truncado a 50 caracteres)

```
C:\Ruta\al\archivo\ArchivoConLinks.md https://www.una-url-en/archivo-con-links ok 200 Click aquí
C:\Ruta\al\archivo\ArchivoConLinks.md https://otra-url-en-el/archivo-con-links fail 404 Otro click aquí
C:\Ruta\al\archivo\ArchivoConLinks.md https://es.la-misma-url-en-el-archivo-con-links ok 200 Un click
C:\Ruta\al\archivo\ArchivoConLinks.md https://es.la-misma-url-en-el-archivo-con-links ok 200 Último click
```

#### Opción: --stats
Agregar la opción `--stats` mofifará la salida, ya que indica al cálculo de estadísticas básicas de los links encontrados 

``` 
mdlinks ArchivoConLinks.md --stats
```
#### Salida: 
En este caso sólo se muestra el total de ligas encontradas y ligas únicas.
```
Ligas: 4
Ligas unicas: 3
```

#### Opción: --stats --validate
Incorporar ambas opciones generá una salida de estadísticas de las ligas validadas.
``` 
mdlinks ArchivoConLinks.md --stats --validate
```
#### Salida: 
Adicional a la anterior, se muestran el número de ligas con ciertos código:
- Informativos (100 – 199)
- Redireccionados (300 – 399)
- Rotos (400 – 499)
- Error de servidor (500 – 599)

```
Ligas: 4
Ligas unicas: 3
Informativos: 0
Redireccionados: 0
Rotos: 1
Error de servidor: 0
```
