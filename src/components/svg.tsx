import React from 'react'

const svg = () => {
  return <div>svg</div>
}

export default svg

// import React from 'react'

// const svg = () => {
//   return (
//     <>
//       <svg
//         className={`${sizeShadow < 2 ? 'block' : 'hidden'} w-full h-full`}
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 5000 5000"
//         // onClick={(e) => {
//         //   const clase = (e.target as SVGPathElement).classList[0]

//         //   if (clase === 'cls-11') {
//         //     console.log(e)
//         //   }
//         // }}
//         // onClick={(e) => {
//         //   console.log(e)
//         //   setTransform(
//         //     -e.pageX - contenedor.current?.clientWidth + 200,
//         //     -e.pageY - contenedor.current?.clientHeight,
//         //     6,
//         //     2000
//         //   )
//         //   setTimeout(() => {
//         //     setSizeShadow(6)
//         //   }, 2000)
//         // }}
//       >
//         <defs></defs>
//         <g
//           id="Tendido_1"
//           data-name="Tendido 1"
//           className="cursor-pointer"
//           onClick={(e) => {
//             setTransform(
//               -e.pageX - contenedor.current?.clientWidth! - (movil.current ? 300 : 1200),
//               -e.pageY - contenedor.current?.clientHeight! - (movil.current ? 500 : 1500),
//               6,
//               2000
//             )
//             setTimeout(() => {
//               setSizeShadow(6)
//             }, 2000)
//           }}>
//           <path
//             className="cls-11"
//             d="m2500,3780c-344.5,0-657.19-136.11-887.29-357.46l-125.55,125.54c262.23,253.47,619.32,409.42,1012.83,409.42,268.4,0,519.85-72.55,735.82-199.11l-94.05-150.68c-188.67,109.55-407.89,172.29-641.77,172.29Z"
//           />
//         </g>
//         <g
//           id="Tendido_2_bajo"
//           data-name="Tendido 2 bajo"
//           className="cursor-pointer"
//           onClick={(e) => {
//             setTransform(
//               -e.pageX - contenedor.current?.clientWidth! - (movil.current ? 800 : 2100),
//               -e.pageY - contenedor.current?.clientHeight! - (movil.current ? 100 : 800),
//               6,
//               2000
//             )
//             setTimeout(() => {
//               setSizeShadow(6)
//             }, 2000)
//           }}>
//           <path
//             className="cls-11"
//             d="m3957.5,2500c0-159.57-25.66-313.15-73.05-456.84l-166.4,62.4c40.21,124.25,61.95,256.81,61.95,394.45,0,442.92-224.97,833.28-566.87,1063.09l94.05,150.68c392.03-261.23,650.33-707.33,650.33-1213.77Z"
//           />
//           <path
//             className="cls-11"
//             d="m3595.28,1538.38l-129.02,122.12c86.62,99.61,158.07,212.76,210.81,335.83l166.41-62.4c-61.33-145.38-145.57-278.74-248.2-395.54Z"
//           />
//         </g>
//         <g
//           id="Tendido_2_alto"
//           data-name="Tendido 2 alto"
//           className="cursor-pointer"
//           onClick={(e) => {
//             setTransform(
//               -e.pageX - contenedor.current?.clientWidth! - (movil.current ? 1000 : 2600),
//               -e.pageY - contenedor.current?.clientHeight! - (movil.current ? 200 : 500),
//               6,
//               2000
//             )
//             setTimeout(() => {
//               setSizeShadow(6)
//             }, 2000)
//           }}>
//           <path
//             className="cls-11"
//             d="m3712.55,678.52l-398.1,603.56c228.96,153.41,412.25,369.67,525.2,624.09l108.75-37.42,58.17,169.05,119.7-33.47,21.24,75.95-223.38,62.46-2.77.95c28.5,114.06,43.63,233.41,43.63,356.3,0,579.07-335.98,1079.67-823.63,1317.51l312.37,652.15c730.52-354.38,1234.19-1103.2,1234.19-1969.66,0-759.86-387.36-1429.25-975.38-1821.48Z"
//           />
//         </g>
//         <g
//           id="Tendido_bajo_3A"
//           data-name="Tendido bajo 3A"
//           className="cursor-pointer"
//           onClick={(e) => {
//             setTransform(
//               -e.pageX - contenedor.current?.clientWidth! - (movil.current ? 600 : 1500),
//               -e.pageY - contenedor.current?.clientHeight! - (movil.current ? -420 : -350),
//               6,
//               2000
//             )
//             setTimeout(() => {
//               setSizeShadow(6)
//             }, 2000)
//           }}>
//           <path
//             className="cls-11"
//             d="m3391.3,1581.34l129.02-122.12c-256.58-251.57-605.78-409.01-991.72-416.44l15.27,177.99c329.12,11.09,626.73,146.41,847.43,360.58Z"
//           />
//         </g>
//         <g
//           id="Tendido_bajo_3B"
//           className="Tendido_bajo_3B cursor-pointer"
//           data-name="Tendido bajo 3B"
//           onClick={(e) => {
//             setTransform(
//               -e.pageX - contenedor.current?.clientWidth! - (movil.current ? 100 : 500),
//               -e.pageY - contenedor.current?.clientHeight! - (movil.current ? -420 : -250),
//               6,
//               2000
//             )
//             setTimeout(() => {
//               setSizeShadow(6)
//             }, 2000)
//           }}>
//           <path
//             className="cls-11"
//             d="m2330.16,1231.19l-22.19-175.06c-385.65,48.86-712.31,240.42-943.09,529.81l139.92,107.83c201.01-247.58,493.63-418.6,825.37-462.58Z"
//           />
//         </g>
//         <g
//           id="Tendido_3_alto"
//           data-name="Tendido 3 alto"
//           className="cursor-pointer"
//           onClick={(e) => {
//             setTransform(
//               -e.pageX - contenedor.current?.clientWidth! - (movil.current ? 200 : 1000),
//               -e.pageY - contenedor.current?.clientHeight! - (movil.current ? -600 : -950),
//               6,
//               2000
//             )
//             setTimeout(() => {
//               setSizeShadow(6)
//             }, 2000)
//           }}>
//           <path
//             className="cls-11"
//             d="m3756.15,555.65c-361.67-234.5-793.01-370.69-1256.15-370.69-733.85,0-1387.84,341.9-1811.38,875.1l670.09,521.33c211.98-263.95,519.12-453.4,864.69-519.65l-31.12-228.97s91.1-21.32,160.37-27.1c75.6-6.31,156.19-5.93,156.19-5.93l20.14,235.23c277.36,5.61,540.68,89.8,759.13,229.77l468.04-709.11Z"
//           />
//         </g>
//         <g id="Bloqueados">
//           <path
//             className="cls-8"
//             d="m2500,3622.02c-222.86,0-430.54-64.97-605.14-177.01l-7.5,11.3c176.75,113.46,387,179.27,612.63,179.27,84.32,0,166.48-9.2,245.56-26.64l-3.73-13.06c-77.89,17.11-158.8,26.14-241.83,26.14Z"
//           />
//           <path
//             className="cls-8"
//             d="m1377.98,2500c0-295.43,114.18-564.19,300.81-764.56l-9.59-9.59c-189.09,202.83-304.78,474.98-304.78,774.16,0,393.91,200.57,740.96,505.15,944.63l7.49-11.3c-300.92-201.24-499.08-544.14-499.08-933.33Z"
//           />
//           <path
//             className="cls-8"
//             d="m3622.02,2500c0,178.86-41.86,347.95-116.3,498l12.09,6.16c75.39-151.9,117.77-323.08,117.77-504.16,0-213.55-58.96-413.33-161.48-583.96l-11.04,7.97c100.92,168.38,158.95,365.4,158.95,575.99Z"
//           />
//           <path
//             className="cls-8"
//             d="m2500,1377.98c48.71,0,96.69,3.11,143.76,9.13l2.08-13.41c-47.75-6.12-96.42-9.28-145.84-9.28-320.33,0-609.67,132.65-816.12,345.99l9.59,9.59c204-210.89,489.95-342.02,806.53-342.02Z"
//           />
//           <path
//             className="cls-8"
//             d="m2762.61,3591.1l3.73,13.06c322.96-77.62,592.18-293.25,741.81-581.02l-12.08-6.16c-147.94,284.46-414.14,497.55-733.46,574.13Z"
//           />
//           <path
//             className="cls-8"
//             d="m3451.93,1905.79l11.02-7.95c-172.72-275.62-460.49-471.78-796.02-521.21l-2.08,13.4c331.87,48.86,616.46,243.01,787.08,515.76Z"
//           />
//           <circle className="cls-8" cx="2500" cy="2500" r="928.37" />
//           <path
//             className="cls-8"
//             d="m2500,3968.41c-397.34,0-757.81-157.82-1022.17-414.19l-447.47,453.3c320.62,313.02,743.26,526.55,1222.65,583.18,405.17,47.87,797.04-22.71,1140.94-184.38l-273.99-574.83c-188.35,87.85-398.43,136.91-619.96,136.91Z"
//           />
//           <path
//             className="cls-8"
//             d="m1592.49,3400.6l-133.39,135.13-447.46,453.29c-184.98-185.15-334.83-403.87-440.53-644.72h968.83c16.94,19.28,34.46,38.05,52.55,56.3Z"
//           />
//           <path
//             className="cls-8"
//             d="m1317.22,2985.99H451.03c-55.43-233.59-71.54-480.71-41.74-732.99,46.47-393.32,198.55-748.43,424.53-1040.34l501.71,392.67,149.46,116.98c-135.5,176.5-226.67,390.67-254.67,627.69-26.46,223.99,6.69,441.27,86.9,635.99"
//           />
//         </g>
//         <g id="Textos_2">
//           <text className="cls-7" transform="translate(529.79 3187.1)">
//             <tspan x="0" y="0">
//               PUE
//             </tspan>
//             <tspan className="cls-12" x="153.73" y="0">
//               R
//             </tspan>
//             <tspan className="cls-9" x="204.05" y="0">
//               T
//             </tspan>
//             <tspan x="242.88" y="0">
//               A DE ENT
//             </tspan>
//             <tspan className="cls-13" x="596.24" y="0">
//               R
//             </tspan>
//             <tspan x="646.2" y="0">
//               A
//             </tspan>
//             <tspan className="cls-10" x="702.5" y="0">
//               D
//             </tspan>
//             <tspan x="762.48" y="0">
//               A
//             </tspan>
//           </text>
//         </g>
//         <g id="Tendidos">
//           <text className="cls-3" transform="translate(1832.99 812.32) rotate(-21.09)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(1863.22 800.66) rotate(-20.08)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(1887.34 791.43) rotate(-18.58)">
//             <tspan
//               x="0"
//               y="0"
//               onClick={(e) => {
//                 setTransform(
//                   -e.pageX - contenedor.current?.clientWidth! - (movil.current ? 200 : 1000),
//                   -e.pageY - contenedor.current?.clientHeight! - (movil.current ? -600 : -950),
//                   6,
//                   2000
//                 )
//                 setTimeout(() => {
//                   setSizeShadow(6)
//                 }, 2000)
//               }}>
//               T
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(1948.97 770.49) rotate(-16.52)">
//             <tspan
//               x="0"
//               y="0"
//               onClick={(e) => {
//                 setTransform(
//                   -e.pageX - contenedor.current?.clientWidth! - (movil.current ? 200 : 1000),
//                   -e.pageY - contenedor.current?.clientHeight! - (movil.current ? -600 : -950),
//                   6,
//                   2000
//                 )
//                 setTimeout(() => {
//                   setSizeShadow(6)
//                 }, 2000)
//               }}>
//               e
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(2022.29 748.62) rotate(-13.97)">
//             <tspan
//               x="0"
//               y="0"
//               onClick={(e) => {
//                 setTransform(
//                   -e.pageX - contenedor.current?.clientWidth! - (movil.current ? 200 : 1000),
//                   -e.pageY - contenedor.current?.clientHeight! - (movil.current ? -600 : -950),
//                   6,
//                   2000
//                 )
//                 setTimeout(() => {
//                   setSizeShadow(6)
//                 }, 2000)
//               }}>
//               n
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(2104.6 728.1) rotate(-11.25)">
//             <tspan
//               x="0"
//               y="0"
//               onClick={(e) => {
//                 setTransform(
//                   -e.pageX - contenedor.current?.clientWidth! - (movil.current ? 200 : 1000),
//                   -e.pageY - contenedor.current?.clientHeight! - (movil.current ? -600 : -950),
//                   6,
//                   2000
//                 )
//                 setTimeout(() => {
//                   setSizeShadow(6)
//                 }, 2000)
//               }}>
//               d
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(2189.56 711.62) rotate(-9.32)">
//             <tspan
//               x="0"
//               y="0"
//               onClick={(e) => {
//                 setTransform(
//                   -e.pageX - contenedor.current?.clientWidth! - (movil.current ? 200 : 1000),
//                   -e.pageY - contenedor.current?.clientHeight! - (movil.current ? -600 : -950),
//                   6,
//                   2000
//                 )
//                 setTimeout(() => {
//                   setSizeShadow(6)
//                 }, 2000)
//               }}>
//               i
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(2224.4 705.45) rotate(-7.38)">
//             <tspan
//               x="0"
//               y="0"
//               onClick={(e) => {
//                 setTransform(
//                   -e.pageX - contenedor.current?.clientWidth! - (movil.current ? 200 : 1000),
//                   -e.pageY - contenedor.current?.clientHeight! - (movil.current ? -600 : -950),
//                   6,
//                   2000
//                 )
//                 setTimeout(() => {
//                   setSizeShadow(6)
//                 }, 2000)
//               }}>
//               d
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(2309.91 694.38) rotate(-4.67)">
//             <tspan
//               x="0"
//               y="0"
//               onClick={(e) => {
//                 setTransform(
//                   -e.pageX - contenedor.current?.clientWidth! - (movil.current ? 200 : 1000),
//                   -e.pageY - contenedor.current?.clientHeight! - (movil.current ? -600 : -950),
//                   6,
//                   2000
//                 )
//                 setTimeout(() => {
//                   setSizeShadow(6)
//                 }, 2000)
//               }}>
//               o
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(2393.93 687.93) rotate(-2.82)">
//             <tspan
//               x="0"
//               y="0"
//               onClick={(e) => {
//                 setTransform(
//                   -e.pageX - contenedor.current?.clientWidth! - (movil.current ? 200 : 1000),
//                   -e.pageY - contenedor.current?.clientHeight! - (movil.current ? -600 : -950),
//                   6,
//                   2000
//                 )
//                 setTimeout(() => {
//                   setSizeShadow(6)
//                 }, 2000)
//               }}>
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(2425.93 685.98) rotate(-1.06)">
//             <tspan
//               x="0"
//               y="0"
//               onClick={(e) => {
//                 setTransform(
//                   -e.pageX - contenedor.current?.clientWidth! - (movil.current ? 200 : 1000),
//                   -e.pageY - contenedor.current?.clientHeight! - (movil.current ? -600 : -950),
//                   6,
//                   2000
//                 )
//                 setTimeout(() => {
//                   setSizeShadow(6)
//                 }, 2000)
//               }}>
//               3
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(2504.66 684.87) rotate(.7)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(2537.02 685.26) rotate(1.73)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(2569.42 686.24) rotate(2.75)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(2601.77 687.79) rotate(3.78)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(2634.1 689.92) rotate(4.81)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(2666.37 692.63) rotate(5.83)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(2698.6 695.92) rotate(6.85)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(2730.78 699.78) rotate(7.88)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(2762.86 704.22) rotate(8.9)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(2794.87 709.23) rotate(9.92)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(2826.77 714.8) rotate(10.94)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(2858.58 720.95) rotate(11.96)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(2890.28 727.66) rotate(12.98)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(2921.85 734.93) rotate(14)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(2953.28 742.77) rotate(15.02)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(2984.58 751.16) rotate(16.04)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3015.72 760.11) rotate(17.05)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3046.69 769.6) rotate(18.07)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3077.5 779.65) rotate(19.09)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3108.12 790.24) rotate(20.1)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3138.52 801.37) rotate(21.12)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3168.75 813.04) rotate(22.14)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3198.76 825.24) rotate(23.15)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3228.56 837.98) rotate(24.17)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3258.13 851.25) rotate(25.19)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3287.44 865.03) rotate(26.21)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3316.52 879.34) rotate(27.22)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3345.33 894.16) rotate(28.24)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3373.87 909.48) rotate(29.26)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3402.14 925.31) rotate(30.28)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3430.12 941.65) rotate(31.3)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3457.78 958.46) rotate(32.32)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3485.16 975.78) rotate(33.34)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3512.25 993.6) rotate(34.36)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3538.99 1011.87) rotate(35.39)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3565.4 1030.63) rotate(36.41)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3591.48 1049.85) rotate(37.43)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3617.18 1069.53) rotate(38.46)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3642.56 1089.68) rotate(39.49)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3667.57 1110.28) rotate(40.51)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3692.21 1131.33) rotate(41.54)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3716.44 1152.8) rotate(42.57)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3740.3 1174.7) rotate(43.6)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3763.77 1197.05) rotate(44.63)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3786.82 1219.79) rotate(45.66)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3809.46 1242.95) rotate(46.69)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3831.7 1266.53) rotate(47.72)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3853.49 1290.49) rotate(48.75)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3874.85 1314.85) rotate(49.78)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3895.77 1339.57) rotate(50.81)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3916.24 1364.68) rotate(51.84)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3936.25 1390.14) rotate(52.87)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3955.81 1415.97) rotate(53.9)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3974.9 1442.14) rotate(54.93)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3993.51 1468.65) rotate(55.96)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(4011.65 1495.49) rotate(56.98)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(4029.31 1522.65) rotate(58.01)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(4046.47 1550.12) rotate(59.03)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(4063.15 1577.9) rotate(60.05)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(4079.32 1605.97) rotate(61.07)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(4094.99 1634.32) rotate(62.09)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(4110.16 1662.95) rotate(63.1)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(4124.83 1691.84) rotate(64.11)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(4138.98 1721) rotate(65.12)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(4152.29 1750.24) rotate(65.28)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(4165.73 1779.98) rotate(67.14)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(4178.34 1809.88) rotate(68.13)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(4190.42 1839.95) rotate(69.14)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(4201.95 1870.2) rotate(70.15)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(4212.96 1900.69) rotate(71.17)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(4223.42 1931.35) rotate(72.19)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(4233.33 1962.19) rotate(73.21)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(4242.69 1993.2) rotate(74.23)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(4251.5 2024.39) rotate(75.26)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(4259.74 2055.69) rotate(76.28)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(4267.43 2087.17) rotate(77.31)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(4274.56 2118.79) rotate(78.34)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(4281.1 2150.48) rotate(79.37)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(4287.09 2182.35) rotate(80.4)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(4292.5 2214.28) rotate(81.43)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(4297.33 2246.29) rotate(82.46)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(4301.58 2278.41) rotate(83.49)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(4305.26 2310.59) rotate(84.52)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(4308.66 2342.49) rotate(86.24)">
//             <tspan
//               x="0"
//               y="0"
//               onClick={(e) => {
//                 setTransform(
//                   -e.pageX - contenedor.current?.clientWidth! - (movil.current ? 1000 : 2600),
//                   -e.pageY - contenedor.current?.clientHeight! - (movil.current ? 200 : 500),
//                   6,
//                   2000
//                 )
//                 setTimeout(() => {
//                   setSizeShadow(6)
//                 }, 2000)
//               }}>
//               T
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(4313.15 2407.44) rotate(88.32)">
//             <tspan
//               x="0"
//               y="0"
//               onClick={(e) => {
//                 setTransform(
//                   -e.pageX - contenedor.current?.clientWidth! - (movil.current ? 1000 : 2600),
//                   -e.pageY - contenedor.current?.clientHeight! - (movil.current ? 200 : 500),
//                   6,
//                   2000
//                 )
//                 setTimeout(() => {
//                   setSizeShadow(6)
//                 }, 2000)
//               }}>
//               e
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(4315.51 2483.91) rotate(90.89)">
//             <tspan
//               x="0"
//               y="0"
//               onClick={(e) => {
//                 setTransform(
//                   -e.pageX - contenedor.current?.clientWidth! - (movil.current ? 1000 : 2600),
//                   -e.pageY - contenedor.current?.clientHeight! - (movil.current ? 200 : 500),
//                   6,
//                   2000
//                 )
//                 setTimeout(() => {
//                   setSizeShadow(6)
//                 }, 2000)
//               }}>
//               n
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(4314.24 2568.72) rotate(93.6)">
//             <tspan
//               x="0"
//               y="0"
//               onClick={(e) => {
//                 setTransform(
//                   -e.pageX - contenedor.current?.clientWidth! - (movil.current ? 1000 : 2600),
//                   -e.pageY - contenedor.current?.clientHeight! - (movil.current ? 200 : 500),
//                   6,
//                   2000
//                 )
//                 setTimeout(() => {
//                   setSizeShadow(6)
//                 }, 2000)
//               }}>
//               d
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(4308.4 2655.05) rotate(95.53)">
//             <tspan
//               x="0"
//               y="0"
//               onClick={(e) => {
//                 setTransform(
//                   -e.pageX - contenedor.current?.clientWidth! - (movil.current ? 1000 : 2600),
//                   -e.pageY - contenedor.current?.clientHeight! - (movil.current ? 200 : 500),
//                   6,
//                   2000
//                 )
//                 setTimeout(() => {
//                   setSizeShadow(6)
//                 }, 2000)
//               }}>
//               i
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(4305.43 2690.35) rotate(97.45)">
//             <tspan
//               x="0"
//               y="0"
//               onClick={(e) => {
//                 setTransform(
//                   -e.pageX - contenedor.current?.clientWidth! - (movil.current ? 1000 : 2600),
//                   -e.pageY - contenedor.current?.clientHeight! - (movil.current ? 200 : 500),
//                   6,
//                   2000
//                 )
//                 setTimeout(() => {
//                   setSizeShadow(6)
//                 }, 2000)
//               }}>
//               d
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(4294.25 2775.83) rotate(100.14)">
//             <tspan
//               x="0"
//               y="0"
//               onClick={(e) => {
//                 setTransform(
//                   -e.pageX - contenedor.current?.clientWidth! - (movil.current ? 1000 : 2600),
//                   -e.pageY - contenedor.current?.clientHeight! - (movil.current ? 200 : 500),
//                   6,
//                   2000
//                 )
//                 setTimeout(() => {
//                   setSizeShadow(6)
//                 }, 2000)
//               }}>
//               o
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(4279.03 2858.7) rotate(101.97)">
//             <tspan
//               x="0"
//               y="0"
//               onClick={(e) => {
//                 setTransform(
//                   -e.pageX - contenedor.current?.clientWidth! - (movil.current ? 1000 : 2600),
//                   -e.pageY - contenedor.current?.clientHeight! - (movil.current ? 200 : 500),
//                   6,
//                   2000
//                 )
//                 setTimeout(() => {
//                   setSizeShadow(6)
//                 }, 2000)
//               }}>
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(4272.74 2890.15) rotate(103.71)">
//             <tspan
//               x="0"
//               y="0"
//               onClick={(e) => {
//                 setTransform(
//                   -e.pageX - contenedor.current?.clientWidth! - (movil.current ? 1000 : 2600),
//                   -e.pageY - contenedor.current?.clientHeight! - (movil.current ? 200 : 500),
//                   6,
//                   2000
//                 )
//                 setTimeout(() => {
//                   setSizeShadow(6)
//                 }, 2000)
//               }}>
//               2
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(4253.75 2966.56) rotate(105.45)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(4245.12 2997.79) rotate(106.47)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(4235.94 3028.86) rotate(107.48)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(4226.2 3059.77) rotate(108.5)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(4215.93 3090.48) rotate(109.52)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(4205.11 3121.02) rotate(110.54)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(4193.75 3151.36) rotate(111.55)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(4181.85 3181.5) rotate(112.57)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(4169.42 3211.42) rotate(113.59)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(4156.46 3241.12) rotate(114.6)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(4142.98 3270.57) rotate(115.62)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(4128.97 3299.79) rotate(116.64)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(4114.45 3328.74) rotate(117.65)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(4099.42 3357.44) rotate(118.67)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(4083.87 3385.89) rotate(119.69)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(4067.83 3414.02) rotate(120.71)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(4051.29 3441.87) rotate(121.73)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(4034.25 3469.43) rotate(122.75)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(4016.74 3496.68) rotate(123.77)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3998.73 3523.6) rotate(124.8)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3980.25 3550.21) rotate(125.82)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3961.29 3576.48) rotate(126.84)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3941.87 3602.41) rotate(127.87)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3921.99 3627.98) rotate(128.89)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3901.65 3653.2) rotate(129.92)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3880.86 3678.05) rotate(130.95)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3859.65 3702.51) rotate(131.98)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3837.98 3726.59) rotate(133)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3815.88 3750.3) rotate(134.03)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3793.37 3773.58) rotate(135.06)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3770.45 3796.46) rotate(136.09)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3747.11 3818.93) rotate(137.12)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3723.38 3840.97) rotate(138.16)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3699.25 3862.58) rotate(139.19)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3674.74 3883.75) rotate(140.22)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3649.85 3904.48) rotate(141.25)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3624.58 3924.77) rotate(142.28)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3598.98 3944.58) rotate(143.31)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3573 3963.95) rotate(144.34)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3546.69 3982.83) rotate(145.37)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3520.04 4001.24) rotate(146.39)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3493.07 4019.17) rotate(147.42)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3465.77 4036.62) rotate(148.44)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3438.16 4053.59) rotate(149.46)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3410.28 4070.04) rotate(150.48)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3382.08 4086.01) rotate(151.5)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3353.59 4101.48) rotate(152.52)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3324.85 4116.44) rotate(153.53)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3295.86 4130.88) rotate(154.54)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3266.47 4144.79) rotate(155.28)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3237.42 4158.28) rotate(157.14)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3207.38 4171.13) rotate(157.55)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3177.43 4183.51) rotate(158.56)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3147.28 4195.36) rotate(159.57)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3116.93 4206.67) rotate(160.58)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3086.36 4217.45) rotate(161.6)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3055.63 4227.68) rotate(162.62)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(3024.71 4237.36) rotate(163.64)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(2993.64 4246.48) rotate(164.66)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(2962.39 4255.06) rotate(165.69)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(2931.01 4263.07) rotate(166.72)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(2899.48 4270.51) rotate(167.74)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(2867.83 4277.39) rotate(168.77)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(2836.05 4283.71) rotate(169.8)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(2804.18 4289.44) rotate(170.83)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-3" transform="translate(2772.19 4294.61) rotate(171.86)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(2174.11 3796.98) rotate(-165.5)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(2154.51 3791.91) rotate(-164.64)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(2134.95 3786.54) rotate(-163.78)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(2115.5 3780.88) rotate(-162.92)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(2096.13 3774.93) rotate(-162.05)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(2076.87 3768.69) rotate(-161.19)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(2057.7 3762.17) rotate(-160.32)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(2038.62 3755.34) rotate(-159.45)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(2019.63 3748.23) rotate(-158.58)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(2000.77 3740.83) rotate(-157.71)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1982.03 3733.15) rotate(-156.84)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1963.4 3725.18) rotate(-155.96)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1944.9 3716.94) rotate(-155.09)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1926.51 3708.4) rotate(-154.22)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1908.27 3699.59) rotate(-153.34)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1890.16 3690.5) rotate(-152.47)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1872.2 3681.14) rotate(-151.59)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1854.39 3671.51) rotate(-150.72)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1836.73 3661.61) rotate(-149.84)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1819.2 3651.43) rotate(-148.97)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1801.85 3640.99) rotate(-148.09)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1784.64 3630.28) rotate(-147.22)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1767.62 3619.32) rotate(-146.34)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1750.73 3608.08) rotate(-145.47)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1734.04 3596.6) rotate(-144.6)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1717.55 3584.88) rotate(-143.73)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1701.21 3572.89) rotate(-142.85)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1685.07 3560.66) rotate(-141.98)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1669.11 3548.19) rotate(-141.11)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1653.33 3535.46) rotate(-140.24)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1637.76 3522.51) rotate(-139.37)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1622.38 3509.32) rotate(-138.5)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1607.19 3495.88) rotate(-137.63)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1592.24 3482.25) rotate(-136.76)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1577.46 3468.35) rotate(-135.89)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1562.91 3454.25) rotate(-135.03)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1548.57 3439.93) rotate(-134.16)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1534.47 3425.41) rotate(-133.29)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1520.57 3410.66) rotate(-132.43)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1506.9 3395.72) rotate(-131.56)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1493.45 3380.55) rotate(-130.7)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1480.23 3365.18) rotate(-129.83)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1467.25 3349.62) rotate(-128.97)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1454.51 3333.87) rotate(-128.11)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1442.01 3317.93) rotate(-127.24)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1429.75 3301.82) rotate(-126.38)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1417.72 3285.49) rotate(-125.52)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1405.94 3268.99) rotate(-124.65)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1394.43 3252.34) rotate(-123.79)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1383.16 3235.5) rotate(-122.93)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1372.13 3218.48) rotate(-122.06)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1361.39 3201.33) rotate(-121.2)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1350.88 3183.99) rotate(-120.34)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1340.65 3166.51) rotate(-119.48)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1330.67 3148.86) rotate(-118.61)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1320.97 3131.08) rotate(-117.75)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1311.53 3113.15) rotate(-116.89)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1302.37 3095.07) rotate(-116.02)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1293.48 3076.88) rotate(-115.16)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1284.86 3058.53) rotate(-114.29)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1276.52 3040.06) rotate(-113.43)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1268.46 3021.47) rotate(-112.56)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1260.69 3002.77) rotate(-111.69)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1253.2 2983.94) rotate(-110.83)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1245.99 2964.99) rotate(-109.96)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1239.07 2945.95) rotate(-109.09)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1232.45 2926.83) rotate(-108.22)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1226.11 2907.59) rotate(-107.35)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1220.07 2888.24) rotate(-106.48)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1214.32 2868.81) rotate(-105.61)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1208.86 2849.31) rotate(-104.74)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1203.7 2829.71) rotate(-103.87)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1198.84 2810.05) rotate(-103)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1194.29 2790.32) rotate(-102.13)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1190.03 2770.49) rotate(-101.25)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1186.07 2750.62) rotate(-100.38)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1182.41 2730.69) rotate(-99.51)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1179.07 2710.74) rotate(-98.63)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1176.02 2690.68) rotate(-97.76)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1173.29 2670.6) rotate(-96.88)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1170.86 2650.49) rotate(-96.01)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1168.74 2630.34) rotate(-95.13)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1166.92 2610.19) rotate(-94.26)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1165.42 2589.98) rotate(-93.38)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1164.22 2569.74) rotate(-92.51)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1163.33 2549.51) rotate(-91.63)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1162.75 2529.26) rotate(-90.76)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1162.48 2509.02) rotate(-89.89)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1162.52 2488.74) rotate(-89.01)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1162.86 2468.5) rotate(-88.14)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1163.52 2448.23) rotate(-87.27)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1164.48 2428.02) rotate(-86.4)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1165.75 2407.8) rotate(-85.53)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1167.32 2387.59) rotate(-84.67)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1169.2 2367.41) rotate(-83.8)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1171.39 2347.27) rotate(-82.94)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1173.88 2327.17) rotate(-82.08)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1176.67 2307.08) rotate(-81.22)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1179.76 2287.06) rotate(-80.36)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1183.15 2267.09) rotate(-79.5)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1186.94 2247.04) rotate(-79.05)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1190.68 2227.46) rotate(-77.19)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1195.11 2207.48) rotate(-76.95)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1199.68 2187.75) rotate(-76.09)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1204.56 2168.05) rotate(-75.23)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1209.72 2148.46) rotate(-74.38)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1215.17 2128.96) rotate(-73.51)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1220.92 2109.53) rotate(-72.65)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1226.96 2090.17) rotate(-71.79)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1233.29 2070.93) rotate(-70.92)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1239.91 2051.79) rotate(-70.05)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1246.82 2032.74) rotate(-69.18)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1254.02 2013.8) rotate(-68.31)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1261.5 1994.99) rotate(-67.44)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1269.28 1976.27) rotate(-66.57)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1277.33 1957.69) rotate(-65.69)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1285.67 1939.22) rotate(-64.82)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1294.29 1920.88) rotate(-63.95)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1303.18 1902.68) rotate(-63.07)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1312.34 1884.63) rotate(-62.2)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1321.8 1866.7) rotate(-61.32)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1331.52 1848.92) rotate(-60.45)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1341.5 1831.31) rotate(-59.57)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1351.76 1813.84) rotate(-58.7)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1362.29 1796.52) rotate(-57.82)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1373.08 1779.37) rotate(-56.95)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1384.11 1762.4) rotate(-56.08)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1395.43 1745.58) rotate(-55.2)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1406.98 1728.95) rotate(-54.33)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1418.79 1712.49) rotate(-53.46)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1430.86 1696.21) rotate(-52.58)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1443.17 1680.11) rotate(-51.71)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1455.72 1664.21) rotate(-50.84)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1468.51 1648.5) rotate(-49.97)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1481.54 1632.99) rotate(-49.1)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1494.8 1617.68) rotate(-48.23)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1508.3 1602.55) rotate(-47.36)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1522.02 1587.65) rotate(-46.49)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1535.96 1572.96) rotate(-45.63)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1550.13 1558.48) rotate(-44.76)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1564.51 1544.21) rotate(-43.89)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(1579.12 1530.16) rotate(-43.03)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(1593.87 1516.35) rotate(-42.06)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(1612.5 1499.54) rotate(-40.99)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(1627.36 1486.21) rotate(-39.41)">
//             <tspan
//               x="0"
//               y="0"
//               className="tspan"
//               onClick={(e) => {
//                 setTransform(
//                   -e.pageX - contenedor.current?.clientWidth! - (movil.current ? 100 : 500),
//                   -e.pageY - contenedor.current?.clientHeight! - (movil.current ? -420 : -250),
//                   6,
//                   2000
//                 )
//                 setTimeout(() => {
//                   setSizeShadow(6)
//                 }, 2000)
//               }}>
//               T
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(1666.17 1454.09) rotate(-37.25)">
//             <tspan
//               x="0"
//               y="0"
//               onClick={(e) => {
//                 setTransform(
//                   -e.pageX - contenedor.current?.clientWidth! - (movil.current ? 100 : 500),
//                   -e.pageY - contenedor.current?.clientHeight! - (movil.current ? -420 : -250),
//                   6,
//                   2000
//                 )
//                 setTimeout(() => {
//                   setSizeShadow(6)
//                 }, 2000)
//               }}>
//               e
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(1713.24 1418.18) rotate(-34.59)">
//             <tspan
//               x="0"
//               y="0"
//               onClick={(e) => {
//                 setTransform(
//                   -e.pageX - contenedor.current?.clientWidth! - (movil.current ? 100 : 500),
//                   -e.pageY - contenedor.current?.clientHeight! - (movil.current ? -420 : -250),
//                   6,
//                   2000
//                 )
//                 setTimeout(() => {
//                   setSizeShadow(6)
//                 }, 2000)
//               }}>
//               n
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(1767.26 1380.88) rotate(-31.77)">
//             <tspan
//               x="0"
//               y="0"
//               onClick={(e) => {
//                 setTransform(
//                   -e.pageX - contenedor.current?.clientWidth! - (movil.current ? 100 : 500),
//                   -e.pageY - contenedor.current?.clientHeight! - (movil.current ? -420 : -250),
//                   6,
//                   2000
//                 )
//                 setTimeout(() => {
//                   setSizeShadow(6)
//                 }, 2000)
//               }}>
//               d
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(1824.36 1345.91) rotate(-29.76)">
//             <tspan
//               x="0"
//               y="0"
//               onClick={(e) => {
//                 setTransform(
//                   -e.pageX - contenedor.current?.clientWidth! - (movil.current ? 100 : 500),
//                   -e.pageY - contenedor.current?.clientHeight! - (movil.current ? -420 : -250),
//                   6,
//                   2000
//                 )
//                 setTimeout(() => {
//                   setSizeShadow(6)
//                 }, 2000)
//               }}>
//               i
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(1847.96 1332) rotate(-27.75)">
//             <tspan
//               x="0"
//               y="0"
//               onClick={(e) => {
//                 setTransform(
//                   -e.pageX - contenedor.current?.clientWidth! - (movil.current ? 100 : 500),
//                   -e.pageY - contenedor.current?.clientHeight! - (movil.current ? -420 : -250),
//                   6,
//                   2000
//                 )
//                 setTimeout(() => {
//                   setSizeShadow(6)
//                 }, 2000)
//               }}>
//               d
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(1906.99 1300.93) rotate(-24.95)">
//             <tspan
//               x="0"
//               y="0"
//               onClick={(e) => {
//                 setTransform(
//                   -e.pageX - contenedor.current?.clientWidth! - (movil.current ? 100 : 500),
//                   -e.pageY - contenedor.current?.clientHeight! - (movil.current ? -420 : -250),
//                   6,
//                   2000
//                 )
//                 setTimeout(() => {
//                   setSizeShadow(6)
//                 }, 2000)
//               }}>
//               o
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(1966.27 1273.72) rotate(-23.03)">
//             <tspan
//               x="0"
//               y="0"
//               onClick={(e) => {
//                 setTransform(
//                   -e.pageX - contenedor.current?.clientWidth! - (movil.current ? 100 : 500),
//                   -e.pageY - contenedor.current?.clientHeight! - (movil.current ? -420 : -250),
//                   6,
//                   2000
//                 )
//                 setTimeout(() => {
//                   setSizeShadow(6)
//                 }, 2000)
//               }}>
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(1988.98 1263.74) rotate(-21.19)">
//             <tspan
//               x="0"
//               y="0"
//               onClick={(e) => {
//                 setTransform(
//                   -e.pageX - contenedor.current?.clientWidth! - (movil.current ? 100 : 500),
//                   -e.pageY - contenedor.current?.clientHeight! - (movil.current ? -420 : -250),
//                   6,
//                   2000
//                 )
//                 setTimeout(() => {
//                   setSizeShadow(6)
//                 }, 2000)
//               }}>
//               3
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(2045.49 1241.76) rotate(-18.52)">
//             <tspan
//               x="0"
//               y="0"
//               onClick={(e) => {
//                 setTransform(
//                   -e.pageX - contenedor.current?.clientWidth! - (movil.current ? 100 : 500),
//                   -e.pageY - contenedor.current?.clientHeight! - (movil.current ? -420 : -250),
//                   6,
//                   2000
//                 )
//                 setTimeout(() => {
//                   setSizeShadow(6)
//                 }, 2000)
//               }}>
//               B
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(2106.64 1221.61) rotate(-16.61)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(2130.66 1214.44) rotate(-15.53)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(2154.81 1207.73) rotate(-14.45)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(2179.08 1201.47) rotate(-13.38)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(2203.46 1195.67) rotate(-12.3)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(2227.92 1190.33) rotate(-11.22)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(2252.52 1185.45) rotate(-10.14)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(2277.19 1181.04) rotate(-9.06)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(2301.94 1177.09) rotate(-7.97)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(2326.75 1173.61) rotate(-6.89)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(2351.64 1170.6) rotate(-5.81)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(2376.57 1168.06) rotate(-4.73)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(2401.54 1165.99) rotate(-3.64)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(2426.56 1164.39) rotate(-2.56)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(2451.58 1163.27) rotate(-1.48)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(2476.65 1162.62) rotate(-.4)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(2501.72 1162.44) rotate(.68)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(2526.77 1162.73) rotate(1.76)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(2551.82 1163.5) rotate(2.84)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(2576.86 1164.74) rotate(3.91)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(2601.86 1166.44) rotate(4.98)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(2626.84 1168.62) rotate(6.06)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(2651.76 1171.26) rotate(7.12)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(2676.62 1174.36) rotate(8.19)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(2701.45 1177.93) rotate(9.25)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(2726.21 1181.96) rotate(10.31)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(2751 1186.57) rotate(10.95)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(2775.34 1191.27) rotate(12.81)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(2795.02 1195.38) rotate(13.98)">
//             <tspan
//               x="0"
//               y="0"
//               onClick={(e) => {
//                 setTransform(
//                   -e.pageX - contenedor.current?.clientWidth! - (movil.current ? 600 : 1500),
//                   -e.pageY - contenedor.current?.clientHeight! - (movil.current ? -420 : -350),
//                   6,
//                   2000
//                 )
//                 setTimeout(() => {
//                   setSizeShadow(6)
//                 }, 2000)
//               }}>
//               T
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(2843.95 1207.38) rotate(16.13)">
//             <tspan
//               x="0"
//               y="0"
//               onClick={(e) => {
//                 setTransform(
//                   -e.pageX - contenedor.current?.clientWidth! - (movil.current ? 600 : 1500),
//                   -e.pageY - contenedor.current?.clientHeight! - (movil.current ? -420 : -350),
//                   6,
//                   2000
//                 )
//                 setTimeout(() => {
//                   setSizeShadow(6)
//                 }, 2000)
//               }}>
//               e
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(2900.84 1223.73) rotate(18.79)">
//             <tspan
//               x="0"
//               y="0"
//               onClick={(e) => {
//                 setTransform(
//                   -e.pageX - contenedor.current?.clientWidth! - (movil.current ? 600 : 1500),
//                   -e.pageY - contenedor.current?.clientHeight! - (movil.current ? -420 : -350),
//                   6,
//                   2000
//                 )
//                 setTimeout(() => {
//                   setSizeShadow(6)
//                 }, 2000)
//               }}>
//               n
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(2962.99 1244.83) rotate(21.63)">
//             <tspan
//               x="0"
//               y="0"
//               onClick={(e) => {
//                 setTransform(
//                   -e.pageX - contenedor.current?.clientWidth! - (movil.current ? 600 : 1500),
//                   -e.pageY - contenedor.current?.clientHeight! - (movil.current ? -420 : -350),
//                   6,
//                   2000
//                 )
//                 setTimeout(() => {
//                   setSizeShadow(6)
//                 }, 2000)
//               }}>
//               d
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(3025.13 1269.83) rotate(23.66)">
//             <tspan
//               x="0"
//               y="0"
//               onClick={(e) => {
//                 setTransform(
//                   -e.pageX - contenedor.current?.clientWidth! - (movil.current ? 600 : 1500),
//                   -e.pageY - contenedor.current?.clientHeight! - (movil.current ? -420 : -350),
//                   6,
//                   2000
//                 )
//                 setTimeout(() => {
//                   setSizeShadow(6)
//                 }, 2000)
//               }}>
//               i
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(3050.36 1280.49) rotate(25.69)">
//             <tspan
//               x="0"
//               y="0"
//               onClick={(e) => {
//                 setTransform(
//                   -e.pageX - contenedor.current?.clientWidth! - (movil.current ? 600 : 1500),
//                   -e.pageY - contenedor.current?.clientHeight! - (movil.current ? -420 : -350),
//                   6,
//                   2000
//                 )
//                 setTimeout(() => {
//                   setSizeShadow(6)
//                 }, 2000)
//               }}>
//               d
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(3110.45 1309.4) rotate(28.53)">
//             <tspan
//               x="0"
//               y="0"
//               onClick={(e) => {
//                 setTransform(
//                   -e.pageX - contenedor.current?.clientWidth! - (movil.current ? 600 : 1500),
//                   -e.pageY - contenedor.current?.clientHeight! - (movil.current ? -420 : -350),
//                   6,
//                   2000
//                 )
//                 setTimeout(() => {
//                   setSizeShadow(6)
//                 }, 2000)
//               }}>
//               o
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(3167.59 1340.84) rotate(30.48)">
//             <tspan
//               x="0"
//               y="0"
//               onClick={(e) => {
//                 setTransform(
//                   -e.pageX - contenedor.current?.clientWidth! - (movil.current ? 600 : 1500),
//                   -e.pageY - contenedor.current?.clientHeight! - (movil.current ? -420 : -350),
//                   6,
//                   2000
//                 )
//                 setTimeout(() => {
//                   setSizeShadow(6)
//                 }, 2000)
//               }}>
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(3189.12 1353.16) rotate(32.33)">
//             <tspan
//               x="0"
//               y="0"
//               onClick={(e) => {
//                 setTransform(
//                   -e.pageX - contenedor.current?.clientWidth! - (movil.current ? 600 : 1500),
//                   -e.pageY - contenedor.current?.clientHeight! - (movil.current ? -420 : -350),
//                   6,
//                   2000
//                 )
//                 setTimeout(() => {
//                   setSizeShadow(6)
//                 }, 2000)
//               }}>
//               3
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(3240.39 1385.4) rotate(35.19)">
//             <tspan
//               x="0"
//               y="0"
//               onClick={(e) => {
//                 setTransform(
//                   -e.pageX - contenedor.current?.clientWidth! - (movil.current ? 600 : 1500),
//                   -e.pageY - contenedor.current?.clientHeight! - (movil.current ? -420 : -350),
//                   6,
//                   2000
//                 )
//                 setTimeout(() => {
//                   setSizeShadow(6)
//                 }, 2000)
//               }}>
//               A
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(3299.55 1427.65) rotate(37.29)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(3319.51 1442.85) rotate(38.37)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3339.16 1458.43) rotate(39.36)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3355.47 1471.8) rotate(40.27)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3371.58 1485.45) rotate(41.18)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3387.45 1499.32) rotate(42.08)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3403.1 1513.45) rotate(42.98)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3418.54 1527.84) rotate(43.89)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3433.74 1542.46) rotate(44.79)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3448.72 1557.33) rotate(45.69)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3463.46 1572.42) rotate(46.6)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3477.97 1587.76) rotate(47.5)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3492.21 1603.29) rotate(48.4)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3506.22 1619.08) rotate(49.3)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3519.99 1635.07) rotate(50.2)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3533.48 1651.27) rotate(51.1)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3546.74 1667.69) rotate(52)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3559.73 1684.31) rotate(52.9)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3572.46 1701.13) rotate(53.8)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3584.93 1718.18) rotate(54.69)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3597.12 1735.38) rotate(55.59)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3609.04 1752.78) rotate(56.49)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3620.7 1770.39) rotate(57.39)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3632.07 1788.15) rotate(58.29)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3643.16 1806.09) rotate(59.19)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3653.96 1824.2) rotate(60.08)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3664.48 1842.48) rotate(60.98)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3674.74 1860.96) rotate(61.88)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3684.67 1879.55) rotate(62.78)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3694.33 1898.32) rotate(63.68)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3703.68 1917.22) rotate(64.58)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3712.74 1936.27) rotate(65.48)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3721.5 1955.47) rotate(66.38)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3729.95 1974.79) rotate(67.28)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3738.09 1994.25) rotate(68.19)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3745.94 2013.85) rotate(69.09)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3753.47 2033.55) rotate(69.99)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3760.69 2053.38) rotate(70.9)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3767.6 2073.31) rotate(71.8)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3774.19 2093.36) rotate(72.71)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3780.46 2113.47) rotate(73.61)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3786.42 2133.73) rotate(74.52)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3792.05 2154.03) rotate(75.42)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3797.36 2174.45) rotate(76.33)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3802.35 2194.97) rotate(77.24)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3807.01 2215.53) rotate(78.15)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3811.35 2236.19) rotate(79.06)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3815.35 2256.89) rotate(79.97)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3819.03 2277.67) rotate(80.88)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3822.37 2298.5) rotate(81.79)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3825.39 2319.36) rotate(82.7)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3828.07 2340.3) rotate(83.61)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3830.42 2361.24) rotate(84.52)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3832.44 2382.23) rotate(85.43)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3834.12 2403.26) rotate(86.34)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3835.47 2424.32) rotate(87.25)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3836.48 2445.41) rotate(88.17)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3837.16 2466.49) rotate(89.08)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(3837.79 2487.3) rotate(90.8)">
//             <tspan x="0" y="0">
//               T
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(3837.27 2537.65) rotate(92.97)">
//             <tspan x="0" y="0">
//               e
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(3834.3 2596.78) rotate(95.65)">
//             <tspan x="0" y="0">
//               n
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(3827.88 2662.11) rotate(98.46)">
//             <tspan x="0" y="0">
//               d
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(3817.69 2728.29) rotate(100.46)">
//             <tspan x="0" y="0">
//               i
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(3813.31 2755.21) rotate(102.81)">
//             <tspan x="0" y="0">
//               d
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(3798.7 2820.47) rotate(105.22)">
//             <tspan x="0" y="0">
//               o
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(3781.27 2883.29) rotate(107.13)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(3774.24 2907.09) rotate(108.96)">
//             <tspan x="0" y="0">
//               2
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(3754.18 2964.61) rotate(110.8)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(3745.71 2987.88) rotate(112.72)">
//             <tspan x="0" y="0">
//               B
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(3720.88 3047.03) rotate(115.33)">
//             <tspan x="0" y="0">
//               a
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(3696.21 3098.63) rotate(117.18)">
//             <tspan x="0" y="0">
//               j
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(3683.51 3124.11) rotate(119.2)">
//             <tspan x="0" y="0">
//               o
//             </tspan>
//           </text>
//           <text className="cls-2" transform="translate(3651.42 3180.86) rotate(121.14)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-4" transform="translate(3638.47 3202.32) rotate(122.3)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3623.26 3226.34) rotate(123.36)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3611.64 3243.98) rotate(124.27)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3599.77 3261.41) rotate(125.18)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3587.62 3278.65) rotate(126.09)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3575.21 3295.68) rotate(127)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3562.51 3312.54) rotate(127.91)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3549.55 3329.18) rotate(128.81)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3536.33 3345.62) rotate(129.72)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3522.85 3361.85) rotate(130.63)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3509.12 3377.86) rotate(131.53)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3495.13 3393.65) rotate(132.44)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3480.89 3409.23) rotate(133.34)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3466.41 3424.58) rotate(134.25)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3451.7 3439.69) rotate(135.15)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3436.74 3454.57) rotate(136.05)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3421.56 3469.21) rotate(136.95)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3406.14 3483.62) rotate(137.85)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3390.49 3497.78) rotate(138.75)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3374.64 3511.69) rotate(139.65)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-6" transform="translate(3358.57 3525.34) rotate(140.55)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(3342.25 3538.76) rotate(141.44)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(3326.42 3551.39) rotate(142.3)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(3310.4 3563.77) rotate(143.16)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(3294.17 3575.93) rotate(144.03)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(3277.79 3587.83) rotate(144.89)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(3261.2 3599.49) rotate(145.75)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(3244.45 3610.9) rotate(146.61)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(3227.55 3622.04) rotate(147.48)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(3210.46 3632.94) rotate(148.34)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(3193.2 3643.58) rotate(149.2)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(3175.81 3653.95) rotate(150.07)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(3158.24 3664.07) rotate(150.93)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(3140.54 3673.91) rotate(151.79)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(3122.69 3683.49) rotate(152.66)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(3104.69 3692.8) rotate(153.52)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(3086.55 3701.84) rotate(154.38)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(3068.29 3710.6) rotate(155.25)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(3049.9 3719.08) rotate(156.11)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(3031.37 3727.29) rotate(156.98)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(3012.71 3735.22) rotate(157.85)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(2993.95 3742.86) rotate(158.71)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(2975.07 3750.22) rotate(159.58)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(2956.1 3757.28) rotate(160.45)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(2937 3764.07) rotate(161.32)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(2917.79 3770.57) rotate(162.19)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(2898.5 3776.77) rotate(163.06)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(2879.13 3782.67) rotate(163.92)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(2859.66 3788.29) rotate(164.8)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(2840.11 3793.6) rotate(165.67)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(2820.49 3798.62) rotate(166.54)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(2800.78 3803.34) rotate(167.41)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(2781.01 3807.76) rotate(168.28)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(2761.18 3811.87) rotate(169.16)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(2741.29 3815.68) rotate(170.03)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(2721.35 3819.19) rotate(170.9)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(2701.33 3822.4) rotate(171.78)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text className="cls-5" transform="translate(2681.27 3825.3) rotate(172.65)">
//             <tspan x="0" y="0">
//               {' '}
//             </tspan>
//           </text>
//           <text
//             className="cls-1"
//             transform="translate(2083.91 3847.82) rotate(19.13) scale(1.02 1)">
//             <tspan
//               x="0"
//               y="0"
//               onClick={(e) => {
//                 setTransform(
//                   -e.pageX - contenedor.current?.clientWidth! - (movil.current ? 300 : 1200),
//                   -e.pageY - contenedor.current?.clientHeight! - (movil.current ? 500 : 1500),
//                   6,
//                   2000
//                 )
//                 setTimeout(() => {
//                   setSizeShadow(6)
//                 }, 2000)
//               }}>
//               T
//             </tspan>
//           </text>
//           <text
//             className="cls-1"
//             transform="translate(2135.71 3865.96) rotate(16.27) scale(1.02 1)">
//             <tspan
//               x="0"
//               y="0"
//               onClick={(e) => {
//                 setTransform(
//                   -e.pageX - contenedor.current?.clientWidth! - (movil.current ? 300 : 1200),
//                   -e.pageY - contenedor.current?.clientHeight! - (movil.current ? 500 : 1500),
//                   6,
//                   2000
//                 )
//                 setTimeout(() => {
//                   setSizeShadow(6)
//                 }, 2000)
//               }}>
//               e
//             </tspan>
//           </text>
//           <text
//             className="cls-1"
//             transform="translate(2197.82 3884.09) rotate(12.76) scale(1.02 1)">
//             <tspan
//               x="0"
//               y="0"
//               onClick={(e) => {
//                 setTransform(
//                   -e.pageX - contenedor.current?.clientWidth! - (movil.current ? 300 : 1200),
//                   -e.pageY - contenedor.current?.clientHeight! - (movil.current ? 500 : 1500),
//                   6,
//                   2000
//                 )
//                 setTimeout(() => {
//                   setSizeShadow(6)
//                 }, 2000)
//               }}>
//               n
//             </tspan>
//           </text>
//           <text className="cls-1" transform="translate(2267.57 3899.79) rotate(9.07) scale(1.02 1)">
//             <tspan
//               x="0"
//               y="0"
//               onClick={(e) => {
//                 setTransform(
//                   -e.pageX - contenedor.current?.clientWidth! - (movil.current ? 300 : 1200),
//                   -e.pageY - contenedor.current?.clientHeight! - (movil.current ? 500 : 1500),
//                   6,
//                   2000
//                 )
//                 setTimeout(() => {
//                   setSizeShadow(6)
//                 }, 2000)
//               }}>
//               d
//             </tspan>
//           </text>
//           <text className="cls-1" transform="translate(2338.39 3910.57) rotate(6.45) scale(1.02 1)">
//             <tspan
//               x="0"
//               y="0"
//               onClick={(e) => {
//                 setTransform(
//                   -e.pageX - contenedor.current?.clientWidth! - (movil.current ? 300 : 1200),
//                   -e.pageY - contenedor.current?.clientHeight! - (movil.current ? 500 : 1500),
//                   6,
//                   2000
//                 )
//                 setTimeout(() => {
//                   setSizeShadow(6)
//                 }, 2000)
//               }}>
//               i
//             </tspan>
//           </text>
//           <text className="cls-1" transform="translate(2369.18 3914.46) rotate(3.85) scale(1.02 1)">
//             <tspan
//               x="0"
//               y="0"
//               onClick={(e) => {
//                 setTransform(
//                   -e.pageX - contenedor.current?.clientWidth! - (movil.current ? 300 : 1200),
//                   -e.pageY - contenedor.current?.clientHeight! - (movil.current ? 500 : 1500),
//                   6,
//                   2000
//                 )
//                 setTimeout(() => {
//                   setSizeShadow(6)
//                 }, 2000)
//               }}>
//               d
//             </tspan>
//           </text>
//           <text className="cls-1" transform="translate(2441.55 3919.2) rotate(.25) scale(1.02 1)">
//             <tspan
//               x="0"
//               y="0"
//               onClick={(e) => {
//                 setTransform(
//                   -e.pageX - contenedor.current?.clientWidth! - (movil.current ? 300 : 1200),
//                   -e.pageY - contenedor.current?.clientHeight! - (movil.current ? 500 : 1500),
//                   6,
//                   2000
//                 )
//                 setTimeout(() => {
//                   setSizeShadow(6)
//                 }, 2000)
//               }}>
//               o
//             </tspan>
//           </text>
//           <text
//             className="cls-1"
//             transform="translate(2511.17 3919.02) rotate(-2.19) scale(1.02 1)">
//             <tspan
//               x="0"
//               y="0"
//               onClick={(e) => {
//                 setTransform(
//                   -e.pageX - contenedor.current?.clientWidth! - (movil.current ? 300 : 1200),
//                   -e.pageY - contenedor.current?.clientHeight! - (movil.current ? 500 : 1500),
//                   6,
//                   2000
//                 )
//                 setTimeout(() => {
//                   setSizeShadow(6)
//                 }, 2000)
//               }}>
//               {' '}
//             </tspan>
//           </text>
//           <text
//             className="cls-1"
//             transform="translate(2539.27 3918.28) rotate(-4.49) scale(1.02 1)">
//             <tspan
//               x="0"
//               y="0"
//               onClick={(e) => {
//                 setTransform(
//                   -e.pageX - contenedor.current?.clientWidth! - (movil.current ? 300 : 1200),
//                   -e.pageY - contenedor.current?.clientHeight! - (movil.current ? 500 : 1500),
//                   6,
//                   2000
//                 )
//                 setTimeout(() => {
//                   setSizeShadow(6)
//                 }, 2000)
//               }}>
//               1
//             </tspan>
//           </text>
//         </g>
//       </svg>
//     </>
//   )
// }

// export default svg
