import React from "react";

export default ({ color }) => (
  <svg
    class="lds-equalizer"
    width="100%"
    height="100%"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
  >
    <g transform="rotate(180 50 50)">
      <rect
        ng-attr-x="{{16.666666666666668 - config.width/2}}"
        y="15"
        ng-attr-width="{{config.width}}"
        height="12.3849"
        fill="#ffffff"
        x="10.166666666666668"
        width="13"
      >
        <animate
          attributeName="height"
          calcMode="spline"
          values="50;75;10;50"
          times="0;0.33;0.66;1"
          ng-attr-dur="{{config.speed}}"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
          repeatCount="indefinite"
          begin="-0.8s"
          dur="1"
        />
      </rect>
      <rect
        ng-attr-x="{{33.333333333333336 - config.width/2}}"
        y="15"
        ng-attr-width="{{config.width}}"
        height="68.6091"
        fill="#3beccd"
        x="26.833333333333336"
        width="13"
      >
        <animate
          attributeName="height"
          calcMode="spline"
          values="50;75;10;50"
          times="0;0.33;0.66;1"
          ng-attr-dur="{{config.speed}}"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
          repeatCount="indefinite"
          begin="-0.6s"
          dur="1"
        />
      </rect>
      <rect
        ng-attr-x="{{50 - config.width/2}}"
        y="15"
        ng-attr-width="{{config.width}}"
        height="69.1057"
        fill="#ffffff"
        x="43.5"
        width="13"
      >
        <animate
          attributeName="height"
          calcMode="spline"
          values="50;75;10;50"
          times="0;0.33;0.66;1"
          ng-attr-dur="{{config.speed}}"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
          repeatCount="indefinite"
          begin="-0.4s"
          dur="1"
        />
      </rect>
      <rect
        ng-attr-x="{{66.66666666666667 - config.width/2}}"
        y="15"
        ng-attr-width="{{config.width}}"
        height="50.066"
        fill="#3beccd"
        x="60.16666666666667"
        width="13"
      >
        <animate
          attributeName="height"
          calcMode="spline"
          values="50;75;10;50"
          times="0;0.33;0.66;1"
          ng-attr-dur="{{config.speed}}"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
          repeatCount="indefinite"
          begin="-0.2s"
          dur="1"
        />
      </rect>
      <rect
        ng-attr-x="{{83.33333333333333 - config.width/2}}"
        y="15"
        ng-attr-width="{{config.width}}"
        height="25.5729"
        fill="#ffffff"
        x="76.83333333333333"
        width="13"
      >
        <animate
          attributeName="height"
          calcMode="spline"
          values="50;75;10;50"
          times="0;0.33;0.66;1"
          ng-attr-dur="{{config.speed}}"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
          repeatCount="indefinite"
          begin="0s"
          dur="1"
        />
      </rect>
    </g>
  </svg>
);
