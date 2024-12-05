import Header from "./components/Header"
import RegisterForm from "./components/RegisterForm"
import Banner from "./components/Banner"
import Footer from "./components/Footer"

function App() {
  return (
    <main className="flex flex-col items-center justify-center gap-12 font-body pt-16 px-5 mx-auto max-w-96 lg:max-w-128">
      <Header />
      <RegisterForm />
      <Banner />
      <Footer />
    </main>
  )
}

export default App
