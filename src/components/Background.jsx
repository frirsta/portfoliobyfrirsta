"use client";

import React, { useEffect, useRef } from "react";

export default function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let mouseX = 0;
    let mouseY = 0;

    const stars = [];
    const starCount = 200;

    class Star {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.originalX = this.x;
        this.originalY = this.y;
        this.blinkSpeed = Math.random() * 0.05 + 0.01;
        this.brightness = Math.random();
      }

      update() {
        this.brightness += this.blinkSpeed;
        if (this.brightness > 1 || this.brightness < 0) {
          this.blinkSpeed *= -1;
        }

        const dx = this.x - mouseX;
        const dy = this.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 100;

        if (distance < maxDistance) {
          const angle = Math.atan2(dy, dx);
          const force = (maxDistance - distance) / maxDistance;
          this.x += Math.cos(angle) * force * 2;
          this.y += Math.sin(angle) * force * 2;
        } else {
        
          this.x += (this.originalX - this.x) * 0.05;
          this.y += (this.originalY - this.y) * 0.05;
        }
      }

      draw() {
        const alpha = this.brightness * 0.8 + 0.2;
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      stars.length = 0; 
      for (let i = 0; i < starCount; i++) {
        stars.push(new Star());
      }
    };

    const animate = () => {

      ctx.fillStyle = "rgba(10, 10, 27, 0.3)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (const star of stars) {
        star.update();
        star.draw();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const handleMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    handleResize();
    animate();

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      aria-hidden="true"
    />
  );
}
