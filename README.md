# Training Routines Studio

Extensión de Chrome en formato **side panel** para cargar, visualizar y gestionar rutinas de entrenamiento desde un fichero JSON remoto.

La extensión está pensada como una demo visual y práctica: abre un panel lateral moderno dentro de Chrome, lee las rutinas, organiza los ejercicios por día de la semana, permite marcar progreso, guardar favoritos y mantener un historial local de actividad.

---

## Qué hace

- Carga rutinas desde un JSON remoto (por defecto: `https://www.jesusninoc.com/rutinas2.json`)
- Muestra los ejercicios agrupados por **día de la semana**
- Clasifica cada ejercicio por **grupo muscular**
- Incluye un **selector semanal** para cambiar de día rápidamente
- Permite **buscar ejercicios** por nombre
- Permite **filtrar por grupo muscular**
- Permite mostrar **solo favoritos**
- Permite marcar ejercicios como **completados**
- Guarda el progreso en **`chrome.storage.local`**
- Mantiene un **historial local** de actividad reciente
- Genera un **reto rápido** automático a partir del día seleccionado
- Permite **exportar en TXT** la rutina visible del día
- Incluye una **copia de respaldo local** si el JSON remoto no responde

---

## Enfoque del proyecto

La idea es ofrecer una extensión que se vea cuidada y útil desde el primer momento, no un prototipo tosco. Por eso se ha planteado con:

- interfaz compacta y moderna
- estética tipo dashboard “premium”
- panel lateral cómodo para trabajar mientras navegas
- interacción rápida sin menús innecesarios
- persistencia local para que el progreso no se pierda al cerrar Chrome

Encaja muy bien como:

- demo educativa
- prueba de concepto visual
- base para un entrenador personal simple
- ejemplo de consumo de JSON en extensiones Chrome
- proyecto de aula para trabajar **Chrome Extensions + JavaScript + almacenamiento local**

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

### Archivos principales

#### `manifest.json`
Define la extensión en **Manifest V3** y configura:

- permisos básicos
- apertura del panel lateral
- acceso al dominio del JSON
- service worker de fondo

#### `background.js`
Hace que el panel lateral se abra al pulsar el icono de la extensión.

#### `sidepanel.html`
Estructura visual del panel lateral:

- cabecera principal
- tarjetas de métricas
- controles de filtrado
- selector de días
- reto rápido
- listado de ejercicios
- historial

#### `sidepanel.css`
Contiene todo el diseño visual:

- fondo con degradados
- estilo tipo cristal / glass UI
- tarjetas modernas
- chips, botones y paneles con aspecto compacto
- diseño responsive dentro del side panel

#### `sidepanel.js`
Es el núcleo de la extensión. Se encarga de:

- leer el JSON remoto
- normalizar los datos
- generar el selector semanal
- filtrar ejercicios
- gestionar favoritos
- guardar completados
- crear el historial local
- exportar la rutina visible
- cargar una copia local si falla la carga remota

---

## Cómo instalar la extensión

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

## Cómo usarla

### 1. Cargar las rutinas
Nada más abrirla, la extensión intenta cargar automáticamente el JSON configurado.

Si el fichero remoto responde, mostrará las rutinas reales.

Si no responde o falla la lectura, la extensión usa una **copia de respaldo** integrada para que el panel siga funcionando.

### 2. Cambiar de día
Pulsa cualquiera de los botones de la semana:

- Lun
- Mar
- Mié
- Jue
- Vie
- Sáb
- Dom

Cada día muestra sus ejercicios correspondientes.

### 3. Buscar o filtrar
Puedes:

- escribir en la caja de búsqueda
- filtrar por grupo muscular
- activar “solo favoritos”

Así reduces la lista a lo que te interesa en cada momento.

### 4. Marcar favoritos
Pulsa la estrella de un ejercicio para guardarlo como favorito.

### 5. Marcar completados
Pulsa el botón de completar para indicar que ese ejercicio ya se ha realizado.

Esto actualiza:

- el progreso visual del día
- el porcentaje circular
- el historial local

### 6. Exportar la rutina
Pulsa **Exportar día** para descargar un fichero `.txt` con la rutina actualmente visible.

Es útil para:

- compartir una sesión
- guardar una clase
- documentar una práctica
- preparar una sesión de entrenamiento rápida

---

## Fuente de datos

La extensión viene configurada para leer por defecto este recurso:

```text
https://www.jesusninoc.com/rutinas2.json
```

El panel permite cambiar la URL del JSON desde la propia interfaz, de modo que la misma extensión se puede reutilizar con otras colecciones de rutinas si mantienen una estructura compatible.

Formato esperado por elemento:

```json
{
  "dia": "1",
  "tipo": "2",
  "rutina": "Sentadilla"
}
```

### Significado de los campos

- `dia`: día de la semana (1 a 7)
- `tipo`: grupo muscular
- `rutina`: nombre del ejercicio

---

## Grupos musculares usados

La extensión interpreta los grupos de esta forma:

- `1`: Full body
- `2`: Pierna
- `3`: Pecho
- `4`: Hombro
- `5`: Espalda
- `6`: Bíceps
- `7`: Tríceps
- `8`: Antebrazo
- `9`: Abdominales

Cada grupo se representa con un icono para que la interfaz resulte más visual.

---

## Almacenamiento local

La extensión usa **`chrome.storage.local`** para conservar:

- día seleccionado
- búsqueda actual
- filtro activo
- favoritos
- ejercicios completados
- historial de actividad
- última fuente usada
- última carga realizada

Esto permite cerrar Chrome y volver después sin perder el estado de trabajo.

---

## Permisos utilizados

### `storage`
Se usa para guardar el estado local de la extensión.

### `sidePanel`
Se usa para mostrar la interfaz como panel lateral de Chrome.

### `host_permissions` sobre `https://www.jesusninoc.com/*`
Se usa para leer el JSON remoto configurado por defecto.

---

## Características visuales destacadas

La extensión se ha diseñado con una presentación más cuidada de lo habitual para este tipo de proyectos:

- cabecera visual con doble acción
- tarjetas de métricas
- anillo de progreso
- filtros compactos
- selector semanal claro
- panel de reto rápido
- tarjetas de ejercicios con iconos
- historial integrado

Esto hace que el proyecto quede bien en:

- una demo en clase
- una presentación técnica
- una práctica de alumno
- una prueba de concepto para ampliar después

---

## Limitaciones actuales

Esta primera versión está pensada para ser simple, visual y útil, así que conviene tener presentes algunos límites:

- no sincroniza con servicios externos
- no calcula series, pesos o tiempos reales de entrenamiento
- no gestiona varios usuarios
- no edita el JSON remoto
- depende de que el JSON mantenga una estructura compatible

Aun así, como base visual para evolucionar, es muy sólida.

---

## Ideas para una versión futura

Si quieres llevarla más lejos, estas mejoras encajan muy bien:

- edición manual de rutinas desde la propia extensión
- múltiples perfiles de usuario
- temporizador por ejercicio
- cronómetro integrado
- generación automática de sesiones aleatorias
- importación de otros JSON
- exportación a CSV o PDF
- estadísticas semanales
- integración con un servidor local en Python
- modo “rutina del aula” para demos educativas

---

## Uso recomendado en demos y formación

Esta extensión es especialmente útil para enseñar:

- consumo de datos JSON en navegador
- estructura de una extensión Chrome Manifest V3
- side panel en Chrome
- manipulación del DOM
- renderizado dinámico con JavaScript
- almacenamiento local con `chrome.storage`
- diseño de interfaces compactas y visuales

Por eso funciona muy bien como ejemplo de proyecto “listo para enseñar” y también como base para que alumnos la modifiquen.

---

## Resumen

**Training Routines Studio** es una extensión Chrome visual, práctica y fácil de probar que convierte un JSON de rutinas en un panel lateral útil y atractivo.

No se limita a listar ejercicios: organiza la semana, guarda progreso, permite filtrar, exportar y mantener un historial local, todo con una interfaz pensada para que el resultado se vea serio y llamativo.

Si quieres una versión siguiente, una evolución natural sería añadir:

- temporizador
- gráficos de progreso
- rutinas por usuario
- importación/exportación avanzada
- integración con backend

---

## Licencia

Puedes usarla como base educativa, demo técnica o punto de partida para tus propias ampliaciones.
