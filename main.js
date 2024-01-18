// Efecto de Gravedad 
document.addEventListener('mousemove', function(event) {
    const effectElement = document.getElementById('Gravity_Effect');
    if (!effectElement) return;
  
    const gravityRange = 100; 
    const { clientX: mouseX, clientY: mouseY } = event;
    const { left, top, width, height } = effectElement.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
  
    // Calcula la distancia desde el objeto al mouse.
    const distanceX = mouseX - centerX;
    const distanceY = mouseY - centerY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
  
    // Si el ratón está dentro del rango de gravedad, el objeto se moverá en dirección al mouse.
    if (distance < gravityRange) {
      const strength = 1 - distance / gravityRange; 
      const pullX = strength * distanceX * 0.1;
      const pullY = strength * distanceY * 0.3;
  
      effectElement.style.transform = `translate(${pullX}px, ${pullY}px)`;
    } else {
      
      effectElement.style.transform = 'translate(0, 0)';
    }
  });
  
