import StudentProfile from "./components/StudentProfile";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-purple-600 to-indigo-700 px-6 py-16">

      {/* Heading */}
      <div className="mb-14 text-center">
        <h1 className="text-5xl font-extrabold tracking-wide text-white drop-shadow-lg">
          Student Profile
        </h1>

        <p className="mt-3 text-lg text-purple-100">
          Student Information
        </p>

        <div className="mx-auto mt-5 h-1 w-32 rounded-full bg-white/80"></div>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-12">

        <StudentProfile
          name="Hiya Jain"
          age="19"
          course="BCA Hons"
          college="Ganpat University"
        />

        <StudentProfile
          name="Priya Sharma"
          age="20"
          course="BCA Hons"
          college="Ganpat University"
        />

      </div>

    </div>
  );
}

export default App;