# Training Routines Studio

![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-blue?logo=googlechrome)
![Manifest V3](https://img.shields.io/badge/Manifest-V3-green)
![Side Panel](https://img.shields.io/badge/UI-Side%20Panel-purple)
![JSON](https://img.shields.io/badge/Datos-JSON-orange)
![Estado](https://img.shields.io/badge/Estado-Listo%20para%20probar-brightgreen)

> Extensión de Chrome en formato **side panel** para cargar, visualizar y gestionar **rutinas de entrenamiento** desde un JSON remoto, con una interfaz moderna, progreso diario, favoritos, historial local y exportación.

---

## Vista general

**Training Routines Studio** está pensada como una extensión visual, práctica y lista para usar. Lee automáticamente un fichero JSON de rutinas, organiza los ejercicios por día de la semana y permite trabajar con ellos desde un panel lateral cómodo y limpio dentro de Chrome.

Está diseñada para que se vea **más cuidada que un prototipo básico**, con una presentación tipo dashboard y una experiencia rápida, clara y útil desde el primer momento.

---

## Qué hace

### Gestión de rutinas

- Carga rutinas desde un JSON remoto
- Usa por defecto esta fuente:

```text
https://www.jesusninoc.com/rutinas2.json
```

- Muestra los ejercicios agrupados por **día de la semana**
- Interpreta cada ejercicio por **grupo muscular**
- Permite cambiar de día con un **selector semanal**
- Incluye una **copia local de respaldo** si el JSON remoto falla

### Interacción y seguimiento

- Buscar ejercicios por nombre
- Filtrar por grupo muscular
- Mostrar solo favoritos
- Marcar ejercicios como completados
- Guardar el estado localmente con `chrome.storage.local`
- Mantener historial de actividad reciente
- Generar un **reto rápido** del día
- Exportar en **TXT** la rutina visible

### Enfoque visual

- Interfaz compacta y moderna
- Estética tipo **dashboard premium**
- Panel lateral cómodo para usar mientras navegas
- Diseño más llamativo y limpio que una demo simple

---

## Por qué queda bien para demos y clases

Esta extensión encaja muy bien como ejemplo de:

- consumo de JSON en una extensión real
- uso de **Chrome Extensions + JavaScript + almacenamiento local**
- diseño visual cuidado en herramientas pequeñas
- pruebas de concepto educativas
- base para una mini app fitness o un panel personal de seguimiento

También sirve muy bien para sorprender en una demo porque combina:

- utilidad real
- interfaz agradable
- persistencia local
- estructura clara y fácil de ampliar

---

## Funcionalidades destacadas

### Panel lateral tipo app

La extensión se abre como **side panel** y mantiene la experiencia dentro de Chrome sin tener que depender de un popup pequeño y limitado.

### Progreso diario

Cada día muestra su lista de ejercicios y permite marcar los que ya has realizado. Ese estado se refleja en el progreso visible de la sesión.

### Favoritos

Puedes guardar ejercicios frecuentes para localizarlos más rápido.

### Historial local

Las acciones importantes quedan guardadas localmente para mantener contexto entre sesiones.

### Exportación

La rutina visible del día puede descargarse en un `.txt`, útil para:

- guardar la sesión
- compartir una clase
- preparar una práctica
- reutilizar la rutina fuera de la extensión

---

## Instalación

### Opción recomendada: modo desarrollador

1. Descarga o descomprime la carpeta del proyecto.
2. Abre Chrome.
3. Entra en:

```text
chrome://extensions/
```

4. Activa **Modo desarrollador**.
5. Pulsa **Cargar descomprimida**.
6. Selecciona la carpeta `training_routines_extension`.

Después de eso, al pulsar el icono de la extensión, se abrirá el panel lateral.

---

## Uso

### 1. Abrir la extensión

Pulsa el icono de la extensión para abrir el panel lateral.

### 2. Cargar rutinas

La extensión intenta cargar automáticamente el JSON configurado.

- Si el recurso remoto responde, verás las rutinas reales.
- Si falla, se utilizará la copia de respaldo local.

### 3. Cambiar de día

Puedes moverte por los días de la semana desde el selector:

- Lun
- Mar
- Mié
- Jue
- Vie
- Sáb
- Dom

### 4. Buscar y filtrar

El panel permite:

- buscar por texto
- filtrar por grupo muscular
- mostrar solo favoritos

### 5. Marcar progreso

Puedes marcar ejercicios como realizados para llevar un seguimiento diario.

### 6. Exportar la sesión

Pulsa **Exportar día** para descargar el contenido visible de la jornada actual.

---

## Estructura del proyecto

```text
training_routines_extension/
├── manifest.json
├── background.js
├── sidepanel.html
├── sidepanel.css
├── sidepanel.js
└── README.md
```

### Descripción rápida de archivos

- **manifest.json**: define la extensión en **Manifest V3** y sus permisos.
- **background.js**: abre el side panel al pulsar el icono.
- **sidepanel.html**: estructura visual principal.
- **sidepanel.css**: diseño del panel, tarjetas, filtros y bloques visuales.
- **sidepanel.js**: lógica de carga, filtrado, progreso, favoritos, historial y exportación.

---

## Fuente de datos y formato

La extensión está preparada para leer un JSON con una estructura simple como esta:

```json
{
  "dia": "1",
  "tipo": "2",
  "rutina": "Sentadilla"
}
```

### Significado de campos

- `dia`: día de la semana (1 a 7)
- `tipo`: grupo muscular
- `rutina`: nombre del ejercicio

### Grupos musculares interpretados

- `1`: Full body
- `2`: Pierna
- `3`: Pecho
- `4`: Hombro
- `5`: Espalda
- `6`: Bíceps
- `7`: Tríceps
- `8`: Antebrazo
- `9`: Abdominales

---

## Almacenamiento local

La extensión usa **`chrome.storage.local`** para guardar:

- día seleccionado
- término de búsqueda
- filtro activo
- favoritos
- completados
- historial de actividad
- fuente JSON usada
- último estado de carga

Esto permite cerrar Chrome y continuar después sin perder el contexto de uso.

---

## Permisos utilizados

### `storage`

Guarda el estado local de la extensión.

### `sidePanel`

Permite mostrar la interfaz como panel lateral.

### `host_permissions: <all_urls>`

Permite leer la fuente JSON por defecto y otras fuentes compatibles si cambias la URL desde el panel.

---

## Lo más llamativo de esta extensión

✅ Interfaz visual cuidada  
✅ Carga remota con respaldo local  
✅ Progreso diario  
✅ Favoritos y filtros  
✅ Historial persistente  
✅ Exportación rápida  
✅ Side panel cómodo y moderno  

---

## Limitaciones

Conviene tener en cuenta lo siguiente:

- depende de que el JSON remoto tenga una estructura compatible
- si la fuente externa cambia mucho, puede requerir adaptar el parser
- no sustituye una app fitness completa ni una base de datos real
- está pensada como solución rápida, visual y práctica

---

## Mejoras futuras

Ideas que encajan muy bien en siguientes versiones:

- temporizador por ejercicio
- contador de descanso
- sonido o avisos visuales
- estadísticas semanales
- exportación a CSV
- varios perfiles de usuario
- importación de distintas fuentes JSON
- versión aún más visual tipo app fitness avanzada

---

## Ideal para

- demos educativas
- proyectos de aula
- pruebas de concepto
- ejemplos de extensiones Chrome con datos externos
- paneles personales de rutinas
- enseñar UI + JSON + almacenamiento local en un único proyecto

---

## Autor

- Autor: Jesusninoc
- Web: [`https://jesusninoc.com`](https://jesusninoc.com)

---

## Resumen rápido

**Training Routines Studio** es una extensión de Chrome con **panel lateral** que permite cargar y gestionar rutinas de entrenamiento desde un JSON remoto con una experiencia visual más cuidada de lo habitual.

Combina:

- lectura de datos externos
- organización por días
- filtros y favoritos
- progreso diario
- historial local
- exportación rápida
- interfaz moderna y compacta

Si buscas una extensión que se vea bien, funcione rápido y además sirva como demo potente para enseñar Chrome Extensions, esta base encaja muy bien.
