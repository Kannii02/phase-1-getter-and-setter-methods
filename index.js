class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    // Getter for diameter
    get diameter() {
      return this.radius * 2;
    }
  
    // Setter for diameter (updates radius)
    set diameter(diameter) {
      this.radius = diameter / 2;
    }
  
    // Getter for circumference
    get circumference() {
      return Math.PI * this.diameter;
    }
  
    // Setter for circumference (updates radius)
    set circumference(circumference) {
      this.radius = circumference / (Math.PI * 2);
    }
  
    // Getter for area
    get area() {
      return Math.PI * this.radius ** 2;
    }
  
    // Setter for area (updates radius)
    set area(area) {
      this.radius = Math.sqrt(area / Math.PI);
    }
  }
  
  const circle = new Circle(5);
  
  console.log("Initial Radius:", circle.radius); 
  console.log("Diameter:", circle.diameter); 
  console.log("Circumference:", circle.circumference.toFixed(2)); 
  console.log("Area:", circle.area.toFixed(2)); 
  
  circle.diameter = 20;
  console.log("Updated Radius:", circle.radius); 
  
  circle.circumference = 62.83;
  console.log("Updated Radius (from Circumference):", circle.radius.toFixed(2)); 
  
  circle.area = 314.16;
  console.log("Updated Radius (from Area):", circle.radius.toFixed(2)); 
  