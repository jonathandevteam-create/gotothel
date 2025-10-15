"use client";

import React, { useState, useEffect } from "react";
import { Navbar, Footer, InputDemo, TextareaDemo, ButtonDemo, CarouselDemo } from "@/components/index.js";
import localData from "@/localData";
import { useGlobalContext } from "@/context";

const { kurgo, kamado, forGood, detroit, integrationsIcon, insightsIcon, quoteLeftIcon, quoteRightIcon } = localData.svgs;
const {
  mercedes,
  soleilCreative,
  ams,
  parkService,
  brandsImage1,
  brandsImage2,
  brandsImage3,
  sphereImage,
  lighthouseImage,
  islandImage,
  bannerImage,
  jonathanImage,
} = localData.images;

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://gotothel.com";

export default function Template() {
  return (
    <>
      <header className="absolute w-full z-2">
        <Navbar />
      </header>
      <main className="home-page">
        <HeroSection />
        <hr className="border-secondary" />
        <AboutSection />
        <hr className="border-secondary" />
        <BrandsSection />
        <hr className="border-secondary" />
        <WhatWeDoSection />
        <hr className="border-secondary" />
        <Testimonials />
      </main>
    </>
  );
}

const HeroSection = () => {
  const { sendEmail } = useGlobalContext();

  // const sendEmail = (_: any) => {
  //   alert("message sent");
  // };
  const [state, setState] = useState({
    name: "",
    submitted_email: "",
    phone: "",
    description: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <header className="hero min-h-[100vh] pt-[150px] pb-[5rem] sm:pb-[7rem] py-[2rem] ">
      <div className="container ">
        <div className="relative" style={{ backgroundImage: 'url("/assets/images/test.gif")' }}>
          <div
            className={`  
             bg-gradient-to-b from-white/100 via-transparent to-white/100
             before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/100 before:via-transparent/100 before:to-white/100
            absolute top-0 left-0 w-full h-full`}
          ></div>

          <div
            className="absolute inset-0 w-full h-full pointer-events-none
               bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,1)_0%,transparent_70%)] 
               animate-wave"
          ></div>

          <div className="hero-content lg:flex gap-30 items-center relative">
            <h1 className="flex-1 text-[7vw] lg:text-[3.8vw]    mb-[2rem] text-center lg:text-left leading-[1.1] lg:max-w-[500px] 4xl:!max-w-full font-sans font-semibold text-dark ">
              Share Your Vision. <span className="text-orange">Let’s Build</span> It Together.
            </h1>
            <div className="bg-white border mx-auto w-full rounded-md   bg-success max-w-[380px]  py-9 px-6 shadow-lg ">
              <h2 className="text-[0.9rem] lg:text-[1.35rem] font-bold mb-[2rem]  font-sans uppercase leading-[1.2] ">
                Get in Touch
              </h2>
              <form
                className=" text-left"
                id="contact-form-2 "
                action="#/"
                method="POST"
                onSubmit={(e) => {
                  // EXTRA start
                  const form = e.target as any;

                  const name = form.name?.value?.trim();
                  const submittedEmail = form.submitted_email?.value?.trim();
                  const phone = form.phone?.value?.trim();
                  const description = form.description?.value?.trim();
                  const image = form.image?.defaultValue;

                  const CONTENT =
                    (name ? `<p><strong>Name</strong>: ${name}</p>` : "") +
                    (submittedEmail ? `<p><strong>Email</strong>: ${submittedEmail}</p>` : "") +
                    (phone ? `<p><strong>Phone</strong>: ${phone}</p>` : "") +
                    (description ? `<p><strong>Description</strong>: ${description}</p>` : "") +
                    (image ? `<img src="${image}" width='200' style="height:auto;"  />` : "");
                  form.CONTENT.value = CONTENT;
                  // EXTRA end

                  sendEmail({
                    event: e,
                    service: "service_m0znoir",
                    template: "template_u1lzg8d",
                    form: e.target,
                    public_key: "XROQkLsbKgfMPUjh6",
                    setIsLoading: setIsLoading,
                  });
                }}
              >
                <InputDemo
                  placeholder="Jane"
                  className="mb-5"
                  inputClassName="py-[1.2rem] bg-white text-dark"
                  name="name"
                  type="text"
                  label={
                    <div className="flex gap-[1px]">
                      Your Name<div className="text-black font-lora leading-1">*</div>
                    </div>
                  }
                  required={true}
                  value={state.name}
                  callback={(e) => handleOnChange(e)}
                />
                <InputDemo
                  placeholder="jane@company.com"
                  className="mb-5"
                  inputClassName="py-[1.2rem] bg-white text-dark"
                  name="submitted_email"
                  type="text"
                  label={
                    <div className="flex gap-[1px]">
                      Your Email<div className="text-black font-lora leading-1">*</div>
                    </div>
                  }
                  required={true}
                  value={state.submitted_email}
                  callback={(e) => handleOnChange(e)}
                />
                <InputDemo
                  placeholder="‪(999) 999-9999"
                  className="mb-5"
                  inputClassName="py-[1.2rem] bg-white text-dark"
                  name="phone"
                  type="tel"
                  label="Your Phone"
                  value={state.phone}
                  callback={(e) => handleOnChange(e)}
                />

                <TextareaDemo
                  label="Describe your project"
                  placeholder="Your answer"
                  className="mb-5"
                  textareaClassName="py-[0.5rem] min-h-[100px]  bg-white text-dark"
                  name="description"
                  type="text"
                  // required={true}
                  value={state.description}
                  callback={(e) => handleOnChange(e)}
                />

                <input type="text" name="image" defaultValue={`${siteUrl}/assets/images/logo.png`} className="hidden" />
                <input type="text" name="CONTENT" className="hidden" />
                <input type="text" name="to_email" defaultValue="wjonpost@gmail.com" className="hidden" />
                <ButtonDemo disabled={isLoading} text="Submit" className="!mr-auto py-5" variant="destructive" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const AboutSection = () => (
  <section className="what-we-do bg-gray-50" id="about">
    <div className="container ">
      <div className="grid md:grid-cols-[2fr_1fr] gap-y-[20px] gap-x-[10%]">
        <div className="col">
          <div className="about-content max-w-[650px]">
            <div className="flex  items-center justify-center md:justify-start gap-3 text-[1.2rem] md:text-[1.8rem] font-[300] mb-3">
              {integrationsIcon}
              About Thel
            </div>
            <h2 className="text-[1.5rem] max-w-[600px] text-center md:text-left font-semibold md:text-5xl mb-[1.3rem]">
              A Modern Boutique Growth Agency
            </h2>
            <p className="text-center md:text-left text-gray-600 text-lg mb-[0.7rem]"> Thel is a boutique digital marketing consulting agency.</p> 
            <p className="about-description font-medium text-[rgba(0,0,0,0.4)] text-center md:text-left mb-[2rem]">
              Our founder, Jonathan Poston, brings a hands-on approach that ensures every campaign, audit, and insight is executed with
              care and expertise. Whether optimizing visibility through SEO, crafting resonant content, or building comprehensive
              performance frameworks, Thel is your partner in digital excellence.
            </p>

          </div>
        </div>

        <div className="col">
          <div className="what-we-do-image h-0 w-full pt-[110%] relative ">
            <img src={jonathanImage} alt="Jonathan Poston" className="absolute top-0 left-0 w-full h-full object-cover rounded" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const BrandsSection = () => {
  return (
    <section className="brands ">
      <div className="container ">
        {/* <div
          className=" mb-[2rem] border border-secondary pt-5 pb-5 px-5 sm:px-10 rounded-xl 
      
      relative overflow-hidden after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[50%] after:bg-gradient-to-t after:from-white after:to-transparent
      "
        >
          <div className="border border-secondary rounded-lg min-h-[50px] mb-5 flex  gap-5 p-3">
            <div className="border border-secondary-100 rounded-md min-h-[30px]  flex-2"></div>
            <div className="border border-secondary-100 rounded-md min-h-[30px]  flex-1"></div>
          </div>

          <div className="flex flex-col sm:flex-row gap-5">
            <div className="border border-secondary p-3 rounded-lg hidden sm:block">
              <img src={brandsImage1} alt="" />
            </div>
            <div className="border border-secondary p-3 rounded-lg mx-auto">
              <img src={brandsImage2} alt="" />
            </div>
            <div className="border border-secondary p-3 rounded-lg hidden sm:block">
              <img src={brandsImage3} alt="" />
            </div>
          </div>
        </div> */}
        {/* <div className=" mx-auto mb-20">
          <h2 className="flex items-center gap-3 justify-end  text-[1.2rem] md:text-[1.8rem] font-[300] mb-3">
            {integrationsIcon}
            Brands
          </h2>
          <div className="relative">
            <img className="w-full object-center h-[400px] object-cover" src={bannerImage} alt="" />
          </div>
        </div> */}
        <div className="md:flex  overflow-hidden border border-secondary rounded-xl sm:rounded-lg">
          <div className="border-b md:border-b-0  md:border-r border-secondary py-4 text-center md:text-left  min-w-[240px] flex items-center justify-center bg-white relative z-1">
            <h2 className=" contact-title text-[1rem] max-w-[170px]  font-medium">
              Brands <span className="text-orange"> Our Team</span> Has Worked With
            </h2>
          </div>
          <div className="brands-content">
            <div className="w-full">
              <CarouselDemo
                items={[
                  { coverImage: mercedes },
                  { cover: kurgo },
                  { cover: kamado },
                  { cover: forGood },
                  { coverImage: soleilCreative },
                  { coverImage: parkService },
                  { coverImage: ams },
                  { cover: detroit },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhatWeDoSection = () => (
  <section className="what-we-do" id="what-we-do">
    <div className="container ">
      <div className="about-content flex flex-col items-center">
        <div className="flex items-center gap-3 justify-end  text-[1.2rem] md:text-[1.8rem] font-[300] mb-3">
          {insightsIcon}
          What We Do
        </div>
        <h2 className="text-[1.5rem] text-center font-semibold sm:text-5xl mb-[1.3rem]">
          Our Approach at <span className="text-orange">Thel LLC</span>{" "}
        </h2>
        <p className="about-description max-w-[950px] font-medium text-[rgba(0,0,0,0.4)] text-center mb-10">
          Thel LLC is a modern consultancy focused on practical, high-impact improvements. We combine precision marketing,
          operational streamlining, and digital transformation to help brands like yours find their own way forward.
        </p>

        <img className=" max-w-[200px]" src={sphereImage} alt="" />
        {/* <div className="w-full max-w-[70px] border-t border-secondary flex justify-center">
          <div className="w-1 h-[200px] border-l border-secondary "></div>
        </div> */}
      </div>
    </div>
  </section>
);

const Testimonials = () => {
  return (
    <section className="testimonials !pb-[8rem]" id="testimonials">
      <div className="container">
        <div className="testimonials-content bg-neutral-50 rounded-xl px-5 sm:px-3 pt-5 pb-5 relative">
          <div className="">
            <div>
              <div className="max-w-[80px] fill-neutral-200 mb-2">{quoteLeftIcon}</div>
            </div>
            <p className="text-[1rem] sm:text-[1.2rem] text-neutral-500 font-medium leading-[1.7] mb-10 px-3 sm:px-20">
              I can't say enough great things about working with Jonathan! He has made my life so much easier and our business is
              thriving! In the past my husband and I tried to do the marketing ourselves and just ended up feeling stunted and
              burnt out. Enter Jonathan! From the second we started working with him it felt like he actually CARED about our
              business's success and took pride in his work. He always shows up with good ideas, he is very communicative, and
              keeps track of things so I don't have to....
            </p>
            <div className=" mb-2  text-center font-bold text-2xl text-[rgba(0,0,0,0.7)]">— Island Roots Charters</div>
            <div className="flex justify-end ">
              <div className="max-w-[80px] flex-1  fill-neutral-200 mb-2">{quoteRightIcon}</div>
            </div>
          </div>
          <img
            className="max-w-[300px] mx-auto sm:absolute bottom-0  sm:translate-y-[50%] left-[50%] sm:translate-x-[-50%]"
            src={lighthouseImage}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
