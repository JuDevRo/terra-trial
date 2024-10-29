# Español (English is below)

# Instrucciones de Inicio

npm install
npm run dev

Se visualiza en localhost:5173.

Para correr los tests.

npm run test

# Explicación y consideraciones

- Hay muchas formas de realizar una estrategia responsive dependiendo de la complejidad del proyecto; podríamos, por ejemplo, utilizar un custom hook que escuche los eventos de pantalla como resize o match media y así con lógica gestionar tanto estilos como componentes. Nos da un mejor manejo cuando el html varía demasiado de un tipo de dispositivo a otro. Como también el uso de estilos modulares. En este caso, en relación a esta web sentí que esta era la mejor manera de hacerlo, ya que debido a su tamaño es fácilmente mantenible.

- Decidí utilizar Axios porque es de las librerías más utilizadas para conectarse con una o más API's, pero también se lo podía conectar con Fetch nativo.

- Respecto a las clases modificadoras, no las aplique en su mayoría, a excepción de algunos casos, debido a la lógica de los breakpoints que me permitían fácilmente aplicar la modificación según cada caso.

- La URL de la API a la que me conecto como buena práctica debería permanecer en un archivo .env (No lo lleve a cabo para facilitar la ejecución y el proceso de iniciar la web a todo aquel que lo descargue para verificar mi trabajo realizado).

- Para mejorar el rendimiento, se podrían cambiar los formatos de las imágenes, como también aplicar Lazy Loading con un observer.

- Decidí utilizar la información dinámica que venía de la API en forma de objeto tal cual estaba para mostrar la información; simplemente lo fui recorriendo. Otra forma de hacer esto sería meter parte de los objetos en un array y mapearlos para crear HTML más dinámico, generando así que escrito una sola vez la estructura se generen tantos elementos como objetos dentro del array se encuentren.

- Respecto al diseño, siento que quedo tal cual en el Figma, podría a lo mejor fallar algunos margenes en relación a que me gustaría tener información más precisa de cuanto tamaño real es, de esta manera podría hacer una implementación pixel perfect sin problemas en caso de ser necesario.

- Respecto a las estadísticas de Lighthouse hay algunas cosas que escapan de mi control, en caso de ser necesaria su mejora podría acceder a una charla para llevarlo a cabo de una mejor manera.

# Agradecimiento

Gracias por la oportunidad, espero que el código y la visualización sean de su agrado.
Ante cualquier duda respecto al proyecto, no tenga duda en contactarme.

# English

# Instructions

npm install
npm run dev

Is displayed in localhost:5173.

For run the tests.

npm run test

# Explanation and considerations

- There are many ways to make a responsive strategy depending on the complexity of the project; we could, for example, use a custom hook that listens for screen events such as resize or match media and thus logically manage both styles and components. It gives us a better management when the HTML varies too much from one type of device to another. As well as the use of modular styles. In this case, in relation to this website I felt that this was the best way to do it, because due to its size it is easily maintainable.

- I decided to use Axios because it is one of the most used libraries to connect to one or more API's, but it could also be connected to native Fetch.

- Regarding the modifier classes, I did not apply most of them, except for a few cases, due to the breakpoint logic that allowed me to easily apply the modification on a case-by-case basis.

- The URL of the API to which I connect as a good practice should remain in a .env file (Do not carry it out to facilitate the execution and the process of starting the web to anyone who downloads it to verify my work done).

- To improve performance, you could change the image formats, as well as apply Lazy Loading with an observer.

- I decided to use the dynamic information that came from the API in the form of an object as it was to display the information; I simply went through it. Another way to do this would be to put part of the objects in an array and map them to create more dynamic HTML, generating this way that writing the structure once generates as many elements as objects inside the array.

- Regarding the design, I feel that it looks just like the Figma, I could maybe miss some margins in relation to that I would like to have more precise information of how big it really is, this way I could make a pixel perfect implementation without problems if necessary.

- Regarding the statistics of Lighthouse there are some things that are beyond my control, in case it is necessary to improve it I could agree to a chat to carry it out in a better way.

# Thank you for the opportunity.
Thank you for the opportunity, I hope you like the code and the visualization.
If you have any questions regarding the project, please do not hesitate to contact me.









