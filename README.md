# InventoryIQ: Aplicación Web para Control de Stock

## Descripción
InventoryIQ es una aplicación web diseñada para facilitar la gestión del control de stock, ofreciendo una variedad de funciones y características para administrar usuarios, productos y más. Esta aplicación está destinada a comercios de diferente categoría (almacenes, minimercados, venta de artículos de limpieza, venta de productos para piletas, etc.) que necesitan una herramienta eficiente para gestionar su negocio de manera efectiva.

### Acceso como Administrador
Para utilizar todas las funcionalidades de la aplicación, puedes ingresar como administrador:

**Usuario:** admin@admin.com  
**Contraseña:** admin

## Tecnologías Utilizadas

### Frontend
- React con Vite
- react-router-dom
- react-bootstrap
- Bootstrap
- sweetalert2

### Backend
- Node.js con Express
- MongoDB con mongoose
- bcrypt
- cors
- dotenv
- jsonwebtoken

## Instalación

1. Clona este repositorio en tu máquina local.
2. Navega hasta el directorio del proyecto.
3. Instala las dependencias del frontend y backend utilizando npm.

    ```sh
    cd InventoryIQ-Front
    npm install
    ```

    ```sh
    cd InventoryIQ-Back
    npm install
    ```

## Configuración
Crea un archivo `.env` en la raíz del directorio `InventoryIQ-Back` y configura las variables de entorno necesarias, como las credenciales de la base de datos MongoDB y las claves secretas para la autenticación.

## Iniciar la Aplicación

### Frontend
Para iniciar el frontend, ejecuta el siguiente comando en el directorio `InventoryIQ-Front`:

    ```sh
    npm run dev
    ```

Esto iniciará el servidor de desarrollo en [http://localhost:5173](http://localhost:5173).


## Uso
Una vez que la aplicación esté instalada y en ejecución, podrás acceder a ella a través de tu navegador web. Registra tus usuarios, administra los productos y disfruta de todas las características que ofrece InventoryIQ.

## Estructura del Proyecto

- **InventoryIQ-Front:** Contiene el código fuente del frontend de la aplicación.
- **InventoryIQ-Back:** Contiene el código fuente del backend de la aplicación.

## Enlaces Adicionales
- [Requisitos del Proyecto](https://drive.google.com/file/d/1LVAuHWntJl5JIy_g1O93pmvpo6UzlYti/view?usp=sharing)
- [Tablero de Trello](https://trello.com/b/86Rm9En9/inventoryiq)
- [Repositorio Frontend en GitHub](https://github.com/lucianobonilla27/InventoryIQ-Front.git)
- [Repositorio Backend en GitHub](https://github.com/lucianobonilla27/InventoryIQ-Back.git)
