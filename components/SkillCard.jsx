export default function SkillCard() {
  return (
    <div className="card flex-col md:flex-row max-w-md md:max-w-4xl my-8 mx-auto md:mx-6 divide-y-2 md:divide-y-0 md:divide-x-2 divide-gray-300 dark:divide-gray-700">
      <div className="flex flex-col items-center p-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="" width="128pt" height="128pt" viewBox="0 0 512 512" strokeWidth="2" stroke="currentColor" fill="currentColor" strokeLinecap="round" strokeLinejoin="round" aria-labelledby="fullstackTitle fullstackDesc" role="img">
          <title id="fullstackTitle">Full stack icon</title>
          <desc id="fullstackDesc">An icon representing full stack development</desc>
          <path d="M477.858,8.533H34.142C15.317,8.533,0,23.851,0,42.675v281.591c0,4.71,3.823,8.533,8.533,8.533h494.933 c4.71,0,8.533-3.823,8.533-8.533V42.675C512,23.851,496.683,8.533,477.858,8.533z M494.933,315.733H17.067V42.675 c0-9.421,7.663-17.075,17.075-17.075h443.716c9.412,0,17.075,7.654,17.075,17.075V315.733z"/>
          <path d="M503.467,315.733H8.533c-4.71,0-8.533,3.823-8.533,8.533v42.658c0,18.825,15.317,34.142,34.142,34.142h443.716 c18.825,0,34.142-15.317,34.142-34.142v-42.658C512,319.556,508.177,315.733,503.467,315.733z M494.933,366.925 c0,9.421-7.663,17.075-17.075,17.075H34.142c-9.412,0-17.075-7.654-17.075-17.075V332.8h477.867V366.925z"/>
          <path d="M281.6,349.867h-51.2c-4.71,0-8.533,3.823-8.533,8.533s3.823,8.533,8.533,8.533h51.2c4.71,0,8.533-3.823,8.533-8.533 S286.31,349.867,281.6,349.867z"/>
          <path d="M469.333,42.667H42.667c-4.71,0-8.533,3.823-8.533,8.533v273.067c0,4.71,3.823,8.533,8.533,8.533h426.667 c4.71,0,8.533-3.823,8.533-8.533V51.2C477.867,46.49,474.044,42.667,469.333,42.667z M460.8,315.733H51.2v-256h409.6V315.733z"/>
          <path d="M366.933,452.267H145.067c-14.114,0-25.6,11.486-25.6,25.6s11.486,25.6,25.6,25.6h221.867c14.114,0,25.6-11.486,25.6-25.6 S381.047,452.267,366.933,452.267z M366.933,486.4H145.067c-4.71,0-8.533-3.831-8.533-8.533s3.823-8.533,8.533-8.533h221.867 c4.71,0,8.533,3.831,8.533,8.533S371.644,486.4,366.933,486.4z"/>
          <path d="M349.867,452.267c-28.314,0-42.667-20.096-42.667-59.733c0-4.71-3.823-8.533-8.533-8.533h-85.333 c-4.71,0-8.533,3.823-8.533,8.533c0,39.637-14.353,59.733-42.667,59.733c-4.71,0-8.533,3.823-8.533,8.533 c0,4.71,3.823,8.533,8.533,8.533h187.733c4.71,0,8.533-3.823,8.533-8.533C358.4,456.09,354.577,452.267,349.867,452.267z M203.699,452.267c10.505-11.639,16.691-28.971,17.937-51.2h68.736c1.237,22.229,7.424,39.561,17.937,51.2H203.699z"/>
          <path d="M256,76.8c-61.167,0-110.933,49.766-110.933,110.933S194.833,298.667,256,298.667S366.933,248.9,366.933,187.733 S317.167,76.8,256,76.8z M256,281.6c-51.755,0-93.867-42.112-93.867-93.867S204.245,93.867,256,93.867 c51.755,0,93.867,42.112,93.867,93.867S307.755,281.6,256,281.6z"/>
          <path d="M199.799,187.733l19.567-19.567c3.337-3.336,3.337-8.73,0-12.066c-3.328-3.337-8.738-3.337-12.066,0l-25.6,25.6 c-3.337,3.337-3.337,8.73,0,12.066l25.6,25.6c1.664,1.664,3.849,2.5,6.033,2.5c2.185,0,4.369-0.836,6.033-2.5 c3.337-3.337,3.337-8.73,0-12.066L199.799,187.733z"/>
          <path d="M330.3,181.7l-25.6-25.6c-3.328-3.337-8.738-3.337-12.066,0c-3.337,3.337-3.337,8.73,0,12.066l19.567,19.567 L292.634,207.3c-3.337,3.336-3.337,8.73,0,12.066c1.664,1.664,3.849,2.5,6.033,2.5c2.185,0,4.369-0.836,6.033-2.5l25.6-25.6 C333.636,190.43,333.636,185.037,330.3,181.7z"/>
          <path d="M275.763,128.435c-4.446-1.485-9.301,0.93-10.795,5.393l-34.133,102.4c-1.485,4.471,0.93,9.301,5.402,10.795 c0.887,0.299,1.801,0.444,2.697,0.444c3.575,0,6.903-2.261,8.098-5.837l34.133-102.4 C282.65,134.758,280.235,129.929,275.763,128.435z"/>
        </svg>
        <h3 className="mt-6 mb-2">Full Stack</h3>
        <p className="text-base m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className="flex flex-col items-center p-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="" width="128pt" height="128pt" viewBox="0 0 512 512" strokeWidth="2" stroke="currentColor" fill="currentColor" strokeLinecap="round" strokeLinejoin="round" aria-labelledby="mobileTitle mobileDesc" role="img">
          <title id="mobileTitle">Mobile icon</title>
          <desc id="mobileDesc">An icon representing mobile development</desc>
          <path d="m366.183 0h-36.218c-4.136 0-7.488 3.353-7.488 7.488s3.352 7.488 7.488 7.488h36.218c12.631 0 22.908 10.276 22.908 22.908v436.232c0 12.631-10.277 22.908-22.908 22.908h-220.366c-12.631 0-22.908-10.276-22.908-22.908v-436.232c0-12.631 10.277-22.908 22.908-22.908h149.165c4.136 0 7.488-3.353 7.488-7.488 0-4.136-3.352-7.488-7.488-7.488h-149.165c-20.89 0-37.885 16.995-37.885 37.884v436.232c0 20.889 16.995 37.884 37.885 37.884h220.366c20.89 0 37.885-16.995 37.885-37.884v-436.232c0-20.889-16.995-37.884-37.885-37.884z" />
          <path d="m298.261 55.694h-84.523c-1.526 0-2.955-.817-3.729-2.132l-8.093-13.748c-3.454-5.866-9.827-9.51-16.635-9.51h-23.136c-10.645 0-19.304 8.66-19.304 19.304v412.787c0 10.644 8.659 19.304 19.304 19.304h187.71c10.645 0 19.304-8.66 19.304-19.304v-412.789c0-10.644-8.659-19.304-19.304-19.304h-23.136c-6.808 0-13.181 3.644-16.635 9.51l-8.094 13.749c-.773 1.316-2.203 2.133-3.729 2.133zm16.635 5.465 8.093-13.748c.775-1.315 2.203-2.132 3.729-2.132h23.136c2.386 0 4.327 1.941 4.327 4.327v412.787c0 2.386-1.941 4.327-4.327 4.327h-187.71c-2.386 0-4.327-1.941-4.327-4.327v-412.787c0-2.386 1.941-4.327 4.327-4.327h23.136c1.526 0 2.955.817 3.729 2.132l8.092 13.747c3.453 5.868 9.827 9.512 16.636 9.512h84.523c6.81 0 13.185-3.644 16.636-9.511z" />
          <path d="m279.953 45.279c4.136 0 7.488-3.353 7.488-7.488s-3.352-7.488-7.488-7.488h-47.905c-4.136 0-7.488 3.353-7.488 7.488 0 4.136 3.352 7.488 7.488 7.488z" />
          <path d="m219.159 114.503c-19.175 0-34.775 15.601-34.775 34.776v65.749c0 19.175 15.601 34.776 34.775 34.776h73.682c19.175 0 34.775-15.601 34.775-34.776v-65.749c0-19.175-15.601-34.776-34.775-34.776zm93.457 34.776v65.749c0 10.904-8.871 19.776-19.775 19.776h-73.682c-10.904 0-19.775-8.872-19.775-19.776v-65.749c0-10.904 8.871-19.776 19.775-19.776h73.682c10.904 0 19.775 8.872 19.775 19.776z" />
          <path d="m256 146.145c-19.855 0-36.009 16.153-36.009 36.009 0 19.855 16.153 36.008 36.009 36.008s36.009-16.153 36.009-36.008c0-19.856-16.154-36.009-36.009-36.009zm0 57.017c-11.584 0-21.009-9.424-21.009-21.008s9.425-21.009 21.009-21.009 21.009 9.424 21.009 21.009c0 11.584-9.425 21.008-21.009 21.008z" />
          <path d="m188.573 271.783c-6.646 0-12.052 5.406-12.052 12.052v31.414c0 6.646 5.406 12.052 12.052 12.052h134.854c6.646 0 12.052-5.406 12.052-12.052v-31.414c0-6.646-5.406-12.052-12.052-12.052zm131.906 40.517h-128.958v-25.517h128.957v25.517z" />
          <path d="m323.427 341.98h-78.761c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h75.813v25.517h-128.958v-25.517h18.49c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-21.438c-6.646 0-12.052 5.406-12.052 12.052v31.413c0 6.646 5.406 12.052 12.052 12.052h134.854c6.646 0 12.052-5.406 12.052-12.052v-31.413c0-6.646-5.407-12.052-12.052-12.052z" />
        </svg>
        <h3 className="mt-6 mb-2">Mobile</h3>
        <p className="text-base m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className="flex flex-col items-center p-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="" width="128pt" height="128pt" viewBox="0 0 512 512" strokeWidth="2" stroke="currentColor" fill="currentColor" strokeLinecap="round" strokeLinejoin="round" aria-labelledby="devopsTitle devopsDesc" role="img">
          <title id="devopsTitle">DevOps icon</title>
          <desc id="devopsDesc">An icon representing devops development</desc>
          <path d="M328.844,368.733c-5.383-3.235-10.908-6.487-16.433-9.675c1.299-11.07,1.302-22.268,0.006-33.316 c5.546-3.2,11.068-6.45,16.425-9.671c9.02-5.42,12.78-16.856,8.744-26.603c0,0,0,0-0.001-0.001l-11.771-28.418 c-4.037-9.744-14.777-15.175-24.993-12.63c-6.071,1.511-12.274,3.118-18.455,4.776c-6.901-8.732-14.82-16.649-23.563-23.554 c1.658-6.182,3.266-12.388,4.778-18.461c2.545-10.211-2.885-20.955-12.629-24.992l-28.418-11.771 c-9.744-4.038-21.183-0.281-26.605,8.741c-3.229,5.374-6.482,10.899-9.674,16.433c-11.067-1.299-22.263-1.302-33.316-0.007 c-3.202-5.551-6.453-11.074-9.67-16.426c-5.424-9.02-16.86-12.778-26.605-8.741l-28.418,11.771 c-9.742,4.036-15.174,14.781-12.629,24.992c1.515,6.085,3.121,12.289,4.776,18.455c-8.731,6.899-16.649,14.82-23.553,23.563 c-6.196-1.663-12.402-3.269-18.463-4.779c-10.214-2.547-20.956,2.888-24.993,12.631L1.615,289.467 c-4.035,9.745-0.276,21.182,8.742,26.602c5.375,3.23,10.9,6.482,16.433,9.675c-1.298,11.066-1.301,22.262-0.006,33.316 c-5.538,3.195-11.06,6.446-16.429,9.672c-9.018,5.421-12.777,16.857-8.741,26.603l11.772,28.418 c4.036,9.743,14.775,15.176,24.993,12.63c6.064-1.51,12.268-3.116,18.453-4.776c6.901,8.731,14.82,16.647,23.563,23.553 c-1.66,6.189-3.267,12.395-4.778,18.461c-2.545,10.211,2.885,20.956,12.629,24.992l28.419,11.772 c2.64,1.093,5.403,1.615,8.137,1.615c7.362,0,14.514-3.779,18.471-10.355c3.205-5.333,6.456-10.856,9.674-16.432 c11.065,1.297,22.264,1.299,33.316,0.006c3.179,5.512,6.43,11.034,9.67,16.427c5.422,9.02,16.858,12.777,26.605,8.741 l28.418-11.771c9.742-4.036,15.174-14.781,12.629-24.992c-1.503-6.033-3.109-12.237-4.776-18.455 c8.729-6.899,16.648-14.819,23.554-23.562c6.178,1.657,12.384,3.263,18.46,4.777c10.211,2.547,20.956-2.884,24.993-12.63 l11.771-28.419C341.621,385.59,337.862,374.153,328.844,368.733z M305.116,413.834c-5.837-1.462-11.787-3.008-17.703-4.602 c-8.376-2.253-17.215,0.692-22.519,7.507c-6.096,7.83-13.151,14.886-20.968,20.973c-6.807,5.302-9.748,14.138-7.493,22.509 c1.603,5.954,3.148,11.9,4.601,17.696l-26.122,10.819c-3.107-5.184-6.218-10.481-9.259-15.765 c-4.327-7.514-12.655-11.678-21.216-10.618c-9.831,1.221-19.81,1.22-29.654-0.005c-8.585-1.066-16.906,3.098-21.232,10.614 c-3.078,5.344-6.19,10.644-9.263,15.773l-26.122-10.82c1.461-5.827,3.007-11.776,4.603-17.701 c2.255-8.375-0.692-17.215-7.507-22.52c-7.83-6.095-14.885-13.149-20.973-20.965c-5.3-6.809-14.136-9.749-22.51-7.495 c-5.923,1.595-11.87,3.141-17.695,4.601l-10.82-26.121c5.16-3.094,10.459-6.205,15.765-9.26 c7.515-4.327,11.683-12.653,10.619-21.215c-1.223-9.832-1.22-19.81,0.003-29.655c1.068-8.57-3.097-16.905-10.616-21.233 c-5.304-3.054-10.604-6.166-15.772-9.265l10.82-26.121c5.82,1.459,11.768,3.005,17.702,4.602 c8.372,2.256,17.212-0.692,22.52-7.507c6.095-7.83,13.15-14.886,20.965-20.972c6.808-5.301,9.749-14.138,7.494-22.512 c-1.59-5.904-3.136-11.85-4.601-17.694l26.122-10.819c3.084,5.146,6.196,10.444,9.259,15.765 c4.328,7.515,12.663,11.689,21.216,10.618c9.827-1.223,19.804-1.223,29.657,0.005c8.575,1.068,16.905-3.102,21.231-10.617 c3.053-5.304,6.166-10.604,9.262-15.771l26.122,10.819c-1.462,5.833-3.008,11.782-4.603,17.703 c-2.255,8.374,0.692,17.214,7.507,22.519c7.829,6.095,14.885,13.149,20.973,20.965c5.3,6.807,14.133,9.748,22.511,7.494 c5.919-1.594,11.865-3.14,17.694-4.601l10.819,26.121c-5.153,3.089-10.451,6.2-15.765,9.26 c-7.515,4.327-11.684,12.654-10.619,21.216c1.223,9.827,1.221,19.806-0.005,29.657c-1.066,8.571,3.101,16.904,10.617,21.231 c5.296,3.049,10.596,6.161,15.772,9.263L305.116,413.834z" />
          <path d="M241.762,312.511c0,0,0,0-0.001-0.001c-16.48-39.789-62.256-58.752-102.051-42.271 C99.922,286.721,80.958,332.501,97.44,372.29c7.983,19.276,22.997,34.287,42.271,42.272c9.637,3.991,19.763,5.987,29.889,5.987 s20.252-1.996,29.891-5.987C239.279,398.08,258.242,352.301,241.762,312.511z M190.72,393.388c-13.618,5.641-28.617,5.64-42.239,0 c-13.618-5.641-24.225-16.249-29.867-29.868c-11.647-28.114,1.753-60.462,29.868-72.107c6.885-2.852,14.021-4.202,21.047-4.202 c21.667,0,42.265,12.84,51.06,34.07C232.234,349.395,218.834,381.742,190.72,393.388z" />
          <path d="M496.553,100.936c-3.956-0.592-8.019-1.167-12.111-1.713c-2.062-6.857-4.816-13.505-8.214-19.819 c2.504-3.275,4.972-6.556,7.357-9.779c5.295-7.161,4.529-17.317-1.78-23.623l-15.808-15.806 c-6.309-6.31-16.465-7.075-23.624-1.778c-3.234,2.393-6.514,4.86-9.779,7.355c-6.313-3.398-12.96-6.152-19.819-8.215 c-0.547-4.092-1.12-8.155-1.712-12.11C409.746,6.642,402.024,0,393.102,0h-22.356c-8.922,0-16.644,6.642-17.961,15.447 c-0.591,3.953-1.165,8.017-1.712,12.11c-6.859,2.063-13.507,4.817-19.819,8.215c-3.263-2.496-6.545-4.964-9.778-7.355 c-7.161-5.297-17.317-4.532-23.624,1.777l-15.806,15.805c-6.31,6.308-7.077,16.465-1.78,23.627 c2.383,3.222,4.851,6.504,7.354,9.778c-3.396,6.313-6.151,12.96-8.214,19.819c-4.091,0.547-8.155,1.121-12.11,1.713 c-8.807,1.318-15.449,9.039-15.449,17.962v22.355c0,8.922,6.64,16.644,15.447,17.962c3.956,0.592,8.019,1.167,12.111,1.713 c2.063,6.858,4.817,13.505,8.214,19.819c-2.501,3.272-4.969,6.552-7.357,9.779c-5.294,7.159-4.529,17.317,1.78,23.622 l15.808,15.808c6.308,6.31,16.464,7.074,23.624,1.778c3.234-2.391,6.514-4.86,9.778-7.354c6.315,3.398,12.963,6.152,19.82,8.214 c0.545,4.091,1.12,8.155,1.712,12.111c1.318,8.806,9.04,15.448,17.962,15.448h22.356c8.922,0,16.644-6.64,17.961-15.449 c0.591-3.956,1.165-8.019,1.712-12.111c6.858-2.061,13.505-4.817,19.819-8.215c3.263,2.496,6.545,4.964,9.778,7.356 c7.159,5.297,17.317,4.532,23.624-1.777l15.808-15.806c6.309-6.308,7.075-16.465,1.778-23.626 c-2.386-3.226-4.854-6.508-7.354-9.777c3.396-6.313,6.151-12.959,8.214-19.819c4.091-0.547,8.155-1.121,12.11-1.713 c8.807-1.318,15.449-9.039,15.449-17.962v-22.355C512,109.976,505.359,102.254,496.553,100.936z M490.228,138.142 c-3.592,0.521-7.257,1.027-10.934,1.506c-7.273,0.949-13.227,6.111-15.165,13.149c-1.857,6.739-4.552,13.242-8.009,19.328 c-3.611,6.353-3.054,14.215,1.419,20.032c2.255,2.932,4.492,5.883,6.669,8.799l-11.404,11.405 c-2.925-2.183-5.876-4.419-8.802-6.669c-5.814-4.475-13.678-5.028-20.032-1.421c-6.087,3.458-12.59,6.153-19.325,8.01 c-7.042,1.94-12.204,7.894-13.15,15.165c-0.479,3.677-0.984,7.343-1.506,10.935h-16.13c-0.521-3.592-1.026-7.257-1.506-10.931 c-0.949-7.274-6.11-13.228-13.15-15.168c-6.737-1.856-13.238-4.551-19.327-8.009c-6.354-3.61-14.218-3.055-20.031,1.419 c-2.927,2.251-5.876,4.486-8.803,6.669l-11.404-11.405c2.177-2.919,4.413-5.868,6.671-8.803c4.47-5.815,5.027-13.677,1.417-20.03 c-3.457-6.086-6.152-12.59-8.009-19.327c-1.939-7.04-7.892-12.201-15.165-13.15c-3.677-0.48-7.343-0.984-10.935-1.507v-16.128 c3.592-0.521,7.257-1.027,10.934-1.506c7.273-0.949,13.227-6.111,15.165-13.149c1.857-6.738,4.551-13.241,8.009-19.328 c3.611-6.353,3.054-14.216-1.417-20.031c-2.259-2.936-4.495-5.886-6.67-8.8l11.404-11.405c2.925,2.183,5.875,4.419,8.8,6.668 c5.812,4.475,13.675,5.033,20.034,1.422c6.085-3.457,12.589-6.152,19.325-8.01c7.042-1.94,12.204-7.894,13.15-15.165 c0.48-3.677,0.986-7.342,1.507-10.934h16.13c0.521,3.591,1.026,7.256,1.505,10.931c0.949,7.274,6.111,13.228,13.15,15.167 c6.738,1.857,13.242,4.553,19.328,8.01c6.355,3.611,14.218,3.05,20.03-1.42c2.927-2.25,5.876-4.486,8.803-6.669l11.404,11.405 c-2.175,2.915-4.411,5.866-6.67,8.803c-4.471,5.814-5.027,13.676-1.419,20.029c3.457,6.088,6.152,12.592,8.009,19.328 c1.939,7.04,7.892,12.201,15.165,13.15c3.677,0.48,7.343,0.985,10.935,1.507V138.142z" />
          <path d="M381.924,83.675c-25.585,0-46.401,20.815-46.401,46.401c0,25.587,20.815,46.402,46.401,46.402 s46.401-20.815,46.401-46.402C428.325,104.49,407.51,83.675,381.924,83.675z M381.924,155.851 c-14.211,0-25.775-11.563-25.775-25.776c0-14.213,11.563-25.775,25.775-25.775c14.212,0,25.774,11.563,25.775,25.775 C407.699,144.288,396.136,155.851,381.924,155.851z" />
        </svg>
        <h3 className="mt-6 mb-2">DevOps</h3>
        <p className="text-base m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
  )
}
