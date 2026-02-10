import React from 'react'

const SuccessPopup = ({ videoSrc, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fadeIn p-4">
      <div className="relative bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 rounded-3xl shadow-2xl p-4 md:p-6 max-w-5xl w-full animate-scaleIn border-4 border-pink-300 max-h-[90vh] overflow-y-auto">
        
      
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-pink-500 animate-float-up opacity-70"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                fontSize: `${15 + Math.random() * 20}px`,
                bottom: '-20px'
              }}
            >
              ♥
            </div>
          ))}
        </div>


        <div className="relative z-10">
        
          <div className="text-center mb-4">
            <div className="text-5xl md:text-6xl mb-2 animate-bounce">
              Dear Vishnu
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-purple-800 mb-2">
            Happy  valentine's day My Love 💖
            </h2>
            <p className="text-base md:text-xl text-purple-600 font-semibold">
                  Enoda life-la best surprise neethaan ♥
            </p>
          </div>

          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-4">
            
           
            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-pink-300">
              <video 
                className="w-full h-auto max-h-[400px] object-cover"
                controls 
                autoPlay
                src={videoSrc}
              >
                Your browser does not support the video tag.
              </video>
            </div>


            <div className="flex flex-col justify-center">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 border-2 border-pink-200 h-full flex items-center">
                <div>
                  <p className="text-center text-sm md:text-lg text-gray-700 leading-relaxed mb-4">
                    Every piece you placed was filled with love and care. 
                    <br />
                    Just like this puzzle, you complete my world! 
                  </p>
                  <p className="text-center text-pink-600 font-semibold text-base md:text-xl">
                    I Love You... ♥
                  </p>
                  <div className="text-center mt-6 text-xl">
                 💖  My heart feels safest when it’s with you 💖
                  </div>
                </div>
              </div>
            </div>

          </div>


          <div className="text-center">
            <button
              onClick={onClose}
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 shadow-lg cursor-pointer"
            >
              Close ✨
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuccessPopup