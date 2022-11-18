import Link from "next/link";

export default function Navbar() {
  return (
    <main className='bg-none   md:pt-5 font-CircularMedium tracking-wide'>
      <section className='px-3    md:px-5  lg:max-w-7xl lg:mx-auto '>
        <nav className='flex justify-between   '>
          <div className='grid place-items-center'>
            <div className='pt-8 '>
              <div class='h-9 w-9 fill-white hover:fill-white cursor-pointer z-50 transition-all duration-300'>
                <svg viewBox='0 0 39 38' xmlns='http://www.w3.org/2000/svg'>
                  <defs>
                    <linearGradient
                      id='grad1'
                      x1='0%'
                      y1='0%'
                      x2='100%'
                      y2='0%'
                    >
                      <stop
                        offset='0%'
                        style={{
                          stopColor: "blue",
                          stopOpacity: "1",
                        }}
                      />
                      <stop
                        offset='100%'
                        style={{
                          stopColor: "aquamarine",
                          stopOpacity: "1",
                        }}
                      />
                    </linearGradient>
                  </defs>
                  <path
                    fill='url(#grad1)'
                    d='M38.862 9.592a1.78 1.78 0 00-.883-1.532L24.563.275a2.003 2.003 0 00-2.025 0 2.008 2.008 0 00-1.01 1.752l-.01 13.34v.824l-.01 12.542c0 1.13-.83 2.09-1.886 2.189a2.054 2.054 0 01-1.602-.538 2.097 2.097 0 01-.68-1.55l.012-14.856a1.79 1.79 0 00-.874-1.532L2.654 4.448a1.732 1.732 0 00-1.758 0 1.745 1.745 0 00-.884 1.525L0 24.119a5.967 5.967 0 002.948 5.132l13.528 7.832c.047.027.094.05.14.074v.007l.201.1s.005 0 .008.002h.002l.503.228v-.015a5.864 5.864 0 002.089.39 5.88 5.88 0 002.948-.791l13.527-7.807a5.971 5.971 0 002.634-3.23l.02.012.119-.456v-.005l.067-.257-.015-.008c.08-.386.131-.78.131-1.18l.01-14.555h.002z'
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <ul className='flex items-center pt-8'>
            <li className='hover:scale-105 transition-all md:mx-2'>
              <Link
                className='font-extrabold font-FredokaOne bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 rounded-full text-lg px-5  py-3 cursor-pointer text-black '
                href={"/identity"}
              >
                IDENTITY
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </main>
  );
}
