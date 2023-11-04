import Image from 'next/image'
import AestheticsDescription from '../components/Cards/AestheticsDescription'

export default function About() {
    return (
      <main className="mt-6 min-[700px]:mt-12 mx-auto">
        <div className="w-[95%] min-[700px]:w-full max-w-[700px] mx-auto">
          <h2 className="">About Aesthete&apos;s Digest</h2>
        </div>
        <Image className="mt-3 lg:mt-16 w-full h-auto max-w-[700px] mx-auto" src={"/about/keyboard.jpeg"} alt={"About header image"} width={1224} height={564} />

        {/* info section */}
        <section className="w-[95%] min-[700px]:w-full max-w-[700px] mx-auto">
          {/* 'what' section */}
          <div className="flex gap-4 min-[400px]:gap-8 mt-10 lg:mt-32">
            {/* Left Column */}
            <div className="w-1/12 sm:w-1/5 relative"> {/* border-r-2 border-red-500 w-4/5 h-60 my-auto */}
              {/* right-side border */}
              <div className="h-4/5 border-r-2 border-red-500 absolute right-0 top-[10%] bottom-[10%]"></div>
              {/* rotated text */}
              <div className="absolute transform -rotate-90 bottom-1/2 right-0">
                <p className="text-red-500 my_overline">What</p>
              </div>
            </div>
            {/* Right Column */}
            <div className="w-11/12 sm:w-4/5 min-[400px]:pr-4 sm:pr-12">
              <p className="body1">Aesthete&apos;s Digest is devoted to showcasing media that inspires appreciation for aesthetics. From film and games to books and music, Aesthete&apos;s Digest celebrates media that is beautiful, unique, and thought-provoking. Through this site, we aim to highlight the best of what modern culture has to offer, and to inspire others to look at the world around them with fresh eyes, and appreciate the beauty and artistry that can be found in the world around us.</p>
            </div>
          </div>
          {/* 'why' section */}
          <div className="flex gap-4 min-[400px]:gap-8 mt-16 lg:mt-28">
            {/* Left Column */}
            <div className="w-11/12 sm:w-4/5 min-[400px]:pl-4 sm:pl-12">
              <p className="body1">In today&apos;s world, it&apos;s easy to feel overwhelmed by the sheer amount of media available at our fingertips. We want to encourage people to take a step back and find deeper meaning and value in what they watch, read, and listen to. By taking the time to analyze and discuss media, we hope to foster a more enriching and fulfilling relationship with the media we consume. </p>
            </div>
            {/* Right Column */}
            <div className="w-1/12 sm:w-1/5 relative"> {/* border-r-2 border-red-500 w-4/5 h-60 my-auto */}
              {/* right-side border */}
              <div className="h-4/5 border-l-2 border-red-500 absolute left-0 top-[10%] bottom-[10%]"></div>
              {/* rotated text */}
              <div className="absolute transform rotate-90 bottom-1/2 left-0">
                <p className="text-red-500 my_overline">Why</p>
              </div>
            </div>
          </div>
        </section>

        {/* categories section */}
        <section id="aesthetics" className={`mt-10 lg:mt-32 textured-background gradient_background`}> {/* text-lightText */}
          <div className="w-[95%] min-[850px]:w-full max-w-[850px] mx-auto">
            <AestheticsDescription />
          </div>
        </section>
      </main>
    )
  }