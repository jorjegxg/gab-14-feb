import { useState } from "react";

export default function HugCoupon() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-dashed border-pink-300 text-center max-w-sm">
        <h1 className="text-2xl font-bold text-pink-600">🎟️ Cupon Special 🎟️</h1>
        <p className="text-lg mt-4 text-gray-700">Acest cupon îți oferă</p>
        <h2 className="text-3xl font-extrabold text-pink-500 mt-2">Îmbrățișări Nelimitate 🤗</h2>
        <p className="text-sm mt-4 text-gray-500 italic">Valabil pentru totdeauna!</p>
        <div className="mt-6 border-t border-dashed border-pink-300 pt-4">
          <button 
            className="bg-pink-500 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-600 transition"
            onClick={() => setShowPopup(true)}
          >
            Redeem Now
          </button>
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-lg font-bold text-gray-700">Comandă plasata, vei primi o îmbrățișare în cel mai scurt timp posibil.</p>
            <button 
              className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-600 transition"
              onClick={() => setShowPopup(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}