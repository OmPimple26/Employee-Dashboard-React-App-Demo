function UserCard({ user }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 text-center">

      <img
        src={user.image}
        alt={user.firstName}
        className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-400"
      />

      <h2 className="text-xl font-bold text-gray-800 mb-2">
        {user.firstName} {user.lastName}
      </h2>

      <div className="space-y-1 text-gray-600">

        <p>
          <span className="font-semibold">Age:</span> {user.age}
        </p>

        <p>
          <span className="font-semibold">Gender:</span> {user.gender}
        </p>

        <p className="break-words">
          <span className="font-semibold">Email:</span> {user.email}
        </p>

        <p>
          <span className="font-semibold">Birth Date:</span> {user.birthDate}
        </p>

      </div>

    </div>
  );
}

export default UserCard;