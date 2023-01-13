import Image from "next/image"


const features = [


    {
      name: 'Breakfast',
      description: 'The first meal of the day should be memorable. Our breaksfasts make you feel good!',
    },
    {
      name: 'Coffee and Tea',
      description: 'Each cup of coffee is especially brewed to give you the must upbeat feeling once you are done.',
    },
    {
      name: 'Desserts',
      description:
        'There is nothing wrong with treating yourself. Indulge a little.',
    },
    { name: 'Sandwiches', description: 'We serve lunch too! Pop by for one of our tasty family made sandwiches!' },
  ]
  
  export default function Card() {
    return (
      <div className="bg-white px-10 py-16">
        <section aria-labelledby="features-heading" className="relative">
          <div className="aspect-w-3 aspect-h-2 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-16">
            <Image
              src="/images/illustrations/menu.jpg"
              alt=""
              width={1184}
              height={1376}
            />
          </div>
  
          <div className="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 sm:pb-32 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pt-32">
            <div className="lg:col-start-2">
              <h2 id="features-heading" className="font-medium text-gray-500">
                Our Daily Menu
              </h2>
              <p className="mt-4 text-4xl font-bold tracking-tight text-gray-900">The Holiday Cafe</p>
              <p className="mt-4 text-gray-500">
                Every day we receive is a gift. Eat well!
              </p>
  
              <dl className="mt-10 grid grid-cols-1 gap-y-10 gap-x-8 text-sm sm:grid-cols-2">
                {features.map((feature) => (
                  <div key={feature.name}>
                    <dt className="font-medium text-gray-900">{feature.name}</dt>
                    <dd className="mt-2 text-gray-500">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
      </div>
    )
  }
  