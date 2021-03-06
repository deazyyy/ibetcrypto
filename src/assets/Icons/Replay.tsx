import React, { useState, useRef, useEffect } from "react";

export default function Replay() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.55 21.42C13.22 21.42 12.91 21.2 12.82 20.86C12.72 20.46 12.95 20.05 13.35 19.94C17.41 18.87 20.24 15.19 20.24 10.99C20.24 5.89 16.09 1.74 10.99 1.74C6.66 1.74 3.82 4.27 2.49 5.8H5.43C5.84 5.8 6.18 6.14 6.18 6.55C6.18 6.96 5.86 7.31 5.44 7.31H1.01C0.94 7.31 0.87 7.3 0.8 7.28C0.71 7.25 0.63 7.21 0.56 7.16C0.47 7.1 0.4 7.02 0.35 6.93C0.3 6.83 0.26 6.73 0.25 6.62C0.25 6.59 0.25 6.57 0.25 6.54V2C0.25 1.59 0.59 1.25 1 1.25C1.41 1.25 1.75 1.59 1.75 2V4.39C3.38 2.64 6.45 0.25 11 0.25C16.93 0.25 21.75 5.07 21.75 11C21.75 15.88 18.46 20.16 13.74 21.4C13.68 21.41 13.61 21.42 13.55 21.42Z"
        fill="white"
      />
      <path
        d="M13.55 21.42C13.22 21.42 12.91 21.2 12.82 20.86C12.72 20.46 12.95 20.05 13.35 19.94C17.41 18.87 20.24 15.19 20.24 10.99C20.24 5.89 16.09 1.74 10.99 1.74C6.66 1.74 3.82 4.27 2.49 5.8H5.43C5.84 5.8 6.18 6.14 6.18 6.55C6.18 6.96 5.86 7.31 5.44 7.31H1.01C0.94 7.31 0.87 7.3 0.8 7.28C0.71 7.25 0.63 7.21 0.56 7.16C0.47 7.1 0.4 7.02 0.35 6.93C0.3 6.83 0.26 6.73 0.25 6.62C0.25 6.59 0.25 6.57 0.25 6.54V2C0.25 1.59 0.59 1.25 1 1.25C1.41 1.25 1.75 1.59 1.75 2V4.39C3.38 2.64 6.45 0.25 11 0.25C16.93 0.25 21.75 5.07 21.75 11C21.75 15.88 18.46 20.16 13.74 21.4C13.68 21.41 13.61 21.42 13.55 21.42Z"
        fill="url(#paint0_linear)"
      />
      <path
        d="M10.29 21.73C10.27 21.73 10.24 21.73 10.22 21.72C9.15 21.65 8.1 21.41 7.1 21.02C6.81 20.91 6.62 20.62 6.62 20.31C6.62 20.22 6.64 20.13 6.67 20.05C6.82 19.67 7.26 19.47 7.64 19.62C8.5 19.96 9.41 20.16 10.33 20.23H10.34C10.74 20.25 11.04 20.59 11.04 20.99C11.04 21 11.04 21.02 11.04 21.03C11.01 21.42 10.68 21.73 10.29 21.73ZM4.78 19.58C4.61 19.58 4.45 19.53 4.31 19.42C3.47 18.75 2.74 17.96 2.13 17.07C2.04 16.94 1.99 16.8 1.99 16.65C1.99 16.4 2.11 16.17 2.32 16.03C2.65 15.8 3.14 15.89 3.36 16.22C3.89 16.99 4.52 17.67 5.25 18.24C5.42 18.38 5.53 18.59 5.53 18.82C5.53 18.99 5.48 19.16 5.37 19.3C5.23 19.48 5.01 19.58 4.78 19.58ZM1.44 14.7C1.11 14.7 0.82 14.49 0.73 14.18C0.41 13.15 0.25 12.08 0.25 11C0.25 10.59 0.59 10.25 1 10.25C1.41 10.25 1.75 10.59 1.75 11C1.75 11.93 1.89 12.85 2.16 13.73C2.18 13.8 2.19 13.88 2.19 13.96C2.19 14.29 1.98 14.57 1.67 14.67C1.59 14.69 1.52 14.7 1.44 14.7Z"
        fill="white"
      />
      <path
        d="M10.29 21.73C10.27 21.73 10.24 21.73 10.22 21.72C9.15 21.65 8.1 21.41 7.1 21.02C6.81 20.91 6.62 20.62 6.62 20.31C6.62 20.22 6.64 20.13 6.67 20.05C6.82 19.67 7.26 19.47 7.64 19.62C8.5 19.96 9.41 20.16 10.33 20.23H10.34C10.74 20.25 11.04 20.59 11.04 20.99C11.04 21 11.04 21.02 11.04 21.03C11.01 21.42 10.68 21.73 10.29 21.73ZM4.78 19.58C4.61 19.58 4.45 19.53 4.31 19.42C3.47 18.75 2.74 17.96 2.13 17.07C2.04 16.94 1.99 16.8 1.99 16.65C1.99 16.4 2.11 16.17 2.32 16.03C2.65 15.8 3.14 15.89 3.36 16.22C3.89 16.99 4.52 17.67 5.25 18.24C5.42 18.38 5.53 18.59 5.53 18.82C5.53 18.99 5.48 19.16 5.37 19.3C5.23 19.48 5.01 19.58 4.78 19.58ZM1.44 14.7C1.11 14.7 0.82 14.49 0.73 14.18C0.41 13.15 0.25 12.08 0.25 11C0.25 10.59 0.59 10.25 1 10.25C1.41 10.25 1.75 10.59 1.75 11C1.75 11.93 1.89 12.85 2.16 13.73C2.18 13.8 2.19 13.88 2.19 13.96C2.19 14.29 1.98 14.57 1.67 14.67C1.59 14.69 1.52 14.7 1.44 14.7Z"
        fill="url(#paint1_linear)"
      />
      <path
        d="M11 15C13.2091 15 15 13.2091 15 11C15 8.79086 13.2091 7 11 7C8.79086 7 7 8.79086 7 11C7 13.2091 8.79086 15 11 15Z"
        fill="white"
      />
      <path
        d="M11 15C13.2091 15 15 13.2091 15 11C15 8.79086 13.2091 7 11 7C8.79086 7 7 8.79086 7 11C7 13.2091 8.79086 15 11 15Z"
        fill="url(#paint2_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="0.25"
          y1="1.22636"
          x2="20.9987"
          y2="21.017"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#BB9D3A" />
          <stop offset="0.0180572" stop-color="#B5963A" />
          <stop offset="0.0288707" stop-color="#A78539" />
          <stop offset="0.0423321" stop-color="#9D7A38" />
          <stop offset="0.0612226" stop-color="#987338" />
          <stop offset="0.1137" stop-color="#967138" />
          <stop offset="0.1826" stop-color="#9B763A" />
          <stop offset="0.2692" stop-color="#A9863F" />
          <stop offset="0.3652" stop-color="#C0A047" />
          <stop offset="0.4673" stop-color="#E0C352" />
          <stop offset="0.5025" stop-color="#EDD156" />
          <stop offset="0.67" stop-color="#967930" />
          <stop offset="0.7405" stop-color="#9A7D31" />
          <stop offset="0.812" stop-color="#A68936" />
          <stop offset="0.884" stop-color="#BB9C3D" />
          <stop offset="0.9559" stop-color="#D7B746" />
          <stop offset="0.9673" stop-color="#DCBC48" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="0.25"
          y1="1.22636"
          x2="20.9987"
          y2="21.017"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#BB9D3A" />
          <stop offset="0.0180572" stop-color="#B5963A" />
          <stop offset="0.0288707" stop-color="#A78539" />
          <stop offset="0.0423321" stop-color="#9D7A38" />
          <stop offset="0.0612226" stop-color="#987338" />
          <stop offset="0.1137" stop-color="#967138" />
          <stop offset="0.1826" stop-color="#9B763A" />
          <stop offset="0.2692" stop-color="#A9863F" />
          <stop offset="0.3652" stop-color="#C0A047" />
          <stop offset="0.4673" stop-color="#E0C352" />
          <stop offset="0.5025" stop-color="#EDD156" />
          <stop offset="0.67" stop-color="#967930" />
          <stop offset="0.7405" stop-color="#9A7D31" />
          <stop offset="0.812" stop-color="#A68936" />
          <stop offset="0.884" stop-color="#BB9C3D" />
          <stop offset="0.9559" stop-color="#D7B746" />
          <stop offset="0.9673" stop-color="#DCBC48" />
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="0.25"
          y1="1.22636"
          x2="20.9987"
          y2="21.017"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#BB9D3A" />
          <stop offset="0.0180572" stop-color="#B5963A" />
          <stop offset="0.0288707" stop-color="#A78539" />
          <stop offset="0.0423321" stop-color="#9D7A38" />
          <stop offset="0.0612226" stop-color="#987338" />
          <stop offset="0.1137" stop-color="#967138" />
          <stop offset="0.1826" stop-color="#9B763A" />
          <stop offset="0.2692" stop-color="#A9863F" />
          <stop offset="0.3652" stop-color="#C0A047" />
          <stop offset="0.4673" stop-color="#E0C352" />
          <stop offset="0.5025" stop-color="#EDD156" />
          <stop offset="0.67" stop-color="#967930" />
          <stop offset="0.7405" stop-color="#9A7D31" />
          <stop offset="0.812" stop-color="#A68936" />
          <stop offset="0.884" stop-color="#BB9C3D" />
          <stop offset="0.9559" stop-color="#D7B746" />
          <stop offset="0.9673" stop-color="#DCBC48" />
        </linearGradient>
      </defs>
    </svg>
  );
}
