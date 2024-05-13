class CPersona {
    constructor() {
      this.Persona = [];
    }
  
    agregarPersona(Nombre, Apellido, Nacionalidad, MejorObra, AñoPlanificacion, EdadPublicacion) {
      this.Persona.push({
        Nombre,
        Apellido,
        Nacionalidad,
        MejorObra,
        AñoPlanificacion,
        EdadPublicacion
      });
    }
  
    generarTablaPersona() {
      const tablaBody = document.querySelector('#TablaPersona tbody');
      tablaBody.innerHTML = '';
  
      for (const Persona of this.Persona) {
        const fila = document.createElement('tr');
        fila.innerHTML = `
          <td>${Persona.Nombre}</td>
          <td>${Persona.Apellido}</td>
          <td>${Persona.Nacionalidad}</td>
          <td>${Persona.MejorObra}</td>
          <td>${Persona.AñoPlanificacion}</td>
          <td>${Persona.EdadPublicacion}</td>
        `;
        tablaBody.appendChild(fila);
      }
    }
  
    listarNacionalidadArgentina() {
      let count = 0;
      for (const Persona of this.Persona) {
        if (Persona.Nacionalidad === 'Argentino') {
          count++;
        }
      }
      return count;
    }
  
    entre1960y1980() {
      let count = 0;
      for (const Persona of this. Persona) {
        if (Persona.AñoPlanificacion>= 1960 && Persona.AñoPlanificacion<= 1980) {
          count++;
        }
      }
      return count;
    }
    
  
    EdadPublicacionPromedio() {
      let sum = 0;
      for (const Persona of this.Persona) {
        sum += Persona.EdadPublicacion;
      }
      return sum / this.Persona.length;
    }

    mostrarPersona() {
      let html = '';
      for (const Persona of this.Persona) {
        html += `
          
            ${Persona.Nombre}
            ${Persona.Apellido}
            ,
        `;
      }
      return html;
    }

  }
  const Persona = new CPersona();

  Persona.agregarPersona('Gabriel', 'García Márquez', 'Colombiano', 'Cien años de soledad', 1967, 40);
  Persona.agregarPersona('Julio', 'Cortázar', 'Argentino', 'Rayuela', 1963, 48);
  Persona.agregarPersona('Isabel', 'Allende', 'Chilena', 'La casa de los espíritus', 1982, 40);
  Persona.agregarPersona('Jorge Luis', 'Borges', 'Argentino', 'Ficciones', 1944, 45);
  Persona.agregarPersona('Clarice', 'Lispector', 'Brasileña', 'La hora de la estrella', 1977, 56);
  Persona.agregarPersona('Juan', 'Rulfo', 'Mexicano', 'Pedro Páramo', 1955, 38);
  Persona.agregarPersona('Carlos', 'Fuentes', 'Mexicano', 'La región más transparente', 1958, 29);
  Persona.agregarPersona('Eduardo', 'Galeano', 'Uruguayo', 'Las venas abiertas de América Latina', 1971, 31);
  
  // Generar la tabla de las personas 
  Persona.generarTablaPersona();

  document.getElementById("resultado1").textContent = "Listar todos los autores que sean de Nacionalidad Argentina:" + Persona.listarNacionalidadArgentina();
  
  document.getElementById("resultado2").textContent = "Listar todos los autores que publicaron entre 1960 y 1980: " + Persona.entre1960y1980();
  

  document.getElementById("resultado3").textContent = "Mostrar el promedio de la edad de publicación:" + Persona.EdadPublicacionPromedio();

  //mostrar a los autores
  document.getElementById("resultado4").textContent = "Mostrar todos los autores: " + Persona.mostrarPersona();
  