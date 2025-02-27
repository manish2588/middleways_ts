"use client";

import Image from "next/image";
import brimage from "../../public/images/HomeImage.png";
import Button from "./components/Button";
import ImageSlider from "./components/ImageSlider";
import ImageSlider1 from "./components/ImageSlider2";
import ContactInfo from "./components/ContactInfo";
import VideoGallery from "./components/VideoGallery";
import ImageSlider3 from "./components/ImageSlider3";

const Home: React.FC = () => {
  const images1: string[] = [
    "/images/Client1-removebg-preview.png",
    "/images/Client2-removebg-preview.png",
    "/images/Client3-removebg-preview.png",
    "/images/Client4-removebg-preview.png",
    "/images/Client5-removebg-preview.png",
  ];

  const images2: string[] = [
    "/images/Client1-removebg-preview (1).png",
    "/images/Client2-removebg-preview (1).png",
    "/images/Client3-removebg-preview (1).png",
    "/images/Client4-removebg-preview (1).png",
    "/images/Client6-removebg-preview (1).png",
  ];

  const images3: string[] = [
    "/images/Award1.png",
    "/images/Award2.png",
    "/images/Award3.png",
    "/images/Award4.png",
    "/images/Award1.png",
    "/images/Award2.png",
  ];

  return (
    <main className="mt-24">
      <div className="relative w-full h-[80vh]">
        <Image
          src={brimage}
          alt="Background Image"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-6 mb-10">
          <h1 className="text-white text-5xl font-semibold">
            <span className="block font font-josefinSans">We Are Story Teller</span>
            <span className="block font-josefinSans">At</span>
            <span className="block font-josefinSans">Our Very Essence</span>
          </h1>
          <p className="text-white text-3xl font-josefinSans">We are Local Provider</p>
          <div className="mt-10">
            <Button
              className="bg-black mt-10 text-white border font-serif border-white hover:bg-white hover:text-black hover:border-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-thin text-sm w-full sm:w-auto px-5 py-2 text-center"
              label="KNOW MORE"
              href="/pages/about" // Use href prop for navigation
            />
          </div>
          <div>
            <ImageSlider1 images={images2} />
          </div>
        </div>
      </div>
      <div className="w-full md:w-3/4 lg:w-2/3 mx-auto p-4 rounded-lg mt-6">
        <div className="w-full flex justify-center">
          <h1 className="mb-4 text-3xl font-large text-center font-serif">
            LIGHTS ! CAMERA ! ACTION!
          </h1>
        </div>
        <div className="w-full flex justify-center">
          <h1 className="mb-4 text-3xl font-large text-center font-serif">
            We Are Story Teller At Our Very Essence
          </h1>
        </div>
        <div className="w-full flex justify-center mt-8">
          <h1 className="mb-4 text-5xl font-large font-medium text-center font-josefinSans text-black">
            MIDDLEWAYS FILMS
          </h1>
        </div>
        <div className="w-full flex justify-center">
          <h1 className="mb-2 mt-4 text-2xl font-large text-center font-openSans">
            ONE STOP SOLUTION FOR LINE PRODUCTION AND FIXING IN NEPAL
          </h1>
        </div>
        <p
          className="mb-3 font-thin text-gray-500 dark:text-gray-400 tracking-wide font-openSans"
          style={{ textAlign: "justify" }}
        >
          We are MIDDLEWAYS FILMS, your gateway to exceptional film production.
          Based in Lalitpur, Kathmandu, Nepal, we specialize in crafting
          top-notch Movies, Documentaries, and TV Commercials (TVC). Our
          services are tailored to international filmmakers seeking the
          captivating beauty of Nepal's landscapes. From scripting and research
          to location scouting and permit acquisition, we handle it all. With
          our expertise in logistics, crew and talent management, camera and
          equipment rental, lights, post-production, and comprehensive marketing
          and distribution support, we offer a comprehensive filming package.
          Let our experienced professionals and cutting-edge technology bring
          vision to life seamlessly. At MIDDLEWAYS FILMS, we are committed to
          providing an unforgettable filming experience against the breathtaking
          backdrop of Nepal. Get in touch with us now to elevate your project to
          new heights.
        </p>
        <div className="w-full flex justify-center">
          <Button
            className="font-serif mb-4 bg-transparent text-black border border-black hover:bg-black hover:text-white hover:border-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-thin text-sm w-full sm:w-auto px-5 py-2 text-center"
            label="WHO WE ARE"
            href="/pages/service" // Add appropriate href
          />
        </div>
        <div className="w-full flex justify-center">
          <Button
            className="mb-4 font-serif mt-8 bg-transparent text-black border border-black hover:bg-black hover:text-white hover:border-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-thin text-sm w-full sm:w-auto px-5 py-2 text-center"
            label="GET IN TOUCH"
            href="/pages/contact" // Add appropriate href
          />
        </div>
      </div>
      <div className="p-4 flex flex-col justify-center text-center px-10 mx-20 rounded-md space-y-8 mt-8">
        <h1 className="text-2xl font-semibold mb-4 font-openSans">OUR HAPPY CLIENTS</h1>
        <ImageSlider images={images1} />
      </div>
      <div className="p-4 flex justify-center px-10 mx-20 rounded-md space-y-8 mt-8">
        <h1 className="text-3xl font-semibold font-large mb-4 mx-20 mt-10">
          Movies Awards
        </h1>
        <ImageSlider3 images={images3} />
      </div>
      <div className="mt-10 mb-10 flex flex-col items-center">
        <div>
          <p className="text-2xl underline underline-offset-8 decoration-blue-500 font-semibold">
            GET IN TOUCH
          </p>
        </div>
        <div className="mt-10 mb-10">
          <ContactInfo />
        </div>
      </div>
      <div className="mx-12">
        <VideoGallery />
      </div>
    </main>
  );
}

export default Home;
