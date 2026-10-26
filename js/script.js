"use strict";

const area = document.querySelector("#track-area");
const dot = document.querySelector("#pointer-dot");
const xText = document.querySelector("#coord-x");
const yText = document.querySelector("#coord-y");
const status = document.querySelector("#track-status");

// Задание 1. На mouseover добавьте класс is-inside и обновите status.

// Задание 2. На mousemove получите event.offsetX и event.offsetY.
// Покажите координаты и переместите dot через style.left/style.top (px).

// Задание 3. На mouseout уберите класс, очистите координаты и сообщение.
// В этой площадке дочерние элементы имеют pointer-events:none,
// поэтому перемещение по ним не вызывает лишних mouseout/mouseover.
