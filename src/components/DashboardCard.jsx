// src/components/DashboardCard.jsx

export default function DashboardCard({ title, value, icon }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex items-center space-x-4 hover:shadow-lg transition">
      <div className="text-blue-600">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  );
}
