const MovingCloud: React.FC = () => {
    return (
        <><style>
            {`
          @keyframes cloudMove {
            0% { transform: translateX(-10%); }
            100% { transform: translateX(100vw); }
          }
  
          .animate-cloudMove {
            animation: cloudMove 30s linear infinite;
          }
        `}
        </style>
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-40 left-[-50px] w-[200px] h-[60px] bg-white opacity-30 rounded-full blur-2xl animate-cloudMove"></div>
                <div className="absolute top-1/4 left-[10%] w-[250px] h-[70px] bg-white opacity-10 rounded-full blur-2xl animate-cloudMove delay-[2s]"></div>
                <div className="absolute top-1/3 left-[60%] w-[180px] h-[50px] bg-white opacity-10 rounded-full blur-2xl animate-cloudMove delay-[4s]"></div>
                <div className="absolute top-[70%] left-[30%] w-[220px] h-[60px] bg-white opacity-10 rounded-full blur-2xl animate-cloudMove delay-[6s]"></div>
            </div></>
    );
  };

  export default MovingCloud;