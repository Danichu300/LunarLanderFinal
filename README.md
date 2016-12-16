#DESARROLLO DEL LUNAR LANDER

En este documento voy a ir _documentando_ el desarrollo del videojuego **Lunar Lander** cuyo _cliente_ es **Lansana Barry**:

####FONDO DE PANTALLA

El **fondo** del videojuego ha sido colocado **correctamente**. Como la imagen de fodo era _repetitiva_ ha quedado visualmente bien.

####SUELO LUNAR

El **suelo lunar** ha requerido colocar un _div_ que indique que su posición ha de estar en la parte de abajo. Presenta un 

####DIMENSIONES

Las **dimensiones** de las imágenes e iconos ha sido lo que más problemas ha dado. En el _modelo horizontal_ la **nave** resultaba **muy grande** por lo que tuve que reducir su tamaño. Las **letras** de la tabla informativa del juego tiene un tamaño que es el **aceptable** pero a pesar de ello se lee con facilidad.Los **iconos** tienen un tamaño y una separación **aceptables**. En el _modelo vertical_, en cambio, la tabla de información presenta el **mínimo considerablemente correcto**. Además los **iconos** se muestran de un tamaño que **personalmente** considero **correctos** ya que a pesar de que no sean muy grandes tienen un tamaño que fácilmente _todas las personas_ pueden pulsar sin problemas. 

####TABLAS INFORMATIVAS

El juego contiene **dos tablas** (una en cada modelo de pantalla) que informan al jugador sobre la velocidad, altura y nivel de combustible actual de la nave. Así el jugador en todo momento tiene un **control total de la situación**. La tabla presenta está situada en la parte superior izquierda de la pantalla. He intentado colocarlo en la parte inferior izquierda, pero hay un **error que no encuentro**, por lo que no puedo posicionarlo exactamente donde quiero.

####PANEL DE INSTRUCCIONES

He creado un **html aparte** para que el jugador pueda ver las instrucciones del juego. Para ello, a través del icono de **Ajustes** al hacer clic redirecciona al html de las instrucciones. El _css_ está guardado en el mismo css que la página principal para ambos modelos. Las letras son blancas para que se vean con el fondo negro.

####ICONOS

Los iconos en el _modelo horizontal_ se muestran separados a una distancia mas o menos equivalente y con tamaño parecido. Estas pequeñas diferencias se debe a que el tamaño está regulado mediante píxeles y no a porcentajes. Esto se debe a la _comodidad_ de ajustar las posiciones de esta manera. Igualmente como menciono en el apartado de _PROBLEMAS ENCONTRADOS_ hay cierta diferencia entre los dos ordenadores en los que opero, por lo que a veces resulta lioso para el trabajo. En el _modelo vertical_ los iconos se ven mucho mas grandes debido a que en la diferencia de formato se pierde tamaño y he tenido que ajustarlo a un tamaño apropiado al de la punta de los dedos de forma estándar ya que cada jugador tiene un tamaño diferente de dedos y sea cómodo visualmente y táctilmente.

####ABOUT

He creado **dos html aparte** (uno para el _modelo horizontal_ y uno para el _modelo vertical_) para el apartado del _Acerca de..._Aquí se muestra el desarrollador del videojuego, el cliente y las fuentes de información acudidas para la realización del proyecto.

####PROBLEMAS ENCONTRADOS

- Hay un cierto **desorden** entre equipos. En el _ordenador del instituto_ no funciona como debería el código (todo se ve **descolocado**, las imágenes se muestran en **proporciones diferentes**, hay que **cambiar las dimensiones**...) respecto a mi _ordenador personal_.

- Hay un **icnono sin especificar su uso**. En el documento original, el cliente me ha adjudicado un icono **REPLAY** el cual no aparece en ninguno de los bocetos del videojuego que me ha enviado ni en las especificaciones dice donde ponerlo ni su uso ni nada. Por lo tanto, este icono **no lo usaré**, excepto si le encuentro _utilidad o necesidad_.

#### CAMBIOS RESPECTO AL PROYECTO ORIGINAL

- Como el cliente me había proporcionado un **icono** sin especificar su uso (el de _replay_) lo he **substituido** por una flecha azul para poder volver atrás tras cambiar de página.

- En el documento original el **panel de fuel, velocidad y altura** aparece en la **parte inferior izquierda**, pero yo la he colocado en la **parte superior izquierda** para que se vea mejor con el contraste de color de la letra con el fondo y así aprovechar el espacio para poner un apartado de _About_.

- Se ha añadido un _sprite_ de **nave con fuego** para que se active cuando la nave sube. Además se ha implementado una **explosión** para cuando la nave aterrice con una velocidad mayor que la permitida (v>3) o se haya quedado sin fuel.
