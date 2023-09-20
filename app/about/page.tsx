import Image from 'next/image'
import AestheticsDescription from '../components/Cards/AestheticsDescription'

export default function About() {
    return (
      <main className="mt-6 min-[700px]:mt-12 mx-auto">
        <div className="w-[95%] min-[700px]:w-full max-w-[700px] mx-auto">
          <h2 className="">About the Site</h2>
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
              <p className="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolorum consequuntur exercitationem perferendis quaerat quibusdam eveniet, adipisci totam dolor maxime, laudantium voluptate quae excepturi. Sed, voluptatem numquam? Optio recusandae laborum quidem accusamus a voluptatem eaque veniam deserunt qui quis minus autem, asperiores, aperiam pariatur ea nam sit. Voluptates, hic culpa?</p>
            </div>
          </div>
          {/* 'why' section */}
          <div className="flex gap-4 min-[400px]:gap-8 mt-16 lg:mt-28">
            {/* Left Column */}
            <div className="w-11/12 sm:w-4/5 min-[400px]:pl-4 sm:pl-12">
              <p className="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolorum consequuntur exercitationem perferendis quaerat quibusdam eveniet, adipisci totam dolor maxime, laudantium voluptate quae excepturi. Sed, voluptatem numquam? Optio recusandae laborum quidem accusamus a voluptatem eaque veniam deserunt qui quis minus autem, asperiores, aperiam pariatur ea nam sit. Voluptates, hic culpa?</p>
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
        <section className="mt-10 lg:mt-32 pb-12 bg-primaryPurple text-lightText">
          <div className="w-[95%] min-[700px]:w-full max-w-[700px] mx-auto">
            <AestheticsDescription />
          </div>
        </section>
      </main>
    )
  }