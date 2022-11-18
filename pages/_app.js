import "../styles/globals.css";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div className='bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-700 via-zinc-900 to-black min-h-screen text-zinc-50'>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
