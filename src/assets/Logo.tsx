// export default function Logo({styles}:{styles: string}) {
//     return (
// <?xml version="1.0" encoding="UTF-8"?>
// <svg width="900" height="900" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
//   <defs>
//     <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
//       <feGaussianBlur stdDeviation="2.5"/>
//     </filter>
//     <style><![CDATA[
//       .navy { fill: #212E58; }
//       .navyDark { fill: #131729; }
//       .lightGray { fill: #A6A8AD; }
//       .white { fill: #FFFFFF; }
//     ]]></style>
//   </defs>

//   <!-- Ground shadow -->
//   <ellipse cx="110" cy="224" rx="70" ry="6" fill="#9FA3A8" opacity="0.45" filter="url(#blur)"/>

//   <!-- Stylized K -->
//   <g id="K" transform="translate(0, 6)">
//     <rect class="navy" x="70" y="42" width="36" height="168"/>
//     <polygon class="navyDark" points="106,88 120,72 120,120 106,136"/>
//     <polygon class="white" points="120,72 200,72 144,128 120,128"/>
//     <polygon class="navy" points="106,146 150,210 206,210 144,146"/>
//     <polygon class="lightGray" points="120,194 140,216 120,216"/>
//     <polygon class="navyDark" points="106,146 120,146 144,170 130,170"/>
//   </g>

//   <!-- KESNEXUS text -->
//   <text x="152" y="120" font-family="Montserrat, Poppins, Arial, sans-serif" font-size="18" font-weight="800" fill="#111">KESNEXUS</text>

// </svg>

//     )
// }


import React from "react";

type KesnexusLogoProps = React.SVGProps<SVGSVGElement> & {
  width?: string | number;
  height?: string | number;
};

const KesnexusLogo: React.FC<KesnexusLogoProps> = ({
  width = 0,
  height = 0,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 300 300"
    width={width}
    height={height}
    {...props}
  >
    <defs>
      <filter id="blur" x="-50%" y="-50%" width="100%" height="100%">
        <feGaussianBlur stdDeviation="2.5" />
      </filter>
    </defs>

    {/* Ground shadow */}
    <ellipse
      cx="110"
      cy="224"
      rx="70"
      ry="6"
      fill="#9FA3A8"
      opacity="0.45"
      filter="url(#blur)"
    />

    {/* Stylized K */}
    <g transform="translate(0, 6)" fill="currentColor">
      <rect x="70" y="42" width="36" height="168" />
      <polygon points="106,88 120,72 120,120 106,136" />
      <polygon points="120,72 200,72 144,128 120,128" />
      <polygon points="106,146 150,210 206,210 144,146" />
      <polygon points="120,194 140,216 120,216" />
      <polygon points="106,146 120,146 144,170 130,170" />
    </g>

    {/* KESNEXUS text */}
    {/* <text
      x="202"
      y="140"
      fontFamily="Montserrat, Poppins, Arial, sans-serif"
      fontSize="40"
      fontWeight="800"
      fill="currentColor"
    >
      NEXUS
    </text> */}
  </svg>
);

export default KesnexusLogo;
