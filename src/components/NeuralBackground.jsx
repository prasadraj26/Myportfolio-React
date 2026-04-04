import React, { useEffect, useRef } from 'react';

function NeuralBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    let particles = [];
    let connections = [];
    
    const PARTICLE_COUNT = 80;
    const CONNECTION_DISTANCE = 150;
    const MOUSE_RADIUS = 200;
    
    let mouseX = width / 2;
    let mouseY = height / 2;
    
    class Particle {
      constructor(x, y) {
        this.x = x || Math.random() * width;
        this.y = y || Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
        this.originalX = this.x;
        this.originalY = this.y;
      }
      
      update() {
        // Calculate distance to mouse
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < MOUSE_RADIUS) {
          const force = (MOUSE_RADIUS - distance) / MOUSE_RADIUS;
          const angle = Math.atan2(dy, dx);
          const pushX = Math.cos(angle) * force * 2;
          const pushY = Math.sin(angle) * force * 2;
          this.vx -= pushX;
          this.vy -= pushY;
        }
        
        // Return to original position
        this.vx += (this.originalX - this.x) * 0.01;
        this.vy += (this.originalY - this.y) * 0.01;
        
        // Apply velocity
        this.x += this.vx;
        this.y += this.vy;
        
        // Damping
        this.vx *= 0.95;
        this.vy *= 0.95;
        
        // Keep within bounds
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }
      
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.fill();
      }
    }
    
    function initParticles() {
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle());
      }
    }
    
    function drawConnections() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < CONNECTION_DISTANCE) {
            const opacity = (1 - distance / CONNECTION_DISTANCE) * 0.3;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(100, 150, 255, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    }
    
    function animate() {
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      drawConnections();
      requestAnimationFrame(animate);
    }
    
    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    }
    
    function handleMouseMove(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }
    
    initParticles();
    animate();
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    handleResize();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      id="neuralCanvas" 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }}
    />
  );
}

export default NeuralBackground;