
  // Prototipos con la sintaxis de clases
  class Student2 {
    constructor({
      name,
      cursosAprobados = [],
      age,
      email,
    }) {
      this.name = name;
      this.email = email;
      this.age = age;
      this.cursosAprobados = cursosAprobados;
    }
  
    aprobarCurso(nuevoCursito) {
      this.cursosAprobados.push(nuevoCursito);
    }
  }
  
  const miguelito = new Student2({
    name: "Miguel",
    age: 28,
    email: "miguelito@platzi.com",
  });

  console.log(miguelito);