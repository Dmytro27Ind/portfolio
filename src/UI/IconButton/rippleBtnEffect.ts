import React from 'react'
import css from './ripple.module.css'

export default function rippleBtnEffect(event: React.MouseEvent<HTMLButtonElement>) {
    const btn = event.currentTarget;

    const circle = document.createElement("span");
    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - (btn.offsetLeft + radius)}px`;
    circle.style.top = `${event.clientY - (btn.getBoundingClientRect().top + radius)}px`;
    circle.classList.add(css.ripple);

    const ripple = btn.getElementsByClassName(css.ripple)[0];
    if (ripple)
        ripple.remove();

    btn.appendChild(circle);
}