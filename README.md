# collage-de-imagenes

## Dependencias  
`body-parser: 1.20.0`  
`express: 4.18.1`  
`express-fileupload: 1.4.0`  


## Inicializar proyecto en terminal
`npm start`
  


## Requerimientos
Integrar express-fileupload a Express.  
Definir que el límite para la carga de imágenes es de 5MB.  
Responder con un mensaje indicando que se sobrepasó el límite especificado.  
Crear una ruta POST /imagen que reciba y almacene una imagen en una carpeta pública del servidor.  
Crear una ruta GET /deleteImg/:nombre que reciba como parámetro el nombre de una imagen y la elimine de la carpeta en donde están siendo alojadas las imágenes.  
