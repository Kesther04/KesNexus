import React from "react";

type LogoProps = React.SVGProps<SVGSVGElement> & {
  width?: string | number;
  height?: string | number;
};

const Logo: React.FC<LogoProps> = ({
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

  </svg>
);

export default Logo;
