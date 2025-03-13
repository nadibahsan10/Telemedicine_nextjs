import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  /* { status: 'ok', method: 'GET' } */
  return (
    <>
      <div className="absolute top-0 w-full">
        <nav className="py-5  mx-auto  w-4/6 container h-[80px]">
          <div className="flex justify-between items-center">
            <img src="./next.svg" height={60} width={100} />
            <div className="flex gap-10 items-center">
              <ul className="flex gap-5 justify-end">
                <li>
                  <Link href="./" className="text-[18px] text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="./" className="text-[18px] text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="./" className="text-[18px] text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="./" className="text-[18px] text-white">
                    Contact Us
                  </Link>
                </li>
              </ul>
              <button className="btn">Login</button>
            </div>
          </div>
        </nav>
      </div>
      <section className="pt-[150px] pb-[150px] bg-linear-to-r from-[#101559] to-[#1965A3] ">
        <div className="container w-4/6 mx-auto">
          <div className="grid grid-cols-2 gap-4">
            <div className=" text-white">
              <h1 className="text-[62px]/25 font-semibold mb-[25px]">
                Codext one of <br /> the best system <br />
                in SAAS.
              </h1>
              <p className="w-96 text-white text-[18px]/8 pb-[35px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <button className="btn">Get Started</button>
            </div>
            <div className=" text-white">
              <Image
                layout="responsive"
                src="/Cover.png"
                width={100}
                height={50}
                alt="Cover Image"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-[150px] ">
        <div className="container w-4/6 mx-auto">
          <div className="grid grid-cols-2 gap-1">
            <img src="/1.png" />
            <div className="mx-auto">
              <h2 className="text-[44px]  font-semibold">
                {data.products[0].title}
              </h2>
              <ul className=" flex flex-col gap-[30px] mt-5">
                <li className="flex items-start gap-3">
                  <img src="./arrow.png" className="pt-1 " />
                  <div>
                    <h4 className="text-3xl ">lorem1</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      vitae velit proin justo, elementum siIn morbi{" "}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <img src="./arrow.png" className="pt-1 " />
                  <div>
                    <h4 className="text-3xl ">lorem1</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      vitae velit proin justo, elementum siIn morbi{" "}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <img src="./arrow.png" className="pt-1 " />
                  <div>
                    <h4 className="text-3xl ">lorem1</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      vitae velit proin justo, elementum siIn morbi{" "}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-[150px] mb-4">
        <div className="container mx-auto w-4/6">
          <h6 className="text-[#1965A3]">What we do</h6>
          <h4 className="text-[30px] font-semibold">
            We provide the Perfect Solution{" "}
            <span className="block">to your business growth</span>
          </h4>
          <div className="grid grid-cols-3 mt-10 gap-x-2">
            <div className="card">
              <img src="/Activity.png" className="mb-4" />
              <h4 className="text-[30px] font-semibold mb-4">
                Grow Your Business
              </h4>
              <p className="text-[18px] mb-[45px] ">
                We help identify the best ways to improve your business
              </p>
              <Link
                className="py-4 px-5 text-[18px] flex gap-x-2 items-center"
                href=""
              >
                Learn More <img src="./vector.png" />
              </Link>
            </div>
            <div className="card">
              <img src="/Heart.png" className="mb-4" />
              <h4 className="text-[30px] font-semibold mb-4">
                Improve brand loyalty
              </h4>
              <p className="text-[18px] mb-[45px] ">
                We help identify the best ways to improve your business
              </p>
              <Link
                className="py-4 px-5 text-[18px] flex gap-x-2 items-center"
                href=""
              >
                Learn More <img src="./vector.png" />
              </Link>
            </div>
            <div className="card">
              <img src="/Work.png" className="mb-4" />
              <h4 className="text-[30px] font-semibold mb-4">
                Improve Business Model
              </h4>
              <p className="text-[18px] mb-[45px] ">
                We help identify the best ways to improve your business
              </p>
              <Link
                className="py-4 px-5 text-[18px] flex gap-x-2 items-center"
                href=""
              >
                Learn More <img src="./vector.png" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[150px]">
        <div className="container mx-auto w-4/6 bg-[rgba(25,101,163,0.06)] px-[251px] py-20">
          <div className="grid grid-cols-4 ">
            <div className="p-10">
              <img src="./project-plan.png" />
              <h6>Completed Project</h6>
              <h2>100 +</h2>
            </div>
            <div className="p-10">
              <img src="./project-plan.png" />
              <h6>Completed Project</h6>
              <h2>100 +</h2>
            </div>
            <div className="p-10">
              <img src="./project-plan.png" />
              <h6>Completed Project</h6>
              <h2>100 +</h2>
            </div>
            <div className="p-10">
              <img src="./project-plan.png" />
              <h6>Completed Project</h6>
              <h2>100 +</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[150px]">
        <div className="container mx-auto">
          <h2 className="text-5xl text-center mb-[30px]">
            Let's see our User's Review
          </h2>
          <p className="w-[670px] mx-auto text-[16px] text-center text-slate-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            scelerisque tellus interdum venenatis auctor et nibh. Rhoncus a, sed
            lobortis nisi.
          </p>

          <div className="grid grid-cols-3 gap-x-[30px] mt-[60px]">
            <div className="px-14 py-12 shadow-2xl rounded-2xl">
              <div className="flex items-start gap-4 mb-5">
                <img src="./qoutation.png" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Blandit elit nunc donec elit iaculis arcu. Quis fe........
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <img src="./Dp.png" />
                <div>
                  <h5 className="text-[20px] font-semibold">Wilson Bergson</h5>
                  <p className="text-[18px] text-slate-500">Ex-patient</p>
                </div>
              </div>
            </div>
            <div className="px-14 py-12 shadow-2xl rounded-2xl">
              <div className="flex items-start gap-4 mb-5">
                <img src="./qoutation.png" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Blandit elit nunc donec elit iaculis arcu. Quis fe........
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <img src="./Dp.png" />
                <div>
                  <h5 className="text-[20px] font-semibold">Wilson Bergson</h5>
                  <p className="text-[18px] text-slate-500">Ex-patient</p>
                </div>
              </div>
            </div>
            <div className="px-14 py-12 shadow-2xl rounded-2xl">
              <div className="flex items-start gap-4 mb-5">
                <img src="./qoutation.png" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Blandit elit nunc donec elit iaculis arcu. Quis fe........
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <img src="./Dp.png" />
                <div>
                  <h5 className="text-[20px] font-semibold">Wilson Bergson</h5>
                  <p className="text-[18px] text-slate-500">Ex-patient</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-[150px]">
        <div className="container mx-auto">
          <h2 className="text-5xl text-center mb-[60px]">
            Lastest insights news
          </h2>
          <div className="grid grid-cols-2  gap-x-20">
            <div>
              <img src="./g1.png" className="rounded-t-[10px] w-full"></img>
              <div className="rounded-b-[10px] border-1 border-[#b4b4b4] p-10">
                <div className="flex gap-x-[60px]  mb-[20px] text-[#919191]">
                  <h6 className="text-[16px] ">Our Creative Team</h6>
                  <p className="text-[14px]">17 June, 2021</p>
                  <p className="text-[14px]">by Stive Smith</p>
                </div>
                <h4 className="text-[22px] mb-5 font-medium text-[#070707]">
                  Running remote offsites and onbordings
                </h4>
                <p className="text-[14px] w-[70%] leading-[24px] mb-[25px] text-[#686868]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Placerat fermentum, enim vel adipiscing non. Lacus, nunc, at
                  et vel tellus dignissim quis.
                </p>
                <button className="btn">Continue</button>
              </div>
            </div>
            <div>
              <img src="./g1.png" className="rounded-t-[10px] w-full"></img>
              <div className="rounded-b-[10px] border-1 border-[#b4b4b4] p-10">
                <div className="flex gap-x-[60px]  mb-[20px] text-[#919191]">
                  <h6 className="text-[16px] ">Our Creative Team</h6>
                  <p className="text-[14px]">17 June, 2021</p>
                  <p className="text-[14px]">by Stive Smith</p>
                </div>
                <h4 className="text-[22px] mb-5 font-medium text-[#070707]">
                  Running remote offsites and onbordings
                </h4>
                <p className="text-[14px] w-[70%] leading-[24px] mb-[25px] text-[#686868]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Placerat fermentum, enim vel adipiscing non. Lacus, nunc, at
                  et vel tellus dignissim quis.
                </p>
                <button className="btn">Continue</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="pt-[100px] pb-[35px] bg-[#051114]">
        <div className="container w-4/6 mx-auto">
          <div className="grid grid-cols-4 text-gray-300 gap-x-20">
            <div>
              <img src="./next.svg" className="mb-[30px]" alt="logo" />
              <p className="mb-[30px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                fugit fugiat totam sunt obcaecati
              </p>
              <img src="./social.png" alt="" />
            </div>
            <div className="mx-auto">
              <h5 className="text-[22px]  text-white font-medium leading-1.5 mb-[30px]">
                Resources
              </h5>

              <ul className="flex flex-col font-normal text-[18px] gap-y-[10px] text-gray-300">
                <li>
                  <Link href="/">Services</Link>
                </li>
                <li>
                  <Link href="/">Pricing</Link>
                </li>
                <li>
                  <Link href="/">Testimonials</Link>
                </li>
                <li>
                  <Link href="/">Blog</Link>
                </li>
              </ul>
            </div>
            <div className="mx-auto">
              <h5 className="text-[22px]  text-white font-medium leading-1.5 mb-[30px]">
                Usefull links
              </h5>
              <ul className="flex flex-col font-normal text-[18px] gap-y-[10px] text-gray-300">
                <li>
                  <Link href="/">Terms of Services</Link>
                </li>
                <li>
                  <Link href="/">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/">Cookie Policy</Link>
                </li>
                <li>
                  <Link href="/">Contact us </Link>
                </li>
              </ul>
            </div>
            <div className="mx-auto">
              <h5 className="text-[22px]  text-white font-medium leading-1.5 mb-[30px]">
                Newsletter
              </h5>
              <p>Sign up and receive the lastest news via email.</p>
              <div className="relative flex mt-[25px]">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="bg-transparent text-white px-[30px] border-r-0 py-[15px] rounded-l-[5px] rounded-r-0 border-1 border-gray-500 placeholder:text-[16px] placeholder:text-gray-300"
                />
                <button className="btn rounded-l-[0px]">Send</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
