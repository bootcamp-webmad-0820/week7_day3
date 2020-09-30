# week7_day3

## React forms
- Los formularios en React (_controlled components_) reflejan el contenido del estado, manipulándolo a tiempo real frente a la interacción del usuario.

## Nombres de propiedades computados
- Incluir el nombre de la propiedad de un objeto entre corchetes da lugar a un _computed name property_, sustituyendo el valor de la variable por el nombre de la propiedad del objeto:
 ````javascript
 const keyName = 'age'
 const person = {[keyName]: 33}   // {age: 33}
 ````

## State configs
El estado dispone de diversas configuraciones en forma de argumentos:
- Un objeto (updater)
 ````javascript
 setState({name: 'John Doe' })
 ````
 - Un objeto (updater) y un callback:
 ````javascript
 setState({name: 'John Doe' }, () => console.log('State updated'))
 ````
  - Un callback, tomando como parámetro el propio estado, cuyo retorno será el nuevo estado:
 ````javascript
 setState(prevState => {
   return { age: prevState.age++ }
 })
 ````

## React stateful components lifecycle

<img src="https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_801d26372f9946811f79250cb98322bf.jpg" alt="">
