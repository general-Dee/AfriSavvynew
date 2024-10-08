import Head from "next/head";
import MainHeader from "../components/MainHeader";
import Hero from "../components/Hero";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Whysignup from "../components/Whysignup";
import FAQs from "../components/FAQs";
import Contact from "../components/Contact";
// import Banner from "../components/Banner";
// import ProductFeed from "../components/ProductFeed";

export default function Home({products}) {
  return (
    // <div className="bg-gray-100 h-screen">
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#7FAB0A]">
      <Head>
        <title>SavannaLink</title>
      </Head>

      {/*Header */}
      <MainHeader/>
      {/* Body */}
      <main className="max-w-screen-2xl mx-auto">
        {/* hero */}
          <section id="hero" className="snap-start">
            <Hero />
          </section>

          {/* About */}
          <section id="about" className="snap-center sm:mt-10">
             <About />
          </section>

          {/* Why Signup with us? */}
          <section id='whysignup' className='snap-start'>
            <Whysignup />
          </section>

          {/* Experience */}
          <section id="experience" className="snap-center">
            <Testimonials />
          </section>

          <section id='projects' className='snap-start'>
            <FAQs />
          </section>

          {/* Contact */}
          <section id='contact' className='snap-start'>
            <Contact />
           </section>

          {/* Footer */}
           <a href="#hero">
            <footer className='sticky bottom-5 w-full cursor-pointer '>
              <div className='flex items-center justify-center'>
                <img 
                className='h-12 w-12 md:h-16 md:w-16 rounded-full grayscale hover:grayscale-0 cursor-pointer bg-[#F5F5DC]'
                src="./img/logo.jpg" alt="" />
              </div>
            </footer>
            </a>



          {/* Product feed */}
        {/* <ProductFeed products={products}/> */}
      </main>
    </div>
  );
}

export async function getServerSideProps(Context) {
  const products = await fetch (" https://dummyjson.com/products").then(
    (res) => res.json()
  );

  return { props: {
    products
  }}
}
// export async function getServerSideProps(Context) {
//   const products = await fetch ("http://fakestoreapi.com/products").then(
//     (res) => res.json()
//   );

//   return { props: {
//     products
//   }}
// }
// export async function getServerSideProps(context) {
//   try {
//     const res = await fetch("http://fakestoreapi.com/products");

//     // Check if the response is okay (status code 200-299)
//     if (!res.ok) {
//       throw new Error(`Failed to fetch data. Status: ${res.status}`);
//     }

//     const products = await res.json();

//     return {
//       props: {
//         products,
//       },
//     };
//   } catch (error) {
//     console.error('Error fetching products:', error.message);

//     // Return an empty products array if something goes wrong
//     return {
//       props: {
//         products: [],
//       },
//     };
//   }
// }


// http://fakestoreapi.com/products