import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserGraduate, FaChalkboardTeacher, FaUserShield } from 'react-icons/fa';

const Home = () => {
  const navigate = useNavigate();

  const handleStudentClick = () => {
    navigate('/StudentDashboard');
  };

  const handleGuideClick = () => {
    navigate('/guide');
  };

  const handleAdminClick = () => {
    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-purple-900 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Decorative background images */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-cover bg-no-repeat opacity-10" style={{ backgroundImage: "url('https://source.unsplash.com/featured/?technology')" }}></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-full bg-cover bg-no-repeat opacity-10" style={{ backgroundImage: "url('https://source.unsplash.com/featured/?coding')" }}></div>

      {/* Title */}
      <h1 className="text-5xl md:text-6xl font-bold text-purple-200 drop-shadow-lg mb-12 z-10">Welcome to Videas</h1>

      {/* Buttons */}
      <div className="flex flex-col space-y-8 items-center z-10">
        <button
          onClick={handleStudentClick}
          className="px-8 py-4 bg-purple-700 text-white rounded-xl shadow-lg hover:bg-purple-800 transition flex items-center space-x-4 transform hover:scale-105"
        >
          <FaUserGraduate className="text-2xl" />
          <span>Student Login</span>
        </button>

        <button
          onClick={handleGuideClick}
          className="px-8 py-4 bg-indigo-700 text-white rounded-xl shadow-lg hover:bg-indigo-800 transition flex items-center space-x-4 transform hover:scale-105"
        >
          <FaChalkboardTeacher className="text-2xl" />
          <span>Guide Login</span>
        </button>

        <button
          onClick={handleAdminClick}
          className="px-8 py-4 bg-blue-700 text-white rounded-xl shadow-lg hover:bg-blue-800 transition flex items-center space-x-4 transform hover:scale-105"
        >
          <FaUserShield className="text-2xl" />
          <span>Admin Login</span>
        </button>
      </div>

      {/* Footer or additional engaging content */}
      <div className="absolute bottom-4 text-center text-purple-300 text-sm z-10">
        <p>&copy; 2024 Videas. All rights reserved.</p>
        <p>Empowering innovation and collaboration through technology.</p>
      </div>
    </div>
  );
};

export default Home;
